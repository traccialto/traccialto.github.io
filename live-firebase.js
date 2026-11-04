"use strict";
// Each viewer keeps its anonymous credentials in memory only. The share key never leaves the browser.
window.listenFirebaseLive=async function(channel,onPacket,onUnavailable){
 const config=await fetch('firebase-live.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('config');return r.json();});
 const base='https://traccialto-default-rtdb.europe-west1.firebasedatabase.app';
 if(config.databaseURL!==base)throw Error('database');
 let closed=false,source=null,retry=null,refreshTimer=null,refresh=null,token=null,state={},backoff=2000,lastRoute=null,lastLatest=null;
 async function authenticate(){
  const response=await fetch(refresh?'https://securetoken.googleapis.com/v1/token?key='+encodeURIComponent(config.apiKey):'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+encodeURIComponent(config.apiKey),{
   method:'POST',headers:{'Content-Type':refresh?'application/x-www-form-urlencoded':'application/json'},
   body:refresh?'grant_type=refresh_token&refresh_token='+encodeURIComponent(refresh):JSON.stringify({returnSecureToken:true}),signal:AbortSignal.timeout(12000)
  });
  if(!response.ok)throw Error('auth');
  const value=await response.json();token=value.idToken||value.id_token;refresh=value.refreshToken||value.refresh_token;
  if(!token||!refresh)throw Error('auth');
 }
 function stop(){closed=true;if(source)source.close();clearTimeout(retry);clearTimeout(refreshTimer);token=null;refresh=null;state={};}
 function reconnect(){if(closed)return;if(source)source.close();clearTimeout(retry);onUnavailable();retry=setTimeout(connect,backoff);backoff=Math.min(backoff*2,30000);}
 function receive(event,patch){
  if(closed||event.data.length>100000)return;
  try{
   const p=JSON.parse(event.data),path=p.path;
   if(path==='/')state=patch?Object.assign({},state,p.data||{}):(p.data||{});
   else if(/^\/(latest|route|owner|expiresAt|updatedAt|ended)$/.test(path))state[path.slice(1)]=p.data;
   else return;
   // Geometry is independently authenticated before telemetry uses its revision.
   if(typeof state.route==='string'&&state.route!==lastRoute){lastRoute=state.route;onPacket(state.route);}
   if(typeof state.latest==='string'&&state.latest!==lastLatest){lastLatest=state.latest;onPacket(state.latest);}
   backoff=2000;
  }catch(_){/* A malformed server event cannot update the map. */}
 }
 async function connect(){
  if(closed)return;
  try{
   if(!token)await authenticate();if(closed)return;
   source=new EventSource(base+'/live/'+channel+'.json?auth='+encodeURIComponent(token));
   source.addEventListener('put',e=>receive(e,false));source.addEventListener('patch',e=>receive(e,true));
   source.addEventListener('cancel',()=>{stop();onUnavailable(true);});
   source.addEventListener('auth_revoked',()=>{token=null;reconnect();});source.onerror=reconnect;
   clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{token=null;if(source)source.close();connect();},50*60*1000);
  }catch(_){reconnect();}
 }
 await connect();return {disconnect:stop};
};
