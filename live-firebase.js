"use strict";
// Each viewer keeps its anonymous credentials in memory only. The share key never leaves the browser.
window.listenFirebaseLive=async function(channel,onPacket,onUnavailable){
 const config=await fetch('firebase-live.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('config');return r.json();});
 const base='https://traccialto-default-rtdb.europe-west1.firebasedatabase.app';
 if(config.databaseURL!==base)throw Error('database');
 let closed=false,source=null,retry=null,refreshTimer=null,watchdog=null,refresh=null,token=null,state={},backoff=1500,lastRoute=null,lastLatest=null;
 let lastEventAt=Date.now(),lastSseAt=Date.now(),polling=false,lastTouchPollAt=0;
 async function authenticate(){
  const response=await fetch(refresh?'https://securetoken.googleapis.com/v1/token?key='+encodeURIComponent(config.apiKey):'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+encodeURIComponent(config.apiKey),{
   method:'POST',headers:{'Content-Type':refresh?'application/x-www-form-urlencoded':'application/json'},
   body:refresh?'grant_type=refresh_token&refresh_token='+encodeURIComponent(refresh):JSON.stringify({returnSecureToken:true}),signal:AbortSignal.timeout(10000)
  });
  if(!response.ok){if(refresh&&(response.status===400||response.status===401)){refresh=null;return authenticate();}throw Error('auth');}
  const value=await response.json();token=value.idToken||value.id_token;refresh=value.refreshToken||value.refresh_token;
  if(!token||!refresh)throw Error('auth');
 }
 function applyData(data,patch){
  if(!data||typeof data!=='object')return false;
  state=patch?Object.assign({},state,data):Object.assign({},data);
  let changed=false;
  // Geometry is independently authenticated before telemetry uses its revision.
  if(typeof state.route==='string'&&state.route!==lastRoute){lastRoute=state.route;onPacket(state.route);changed=true;}
  if(typeof state.latest==='string'&&state.latest!==lastLatest){lastLatest=state.latest;onPacket(state.latest);changed=true;}
  if(changed)lastEventAt=Date.now();
  backoff=1500;
  return changed;
 }
 function stop(){
  closed=true;if(source)source.close();source=null;
  clearTimeout(retry);clearTimeout(refreshTimer);clearInterval(watchdog);
  window.removeEventListener('online',onWake);window.removeEventListener('focus',onWake);
  document.removeEventListener('visibilitychange',onVisibility);document.removeEventListener('pointerdown',onTouch,{passive:true});
  token=null;refresh=null;state={};
 }
 function reconnect(immediate){
  if(closed)return;
  if(source){try{source.close();}catch(_){}source=null;}
  clearTimeout(retry);
  if(immediate){backoff=1500;connect();return;}
  onUnavailable();
  retry=setTimeout(connect,backoff);
  backoff=Math.min(Math.round(backoff*1.6),5000);
 }
 function receive(event,patch){
  if(closed||!event||!event.data||event.data.length>100000)return;
  lastSseAt=Date.now();
  try{
   const p=JSON.parse(event.data),path=p.path;
   if(path==='/')applyData(p.data||{},patch);
   else if(/^\/(latest|route|owner|expiresAt|updatedAt|ended)$/.test(path))applyData({[path.slice(1)]:p.data},true);
  }catch(_){/* A malformed server event cannot update the map. */}
 }
 async function pollNow(restartIfStale){
  if(closed||polling)return;
  polling=true;
  try{
   if(!token)await authenticate();
   if(closed)return;
   const r=await fetch(base+'/live/'+channel+'.json?auth='+encodeURIComponent(token),{cache:'no-store',signal:AbortSignal.timeout(7000)});
   if(r.status===401||r.status===403){token=null;reconnect(true);return;}
   if(!r.ok)return;
   const data=await r.json();
   if(data&&typeof data==='object'){
    const hadNew=applyData(data,false);
    if(hadNew&&restartIfStale&&Date.now()-lastSseAt>7000){
     openStream();
    }
   }
  }catch(_){}finally{polling=false;}
 }
 function openStream(){
  if(closed||!token)return;
  if(source){try{source.close();}catch(_){}source=null;}
  lastSseAt=Date.now();
  source=new EventSource(base+'/live/'+channel+'.json?auth='+encodeURIComponent(token));
  source.onopen=()=>{lastSseAt=Date.now();backoff=1500;};
  source.addEventListener('put',e=>receive(e,false));
  source.addEventListener('patch',e=>receive(e,true));
  source.addEventListener('keep-alive',()=>{lastSseAt=Date.now();});
  source.addEventListener('cancel',()=>{stop();onUnavailable(true);});
  source.addEventListener('auth_revoked',()=>{token=null;reconnect(true);});
  source.onerror=()=>{if(!closed){pollNow(false);reconnect(false);}};
 }
 async function connect(){
  if(closed)return;
  clearTimeout(retry);
  try{
   if(!token)await authenticate();
   if(closed)return;
   openStream();
   pollNow(false);
   clearTimeout(refreshTimer);
   refreshTimer=setTimeout(()=>{token=null;reconnect(true);},48*60*1000);
  }catch(_){reconnect(false);}
 }
 function onWake(){
  if(closed)return;
  backoff=1500;
  pollNow(true);
  if(!source||source.readyState===2||Date.now()-lastSseAt>12000)connect();
 }
 function onVisibility(){
  if(document.visibilityState==='visible')onWake();
 }
 function onTouch(){
  const now=Date.now();
  if(now-lastTouchPollAt<2500)return;
  lastTouchPollAt=now;
  if(now-lastEventAt>3000||!source||source.readyState===2)onWake();
 }
 window.addEventListener('online',onWake);
 window.addEventListener('focus',onWake);
 document.addEventListener('visibilitychange',onVisibility);
 document.addEventListener('pointerdown',onTouch,{passive:true});
 watchdog=setInterval(()=>{
  if(closed||document.visibilityState==='hidden')return;
  const now=Date.now();
  if(now-lastEventAt>=5500)pollNow(true);
  if(now-lastSseAt>=18000&&token)openStream();
 },3500);
 await connect();return {disconnect:stop,poll:()=>pollNow(true)};
};
