"use strict";
const satelliteUrl='https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg';
const satelliteCredit='© <a href="https://maps.eox.at/">EOX</a> / EOxCloudless · Copernicus Sentinel modificato 2024 · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>';
const satelliteLayer=L.tileLayer(satelliteUrl,{maxNativeZoom:14,maxZoom:19,attribution:satelliteCredit});
const plannedLine=L.polyline([],{color:'#3589df',weight:5,opacity:.9}).addTo(map);
let plannedCoordinates=[],plannedEncoded='',live3d=null,live3dReady=false,mapMode='streets',libraryLoading=null;
function decodeLiveRoute(encoded){
 if(typeof encoded!=='string'||encoded.length>24000)throw Error('Invalid route');
 let i=0,lat=0,lon=0;const result=[];
 const read=()=>{let n=0,shift=0,b;do{if(i>=encoded.length||shift>30)throw Error('Invalid polyline');b=encoded.charCodeAt(i++)-63;if(b<0||b>63)throw Error('Invalid polyline');n|=(b&31)<<shift;shift+=5;}while(b>=32);return n&1?~(n>>>1):n>>>1;};
 while(i<encoded.length){lat+=read();lon+=read();if(Math.abs(lat)>8500000||Math.abs(lon)>18000000||result.length>=2000)throw Error('Invalid coordinate');result.push([lat/1e5,lon/1e5]);}return result;
}
window.updateLivePlanned=p=>{
 if(typeof p.planned==='string'){
  try{if(p.planned!==plannedEncoded){const coords=decodeLiveRoute(p.planned);plannedCoordinates=coords;plannedEncoded=p.planned;plannedLine.setLatLngs(coords);line.setLatLngs([]);}}
  catch(_){return;}
  document.getElementById('routeProgress').hidden=false;
  const valid=finite(p.progress,0,100);text('progressValue',valid?'Avanzamento · '+Math.round(p.progress)+'%':'Percorso previsto · in attesa di una posizione affidabile');
  const bar=document.getElementById('progressBar');if(valid)bar.value=p.progress;else bar.removeAttribute('value');
 }else if(!p.routeVersion){plannedCoordinates=[];plannedEncoded='';plannedLine.setLatLngs([]);document.getElementById('routeProgress').hidden=true;}
};
function geoLines(lines){return {type:'Feature',properties:{},geometry:{type:'MultiLineString',coordinates:lines.filter(x=>x.length>1).map(a=>a.map(p=>[p[1],p[0]]))}};}
window.syncLive3d=()=>{
 if(!live3dReady)return;
 live3d.getSource('planned').setData(geoLines([plannedCoordinates]));live3d.getSource('actual').setData(geoLines(plannedCoordinates.length?[]:points));
 if(marker){const ll=marker.getLatLng();live3d.getSource('position').setData({type:'Feature',properties:{},geometry:{type:'Point',coordinates:[ll.lng,ll.lat]}});if(following&&mapMode==='3d')live3d.easeTo({center:[ll.lng,ll.lat],duration:700});}
};
function load3dLibrary(){
 if(libraryLoading)return libraryLoading;
 libraryLoading=new Promise((resolve,reject)=>{const css=document.createElement('link');css.rel='stylesheet';css.href='assets/live/maplibre-gl.css';document.head.append(css);const js=document.createElement('script');js.src='assets/live/maplibre-gl.js';js.onload=resolve;js.onerror=()=>{libraryLoading=null;reject(Error('3D non disponibile'));};document.head.append(js);});return libraryLoading;
}
async function selectLiveMap(mode){
 mapMode=mode;document.querySelectorAll('[data-map]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.map===mode)));
 text('mapNotice',mode==='streets'?'':'Satellite globale: il dettaglio varia per zona.');
 if(mode!=='3d'){
  if(live3d){const c=live3d.getCenter();map.setView([c.lat,c.lng],live3d.getZoom(),{animate:false});}
  document.getElementById('map3d').hidden=true;document.getElementById('map').hidden=false;map.invalidateSize();
  if(mode==='satellite'){map.removeLayer(streetLayer);satelliteLayer.addTo(map);}else{map.removeLayer(satelliteLayer);streetLayer.addTo(map);}return;
 }
 try{
  text('mapNotice','Caricamento satellite e rilievi 3D…');await load3dLibrary();if(mapMode!=='3d')return;
  const host=document.getElementById('map3d');host.hidden=false;
  if(!live3d){
   const c=map.getCenter();live3d=new maplibregl.Map({container:host,center:[c.lng,c.lat],zoom:Math.min(map.getZoom(),16),pitch:55,maxPitch:75,style:{version:8,sources:{satellite:{type:'raster',tiles:[satelliteUrl],tileSize:256,maxzoom:14,attribution:satelliteCredit},terrain:{type:'raster-dem',url:'https://tiles.mapterhorn.com/tilejson.json',attribution:'<a href="https://mapterhorn.com/attribution/">Terreno © Mapterhorn e fonti</a>'}},layers:[{id:'background',type:'background',paint:{'background-color':'#233b32'}},{id:'satellite',type:'raster',source:'satellite'}]},terrain:{source:'terrain',exaggeration:1}});
   live3d.addControl(new maplibregl.NavigationControl(),'top-right');live3d.touchZoomRotate.enable();live3d.touchPitch.enable();live3d.on('dragstart',()=>following=false);
   live3d.on('error',()=>{if(mapMode==='3d')text('mapNotice','Alcuni dati 3D non sono disponibili. Puoi tornare alla mappa.');});
   live3d.on('load',()=>{
    live3d.setTerrain({source:'terrain',exaggeration:1});
    for(const [id,color] of [['planned','#3589df'],['actual','#54d8b0']]){live3d.addSource(id,{type:'geojson',data:geoLines([])});live3d.addLayer({id:id+'-halo',type:'line',source:id,paint:{'line-color':'#14332b','line-width':8}});live3d.addLayer({id,type:'line',source:id,paint:{'line-color':color,'line-width':5},layout:{'line-cap':'round','line-join':'round'}});}
    live3d.addSource('position',{type:'geojson',data:{type:'FeatureCollection',features:[]}});live3d.addLayer({id:'position',type:'circle',source:'position',paint:{'circle-radius':8,'circle-color':'#1780df','circle-stroke-color':'white','circle-stroke-width':3}});
    live3dReady=true;syncLive3d();if(mapMode==='3d'){document.getElementById('map').hidden=true;text('mapNotice','Trascina per esplorare · due dita per ruotare e inclinare. Satellite: dettaglio variabile.');}
   });
  }else{const c=map.getCenter();live3d.resize();live3d.jumpTo({center:[c.lng,c.lat],zoom:Math.min(map.getZoom(),16)});if(live3dReady){document.getElementById('map').hidden=true;syncLive3d();}}
 }catch(_){text('mapNotice','Il 3D non è supportato da questo browser.');mapMode='satellite';await selectLiveMap('satellite');}
}
document.querySelectorAll('[data-map]').forEach(b=>b.onclick=()=>selectLiveMap(b.dataset.map));
window.setLiveMapModeVisibility=function(activityMode){
 const isTrekking=(activityMode==='trekking');
 const nav=document.getElementById('mapModes');
 if(nav)nav.hidden=!isTrekking;
 if(!isTrekking&&mapMode!=='streets'){
  selectLiveMap('streets');
 }
};
