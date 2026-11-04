"use strict";
const text=(id,value)=>document.getElementById(id).textContent=value;
const map=L.map("map",{zoomControl:false}).setView([30,25],3);L.control.zoom({position:"topright"}).addTo(map);
const streetLayer=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
new ResizeObserver(()=>document.documentElement.style.setProperty("--map-controls-top",(document.querySelector("header").getBoundingClientRect().bottom+12)+"px")).observe(document.querySelector("header"));
let marker=null,following=true,lastTs=0,lastSeq=0,lastFix=0,lastGps=0,isPaused=false,ended=false,expires=0,queue=Promise.resolve(),pending=0,points=[],clients=[],receivedTrack=[];
const line=L.polyline([],{color:"#54d8b0",weight:5}).addTo(map);
map.on("dragstart",()=>following=false);document.getElementById("follow").onclick=()=>{following=true;if(marker)map.setView(marker.getLatLng(),16);if(window.syncLive3d)window.syncLive3d();};
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const pace=v=>{if(!(v>0))return "—";const s=Math.round(1000/v);return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")+" /km";};
const finite=(v,min,max)=>typeof v==="number"&&Number.isFinite(v)&&v>=min&&v<=max;
function filteredTrack(tail,now){
 if(!Array.isArray(tail)||!tail.length||tail.length>48)return false;
 let previous=0;
 for(const p of tail){if(!Array.isArray(p)||p.length!==4||!finite(p[0],-85,85)||!finite(p[1],-180,180)||!Number.isSafeInteger(p[2])||p[2]<=previous||p[2]>now+120000||typeof p[3]!=="boolean")return false;previous=p[2];}
 const from=tail[0][2];receivedTrack=receivedTrack.filter(p=>p[2]<from).concat(tail).slice(-10000);
 points=[];previous=0;
 for(const p of receivedTrack){if(!points.length||p[3]||p[2]-previous>30000)points.push([]);points[points.length-1].push([p[0],p[1]]);previous=p[2];}
 line.setLatLngs(points);return true;
}
async function init(){
 const hash=window.liveFragment;delete window.liveFragment;
 if(!/^f2:[a-f0-9]{32}:[a-f0-9]{32}$/.test(hash||"")){text("status","Link mancante o non valido");return;}
 if(!crypto.subtle){text("status","Apri il link in un browser HTTPS aggiornato");return;}
 const [,channel,secret]=hash.split(":");
 let routeSeq=0,routeTs=0,cachedRoute=null,latestPosition=null;
 function showRoute(){if(!latestPosition)return;const p={...latestPosition};if(cachedRoute&&cachedRoute.routeVersion===p.routeVersion)p.planned=cachedRoute.planned;if(window.updateLivePlanned)window.updateLivePlanned(p);if(window.syncLive3d)window.syncLive3d();}
 const key=await crypto.subtle.importKey("raw",Uint8Array.from(secret.match(/../g),h=>parseInt(h,16)),"AES-GCM",false,["decrypt"]);
 async function accept(raw){
  if(!raw||raw.length>65536||ended)return;
  try{
   const envelope=JSON.parse(raw);if(envelope.v!==1)return;
   const iv=bytes(envelope.iv);if(iv.length!==12)return;
   const clear=await crypto.subtle.decrypt({name:"AES-GCM",iv,additionalData:new TextEncoder().encode(channel)},key,bytes(envelope.data));
   const p=JSON.parse(new TextDecoder().decode(clear)),now=Date.now();
   if(p.channel!==channel||!Number.isSafeInteger(p.seq)||p.seq<=(p.kind==="route"?routeSeq:lastSeq)||!Number.isSafeInteger(p.ts)||p.ts<=(p.kind==="route"?routeTs:lastTs)||p.ts>now+120000||!finite(p.expires,now,now+13*3600000))return;
   if(p.kind==="route"){
    if(typeof p.planned!=="string"||p.planned.length>24000||!/^([a-f0-9]{64})$/.test(p.routeVersion||""))return;
    const digest=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(p.planned))),b=>b.toString(16).padStart(2,"0")).join("");if(digest!==p.routeVersion)return;
    routeTs=p.ts;routeSeq=p.seq;cachedRoute=p;showRoute();return;
   }
   lastTs=p.ts;lastSeq=p.seq;expires=p.expires;
   if(p.kind==="waiting"){text("status","In attesa della prima posizione");return;}
   if(p.ended===true){ended=true;text("status","Attività terminata");clients.forEach(c=>{try{c.disconnect();}catch(_){}});return;}
   latestPosition=p;showRoute();
   text("mode",({trekking:"Trekking",bicycle:"Bicicletta",running:"Corsa",walking:"Camminata"})[p.mode]||"Attività");
   const run=p.mode==="running";text("speedLabel",run?"Passo attuale":"Velocità");text("averageLabel",run?"Passo medio":"Velocità media");
   text("speed",finite(p.speed,0,100)?run?pace(p.speed):(p.speed*3.6).toFixed(1)+" km/h":"—");
   text("average",finite(p.average,0,100)?run?pace(p.average):(p.average*3.6).toFixed(1)+" km/h":"—");
   text("altitude",finite(p.altitude,-500,10000)?Math.round(p.altitude)+" m":"—");
   text("distance",finite(p.distance,0,1e7)?(p.distance/1000).toFixed(2)+" km":"—");
   text("elapsed",finite(p.elapsed,0,1e9)?Math.floor(p.elapsed/3600000)+"h "+Math.floor(p.elapsed/60000)%60+"m":"—");
   text("movingTime",finite(p.moving,0,1e9)?"Tempo in movimento: "+Math.floor(p.moving/3600000)+"h "+Math.floor(p.moving/60000)%60+"m":"");
   text("battery",finite(p.battery,0,100)?Math.round(p.battery)+"%":"—");
   text("terrainMetric",finite(p.ascent,0,50000)?"Salita D+ "+Math.round(p.ascent)+" m":"");
   isPaused=p.paused===true;
   if(finite(p.gpsTime,0,now+120000))lastGps=p.gpsTime;
   const filtered=filteredTrack(p.track,now);
   if(finite(p.lat,-85,85)&&finite(p.lon,-180,180)&&finite(p.fixTime,0,now+120000)&&p.fixTime>lastFix){
    if(!filtered&&lastFix&&p.fixTime-lastFix>30000)points.push([]);lastFix=p.fixTime;
    const ll=[p.lat,p.lon];if(!marker)marker=L.circleMarker(ll,{radius:9,color:"white",weight:3,fillColor:"#1780df",fillOpacity:1}).addTo(map);else marker.setLatLng(ll);
    if(!filtered&&!Array.isArray(p.track)){if(!points.length)points.push([]);points[points.length-1].push(ll);if(points.reduce((s,a)=>s+a.length,0)>10000){points[0].shift();if(!points[0].length)points.shift();}line.setLatLngs(points);}
    if(following)map.setView(ll,map.getZoom()<12?16:map.getZoom());
   }
   if(window.syncLive3d)window.syncLive3d();
   text("status",p.paused?"In pausa":"Posizione ricevuta");updateFreshness();
  }catch(_){/* Invalid or unauthenticated packets do not change UI state. */}
 }
 const transport=await window.listenFirebaseLive(channel,raw=>{
  if(raw&&raw.length<=65536&&pending<16){pending++;queue=queue.then(()=>accept(raw)).finally(()=>pending--);}
 },permanent=>{if(!ended){if(permanent)ended=true;text("status",permanent?"Sessione terminata, scaduta o non disponibile":"Collegamento interrotto · nuovo tentativo in corso");}});
 clients.push(transport);if(ended)transport.disconnect();
 text("status","In attesa della prima posizione");
}
function updateFreshness(){
 if(ended)return;
 if(expires&&Date.now()>expires){ended=true;text("status","Sessione scaduta");clients.forEach(c=>{try{c.disconnect();}catch(_){}});return;}
 if(lastGps||lastFix){const seconds=Math.max(0,Math.floor((Date.now()-(lastGps||lastFix))/1000));text("updated","Ultimo GPS affidabile: "+seconds+" secondi fa");if(seconds>20&&!isPaused)text("status","Posizione non aggiornata · in attesa di GPS affidabile");}
}
setInterval(updateFreshness,1000);init().catch(()=>text("status","Collegamento non disponibile"));

document.getElementById("collapseStats").onclick=function(){const compact=document.querySelector(".panel").classList.toggle("compact");this.setAttribute("aria-expanded",String(!compact));this.setAttribute("aria-label",compact?"Mostra statistiche":"Riduci statistiche");};
