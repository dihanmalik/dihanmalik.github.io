import{Ht as e}from"./spinner-Dq2u5yDs.js";var t=`attached`,n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,ee=1027,te=1028,O=1029,ne=1030,re=1031,ie=1033,ae=33776,oe=33777,se=33778,ce=33779,le=35840,ue=35841,de=35842,fe=35843,pe=36196,me=37492,he=37496,ge=37488,_e=37489,ve=37490,ye=37491,be=37808,xe=37809,Se=37810,Ce=37811,we=37812,Te=37813,Ee=37814,De=37815,Oe=37816,ke=37817,Ae=37818,je=37819,Me=37820,Ne=37821,Pe=36492,Fe=36494,Ie=36495,Le=36283,Re=36284,ze=36285,Be=36286,Ve=2300,He=2301,Ue=2302,We=2303,Ge=2400,Ke=2401,qe=2402,Je=2500,Ye=3200,k=`srgb`,Xe=`srgb-linear`,Ze=`linear`,Qe=`srgb`,$e=7680,et=35044,tt=`300 es`,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function A(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function j(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ut(...e){let t=e.join(` `);t in st||(st[t]=!0,A(...e))}function dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ft={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},pt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},M=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mt=1234567,ht=Math.PI/180,gt=180/Math.PI;function _t(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(M[e&255]+M[e>>8&255]+M[e>>16&255]+M[e>>24&255]+`-`+M[t&255]+M[t>>8&255]+`-`+M[t>>16&15|64]+M[t>>24&255]+`-`+M[n&63|128]+M[n>>8&255]+`-`+M[n>>16&255]+M[n>>24&255]+M[r&255]+M[r>>8&255]+M[r>>16&255]+M[r>>24&255]).toLowerCase()}function N(e,t,n){return Math.max(t,Math.min(n,e))}function vt(e,t){return(e%t+t)%t}function yt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function bt(e,t,n){return e===t?0:(n-e)/(t-e)}function xt(e,t,n){return(1-n)*e+n*t}function St(e,t,n,r){return xt(e,t,1-Math.exp(-n*r))}function Ct(e,t=1){return t-Math.abs(vt(e,t*2)-t)}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Et(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Dt(e,t){return e+Math.random()*(t-e)}function Ot(e){return e*(.5-Math.random())}function kt(e){e!==void 0&&(mt=e);let t=mt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function At(e){return e*ht}function jt(e){return e*gt}function Mt(e){return(e&e-1)==0&&e!==0}function Nt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Pt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ft(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:A(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function P(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Lt={DEG2RAD:ht,RAD2DEG:gt,generateUUID:_t,clamp:N,euclideanModulo:vt,mapLinear:yt,inverseLerp:bt,lerp:xt,damp:St,pingpong:Ct,smoothstep:wt,smootherstep:Tt,randInt:Et,randFloat:Dt,randFloatSpread:Ot,seededRandom:kt,degToRad:At,radToDeg:jt,isPowerOfTwo:Mt,ceilPowerOfTwo:Nt,floorPowerOfTwo:Pt,setQuaternionFromProperEuler:Ft,normalize:P,denormalize:It},F=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(N(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:A(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(N(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this.z=N(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this.z=N(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(N(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zt=new I,Bt=new Rt,Vt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ut(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ht.makeScale(e,t)),this}rotate(e){return ut(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ht.makeRotation(-e)),this}translate(e,t){return ut(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ht=new Vt,Ut=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wt=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gt(){let e={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ut(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ut(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xe]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:k},outputColorSpaceConfig:{drawingBufferColorSpace:k}},[k]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:k}}}),e}var L=Gt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=at(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}else return A(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=_t(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(A(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new I,R=class e extends pt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=_t(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new F(0,0),this.repeat=new F(1,1),this.center=new F(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){A(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){A(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};R.DEFAULT_IMAGE=null,R.DEFAULT_MAPPING=300,R.DEFAULT_ANISOTROPY=1;var z=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=N(this.x,e.x,t.x),this.y=N(this.y,e.y,t.y),this.z=N(this.z,e.z,t.z),this.w=N(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=N(this.x,e,t),this.y=N(this.y,e,t),this.z=N(this.z,e,t),this.w=N(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(N(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends pt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new z(0,0,e,t),this.scissorTest=!1,this.viewport=new z(0,0,e,t),this.textures=[];let r=new R({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends R{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends R{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},B=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/on.setFromMatrixColumn(e,0).length(),i=1/on.setFromMatrixColumn(e,1).length(),a=1/on.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cn,e,ln)}lookAt(e,t,n){let r=this.elements;return V.subVectors(e,t),V.lengthSq()===0&&(V.z=1),V.normalize(),un.crossVectors(n,V),un.lengthSq()===0&&(Math.abs(n.z)===1?V.x+=1e-4:V.z+=1e-4,V.normalize(),un.crossVectors(n,V)),un.normalize(),dn.crossVectors(V,un),r[0]=un.x,r[4]=dn.x,r[8]=V.x,r[1]=un.y,r[5]=dn.y,r[9]=V.y,r[2]=un.z,r[6]=dn.z,r[10]=V.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],re=r[14],ie=r[3],ae=r[7],oe=r[11],se=r[15];return i[0]=a*x+o*T+s*te+c*ie,i[4]=a*S+o*E+s*O+c*ae,i[8]=a*C+o*D+s*ne+c*oe,i[12]=a*w+o*ee+s*re+c*se,i[1]=l*x+u*T+d*te+f*ie,i[5]=l*S+u*E+d*O+f*ae,i[9]=l*C+u*D+d*ne+f*oe,i[13]=l*w+u*ee+d*re+f*se,i[2]=p*x+m*T+h*te+g*ie,i[6]=p*S+m*E+h*O+g*ae,i[10]=p*C+m*D+h*ne+g*oe,i[14]=p*w+m*ee+h*re+g*se,i[3]=_*x+v*T+y*te+b*ie,i[7]=_*S+v*E+y*O+b*ae,i[11]=_*C+v*D+y*ne+b*oe,i[15]=_*w+v*ee+y*re+b*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=on.set(r[0],r[1],r[2]).length(),o=on.set(r[4],r[5],r[6]).length(),s=on.set(r[8],r[9],r[10]).length();i<0&&(a=-a),sn.copy(this);let c=1/a,l=1/o,u=1/s;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=l,sn.elements[5]*=l,sn.elements[6]*=l,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},on=new I,sn=new B,cn=new I(0,0,0),ln=new I(1,1,1),un=new I,dn=new I,V=new I,fn=new B,pn=new Rt,mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(N(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-N(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(N(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-N(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(N(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-N(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:A(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pn.setFromEuler(this),this.setFromQuaternion(pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER=`XYZ`;var hn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},gn=0,_n=new I,vn=new Rt,yn=new B,bn=new I,xn=new I,Sn=new I,Cn=new Rt,wn=new I(1,0,0),Tn=new I(0,1,0),En=new I(0,0,1),Dn={type:`added`},On={type:`removed`},kn={type:`childadded`,child:null},An={type:`childremoved`,child:null},H=class e extends pt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=_t(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new mn,r=new Rt,i=new I(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new B},normalMatrix:{value:new Vt}}),this.matrix=new B,this.matrixWorld=new B,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(wn,e)}rotateY(e){return this.rotateOnAxis(Tn,e)}rotateZ(e){return this.rotateOnAxis(En,e)}translateOnAxis(e,t){return _n.copy(e).applyQuaternion(this.quaternion),this.position.add(_n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wn,e)}translateY(e){return this.translateOnAxis(Tn,e)}translateZ(e){return this.translateOnAxis(En,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bn.copy(e):bn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(xn,bn,this.up):yn.lookAt(bn,xn,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),vn.setFromRotationMatrix(yn),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(j(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null):j(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,Sn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,Cn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};H.DEFAULT_UP=new I(0,1,0),H.DEFAULT_MATRIX_AUTO_UPDATE=!0,H.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends H{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=k){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,L.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=L.workingColorSpace){return this.r=e,this.g=t,this.b=n,L.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=L.workingColorSpace){if(e=vt(e,1),t=N(t,0,1),n=N(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return L.colorSpaceToWorking(this,r),this}setStyle(e,t=k){function n(t){t!==void 0&&parseFloat(t)<1&&A(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:A(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);A(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=k){let n=Pn[e.toLowerCase()];return n===void 0?A(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=k){return L.workingToColorSpace(W.copy(this),e),Math.round(N(W.r*255,0,255))*65536+Math.round(N(W.g*255,0,255))*256+Math.round(N(W.b*255,0,255))}getHexString(e=k){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=L.workingColorSpace){L.workingToColorSpace(W.copy(this),t);let n=W.r,r=W.g,i=W.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=L.workingColorSpace){return L.workingToColorSpace(W.copy(this),t),e.r=W.r,e.g=W.g,e.b=W.b,e}getStyle(e=k){L.workingToColorSpace(W.copy(this),e);let t=W.r,n=W.g,r=W.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=xt(Fn.h,In.h,t),r=xt(Fn.s,In.s,t),i=xt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},W=new U;U.NAMES=Pn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends H{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new I,Vn=new I,Hn=new I,Un=new I,Wn=new I,Gn=new I,Kn=new I,qn=new I,Jn=new I,Yn=new I,Xn=new z,Zn=new z,Qn=new z,$n=class e{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new I,new I,new I,new I,new I,new I,new I,new I],nr=new I,rr=new er,ir=new I,ar=new I,or=new I,sr=new I,cr=new I,lr=new I,ur=new I,dr=new I,fr=new I,pr=new I;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var G=new I,hr=new F,gr=0,_r=class extends pt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=et,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)G.fromBufferAttribute(this,t),G.applyMatrix3(e),this.setXYZ(t,G.x,G.y,G.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)G.fromBufferAttribute(this,t),G.applyMatrix4(e),this.setXYZ(t,G.x,G.y,G.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)G.fromBufferAttribute(this,t),G.applyNormalMatrix(e),this.setXYZ(t,G.x,G.y,G.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)G.fromBufferAttribute(this,t),G.transformDirection(e),this.setXYZ(t,G.x,G.y,G.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=It(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=P(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=It(t,this.array)),t}setX(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=It(t,this.array)),t}setY(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=It(t,this.array)),t}setZ(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=It(t,this.array)),t}setW(e,t){return this.normalized&&(t=P(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array),i=P(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},vr=class extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}},K=class extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new er,xr=new I,Sr=new I,Cr=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,q=new B,Tr=new H,Er=new I,J=new er,Dr=new er,Y=new I,X=class e extends pt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=_t(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rt(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Vt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return q.makeRotationFromQuaternion(e),this.applyMatrix4(q),this}rotateX(e){return q.makeRotationX(e),this.applyMatrix4(q),this}rotateY(e){return q.makeRotationY(e),this.applyMatrix4(q),this}rotateZ(e){return q.makeRotationZ(e),this.applyMatrix4(q),this}translate(e,t,n){return q.makeTranslation(e,t,n),this.applyMatrix4(q),this}scale(e,t,n){return q.makeScale(e,t,n),this.applyMatrix4(q),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new K(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&A(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){j(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];J.setFromBufferAttribute(n),this.morphTargetsRelative?(Y.addVectors(this.boundingBox.min,J.min),this.boundingBox.expandByPoint(Y),Y.addVectors(this.boundingBox.max,J.max),this.boundingBox.expandByPoint(Y)):(this.boundingBox.expandByPoint(J.min),this.boundingBox.expandByPoint(J.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&j(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){j(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(J.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Y.addVectors(J.min,Dr.min),J.expandByPoint(Y),Y.addVectors(J.max,Dr.max),J.expandByPoint(Y)):(J.expandByPoint(Dr.min),J.expandByPoint(Dr.max))}J.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Y.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Y));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Y.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),Y.add(Er)),r=Math.max(r,n.distanceToSquared(Y))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&j(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){j(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new _r(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new I,s[e]=new I;let c=new I,l=new I,u=new I,d=new F,f=new F,p=new F,m=new I,h=new I;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new I,y=new I,b=new I,x=new I;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new _r(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new I,i=new I,a=new I,o=new I,s=new I,c=new I,l=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Y.fromBufferAttribute(e,t),Y.normalize(),e.setXYZ(t,Y.x,Y.y,Y.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _r(a,r,i)}if(this.index===null)return A(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=et,this.updateRanges=[],this.version=0,this.uuid=_t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Z=new I,kr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Z.fromBufferAttribute(this,t),Z.applyMatrix4(e),this.setXYZ(t,Z.x,Z.y,Z.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Z.fromBufferAttribute(this,t),Z.applyNormalMatrix(e),this.setXYZ(t,Z.x,Z.y,Z.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Z.fromBufferAttribute(this,t),Z.transformDirection(e),this.setXYZ(t,Z.x,Z.y,Z.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=It(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=P(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=P(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=It(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=It(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=It(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=It(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=P(t,this.array),n=P(n,this.array),r=P(r,this.array),i=P(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ct(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new _r(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ct(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=0,Q=class extends pt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ar++}),this.uuid=_t(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$e,this.stencilZFail=$e,this.stencilZPass=$e,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){A(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){A(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new F().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new F().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},jr=class extends Q{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,Nr=new I,Pr=new I,Fr=new I,Ir=new F,Lr=new F,Rr=new B,zr=new I,Br=new I,Vr=new I,Hr=new F,Ur=new F,Wr=new F,Gr=class extends H{constructor(e=new jr){if(super(),this.isSprite=!0,this.type=`Sprite`,Mr===void 0){Mr=new X;let e=new Or(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute(`position`,new kr(e,3,0,!1)),Mr.setAttribute(`uv`,new kr(e,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new F(.5,.5),this.count=1}raycast(e,t){e.camera===null&&j(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Pr.setFromMatrixScale(this.matrixWorld),Rr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Fr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Kr(zr.set(-.5,-.5,0),Fr,a,Pr,r,i),Kr(Br.set(.5,-.5,0),Fr,a,Pr,r,i),Kr(Vr.set(.5,.5,0),Fr,a,Pr,r,i),Hr.set(0,0),Ur.set(1,0),Wr.set(1,1);let o=e.ray.intersectTriangle(zr,Br,Vr,!1,Nr);if(o===null&&(Kr(Br.set(-.5,.5,0),Fr,a,Pr,r,i),Ur.set(0,1),o=e.ray.intersectTriangle(zr,Vr,Br,!1,Nr),o===null))return;let s=e.ray.origin.distanceTo(Nr);s<e.near||s>e.far||t.push({distance:s,point:Nr.clone(),uv:$n.getInterpolation(Nr,zr,Br,Vr,Hr,Ur,Wr,new F),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Kr(e,t,n,r,i,a){Ir.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Lr.copy(Ir):(Lr.x=a*Ir.x-i*Ir.y,Lr.y=i*Ir.x+a*Ir.y),e.copy(t),e.x+=Lr.x,e.y+=Lr.y,e.applyMatrix4(Rr)}var qr=new I,Jr=new I,Yr=new I,Xr=new I,Zr=new I,Qr=new I,$r=new I,ei=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){Zr.subVectors(t,e),Qr.subVectors(n,e),$r.crossVectors(Zr,Qr);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xr.subVectors(this.origin,e);let s=o*this.direction.dot(Qr.crossVectors(Xr,Qr));if(s<0)return null;let c=o*this.direction.dot(Zr.cross(Xr));if(c<0||s+c>a)return null;let l=-o*Xr.dot($r);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends Q{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ni=new B,ri=new ei,ii=new Cr,ai=new I,oi=new I,si=new I,ci=new I,li=new I,ui=new I,di=new I,fi=new I,pi=class extends H{constructor(e=new X,t=new ti){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ui.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(li.fromBufferAttribute(s,e),a?ui.addScaledVector(li,r):ui.addScaledVector(li.sub(t),r))}t.add(ui)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ii.copy(n.boundingSphere),ii.applyMatrix4(i),ri.copy(e.ray).recast(e.near),!(ii.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ii,ai)===null||ri.origin.distanceToSquared(ai)>(e.far-e.near)**2))&&(ni.copy(i).invert(),ri.copy(e.ray).applyMatrix4(ni),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;fi.copy(s),fi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(fi);return l<n.near||l>n.far?null:{distance:l,point:fi.clone(),object:e}}function hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,oi),e.getVertexPosition(c,si),e.getVertexPosition(l,ci);let u=mi(e,t,n,r,oi,si,ci,di);if(u){let e=new I;$n.getBarycoord(di,oi,si,ci,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new F)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new F)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new I),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new I,materialIndex:0};$n.getNormal(oi,si,ci,t.normal),u.face=t,u.barycoord=e}return u}var gi=new z,_i=new z,vi=new z,yi=new z,bi=new B,xi=new I,Si=new Cr,Ci=new B,wi=new ei,Ti=class extends pi{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=t,this.bindMatrix=new B,this.bindMatrixInverse=new B,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,xi),this.boundingBox.expandByPoint(xi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,xi),this.boundingSphere.expandByPoint(xi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Si.copy(this.boundingSphere),Si.applyMatrix4(r),e.ray.intersectsSphere(Si)!==!1&&(Ci.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Ci),!(this.boundingBox!==null&&wi.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new z,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():A(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;_i.fromBufferAttribute(r.attributes.skinIndex,e),vi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(gi.copy(t),t.set(0,0,0,0)):(gi.set(...t,1),t.set(0,0,0)),gi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=vi.getComponent(e);if(r!==0){let i=_i.getComponent(e);bi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(yi.copy(gi).applyMatrix4(bi),r)}}return t.isVector4&&(t.w=gi.w),t.applyMatrix4(this.bindMatrixInverse)}},Ei=class extends H{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Di=class extends R{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oi=new B,ki=new B,Ai=class e{constructor(e=[],t=[]){this.uuid=_t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){A(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new B)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new B;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ki;Oi.multiplyMatrices(i,t[r]),Oi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Di(t,e,e,E,_);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(A(`Skeleton: No bone found with UUID:`,r),i=new Ei),this.bones.push(i),this.boneInverses.push(new B().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ji=class extends _r{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new B,Ni=new B,Pi=[],Fi=new er,Ii=new B,Li=new pi,Ri=new Cr,zi=class extends pi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Fi.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ri.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Mi),Ni.multiplyMatrices(n,Mi),Li.matrixWorld=Ni,Li.raycast(e,Pi);for(let e=0,n=Pi.length;e<n;e++){let n=Pi[e];n.instanceId=i,n.object=this,t.push(n)}Pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(r*this.count),r,this.count,te,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new I,Vi=new I,Hi=new Vt,Ui=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bi.subVectors(n,t).cross(Vi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Bi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hi.getNormalMatrix(e),r=this.coplanarPoint(Bi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Cr,Gi=new F(.5,.5),Ki=new I,qi=class{constructor(e=new Ui,t=new Ui,n=new Ui,r=new Ui,i=new Ui,a=new Ui){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476+Gi.distanceTo(e.center),Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ji=class extends Q{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yi=new I,Xi=new I,Zi=new B,Qi=new ei,$i=new Cr,ea=new I,ta=new I,na=class extends H{constructor(e=new X,t=new Ji){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Yi.fromBufferAttribute(t,e-1),Xi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Yi.distanceTo(Xi);e.setAttribute(`lineDistance`,new K(n,1))}else A(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ra(this,e,Qi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ra(this,e,Qi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ra(this,e,Qi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ra(this,e,Qi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ra(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Yi.fromBufferAttribute(s,i),Xi.fromBufferAttribute(s,a),n.distanceSqToSegment(Yi,Xi,ea,ta)>r)return;ea.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ea);if(!(c<t.near||c>t.far))return{distance:c,point:ta.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ia=new I,aa=new I,oa=class extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ia.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ia.distanceTo(aa);e.setAttribute(`lineDistance`,new K(n,1))}else A(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},sa=class extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},ca=class extends Q{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},la=new B,ua=new ei,da=new Cr,fa=new I,pa=class extends H{constructor(e=new X,t=new ca){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=i,e.ray.intersectsSphere(da)===!1)return;la.copy(r).invert(),ua.copy(e.ray).applyMatrix4(la);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);fa.fromBufferAttribute(l,n),ma(fa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)fa.fromBufferAttribute(l,a),ma(fa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ma(e,t,n,r,i,a,o){let s=ua.distanceSqToPoint(e);if(s<n){let n=new I;ua.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ha=class extends R{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends R{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_a=class extends R{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends _a{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends R{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ba=class e extends X{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new I;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xa=class e extends X{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function _(){let a=new I,_=new I,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new F,m=new I,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class e extends xa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class e extends X{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new K(i,3)),this.setAttribute(`normal`,new K(i.slice(),3)),this.setAttribute(`uv`,new K(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new I,r=new I,i=new I;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new I;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new I;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new I,t=new I,n=new I,r=new I,o=new F,s=new F,c=new F;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},wa=class e extends Ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ta=class e extends Ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ea=class e extends Ca{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Da=class e extends X{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class e extends X{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new I,p=new F;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ka=class e extends X{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new I,d=new I,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Aa=class e extends X{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new I,f=new I,p=new I;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function ja(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Na(i))i.isRenderTargetTexture?(A(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ma(e){let t={};for(let n=0;n<e.length;n++){let r=ja(e[n]);for(let e in r)t[e]=r[e]}return t}function Na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:L.workingColorSpace}var Ia={clone:ja,merge:Ma},La=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ra=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,za=class extends Q{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=La,this.fragmentShader=Ra,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=Pa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new F().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Vt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new B().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ba=class extends za{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Va=class extends Q{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ha=class extends Va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new F(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return N(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ua=class extends Q{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new U(16777215),this.specular=new U(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wa=class extends Q{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ye,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ga=class extends Q{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ka(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qa(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ja(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Ya(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var Xa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Za=class extends Xa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ge,endingEnd:Ge}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ke:i=e,o=2*t-n;break;case qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ke:a=e,s=2*n-t;break;case qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qa=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$a=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},eo=class extends Xa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},to=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ve:t=this.InterpolantFactoryMethodDiscrete;break;case He:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth;break;case We:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return A(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ve;case this.InterpolantFactoryMethodLinear:return He;case this.InterpolantFactoryMethodSmooth:return Ue;case this.InterpolantFactoryMethodBezier:return We}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(j(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(j(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){j(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){j(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){j(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};to.prototype.ValueTypeName=``,to.prototype.TimeBufferType=Float32Array,to.prototype.ValueBufferType=Float32Array,to.prototype.DefaultInterpolation=He;var no=class extends to{constructor(e,t,n){super(e,t,n)}};no.prototype.ValueTypeName=`bool`,no.prototype.ValueBufferType=Array,no.prototype.DefaultInterpolation=Ve,no.prototype.InterpolantFactoryMethodLinear=void 0,no.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName=`color`;var io=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName=`number`;var ao=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},oo=class extends to{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};oo.prototype.ValueTypeName=`quaternion`,oo.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends to{constructor(e,t,n){super(e,t,n)}};so.prototype.ValueTypeName=`string`,so.prototype.ValueBufferType=Array,so.prototype.DefaultInterpolation=Ve,so.prototype.InterpolantFactoryMethodLinear=void 0,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};co.prototype.ValueTypeName=`vector`;var lo=class{constructor(e=``,t=-1,n=[],r=Je){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=_t(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(fo(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(to.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=qa(o);o=Ja(o,1,c),s=Ja(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new io(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function uo(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return io;case`vector`:case`vector2`:case`vector3`:case`vector4`:return co;case`color`:return ro;case`quaternion`:return oo;case`bool`:case`boolean`:return no;case`string`:return so}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function fo(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=uo(e.type);if(e.times===void 0){let t=[],n=[];Ya(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var po={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(mo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!mo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function mo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ho=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},go=class{constructor(e){this.manager=e===void 0?ho:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var _o={},vo=class extends Error{constructor(e,t){super(e),this.response=t}},yo=class extends go{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=po.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(_o[e]!==void 0){_o[e].push({onLoad:t,onProgress:n,onError:r});return}_o[e]=[],_o[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&A(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=_o[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new vo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{po.add(`file:${e}`,t);let n=_o[e];delete _o[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=_o[e];if(n===void 0)throw this.manager.itemError(e),t;delete _o[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},bo=new WeakMap,xo=class extends go{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=po.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=bo.get(a);e===void 0&&(e=[],bo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=at(`img`);function s(){l(),t&&t(this);let n=bo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}bo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),po.remove(`image:${e}`);let n=bo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}bo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),po.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},So=class extends go{constructor(e){super(e)}load(e,t,n,r){let i=new R,a=new xo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Co=class extends H{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wo=class extends Co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(H.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},To=new B,Eo=new I,Do=new I,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new B,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new F(1,1),this._viewportCount=1,this._viewports=[new z(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eo),Do.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Do),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ko=new I,Ao=new Rt,jo=new I,Mo=class extends H{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ko,Ao,jo),jo.x===1&&jo.y===1&&jo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ao,jo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},No=new I,Po=new F,Fo=new F,Io=class extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ht*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gt*2*Math.atan(Math.tan(ht*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){No.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(No.x,No.y).multiplyScalar(-e/No.z),No.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(No.x,No.y).multiplyScalar(-e/No.z)}getViewSize(e,t){return this.getViewBounds(e,Po,Fo),t.subVectors(Fo,Po)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ht*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lo=class extends Oo{constructor(){super(new Io(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ro=class extends Co{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(H.DEFAULT_UP),this.updateMatrix(),this.target=new H,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Lo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},zo=class extends Oo{constructor(){super(new Io(90,1,.5,500)),this.isPointLightShadow=!0}},Bo=class extends Co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vo=class extends Mo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ho=class extends Oo{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(H.DEFAULT_UP),this.updateMatrix(),this.target=new H,this.shadow=new Ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wo=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Go=new WeakMap,Ko=class extends go{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&A(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&A(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=po.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Go.has(a)===!0?(r&&r(Go.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){po.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),Go.set(s,t),po.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});po.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},qo=-90,Jo=1,Yo=class extends H{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Io(qo,Jo,e,t);r.layers=this.layers,this.add(r);let i=new Io(qo,Jo,e,t);i.layers=this.layers,this.add(i);let a=new Io(qo,Jo,e,t);a.layers=this.layers,this.add(a);let o=new Io(qo,Jo,e,t);o.layers=this.layers,this.add(o);let s=new Io(qo,Jo,e,t);s.layers=this.layers,this.add(s);let c=new Io(qo,Jo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xo=class extends Io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zo=`\\[\\]\\.:\\/`,Qo=RegExp(`[\\[\\]\\.:\\/]`,`g`),$o=`[^\\[\\]\\.:\\/]`,es=`[^`+Zo.replace(`\\.`,``)+`]`,ts=`((?:WC+[\\/:])*)`.replace(`WC`,$o),ns=`(WCOD+)?`.replace(`WCOD`,es),rs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,$o),is=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,$o),as=RegExp(`^`+ts+ns+rs+is+`$`),os=[`material`,`materials`,`bones`,`map`],ss=class{constructor(e,t,n){let r=n||$.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Qo,``)}static parseTrackName(e){let t=as.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);os.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){A(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){j(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){j(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){j(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){j(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){j(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){j(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){j(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;j(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){j(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){j(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$.Composite=ss,$.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$.prototype.GetterByBindingType=[$.prototype._getValue_direct,$.prototype._getValue_array,$.prototype._getValue_arrayElement,$.prototype._getValue_toArray],$.prototype.SetterByBindingTypeAndVersioning=[[$.prototype._setValue_direct,$.prototype._setValue_direct_setNeedsUpdate,$.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$.prototype._setValue_array,$.prototype._setValue_array_setNeedsUpdate,$.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$.prototype._setValue_arrayElement,$.prototype._setValue_arrayElement_setNeedsUpdate,$.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$.prototype._setValue_fromArray,$.prototype._setValue_fromArray_setNeedsUpdate,$.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function cs(e,t,n,r){let i=ls(r);switch(n){case w:return e*t;case te:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:case fe:return Math.max(e,16)*Math.max(t,8)/4;case le:case de:return Math.max(e,8)*Math.max(t,8)/2;case pe:case me:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case he:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Le:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ze:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ls(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?A(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);var us=class extends go{constructor(e){super(e)}load(e,t,n,r){let i=this,a=this.path===``?Wo.extractUrlBase(e):this.path,o=new yo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let n=e.split(`
`),r={},i=/\s+/,a={};for(let e=0;e<n.length;e++){let t=n[e];if(t=t.trim(),t.length===0||t.charAt(0)===`#`)continue;let o=t.indexOf(` `),s=o>=0?t.substring(0,o):t;s=s.toLowerCase();let c=o>=0?t.substring(o+1):``;if(c=c.trim(),s===`newmtl`)r={name:c},a[c]=r;else if(s===`ka`||s===`kd`||s===`ks`||s===`ke`){let e=c.split(i,3);r[s]=[parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])]}else r[s]=c}let o=new ds(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}},ds=class{constructor(e=``,t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin=`anonymous`,this.side=this.options.side===void 0?0:this.options.side,this.wrap=this.options.wrap===void 0?n:this.options.wrap}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let n in e){let r=e[n],i={};t[n]=i;for(let e in r){let t=!0,n=r[e],a=e.toLowerCase();switch(a){case`kd`:case`ka`:case`ks`:this.options&&this.options.normalizeRGB&&(n=[n[0]/255,n[1]/255,n[2]/255]),this.options&&this.options.ignoreZeroRGBs&&n[0]===0&&n[1]===0&&n[2]===0&&(t=!1);break;default:break}t&&(i[a]=n)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,n=this.materialsInfo[e],r={name:e,side:this.side};function i(e,t){return typeof t!=`string`||t===``?``:/^https?:\/\//i.test(t)?t:e+t}function a(e,n){if(r[e])return;let a=t.getTextureParams(n,r),o=t.loadTexture(i(t.baseUrl,a.url));o.repeat.copy(a.scale),o.offset.copy(a.offset),o.wrapS=t.wrap,o.wrapT=t.wrap,(e===`map`||e===`emissiveMap`)&&(o.colorSpace=k),r[e]=o}for(let e in n){let t=n[e],i;if(t!==``)switch(e.toLowerCase()){case`kd`:r.color=L.colorSpaceToWorking(new U().fromArray(t),k);break;case`ks`:r.specular=L.colorSpaceToWorking(new U().fromArray(t),k);break;case`ke`:r.emissive=L.colorSpaceToWorking(new U().fromArray(t),k);break;case`map_kd`:a(`map`,t);break;case`map_ks`:a(`specularMap`,t);break;case`map_ke`:a(`emissiveMap`,t);break;case`norm`:a(`normalMap`,t);break;case`map_bump`:case`bump`:a(`bumpMap`,t);break;case`disp`:a(`displacementMap`,t);break;case`map_d`:a(`alphaMap`,t),r.transparent=!0;break;case`ns`:r.shininess=parseFloat(t);break;case`d`:i=parseFloat(t),i<1&&(r.opacity=i,r.transparent=!0);break;case`tr`:i=parseFloat(t),this.options&&this.options.invertTrProperty&&(i=1-i),i>0&&(r.opacity=1-i,r.transparent=!0);break;default:break}}return this.materials[e]=new Ua(r),this.materials[e]}getTextureParams(e,t){let n={scale:new F(1,1),offset:new F(0,0)},r=e.split(/\s+/),i;return i=r.indexOf(`-bm`),i>=0&&(t.bumpScale=parseFloat(r[i+1]),r.splice(i,2)),i=r.indexOf(`-mm`),i>=0&&(t.displacementBias=parseFloat(r[i+1]),t.displacementScale=parseFloat(r[i+2]),r.splice(i,3)),i=r.indexOf(`-s`),i>=0&&(n.scale.set(parseFloat(r[i+1]),parseFloat(r[i+2])),r.splice(i,4)),i=r.indexOf(`-o`),i>=0&&(n.offset.set(parseFloat(r[i+1]),parseFloat(r[i+2])),r.splice(i,4)),n.url=r.join(` `).trim(),n}loadTexture(e,t,n,r,i){let a=this.manager===void 0?ho:this.manager,o=a.getHandler(e);o===null&&(o=new So(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let s=o.load(e,n,r,i);return t!==void 0&&(s.mapping=t),s}},fs=/^[og]\s*(.+)?/,ps=/^mtllib /,ms=/^usemtl /,hs=/^usemap /,gs=/\s+/,_s=new I,vs=new I,ys=new I,bs=new I,xs=new I,Ss=new U;function Cs(){let e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial==`function`?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0),this.object={name:e||``,fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){let n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);let r={index:this.materials.length,name:e||``,mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:``,smooth:n===void 0?this.smooth:n.smooth,groupStart:n===void 0?0:n.groupEnd,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){let t={index:typeof e==`number`?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){let t=this.currentMaterial();if(t&&t.groupEnd===-1&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return e&&this.materials.length===0&&this.materials.push({name:``,smooth:this.smooth}),t}},n&&n.name&&typeof n.clone==`function`){let e=n.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let r=this.vertices,i=this.object.geometry.vertices;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let r=this.normals,i=this.object.geometry.normals;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){let r=this.vertices,i=this.object.geometry.normals;_s.fromArray(r,e),vs.fromArray(r,t),ys.fromArray(r,n),xs.subVectors(ys,vs),bs.subVectors(_s,vs),xs.cross(bs),xs.normalize(),i.push(xs.x,xs.y,xs.z),i.push(xs.x,xs.y,xs.z),i.push(xs.x,xs.y,xs.z)},addColor:function(e,t,n){let r=this.colors,i=this.object.geometry.colors;r[e]!==void 0&&i.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&i.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&i.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){let r=this.uvs,i=this.object.geometry.uvs;i.push(r[e+0],r[e+1]),i.push(r[t+0],r[t+1]),i.push(r[n+0],r[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,i,a,o,s,c){let l=this.vertices.length,u=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),f=this.parseVertexIndex(n,l);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==``){let e=this.normals.length;u=this.parseNormalIndex(o,e),d=this.parseNormalIndex(s,e),f=this.parseNormalIndex(c,e),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(r!==void 0&&r!==``){let e=this.uvs.length;u=this.parseUVIndex(r,e),d=this.parseUVIndex(i,e),f=this.parseUVIndex(a,e),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type=`Points`;let t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type=`Line`;let n=this.vertices.length,r=this.uvs.length;for(let t=0,r=e.length;t<r;t++)this.addVertexLine(this.parseVertexIndex(e[t],n));for(let e=0,n=t.length;e<n;e++)this.addUVLine(this.parseUVIndex(t[e],r))}};return e.startObject(``,!1),e}var ws=class extends go{constructor(e){super(e),this.materials=null}load(e,t,n,r){let i=this,a=new yo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new Cs;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,``));let n=e.split(`
`),r=[];for(let e=0,i=n.length;e<i;e++){let i=n[e].trimStart();if(i.length===0)continue;let a=i.charAt(0);if(a!==`#`)if(a===`v`){let e=i.split(gs);switch(e[0]){case`v`:t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?(Ss.setRGB(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6]),k),t.colors.push(Ss.r,Ss.g,Ss.b)):t.colors.push(void 0,void 0,void 0);break;case`vn`:t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case`vt`:t.uvs.push(parseFloat(e[1]),parseFloat(e[2]));break}}else if(a===`f`){let e=i.slice(1).trim().split(gs),n=[];for(let t=0,r=e.length;t<r;t++){let r=e[t];if(r.length>0){let e=r.split(`/`);n.push(e)}}let r=n[0];for(let e=1,i=n.length-1;e<i;e++){let i=n[e],a=n[e+1];t.addFace(r[0],i[0],a[0],r[1],i[1],a[1],r[2],i[2],a[2])}}else if(a===`l`){let e=i.substring(1).trim().split(` `),n=[],r=[];if(i.indexOf(`/`)===-1)n=e;else for(let t=0,i=e.length;t<i;t++){let i=e[t].split(`/`);i[0]!==``&&n.push(i[0]),i[1]!==``&&r.push(i[1])}t.addLineGeometry(n,r)}else if(a===`p`){let e=i.slice(1).trim().split(` `);t.addPointGeometry(e)}else if((r=fs.exec(i))!==null){let e=(` `+r[0].slice(1).trim()).slice(1);t.startObject(e)}else if(ms.test(i))t.object.startMaterial(i.substring(7).trim(),t.materialLibraries);else if(ps.test(i))t.materialLibraries.push(i.substring(7).trim());else if(hs.test(i))console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);else if(a===`s`){if(r=i.split(` `),r.length>1){let e=r[1].trim().toLowerCase();t.object.smooth=e!==`0`&&e!==`off`}else t.object.smooth=!0;let e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if(i===`\0`)continue;console.warn(`THREE.OBJLoader: Unexpected line: "`+i+`"`)}}t.finalize();let i=new jn;if(i.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let e=0,n=t.objects.length;e<n;e++){let n=t.objects[e],r=n.geometry,a=n.materials,o=r.type===`Line`,s=r.type===`Points`,c=!1;if(r.vertices.length===0)continue;let l=new X;l.setAttribute(`position`,new K(r.vertices,3)),r.normals.length>0&&l.setAttribute(`normal`,new K(r.normals,3)),r.colors.length>0&&(c=!0,l.setAttribute(`color`,new K(r.colors,3))),r.hasUVIndices===!0&&l.setAttribute(`uv`,new K(r.uvs,2));let u=[];for(let e=0,n=a.length;e<n;e++){let n=a[e],r=n.name+`_`+n.smooth+`_`+c,i=t.materials[r];if(this.materials!==null){if(i=this.materials.create(n.name),o&&i&&!(i instanceof Ji)){let e=new Ji;Q.prototype.copy.call(e,i),e.color.copy(i.color),i=e}else if(s&&i&&!(i instanceof ca)){let e=new ca({size:10,sizeAttenuation:!1});Q.prototype.copy.call(e,i),e.color.copy(i.color),e.map=i.map,i=e}}i===void 0&&(i=o?new Ji:s?new ca({size:1,sizeAttenuation:!1}):new Ua,i.name=n.name,i.flatShading=!n.smooth,i.vertexColors=c,t.materials[r]=i),u.push(i)}let d;if(u.length>1){for(let e=0,t=a.length;e<t;e++){let t=a[e];l.addGroup(t.groupStart,t.groupCount,e)}d=o?new oa(l,u):s?new pa(l,u):new pi(l,u)}else d=o?new oa(l,u[0]):s?new pa(l,u[0]):new pi(l,u[0]);d.name=n.name,i.add(d)}else if(t.vertices.length>0){let e=new ca({size:1,sizeAttenuation:!1}),n=new X;n.setAttribute(`position`,new K(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(n.setAttribute(`color`,new K(t.colors,3)),e.vertexColors=!0);let r=new pa(n,e);i.add(r)}return i}},Ts=`/assets/golfCart-faSAT1nc.glb`,Es=`# Blender MTL File: 'Bamboo_4.blend'
# Material Count: 2

newmtl DarkGreen2
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Green
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.185317 0.358380 0.101168
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,Ds=`# Blender v2.79 (sub 0) OBJ File: 'Bamboo_4.blend'
# www.blender.org
mtllib Bamboo_4.mtl
o Bamboo_4_Cylinder.016
v 0.050918 -0.004887 0.000000
v 0.034396 2.693193 0.000000
v 0.031747 -0.004887 0.039809
v 0.021445 2.693193 0.026892
v -0.011330 -0.004887 0.049641
v -0.007654 2.693193 0.033533
v -0.045876 -0.004887 0.022093
v -0.030989 2.693193 0.014924
v -0.045876 -0.004887 -0.022093
v -0.030989 2.693193 -0.014924
v -0.011330 -0.004887 -0.049641
v -0.007654 2.693193 -0.033533
v 0.031747 -0.004887 -0.039809
v 0.021445 2.693193 -0.026892
v 0.048558 0.293437 0.000000
v 0.046197 0.693396 0.000000
v 0.043837 1.093356 0.000000
v 0.041477 1.493315 0.000000
v 0.039116 1.893275 0.000000
v 0.036756 2.293234 0.000000
v 0.022917 2.293234 0.028737
v 0.024389 1.893274 0.030582
v 0.025860 1.493315 0.032428
v 0.027332 1.093356 0.034273
v 0.028804 0.693396 0.036119
v 0.030275 0.293437 0.037964
v -0.008179 2.293234 0.035834
v -0.008704 1.893274 0.038136
v -0.009229 1.493315 0.040437
v -0.009755 1.093356 0.042738
v -0.010280 0.693396 0.045039
v -0.010805 0.293437 0.047340
v -0.033116 2.293234 0.015948
v -0.035243 1.893274 0.016972
v -0.037369 1.493315 0.017996
v -0.039496 1.093356 0.019020
v -0.041622 0.693396 0.020044
v -0.043749 0.293437 0.021068
v -0.033116 2.293234 -0.015948
v -0.035243 1.893274 -0.016972
v -0.037369 1.493315 -0.017996
v -0.039496 1.093356 -0.019020
v -0.041622 0.693396 -0.020044
v -0.043749 0.293437 -0.021068
v -0.008179 2.293234 -0.035834
v -0.008704 1.893274 -0.038136
v -0.009229 1.493315 -0.040437
v -0.009755 1.093356 -0.042738
v -0.010280 0.693396 -0.045039
v -0.010805 0.293437 -0.047340
v 0.022917 2.293234 -0.028737
v 0.024389 1.893274 -0.030582
v 0.025860 1.493315 -0.032428
v 0.027332 1.093356 -0.034273
v 0.028804 0.693396 -0.036119
v 0.030275 0.293437 -0.037964
v 0.030355 0.271843 0.038064
v -0.010833 0.271843 0.047465
v -0.043864 0.271843 0.021124
v -0.043864 0.271843 -0.021124
v -0.010833 0.271843 -0.047465
v 0.030355 0.271843 -0.038064
v 0.048685 0.271843 0.000000
v 0.046345 0.668430 0.000000
v 0.028895 0.668430 0.036234
v -0.010313 0.668430 0.045183
v -0.041755 0.668430 0.020108
v -0.041755 0.668430 -0.020108
v -0.010313 0.668430 -0.045183
v 0.028895 0.668430 -0.036234
v 0.043962 1.072234 0.000000
v 0.027410 1.072234 0.034371
v -0.009782 1.072234 0.042859
v -0.039608 1.072234 0.019074
v -0.039608 1.072234 -0.019074
v -0.009782 1.072234 -0.042859
v 0.027410 1.072234 -0.034371
v 0.041595 1.473214 0.000000
v 0.025934 1.473213 0.032521
v -0.009256 1.473213 0.040552
v -0.037476 1.473213 0.018048
v -0.037476 1.473213 -0.018048
v -0.009256 1.473213 -0.040552
v 0.025934 1.473213 -0.032521
v 0.039246 1.871244 0.000000
v 0.024470 1.871244 0.030684
v -0.008733 1.871244 0.038262
v -0.035360 1.871244 0.017028
v -0.035360 1.871244 -0.017028
v -0.008733 1.871244 -0.038262
v 0.024470 1.871244 -0.030684
v 0.036914 2.266451 0.000000
v 0.023016 2.266451 0.028861
v -0.008214 2.266451 0.035989
v -0.033258 2.266451 0.016016
v -0.033258 2.266451 -0.016016
v -0.008214 2.266451 -0.035989
v 0.023016 2.266451 -0.028861
v -0.002650 1.102427 -0.019254
v 0.014579 1.102531 -0.017866
v -0.023567 1.093584 0.094158
v -0.019048 1.091965 0.101133
v 0.083813 1.073202 0.181993
v -0.009694 1.096761 0.080466
v -0.018834 1.094962 0.088218
v 0.005374 1.095368 0.086467
v -0.013063 1.091579 0.102799
v 0.023655 1.083350 0.138261
v 0.041938 1.087292 0.121273
v -0.031159 1.047372 0.293310
v -0.013961 1.093540 0.094345
v -0.028293 1.093850 0.093008
v -0.006577 1.088902 0.114332
v -0.041762 1.089491 0.111796
v -0.043947 1.071783 0.188106
v -0.007388 1.071369 0.189891
v -0.077705 1.087224 0.121564
v -0.087035 1.092532 0.098692
v -0.039536 1.097149 0.078794
v -0.030887 1.091866 0.101561
v -0.023495 1.097092 0.079038
v -0.019536 1.094503 0.090194
v -0.151179 1.083719 0.136670
v -0.002650 1.093873 -0.018568
v 0.014578 1.093977 -0.017180
v -0.023567 1.085029 0.094844
v -0.019048 1.083411 0.101819
v 0.005374 1.086814 0.087153
v -0.009695 1.088206 0.081152
v -0.018834 1.086408 0.088904
v 0.041937 1.078737 0.121959
v -0.013063 1.083024 0.103485
v 0.023654 1.074795 0.138946
v 0.083813 1.064648 0.182678
v -0.006578 1.080348 0.115018
v -0.013962 1.084986 0.095030
v -0.028294 1.085296 0.093694
v -0.007388 1.062815 0.190577
v -0.041762 1.080937 0.112482
v -0.043948 1.063229 0.188792
v -0.031160 1.038818 0.293996
v -0.151180 1.075165 0.137356
v -0.077705 1.078670 0.122250
v -0.039536 1.088594 0.079480
v -0.087035 1.083977 0.099377
v -0.023495 1.088538 0.079723
v -0.030888 1.083312 0.102247
v -0.019536 1.085949 0.090880
v 0.017949 0.886374 0.002048
v 0.008036 0.886478 0.016207
v -0.069300 0.877531 -0.073367
v -0.077603 0.875912 -0.072997
v -0.199387 0.857149 -0.025171
v -0.064507 0.880708 -0.054474
v -0.066571 0.878909 -0.066279
v -0.077306 0.879315 -0.044511
v -0.082068 0.875525 -0.068677
v -0.131232 0.867297 -0.054943
v -0.125827 0.871239 -0.030578
v -0.237251 0.831319 -0.180659
v -0.074321 0.877487 -0.065175
v -0.065918 0.877797 -0.076862
v -0.095297 0.872849 -0.068916
v -0.075311 0.873438 -0.097984
v -0.140032 0.855730 -0.138472
v -0.160065 0.855316 -0.107838
v -0.065555 0.871171 -0.133931
v -0.041105 0.876478 -0.130408
v -0.047969 0.881096 -0.079370
v -0.071983 0.875813 -0.083426
v -0.056294 0.881039 -0.065656
v -0.067920 0.878450 -0.067884
v -0.041418 0.867666 -0.204952
v 0.017358 0.877820 0.001700
v 0.007445 0.877924 0.015860
v -0.069892 0.868976 -0.073714
v -0.078194 0.867358 -0.073344
v -0.077898 0.870761 -0.044858
v -0.065099 0.872153 -0.054821
v -0.067162 0.870355 -0.066626
v -0.126418 0.862684 -0.030925
v -0.082660 0.866971 -0.069024
v -0.131823 0.858742 -0.055290
v -0.199979 0.848595 -0.025518
v -0.095888 0.864295 -0.069264
v -0.074912 0.868933 -0.065522
v -0.066509 0.869243 -0.077209
v -0.160657 0.846762 -0.108185
v -0.075903 0.864883 -0.098331
v -0.140623 0.847176 -0.138819
v -0.237842 0.822764 -0.181007
v -0.042009 0.859112 -0.205299
v -0.066147 0.862617 -0.134278
v -0.048561 0.872541 -0.079717
v -0.041697 0.867924 -0.130756
v -0.056885 0.872485 -0.066003
v -0.072574 0.867258 -0.083773
v -0.068512 0.869896 -0.068231
v 0.000908 1.623404 0.018043
v -0.014679 1.623508 0.010573
v 0.061077 1.614561 -0.080342
v 0.059358 1.612943 -0.088473
v -0.007696 1.594180 -0.200822
v 0.043220 1.617738 -0.072530
v 0.054530 1.615939 -0.076492
v 0.031302 1.616346 -0.083532
v 0.054367 1.612556 -0.092173
v 0.032796 1.604327 -0.138437
v 0.009640 1.608269 -0.129130
v 0.139531 1.568349 -0.263547
v 0.052176 1.614518 -0.083958
v 0.065078 1.614828 -0.077575
v 0.052445 1.609880 -0.105264
v 0.084384 1.610468 -0.090288
v 0.113770 1.592761 -0.160748
v 0.080278 1.592347 -0.175515
v 0.121441 1.608201 -0.086528
v 0.121955 1.613509 -0.061831
v 0.070480 1.618126 -0.060276
v 0.070564 1.612843 -0.084630
v 0.055592 1.618070 -0.066251
v 0.055893 1.615481 -0.078086
v 0.195449 1.604696 -0.074301
v 0.001154 1.614850 0.017403
v -0.014433 1.614954 0.009933
v 0.061323 1.606007 -0.080982
v 0.059604 1.604388 -0.089113
v 0.031548 1.607791 -0.084173
v 0.043466 1.609184 -0.073170
v 0.054776 1.607385 -0.077132
v 0.009886 1.599715 -0.129770
v 0.054613 1.604002 -0.092813
v 0.033042 1.595773 -0.139077
v -0.007450 1.585625 -0.201463
v 0.052691 1.601326 -0.105904
v 0.052423 1.605963 -0.084598
v 0.065324 1.606274 -0.078215
v 0.080524 1.583793 -0.176155
v 0.084630 1.601914 -0.090928
v 0.114017 1.584207 -0.161388
v 0.139777 1.559795 -0.264187
v 0.195695 1.596142 -0.074941
v 0.121687 1.599647 -0.087168
v 0.070726 1.609572 -0.060916
v 0.122201 1.604955 -0.062471
v 0.055838 1.609515 -0.066891
v 0.070810 1.604289 -0.085270
v 0.056139 1.606927 -0.078726
v -0.020776 2.047317 -0.016578
v -0.004087 2.047421 -0.021076
v -0.002252 2.038474 0.097250
v 0.004353 2.036855 0.102294
v 0.128447 2.018092 0.143762
v 0.006196 2.041651 0.079684
v 0.000203 2.039852 0.090063
v 0.022405 2.040258 0.080256
v 0.010550 2.036469 0.101846
v 0.057070 2.028240 0.122860
v 0.068559 2.032182 0.100706
v 0.057710 1.992262 0.287312
v 0.006855 2.038430 0.094189
v -0.007089 2.038741 0.097760
v 0.020542 2.033792 0.110519
v -0.013439 2.034381 0.119988
v 0.010218 2.016674 0.192571
v 0.045241 2.016259 0.181932
v -0.043988 2.032114 0.141297
v -0.060480 2.037421 0.122906
v -0.022464 2.042039 0.088166
v -0.006649 2.036756 0.106687
v -0.007279 2.041982 0.082990
v 0.000208 2.039393 0.092160
v -0.108074 2.028609 0.180278
v -0.020545 2.038763 -0.015932
v -0.003856 2.038867 -0.020430
v -0.002021 2.029919 0.097896
v 0.004584 2.028301 0.102940
v 0.022636 2.031704 0.080902
v 0.006426 2.033097 0.080330
v 0.000434 2.031298 0.090708
v 0.068790 2.023628 0.101352
v 0.010781 2.027914 0.102492
v 0.057300 2.019686 0.123506
v 0.128677 2.009538 0.144408
v 0.020773 2.025238 0.111165
v 0.007086 2.029876 0.094835
v -0.006858 2.030186 0.098406
v 0.045472 2.007705 0.182578
v -0.013208 2.025827 0.120633
v 0.010449 2.008119 0.193217
v 0.057941 1.983707 0.287958
v -0.107844 2.020055 0.180924
v -0.043757 2.023560 0.141943
v -0.022233 2.033484 0.088812
v -0.060249 2.028867 0.123552
v -0.007049 2.033428 0.083636
v -0.006419 2.028202 0.107332
v 0.000439 2.030839 0.092805
v -0.022042 0.442358 0.014852
v -0.021332 0.442462 -0.002418
v 0.092105 0.433515 0.031294
v 0.098897 0.431897 0.026504
v 0.175650 0.413134 -0.079457
v 0.077878 0.436692 0.017971
v 0.085983 0.434893 0.026798
v 0.083282 0.435300 0.002678
v 0.100326 0.431510 0.020458
v 0.134317 0.423281 -0.017625
v 0.116624 0.427223 -0.035226
v 0.291401 0.387303 0.031050
v 0.091914 0.433472 0.021688
v 0.091142 0.433782 0.036062
v 0.111595 0.428834 0.013524
v 0.110445 0.429422 0.048781
v 0.186782 0.411715 0.047965
v 0.187128 0.411301 0.011363
v 0.121619 0.427156 0.084313
v 0.099131 0.432463 0.094534
v 0.077381 0.437080 0.047855
v 0.099790 0.431797 0.038318
v 0.076993 0.437024 0.031817
v 0.087986 0.434435 0.027422
v 0.139602 0.423650 0.157136
v -0.021357 0.433804 0.014826
v -0.020646 0.433908 -0.002444
v 0.092790 0.424961 0.031267
v 0.099582 0.423342 0.026478
v 0.083967 0.426746 0.002651
v 0.078564 0.428138 0.017944
v 0.086669 0.426339 0.026772
v 0.117309 0.418669 -0.035252
v 0.101012 0.422956 0.020431
v 0.135002 0.414727 -0.017652
v 0.176335 0.404579 -0.079483
v 0.112280 0.420280 0.013498
v 0.092599 0.424917 0.021662
v 0.091827 0.425228 0.036035
v 0.187813 0.402747 0.011337
v 0.111130 0.420868 0.048755
v 0.187467 0.403161 0.047938
v 0.292087 0.378749 0.031024
v 0.140287 0.415096 0.157110
v 0.122304 0.418601 0.084286
v 0.078066 0.428526 0.047828
v 0.099816 0.423909 0.094508
v 0.077679 0.428469 0.031790
v 0.100475 0.423243 0.038291
v 0.088671 0.425881 0.027395
v 0.013896 2.693193 0.017425
v 0.022288 2.693193 -0.000000
v -0.004959 2.693193 0.021729
v -0.020080 2.693193 0.009670
v -0.020080 2.693193 -0.009670
v -0.004959 2.693193 -0.021729
v 0.013896 2.693193 -0.017425
v 0.013896 1.958482 0.017423
v 0.022288 1.958482 -0.000002
v -0.004959 1.958482 0.021727
v -0.020080 1.958482 0.009668
v -0.020080 1.958482 -0.009672
v -0.004959 1.958482 -0.021730
v 0.013896 1.958482 -0.017427
v 0.050918 -0.032933 0.000000
v 0.031747 -0.032933 0.039809
v -0.011330 -0.032933 0.049641
v -0.045876 -0.032933 0.022093
v -0.045876 -0.032933 -0.022093
v -0.011330 -0.032933 -0.049641
v 0.031747 -0.032933 -0.039809
vn 0.9010 0.0053 0.4339
vn 0.2225 0.0053 0.9749
vn -0.6235 0.0053 0.7818
vn -1.0000 0.0053 -0.0000
vn -0.6235 0.0053 -0.7818
vn 0.0000 1.0000 0.0000
vn 0.2225 0.0053 -0.9749
vn 0.9010 0.0053 -0.4339
vn 0.9009 0.0073 0.4339
vn 0.2225 0.0073 0.9749
vn -0.6235 0.0073 0.7818
vn -1.0000 0.0073 -0.0000
vn -0.6235 0.0073 -0.7818
vn 0.2225 0.0073 -0.9749
vn 0.9009 0.0073 -0.4339
vn 0.0343 0.9952 0.0912
vn -0.0343 -0.9952 -0.0911
vn -0.8337 0.0442 0.5504
vn 0.9616 0.0219 0.2737
vn -0.9831 -0.0146 -0.1825
vn -0.0960 0.9952 -0.0166
vn 0.0960 -0.9952 0.0166
vn -0.0530 0.0442 -0.9976
vn -0.7225 0.0219 0.6910
vn 0.6547 -0.0146 -0.7557
vn 0.0007 0.9952 -0.0974
vn -0.0007 -0.9952 0.0974
vn 0.9756 0.0442 -0.2151
vn -0.7996 0.0219 -0.6001
vn 0.8524 -0.0146 0.5226
vn 0.0630 0.9952 0.0743
vn -0.0630 -0.9952 -0.0743
vn -0.5995 0.0442 0.7992
vn 0.9976 0.0219 -0.0664
vn -0.9871 -0.0146 0.1595
vn 0.0897 0.9952 -0.0378
vn -0.0897 -0.9952 0.0378
vn 0.5828 0.0442 0.8114
vn 0.2356 0.0219 -0.9716
vn -0.1437 -0.0146 0.9895
vn -0.2225 -0.0000 0.9749
vn 1.0000 0.0000 0.0000
vn -0.2225 0.0000 -0.9749
vn -0.9010 -0.0000 0.4339
vn 0.6235 -0.0000 0.7818
vn 0.6235 0.0000 -0.7818
vn -0.9010 0.0000 -0.4339
vn 0.2225 0.0000 -0.9749
vn 0.0000 0.9741 0.2260
vn -0.0000 -0.9741 -0.2260
vn -0.9924 0.0099 0.1229
vn 0.1972 0.0783 0.9772
vn -0.3792 -0.0739 -0.9224
vn 0.0148 -0.0799 -0.9967
vn 0.3857 0.0737 0.9197
vn 0.9400 -0.0273 -0.3400
vn -0.5012 -0.0691 -0.8626
vn 0.6998 0.0571 0.7121
vn 0.3630 -0.0745 -0.9288
vn -0.6386 -0.0615 -0.7671
vn 0.6815 -0.0585 -0.7295
vn -0.9270 0.0300 0.3739
vn -0.6868 0.0581 0.7246
vn 0.8173 -0.0461 -0.5744
vn -0.5795 0.0652 0.8123
vn 0.9355 -0.0283 -0.3522
vn 0.0908 -0.0796 -0.9927
vn 0.9999 0.0008 0.0109
vn -0.8066 -0.0472 -0.5892
vn -0.9996 -0.0023 -0.0292
vn 0.9735 0.0182 0.2280
vn -0.1950 0.9741 -0.1143
vn 0.1950 -0.9741 0.1143
vn 0.3960 0.0099 -0.9182
vn -0.9427 0.0783 -0.3243
vn 0.9875 -0.0739 0.1395
vn 0.8522 -0.0799 0.5170
vn -0.9884 0.0737 -0.1326
vn -0.1823 -0.0273 0.9829
vn 0.9976 -0.0691 0.0040
vn -0.9682 0.0571 0.2434
vn 0.6176 -0.0745 0.7830
vn 0.9847 -0.0615 -0.1628
vn 0.2845 -0.0585 0.9569
vn 0.1464 0.0300 -0.9888
vn -0.2776 0.0581 -0.9589
vn 0.0820 -0.0461 0.9956
vn -0.4076 0.0652 -0.9108
vn -0.1694 -0.0283 0.9851
vn 0.8103 -0.0796 0.5805
vn -0.5152 0.0008 0.8570
vn 0.9163 -0.0472 -0.3977
vn 0.5308 -0.0023 -0.8475
vn -0.6891 0.0182 0.7244
vn 0.0810 0.9741 -0.2110
vn -0.0810 -0.9741 0.2110
vn 0.9705 0.0099 0.2408
vn 0.1661 0.0783 -0.9830
vn 0.0235 -0.0739 0.9970
vn -0.3710 -0.0799 0.9252
vn -0.0305 0.0737 -0.9968
vn -0.9994 -0.0273 -0.0195
vn 0.1588 -0.0691 0.9849
vn -0.3981 0.0571 -0.9156
vn -0.6717 -0.0745 0.7370
vn 0.3213 -0.0615 0.9450
vn -0.8976 -0.0585 0.4368
vn 0.9994 0.0300 -0.0169
vn 0.9008 0.0581 -0.4304
vn -0.9688 -0.0461 0.2433
vn 0.8321 0.0652 -0.5507
vn -0.9996 -0.0283 -0.0065
vn -0.4405 -0.0796 0.8942
vn -0.9296 0.0008 -0.3685
vn 0.5419 -0.0472 0.8391
vn 0.9227 -0.0023 0.3854
vn -0.8271 0.0182 -0.5617
vn 0.0762 0.9741 0.2128
vn -0.0762 -0.9741 -0.2128
vn -0.8929 0.0099 0.4501
vn 0.5149 0.0783 0.8536
vn -0.6678 -0.0739 -0.7406
vn -0.3219 -0.0799 -0.9434
vn 0.6730 0.0737 0.7359
vn 0.7705 -0.0273 -0.6369
vn -0.7626 -0.0691 -0.6432
vn 0.8988 0.0571 0.4346
vn 0.0288 -0.0745 -0.9968
vn -0.8597 -0.0615 -0.5071
vn 0.3958 -0.0585 -0.9165
vn -0.7468 0.0300 0.6644
vn -0.4024 0.0581 0.9136
vn 0.5760 -0.0461 -0.8162
vn -0.2719 0.0652 0.9601
vn 0.7621 -0.0283 -0.6468
vn -0.2490 -0.0796 -0.9652
vn 0.9451 0.0008 -0.3267
vn -0.9580 -0.0472 -0.2829
vn -0.9509 -0.0023 0.3094
vn 0.9934 0.0182 -0.1134
vn 0.2259 0.9741 -0.0089
vn -0.2259 -0.9741 0.0089
vn 0.1618 0.0099 0.9868
vn 0.9687 0.0783 -0.2354
vn -0.9067 -0.0739 0.4152
vn -0.9965 -0.0799 0.0244
vn 0.9038 0.0737 -0.4215
vn -0.3767 -0.0273 -0.9260
vn -0.8422 -0.0691 0.5347
vn 0.6840 0.0571 -0.7272
vn -0.9424 -0.0745 -0.3262
vn -0.7414 -0.0615 0.6682
vn -0.7557 -0.0585 -0.6523
vn 0.4100 0.0300 0.9116
vn 0.7510 0.0581 0.6577
vn -0.6060 -0.0461 -0.7941
vn 0.8345 0.0652 0.5471
vn -0.3887 -0.0283 -0.9209
vn -0.9955 -0.0796 -0.0517
vn -0.0284 0.0008 -0.9996
vn -0.5570 -0.0472 0.8292
vn 0.0102 -0.0023 0.9999
vn 0.1895 0.0182 -0.9817
vn 0.0000 -1.0000 0.0000
vn -1.0000 0.0000 -0.0000
vn 0.9010 0.0000 -0.4339
vn 0.2225 0.0000 0.9749
vn -0.6235 0.0000 -0.7818
vn 0.9010 0.0000 0.4339
vn -0.6235 0.0000 0.7818
usemtl Green
s off
f 20//1 2//1 4//1 21//1
f 21//2 4//2 6//2 27//2
f 27//3 6//3 8//3 33//3
f 33//4 8//4 10//4 39//4
f 39//5 10//5 12//5 45//5
f 10//6 8//6 352//6 353//6
f 45//7 12//7 14//7 51//7
f 51//8 14//8 2//8 20//8
f 1//9 63//9 57//9 3//9
f 3//10 57//10 58//10 5//10
f 5//11 58//11 59//11 7//11
f 7//12 59//12 60//12 9//12
f 9//13 60//13 61//13 11//13
f 11//14 61//14 62//14 13//14
f 13//15 62//15 63//15 1//15
f 15//1 64//1 65//1 26//1
f 26//2 65//2 66//2 32//2
f 32//3 66//3 67//3 38//3
f 38//4 67//4 68//4 44//4
f 44//5 68//5 69//5 50//5
f 50//7 69//7 70//7 56//7
f 56//8 70//8 64//8 15//8
f 16//1 71//1 72//1 25//1
f 25//2 72//2 73//2 31//2
f 31//3 73//3 74//3 37//3
f 37//4 74//4 75//4 43//4
f 43//5 75//5 76//5 49//5
f 49//7 76//7 77//7 55//7
f 55//8 77//8 71//8 16//8
f 17//1 78//1 79//1 24//1
f 24//2 79//2 80//2 30//2
f 30//3 80//3 81//3 36//3
f 36//4 81//4 82//4 42//4
f 42//5 82//5 83//5 48//5
f 48//7 83//7 84//7 54//7
f 54//8 84//8 78//8 17//8
f 18//1 85//1 86//1 23//1
f 23//2 86//2 87//2 29//2
f 29//3 87//3 88//3 35//3
f 35//4 88//4 89//4 41//4
f 41//5 89//5 90//5 47//5
f 47//7 90//7 91//7 53//7
f 53//8 91//8 85//8 18//8
f 19//1 92//1 93//1 22//1
f 22//2 93//2 94//2 28//2
f 28//3 94//3 95//3 34//3
f 34//4 95//4 96//4 40//4
f 40//5 96//5 97//5 46//5
f 46//7 97//7 98//7 52//7
f 52//8 98//8 92//8 19//8
f 100//16 99//16 101//16 102//16
f 125//17 127//17 126//17 124//17
f 101//18 126//18 127//18 102//18
f 102//19 127//19 125//19 100//19
f 99//20 124//20 126//20 101//20
f 150//21 149//21 151//21 152//21
f 175//22 177//22 176//22 174//22
f 151//23 176//23 177//23 152//23
f 152//24 177//24 175//24 150//24
f 149//25 174//25 176//25 151//25
f 200//26 199//26 201//26 202//26
f 225//27 227//27 226//27 224//27
f 201//28 226//28 227//28 202//28
f 202//29 227//29 225//29 200//29
f 199//30 224//30 226//30 201//30
f 250//31 249//31 251//31 252//31
f 275//32 277//32 276//32 274//32
f 251//33 276//33 277//33 252//33
f 252//34 277//34 275//34 250//34
f 249//35 274//35 276//35 251//35
f 300//36 299//36 301//36 302//36
f 325//37 327//37 326//37 324//37
f 301//38 326//38 327//38 302//38
f 302//39 327//39 325//39 300//39
f 299//40 324//40 326//40 301//40
f 355//41 354//41 361//41 362//41
f 2//6 14//6 355//6 350//6
f 6//6 4//6 349//6 351//6
f 12//6 10//6 353//6 354//6
f 4//6 2//6 350//6 349//6
f 8//6 6//6 351//6 352//6
f 14//6 12//6 354//6 355//6
f 356//6 357//6 362//6 361//6 360//6 359//6 358//6
f 353//42 352//42 359//42 360//42
f 351//43 349//43 356//43 358//43
f 350//44 355//44 362//44 357//44
f 354//45 353//45 360//45 361//45
f 352//46 351//46 358//46 359//46
f 349//47 350//47 357//47 356//47
usemtl DarkGreen2
f 11//48 13//48 369//48 368//48
f 62//8 56//8 15//8 63//8
f 70//8 55//8 16//8 64//8
f 77//8 54//8 17//8 71//8
f 84//8 53//8 18//8 78//8
f 91//8 52//8 19//8 85//8
f 98//8 51//8 20//8 92//8
f 61//7 50//7 56//7 62//7
f 69//7 49//7 55//7 70//7
f 76//7 48//7 54//7 77//7
f 83//7 47//7 53//7 84//7
f 90//7 46//7 52//7 91//7
f 97//7 45//7 51//7 98//7
f 60//5 44//5 50//5 61//5
f 68//5 43//5 49//5 69//5
f 75//5 42//5 48//5 76//5
f 82//5 41//5 47//5 83//5
f 89//5 40//5 46//5 90//5
f 96//5 39//5 45//5 97//5
f 59//4 38//4 44//4 60//4
f 67//4 37//4 43//4 68//4
f 74//4 36//4 42//4 75//4
f 81//4 35//4 41//4 82//4
f 88//4 34//4 40//4 89//4
f 95//4 33//4 39//4 96//4
f 58//3 32//3 38//3 59//3
f 66//3 31//3 37//3 67//3
f 73//3 30//3 36//3 74//3
f 80//3 29//3 35//3 81//3
f 87//3 28//3 34//3 88//3
f 94//3 27//3 33//3 95//3
f 57//2 26//2 32//2 58//2
f 65//2 25//2 31//2 66//2
f 72//2 24//2 30//2 73//2
f 79//2 23//2 29//2 80//2
f 86//2 22//2 28//2 87//2
f 93//2 21//2 27//2 94//2
f 63//1 15//1 26//1 57//1
f 64//1 16//1 25//1 65//1
f 71//1 17//1 24//1 72//1
f 78//1 18//1 23//1 79//1
f 85//1 19//1 22//1 86//1
f 92//1 20//1 21//1 93//1
f 106//49 104//49 105//49 107//49
f 109//49 106//49 107//49 108//49
f 103//49 109//49 108//49
f 113//49 111//49 112//49 114//49
f 116//49 113//49 114//49 115//49
f 110//49 116//49 115//49
f 117//49 120//49 119//49 118//49
f 120//49 122//49 121//49 119//49
f 123//49 117//49 118//49
f 128//50 132//50 130//50 129//50
f 131//50 133//50 132//50 128//50
f 134//50 133//50 131//50
f 135//50 139//50 137//50 136//50
f 138//50 140//50 139//50 135//50
f 141//50 140//50 138//50
f 143//50 145//50 144//50 147//50
f 147//50 144//50 146//50 148//50
f 142//50 145//50 143//50
f 115//51 140//51 141//51 110//51
f 123//52 142//52 143//52 117//52
f 119//53 144//53 145//53 118//53
f 121//54 146//54 144//54 119//54
f 117//55 143//55 147//55 120//55
f 122//56 148//56 146//56 121//56
f 118//57 145//57 142//57 123//57
f 120//58 147//58 148//58 122//58
f 106//59 128//59 129//59 104//59
f 104//60 129//60 130//60 105//60
f 109//61 131//61 128//61 106//61
f 105//62 130//62 132//62 107//62
f 107//63 132//63 133//63 108//63
f 103//64 134//64 131//64 109//64
f 108//65 133//65 134//65 103//65
f 113//66 135//66 136//66 111//66
f 111//67 136//67 137//67 112//67
f 116//68 138//68 135//68 113//68
f 112//69 137//69 139//69 114//69
f 114//70 139//70 140//70 115//70
f 110//71 141//71 138//71 116//71
f 156//72 154//72 155//72 157//72
f 159//72 156//72 157//72 158//72
f 153//72 159//72 158//72
f 163//72 161//72 162//72 164//72
f 166//72 163//72 164//72 165//72
f 160//72 166//72 165//72
f 167//72 170//72 169//72 168//72
f 170//72 172//72 171//72 169//72
f 173//72 167//72 168//72
f 178//73 182//73 180//73 179//73
f 181//73 183//73 182//73 178//73
f 184//73 183//73 181//73
f 185//73 189//73 187//73 186//73
f 188//73 190//73 189//73 185//73
f 191//73 190//73 188//73
f 193//73 195//73 194//73 197//73
f 197//73 194//73 196//73 198//73
f 192//73 195//73 193//73
f 165//74 190//74 191//74 160//74
f 173//75 192//75 193//75 167//75
f 169//76 194//76 195//76 168//76
f 171//77 196//77 194//77 169//77
f 167//78 193//78 197//78 170//78
f 172//79 198//79 196//79 171//79
f 168//80 195//80 192//80 173//80
f 170//81 197//81 198//81 172//81
f 156//82 178//82 179//82 154//82
f 154//83 179//83 180//83 155//83
f 159//84 181//84 178//84 156//84
f 155//85 180//85 182//85 157//85
f 157//86 182//86 183//86 158//86
f 153//87 184//87 181//87 159//87
f 158//88 183//88 184//88 153//88
f 163//89 185//89 186//89 161//89
f 161//90 186//90 187//90 162//90
f 166//91 188//91 185//91 163//91
f 162//92 187//92 189//92 164//92
f 164//93 189//93 190//93 165//93
f 160//94 191//94 188//94 166//94
f 206//95 204//95 205//95 207//95
f 209//95 206//95 207//95 208//95
f 203//95 209//95 208//95
f 213//95 211//95 212//95 214//95
f 216//95 213//95 214//95 215//95
f 210//95 216//95 215//95
f 217//95 220//95 219//95 218//95
f 220//95 222//95 221//95 219//95
f 223//95 217//95 218//95
f 228//96 232//96 230//96 229//96
f 231//96 233//96 232//96 228//96
f 234//96 233//96 231//96
f 235//96 239//96 237//96 236//96
f 238//96 240//96 239//96 235//96
f 241//96 240//96 238//96
f 243//96 245//96 244//96 247//96
f 247//96 244//96 246//96 248//96
f 242//96 245//96 243//96
f 215//97 240//97 241//97 210//97
f 223//98 242//98 243//98 217//98
f 219//99 244//99 245//99 218//99
f 221//100 246//100 244//100 219//100
f 217//101 243//101 247//101 220//101
f 222//102 248//102 246//102 221//102
f 218//103 245//103 242//103 223//103
f 220//104 247//104 248//104 222//104
f 206//105 228//105 229//105 204//105
f 204//106 229//106 230//106 205//106
f 209//107 231//107 228//107 206//107
f 205//108 230//108 232//108 207//108
f 207//109 232//109 233//109 208//109
f 203//110 234//110 231//110 209//110
f 208//111 233//111 234//111 203//111
f 213//112 235//112 236//112 211//112
f 211//113 236//113 237//113 212//113
f 216//114 238//114 235//114 213//114
f 212//115 237//115 239//115 214//115
f 214//116 239//116 240//116 215//116
f 210//117 241//117 238//117 216//117
f 256//118 254//118 255//118 257//118
f 259//118 256//118 257//118 258//118
f 253//118 259//118 258//118
f 263//118 261//118 262//118 264//118
f 266//118 263//118 264//118 265//118
f 260//118 266//118 265//118
f 267//118 270//118 269//118 268//118
f 270//118 272//118 271//118 269//118
f 273//118 267//118 268//118
f 278//119 282//119 280//119 279//119
f 281//119 283//119 282//119 278//119
f 284//119 283//119 281//119
f 285//119 289//119 287//119 286//119
f 288//119 290//119 289//119 285//119
f 291//119 290//119 288//119
f 293//119 295//119 294//119 297//119
f 297//119 294//119 296//119 298//119
f 292//119 295//119 293//119
f 265//120 290//120 291//120 260//120
f 273//121 292//121 293//121 267//121
f 269//122 294//122 295//122 268//122
f 271//123 296//123 294//123 269//123
f 267//124 293//124 297//124 270//124
f 272//125 298//125 296//125 271//125
f 268//126 295//126 292//126 273//126
f 270//127 297//127 298//127 272//127
f 256//128 278//128 279//128 254//128
f 254//129 279//129 280//129 255//129
f 259//130 281//130 278//130 256//130
f 255//131 280//131 282//131 257//131
f 257//132 282//132 283//132 258//132
f 253//133 284//133 281//133 259//133
f 258//134 283//134 284//134 253//134
f 263//135 285//135 286//135 261//135
f 261//136 286//136 287//136 262//136
f 266//137 288//137 285//137 263//137
f 262//138 287//138 289//138 264//138
f 264//139 289//139 290//139 265//139
f 260//140 291//140 288//140 266//140
f 306//141 304//141 305//141 307//141
f 309//141 306//141 307//141 308//141
f 303//141 309//141 308//141
f 313//141 311//141 312//141 314//141
f 316//141 313//141 314//141 315//141
f 310//141 316//141 315//141
f 317//141 320//141 319//141 318//141
f 320//141 322//141 321//141 319//141
f 323//141 317//141 318//141
f 328//142 332//142 330//142 329//142
f 331//142 333//142 332//142 328//142
f 334//142 333//142 331//142
f 335//142 339//142 337//142 336//142
f 338//142 340//142 339//142 335//142
f 341//142 340//142 338//142
f 343//142 345//142 344//142 347//142
f 347//142 344//142 346//142 348//142
f 342//142 345//142 343//142
f 315//143 340//143 341//143 310//143
f 323//144 342//144 343//144 317//144
f 319//145 344//145 345//145 318//145
f 321//146 346//146 344//146 319//146
f 317//147 343//147 347//147 320//147
f 322//148 348//148 346//148 321//148
f 318//149 345//149 342//149 323//149
f 320//150 347//150 348//150 322//150
f 306//151 328//151 329//151 304//151
f 304//152 329//152 330//152 305//152
f 309//153 331//153 328//153 306//153
f 305//154 330//154 332//154 307//154
f 307//155 332//155 333//155 308//155
f 303//156 334//156 331//156 309//156
f 308//157 333//157 334//157 303//157
f 313//158 335//158 336//158 311//158
f 311//159 336//159 337//159 312//159
f 316//160 338//160 335//160 313//160
f 312//161 337//161 339//161 314//161
f 314//162 339//162 340//162 315//162
f 310//163 341//163 338//163 316//163
f 363//164 364//164 365//164 366//164 367//164 368//164 369//164
f 7//165 9//165 367//165 366//165
f 13//166 1//166 363//166 369//166
f 3//167 5//167 365//167 364//167
f 9//168 11//168 368//168 367//168
f 1//169 3//169 364//169 363//169
f 5//170 7//170 366//170 365//170
`,Os=`# Blender MTL File: 'Cactus_3.blend'
# Material Count: 2

newmtl DarkGreen2
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl LightOrange
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.439078 0.263352 0.084138
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,ks=`# Blender v2.79 (sub 0) OBJ File: 'Cactus_3.blend'
# www.blender.org
mtllib Cactus_3.mtl
o Cactus_3_Cube.019
v -0.088040 0.134298 -0.001694
v 0.001694 0.134298 -0.088040
v 0.088040 0.134298 0.001694
v -0.001694 0.134298 0.088040
v 0.000000 -0.007683 0.000000
v 0.110648 0.647540 0.002128
v -0.000000 0.714030 0.000000
v -0.110648 0.647540 -0.002128
v -0.002128 0.647540 0.110648
v 0.002128 0.647540 -0.110648
v -0.001230 0.008243 0.063933
v 0.063933 0.008243 0.001230
v 0.001230 0.008243 -0.063933
v -0.063933 0.008243 -0.001230
v -0.047950 -0.003702 -0.000922
v -0.067300 0.134298 0.064760
v -0.047027 0.008243 -0.048872
v 0.000922 -0.003702 -0.047950
v 0.048872 0.008243 -0.047027
v 0.047950 -0.003702 0.000922
v 0.047027 0.008243 0.048872
v -0.000922 -0.003702 0.047950
v -0.145796 0.511371 -0.002805
v 0.002805 0.511371 -0.145796
v 0.145796 0.511371 0.002805
v -0.002805 0.511371 0.145796
v -0.073735 0.697408 -0.001418
v 0.001418 0.697408 -0.073735
v 0.073735 0.697408 0.001418
v -0.001418 0.697408 0.073735
v 0.084582 0.647540 -0.081390
v 0.081390 0.647540 0.084582
v -0.084582 0.647540 0.081390
v -0.081390 0.647540 -0.084582
v -0.048872 0.008243 0.047027
v -0.064760 0.134298 -0.067300
v 0.067300 0.134298 -0.064760
v 0.064760 0.134298 0.067300
v -0.001346 0.047720 0.069960
v 0.069960 0.047720 0.001346
v 0.001346 0.047720 -0.069960
v -0.069960 0.047720 -0.001346
v -0.002743 0.394642 0.142596
v -0.142596 0.394642 -0.002743
v 0.142596 0.394642 0.002743
v 0.002743 0.394642 -0.142596
v -0.036202 -0.000605 0.034835
v -0.034835 -0.000605 -0.036202
v 0.034835 -0.000605 0.036202
v 0.036202 -0.000605 -0.034835
v -0.111450 0.511371 0.107243
v -0.107243 0.511371 -0.111450
v 0.111450 0.511371 -0.107243
v 0.107243 0.511371 0.111450
v -0.058463 0.684479 0.056256
v -0.056256 0.684479 -0.058463
v 0.058463 0.684479 -0.056256
v 0.056256 0.684479 0.058463
v -0.053479 0.047720 0.051461
v -0.051461 0.047720 -0.053479
v 0.053479 0.047720 -0.051461
v 0.051461 0.047720 0.053479
v -0.104890 0.394642 -0.109005
v 0.109005 0.394642 -0.104890
v 0.104890 0.394642 0.109005
v -0.109005 0.394642 0.104890
v 0.102515 0.610641 0.005141
v 0.104518 0.612967 -0.005657
v 0.104943 0.601985 -0.007945
v 0.102939 0.599658 0.002853
v 0.177702 0.606313 0.012322
v 0.133648 0.405930 0.007054
v 0.133648 0.405733 -0.003193
v 0.133648 0.395485 -0.002996
v 0.133648 0.395682 0.007251
v 0.202338 0.400708 0.002029
v 0.093041 0.199498 -0.001740
v 0.096116 0.201570 -0.011122
v 0.096473 0.191701 -0.013184
v 0.093398 0.189629 -0.003802
v 0.159104 0.193611 0.013191
v 0.068918 0.094762 0.010181
v 0.067432 0.096698 0.000393
v 0.068044 0.086839 -0.001651
v 0.069530 0.084902 0.008137
v 0.135227 0.096799 -0.004678
v 0.071090 0.613231 0.078084
v 0.079377 0.614654 0.072511
v 0.079634 0.604798 0.070376
v 0.071346 0.603375 0.075949
v 0.113872 0.598208 0.128738
v 0.089763 0.405848 0.099625
v 0.096895 0.405654 0.092493
v 0.096757 0.395568 0.092630
v 0.089625 0.395762 0.099762
v 0.141067 0.400708 0.143933
v 0.081852 0.301544 0.087359
v 0.089460 0.302313 0.082224
v 0.090285 0.293141 0.082073
v 0.082678 0.292372 0.087208
v 0.120423 0.299593 0.135950
v 0.054774 0.668545 0.067035
v 0.062873 0.669054 0.059278
v 0.065813 0.658484 0.061654
v 0.057715 0.657974 0.069411
v 0.108524 0.688617 0.116344
v -0.006542 0.508203 0.127903
v 0.002666 0.508026 0.127902
v 0.002489 0.498817 0.127902
v -0.006720 0.498994 0.127903
v -0.002025 0.503510 0.189629
v -0.012400 0.302087 0.121351
v -0.002834 0.302747 0.118216
v -0.002111 0.292685 0.118305
v -0.011677 0.292025 0.121440
v 0.013661 0.299462 0.184086
v -0.011047 0.197423 0.098024
v -0.003277 0.198474 0.095241
v -0.001958 0.189526 0.095851
v -0.009727 0.188475 0.098634
v 0.011398 0.199986 0.149317
v -0.004569 0.669052 0.087549
v 0.005178 0.670488 0.089718
v 0.005892 0.660923 0.092844
v -0.003855 0.659487 0.090674
v -0.016105 0.684198 0.152813
v -0.080882 0.611083 0.070601
v -0.074343 0.611802 0.076902
v -0.073674 0.601903 0.077384
v -0.080212 0.601185 0.071083
v -0.119590 0.605771 0.117984
v -0.095716 0.302380 0.078674
v -0.087622 0.303891 0.082574
v -0.086169 0.294084 0.083109
v -0.094263 0.292572 0.079208
v -0.117265 0.296925 0.135959
v -0.055542 0.095862 0.049450
v -0.051291 0.094151 0.053782
v -0.052963 0.087565 0.052999
v -0.057214 0.089276 0.048667
v -0.083863 0.094060 0.081477
v -0.064033 0.672550 0.057120
v -0.057866 0.671216 0.066405
v -0.060288 0.660254 0.066439
v -0.066455 0.661589 0.057154
v -0.122892 0.679953 0.104069
v -0.108213 0.612709 -0.011996
v -0.105075 0.612826 -0.002409
v -0.104228 0.602775 -0.002565
v -0.107366 0.602658 -0.012151
v -0.170224 0.602025 0.013740
v -0.129717 0.511886 0.001576
v -0.128501 0.511413 0.010694
v -0.126859 0.502376 0.010006
v -0.128075 0.502849 0.000889
v -0.188476 0.495625 0.013222
v -0.124756 0.415284 -0.026151
v -0.121618 0.415400 -0.016564
v -0.121915 0.405230 -0.021996
v -0.127186 0.404924 -0.030592
v -0.182345 0.405027 0.009149
v -0.116658 0.304721 -0.002595
v -0.118643 0.301974 0.008107
v -0.118142 0.291089 0.005406
v -0.116157 0.293837 -0.005296
v -0.191374 0.297904 -0.012315
v -0.088132 0.668671 -0.008148
v -0.088348 0.669129 0.001927
v -0.091726 0.659630 0.002286
v -0.091510 0.659172 -0.007789
v -0.153618 0.686709 -0.005324
v -0.068214 0.612998 -0.084638
v -0.072742 0.612421 -0.075642
v -0.071748 0.602383 -0.075786
v -0.067220 0.602960 -0.084782
v -0.130030 0.602180 -0.110784
v -0.089767 0.405848 -0.099623
v -0.096899 0.405654 -0.092490
v -0.096761 0.395568 -0.092627
v -0.089630 0.395762 -0.099760
v -0.141074 0.400708 -0.143929
v -0.091631 0.305227 -0.064725
v -0.099922 0.303999 -0.059111
v -0.098699 0.293993 -0.059492
v -0.090407 0.295221 -0.065106
v -0.132795 0.297144 -0.118223
v -0.045098 0.095446 -0.049405
v -0.053502 0.093615 -0.043830
v -0.052917 0.083665 -0.046216
v -0.044514 0.085495 -0.051791
v -0.088137 0.100534 -0.103188
v -0.056559 0.668671 -0.068080
v -0.063836 0.669129 -0.061108
v -0.066478 0.659630 -0.063243
v -0.059201 0.659172 -0.070215
v -0.104862 0.686709 -0.112388
v -0.012438 0.515114 -0.125028
v -0.022521 0.514103 -0.124799
v -0.021441 0.503123 -0.124132
v -0.011359 0.504134 -0.124361
v -0.018054 0.504893 -0.192366
v 0.003855 0.299225 -0.115605
v -0.007172 0.299015 -0.117700
v -0.006496 0.288081 -0.120155
v 0.004530 0.288292 -0.118061
v 0.012042 0.310660 -0.189939
v 0.023687 0.201997 -0.086480
v 0.013601 0.201803 -0.086479
v 0.013795 0.191717 -0.086479
v 0.023881 0.191911 -0.086480
v 0.018735 0.196857 -0.154088
v 0.095063 0.508203 -0.085822
v 0.088551 0.508026 -0.092333
v 0.088676 0.498817 -0.092208
v 0.095188 0.498994 -0.085697
v 0.135513 0.503510 -0.132667
v 0.102218 0.400202 -0.083063
v 0.097766 0.398581 -0.091969
v 0.099630 0.388704 -0.091103
v 0.104082 0.390325 -0.082197
v 0.160294 0.402920 -0.118300
v 0.067517 0.198658 -0.062717
v 0.061924 0.198098 -0.071093
v 0.063096 0.188078 -0.071205
v 0.068689 0.188639 -0.062829
v 0.121019 0.200305 -0.104629
vn -0.9364 -0.1944 0.2922
vn -0.9243 -0.1950 -0.3280
vn -0.2922 -0.1950 -0.9363
vn -0.9245 -0.1944 -0.3280
vn -0.2922 -0.1944 -0.9364
vn 0.3280 -0.1950 -0.9243
vn 0.9363 -0.1950 -0.2922
vn 0.3280 -0.1944 -0.9245
vn 0.9364 -0.1944 -0.2922
vn 0.9243 -0.1950 0.3280
vn 0.2922 -0.1950 0.9363
vn 0.9245 -0.1944 0.3280
vn 0.2922 -0.1944 0.9364
vn -0.3280 -0.1950 0.9243
vn -0.3280 -0.1944 0.9245
vn -0.0967 -0.9902 -0.1005
vn 0.1005 -0.9902 -0.0967
vn 0.0967 -0.9902 0.1005
vn -0.1005 -0.9902 0.0967
vn 0.9543 -0.0260 -0.2978
vn 0.3343 -0.0260 -0.9421
vn 0.9154 0.2379 0.3248
vn 0.9272 0.2379 -0.2894
vn 0.7403 0.6144 -0.2730
vn 0.7293 0.6144 0.3013
vn -0.9543 -0.0260 0.2978
vn 0.9421 -0.0260 0.3343
vn 0.2978 -0.0260 0.9543
vn -0.9421 -0.0260 -0.3343
vn -0.3343 -0.0260 0.9421
vn 0.2466 0.9396 -0.2373
vn -0.2373 0.9396 -0.2466
vn -0.2466 0.9396 0.2373
vn 0.2373 0.9396 0.2466
vn -0.9154 0.2379 -0.3248
vn -0.9272 0.2379 0.2894
vn -0.7403 0.6144 0.2730
vn -0.7293 0.6144 -0.3013
vn -0.3248 0.2379 0.9154
vn 0.2894 0.2379 0.9272
vn 0.2730 0.6144 0.7403
vn -0.3013 0.6144 0.7293
vn 0.3248 0.2379 -0.9154
vn -0.2894 0.2379 -0.9272
vn -0.2730 0.6144 -0.7403
vn 0.3013 0.6144 -0.7293
vn 0.1969 -0.8305 0.5210
vn 0.2948 -0.1434 0.9447
vn -0.3310 -0.1434 0.9327
vn -0.2168 -0.8305 0.5131
vn 0.5210 -0.8305 -0.1969
vn 0.9447 -0.1434 -0.2948
vn 0.9327 -0.1434 0.3310
vn 0.5131 -0.8305 0.2168
vn -0.1969 -0.8305 -0.5210
vn -0.2948 -0.1434 -0.9447
vn 0.3310 -0.1434 -0.9327
vn 0.2168 -0.8305 -0.5131
vn -0.5210 -0.8305 0.1969
vn -0.9447 -0.1434 0.2948
vn -0.9327 -0.1434 -0.3310
vn -0.5131 -0.8305 -0.2168
vn -0.2978 -0.0260 -0.9543
vn -0.9363 -0.1950 0.2922
vn -0.9832 0.0000 -0.1824
vn -0.1048 -0.2067 0.9728
vn 0.2511 0.2067 -0.9456
vn 0.1109 -0.9756 -0.1897
vn 0.0354 0.9756 0.2168
vn -1.0000 0.0000 -0.0000
vn 0.0744 0.0192 0.9970
vn 0.0744 -0.0192 -0.9970
vn 0.0744 -0.9970 0.0192
vn 0.0744 0.9970 -0.0192
vn -0.9517 0.0294 -0.3055
vn -0.2332 -0.2070 0.9502
vn 0.3748 0.2026 -0.9047
vn 0.1061 -0.9777 -0.1811
vn 0.0355 0.9733 0.2266
vn -0.9872 -0.0887 0.1323
vn 0.2203 -0.1849 0.9578
vn -0.0734 0.1981 -0.9774
vn 0.1340 -0.9681 -0.2119
vn 0.0129 0.9813 0.1922
vn -0.5696 0.1598 -0.8062
vn -0.7769 -0.1526 0.6109
vn 0.8616 0.1288 -0.4909
vn 0.0678 -0.9862 -0.1511
vn 0.0170 0.9624 0.2711
vn -0.7071 0.0000 -0.7071
vn -0.6524 0.0192 0.7576
vn 0.7576 -0.0192 -0.6524
vn 0.0390 -0.9970 0.0662
vn 0.0662 0.9970 0.0390
vn -0.5565 -0.0365 -0.8300
vn -0.7823 -0.0805 0.6177
vn 0.8651 0.0859 -0.4942
vn 0.1308 -0.9904 0.0455
vn -0.0479 0.9958 0.0780
vn -0.6411 -0.3337 -0.6912
vn -0.6717 -0.0204 0.7405
vn 0.7671 0.0701 -0.6377
vn 0.3089 -0.9142 0.2624
vn -0.2135 0.9638 -0.1596
vn -0.0000 0.0000 -1.0000
vn -0.9970 0.0192 0.0744
vn 0.9970 -0.0192 0.0744
vn -0.0192 -0.9970 0.0744
vn 0.0192 0.9970 0.0744
vn -0.3094 -0.0307 -0.9504
vn -0.9226 -0.0629 0.3806
vn 0.9686 0.0675 -0.2392
vn 0.0945 -0.9923 0.0796
vn -0.0485 0.9969 0.0619
vn -0.3216 -0.1115 -0.9403
vn -0.9089 -0.1066 0.4031
vn 0.9569 0.1232 -0.2631
vn 0.1833 -0.9724 0.1444
vn -0.1313 0.9913 0.0079
vn 0.2480 -0.2841 -0.9262
vn -0.9820 -0.1208 -0.1455
vn 0.9451 0.1631 0.2834
vn 0.0521 -0.9244 0.3779
vn -0.0890 0.9667 -0.2400
vn 0.6932 0.0118 -0.7207
vn -0.7672 -0.0829 -0.6360
vn 0.6641 0.0811 0.7433
vn 0.0086 -0.9945 0.1045
vn -0.1210 0.9926 0.0124
vn 0.4318 0.0148 -0.9018
vn -0.9195 -0.1559 -0.3607
vn 0.8552 0.1537 0.4949
vn 0.1234 -0.9844 0.1255
vn -0.1932 0.9809 0.0207
vn 0.6925 -0.0907 -0.7157
vn -0.7305 0.2605 -0.6313
vn 0.6281 -0.2472 0.7379
vn -0.2874 -0.9532 -0.0944
vn 0.1747 0.9623 0.2086
vn 0.8072 -0.1801 -0.5621
vn -0.6079 0.1319 -0.7830
vn 0.4878 -0.1051 0.8666
vn -0.2752 -0.9603 0.0448
vn 0.1551 0.9871 0.0388
vn 0.9467 0.0846 -0.3109
vn -0.3806 -0.0178 -0.9245
vn 0.2398 0.0052 0.9708
vn 0.0133 -0.9999 0.0078
vn -0.1541 0.9873 0.0385
vn 0.9751 0.1864 -0.1204
vn -0.2042 0.0373 -0.9782
vn 0.0591 -0.0651 0.9961
vn 0.1053 -0.9923 -0.0655
vn -0.2504 0.9645 0.0834
vn 0.9039 0.0819 -0.4199
vn -0.5254 0.4364 -0.7304
vn 0.4129 -0.4385 0.7983
vn 0.0165 -0.9995 0.0255
vn -0.1526 0.9876 0.0380
vn 0.9832 0.0000 0.1824
vn 0.1032 0.2441 -0.9643
vn -0.2495 -0.2441 0.9371
vn -0.0286 -0.9669 -0.2535
vn -0.1177 0.9669 0.2264
vn 0.9420 -0.3337 0.0354
vn -0.0487 -0.0204 -0.9986
vn -0.0915 0.0701 0.9933
vn -0.4040 -0.9142 0.0329
vn 0.2638 0.9638 -0.0381
vn 0.8882 0.0815 0.4522
vn 0.3815 0.0510 -0.9230
vn -0.5136 -0.0631 0.8557
vn 0.0322 -0.9983 -0.0478
vn -0.1644 0.9862 -0.0194
vn 0.7072 0.0000 0.7071
vn 0.6524 0.0192 -0.7577
vn -0.7576 -0.0192 0.6525
vn -0.0391 -0.9970 -0.0662
vn -0.0662 0.9970 -0.0390
vn 0.5566 0.0365 0.8300
vn 0.7782 0.1186 -0.6167
vn -0.8610 -0.1241 0.4932
vn 0.0796 -0.9919 -0.0994
vn -0.1624 0.9864 -0.0241
vn 0.5696 -0.1598 0.8062
vn 0.7753 0.1900 -0.6024
vn -0.8600 -0.1662 0.4824
vn 0.0145 -0.9563 -0.2921
vn -0.0992 0.9801 0.1721
vn 0.6411 -0.3337 0.6911
vn 0.6717 -0.0204 -0.7406
vn -0.7671 0.0701 0.6377
vn -0.3089 -0.9142 -0.2624
vn 0.2135 0.9638 0.1596
vn 0.0164 0.0622 0.9979
vn 0.9911 0.0916 -0.0966
vn -0.9935 -0.1008 -0.0519
vn 0.0993 -0.9948 -0.0209
vn -0.1020 0.9848 -0.1410
vn -0.1776 -0.2261 0.9578
vn 0.9928 0.0355 0.1148
vn -0.9663 -0.0019 -0.2573
vn 0.0732 -0.9544 -0.2894
vn -0.0468 0.9881 0.1468
vn 0.0001 0.0000 1.0000
vn 0.9970 0.0192 -0.0745
vn -0.9970 -0.0192 -0.0743
vn 0.0192 -0.9970 -0.0744
vn -0.0192 0.9970 -0.0744
vn -0.7070 0.0000 0.7072
vn 0.7577 0.0192 0.6523
vn -0.6525 -0.0192 -0.7576
vn 0.0662 -0.9970 -0.0391
vn 0.0390 0.9970 -0.0662
vn -0.8781 -0.1252 0.4617
vn 0.5054 0.1696 0.8461
vn -0.3747 -0.1509 -0.9148
vn 0.2496 -0.9670 0.0513
vn -0.1189 0.9856 -0.1200
vn -0.8240 -0.1026 0.5571
vn 0.6143 0.0631 0.7866
vn -0.4916 -0.0478 -0.8695
vn 0.1771 -0.9828 -0.0525
vn -0.0545 0.9980 -0.0304
usemtl DarkGreen2
s off
f 1//1 42//1 59//1 16//1
f 1//2 44//2 63//2 36//2
f 36//3 63//3 46//3 2//3
f 1//4 36//4 60//4 42//4
f 2//5 41//5 60//5 36//5
f 2//6 46//6 64//6 37//6
f 64//7 45//7 3//7 37//7
f 2//8 37//8 61//8 41//8
f 3//9 40//9 61//9 37//9
f 3//10 45//10 65//10 38//10
f 65//11 43//11 4//11 38//11
f 3//12 38//12 62//12 40//12
f 4//13 39//13 62//13 38//13
f 4//14 43//14 66//14 16//14
f 4//15 16//15 59//15 39//15
f 5//16 15//16 48//16 18//16
f 5//17 18//17 50//17 20//17
f 5//18 20//18 49//18 22//18
f 5//19 22//19 47//19 15//19
f 53//20 25//20 45//20 64//20
f 46//21 24//21 53//21 64//21
f 6//22 32//22 54//22 25//22
f 6//23 25//23 53//23 31//23
f 6//24 31//24 57//24 29//24
f 6//25 29//25 58//25 32//25
f 66//26 51//26 23//26 44//26
f 45//27 25//27 54//27 65//27
f 54//28 26//28 43//28 65//28
f 44//29 23//29 52//29 63//29
f 43//30 26//30 51//30 66//30
f 7//31 29//31 57//31 28//31
f 7//32 28//32 56//32 27//32
f 7//33 27//33 55//33 30//33
f 7//34 30//34 58//34 29//34
f 8//35 34//35 52//35 23//35
f 8//36 23//36 51//36 33//36
f 8//37 33//37 55//37 27//37
f 8//38 27//38 56//38 34//38
f 9//39 33//39 51//39 26//39
f 9//40 26//40 54//40 32//40
f 9//41 32//41 58//41 30//41
f 9//42 30//42 55//42 33//42
f 10//43 31//43 53//43 24//43
f 10//44 24//44 52//44 34//44
f 10//45 34//45 56//45 28//45
f 10//46 28//46 57//46 31//46
f 11//47 22//47 49//47 21//47
f 11//48 21//48 62//48 39//48
f 11//49 39//49 59//49 35//49
f 11//50 35//50 47//50 22//50
f 12//51 20//51 50//51 19//51
f 12//52 19//52 61//52 40//52
f 12//53 40//53 62//53 21//53
f 12//54 21//54 49//54 20//54
f 13//55 18//55 48//55 17//55
f 13//56 17//56 60//56 41//56
f 13//57 41//57 61//57 19//57
f 13//58 19//58 50//58 18//58
f 14//59 15//59 47//59 35//59
f 14//60 35//60 59//60 42//60
f 14//61 42//61 60//61 17//61
f 14//62 17//62 48//62 15//62
f 63//63 52//63 24//63 46//63
f 16//64 66//64 44//64 1//64
usemtl LightOrange
f 69//65 70//65 67//65 68//65
f 67//66 70//66 71//66
f 69//67 68//67 71//67
f 70//68 69//68 71//68
f 68//69 67//69 71//69
f 74//70 75//70 72//70 73//70
f 72//71 75//71 76//71
f 74//72 73//72 76//72
f 75//73 74//73 76//73
f 73//74 72//74 76//74
f 79//75 80//75 77//75 78//75
f 77//76 80//76 81//76
f 79//77 78//77 81//77
f 80//78 79//78 81//78
f 78//79 77//79 81//79
f 84//80 85//80 82//80 83//80
f 82//81 85//81 86//81
f 84//82 83//82 86//82
f 85//83 84//83 86//83
f 83//84 82//84 86//84
f 89//85 90//85 87//85 88//85
f 87//86 90//86 91//86
f 89//87 88//87 91//87
f 90//88 89//88 91//88
f 88//89 87//89 91//89
f 94//90 95//90 92//90 93//90
f 92//91 95//91 96//91
f 94//92 93//92 96//92
f 95//93 94//93 96//93
f 93//94 92//94 96//94
f 99//95 100//95 97//95 98//95
f 97//96 100//96 101//96
f 99//97 98//97 101//97
f 100//98 99//98 101//98
f 98//99 97//99 101//99
f 104//100 105//100 102//100 103//100
f 102//101 105//101 106//101
f 104//102 103//102 106//102
f 105//103 104//103 106//103
f 103//104 102//104 106//104
f 109//105 110//105 107//105 108//105
f 107//106 110//106 111//106
f 109//107 108//107 111//107
f 110//108 109//108 111//108
f 108//109 107//109 111//109
f 114//110 115//110 112//110 113//110
f 112//111 115//111 116//111
f 114//112 113//112 116//112
f 115//113 114//113 116//113
f 113//114 112//114 116//114
f 119//115 120//115 117//115 118//115
f 117//116 120//116 121//116
f 119//117 118//117 121//117
f 120//118 119//118 121//118
f 118//119 117//119 121//119
f 124//120 125//120 122//120 123//120
f 122//121 125//121 126//121
f 124//122 123//122 126//122
f 125//123 124//123 126//123
f 123//124 122//124 126//124
f 129//125 130//125 127//125 128//125
f 127//126 130//126 131//126
f 129//127 128//127 131//127
f 130//128 129//128 131//128
f 128//129 127//129 131//129
f 134//130 135//130 132//130 133//130
f 132//131 135//131 136//131
f 134//132 133//132 136//132
f 135//133 134//133 136//133
f 133//134 132//134 136//134
f 139//135 140//135 137//135 138//135
f 137//136 140//136 141//136
f 139//137 138//137 141//137
f 140//138 139//138 141//138
f 138//139 137//139 141//139
f 144//140 145//140 142//140 143//140
f 142//141 145//141 146//141
f 144//142 143//142 146//142
f 145//143 144//143 146//143
f 143//144 142//144 146//144
f 149//145 150//145 147//145 148//145
f 147//146 150//146 151//146
f 149//147 148//147 151//147
f 150//148 149//148 151//148
f 148//149 147//149 151//149
f 154//150 155//150 152//150 153//150
f 152//151 155//151 156//151
f 154//152 153//152 156//152
f 155//153 154//153 156//153
f 153//154 152//154 156//154
f 159//155 160//155 157//155 158//155
f 157//156 160//156 161//156
f 159//157 158//157 161//157
f 160//158 159//158 161//158
f 158//159 157//159 161//159
f 164//160 165//160 162//160 163//160
f 162//161 165//161 166//161
f 164//162 163//162 166//162
f 165//163 164//163 166//163
f 163//164 162//164 166//164
f 169//165 170//165 167//165 168//165
f 167//166 170//166 171//166
f 169//167 168//167 171//167
f 170//168 169//168 171//168
f 168//169 167//169 171//169
f 174//170 175//170 172//170 173//170
f 172//171 175//171 176//171
f 174//172 173//172 176//172
f 175//173 174//173 176//173
f 173//174 172//174 176//174
f 179//175 180//175 177//175 178//175
f 177//176 180//176 181//176
f 179//177 178//177 181//177
f 180//178 179//178 181//178
f 178//179 177//179 181//179
f 184//180 185//180 182//180 183//180
f 182//181 185//181 186//181
f 184//182 183//182 186//182
f 185//183 184//183 186//183
f 183//184 182//184 186//184
f 189//185 190//185 187//185 188//185
f 187//186 190//186 191//186
f 189//187 188//187 191//187
f 190//188 189//188 191//188
f 188//189 187//189 191//189
f 194//190 195//190 192//190 193//190
f 192//191 195//191 196//191
f 194//192 193//192 196//192
f 195//193 194//193 196//193
f 193//194 192//194 196//194
f 199//195 200//195 197//195 198//195
f 197//196 200//196 201//196
f 199//197 198//197 201//197
f 200//198 199//198 201//198
f 198//199 197//199 201//199
f 204//200 205//200 202//200 203//200
f 202//201 205//201 206//201
f 204//202 203//202 206//202
f 205//203 204//203 206//203
f 203//204 202//204 206//204
f 209//205 210//205 207//205 208//205
f 207//206 210//206 211//206
f 209//207 208//207 211//207
f 210//208 209//208 211//208
f 208//209 207//209 211//209
f 214//210 215//210 212//210 213//210
f 212//211 215//211 216//211
f 214//212 213//212 216//212
f 215//213 214//213 216//213
f 213//214 212//214 216//214
f 219//215 220//215 217//215 218//215
f 217//216 220//216 221//216
f 219//217 218//217 221//217
f 220//218 219//218 221//218
f 218//219 217//219 221//219
f 224//220 225//220 222//220 223//220
f 222//221 225//221 226//221
f 224//222 223//222 226//222
f 225//223 224//223 226//223
f 223//224 222//224 226//224
`,As=`# Blender MTL File: 'BushBerries_4.blend'
# Material Count: 2

newmtl Berry
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.373759 0.021626 0.030571
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Green_Bush
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,js=`# Blender v2.79 (sub 0) OBJ File: 'BushBerries_4.blend'
# www.blender.org
mtllib BushBerries_4.mtl
o BushBerries_4_Cube.044
v 0.515865 0.633090 0.416401
v 0.791311 0.666629 -0.025531
v -0.543392 0.668272 -0.494890
v -0.772269 0.660964 0.043637
v 0.038290 1.033864 0.550632
v -0.438506 1.027232 0.502317
v 0.002870 0.664845 -0.546984
v -0.487696 0.641521 0.510863
v -0.343553 1.191074 0.048723
v 0.013782 1.201543 0.033547
v -0.612566 0.982115 0.069862
v 0.635771 0.983584 -0.006958
v -0.432737 0.993150 -0.360868
v 0.465740 1.023216 -0.401536
v 0.642174 -0.012540 -0.051784
v -0.508559 0.407924 0.528207
v 0.003282 0.448758 -0.595369
v -0.784011 0.442366 0.020275
v -0.565458 0.439627 -0.541206
v 0.820184 0.449195 -0.049228
v 0.581898 0.432502 0.465153
v 0.060581 0.230195 0.582701
v -0.563943 0.245087 -0.550339
v 0.563267 0.226678 -0.579790
v 0.856558 0.257533 -0.061791
v -0.799514 0.238755 0.009297
v -0.509756 0.222901 0.526809
v 0.537760 0.844189 -0.445430
v -0.488416 0.850583 -0.417919
v 0.733386 0.812869 -0.017508
v -0.697466 0.847127 0.061365
v -0.492368 0.841240 0.541512
v 0.027975 0.847090 0.555877
v 0.494825 0.805884 0.414824
v 0.012417 0.848059 -0.546476
v 0.005746 0.236538 -0.630267
v 0.613661 0.264172 0.496305
v 0.052951 0.402373 0.589912
v 0.543604 0.443183 -0.520418
v -0.274573 -0.022078 -0.013461
v 0.004306 1.041899 -0.496819
v 0.362434 1.182413 0.018755
v 0.534848 0.676737 -0.477966
v 0.495636 0.996819 0.436009
v 0.035232 0.629860 0.558607
v -0.669193 0.698657 -0.365367
v -0.599683 0.668505 -0.306991
v -0.615399 0.675471 -0.362111
v -0.602986 0.733002 -0.328749
v -0.687365 0.604955 -0.335760
v -0.644675 0.689669 -0.308185
v -0.556279 1.070152 0.125060
v -0.529395 1.020692 0.230281
v -0.612866 1.003338 0.145087
v -0.461299 1.004598 0.115142
v -0.589084 1.075361 0.205990
v -0.504815 1.071866 0.187245
v 0.279164 0.607545 0.615765
v 0.182094 0.588364 0.498075
v 0.270649 0.594403 0.496269
v 0.219384 0.551979 0.546322
v 0.205101 0.683704 0.522522
v 0.182596 0.596002 0.565647
v -0.428305 0.768360 0.577850
v -0.504458 0.751527 0.488850
v -0.400822 0.760068 0.511951
v -0.446108 0.684517 0.570135
v -0.456291 0.816197 0.542952
v -0.475262 0.761499 0.569139
v 0.507249 1.163333 0.236023
v 0.443775 1.148290 0.163520
v 0.498891 1.156209 0.182600
v 0.480937 1.079824 0.216626
v 0.467959 1.222633 0.187312
v 0.449883 1.155450 0.217896
v 0.034382 1.163458 -0.160797
v -0.026010 1.190449 -0.239486
v 0.017083 1.180189 -0.232108
v -0.027497 1.119492 -0.236383
v 0.010910 1.243872 -0.193312
v -0.031397 1.180488 -0.200930
v 0.415796 0.552182 -0.544133
v 0.389193 0.594989 -0.601043
v 0.418248 0.544990 -0.603413
v 0.306801 0.543462 -0.563632
v 0.474158 0.597538 -0.572601
v 0.391129 0.594759 -0.546683
v 0.794472 0.600090 0.060236
v 0.756133 0.659362 -0.104007
v 0.852771 0.611255 -0.061936
v 0.734076 0.578135 -0.054592
v 0.804444 0.673331 -0.002006
v 0.690024 0.646885 0.012427
v 0.750768 0.195060 0.392444
v 0.711824 0.255234 0.224703
v 0.792010 0.210596 0.274915
v 0.710711 0.193261 0.288527
v 0.781479 0.294111 0.345736
v 0.648529 0.242573 0.338981
v 0.132882 0.264040 -0.619627
v 0.110045 0.303187 -0.705248
v 0.149918 0.275615 -0.680100
v 0.088113 0.241240 -0.692212
v 0.171787 0.353992 -0.625517
v 0.084006 0.295393 -0.654675
v -0.754918 0.287223 -0.156022
v -0.791679 0.262410 -0.089987
v -0.816467 0.298160 -0.126705
v -0.821361 0.227154 -0.177457
v -0.759235 0.296433 -0.099682
v -0.752047 0.254762 -0.114537
v -0.703273 0.657714 0.364494
v 0.502056 0.777429 0.422262
v 0.653634 0.799838 -0.013982
v -0.465714 0.814042 -0.385948
v -0.697769 0.803333 0.047551
v -0.462298 0.806622 0.483374
v 0.008716 0.822057 -0.519384
v -0.559478 0.991940 0.333171
v 0.405319 1.132607 0.266609
v 0.510008 1.138210 0.007204
v -0.370587 1.131761 -0.210053
v -0.442449 1.097130 0.060426
v -0.368977 1.164811 0.325272
v 0.000921 1.181408 -0.289284
v -0.193114 1.213559 0.039226
v -0.236383 0.855804 0.571351
v 0.642370 0.801984 0.252477
v -0.561022 0.976598 -0.200730
v 0.711028 0.832047 -0.297618
v -0.253188 1.032932 -0.475494
v -0.290097 0.240169 -0.650643
v 0.804698 0.275417 0.302336
v 0.731729 0.230200 -0.390208
v -0.732581 0.246459 -0.325394
v -0.734303 0.228329 0.352716
v -0.229848 0.223261 0.577302
v -0.490138 0.036912 0.454928
v 0.612522 0.048156 -0.483736
v -0.742911 0.039285 0.008964
v -0.521270 0.051977 -0.454575
v 0.854169 0.055261 -0.062379
v -0.736265 0.413221 0.358545
v 0.685604 0.643523 0.269507
v 0.730248 0.679091 -0.336280
v -0.700458 0.658907 -0.275902
v -0.277134 0.664238 -0.550024
v -0.236436 0.631334 0.565238
v -0.528710 0.468169 0.567964
v 0.585729 0.507197 -0.568803
v -0.861082 0.490980 0.038702
v -0.590978 0.494534 -0.563222
v 0.850680 0.501514 -0.043891
v 0.043410 0.457037 0.612812
v 0.759208 0.451460 0.286330
v 0.708226 0.453189 -0.359585
v -0.756685 0.441022 -0.324431
v -0.280774 0.452346 -0.581230
v -0.235257 0.402404 0.587666
v -0.015194 0.035951 0.509583
v 0.059873 0.376187 0.569600
v 0.743280 0.425239 -0.052211
v -0.543440 0.409678 -0.524586
v -0.769144 0.399948 0.007155
v 0.532269 0.386139 -0.534669
v -0.495409 0.368766 0.508981
v -0.642893 0.857626 0.350881
v -0.214515 1.027756 0.533142
v 0.645967 0.989056 0.285133
v -0.649358 0.838831 -0.240832
v 0.594836 1.005355 -0.267619
v -0.268290 0.842950 -0.544285
v 0.551711 0.900396 -0.458137
v -0.498018 0.880102 -0.435027
v 0.799617 0.852196 -0.016872
v -0.717368 0.873488 0.072722
v -0.520498 0.890004 0.604483
v 0.039352 0.876318 0.662830
v 0.034259 0.795909 0.551501
v 0.504701 0.819234 -0.427855
v 0.029771 1.163545 0.328927
v 0.362158 1.127645 -0.232163
v -0.063433 0.055877 -0.536213
v 0.001838 0.497053 -0.621494
v 0.599940 0.470434 0.515813
v 0.645572 0.058398 0.380645
v 0.539970 0.438709 0.397024
v 0.006620 0.400359 -0.594086
v 0.013083 0.896543 -0.594664
v 0.531130 0.833784 0.472475
v 0.286335 0.819187 0.515924
v 0.283506 0.864414 -0.466388
v 0.293522 0.231738 -0.606558
v 0.346702 0.243273 0.553739
v 0.332802 0.415956 0.538894
v 0.287558 0.447072 -0.562315
v 0.269890 -0.032125 -0.034505
v 0.254483 1.023025 -0.432914
v 0.221876 1.214142 0.026396
v 0.288997 0.677534 -0.556485
v 0.293165 1.023449 0.520366
v 0.314291 0.640699 0.558437
v -0.635156 0.724565 -0.349147
v -0.659950 0.697325 -0.330695
v -0.639257 0.686866 -0.371474
v -0.719347 0.653235 -0.378150
v -0.577433 0.707448 -0.304633
v -0.621643 0.678090 -0.284672
v -0.592636 0.666215 -0.339115
v -0.617001 0.621479 -0.298422
v -0.623947 0.613706 -0.403085
v -0.600478 0.713175 -0.354627
v -0.624767 0.716604 -0.310428
v -0.701995 0.651798 -0.278265
v -0.514477 1.044163 0.105338
v -0.534066 1.073244 0.158402
v -0.603893 1.041546 0.098857
v -0.574985 1.076568 0.168868
v -0.473037 0.988466 0.197821
v -0.518716 1.047635 0.204347
v -0.582810 0.985158 0.216099
v -0.561626 1.051185 0.211264
v -0.615985 1.045370 0.189926
v -0.539186 0.983926 0.106294
v -0.491805 1.042874 0.163548
v -0.541990 1.097929 0.214513
v 0.253573 0.558091 0.589039
v 0.210163 0.602886 0.611681
v 0.308184 0.602588 0.547749
v 0.262114 0.665118 0.590163
v 0.201386 0.557957 0.525771
v 0.168281 0.590690 0.532610
v 0.221707 0.589713 0.484229
v 0.170378 0.637655 0.483141
v 0.272186 0.654940 0.471478
v 0.254076 0.552187 0.525287
v 0.202482 0.564613 0.553422
v 0.149346 0.649478 0.581128
v -0.427351 0.730120 0.585161
v -0.452407 0.766393 0.583508
v -0.413516 0.767030 0.558415
v -0.420028 0.817025 0.586690
v -0.497921 0.693344 0.506022
v -0.508577 0.755830 0.546061
v -0.442322 0.752303 0.466487
v -0.470857 0.790527 0.528251
v -0.429100 0.800619 0.524110
v -0.404631 0.712465 0.533314
v -0.497325 0.715789 0.600243
v -0.478748 0.796017 0.567318
v 0.506433 1.120402 0.241928
v 0.469763 1.161849 0.262260
v 0.509870 1.160908 0.205100
v 0.510824 1.214807 0.238440
v 0.432561 1.090580 0.156577
v 0.436916 1.150600 0.193566
v 0.477683 1.150295 0.157290
v 0.456187 1.184549 0.174985
v 0.494098 1.192106 0.175863
v 0.506965 1.114172 0.188674
v 0.438224 1.113644 0.238117
v 0.421394 1.202445 0.232341
v -0.000222 1.143654 -0.207641
v -0.013875 1.170752 -0.170571
v 0.046840 1.169727 -0.209080
v 0.028747 1.206733 -0.172044
v -0.057117 1.148895 -0.278608
v -0.038545 1.188091 -0.223180
v -0.003688 1.188046 -0.247385
v -0.020098 1.226408 -0.233477
v 0.038958 1.220174 -0.230269
v 0.004610 1.145779 -0.238506
v -0.046390 1.148037 -0.209218
v -0.023796 1.210554 -0.187895
v 0.365231 0.529274 -0.522899
v 0.404816 0.572579 -0.539339
v 0.421351 0.540636 -0.564956
v 0.442638 0.570178 -0.553452
v 0.330521 0.577946 -0.607192
v 0.381412 0.608882 -0.574803
v 0.401942 0.571915 -0.609412
v 0.430562 0.606055 -0.598214
v 0.445633 0.569451 -0.589761
v 0.348747 0.513823 -0.612513
v 0.368272 0.574743 -0.557678
v 0.434885 0.614644 -0.536451
v 0.757838 0.571250 0.003745
v 0.728573 0.621805 0.057931
v 0.855887 0.591686 0.009060
v 0.818055 0.648540 0.051852
v 0.729760 0.611964 -0.101659
v 0.693274 0.668026 -0.059708
v 0.817728 0.636736 -0.106504
v 0.790398 0.695624 -0.055811
v 0.857061 0.657413 -0.026018
v 0.796925 0.573711 -0.071173
v 0.688592 0.606931 -0.025416
v 0.759619 0.668894 0.007651
v 0.720568 0.186208 0.315304
v 0.688492 0.218319 0.378836
v 0.811492 0.187725 0.337026
v 0.773039 0.244488 0.378599
v 0.708190 0.212790 0.269829
v 0.650399 0.263554 0.268826
v 0.762077 0.232370 0.242109
v 0.748005 0.302315 0.263706
v 0.810866 0.253215 0.302100
v 0.730629 0.193633 0.287636
v 0.695399 0.208835 0.297354
v 0.692897 0.283659 0.364330
v 0.110890 0.247621 -0.659224
v 0.090567 0.278332 -0.613824
v 0.151090 0.264964 -0.653027
v 0.162271 0.303189 -0.593719
v 0.091359 0.270232 -0.714002
v 0.088736 0.305714 -0.685069
v 0.136151 0.290493 -0.701932
v 0.137250 0.360790 -0.708291
v 0.221345 0.315196 -0.672308
v 0.121949 0.250131 -0.687420
v 0.083024 0.267360 -0.674666
v 0.089616 0.336132 -0.617451
v -0.776324 0.259481 -0.204965
v -0.750489 0.269211 -0.134931
v -0.784080 0.300927 -0.151789
v -0.755723 0.298225 -0.119835
v -0.818455 0.237132 -0.110034
v -0.770607 0.251125 -0.094351
v -0.813450 0.280019 -0.096998
v -0.771779 0.283042 -0.089915
v -0.776352 0.305317 -0.105084
v -0.827301 0.267984 -0.153411
v -0.756102 0.211336 -0.148657
v -0.750655 0.276903 -0.103526
v -0.614208 0.809331 0.318350
v 0.655174 0.775576 0.257856
v -0.609639 0.805998 -0.224899
v 0.616890 0.817365 -0.249374
v -0.226675 0.807141 0.518752
v -0.262675 0.818963 -0.516217
v -0.189901 1.172418 0.342509
v 0.519816 1.096304 0.199893
v 0.499803 1.109501 -0.186944
v -0.210267 1.145261 -0.249603
v -0.491162 1.093127 -0.134822
v -0.478257 1.101863 0.251449
v -0.699510 0.085039 0.304778
v -0.245097 0.085541 0.572962
v -0.292387 0.105700 -0.582901
v -0.693991 0.109048 -0.279776
v 0.780454 0.091787 -0.358586
v 0.801851 0.112911 0.240533
v -0.722948 0.487427 0.370283
v 0.794676 0.486444 0.318447
v 0.805243 0.508057 -0.403360
v -0.779481 0.495574 -0.323597
v -0.293436 0.495182 -0.612164
v -0.249157 0.452067 0.649652
v 0.706119 0.449568 0.253563
v 0.680136 0.392885 -0.350912
v -0.709280 0.412843 -0.310165
v -0.272980 0.406071 -0.578362
v -0.226340 0.365335 0.576990
v -0.703031 0.380957 0.328647
v -0.718430 0.884362 0.410450
v -0.246466 0.888763 0.668952
v 0.664759 0.831490 0.272978
v -0.656061 0.867854 -0.244010
v 0.711011 0.891038 -0.301815
v -0.280209 0.892392 -0.586982
v 0.287570 0.788143 0.499467
v 0.273406 0.821875 -0.477940
v 0.259445 1.183817 0.334727
v 0.218477 1.174661 -0.280206
v 0.301415 0.048698 -0.520259
v 0.305894 0.501643 -0.629563
v 0.328250 0.464091 0.568406
v 0.345862 0.041269 0.461012
v 0.333237 0.397825 0.520940
v 0.282730 0.394385 -0.572639
v 0.301185 0.896790 -0.542571
v 0.291296 0.865855 0.530194
v -0.626254 0.709957 -0.358727
v -0.639269 0.713983 -0.330826
v -0.702802 0.673529 -0.325140
v -0.661337 0.654647 -0.409349
v -0.594758 0.695862 -0.334619
v -0.607593 0.704016 -0.285393
v -0.644729 0.645723 -0.257051
v -0.585184 0.627621 -0.347602
v -0.556300 1.022589 0.083183
v -0.520302 1.052637 0.151118
v -0.552854 1.085757 0.172618
v -0.592648 1.059132 0.159886
v -0.535961 0.972839 0.175837
v -0.494464 1.032857 0.190368
v -0.537430 1.065103 0.225940
v -0.581498 1.034442 0.207941
v 0.292268 0.566116 0.553638
v 0.216382 0.574213 0.577043
v 0.205987 0.636900 0.606385
v 0.306480 0.642564 0.536779
v 0.223448 0.561865 0.502783
v 0.191716 0.568393 0.537222
v 0.139224 0.624964 0.527871
v 0.221331 0.625195 0.449626
v -0.413182 0.738001 0.563742
v -0.453212 0.739389 0.593088
v -0.457843 0.794651 0.592619
v -0.418171 0.793362 0.550872
v -0.435707 0.716241 0.479818
v -0.534049 0.719325 0.554494
v -0.487741 0.783376 0.545017
v -0.451137 0.785481 0.510489
v 0.515794 1.131641 0.210825
v 0.471772 1.131707 0.252499
v 0.465722 1.193853 0.258171
v 0.524278 1.191353 0.197670
v 0.487943 1.114124 0.139697
v 0.412484 1.118251 0.200180
v 0.432733 1.178456 0.191375
v 0.475177 1.178040 0.170050
v 0.019748 1.148178 -0.217570
v -0.013705 1.154206 -0.202814
v -0.006585 1.197234 -0.166490
v 0.040712 1.198894 -0.204327
v -0.007027 1.160240 -0.269439
v -0.059299 1.163324 -0.231539
v -0.035962 1.210690 -0.213595
v 0.003355 1.210574 -0.238091
v 0.388038 0.512418 -0.561569
v 0.381304 0.563201 -0.542364
v 0.425334 0.581876 -0.547372
v 0.438125 0.559771 -0.569098
v 0.360655 0.555498 -0.630017
v 0.364555 0.587486 -0.573017
v 0.414376 0.617405 -0.573459
v 0.425174 0.581544 -0.593969
v 0.813181 0.570079 -0.016165
v 0.711066 0.596741 0.026275
v 0.761975 0.650383 0.050491
v 0.857807 0.631838 0.015995
v 0.788218 0.606901 -0.101322
v 0.692227 0.630040 -0.066603
v 0.740753 0.683702 -0.029567
v 0.840907 0.668781 -0.084256
v 0.741998 0.189234 0.306907
v 0.703289 0.202518 0.321772
v 0.714122 0.247782 0.389069
v 0.801186 0.228972 0.338481
v 0.728660 0.210417 0.272054
v 0.672334 0.224288 0.271545
v 0.686177 0.288086 0.296843
v 0.796201 0.264766 0.243939
v 0.125829 0.252668 -0.666276
v 0.100332 0.263283 -0.657268
v 0.110832 0.303577 -0.606468
v 0.196340 0.287172 -0.631076
v 0.116975 0.269614 -0.697191
v 0.091618 0.280781 -0.688186
v 0.084943 0.339003 -0.673912
v 0.181107 0.321936 -0.723433
v -0.805561 0.282120 -0.179469
v -0.739171 0.244732 -0.173028
v -0.752549 0.282516 -0.118399
v -0.769461 0.301359 -0.120619
v -0.817527 0.263299 -0.117847
v -0.782544 0.220591 -0.098136
v -0.764248 0.271256 -0.096070
v -0.781368 0.290167 -0.098417
vn 0.3530 0.3779 0.8559
vn 0.5268 0.5983 0.6037
vn 0.6869 0.1249 0.7159
vn 0.4623 0.2205 0.8589
vn 0.8516 0.4677 0.2367
vn 0.9082 0.3968 -0.1331
vn 0.7148 0.6935 -0.0899
vn 0.8282 0.5250 0.1961
vn -0.1659 0.3776 -0.9110
vn -0.7163 0.4520 -0.5316
vn -0.6293 0.6188 -0.4701
vn -0.3221 0.4850 -0.8130
vn -0.8639 0.4654 -0.1926
vn -0.9109 0.2912 0.2922
vn -0.8401 0.4982 0.2143
vn -0.8276 0.5150 -0.2231
vn 0.3002 0.3438 0.8898
vn 0.0127 0.8151 0.5791
vn 0.0003 0.8326 0.5539
vn -0.0086 0.6421 0.7666
vn -0.1371 0.6784 0.7218
vn -0.0868 0.8009 0.5925
vn -0.6315 0.7101 0.3113
vn -0.5155 0.7751 0.3653
vn -0.0389 0.3928 -0.9188
vn -0.0118 0.3764 -0.9264
vn -0.0015 0.1932 -0.9811
vn 0.0471 0.3330 -0.9417
vn -0.6107 0.2456 0.7528
vn -0.2102 0.3915 0.8958
vn -0.1723 0.2258 0.9588
vn -0.5870 0.3785 0.7157
vn -0.1455 0.9661 -0.2134
vn -0.5257 0.8501 -0.0308
vn -0.5936 0.8037 -0.0407
vn -0.0930 0.9894 0.1115
vn -0.0133 0.9955 -0.0939
vn -0.0721 0.9876 -0.1393
vn 0.0543 0.9901 0.1291
vn -0.0740 0.9902 0.1186
vn -0.6287 0.7772 0.0277
vn -0.6666 0.7454 0.0015
vn -0.6919 0.7217 -0.0190
vn -0.7138 0.6841 -0.1501
vn 0.6516 0.7553 -0.0708
vn 0.7402 0.6658 -0.0934
vn 0.7174 0.6963 0.0227
vn 0.8361 0.5137 0.1925
vn -0.6031 0.6673 -0.4370
vn -0.5771 0.6812 -0.4505
vn -0.3359 0.8244 -0.4555
vn -0.4901 0.6240 -0.6087
vn 0.1875 0.6125 -0.7679
vn 0.2282 0.8079 -0.5434
vn 0.3791 0.8362 -0.3964
vn 0.5595 0.6659 -0.4935
vn 0.0752 -0.9863 0.1470
vn 0.0318 -0.9878 -0.1523
vn 0.3243 -0.9305 -0.1703
vn 0.3768 -0.9079 0.1838
vn -0.4720 -0.6868 0.5528
vn -0.2151 -0.4100 0.8864
vn -0.2026 -0.6983 0.6865
vn -0.6355 -0.3041 0.7097
vn 0.0976 0.0872 -0.9914
vn -0.0537 -0.0500 -0.9973
vn -0.0358 -0.5343 -0.8445
vn 0.0346 -0.6748 -0.7372
vn -0.7445 -0.6585 -0.1095
vn -0.8101 -0.5780 0.0976
vn -0.8455 -0.4906 0.2107
vn -0.7244 -0.6798 -0.1147
vn -0.1541 -0.3009 -0.9411
vn -0.4823 -0.7839 -0.3911
vn -0.6986 -0.4204 -0.5790
vn -0.1187 -0.5084 -0.8529
vn 0.1766 -0.9819 0.0677
vn 0.6150 -0.7759 -0.1407
vn 0.6079 -0.7787 -0.1551
vn 0.7676 -0.6302 0.1171
vn 0.1518 -0.9864 0.0635
vn 0.0247 -0.9975 -0.0659
vn 0.4707 -0.7904 0.3920
vn 0.2001 -0.6844 0.7011
vn 0.1263 0.1556 0.9797
vn 0.0020 0.0465 0.9989
vn 0.0871 -0.2489 0.9646
vn 0.1201 -0.4030 0.9073
vn -0.7822 0.1775 -0.5973
vn -0.2553 0.3016 -0.9186
vn -0.3320 -0.4537 -0.8270
vn -0.7210 -0.4147 -0.5551
vn 0.1261 0.2518 -0.9595
vn 0.7120 0.3431 -0.6127
vn 0.6869 -0.0787 -0.7224
vn 0.0933 -0.4366 -0.8948
vn 0.8369 0.4612 -0.2947
vn 0.8433 0.5316 0.0786
vn 0.9865 -0.0413 0.1587
vn 0.9485 0.1017 -0.3000
vn -0.9585 0.2048 0.1984
vn -0.9689 0.1661 -0.1832
vn -0.9332 -0.2919 -0.2097
vn -0.9447 -0.2767 0.1758
vn -0.2100 0.0744 0.9749
vn -0.6163 0.2011 0.7614
vn -0.5864 -0.3608 0.7252
vn -0.2789 -0.2237 0.9339
vn 0.1346 -0.1731 -0.9757
vn 0.1180 -0.7241 -0.6796
vn 0.6564 -0.1867 -0.7310
vn 0.1911 -0.9592 -0.2084
vn -0.4711 -0.7474 -0.4685
vn -0.6788 -0.4020 -0.6145
vn -0.4169 -0.6183 -0.6663
vn -0.3540 -0.7369 -0.5759
vn 0.1319 -0.9876 -0.0854
vn 0.8064 -0.5509 -0.2149
vn 0.5745 -0.7969 0.1868
vn 0.5102 -0.8596 0.0285
vn -0.8909 -0.3909 0.2312
vn -0.4457 -0.8926 0.0684
vn -0.8997 -0.4101 -0.1498
vn -0.8687 -0.4524 -0.2015
vn -0.0532 -0.8072 0.5879
vn -0.0562 -0.8951 0.4422
vn -0.3317 -0.9023 0.2753
vn -0.5010 -0.7754 0.3844
vn 0.1567 -0.2291 0.9607
vn 0.1109 -0.8490 0.5166
vn -0.0254 -0.9564 0.2909
vn -0.0474 -0.5008 0.8643
vn 0.6801 0.3930 0.6189
vn 0.4017 -0.8555 0.3268
vn 0.1614 -0.7299 0.6642
vn 0.3829 -0.0849 0.9199
vn 0.0045 -0.7409 -0.6716
vn -0.0016 -0.6804 -0.7329
vn 0.1487 -0.8389 -0.5235
vn 0.2211 -0.2578 -0.9406
vn 0.0127 0.3118 -0.9501
vn 0.0820 0.2116 -0.9739
vn 0.0459 -0.4500 -0.8918
vn 0.0651 -0.4674 -0.8816
vn 0.5589 0.5424 0.6272
vn 0.2762 0.4201 0.8644
vn 0.2406 -0.4271 0.8716
vn 0.6938 -0.2675 0.6687
vn 0.0163 -0.4366 0.8995
vn 0.1767 -0.6263 0.7593
vn 0.1657 -0.4298 0.8876
vn 0.0518 -0.6233 0.7803
vn 0.7288 -0.2139 -0.6505
vn 0.1576 0.1936 -0.9683
vn 0.1316 -0.7257 -0.6753
vn 0.3967 -0.8055 -0.4402
vn -0.0229 -0.9831 0.1816
vn -0.1761 -0.9798 0.0946
vn -0.2190 -0.9669 -0.1312
vn -0.0306 -0.9755 -0.2179
vn -0.0196 -0.9869 -0.1601
vn 0.0045 -0.9920 0.1265
vn -0.0564 0.5922 -0.8038
vn -0.1463 0.8611 -0.4870
vn 0.1383 0.7776 -0.6133
vn 0.1857 0.6202 -0.7621
vn 0.2306 0.9554 -0.1846
vn 0.2847 0.9449 -0.1616
vn 0.2996 0.9495 0.0934
vn 0.3319 0.9307 0.1540
vn 0.5093 0.5097 -0.6934
vn 0.2244 0.4534 -0.8626
vn 0.2380 0.4288 -0.8715
vn 0.5885 0.5771 -0.5662
vn 0.7671 0.1767 0.6167
vn 0.4507 0.8052 0.3854
vn 0.3926 0.7691 0.5044
vn 0.3216 0.1683 0.9318
vn 0.0693 0.3647 0.9286
vn 0.0716 0.1846 0.9802
vn 0.0941 0.2133 0.9724
vn -0.0447 0.1558 0.9868
vn -0.5971 0.8021 0.0022
vn -0.6387 0.7352 0.2271
vn -0.0011 0.5097 -0.8604
vn -0.2219 0.6692 -0.7092
vn 0.7602 -0.0938 0.6429
vn 0.8993 -0.1032 0.4250
vn 0.9575 -0.2712 -0.0979
vn 0.5632 -0.3342 0.7557
vn 0.2853 0.1821 -0.9410
vn 0.8171 -0.0532 -0.5740
vn 0.7452 0.2882 -0.6013
vn 0.5476 0.4258 -0.7203
vn -0.4568 0.8392 0.2951
vn 0.0907 0.8234 0.5601
vn 0.8885 0.2569 -0.3801
vn 0.1350 0.7322 -0.6676
vn -0.4346 -0.6676 -0.6045
vn 0.2225 -0.9732 0.0575
vn -0.1727 -0.8333 0.5252
vn -0.9569 -0.2406 0.1628
vn -0.3562 0.8279 0.4332
vn -0.1926 0.7443 0.6395
vn -0.5876 0.4164 0.6939
vn -0.6197 0.6042 0.5009
vn -0.0025 0.9502 -0.3116
vn 0.5564 0.7979 -0.2319
vn 0.0350 0.6604 -0.7501
vn -0.4760 0.8493 -0.2283
vn 0.1680 0.1260 0.9777
vn -0.3475 0.1789 0.9205
vn 0.1302 -0.7524 0.6457
vn 0.6224 0.4068 0.6687
vn -0.4766 -0.6161 -0.6271
vn -0.3248 -0.9383 -0.1185
vn -0.8223 -0.2260 0.5222
vn -0.9190 0.3695 -0.1375
vn 0.5454 0.8154 -0.1943
vn 0.8714 0.4388 0.2194
vn 0.2781 -0.9481 -0.1540
vn 0.2928 -0.1351 -0.9466
vn -0.6571 0.7255 -0.2046
vn -0.3632 -0.0229 0.9314
vn -0.3453 0.0801 0.9351
vn -0.3918 0.9090 -0.1422
vn 0.3543 0.8734 -0.3342
vn 0.7301 0.2062 0.6514
vn 0.8200 0.2585 0.5107
vn 0.5260 0.6364 -0.5642
vn 0.0075 0.3212 0.9470
vn -0.1828 -0.5788 0.7947
vn 0.7432 -0.4736 0.4726
vn 0.8403 0.3244 0.4344
vn -0.7382 -0.4733 -0.4807
vn -0.4491 -0.4977 -0.7420
vn -0.3446 -0.6569 -0.6707
vn -0.7103 -0.6822 -0.1734
vn 0.6895 -0.5120 -0.5123
vn 0.2940 -0.5787 -0.7607
vn 0.4260 -0.4797 -0.7671
vn 0.8344 -0.1835 -0.5198
vn -0.4419 -0.7467 0.4972
vn -0.5498 -0.8069 0.2161
vn -0.1080 -0.9672 -0.2297
vn 0.1807 -0.9792 0.0921
vn 0.3813 0.9233 -0.0468
vn -0.1993 0.7421 -0.6400
vn -0.6583 0.7175 -0.2279
vn -0.1581 0.8615 0.4825
vn -0.6196 -0.3470 0.7041
vn -0.7237 -0.5628 0.3994
vn -0.6954 -0.6141 0.3733
vn -0.5823 -0.6421 0.4986
vn 0.2651 -0.2284 0.9368
vn 0.2873 0.2407 0.9271
vn 0.7998 0.1256 0.5870
vn 0.9496 -0.0512 0.3092
vn -0.7101 0.6819 -0.1753
vn -0.2493 0.7677 -0.5903
vn -0.2880 -0.3310 -0.8986
vn -0.9231 0.0831 -0.3754
vn 0.9675 0.0429 0.2492
vn 0.7923 -0.2108 -0.5726
vn 0.3588 0.6731 -0.6467
vn 0.8975 0.4403 0.0234
vn 0.2645 -0.3428 0.9014
vn -0.3923 -0.8942 0.2155
vn 0.2730 -0.9171 -0.2907
vn 0.7714 -0.4175 0.4802
vn 0.5354 0.7947 -0.2860
vn -0.2343 0.6873 -0.6875
vn -0.7089 0.6644 -0.2366
vn -0.4159 0.8390 0.3509
vn -0.6529 -0.1783 0.7361
vn -0.7565 0.2395 0.6086
vn -0.5701 0.5997 0.5616
vn -0.3128 0.5368 0.7836
vn 0.4820 0.0202 0.8759
vn 0.4498 -0.0397 0.8923
vn 0.9740 0.1015 0.2026
vn 0.9413 -0.1895 0.2795
vn -0.8300 0.1827 -0.5269
vn -0.1614 0.3711 -0.9145
vn -0.3077 0.2435 -0.9198
vn -0.8343 0.3318 -0.4402
vn 0.8898 0.1011 -0.4449
vn 0.8384 0.2666 -0.4754
vn 0.5617 0.1416 -0.8151
vn 0.7214 -0.2430 -0.6485
vn 0.0102 -0.5675 0.8233
vn -0.5197 -0.8120 0.2658
vn 0.4141 -0.8448 -0.3389
vn 0.8313 -0.5511 0.0728
vn 0.4993 0.7631 -0.4103
vn -0.0489 0.3537 -0.9341
vn -0.6725 0.4848 -0.5592
vn -0.1519 0.9174 0.3678
vn -0.6922 -0.3665 0.6217
vn -0.8837 -0.4197 0.2074
vn -0.7278 0.5172 0.4504
vn -0.7645 0.1920 0.6154
vn -0.0529 0.1033 0.9932
vn -0.2774 -0.8214 0.4983
vn 0.4843 -0.8681 0.1088
vn 0.9426 0.1784 0.2823
vn -0.8184 0.2558 -0.5145
vn -0.1474 0.2808 -0.9484
vn -0.0711 0.6794 -0.7303
vn -0.6455 0.7087 -0.2849
vn 0.6487 -0.2693 -0.7118
vn 0.8280 0.0451 -0.5589
vn 0.3794 -0.0108 -0.9252
vn 0.7956 -0.1247 -0.5928
vn -0.0890 -0.6739 0.7335
vn -0.7978 -0.5916 0.1160
vn 0.3694 -0.6903 -0.6222
vn 0.5127 -0.8583 0.0212
vn 0.8332 0.4886 0.2589
vn 0.1160 0.7876 -0.6052
vn -0.6240 0.7524 0.2111
vn -0.2056 0.5447 0.8130
vn -0.8205 0.0436 0.5700
vn -0.9264 0.0176 0.3760
vn -0.7822 0.3361 0.5246
vn -0.5544 -0.4245 0.7159
vn 0.3490 -0.0099 0.9371
vn 0.1283 0.2473 0.9604
vn 0.5451 -0.6254 0.5584
vn 0.6625 -0.6332 0.4001
vn -0.1930 0.8403 -0.5067
vn 0.2345 0.1199 -0.9647
vn 0.0237 0.5802 -0.8141
vn -0.4414 0.8845 -0.1512
vn 0.4911 -0.8228 -0.2859
vn 0.3595 -0.2817 -0.8896
vn 0.4125 0.1538 -0.8979
vn 0.7102 -0.6950 -0.1121
vn -0.3620 0.5815 0.7286
vn -0.5017 0.7500 0.4310
vn -0.7520 -0.1607 -0.6392
vn -0.3530 -0.9090 0.2216
vn 0.7250 -0.6849 0.0735
vn 0.4108 -0.0412 -0.9108
vn 0.3137 0.9372 -0.1523
vn 0.5040 -0.2304 0.8324
vn -0.0045 -0.0653 0.9979
vn -0.3709 0.8425 0.3906
vn -0.6680 0.5228 0.5296
vn -0.4223 0.2507 0.8711
vn 0.0083 0.1954 0.9807
vn -0.2142 -0.7692 0.6020
vn 0.1668 -0.9031 0.3956
vn 0.6192 -0.1657 0.7676
vn -0.2435 0.9059 -0.3465
vn 0.0956 0.6745 -0.7320
vn -0.0346 -0.0722 -0.9968
vn -0.5669 0.2243 -0.7927
vn 0.5590 -0.7959 -0.2325
vn 0.4632 -0.5448 -0.6990
vn 0.8970 0.0136 -0.4418
vn 0.9976 -0.0458 -0.0524
vn -0.4786 -0.8756 0.0653
vn -0.6656 -0.6294 -0.4010
vn -0.1444 -0.7592 -0.6346
vn -0.0682 -0.9953 -0.0683
vn 0.5022 0.7942 0.3420
vn 0.4417 0.8851 0.1468
vn -0.0148 0.9240 0.3820
vn 0.0100 0.9132 0.4073
vn -0.3207 0.7820 0.5344
vn -0.3539 0.8723 0.3373
vn -0.9977 0.0544 -0.0394
vn -0.8593 -0.2352 0.4542
vn -0.0140 0.0542 0.9984
vn -0.4504 -0.8675 0.2111
vn 0.0004 -0.9977 0.0679
vn 0.7318 -0.0034 0.6815
vn -0.3442 0.8023 -0.4877
vn 0.1756 0.3225 -0.9301
vn -0.0770 -0.7376 -0.6708
vn -0.4480 -0.5243 -0.7241
vn 0.1570 -0.9170 -0.3668
vn 0.0309 -0.7717 -0.6353
vn 0.7820 -0.3539 -0.5130
vn 0.9903 -0.0579 -0.1262
vn -0.6867 -0.7253 0.0486
vn -0.4935 -0.7988 -0.3441
vn -0.0100 -0.6871 -0.7265
vn 0.0231 -0.9676 -0.2513
vn 0.8663 0.2117 0.4525
vn 0.6556 0.7455 -0.1201
vn -0.1218 0.9857 0.1160
vn 0.1326 0.5674 0.8127
vn -0.6037 0.2113 0.7687
vn -0.6857 0.7111 0.1554
vn -0.7473 -0.6590 -0.0851
vn -0.5804 -0.8130 0.0454
vn -0.1269 -0.3762 0.9178
vn -0.4146 -0.8290 0.3752
vn 0.3687 -0.9144 0.1672
vn 0.3764 -0.8094 0.4507
vn -0.6175 0.2263 -0.7533
vn -0.2261 -0.0842 -0.9704
vn 0.3227 -0.1574 -0.9333
vn -0.8234 0.3208 -0.4681
vn 0.6164 -0.7634 -0.1931
vn 0.4753 -0.4410 -0.7613
vn 0.3996 -0.7552 -0.5196
vn 0.5043 -0.8150 -0.2855
vn -0.6637 -0.5058 0.5511
vn -0.9743 0.1066 -0.1987
vn 0.3563 -0.5009 -0.7888
vn 0.2757 -0.9610 0.0226
vn 0.7610 0.2291 0.6070
vn 0.5353 0.8165 -0.2164
vn -0.2409 0.9612 0.1346
vn -0.0894 0.4448 0.8912
vn -0.8749 0.0160 0.4841
vn -0.9997 0.0227 0.0028
vn -0.9648 0.0753 -0.2520
vn -0.8688 -0.4571 0.1901
vn 0.9799 0.1961 -0.0372
vn 0.8167 0.4482 -0.3635
vn 0.1918 0.7874 -0.5858
vn 0.3403 0.9131 -0.2248
vn 0.2528 -0.1241 0.9595
vn -0.1816 0.3469 0.9202
vn -0.7297 -0.1195 0.6732
vn -0.2397 -0.2359 0.9418
vn -0.5608 0.7528 -0.3447
vn -0.9717 0.0856 0.2203
vn -0.3429 0.7023 0.6239
vn -0.0568 0.9948 -0.0841
vn 0.1887 -0.7119 -0.6765
vn -0.3348 -0.9383 0.0862
vn -0.9864 -0.1045 0.1268
vn -0.6863 0.1714 -0.7069
vn 0.3544 0.9339 0.0466
vn -0.1066 0.5446 0.8319
vn 0.5441 0.0120 0.8390
vn 0.9452 0.3079 0.1088
vn 0.9998 0.0182 0.0008
vn 0.6712 -0.2744 0.6886
vn 0.7487 -0.4233 0.5101
vn 0.9600 -0.1493 0.2369
usemtl Green_Bush
s off
f 1//1 202//1 377//1 185//1
f 1//2 185//2 354//2 144//2
f 1//3 144//3 336//3 113//3
f 1//4 113//4 371//4 202//4
f 2//5 144//5 354//5 153//5
f 2//6 153//6 355//6 145//6
f 2//7 145//7 338//7 114//7
f 2//8 114//8 336//8 144//8
f 3//9 147//9 357//9 152//9
f 3//10 152//10 356//10 146//10
f 3//11 146//11 337//11 115//11
f 3//12 115//12 340//12 147//12
f 4//13 146//13 356//13 151//13
f 4//14 151//14 353//14 112//14
f 4//15 112//15 335//15 116//15
f 4//16 116//16 337//16 146//16
f 5//17 178//17 382//17 201//17
f 5//18 201//18 373//18 181//18
f 5//19 181//19 341//19 168//19
f 5//20 168//20 366//20 178//20
f 6//21 177//21 366//21 168//21
f 6//22 168//22 341//22 124//22
f 6//23 124//23 346//23 119//23
f 6//24 119//24 365//24 177//24
f 7//25 200//25 376//25 184//25
f 7//26 184//26 357//26 147//26
f 7//27 147//27 340//27 118//27
f 7//28 118//28 372//28 200//28
f 8//29 112//29 353//29 149//29
f 8//30 149//30 358//30 148//30
f 8//31 148//31 339//31 117//31
f 8//32 117//32 335//32 112//32
f 9//33 126//33 344//33 122//33
f 9//34 122//34 345//34 123//34
f 9//35 123//35 346//35 124//35
f 9//36 124//36 341//36 126//36
f 10//37 199//37 374//37 125//37
f 10//38 125//38 344//38 126//38
f 10//39 126//39 341//39 181//39
f 10//40 181//40 373//40 199//40
f 11//41 176//41 365//41 119//41
f 11//42 119//42 346//42 123//42
f 11//43 123//43 345//43 129//43
f 11//44 129//44 368//44 176//44
f 12//45 175//45 369//45 171//45
f 12//46 171//46 343//46 121//46
f 12//47 121//47 342//47 169//47
f 12//48 169//48 367//48 175//48
f 13//49 174//49 368//49 129//49
f 13//50 129//50 345//50 122//50
f 13//51 122//51 344//51 131//51
f 13//52 131//52 370//52 174//52
f 14//53 173//53 381//53 198//53
f 14//54 198//54 374//54 182//54
f 14//55 182//55 343//55 171//55
f 14//56 171//56 369//56 173//56
f 15//57 186//57 378//57 197//57
f 15//58 197//58 375//58 139//58
f 15//59 139//59 351//59 142//59
f 15//60 142//60 352//60 186//60
f 16//61 143//61 364//61 166//61
f 16//62 166//62 363//62 159//62
f 16//63 159//63 358//63 149//63
f 16//64 149//64 353//64 143//64
f 17//65 196//65 380//65 188//65
f 17//66 188//66 362//66 158//66
f 17//67 158//67 357//67 184//67
f 17//68 184//68 376//68 196//68
f 18//69 157//69 361//69 164//69
f 18//70 164//70 364//70 143//70
f 18//71 143//71 353//71 151//71
f 18//72 151//72 356//72 157//72
f 19//73 158//73 362//73 163//73
f 19//74 163//74 361//74 157//74
f 19//75 157//75 356//75 152//75
f 19//76 152//76 357//76 158//76
f 20//77 155//77 359//77 162//77
f 20//78 162//78 360//78 156//78
f 20//79 156//79 355//79 153//79
f 20//80 153//80 354//80 155//80
f 21//81 195//81 379//81 187//81
f 21//82 187//82 359//82 155//82
f 21//83 155//83 354//83 185//83
f 21//84 185//84 377//84 195//84
f 22//85 194//85 379//85 161//85
f 22//86 161//86 363//86 137//86
f 22//87 137//87 348//87 160//87
f 22//88 160//88 378//88 194//88
f 23//89 135//89 361//89 163//89
f 23//90 163//90 362//90 132//90
f 23//91 132//91 349//91 141//91
f 23//92 141//92 350//92 135//92
f 24//93 193//93 380//93 165//93
f 24//94 165//94 360//94 134//94
f 24//95 134//95 351//95 139//95
f 24//96 139//96 375//96 193//96
f 25//97 134//97 360//97 162//97
f 25//98 162//98 359//98 133//98
f 25//99 133//99 352//99 142//99
f 25//100 142//100 351//100 134//100
f 26//101 136//101 364//101 164//101
f 26//102 164//102 361//102 135//102
f 26//103 135//103 350//103 140//103
f 26//104 140//104 347//104 136//104
f 27//105 137//105 363//105 166//105
f 27//106 166//106 364//106 136//106
f 27//107 136//107 347//107 138//107
f 27//108 138//108 348//108 137//108
f 28//109 180//109 372//109 192//109
f 28//110 192//110 381//110 173//110
f 28//111 173//111 369//111 130//111
f 28//112 130//112 338//112 180//112
f 29//113 115//113 337//113 170//113
f 29//114 170//114 368//114 174//114
f 29//115 174//115 370//115 172//115
f 29//116 172//116 340//116 115//116
f 30//117 114//117 338//117 130//117
f 30//118 130//118 369//118 175//118
f 30//119 175//119 367//119 128//119
f 30//120 128//120 336//120 114//120
f 31//121 116//121 335//121 167//121
f 31//122 167//122 365//122 176//122
f 31//123 176//123 368//123 170//123
f 31//124 170//124 337//124 116//124
f 32//125 117//125 339//125 127//125
f 32//126 127//126 366//126 177//126
f 32//127 177//127 365//127 167//127
f 32//128 167//128 335//128 117//128
f 33//129 179//129 371//129 191//129
f 33//130 191//130 382//130 178//130
f 33//131 178//131 366//131 127//131
f 33//132 127//132 339//132 179//132
f 34//133 113//133 336//133 128//133
f 34//134 128//134 367//134 190//134
f 34//135 190//135 382//135 191//135
f 34//136 191//136 371//136 113//136
f 35//137 118//137 340//137 172//137
f 35//138 172//138 370//138 189//138
f 35//139 189//139 381//139 192//139
f 35//140 192//140 372//140 118//140
f 36//141 132//141 362//141 188//141
f 36//142 188//142 380//142 193//142
f 36//143 193//143 375//143 183//143
f 36//144 183//144 349//144 132//144
f 37//145 133//145 359//145 187//145
f 37//146 187//146 379//146 194//146
f 37//147 194//147 378//147 186//147
f 37//148 186//148 352//148 133//148
f 38//149 159//149 363//149 161//149
f 38//150 161//150 379//150 195//150
f 38//151 195//151 377//151 154//151
f 38//152 154//152 358//152 159//152
f 39//153 156//153 360//153 165//153
f 39//154 165//154 380//154 196//154
f 39//155 196//155 376//155 150//155
f 39//156 150//156 355//156 156//156
f 40//157 160//157 348//157 138//157
f 40//158 138//158 347//158 140//158
f 40//159 140//159 350//159 141//159
f 40//160 141//160 349//160 183//160
f 40//161 183//161 375//161 197//161
f 40//162 197//162 378//162 160//162
f 41//163 189//163 370//163 131//163
f 41//164 131//164 344//164 125//164
f 41//165 125//165 374//165 198//165
f 41//166 198//166 381//166 189//166
f 42//167 121//167 343//167 182//167
f 42//168 182//168 374//168 199//168
f 42//169 199//169 373//169 120//169
f 42//170 120//170 342//170 121//170
f 43//171 145//171 355//171 150//171
f 43//172 150//172 376//172 200//172
f 43//173 200//173 372//173 180//173
f 43//174 180//174 338//174 145//174
f 44//175 190//175 367//175 169//175
f 44//176 169//176 342//176 120//176
f 44//177 120//177 373//177 201//177
f 44//178 201//178 382//178 190//178
f 45//179 148//179 358//179 154//179
f 45//180 154//180 377//180 202//180
f 45//181 202//181 371//181 179//181
f 45//182 179//182 339//182 148//182
usemtl Berry
f 46//183 206//183 385//183 204//183
f 46//184 204//184 384//184 203//184
f 46//185 203//185 383//185 205//185
f 46//186 205//186 386//186 206//186
f 47//187 208//187 389//187 210//187
f 47//188 210//188 390//188 209//188
f 47//189 209//189 387//189 207//189
f 47//190 207//190 388//190 208//190
f 48//191 205//191 383//191 212//191
f 48//192 212//192 387//192 209//192
f 48//193 209//193 390//193 211//193
f 48//194 211//194 386//194 205//194
f 49//195 203//195 384//195 213//195
f 49//196 213//196 388//196 207//196
f 49//197 207//197 387//197 212//197
f 49//198 212//198 383//198 203//198
f 50//199 206//199 386//199 211//199
f 50//200 211//200 390//200 210//200
f 50//201 210//201 389//201 214//201
f 50//202 214//202 385//202 206//202
f 51//203 204//203 385//203 214//203
f 51//204 214//204 389//204 208//204
f 51//205 208//205 388//205 213//205
f 51//206 213//206 384//206 204//206
f 52//207 218//207 393//207 216//207
f 52//208 216//208 392//208 215//208
f 52//209 215//209 391//209 217//209
f 52//210 217//210 394//210 218//210
f 53//211 220//211 397//211 222//211
f 53//212 222//212 398//212 221//212
f 53//213 221//213 395//213 219//213
f 53//214 219//214 396//214 220//214
f 54//215 217//215 391//215 224//215
f 54//216 224//216 395//216 221//216
f 54//217 221//217 398//217 223//217
f 54//218 223//218 394//218 217//218
f 55//219 215//219 392//219 225//219
f 55//220 225//220 396//220 219//220
f 55//221 219//221 395//221 224//221
f 55//222 224//222 391//222 215//222
f 56//223 218//223 394//223 223//223
f 56//224 223//224 398//224 222//224
f 56//225 222//225 397//225 226//225
f 56//226 226//226 393//226 218//226
f 57//227 216//227 393//227 226//227
f 57//228 226//228 397//228 220//228
f 57//229 220//229 396//229 225//229
f 57//230 225//230 392//230 216//230
f 58//231 230//231 401//231 228//231
f 58//232 228//232 400//232 227//232
f 58//233 227//233 399//233 229//233
f 58//234 229//234 402//234 230//234
f 59//235 232//235 405//235 234//235
f 59//236 234//236 406//236 233//236
f 59//237 233//237 403//237 231//237
f 59//238 231//238 404//238 232//238
f 60//239 229//239 399//239 236//239
f 60//240 236//240 403//240 233//240
f 60//241 233//241 406//241 235//241
f 60//242 235//242 402//242 229//242
f 61//243 227//243 400//243 237//243
f 61//244 237//244 404//244 231//244
f 61//245 231//245 403//245 236//245
f 61//246 236//246 399//246 227//246
f 62//247 230//247 402//247 235//247
f 62//248 235//248 406//248 234//248
f 62//249 234//249 405//249 238//249
f 62//250 238//250 401//250 230//250
f 63//251 228//251 401//251 238//251
f 63//252 238//252 405//252 232//252
f 63//253 232//253 404//253 237//253
f 63//254 237//254 400//254 228//254
f 64//255 242//255 409//255 240//255
f 64//256 240//256 408//256 239//256
f 64//257 239//257 407//257 241//257
f 64//258 241//258 410//258 242//258
f 65//259 244//259 413//259 246//259
f 65//260 246//260 414//260 245//260
f 65//261 245//261 411//261 243//261
f 65//262 243//262 412//262 244//262
f 66//263 241//263 407//263 248//263
f 66//264 248//264 411//264 245//264
f 66//265 245//265 414//265 247//265
f 66//266 247//266 410//266 241//266
f 67//267 239//267 408//267 249//267
f 67//268 249//268 412//268 243//268
f 67//269 243//269 411//269 248//269
f 67//270 248//270 407//270 239//270
f 68//271 242//271 410//271 247//271
f 68//272 247//272 414//272 246//272
f 68//273 246//273 413//273 250//273
f 68//274 250//274 409//274 242//274
f 69//275 240//275 409//275 250//275
f 69//276 250//276 413//276 244//276
f 69//277 244//277 412//277 249//277
f 69//278 249//278 408//278 240//278
f 70//279 254//279 417//279 252//279
f 70//280 252//280 416//280 251//280
f 70//281 251//281 415//281 253//281
f 70//282 253//282 418//282 254//282
f 71//283 256//283 421//283 258//283
f 71//284 258//284 422//284 257//284
f 71//285 257//285 419//285 255//285
f 71//286 255//286 420//286 256//286
f 72//287 253//287 415//287 260//287
f 72//288 260//288 419//288 257//288
f 72//289 257//289 422//289 259//289
f 72//290 259//290 418//290 253//290
f 73//291 251//291 416//291 261//291
f 73//292 261//292 420//292 255//292
f 73//293 255//293 419//293 260//293
f 73//294 260//294 415//294 251//294
f 74//295 254//295 418//295 259//295
f 74//296 259//296 422//296 258//296
f 74//297 258//297 421//297 262//297
f 74//298 262//298 417//298 254//298
f 75//299 252//299 417//299 262//299
f 75//300 262//300 421//300 256//300
f 75//301 256//301 420//301 261//301
f 75//302 261//302 416//302 252//302
f 76//303 266//303 425//303 264//303
f 76//304 264//304 424//304 263//304
f 76//305 263//305 423//305 265//305
f 76//306 265//306 426//306 266//306
f 77//307 268//307 429//307 270//307
f 77//308 270//308 430//308 269//308
f 77//309 269//309 427//309 267//309
f 77//310 267//310 428//310 268//310
f 78//311 265//311 423//311 272//311
f 78//312 272//312 427//312 269//312
f 78//313 269//313 430//313 271//313
f 78//314 271//314 426//314 265//314
f 79//315 263//315 424//315 273//315
f 79//316 273//316 428//316 267//316
f 79//317 267//317 427//317 272//317
f 79//318 272//318 423//318 263//318
f 80//319 266//319 426//319 271//319
f 80//320 271//320 430//320 270//320
f 80//321 270//321 429//321 274//321
f 80//322 274//322 425//322 266//322
f 81//323 264//323 425//323 274//323
f 81//324 274//324 429//324 268//324
f 81//325 268//325 428//325 273//325
f 81//326 273//326 424//326 264//326
f 82//327 278//327 433//327 276//327
f 82//328 276//328 432//328 275//328
f 82//329 275//329 431//329 277//329
f 82//330 277//330 434//330 278//330
f 83//331 280//331 437//331 282//331
f 83//332 282//332 438//332 281//332
f 83//333 281//333 435//333 279//333
f 83//334 279//334 436//334 280//334
f 84//335 277//335 431//335 284//335
f 84//336 284//336 435//336 281//336
f 84//337 281//337 438//337 283//337
f 84//338 283//338 434//338 277//338
f 85//339 275//339 432//339 285//339
f 85//340 285//340 436//340 279//340
f 85//341 279//341 435//341 284//341
f 85//342 284//342 431//342 275//342
f 86//343 278//343 434//343 283//343
f 86//344 283//344 438//344 282//344
f 86//345 282//345 437//345 286//345
f 86//346 286//346 433//346 278//346
f 87//347 276//347 433//347 286//347
f 87//348 286//348 437//348 280//348
f 87//349 280//349 436//349 285//349
f 87//350 285//350 432//350 276//350
f 88//351 290//351 441//351 288//351
f 88//352 288//352 440//352 287//352
f 88//353 287//353 439//353 289//353
f 88//354 289//354 442//354 290//354
f 89//355 292//355 445//355 294//355
f 89//356 294//356 446//356 293//356
f 89//357 293//357 443//357 291//357
f 89//358 291//358 444//358 292//358
f 90//359 289//359 439//359 296//359
f 90//360 296//360 443//360 293//360
f 90//361 293//361 446//361 295//361
f 90//362 295//362 442//362 289//362
f 91//363 287//363 440//363 297//363
f 91//364 297//364 444//364 291//364
f 91//365 291//365 443//365 296//365
f 91//366 296//366 439//366 287//366
f 92//367 290//367 442//367 295//367
f 92//368 295//368 446//368 294//368
f 92//369 294//369 445//369 298//369
f 92//370 298//370 441//370 290//370
f 93//371 288//371 441//371 298//371
f 93//372 298//372 445//372 292//372
f 93//373 292//373 444//373 297//373
f 93//374 297//374 440//374 288//374
f 94//375 302//375 449//375 300//375
f 94//376 300//376 448//376 299//376
f 94//377 299//377 447//377 301//377
f 94//378 301//378 450//378 302//378
f 95//379 304//379 453//379 306//379
f 95//380 306//380 454//380 305//380
f 95//381 305//381 451//381 303//381
f 95//382 303//382 452//382 304//382
f 96//383 301//383 447//383 308//383
f 96//384 308//384 451//384 305//384
f 96//385 305//385 454//385 307//385
f 96//386 307//386 450//386 301//386
f 97//387 299//387 448//387 309//387
f 97//388 309//388 452//388 303//388
f 97//389 303//389 451//389 308//389
f 97//390 308//390 447//390 299//390
f 98//391 302//391 450//391 307//391
f 98//392 307//392 454//392 306//392
f 98//393 306//393 453//393 310//393
f 98//394 310//394 449//394 302//394
f 99//395 300//395 449//395 310//395
f 99//396 310//396 453//396 304//396
f 99//397 304//397 452//397 309//397
f 99//398 309//398 448//398 300//398
f 100//399 314//399 457//399 312//399
f 100//400 312//400 456//400 311//400
f 100//401 311//401 455//401 313//401
f 100//402 313//402 458//402 314//402
f 101//403 316//403 461//403 318//403
f 101//404 318//404 462//404 317//404
f 101//405 317//405 459//405 315//405
f 101//406 315//406 460//406 316//406
f 102//407 313//407 455//407 320//407
f 102//408 320//408 459//408 317//408
f 102//409 317//409 462//409 319//409
f 102//410 319//410 458//410 313//410
f 103//411 311//411 456//411 321//411
f 103//412 321//412 460//412 315//412
f 103//413 315//413 459//413 320//413
f 103//414 320//414 455//414 311//414
f 104//415 314//415 458//415 319//415
f 104//416 319//416 462//416 318//416
f 104//417 318//417 461//417 322//417
f 104//418 322//418 457//418 314//418
f 105//419 312//419 457//419 322//419
f 105//420 322//420 461//420 316//420
f 105//421 316//421 460//421 321//421
f 105//422 321//422 456//422 312//422
f 106//423 326//423 465//423 324//423
f 106//424 324//424 464//424 323//424
f 106//425 323//425 463//425 325//425
f 106//426 325//426 466//426 326//426
f 107//427 328//427 469//427 330//427
f 107//428 330//428 470//428 329//428
f 107//429 329//429 467//429 327//429
f 107//430 327//430 468//430 328//430
f 108//431 325//431 463//431 332//431
f 108//432 332//432 467//432 329//432
f 108//433 329//433 470//433 331//433
f 108//434 331//434 466//434 325//434
f 109//435 323//435 464//435 333//435
f 109//436 333//436 468//436 327//436
f 109//437 327//437 467//437 332//437
f 109//438 332//438 463//438 323//438
f 110//439 326//439 466//439 331//439
f 110//440 331//440 470//440 330//440
f 110//441 330//441 469//441 334//441
f 110//442 334//442 465//442 326//442
f 111//443 324//443 465//443 334//443
f 111//444 334//444 469//444 328//444
f 111//445 328//445 468//445 333//445
f 111//446 333//446 464//446 324//446
`,Ms=`# Blender MTL File: 'Flower_4.blend'
# Material Count: 2

newmtl Cyan
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.000000 0.197995 0.202352
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl DarkGreen2
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,Ns=`# Blender v2.79 (sub 0) OBJ File: 'Flower_4.blend'
# www.blender.org
mtllib Flower_4.mtl
o Flower_4_Plane.016
v 0.027530 0.704263 -0.040851
v 0.034956 0.704263 0.029491
v 0.057909 0.720103 -0.062967
v 0.066822 0.720103 0.043820
v 0.127668 0.801692 -0.050341
v 0.134307 0.801692 0.007701
v 0.141469 0.814271 -0.023302
v -0.038359 0.704263 0.034139
v -0.041830 0.704263 -0.034284
v -0.066745 0.720103 0.060625
v -0.071769 0.720103 -0.055956
v -0.138153 0.801692 0.034386
v -0.141299 0.801692 -0.023949
v -0.150307 0.814271 0.006569
v 0.062104 0.720103 0.057245
v -0.054326 0.720103 0.065016
v 0.037556 0.801692 0.129252
v -0.020689 0.801692 0.133772
v 0.010033 0.814271 0.142058
v -0.066527 0.720103 -0.068812
v 0.050155 0.720103 -0.070076
v -0.038000 0.801692 -0.139337
v 0.020406 0.801692 -0.140601
v -0.009806 0.814271 -0.150589
v 0.026319 0.713682 -0.039349
v 0.033577 0.713676 0.028098
v 0.052115 0.727757 -0.062426
v 0.061113 0.727821 0.044354
v 0.119698 0.806997 -0.049465
v 0.126332 0.806990 0.008577
v 0.134175 0.820480 -0.022468
v -0.036947 0.713666 0.032715
v -0.040338 0.713688 -0.033106
v -0.060875 0.727713 0.060363
v -0.065918 0.727728 -0.056217
v -0.130144 0.806997 0.033990
v -0.133286 0.806990 -0.024345
v -0.142977 0.820480 0.006173
v 0.061712 0.727726 0.051398
v -0.054712 0.727784 0.059246
v 0.036971 0.806997 0.121255
v -0.021274 0.806990 0.125770
v 0.009465 0.820480 0.134739
v -0.066406 0.727829 -0.063090
v 0.050276 0.727810 -0.064329
v -0.037863 0.806997 -0.131320
v 0.020544 0.806990 -0.132579
v -0.009647 0.820479 -0.143249
v 0.018687 0.717773 0.016634
v 0.014385 0.717751 -0.025308
v -0.026986 0.717733 -0.021449
v -0.024778 0.717757 0.019438
v -0.016534 0.180736 0.022579
v 0.010935 0.180736 0.022579
v -0.017002 -0.000470 0.004784
v 0.017002 -0.000470 0.004784
v -0.012117 0.713409 -0.012010
v 0.006434 0.714456 -0.013274
v -0.085326 0.599095 -0.031081
v -0.088680 0.569596 -0.033908
v -0.096317 0.585757 -0.035330
v -0.006244 0.589005 -0.012431
v -0.008656 0.565437 -0.014815
v -0.016671 0.180575 0.012967
v 0.010798 0.180572 0.012967
v -0.017002 0.000470 -0.004784
v 0.017002 0.000470 -0.004784
v -0.012776 0.713507 -0.021601
v 0.005775 0.714554 -0.022865
v -0.082981 0.599777 -0.040381
v -0.086336 0.570277 -0.043207
v -0.093973 0.586439 -0.044630
v -0.003900 0.589686 -0.021731
v -0.006312 0.566118 -0.024114
v 0.086697 0.279210 0.015099
v 0.086638 0.309021 0.016002
v 0.096466 0.294082 0.014662
v 0.004853 0.278303 0.017181
v 0.004571 0.302106 0.017723
v 0.086388 0.279444 0.005493
v 0.086329 0.309255 0.006395
v 0.096156 0.294316 0.005056
v 0.004544 0.278537 0.007575
v 0.004262 0.302340 0.008116
v -0.016534 0.180736 0.022579
v 0.010935 0.180736 0.022579
v -0.017002 -0.000470 0.004784
v 0.017002 -0.000470 0.004784
v -0.012117 0.713409 -0.012010
v 0.006434 0.714456 -0.013274
v -0.085326 0.599095 -0.031081
v -0.088680 0.569596 -0.033908
v -0.096317 0.585757 -0.035330
v -0.006244 0.589005 -0.012431
v -0.008656 0.565437 -0.014815
v -0.016671 0.180575 0.012967
v 0.010798 0.180572 0.012967
v -0.017002 0.000470 -0.004784
v 0.017002 0.000470 -0.004784
v -0.012776 0.713507 -0.021601
v 0.005775 0.714554 -0.022865
v -0.082981 0.599777 -0.040381
v -0.086336 0.570277 -0.043207
v -0.093973 0.586439 -0.044630
v -0.003900 0.589686 -0.021731
v -0.006312 0.566118 -0.024114
v 0.086697 0.279210 0.015099
v 0.086638 0.309021 0.016002
v 0.096466 0.294082 0.014662
v 0.004853 0.278303 0.017181
v 0.004571 0.302106 0.017723
v 0.086388 0.279444 0.005493
v 0.086329 0.309255 0.006395
v 0.096156 0.294316 0.005056
v 0.004544 0.278537 0.007575
v 0.004262 0.302340 0.008116
v -0.123957 0.749573 -0.039953
v -0.119872 0.749573 0.047505
v -0.117025 0.756034 -0.040281
v -0.112932 0.756030 0.047177
v 0.115374 0.748702 0.025761
v 0.107598 0.748702 -0.056654
v 0.108532 0.755210 0.026465
v 0.100716 0.755181 -0.055945
v -0.037694 0.743895 0.115566
v 0.049966 0.743895 0.109402
v -0.038178 0.750398 0.108692
v 0.049478 0.750371 0.102492
v 0.035281 0.739990 -0.123633
v -0.052264 0.739990 -0.122369
v 0.035410 0.746493 -0.116748
v -0.052134 0.746506 -0.115499
vn 0.4491 -0.8925 -0.0414
vn -0.9448 -0.3242 0.0469
vn 0.7586 -0.6458 -0.0868
vn -0.4758 -0.8793 0.0218
vn 0.0693 -0.3144 0.9467
vn -0.7624 -0.6458 0.0411
vn 0.0308 -0.8818 0.4706
vn -0.0167 -0.2652 -0.9640
vn 0.0591 -0.6458 0.7612
vn -0.0187 -0.8956 -0.4444
vn -0.9346 0.3424 0.0961
vn -0.0165 -0.6458 -0.7634
vn 0.0000 -1.0000 0.0000
vn -0.4630 0.8853 0.0429
vn 0.9486 0.3128 -0.0471
vn -0.7610 0.6429 0.0871
vn 0.4917 0.8704 -0.0226
vn -0.0698 0.3035 -0.9503
vn 0.7649 0.6429 -0.0413
vn -0.0322 0.8730 -0.4867
vn 0.0167 0.2531 0.9673
vn -0.0593 0.6429 -0.7637
vn 0.0188 0.8894 0.4567
vn 0.2776 0.2233 0.9344
vn 0.0166 0.6429 0.7658
vn -0.3028 0.9529 0.0159
vn 0.2884 0.9570 -0.0306
vn -0.0281 0.9537 -0.2996
vn 0.0201 0.9498 0.3121
vn -0.4049 -0.1221 0.9062
vn -0.5747 -0.1392 -0.8065
vn 0.0522 0.1344 -0.9896
vn -0.2209 0.2222 -0.9496
vn 0.4539 0.6862 -0.5685
vn 0.5733 0.6966 0.4313
vn 0.5507 -0.1936 -0.8119
vn 0.6456 -0.2034 0.7361
vn -0.1473 0.1750 0.9735
vn -0.9494 0.2092 0.2342
vn -0.4872 0.6862 0.5402
vn -0.5464 0.6966 -0.4649
vn 0.7217 -0.2059 -0.6609
vn 0.9711 0.1905 0.1436
vn 0.9672 0.1903 -0.1680
vn 0.5516 0.6862 0.4743
vn -0.4519 0.6966 0.5572
vn -0.8098 -0.1518 0.5667
vn -0.8835 -0.1357 -0.4483
vn -0.9636 0.1864 -0.1916
vn -0.5242 0.6862 -0.5043
vn 0.4823 0.6966 -0.5311
vn 0.7944 -0.1932 0.5759
vn 0.9307 -0.3531 -0.0955
vn -0.1164 0.2078 0.9712
vn -0.2129 0.1528 -0.9650
vn 0.4806 0.8767 -0.0214
vn -0.4878 -0.8727 0.0218
vn 0.4987 -0.8656 -0.0440
vn -0.0075 0.1239 -0.9923
vn 0.2672 0.1529 0.9514
vn -0.4914 0.8698 0.0432
vn 0.9793 0.1871 0.0774
vn -0.9568 0.1586 0.2438
vn -0.0278 0.9120 -0.4093
vn 0.0286 -0.9075 0.4192
vn -0.9724 0.1910 -0.1342
vn 0.9633 0.1688 -0.2089
vn 0.0042 0.9420 0.3357
vn -0.0043 -0.9375 -0.3481
vn -0.0259 -0.0658 -0.9975
vn 0.0000 -0.0977 0.9952
vn -0.2401 -0.0687 0.9683
vn -0.9991 0.0105 0.0414
vn 0.0000 0.0981 -0.9952
vn 0.2401 0.0687 -0.9683
vn 0.9991 0.0061 -0.0414
vn 0.9994 0.0345 -0.0057
vn -1.0000 0.0015 0.0072
vn -0.0554 0.9984 0.0140
vn -0.7420 0.6558 -0.1390
vn -0.8667 -0.4316 -0.2501
vn 0.0259 0.0659 0.9975
vn -0.0324 -0.9962 -0.0812
vn 0.9645 -0.1224 0.2342
vn 0.0286 -0.0270 0.9992
vn -0.0286 0.0270 -0.9992
vn 0.8346 -0.5494 -0.0402
vn 0.8348 0.5504 -0.0135
vn 0.1031 0.9898 0.0985
vn -0.0834 0.9962 0.0269
vn -0.9994 -0.0126 0.0319
vn 0.0105 -0.9996 -0.0247
usemtl Cyan
s off
f 2//1 1//1 3//1 4//1
f 117//2 118//2 12//2 13//2
f 6//3 5//3 7//3
f 9//4 8//4 10//4 11//4
f 125//5 126//5 17//5 18//5
f 13//6 12//6 14//6
f 8//7 2//7 15//7 16//7
f 129//8 130//8 22//8 23//8
f 18//9 17//9 19//9
f 1//10 9//10 20//10 21//10
f 123//11 30//11 29//11 124//11
f 23//12 22//12 24//12
f 2//13 8//13 9//13 1//13
f 26//14 28//14 27//14 25//14
f 119//15 37//15 36//15 120//15
f 30//16 31//16 29//16
f 33//17 35//17 34//17 32//17
f 127//18 42//18 41//18 128//18
f 37//19 38//19 36//19
f 32//20 40//20 39//20 26//20
f 131//21 47//21 46//21 132//21
f 42//22 43//22 41//22
f 25//23 45//23 44//23 33//23
f 121//24 6//24 30//24 123//24
f 47//25 48//25 46//25
f 32//26 52//26 51//26 33//26
f 25//27 50//27 49//27 26//27
f 33//28 51//28 50//28 25//28
f 26//29 49//29 52//29 32//29
f 2//30 4//30 28//30 26//30
f 3//31 1//31 25//31 27//31
f 122//32 3//32 27//32 124//32
f 117//33 13//33 37//33 119//33
f 7//34 5//34 29//34 31//34
f 6//35 7//35 31//35 30//35
f 9//36 11//36 35//36 33//36
f 10//37 8//37 32//37 34//37
f 118//38 10//38 34//38 120//38
f 125//39 18//39 42//39 127//39
f 14//40 12//40 36//40 38//40
f 13//41 14//41 38//41 37//41
f 15//42 2//42 26//42 39//42
f 126//43 15//43 39//43 128//43
f 129//44 23//44 47//44 131//44
f 19//45 17//45 41//45 43//45
f 18//46 19//46 43//46 42//46
f 20//47 9//47 33//47 44//47
f 8//48 16//48 40//48 32//48
f 130//49 20//49 44//49 132//49
f 24//50 22//50 46//50 48//50
f 23//51 24//51 48//51 47//51
f 1//52 21//52 45//52 25//52
f 121//53 122//53 5//53 6//53
f 12//54 118//54 120//54 36//54
f 11//55 117//55 119//55 35//55
f 35//56 119//56 120//56 34//56
f 11//57 10//57 118//57 117//57
f 4//58 3//58 122//58 121//58
f 5//59 122//59 124//59 29//59
f 4//60 121//60 123//60 28//60
f 28//61 123//61 124//61 27//61
f 17//62 126//62 128//62 41//62
f 16//63 125//63 127//63 40//63
f 40//64 127//64 128//64 39//64
f 16//65 15//65 126//65 125//65
f 22//66 130//66 132//66 46//66
f 21//67 129//67 131//67 45//67
f 45//68 131//68 132//68 44//68
f 21//69 20//69 130//69 129//69
usemtl DarkGreen2
f 64//70 68//70 69//70 65//70
f 54//71 53//71 55//71 56//71
f 59//72 61//72 60//72 63//72 62//72
f 53//73 57//73 68//73 64//73
f 65//74 67//74 66//74 64//74
f 70//75 73//75 74//75 71//75 72//75
f 58//76 54//76 65//76 69//76
f 54//77 56//77 67//77 65//77
f 55//78 53//78 64//78 66//78
f 57//79 58//79 69//79 68//79
f 61//80 59//80 70//80 72//80
f 60//81 61//81 72//81 71//81
f 54//82 58//82 57//82 53//82
f 63//83 60//83 71//83 74//83
f 62//84 63//84 74//84 73//84
f 75//85 77//85 76//85 79//85 78//85
f 80//86 83//86 84//86 81//86 82//86
f 77//87 75//87 80//87 82//87
f 76//88 77//88 82//88 81//88
f 59//89 62//89 73//89 70//89
f 79//90 76//90 81//90 84//90
f 78//91 79//91 84//91 83//91
f 75//92 78//92 83//92 80//92
f 96//70 100//70 101//70 97//70
f 86//71 85//71 87//71 88//71
f 91//72 93//72 92//72 95//72 94//72
f 85//73 89//73 100//73 96//73
f 97//74 99//74 98//74 96//74
f 102//75 105//75 106//75 103//75 104//75
f 90//76 86//76 97//76 101//76
f 86//77 88//77 99//77 97//77
f 87//78 85//78 96//78 98//78
f 89//79 90//79 101//79 100//79
f 93//80 91//80 102//80 104//80
f 92//81 93//81 104//81 103//81
f 86//82 90//82 89//82 85//82
f 95//83 92//83 103//83 106//83
f 94//84 95//84 106//84 105//84
f 107//85 109//85 108//85 111//85 110//85
f 112//86 115//86 116//86 113//86 114//86
f 109//87 107//87 112//87 114//87
f 108//88 109//88 114//88 113//88
f 91//89 94//89 105//89 102//89
f 111//90 108//90 113//90 116//90
f 110//91 111//91 116//91 115//91
f 107//92 110//92 115//92 112//92
`,Ps=`# Blender MTL File: 'Grass_4.blend'
# Material Count: 1

newmtl Green_Grass
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,Fs=`# Blender v2.79 (sub 0) OBJ File: 'Grass_4.blend'
# www.blender.org
mtllib Grass_4.mtl
o Grass_4_Plane.035
v 0.073138 0.666307 0.015454
v 0.049776 -0.015862 0.018910
v 0.073138 0.666307 -0.015454
v 0.049776 -0.015862 -0.018910
v 0.049775 0.996921 0.000000
v -0.159212 0.479759 -0.009667
v -0.178443 -0.015862 -0.023376
v -0.137780 0.479759 -0.031938
v -0.152217 -0.015862 -0.050627
v -0.165330 0.689435 -0.037002
v -0.073182 0.666307 -0.001125
v -0.067546 -0.015862 -0.024060
v -0.044570 0.666307 0.010564
v -0.032534 -0.015862 -0.009756
v -0.050040 0.996921 -0.016908
v -0.061732 0.666307 -0.102999
v -0.044530 -0.015862 -0.119180
v -0.044077 0.666307 -0.077629
v -0.022927 -0.015862 -0.088137
v -0.033729 0.996921 -0.103659
v 0.060598 0.479759 -0.123759
v 0.083395 -0.015862 -0.117591
v 0.048246 0.479759 -0.095427
v 0.068280 -0.015862 -0.082922
v 0.075838 0.689435 -0.100256
v -0.014487 0.666307 0.057917
v -0.007457 -0.015862 0.080464
v -0.045023 0.666307 0.062700
v -0.044822 -0.015862 0.086316
v -0.026140 0.996921 0.083390
v 0.132867 0.479759 0.050473
v 0.152555 -0.015862 0.063516
v 0.112210 0.479759 0.073465
v 0.127279 -0.015862 0.091650
v 0.139917 0.689435 0.077583
v 0.045005 0.666307 0.128533
v 0.062180 -0.015862 0.112323
v 0.062703 0.666307 0.153874
v 0.083835 -0.015862 0.143330
v 0.073007 0.996921 0.127827
v -0.174100 0.666307 0.052046
v -0.154907 -0.015862 0.038285
v -0.159960 0.666307 0.079530
v -0.137604 -0.015862 0.071916
v -0.146256 0.996921 0.055100
v -0.095423 0.479759 0.135541
v -0.076230 -0.015862 0.121779
v -0.081282 0.479759 0.163025
v -0.058927 -0.015862 0.155410
v -0.067578 0.689435 0.138594
v 0.147462 0.666307 -0.054080
v 0.159185 -0.015862 -0.033578
v 0.118674 0.666307 -0.042830
v 0.123958 -0.015862 -0.019812
v 0.141571 0.996921 -0.026695
v -0.148098 0.666307 -0.164192
v -0.126433 -0.015862 -0.154793
v -0.164417 0.666307 -0.137943
v -0.146401 -0.015862 -0.122673
v -0.136417 0.996921 -0.138733
v 0.054453 0.666102 0.015454
v 0.031101 -0.015217 0.018910
v 0.054453 0.666102 -0.015454
v 0.031100 -0.015217 -0.018910
v 0.031136 0.995591 0.000000
v -0.177759 0.479492 -0.009954
v -0.196952 -0.014640 -0.023662
v -0.156313 0.479000 -0.032225
v -0.170726 -0.014640 -0.050914
v -0.183662 0.686573 -0.037286
v -0.055357 0.665404 -0.001828
v -0.049767 -0.014237 -0.024760
v -0.026730 0.665815 0.009861
v -0.014756 -0.014237 -0.010456
v -0.032475 0.993607 -0.017600
v -0.043121 0.665955 -0.103207
v -0.025933 -0.015079 -0.119389
v -0.025464 0.666103 -0.077838
v -0.004329 -0.015079 -0.088345
v -0.015184 0.995309 -0.103866
v 0.079255 0.479540 -0.123628
v 0.102028 -0.014895 -0.117460
v 0.066898 0.479301 -0.095296
v 0.086913 -0.014895 -0.082791
v 0.094358 0.687163 -0.100126
v 0.000007 0.665181 0.059407
v 0.006851 -0.012665 0.081934
v -0.030567 0.664552 0.064186
v -0.030515 -0.012665 0.087786
v -0.012463 0.990615 0.084795
v 0.151431 0.479502 0.050742
v 0.171084 -0.014677 0.063784
v 0.130763 0.479038 0.073734
v 0.145808 -0.014677 0.091918
v 0.158279 0.686658 0.077848
v 0.063615 0.665954 0.128324
v 0.080777 -0.015078 0.112114
v 0.081315 0.666103 0.153664
v 0.102432 -0.015078 0.143121
v 0.091552 0.995307 0.127618
v -0.155456 0.666004 0.051892
v -0.136274 -0.015138 0.038130
v -0.141314 0.666116 0.079376
v -0.118972 -0.015138 0.071761
v -0.127668 0.995430 0.054946
v -0.076783 0.479259 0.135386
v -0.057610 -0.014866 0.121625
v -0.062637 0.479539 0.162870
v -0.040307 -0.014866 0.155256
v -0.049077 0.687095 0.138441
v 0.165228 0.665794 -0.053348
v 0.176886 -0.014181 -0.032849
v 0.136424 0.665370 -0.042099
v 0.141659 -0.014181 -0.019083
v 0.159046 0.993496 -0.025975
v -0.129471 0.666109 -0.164006
v -0.107820 -0.015105 -0.154607
v -0.145791 0.665976 -0.137757
v -0.127788 -0.015105 -0.122487
v -0.117853 0.995361 -0.138547
vn 0.9994 -0.0342 -0.0000
vn 0.9975 0.0705 -0.0000
vn 0.7197 -0.0471 0.6926
vn 0.7161 0.1107 0.6891
vn -0.3780 -0.0342 0.9252
vn -0.3773 0.0705 0.9234
vn -0.8203 -0.0342 0.5709
vn -0.8188 0.0705 0.5698
vn -0.9157 -0.0471 -0.3992
vn -0.9110 0.1107 -0.3972
vn -0.1546 -0.0342 -0.9874
vn -0.1544 0.0705 -0.9855
vn -0.7431 -0.0471 -0.6676
vn -0.7393 0.1107 -0.6642
vn -0.8194 -0.0342 0.5722
vn -0.8178 0.0705 0.5712
vn -0.8887 -0.0342 0.4572
vn -0.8870 0.0705 0.4564
vn -0.8882 -0.0471 0.4570
vn -0.8837 0.1107 0.4547
vn -0.3638 -0.0342 -0.9309
vn -0.3631 0.0705 -0.9291
vn -0.8488 -0.0342 -0.5277
vn -0.8471 0.0705 -0.5267
vn -0.9994 0.0343 0.0000
vn -0.9975 -0.0706 0.0000
vn -0.7194 0.0472 -0.6930
vn -0.7171 -0.1113 -0.6881
vn 0.3777 0.0343 -0.9253
vn 0.3779 -0.0707 -0.9231
vn 0.8203 0.0343 -0.5710
vn 0.8189 -0.0706 -0.5696
vn 0.9156 0.0472 0.3994
vn 0.9113 -0.1112 0.3965
vn 0.1542 0.0344 0.9874
vn 0.1555 -0.0709 0.9853
vn 0.7427 0.0472 0.6679
vn 0.7402 -0.1112 0.6631
vn 0.8193 0.0343 -0.5723
vn 0.8180 -0.0706 -0.5709
vn 0.8887 0.0343 -0.4573
vn 0.8871 -0.0706 -0.4562
vn 0.8881 0.0472 -0.4572
vn 0.8841 -0.1112 -0.4539
vn 0.3635 0.0343 0.9310
vn 0.3638 -0.0707 0.9288
vn 0.8487 0.0343 0.5277
vn 0.8473 -0.0706 0.5264
vn 0.0001 0.0051 1.0000
vn -0.0345 -0.9994 0.0000
vn 0.0001 0.0051 -1.0000
vn -0.0019 0.0466 0.9989
vn -0.0019 0.0466 -0.9989
vn -0.0162 -0.0271 0.9995
vn -0.0648 -0.9959 -0.0624
vn 0.0159 0.0373 -0.9992
vn -0.0263 0.1293 0.9913
vn 0.0176 -0.0219 -0.9996
vn -0.0400 0.0333 -0.9986
vn 0.0814 -0.9766 -0.1993
vn 0.0403 -0.0291 0.9988
vn -0.0446 -0.0447 -0.9980
vn 0.0482 0.0839 0.9953
vn -0.0115 0.0234 -0.9997
vn 0.0417 -0.9987 -0.0290
vn 0.0114 -0.0151 0.9998
vn -0.0113 -0.0010 -0.9999
vn 0.0150 0.0782 0.9968
vn 0.0073 -0.0121 -0.9999
vn 0.0517 -0.9984 0.0225
vn -0.0074 0.0250 0.9997
vn 0.0144 0.1109 -0.9937
vn -0.0053 0.0238 0.9997
vn 0.1045 -0.0319 -0.9940
vn 0.1017 -0.7537 0.6493
vn -0.1039 0.0345 0.9940
vn 0.1231 0.0812 -0.9891
vn -0.1179 -0.0557 0.9915
vn 0.0151 -0.0257 -0.9996
vn 0.0629 -0.9964 0.0565
vn -0.0149 0.0363 0.9992
vn 0.0249 0.1281 -0.9914
vn -0.0161 -0.0176 0.9997
vn -0.0115 0.0235 -0.9997
vn 0.0418 -0.9987 -0.0292
vn 0.0115 -0.0151 0.9998
vn -0.0113 -0.0012 -0.9999
vn -0.0085 0.0199 -0.9998
vn 0.0387 -0.9991 -0.0199
vn 0.0084 -0.0109 0.9999
vn -0.0078 0.0099 -0.9999
vn 0.0116 0.0734 0.9972
vn -0.0086 0.0275 -0.9996
vn 0.0532 -0.9982 -0.0274
vn 0.0086 -0.0150 0.9999
vn -0.0071 0.0156 -0.9999
vn 0.0162 0.1153 0.9932
vn 0.0421 -0.0293 -0.9987
vn 0.0836 -0.9732 0.2140
vn -0.0418 0.0334 0.9986
vn 0.0503 0.0837 -0.9952
vn -0.0468 -0.0456 0.9979
vn 0.0102 -0.0135 -0.9999
vn 0.0404 -0.9989 0.0251
vn -0.0103 0.0221 0.9997
vn 0.0136 0.0765 -0.9970
vn -0.0098 0.0032 0.9999
usemtl Green_Grass
s off
f 1//1 2//1 4//1 3//1
f 1//2 3//2 5//2
f 6//3 7//3 9//3 8//3
f 6//4 8//4 10//4
f 11//5 12//5 14//5 13//5
f 11//6 13//6 15//6
f 16//7 17//7 19//7 18//7
f 16//8 18//8 20//8
f 21//9 22//9 24//9 23//9
f 21//10 23//10 25//10
f 26//11 27//11 29//11 28//11
f 26//12 28//12 30//12
f 31//13 32//13 34//13 33//13
f 31//14 33//14 35//14
f 36//15 37//15 39//15 38//15
f 36//16 38//16 40//16
f 41//17 42//17 44//17 43//17
f 41//18 43//18 45//18
f 46//19 47//19 49//19 48//19
f 46//20 48//20 50//20
f 51//21 52//21 54//21 53//21
f 51//22 53//22 55//22
f 56//23 57//23 59//23 58//23
f 56//24 58//24 60//24
f 61//25 63//25 64//25 62//25
f 61//26 65//26 63//26
f 66//27 68//27 69//27 67//27
f 66//28 70//28 68//28
f 71//29 73//29 74//29 72//29
f 71//30 75//30 73//30
f 76//31 78//31 79//31 77//31
f 76//32 80//32 78//32
f 81//33 83//33 84//33 82//33
f 81//34 85//34 83//34
f 86//35 88//35 89//35 87//35
f 86//36 90//36 88//36
f 91//37 93//37 94//37 92//37
f 91//38 95//38 93//38
f 96//39 98//39 99//39 97//39
f 96//40 100//40 98//40
f 101//41 103//41 104//41 102//41
f 101//42 105//42 103//42
f 106//43 108//43 109//43 107//43
f 106//44 110//44 108//44
f 111//45 113//45 114//45 112//45
f 111//46 115//46 113//46
f 116//47 118//47 119//47 117//47
f 116//48 120//48 118//48
f 2//49 1//49 61//49 62//49
f 4//50 2//50 62//50 64//50
f 3//51 4//51 64//51 63//51
f 1//52 5//52 65//52 61//52
f 5//53 3//53 63//53 65//53
f 7//54 6//54 66//54 67//54
f 9//55 7//55 67//55 69//55
f 8//56 9//56 69//56 68//56
f 6//57 10//57 70//57 66//57
f 10//58 8//58 68//58 70//58
f 12//59 11//59 71//59 72//59
f 14//60 12//60 72//60 74//60
f 13//61 14//61 74//61 73//61
f 11//62 15//62 75//62 71//62
f 15//63 13//63 73//63 75//63
f 17//64 16//64 76//64 77//64
f 19//65 17//65 77//65 79//65
f 18//66 19//66 79//66 78//66
f 16//67 20//67 80//67 76//67
f 20//68 18//68 78//68 80//68
f 22//69 21//69 81//69 82//69
f 24//70 22//70 82//70 84//70
f 23//71 24//71 84//71 83//71
f 21//72 25//72 85//72 81//72
f 25//73 23//73 83//73 85//73
f 27//74 26//74 86//74 87//74
f 29//75 27//75 87//75 89//75
f 28//76 29//76 89//76 88//76
f 26//77 30//77 90//77 86//77
f 30//78 28//78 88//78 90//78
f 32//79 31//79 91//79 92//79
f 34//80 32//80 92//80 94//80
f 33//81 34//81 94//81 93//81
f 31//82 35//82 95//82 91//82
f 35//83 33//83 93//83 95//83
f 37//84 36//84 96//84 97//84
f 39//85 37//85 97//85 99//85
f 38//86 39//86 99//86 98//86
f 36//87 40//87 100//87 96//87
f 40//68 38//68 98//68 100//68
f 42//88 41//88 101//88 102//88
f 44//89 42//89 102//89 104//89
f 43//90 44//90 104//90 103//90
f 41//91 45//91 105//91 101//91
f 45//92 43//92 103//92 105//92
f 47//93 46//93 106//93 107//93
f 49//94 47//94 107//94 109//94
f 48//95 49//95 109//95 108//95
f 46//96 50//96 110//96 106//96
f 50//97 48//97 108//97 110//97
f 52//98 51//98 111//98 112//98
f 54//99 52//99 112//99 114//99
f 53//100 54//100 114//100 113//100
f 51//101 55//101 115//101 111//101
f 55//102 53//102 113//102 115//102
f 57//103 56//103 116//103 117//103
f 59//104 57//104 117//104 119//104
f 58//105 59//105 119//105 118//105
f 56//106 60//106 120//106 116//106
f 60//107 58//107 118//107 120//107
`,Is=`# Blender MTL File: 'Mushroom_3.blend'
# Material Count: 2

newmtl Mushroom1
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.358380 0.341303 0.268051
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Red
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.134357 0.034020 0.014163
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,Ls=`# Blender v2.79 (sub 0) OBJ File: 'Mushroom_3.blend'
# www.blender.org
mtllib Mushroom_3.mtl
o Mushroom_3_Cube.047
v -0.084225 0.228848 0.054016
v -0.081039 0.231127 0.052179
v -0.084115 0.233151 0.054450
v -0.090521 0.229030 0.053816
v -0.090410 0.233333 0.054250
v -0.093447 0.231484 0.051785
v -0.093180 0.236359 0.047800
v -0.090143 0.238207 0.050265
v -0.089994 0.238637 0.045963
v -0.083698 0.238455 0.046163
v -0.083847 0.238026 0.050465
v -0.080772 0.236001 0.048195
v -0.084177 0.224084 0.048191
v -0.084028 0.224513 0.043889
v -0.080991 0.226362 0.046353
v -0.090473 0.224265 0.047990
v -0.093399 0.226719 0.045959
v -0.090324 0.224695 0.043689
v -0.093132 0.231594 0.041975
v -0.089946 0.233872 0.040137
v -0.090057 0.229569 0.039704
v -0.083651 0.233691 0.040338
v -0.080724 0.231236 0.042369
v -0.083761 0.229388 0.039904
v -0.090135 0.228848 -0.043442
v -0.086901 0.231127 -0.041691
v -0.090447 0.233151 -0.043121
v -0.093263 0.229030 -0.048910
v -0.093575 0.233333 -0.048589
v -0.093066 0.231484 -0.052467
v -0.089532 0.236359 -0.054327
v -0.090041 0.238207 -0.050449
v -0.086298 0.238637 -0.052576
v -0.083170 0.238455 -0.047108
v -0.086913 0.238026 -0.044981
v -0.083367 0.236001 -0.043551
v -0.085148 0.224084 -0.046454
v -0.081405 0.224513 -0.048581
v -0.081914 0.226362 -0.044703
v -0.088276 0.224265 -0.051921
v -0.088079 0.226719 -0.055478
v -0.084533 0.224695 -0.054048
v -0.084545 0.231594 -0.057338
v -0.081311 0.233872 -0.055587
v -0.080999 0.229569 -0.055908
v -0.078183 0.233691 -0.050120
v -0.078380 0.231236 -0.046563
v -0.077871 0.229388 -0.050441
v 0.036382 0.228848 -0.093209
v 0.034885 0.231127 -0.089850
v 0.036038 0.233151 -0.093495
v 0.041593 0.229030 -0.096748
v 0.041249 0.233333 -0.097034
v 0.045155 0.231484 -0.096825
v 0.047281 0.236359 -0.093445
v 0.043375 0.238207 -0.093654
v 0.045784 0.238637 -0.090086
v 0.040573 0.238455 -0.086547
v 0.038165 0.238026 -0.090114
v 0.037011 0.236001 -0.086470
v 0.039768 0.224084 -0.088468
v 0.042177 0.224513 -0.084900
v 0.038271 0.226362 -0.085109
v 0.044979 0.224265 -0.092007
v 0.048541 0.226719 -0.092084
v 0.047387 0.224695 -0.088439
v 0.050667 0.231594 -0.088704
v 0.049170 0.233872 -0.085345
v 0.049514 0.229569 -0.085059
v 0.043959 0.233691 -0.081806
v 0.040397 0.231236 -0.081729
v 0.044303 0.229388 -0.081520
v 0.089952 0.228848 0.043820
v 0.086726 0.231127 0.042055
v 0.090265 0.233151 0.043500
v 0.093057 0.229030 0.049300
v 0.093370 0.233333 0.048980
v 0.092845 0.231484 0.052856
v 0.089304 0.236359 0.054701
v 0.089829 0.238207 0.050826
v 0.086077 0.238637 0.052937
v 0.082972 0.238455 0.047456
v 0.086724 0.238026 0.045345
v 0.083184 0.236001 0.043900
v 0.084953 0.224084 0.046810
v 0.081201 0.224513 0.048921
v 0.081726 0.226362 0.045046
v 0.088058 0.224265 0.052291
v 0.087846 0.226719 0.055847
v 0.084306 0.224695 0.054402
v 0.084304 0.231594 0.057692
v 0.081077 0.233872 0.055927
v 0.080765 0.229569 0.056247
v 0.077972 0.233691 0.050447
v 0.078184 0.231236 0.046891
v 0.077660 0.229388 0.050766
v 0.013741 0.228848 0.099110
v 0.013408 0.231127 0.095448
v 0.014181 0.233151 0.099192
v 0.010921 0.229030 0.104742
v 0.011360 0.233333 0.104824
v 0.007850 0.231484 0.106548
v 0.004344 0.236359 0.104635
v 0.007855 0.238207 0.102911
v 0.004011 0.238637 0.100973
v 0.006832 0.238455 0.095340
v 0.010675 0.238026 0.097279
v 0.009903 0.236001 0.093535
v 0.008472 0.224084 0.096625
v 0.004628 0.224513 0.094686
v 0.008139 0.226362 0.092962
v 0.005651 0.224265 0.102257
v 0.002580 0.226719 0.104063
v 0.001808 0.224695 0.100319
v -0.000925 0.231594 0.102150
v -0.001258 0.233872 0.098488
v -0.001698 0.229569 0.098406
v 0.001562 0.233691 0.092855
v 0.004633 0.231236 0.091050
v 0.001123 0.229388 0.092774
v -0.024841 0.263233 0.057420
v -0.023226 0.265512 0.054116
v -0.024507 0.267536 0.057718
v -0.030173 0.263415 0.060773
v -0.029839 0.267718 0.061071
v -0.033735 0.265869 0.060724
v -0.035741 0.270744 0.057271
v -0.031845 0.272592 0.057617
v -0.034126 0.273022 0.053967
v -0.028794 0.272840 0.050614
v -0.026513 0.272411 0.054264
v -0.025232 0.270386 0.050663
v -0.028058 0.258469 0.052563
v -0.030339 0.258898 0.048912
v -0.026443 0.260747 0.049259
v -0.033390 0.258650 0.055916
v -0.036952 0.261104 0.055867
v -0.035671 0.259080 0.052265
v -0.038958 0.265979 0.052414
v -0.037343 0.268257 0.049110
v -0.037677 0.263954 0.048812
v -0.032011 0.268075 0.045756
v -0.028449 0.265621 0.045805
v -0.032344 0.263773 0.045459
v 0.046571 0.263233 0.040211
v 0.043884 0.265512 0.037701
v 0.046954 0.267536 0.039979
v 0.048219 0.263415 0.046291
v 0.048602 0.267718 0.046059
v 0.047131 0.265869 0.049683
v 0.043243 0.270744 0.050592
v 0.044713 0.272592 0.046967
v 0.040555 0.273022 0.048081
v 0.038907 0.272840 0.042002
v 0.043065 0.272411 0.040888
v 0.039995 0.270386 0.038610
v 0.040986 0.258469 0.041868
v 0.036828 0.258898 0.042982
v 0.038298 0.260747 0.039357
v 0.042634 0.258650 0.047947
v 0.041546 0.261104 0.051339
v 0.038476 0.259080 0.049061
v 0.037657 0.265979 0.052248
v 0.034969 0.268257 0.049738
v 0.034587 0.263954 0.049970
v 0.033321 0.268075 0.043658
v 0.034409 0.265621 0.040266
v 0.032939 0.263773 0.043890
v 0.037744 0.263233 -0.048592
v 0.035377 0.265512 -0.045778
v 0.037493 0.267536 -0.048962
v 0.043730 0.263415 -0.050553
v 0.043479 0.267718 -0.050923
v 0.047174 0.265869 -0.049642
v 0.048283 0.270744 -0.045806
v 0.044588 0.272592 -0.047086
v 0.045916 0.273022 -0.042992
v 0.039930 0.272840 -0.041031
v 0.038602 0.272411 -0.045125
v 0.036486 0.270386 -0.041941
v 0.039688 0.258469 -0.043100
v 0.041016 0.258898 -0.039005
v 0.037320 0.260747 -0.040286
v 0.045674 0.258650 -0.045060
v 0.049118 0.261104 -0.044150
v 0.047002 0.259080 -0.040966
v 0.050227 0.265979 -0.040313
v 0.047859 0.268257 -0.037499
v 0.048111 0.263954 -0.037129
v 0.041873 0.268075 -0.035539
v 0.038429 0.265621 -0.036449
v 0.042125 0.263773 -0.035169
v -0.054544 0.263233 -0.028475
v -0.051353 0.265512 -0.026647
v -0.054863 0.267536 -0.028161
v -0.057540 0.263415 -0.034015
v -0.057859 0.267718 -0.033701
v -0.057258 0.265869 -0.037566
v -0.053681 0.270744 -0.039341
v -0.054282 0.272592 -0.035477
v -0.050490 0.273022 -0.037514
v -0.047493 0.272840 -0.031973
v -0.051285 0.272411 -0.029936
v -0.047775 0.270386 -0.028422
v -0.049486 0.258469 -0.031366
v -0.045694 0.258898 -0.033403
v -0.046295 0.260747 -0.029539
v -0.052483 0.258650 -0.036907
v -0.052201 0.261104 -0.040458
v -0.048691 0.259080 -0.038944
v -0.048623 0.265979 -0.042233
v -0.045432 0.268257 -0.040405
v -0.045113 0.263954 -0.040719
v -0.042436 0.268075 -0.034865
v -0.042718 0.265621 -0.031314
v -0.042117 0.263773 -0.035178
v -0.119358 0.204980 -0.005335
v -0.116166 0.207258 -0.003507
v -0.119677 0.209283 -0.005021
v -0.122354 0.205162 -0.010875
v -0.122673 0.209465 -0.010562
v -0.122072 0.207616 -0.014426
v -0.118495 0.212491 -0.016201
v -0.119096 0.214339 -0.012337
v -0.115304 0.214769 -0.014374
v -0.112307 0.214587 -0.008833
v -0.116099 0.214158 -0.006796
v -0.112589 0.212133 -0.005282
v -0.114300 0.200216 -0.008226
v -0.110508 0.200645 -0.010263
v -0.111109 0.202494 -0.006399
v -0.117297 0.200397 -0.013767
v -0.117015 0.202851 -0.017318
v -0.113505 0.200827 -0.015804
v -0.113437 0.207726 -0.019093
v -0.110246 0.210004 -0.017265
v -0.109927 0.205701 -0.017579
v -0.107250 0.209822 -0.011725
v -0.107531 0.207368 -0.008174
v -0.106931 0.205520 -0.012039
v -0.065510 0.204980 0.099916
v -0.062309 0.207258 0.098105
v -0.065403 0.209283 0.100350
v -0.071803 0.205162 0.099665
v -0.071697 0.209465 0.100099
v -0.074713 0.207616 0.097610
v -0.074414 0.212491 0.093628
v -0.071397 0.214339 0.096117
v -0.071213 0.214769 0.091816
v -0.064920 0.214587 0.092067
v -0.065103 0.214158 0.096368
v -0.062010 0.212133 0.094122
v -0.065415 0.200216 0.094091
v -0.065231 0.200645 0.089790
v -0.062214 0.202494 0.092280
v -0.071709 0.200397 0.093840
v -0.074618 0.202851 0.091785
v -0.071525 0.200827 0.089539
v -0.074319 0.207726 0.087803
v -0.071119 0.210004 0.085991
v -0.071225 0.205701 0.085557
v -0.064825 0.209822 0.086242
v -0.061915 0.207368 0.088297
v -0.064931 0.205520 0.085808
v 0.059377 0.204980 0.103678
v 0.059213 0.207258 0.100004
v 0.059813 0.209283 0.103779
v 0.056301 0.205162 0.109174
v 0.056737 0.209465 0.109276
v 0.053151 0.207616 0.110837
v 0.049736 0.212491 0.108765
v 0.053323 0.214339 0.107204
v 0.049572 0.214769 0.105092
v 0.052648 0.214587 0.099595
v 0.056399 0.214158 0.101708
v 0.055799 0.212133 0.097932
v 0.054228 0.200216 0.100953
v 0.050477 0.200645 0.098840
v 0.054064 0.202494 0.097279
v 0.051152 0.200397 0.106450
v 0.048001 0.202851 0.108112
v 0.047401 0.200827 0.104337
v 0.044587 0.207726 0.106041
v 0.044423 0.210004 0.102367
v 0.043987 0.205701 0.102265
v 0.047499 0.209822 0.096870
v 0.050649 0.207368 0.095208
v 0.047063 0.205520 0.096769
v 0.112139 0.204980 -0.041227
v 0.108489 0.207258 -0.041679
v 0.112312 0.209283 -0.041639
v 0.117044 0.205162 -0.037276
v 0.117217 0.209465 -0.037688
v 0.118157 0.207616 -0.033892
v 0.115545 0.212491 -0.030872
v 0.114605 0.214339 -0.034668
v 0.111895 0.214769 -0.031323
v 0.106989 0.214587 -0.035274
v 0.109699 0.214158 -0.038619
v 0.105876 0.212133 -0.038658
v 0.108592 0.200216 -0.036605
v 0.105883 0.200645 -0.033260
v 0.104943 0.202494 -0.037056
v 0.113498 0.200397 -0.032654
v 0.114611 0.202851 -0.029270
v 0.110788 0.200827 -0.029309
v 0.111998 0.207726 -0.026249
v 0.108349 0.210004 -0.026701
v 0.108176 0.205701 -0.026289
v 0.103443 0.209822 -0.030652
v 0.102330 0.207368 -0.034036
v 0.103270 0.205520 -0.030240
v -0.037922 0.204980 -0.113196
v -0.038472 0.207258 -0.109560
v -0.038330 0.209283 -0.113381
v -0.033841 0.205162 -0.117994
v -0.034249 0.209465 -0.118178
v -0.030429 0.207616 -0.119016
v -0.027479 0.212491 -0.116323
v -0.031300 0.214339 -0.115486
v -0.028029 0.214769 -0.112687
v -0.032110 0.214587 -0.107889
v -0.035381 0.214158 -0.110688
v -0.035523 0.212133 -0.106867
v -0.033397 0.200216 -0.109527
v -0.030126 0.200645 -0.106729
v -0.033946 0.202494 -0.105891
v -0.029316 0.200397 -0.114325
v -0.025903 0.202851 -0.115347
v -0.026045 0.200827 -0.111527
v -0.022954 0.207726 -0.112654
v -0.023504 0.210004 -0.109018
v -0.023096 0.205701 -0.108834
v -0.027585 0.209822 -0.104220
v -0.030997 0.207368 -0.103198
v -0.027177 0.205520 -0.104036
v 0.000000 0.113945 0.053266
v 0.000000 0.113945 -0.053266
v 0.053266 0.113945 0.000000
v -0.053266 0.113945 0.000000
v -0.039440 0.121448 0.000000
v 0.000000 0.121448 -0.039440
v 0.039440 0.121448 0.000000
v 0.000000 0.121448 0.039440
v -0.067092 0.106441 0.000000
v 0.000000 0.106441 -0.067092
v 0.067092 0.106441 0.000000
v 0.000000 0.106441 0.067092
v -0.039949 0.113945 0.039949
v 0.039949 0.113945 0.039949
v 0.039949 0.113945 -0.039949
v -0.039949 0.113945 -0.039949
v -0.029580 0.121448 0.029580
v -0.029580 0.121448 -0.029580
v 0.029580 0.121448 0.029580
v 0.029580 0.121448 -0.029580
v -0.050319 0.106441 0.050319
v -0.050319 0.106441 -0.050319
v 0.050319 0.106441 0.050319
v 0.050319 0.106441 -0.050319
v 0.000000 0.108632 0.053266
v 0.000000 0.116135 0.039440
v 0.039949 0.108632 0.039949
v 0.000000 0.101128 0.067092
v -0.039949 0.108632 0.039949
v 0.000000 0.108632 -0.053266
v 0.000000 0.116135 -0.039440
v -0.039949 0.108632 -0.039949
v 0.000000 0.101128 -0.067092
v 0.039949 0.108632 -0.039949
v 0.053266 0.108632 0.000000
v 0.039440 0.116135 0.000000
v 0.067092 0.101128 0.000000
v -0.053266 0.108632 0.000000
v -0.039440 0.116135 0.000000
v -0.067092 0.101128 0.000000
v -0.029580 0.116135 0.029580
v -0.029580 0.116135 -0.029580
v 0.029580 0.116135 -0.029580
v 0.029580 0.116135 0.029580
v -0.050319 0.101128 0.050319
v -0.050319 0.101128 -0.050319
v 0.050319 0.101128 -0.050319
v 0.050319 0.101128 0.050319
v -0.052928 0.080444 0.000000
v 0.000000 0.080444 -0.052928
v 0.052928 0.080444 0.000000
v 0.000000 0.080444 0.052928
v 0.000000 0.000000 0.000000
v 0.000000 0.148212 -0.051414
v 0.000000 0.019720 0.052928
v 0.052928 0.019720 0.000000
v 0.000000 0.019720 -0.052928
v -0.052928 0.019720 0.000000
v 0.000000 0.258201 0.078973
v 0.051414 0.148212 0.000000
v -0.051414 0.148212 0.000000
v 0.000000 0.148212 0.051414
v 0.000000 0.285663 0.000000
v 0.000000 0.258201 -0.078973
v 0.078973 0.258201 0.000000
v -0.078973 0.258201 0.000000
v -0.122209 0.203424 -0.000000
v 0.122209 0.203424 0.000000
v 0.000000 0.203424 -0.122209
v 0.000000 0.203424 0.122209
v 0.000000 0.175542 0.096844
v 0.000000 0.175542 -0.096844
v 0.096844 0.175542 0.000000
v -0.096844 0.175542 0.000000
v -0.032952 0.004930 0.000000
v -0.039696 0.080444 0.039696
v -0.045805 0.117888 0.000000
v -0.039696 0.019720 -0.039696
v 0.000000 0.004930 -0.032952
v 0.000000 0.117888 -0.045806
v 0.039696 0.019720 -0.039696
v 0.032952 0.004930 0.000000
v 0.045806 0.117888 0.000000
v 0.039696 0.019720 0.039696
v 0.000000 0.004930 0.032952
v 0.000000 0.117888 0.045806
v -0.039696 0.019720 0.039696
v -0.039696 0.080444 -0.039696
v 0.039696 0.080444 -0.039696
v 0.039696 0.080444 0.039696
v 0.000000 0.044761 0.059672
v 0.059672 0.044761 0.000000
v 0.000000 0.044761 -0.059672
v -0.059672 0.044761 0.000000
v -0.068758 0.168426 0.000000
v 0.000000 0.168426 -0.068758
v 0.068758 0.168426 0.000000
v 0.000000 0.168426 0.068758
v -0.038560 0.148212 -0.038560
v 0.038560 0.148212 -0.038560
v 0.038560 0.148212 0.038560
v -0.038560 0.148212 0.038560
v -0.041657 0.278798 0.000000
v 0.000000 0.278798 -0.041658
v 0.041658 0.278798 0.000000
v 0.000000 0.278798 0.041658
v 0.059230 0.258201 0.059230
v -0.072633 0.175542 0.072633
v -0.059230 0.258201 -0.059230
v 0.072633 0.175542 -0.072633
v 0.091657 0.203424 0.091657
v -0.059229 0.258201 0.059230
v -0.091657 0.203424 -0.091657
v 0.059230 0.258201 -0.059230
v -0.107354 0.230776 0.000000
v 0.107354 0.230776 0.000000
v 0.000000 0.230776 -0.107354
v 0.000000 0.230776 0.107354
v -0.091657 0.203424 0.091657
v 0.091657 0.203424 -0.091657
v 0.072633 0.175542 0.072633
v -0.072633 0.175542 -0.072633
v 0.000000 0.182796 0.119914
v 0.000000 0.182796 -0.119914
v 0.119914 0.182796 0.000000
v -0.119914 0.182796 0.000000
v -0.026407 0.008764 0.026407
v -0.034354 0.117888 0.034354
v -0.026407 0.008764 -0.026407
v -0.034354 0.117888 -0.034354
v 0.026407 0.008764 0.026407
v 0.034354 0.117888 0.034354
v 0.026407 0.008764 -0.026407
v 0.034354 0.117888 -0.034354
v -0.044754 0.044761 0.044754
v -0.044754 0.044761 -0.044754
v 0.044754 0.044761 -0.044754
v 0.044754 0.044761 0.044754
v -0.051569 0.168426 0.051569
v -0.051568 0.168426 -0.051569
v 0.051569 0.168426 -0.051569
v 0.051569 0.168426 0.051569
v -0.036064 0.273458 0.036064
v -0.036064 0.273458 -0.036064
v 0.036064 0.273458 -0.036064
v 0.036064 0.273458 0.036064
v 0.080515 0.230776 0.080515
v -0.080515 0.230776 0.080515
v -0.080515 0.230776 -0.080515
v 0.080515 0.230776 -0.080515
v -0.089935 0.182796 0.089935
v 0.089935 0.182796 -0.089935
v 0.089935 0.182796 0.089935
v -0.089935 0.182796 -0.089935
vn 0.9991 -0.0288 0.0318
vn 0.0063 -0.6331 -0.7741
vn -0.0063 0.6331 0.7741
vn -0.9991 0.0288 -0.0317
vn 0.0424 0.7735 -0.6323
vn 0.5487 -0.0977 0.8303
vn -0.6050 -0.0645 0.7936
vn -0.5560 0.8287 0.0635
vn 0.5976 0.7955 0.1002
vn 0.5560 -0.8287 -0.0635
vn -0.5976 -0.7955 -0.1002
vn -0.5487 0.0977 -0.8303
vn 0.6050 0.0645 -0.7936
vn -0.0345 -0.0993 0.9945
vn -0.7109 0.4680 0.5249
vn 0.0255 0.9946 0.1002
vn 0.7020 0.4273 0.5698
vn -0.0255 -0.9946 -0.1002
vn -0.7020 -0.4273 -0.5698
vn 0.0345 0.0993 -0.9945
vn 0.7109 -0.4680 -0.5249
vn -0.6765 0.5673 -0.4696
vn 0.7364 0.5266 -0.4247
vn 0.6765 -0.5673 0.4696
vn -0.7364 -0.5266 0.4247
vn -0.0424 -0.7735 0.6323
vn 0.4964 -0.0288 0.8676
vn 0.6626 -0.6331 -0.4001
vn -0.6627 0.6331 0.4001
vn -0.4964 0.0288 -0.8676
vn 0.5608 0.7735 -0.2952
vn -0.4198 -0.0977 0.9023
vn -0.9929 -0.0645 -0.0995
vn -0.3454 0.8288 -0.4403
vn 0.2278 0.7955 0.5615
vn 0.3454 -0.8288 0.4403
vn -0.2278 -0.7955 -0.5615
vn 0.4198 0.0977 -0.9023
vn 0.9929 0.0645 0.0995
vn -0.8651 -0.0993 0.4916
vn -0.8196 0.4680 -0.3306
vn -0.0720 0.9946 0.0742
vn -0.1176 0.4273 0.8964
vn 0.0720 -0.9946 -0.0742
vn 0.1176 -0.4273 -0.8964
vn 0.8651 0.0993 -0.4916
vn 0.8196 -0.4680 0.3306
vn 0.0456 0.5673 -0.8222
vn 0.7475 0.5266 0.4048
vn -0.0456 -0.5673 0.8222
vn -0.7475 -0.5266 -0.4048
vn -0.5608 -0.7735 0.2952
vn -0.8269 -0.0288 0.5616
vn 0.4499 -0.6331 0.6299
vn -0.4499 0.6331 -0.6299
vn 0.8269 0.0288 -0.5616
vn 0.3374 0.7735 0.5365
vn -0.9320 -0.0977 -0.3491
vn 0.0229 -0.0645 -0.9977
vn 0.4125 0.8287 -0.3782
vn -0.5423 0.7955 0.2703
vn -0.4125 -0.8287 0.3782
vn 0.5423 -0.7955 -0.2703
vn 0.9320 0.0977 0.3492
vn -0.0228 0.0645 0.9977
vn -0.5567 -0.0993 -0.8248
vn 0.2666 0.4680 -0.8425
vn -0.0795 0.9946 -0.0661
vn -0.9028 0.4273 -0.0483
vn 0.0795 -0.9946 0.0661
vn 0.9028 -0.4273 0.0483
vn 0.5567 0.0993 0.8247
vn -0.2666 -0.4680 0.8425
vn 0.8233 0.5673 -0.0178
vn -0.3461 0.5266 0.7765
vn -0.8233 -0.5673 0.0178
vn 0.3461 -0.5266 -0.7765
vn -0.3374 -0.7735 -0.5365
vn -0.4927 -0.0288 -0.8697
vn -0.6643 -0.6331 0.3973
vn 0.6643 0.6331 -0.3973
vn 0.4927 0.0288 0.8697
vn -0.5620 0.7735 0.2928
vn 0.4236 -0.0977 -0.9006
vn 0.9925 -0.0645 0.1037
vn 0.3435 0.8288 0.4418
vn -0.2254 0.7955 -0.5625
vn -0.3435 -0.8287 -0.4418
vn 0.2254 -0.7955 0.5625
vn -0.4236 0.0977 0.9006
vn -0.9925 0.0645 -0.1037
vn 0.8672 -0.0993 -0.4880
vn 0.8182 0.4680 0.3340
vn 0.0723 0.9946 -0.0739
vn 0.1213 0.4273 -0.8959
vn -0.0723 -0.9946 0.0739
vn -0.1213 -0.4273 0.8959
vn -0.8672 0.0993 0.4880
vn -0.8182 -0.4680 -0.3340
vn -0.0490 0.5673 0.8220
vn -0.7458 0.5266 -0.4079
vn 0.0490 -0.5673 -0.8220
vn 0.7458 -0.5266 0.4079
vn 0.5620 -0.7735 -0.2928
vn 0.4476 -0.0288 -0.8938
vn -0.7001 -0.6331 -0.3302
vn 0.7001 0.6331 0.3302
vn -0.4476 0.0288 0.8938
vn -0.5563 0.7735 -0.3035
vn 0.9838 -0.0977 -0.1501
vn 0.4670 -0.0645 0.8819
vn -0.1754 0.8287 0.5314
vn 0.3414 0.7955 -0.5006
vn 0.1754 -0.8288 -0.5314
vn -0.3414 -0.7955 0.5006
vn -0.9838 0.0977 0.1502
vn -0.4670 0.0645 -0.8819
vn 0.8884 -0.0993 0.4481
vn 0.1786 0.4680 0.8655
vn 0.1017 0.9946 0.0189
vn 0.8115 0.4273 -0.3985
vn -0.1017 -0.9946 -0.0189
vn -0.8115 -0.4273 0.3985
vn -0.8884 0.0993 -0.4481
vn -0.1786 -0.4680 -0.8655
vn -0.7099 0.5673 0.4174
vn -0.0769 0.5266 -0.8466
vn 0.7099 -0.5673 -0.4174
vn 0.0769 -0.5266 0.8466
vn 0.5563 -0.7735 0.3035
vn 0.8462 -0.0288 -0.5321
vn -0.4274 -0.6331 -0.6454
vn 0.4274 0.6331 0.6454
vn -0.8462 0.0288 0.5321
vn -0.3183 0.7735 -0.5480
vn 0.9191 -0.0977 0.3818
vn -0.0580 -0.0645 0.9962
vn -0.4255 0.8288 0.3634
vn 0.5515 0.7955 -0.2510
vn 0.4255 -0.8288 -0.3634
vn -0.5515 -0.7955 0.2510
vn -0.9191 0.0977 -0.3818
vn 0.0580 0.0645 -0.9962
vn 0.5273 -0.0993 0.8439
vn -0.2961 0.4680 0.8326
vn 0.0772 0.9946 0.0689
vn 0.9006 0.4273 0.0801
vn -0.0772 -0.9946 -0.0689
vn -0.9006 -0.4273 -0.0801
vn -0.5273 0.0993 -0.8439
vn 0.2961 -0.4680 -0.8326
vn -0.8234 0.5673 -0.0113
vn 0.3733 0.5266 -0.7638
vn 0.8234 -0.5673 0.0113
vn -0.3733 -0.5266 0.7638
vn 0.3183 -0.7735 0.5480
vn -0.2615 -0.0288 -0.9648
vn -0.7421 -0.6331 0.2201
vn 0.7421 0.6331 -0.2201
vn 0.2615 0.0288 0.9648
vn -0.6171 0.7735 0.1442
vn 0.6338 -0.0977 -0.7673
vn 0.9358 -0.0645 0.3467
vn 0.2232 0.8288 0.5132
vn -0.0788 0.7955 -0.6008
vn -0.2232 -0.8288 -0.5132
vn 0.0788 -0.7955 0.6008
vn -0.6338 0.0977 0.7673
vn -0.9358 0.0645 -0.3467
vn 0.9611 -0.0993 -0.2576
vn 0.7097 0.4680 0.5266
vn 0.0884 0.9946 -0.0537
vn 0.3399 0.4273 -0.8378
vn -0.0884 -0.9946 0.0537
vn -0.3399 -0.4273 0.8378
vn -0.9611 0.0993 0.2576
vn -0.7097 -0.4680 -0.5266
vn -0.2515 0.5673 0.7841
vn -0.6213 0.5266 -0.5802
vn 0.2515 -0.5673 -0.7841
vn 0.6213 -0.5266 0.5802
vn 0.6171 -0.7735 -0.1442
vn -0.9499 -0.0288 0.3111
vn 0.2582 -0.6331 0.7297
vn -0.2582 0.6331 -0.7297
vn 0.9499 0.0288 -0.3111
vn 0.1760 0.7735 0.6088
vn -0.7991 -0.0977 -0.5932
vn 0.2978 -0.0645 -0.9525
vn 0.5009 0.8287 -0.2495
vn -0.5959 0.7955 0.1098
vn -0.5009 -0.8288 0.2495
vn 0.5959 -0.7955 -0.1098
vn 0.7991 0.0977 0.5932
vn -0.2978 0.0645 0.9525
vn -0.3070 -0.0993 -0.9465
vn 0.4891 0.4680 -0.7360
vn -0.0582 0.9946 -0.0855
vn -0.8543 0.4273 -0.2960
vn 0.0582 -0.9946 0.0855
vn 0.8543 -0.4273 0.2960
vn 0.3070 0.0993 0.9465
vn -0.4891 -0.4680 0.7360
vn 0.7961 0.5673 0.2105
vn -0.5473 0.5266 0.6505
vn -0.7961 -0.5673 -0.2105
vn 0.5473 -0.5266 -0.6505
vn -0.1760 -0.7735 -0.6088
vn 0.4755 -0.0288 0.8792
vn 0.6720 -0.6331 -0.3842
vn -0.6720 0.6331 0.3842
vn -0.4755 0.0288 -0.8792
vn 0.5677 0.7735 -0.2817
vn -0.4412 -0.0977 0.8921
vn -0.9903 -0.0645 -0.1231
vn -0.3348 0.8288 -0.4484
vn 0.2143 0.7955 0.5668
vn 0.3348 -0.8288 0.4484
vn -0.2143 -0.7955 -0.5668
vn 0.4412 0.0977 -0.8921
vn 0.9903 0.0645 0.1231
vn -0.8766 -0.0993 0.4709
vn -0.8114 0.4680 -0.3500
vn -0.0738 0.9946 0.0725
vn -0.1389 0.4273 0.8934
vn 0.0738 -0.9946 -0.0725
vn 0.1389 -0.4273 -0.8934
vn 0.8766 0.0993 -0.4709
vn 0.8114 -0.4680 0.3500
vn 0.0652 0.5673 -0.8209
vn 0.7377 0.5266 0.4225
vn -0.0652 -0.5673 0.8209
vn -0.7377 -0.5266 -0.4225
vn -0.5677 -0.7735 0.2817
vn -0.3348 0.8287 -0.4484
vn 0.9988 -0.0288 0.0398
vn 0.0126 -0.6331 -0.7740
vn -0.0126 0.6331 0.7740
vn -0.9988 0.0288 -0.0398
vn 0.0475 0.7735 -0.6320
vn 0.5419 -0.0977 0.8347
vn -0.6114 -0.0645 0.7887
vn -0.5565 0.8287 0.0590
vn 0.5968 0.7955 0.1050
vn 0.5565 -0.8288 -0.0590
vn -0.5968 -0.7955 -0.1050
vn -0.5419 0.0977 -0.8347
vn 0.6114 0.0645 -0.7887
vn -0.0425 -0.0993 0.9941
vn -0.7152 0.4680 0.5191
vn 0.0247 0.9946 0.1004
vn 0.6973 0.4273 0.5755
vn -0.0247 -0.9946 -0.1004
vn -0.6973 -0.4273 -0.5755
vn 0.0425 0.0993 -0.9941
vn 0.7152 -0.4680 -0.5191
vn -0.6727 0.5673 -0.4750
vn 0.7398 0.5266 -0.4187
vn 0.6727 -0.5673 0.4750
vn -0.7398 -0.5266 0.4187
vn -0.0475 -0.7735 0.6320
vn 0.4882 -0.0288 -0.8723
vn -0.6842 -0.6331 -0.3620
vn 0.6842 0.6331 0.3620
vn -0.4882 0.0288 0.8723
vn -0.5418 0.7735 -0.3288
vn 0.9897 -0.0977 -0.1048
vn 0.4260 -0.0645 0.9024
vn -0.1996 0.8287 0.5228
vn 0.3641 0.7955 -0.4844
vn 0.1996 -0.8288 -0.5228
vn -0.3641 -0.7955 0.4844
vn -0.9897 0.0977 0.1048
vn -0.4260 0.0645 -0.9024
vn 0.8669 -0.0993 0.4885
vn 0.1386 0.4680 0.8728
vn 0.1007 0.9946 0.0235
vn 0.8290 0.4273 -0.3608
vn -0.1007 -0.9946 -0.0235
vn -0.8290 -0.4273 0.3608
vn -0.8669 0.0993 -0.4884
vn -0.1386 -0.4680 -0.8728
vn -0.7283 0.5673 0.3843
vn -0.0379 0.5266 -0.8493
vn 0.7283 -0.5673 -0.3843
vn 0.0379 -0.5266 0.8493
vn 0.5418 -0.7735 0.3288
vn -0.7785 -0.0288 -0.6270
vn -0.4712 -0.6331 0.6141
vn 0.4712 0.6331 -0.6141
vn 0.7785 0.0288 0.6270
vn -0.4146 0.7735 0.4793
vn 0.0620 -0.0977 -0.9933
vn 0.9609 -0.0645 -0.2693
vn 0.4821 0.8287 0.2841
vn -0.4168 0.7955 -0.4399
vn -0.4821 -0.8288 -0.2841
vn 0.4168 -0.7955 0.4398
vn -0.0620 0.0977 0.9933
vn -0.9609 0.0645 0.2693
vn 0.6264 -0.0993 -0.7732
vn 0.8837 0.4680 0.0091
vn 0.0400 0.9946 -0.0954
vn -0.2173 0.4273 -0.8776
vn -0.0400 -0.9946 0.0954
vn 0.2173 -0.4273 0.8776
vn -0.6264 0.0993 0.7732
vn -0.8837 -0.4680 -0.0091
vn 0.2573 0.5673 0.7823
vn -0.8437 0.5266 -0.1044
vn -0.2573 -0.5673 -0.7823
vn 0.8437 -0.5266 0.1044
vn 0.4146 -0.7735 -0.4793
vn -0.6476 -0.0288 0.7614
vn 0.6013 -0.6331 0.4875
vn -0.6013 0.6331 -0.4875
vn 0.6476 0.0288 -0.7614
vn 0.4680 0.7735 0.4273
vn -0.9913 -0.0977 -0.0886
vn -0.2434 -0.0645 -0.9678
vn 0.2970 0.8287 -0.4743
vn -0.4509 0.7955 0.4048
vn -0.2970 -0.8288 0.4743
vn 0.4509 -0.7955 -0.4049
vn 0.9913 0.0977 0.0886
vn 0.2434 0.0645 0.9678
vn -0.7561 -0.0993 -0.6469
vn 0.0328 0.4680 -0.8831
vn -0.0943 0.9946 -0.0425
vn -0.8831 0.4273 0.1937
vn 0.0942 -0.9946 0.0425
vn 0.8831 -0.4273 -0.1937
vn 0.7561 0.0993 0.6469
vn -0.0328 -0.4680 0.8831
vn 0.7889 0.5673 -0.2362
vn -0.1270 0.5266 0.8406
vn -0.7889 -0.5673 0.2362
vn 0.1270 -0.5266 -0.8406
vn -0.4680 -0.7735 -0.4273
vn -0.1570 0.8680 0.4711
vn 0.1570 0.8680 0.4711
vn 0.1570 0.8680 -0.4711
vn -0.1570 0.8680 -0.4711
vn 0.4711 0.8680 0.1570
vn 0.4711 0.8680 -0.1570
vn -0.4711 0.8680 -0.1570
vn -0.4711 0.8680 0.1570
vn 0.1570 -0.8680 -0.4711
vn -0.1570 -0.8680 -0.4711
vn -0.1570 -0.8680 0.4711
vn 0.1570 -0.8680 0.4711
vn -0.4711 -0.8680 -0.1570
vn -0.4711 -0.8680 0.1570
vn 0.4711 -0.8680 0.1570
vn 0.4711 -0.8680 -0.1570
vn 0.3162 0.0000 0.9487
vn -0.3162 0.0000 -0.9487
vn -0.3162 0.0000 0.9487
vn 0.3162 0.0000 -0.9487
vn -0.9487 0.0000 0.3162
vn 0.9487 0.0000 -0.3162
vn -0.9487 0.0000 -0.3162
vn 0.9487 0.0000 0.3162
vn -0.9338 0.1765 0.3113
vn -0.9336 0.1776 0.3112
vn -0.9336 0.1776 -0.3112
vn -0.9338 0.1765 -0.3113
vn -0.3113 0.1765 -0.9338
vn -0.3112 0.1776 -0.9336
vn 0.3112 0.1776 -0.9336
vn 0.3113 0.1765 -0.9338
vn 0.9338 0.1765 -0.3113
vn 0.9336 0.1776 -0.3112
vn 0.9336 0.1776 0.3112
vn 0.9338 0.1765 0.3113
vn 0.3113 0.1765 0.9338
vn 0.3112 0.1776 0.9336
vn -0.3112 0.1776 0.9336
vn -0.3113 0.1765 0.9338
vn -0.1616 -0.9735 -0.1616
vn 0.1616 -0.9735 -0.1616
vn 0.1616 -0.9735 0.1616
vn -0.1616 -0.9735 0.1616
vn 0.3115 -0.1728 -0.9344
vn -0.3115 -0.1728 -0.9344
vn -0.2452 -0.6313 -0.7357
vn 0.2452 -0.6313 -0.7357
vn 0.2100 -0.8120 0.5446
vn 0.3064 -0.2475 0.9192
vn -0.3064 -0.2475 0.9192
vn -0.2100 -0.8120 0.5446
vn 0.5446 -0.8120 -0.2100
vn 0.9192 -0.2475 -0.3064
vn 0.9192 -0.2475 0.3064
vn 0.5446 -0.8120 0.2100
vn -0.2100 -0.8120 -0.5446
vn -0.3064 -0.2475 -0.9192
vn 0.3064 -0.2475 -0.9192
vn 0.2100 -0.8120 -0.5446
vn -0.5446 -0.8120 0.2100
vn -0.9192 -0.2475 0.3064
vn -0.9192 -0.2475 -0.3064
vn -0.5446 -0.8120 -0.2100
vn 0.9344 -0.1728 0.3115
vn 0.9344 -0.1728 -0.3115
vn 0.7357 -0.6313 -0.2452
vn 0.7357 -0.6313 0.2452
vn -0.9344 -0.1728 -0.3115
vn -0.9344 -0.1728 0.3115
vn -0.7357 -0.6313 0.2452
vn -0.7357 -0.6313 -0.2452
vn -0.3115 -0.1728 0.9344
vn 0.3115 -0.1728 0.9344
vn 0.2452 -0.6313 0.7357
vn -0.2452 -0.6313 0.7357
vn -0.2257 0.7006 0.6770
vn 0.2257 0.7006 0.6770
vn 0.1696 0.8749 0.4537
vn -0.1696 0.8749 0.4537
vn 0.1646 0.9725 -0.1646
vn -0.1646 0.9725 -0.1646
vn -0.1646 0.9725 0.1646
vn 0.1646 0.9725 0.1646
vn 0.2257 0.7006 -0.6770
vn -0.2257 0.7006 -0.6770
vn -0.1696 0.8749 -0.4537
vn 0.1696 0.8749 -0.4537
vn 0.6770 0.7006 0.2257
vn 0.6770 0.7006 -0.2257
vn 0.4537 0.8749 -0.1696
vn 0.4537 0.8749 0.1696
vn -0.6770 0.7006 -0.2257
vn -0.6770 0.7006 0.2257
vn -0.4537 0.8749 0.1696
vn -0.4537 0.8749 -0.1696
vn -0.9434 -0.1050 -0.3145
vn -0.9434 -0.1050 0.3145
vn -0.8433 0.4580 0.2811
vn -0.8433 0.4580 -0.2811
vn 0.9434 -0.1050 0.3145
vn 0.9434 -0.1050 -0.3145
vn 0.8433 0.4580 -0.2811
vn 0.8433 0.4580 0.2811
vn 0.3145 -0.1050 -0.9434
vn -0.3145 -0.1050 -0.9434
vn -0.2811 0.4580 -0.8433
vn 0.2811 0.4580 -0.8433
vn -0.3145 -0.1050 0.9434
vn 0.3145 -0.1050 0.9434
vn 0.2811 0.4580 0.8433
vn -0.2811 0.4580 0.8433
vn -0.0816 -0.9661 0.2448
vn 0.0816 -0.9661 0.2448
vn 0.0995 -0.9492 0.2985
vn -0.0995 -0.9492 0.2985
vn 0.0816 -0.9661 -0.2448
vn -0.0816 -0.9661 -0.2448
vn -0.0995 -0.9492 -0.2985
vn 0.0995 -0.9492 -0.2985
vn 0.2448 -0.9661 0.0816
vn 0.2448 -0.9661 -0.0816
vn 0.2985 -0.9492 -0.0995
vn 0.2985 -0.9492 0.0995
vn -0.2448 -0.9661 -0.0816
vn -0.2448 -0.9661 0.0816
vn -0.2985 -0.9492 0.0995
vn -0.2985 -0.9492 -0.0995
usemtl Mushroom1
s off
f 2//1 15//1 23//1 12//1
f 21//2 24//2 14//2 18//2
f 8//3 5//3 3//3 11//3
f 7//4 19//4 17//4 6//4
f 10//5 22//5 20//5 9//5
f 1//6 2//6 3//6
f 4//7 5//7 6//7
f 7//8 8//8 9//8
f 10//9 11//9 12//9
f 13//10 14//10 15//10
f 16//11 17//11 18//11
f 19//12 20//12 21//12
f 22//13 23//13 24//13
f 3//14 5//14 4//14 1//14
f 5//15 8//15 7//15 6//15
f 8//16 11//16 10//16 9//16
f 11//17 3//17 2//17 12//17
f 13//18 16//18 18//18 14//18
f 17//19 19//19 21//19 18//19
f 20//20 22//20 24//20 21//20
f 23//21 15//21 14//21 24//21
f 9//22 20//22 19//22 7//22
f 22//23 10//23 12//23 23//23
f 1//24 13//24 15//24 2//24
f 16//25 4//25 6//25 17//25
f 4//26 16//26 13//26 1//26
f 26//27 39//27 47//27 36//27
f 45//28 48//28 38//28 42//28
f 32//29 29//29 27//29 35//29
f 31//30 43//30 41//30 30//30
f 34//31 46//31 44//31 33//31
f 25//32 26//32 27//32
f 28//33 29//33 30//33
f 31//34 32//34 33//34
f 34//35 35//35 36//35
f 37//36 38//36 39//36
f 40//37 41//37 42//37
f 43//38 44//38 45//38
f 46//39 47//39 48//39
f 27//40 29//40 28//40 25//40
f 29//41 32//41 31//41 30//41
f 32//42 35//42 34//42 33//42
f 35//43 27//43 26//43 36//43
f 37//44 40//44 42//44 38//44
f 41//45 43//45 45//45 42//45
f 44//46 46//46 48//46 45//46
f 47//47 39//47 38//47 48//47
f 33//48 44//48 43//48 31//48
f 46//49 34//49 36//49 47//49
f 25//50 37//50 39//50 26//50
f 40//51 28//51 30//51 41//51
f 28//52 40//52 37//52 25//52
f 50//53 63//53 71//53 60//53
f 69//54 72//54 62//54 66//54
f 56//55 53//55 51//55 59//55
f 55//56 67//56 65//56 54//56
f 58//57 70//57 68//57 57//57
f 49//58 50//58 51//58
f 52//59 53//59 54//59
f 55//60 56//60 57//60
f 58//61 59//61 60//61
f 61//62 62//62 63//62
f 64//63 65//63 66//63
f 67//64 68//64 69//64
f 70//65 71//65 72//65
f 51//66 53//66 52//66 49//66
f 53//67 56//67 55//67 54//67
f 56//68 59//68 58//68 57//68
f 59//69 51//69 50//69 60//69
f 61//70 64//70 66//70 62//70
f 65//71 67//71 69//71 66//71
f 68//72 70//72 72//72 69//72
f 71//73 63//73 62//73 72//73
f 57//74 68//74 67//74 55//74
f 70//75 58//75 60//75 71//75
f 49//76 61//76 63//76 50//76
f 64//77 52//77 54//77 65//77
f 52//78 64//78 61//78 49//78
f 74//79 87//79 95//79 84//79
f 93//80 96//80 86//80 90//80
f 80//81 77//81 75//81 83//81
f 79//82 91//82 89//82 78//82
f 82//83 94//83 92//83 81//83
f 73//84 74//84 75//84
f 76//85 77//85 78//85
f 79//86 80//86 81//86
f 82//87 83//87 84//87
f 85//88 86//88 87//88
f 88//89 89//89 90//89
f 91//90 92//90 93//90
f 94//91 95//91 96//91
f 75//92 77//92 76//92 73//92
f 77//93 80//93 79//93 78//93
f 80//94 83//94 82//94 81//94
f 83//95 75//95 74//95 84//95
f 85//96 88//96 90//96 86//96
f 89//97 91//97 93//97 90//97
f 92//98 94//98 96//98 93//98
f 95//99 87//99 86//99 96//99
f 81//100 92//100 91//100 79//100
f 94//101 82//101 84//101 95//101
f 73//102 85//102 87//102 74//102
f 88//103 76//103 78//103 89//103
f 76//104 88//104 85//104 73//104
f 98//105 111//105 119//105 108//105
f 117//106 120//106 110//106 114//106
f 104//107 101//107 99//107 107//107
f 103//108 115//108 113//108 102//108
f 106//109 118//109 116//109 105//109
f 97//110 98//110 99//110
f 100//111 101//111 102//111
f 103//112 104//112 105//112
f 106//113 107//113 108//113
f 109//114 110//114 111//114
f 112//115 113//115 114//115
f 115//116 116//116 117//116
f 118//117 119//117 120//117
f 99//118 101//118 100//118 97//118
f 101//119 104//119 103//119 102//119
f 104//120 107//120 106//120 105//120
f 107//121 99//121 98//121 108//121
f 109//122 112//122 114//122 110//122
f 113//123 115//123 117//123 114//123
f 116//124 118//124 120//124 117//124
f 119//125 111//125 110//125 120//125
f 105//126 116//126 115//126 103//126
f 118//127 106//127 108//127 119//127
f 97//128 109//128 111//128 98//128
f 112//129 100//129 102//129 113//129
f 100//130 112//130 109//130 97//130
f 122//131 135//131 143//131 132//131
f 141//132 144//132 134//132 138//132
f 128//133 125//133 123//133 131//133
f 127//134 139//134 137//134 126//134
f 130//135 142//135 140//135 129//135
f 121//136 122//136 123//136
f 124//137 125//137 126//137
f 127//138 128//138 129//138
f 130//139 131//139 132//139
f 133//140 134//140 135//140
f 136//141 137//141 138//141
f 139//142 140//142 141//142
f 142//143 143//143 144//143
f 123//144 125//144 124//144 121//144
f 125//145 128//145 127//145 126//145
f 128//146 131//146 130//146 129//146
f 131//147 123//147 122//147 132//147
f 133//148 136//148 138//148 134//148
f 137//149 139//149 141//149 138//149
f 140//150 142//150 144//150 141//150
f 143//151 135//151 134//151 144//151
f 129//152 140//152 139//152 127//152
f 142//153 130//153 132//153 143//153
f 121//154 133//154 135//154 122//154
f 136//155 124//155 126//155 137//155
f 124//156 136//156 133//156 121//156
f 146//157 159//157 167//157 156//157
f 165//158 168//158 158//158 162//158
f 152//159 149//159 147//159 155//159
f 151//160 163//160 161//160 150//160
f 154//161 166//161 164//161 153//161
f 145//162 146//162 147//162
f 148//163 149//163 150//163
f 151//164 152//164 153//164
f 154//165 155//165 156//165
f 157//166 158//166 159//166
f 160//167 161//167 162//167
f 163//168 164//168 165//168
f 166//169 167//169 168//169
f 147//170 149//170 148//170 145//170
f 149//171 152//171 151//171 150//171
f 152//172 155//172 154//172 153//172
f 155//173 147//173 146//173 156//173
f 157//174 160//174 162//174 158//174
f 161//175 163//175 165//175 162//175
f 164//176 166//176 168//176 165//176
f 167//177 159//177 158//177 168//177
f 153//178 164//178 163//178 151//178
f 166//179 154//179 156//179 167//179
f 145//180 157//180 159//180 146//180
f 160//181 148//181 150//181 161//181
f 148//182 160//182 157//182 145//182
f 170//183 183//183 191//183 180//183
f 189//184 192//184 182//184 186//184
f 176//185 173//185 171//185 179//185
f 175//186 187//186 185//186 174//186
f 178//187 190//187 188//187 177//187
f 169//188 170//188 171//188
f 172//189 173//189 174//189
f 175//190 176//190 177//190
f 178//191 179//191 180//191
f 181//192 182//192 183//192
f 184//193 185//193 186//193
f 187//194 188//194 189//194
f 190//195 191//195 192//195
f 171//196 173//196 172//196 169//196
f 173//197 176//197 175//197 174//197
f 176//198 179//198 178//198 177//198
f 179//199 171//199 170//199 180//199
f 181//200 184//200 186//200 182//200
f 185//201 187//201 189//201 186//201
f 188//202 190//202 192//202 189//202
f 191//203 183//203 182//203 192//203
f 177//204 188//204 187//204 175//204
f 190//205 178//205 180//205 191//205
f 169//206 181//206 183//206 170//206
f 184//207 172//207 174//207 185//207
f 172//208 184//208 181//208 169//208
f 194//209 207//209 215//209 204//209
f 213//210 216//210 206//210 210//210
f 200//211 197//211 195//211 203//211
f 199//212 211//212 209//212 198//212
f 202//213 214//213 212//213 201//213
f 193//214 194//214 195//214
f 196//215 197//215 198//215
f 199//216 200//216 201//216
f 202//217 203//217 204//217
f 205//218 206//218 207//218
f 208//219 209//219 210//219
f 211//220 212//220 213//220
f 214//221 215//221 216//221
f 195//222 197//222 196//222 193//222
f 197//223 200//223 199//223 198//223
f 200//224 203//224 202//224 201//224
f 203//225 195//225 194//225 204//225
f 205//226 208//226 210//226 206//226
f 209//227 211//227 213//227 210//227
f 212//228 214//228 216//228 213//228
f 215//229 207//229 206//229 216//229
f 201//230 212//230 211//230 199//230
f 214//231 202//231 204//231 215//231
f 193//232 205//232 207//232 194//232
f 208//233 196//233 198//233 209//233
f 196//234 208//234 205//234 193//234
f 218//209 231//209 239//209 228//209
f 237//210 240//210 230//210 234//210
f 224//211 221//211 219//211 227//211
f 223//212 235//212 233//212 222//212
f 226//213 238//213 236//213 225//213
f 217//214 218//214 219//214
f 220//215 221//215 222//215
f 223//235 224//235 225//235
f 226//217 227//217 228//217
f 229//218 230//218 231//218
f 232//219 233//219 234//219
f 235//220 236//220 237//220
f 238//221 239//221 240//221
f 219//222 221//222 220//222 217//222
f 221//223 224//223 223//223 222//223
f 224//224 227//224 226//224 225//224
f 227//225 219//225 218//225 228//225
f 229//226 232//226 234//226 230//226
f 233//227 235//227 237//227 234//227
f 236//228 238//228 240//228 237//228
f 239//229 231//229 230//229 240//229
f 225//230 236//230 235//230 223//230
f 238//231 226//231 228//231 239//231
f 217//232 229//232 231//232 218//232
f 232//233 220//233 222//233 233//233
f 220//234 232//234 229//234 217//234
f 242//236 255//236 263//236 252//236
f 261//237 264//237 254//237 258//237
f 248//238 245//238 243//238 251//238
f 247//239 259//239 257//239 246//239
f 250//240 262//240 260//240 249//240
f 241//241 242//241 243//241
f 244//242 245//242 246//242
f 247//243 248//243 249//243
f 250//244 251//244 252//244
f 253//245 254//245 255//245
f 256//246 257//246 258//246
f 259//247 260//247 261//247
f 262//248 263//248 264//248
f 243//249 245//249 244//249 241//249
f 245//250 248//250 247//250 246//250
f 248//251 251//251 250//251 249//251
f 251//252 243//252 242//252 252//252
f 253//253 256//253 258//253 254//253
f 257//254 259//254 261//254 258//254
f 260//255 262//255 264//255 261//255
f 263//256 255//256 254//256 264//256
f 249//257 260//257 259//257 247//257
f 262//258 250//258 252//258 263//258
f 241//259 253//259 255//259 242//259
f 256//260 244//260 246//260 257//260
f 244//261 256//261 253//261 241//261
f 266//262 279//262 287//262 276//262
f 285//263 288//263 278//263 282//263
f 272//264 269//264 267//264 275//264
f 271//265 283//265 281//265 270//265
f 274//266 286//266 284//266 273//266
f 265//267 266//267 267//267
f 268//268 269//268 270//268
f 271//269 272//269 273//269
f 274//270 275//270 276//270
f 277//271 278//271 279//271
f 280//272 281//272 282//272
f 283//273 284//273 285//273
f 286//274 287//274 288//274
f 267//275 269//275 268//275 265//275
f 269//276 272//276 271//276 270//276
f 272//277 275//277 274//277 273//277
f 275//278 267//278 266//278 276//278
f 277//279 280//279 282//279 278//279
f 281//280 283//280 285//280 282//280
f 284//281 286//281 288//281 285//281
f 287//282 279//282 278//282 288//282
f 273//283 284//283 283//283 271//283
f 286//284 274//284 276//284 287//284
f 265//285 277//285 279//285 266//285
f 280//286 268//286 270//286 281//286
f 268//287 280//287 277//287 265//287
f 290//288 303//288 311//288 300//288
f 309//289 312//289 302//289 306//289
f 296//290 293//290 291//290 299//290
f 295//291 307//291 305//291 294//291
f 298//292 310//292 308//292 297//292
f 289//293 290//293 291//293
f 292//294 293//294 294//294
f 295//295 296//295 297//295
f 298//296 299//296 300//296
f 301//297 302//297 303//297
f 304//298 305//298 306//298
f 307//299 308//299 309//299
f 310//300 311//300 312//300
f 291//301 293//301 292//301 289//301
f 293//302 296//302 295//302 294//302
f 296//303 299//303 298//303 297//303
f 299//304 291//304 290//304 300//304
f 301//305 304//305 306//305 302//305
f 305//306 307//306 309//306 306//306
f 308//307 310//307 312//307 309//307
f 311//308 303//308 302//308 312//308
f 297//309 308//309 307//309 295//309
f 310//310 298//310 300//310 311//310
f 289//311 301//311 303//311 290//311
f 304//312 292//312 294//312 305//312
f 292//313 304//313 301//313 289//313
f 314//314 327//314 335//314 324//314
f 333//315 336//315 326//315 330//315
f 320//316 317//316 315//316 323//316
f 319//317 331//317 329//317 318//317
f 322//318 334//318 332//318 321//318
f 313//319 314//319 315//319
f 316//320 317//320 318//320
f 319//321 320//321 321//321
f 322//322 323//322 324//322
f 325//323 326//323 327//323
f 328//324 329//324 330//324
f 331//325 332//325 333//325
f 334//326 335//326 336//326
f 315//327 317//327 316//327 313//327
f 317//328 320//328 319//328 318//328
f 320//329 323//329 322//329 321//329
f 323//330 315//330 314//330 324//330
f 325//331 328//331 330//331 326//331
f 329//332 331//332 333//332 330//332
f 332//333 334//333 336//333 333//333
f 335//334 327//334 326//334 336//334
f 321//335 332//335 331//335 319//335
f 334//336 322//336 324//336 335//336
f 313//337 325//337 327//337 314//337
f 328//338 316//338 318//338 329//338
f 316//339 328//339 325//339 313//339
f 337//340 344//340 353//340 349//340
f 337//341 350//341 355//341 344//341
f 337//341 348//341 359//341 350//341
f 337//340 349//340 357//340 348//340
f 338//342 342//342 356//342 351//342
f 338//343 352//343 354//343 342//343
f 338//343 346//343 358//343 352//343
f 338//342 351//342 360//342 346//342
f 339//344 343//344 355//344 350//344
f 339//345 351//345 356//345 343//345
f 339//345 347//345 360//345 351//345
f 339//344 350//344 359//344 347//344
f 340//346 341//346 354//346 352//346
f 340//347 349//347 353//347 341//347
f 340//347 345//347 357//347 349//347
f 340//346 352//346 358//346 345//346
f 361//348 365//348 377//348 362//348
f 361//349 362//349 380//349 363//349
f 361//349 363//349 384//349 364//349
f 361//348 364//348 381//348 365//348
f 366//350 370//350 379//350 367//350
f 366//351 367//351 378//351 368//351
f 366//351 368//351 382//351 369//351
f 366//350 369//350 383//350 370//350
f 371//352 363//352 380//352 372//352
f 371//353 372//353 379//353 370//353
f 371//353 370//353 383//353 373//353
f 371//352 373//352 384//352 363//352
f 374//354 368//354 378//354 375//354
f 374//355 375//355 377//355 365//355
f 374//355 365//355 381//355 376//355
f 374//354 376//354 382//354 368//354
f 342//356 354//356 378//356 367//356
f 358//357 346//357 369//357 382//357
f 356//358 342//358 367//358 379//358
f 346//359 360//359 383//359 369//359
f 343//360 356//360 379//360 372//360
f 360//361 347//361 373//361 383//361
f 355//362 343//362 372//362 380//362
f 347//363 359//363 384//363 373//363
f 344//357 355//357 380//357 362//357
f 359//356 348//356 364//356 384//356
f 353//359 344//359 362//359 377//359
f 341//361 353//361 377//361 375//361
f 348//358 357//358 381//358 364//358
f 357//360 345//360 376//360 381//360
f 354//363 341//363 375//363 378//363
f 345//362 358//362 382//362 376//362
f 385//364 430//364 471//364 412//364
f 385//365 412//365 464//365 413//365
f 385//366 413//366 466//366 424//366
f 385//367 424//367 472//367 430//367
f 386//368 429//368 472//368 424//368
f 386//369 424//369 466//369 416//369
f 386//370 416//370 470//370 425//370
f 386//371 425//371 473//371 429//371
f 387//372 428//372 473//372 425//372
f 387//373 425//373 470//373 419//373
f 387//374 419//374 468//374 426//374
f 387//375 426//375 474//375 428//375
f 388//376 427//376 474//376 426//376
f 388//377 426//377 468//377 422//377
f 388//378 422//378 464//378 412//378
f 388//379 412//379 471//379 427//379
f 389//380 411//380 465//380 415//380
f 389//381 415//381 469//381 418//381
f 389//382 418//382 467//382 421//382
f 389//383 421//383 463//383 411//383
f 390//384 436//384 470//384 416//384
f 390//385 416//385 466//385 435//385
f 390//386 435//386 476//386 432//386
f 390//387 432//387 477//387 436//387
f 391//388 421//388 467//388 420//388
f 391//389 420//389 474//389 427//389
f 391//390 427//390 471//390 423//390
f 391//391 423//391 463//391 421//391
f 392//392 418//392 469//392 417//392
f 392//393 417//393 473//393 428//393
f 392//394 428//394 474//394 420//394
f 392//395 420//395 467//395 418//395
f 393//396 415//396 465//396 414//396
f 393//397 414//397 472//397 429//397
f 393//398 429//398 473//398 417//398
f 393//399 417//399 469//399 415//399
f 394//400 411//400 463//400 423//400
f 394//401 423//401 471//401 430//401
f 394//402 430//402 472//402 414//402
f 394//403 414//403 465//403 411//403
f 396//404 437//404 468//404 419//404
f 396//405 419//405 470//405 436//405
f 396//406 436//406 477//406 433//406
f 396//407 433//407 478//407 437//407
f 397//408 435//408 466//408 413//408
f 397//409 413//409 464//409 438//409
f 397//410 438//410 475//410 431//410
f 397//411 431//411 476//411 435//411
f 398//412 438//412 464//412 422//412
f 398//413 422//413 468//413 437//413
f 398//414 437//414 478//414 434//414
f 398//415 434//415 475//415 438//415
usemtl Red
f 395//416 448//416 484//416 454//416
f 395//417 454//417 483//417 443//417
f 395//418 443//418 482//418 442//418
f 395//419 442//419 479//419 448//419
f 399//420 441//420 481//420 440//420
f 399//421 440//421 480//421 439//421
f 399//422 439//422 479//422 442//422
f 399//423 442//423 482//423 441//423
f 400//424 450//424 486//424 453//424
f 400//425 453//425 485//425 445//425
f 400//426 445//426 480//426 440//426
f 400//427 440//427 481//427 450//427
f 401//428 443//428 483//428 452//428
f 401//429 452//429 486//429 450//429
f 401//430 450//430 481//430 441//430
f 401//431 441//431 482//431 443//431
f 402//432 445//432 485//432 451//432
f 402//433 451//433 484//433 448//433
f 402//434 448//434 479//434 439//434
f 402//435 439//435 480//435 445//435
f 403//436 449//436 490//436 462//436
f 403//437 462//437 487//437 455//437
f 403//438 455//438 484//438 451//438
f 403//439 451//439 485//439 449//439
f 404//440 447//440 489//440 461//440
f 404//441 461//441 488//441 456//441
f 404//442 456//442 486//442 452//442
f 404//443 452//443 483//443 447//443
f 405//444 456//444 488//444 460//444
f 405//445 460//445 490//445 449//445
f 405//446 449//446 485//446 453//446
f 405//447 453//447 486//447 456//447
f 406//448 455//448 487//448 459//448
f 406//449 459//449 489//449 447//449
f 406//450 447//450 483//450 454//450
f 406//451 454//451 484//451 455//451
f 407//452 444//452 475//452 434//452
f 407//453 434//453 478//453 457//453
f 407//454 457//454 489//454 459//454
f 407//455 459//455 487//455 444//455
f 408//456 446//456 477//456 432//456
f 408//457 432//457 476//457 458//457
f 408//458 458//458 490//458 460//458
f 408//459 460//459 488//459 446//459
f 409//460 457//460 478//460 433//460
f 409//461 433//461 477//461 446//461
f 409//462 446//462 488//462 461//462
f 409//463 461//463 489//463 457//463
f 410//464 458//464 476//464 431//464
f 410//465 431//465 475//465 444//465
f 410//466 444//466 487//466 462//466
f 410//467 462//467 490//467 458//467
`,Rs=`# Blender MTL File: 'PalmTree_2.blend'
# Material Count: 3

newmtl DarkGreen_Tree
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.042528 0.072669 0.029578
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Green_Tree
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Wood
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.122341 0.056288 0.047609
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,zs=`# Blender v2.79 (sub 0) OBJ File: 'PalmTree_2.blend'
# www.blender.org
mtllib PalmTree_2.mtl
o PalmTree_2_Cylinder.023
v -0.048093 -0.025601 -0.016723
v 0.047403 1.402935 -0.027994
v -0.006469 -0.023504 -0.053985
v 0.076401 1.403762 -0.054887
v 0.046678 -0.022144 -0.036749
v 0.113806 1.406603 -0.042671
v 0.058043 -0.022754 0.017807
v 0.121571 1.408532 -0.004332
v 0.016293 -0.024822 0.054923
v 0.093220 1.407365 0.022439
v -0.036448 -0.026333 0.037533
v 0.055608 1.404513 0.010663
v -0.091440 0.183724 0.004903
v -0.053561 0.376812 0.032900
v 0.015897 0.597443 0.051553
v 0.060122 0.593178 0.013846
v -0.009383 0.374307 -0.005860
v -0.048170 0.185856 -0.034714
v 0.113844 0.587009 0.032014
v 0.046414 0.367419 0.011931
v 0.008952 0.185343 -0.017596
v 0.124826 0.585191 0.087701
v 0.057563 0.363448 0.069488
v 0.022113 0.181798 0.041997
v 0.081996 0.588958 0.125202
v 0.013113 0.366580 0.107942
v -0.023712 0.179712 0.081560
v 0.027497 0.595016 0.107579
v -0.042287 0.373062 0.089666
v -0.079627 0.181051 0.062185
v 0.159820 1.397395 -0.032943
v 0.030161 1.386379 -0.072288
v 0.086326 1.425363 -0.060595
v 0.118154 1.439477 -0.197384
v 0.262517 1.406716 -0.138856
v -0.013391 1.383684 -0.222615
v 0.182029 1.397001 -0.426786
v 0.324653 1.367482 -0.355454
v 0.040354 1.344714 -0.441838
v 0.253614 1.277282 -0.645893
v 0.332217 1.254312 -0.590841
v 0.165473 1.241591 -0.641558
v 0.318362 1.129973 -0.730307
v 0.293627 1.148181 -0.746290
v 0.267289 1.126171 -0.745848
v 0.116034 1.396583 -0.012186
v 0.212047 1.402539 -0.074368
v 0.055886 1.391499 -0.030441
v 0.003189 1.384874 -0.137753
v 0.077640 1.411721 -0.014649
v 0.098725 1.435697 -0.117734
v 0.303295 1.398683 -0.230871
v -0.005473 1.373398 -0.324645
v 0.145669 1.429097 -0.300164
v 0.331932 1.317865 -0.484875
v 0.103565 1.300064 -0.554303
v 0.220424 1.345577 -0.550800
v 0.327067 1.187978 -0.672853
v 0.221556 1.180043 -0.704954
v 0.278695 1.206676 -0.711378
v 0.300310 1.102108 -0.756793
v 0.132370 1.402226 -0.070184
v 0.026603 1.400342 -0.030514
v 0.066030 1.432592 -0.068641
v 0.024199 1.392128 -0.202335
v 0.155273 1.355162 -0.213382
v -0.065605 1.350732 -0.128570
v -0.085688 1.050932 -0.576803
v 0.005409 1.032535 -0.559597
v -0.120742 1.029405 -0.508779
v -0.062375 0.863485 -0.620463
v -0.094374 0.881099 -0.629721
v -0.100653 0.862525 -0.605002
v 0.110790 1.416679 -0.030970
v 0.150030 1.383076 -0.132810
v 0.061701 1.415825 -0.012637
v -0.019197 1.379907 -0.068723
v 0.081862 1.437189 -0.021009
v 0.047610 1.420185 -0.125895
v 0.141519 1.307354 -0.306402
v -0.101924 1.302094 -0.211428
v -0.002901 1.340490 -0.295987
v 0.050366 1.132605 -0.496905
v -0.124130 1.128366 -0.426975
v -0.066160 1.157088 -0.507762
v -0.032616 0.939251 -0.599301
v -0.111972 0.937263 -0.567260
v -0.094861 0.954045 -0.616350
v -0.084466 0.829695 -0.622449
v 0.103328 1.410663 0.020108
v 0.112912 1.405906 -0.062480
v 0.113468 1.432252 -0.023215
v 0.221682 1.408172 -0.009754
v 0.198704 1.382946 0.079511
v 0.218558 1.372951 -0.095294
v 0.393466 1.317399 0.015390
v 0.362737 1.297422 0.105156
v 0.382121 1.287392 -0.072690
v 0.544062 1.170548 0.041987
v 0.518717 1.157302 0.093978
v 0.529885 1.151516 -0.008675
v 0.599083 1.032595 0.075531
v 0.605875 1.045762 0.058515
v 0.602472 1.030837 0.044334
v 0.080303 1.419186 -0.005827
v 0.142981 1.399725 0.050921
v 0.084833 1.416968 -0.044039
v 0.158227 1.392101 -0.081960
v 0.076339 1.433522 -0.027256
v 0.159168 1.425584 -0.017803
v 0.271722 1.351694 0.099704
v 0.293504 1.340628 -0.094730
v 0.300215 1.374067 0.001257
v 0.450987 1.229619 0.101160
v 0.466406 1.221637 -0.040421
v 0.480660 1.246832 0.029641
v 0.567511 1.088843 0.084969
v 0.574539 1.085199 0.020309
v 0.585245 1.099783 0.051808
v 0.611566 1.007060 0.062956
v 0.036500 1.428488 -0.000994
v 0.107127 1.432002 0.010414
v 0.061147 1.469488 0.006700
v 0.033848 1.491331 0.134625
v -0.027027 1.435081 0.112655
v 0.122047 1.442560 0.136686
v -0.002876 1.450631 0.353963
v -0.064135 1.397509 0.319675
v 0.087508 1.405077 0.344151
v -0.044205 1.147196 0.659631
v -0.037261 1.172360 0.667978
v -0.017640 1.148529 0.663913
v 0.060112 1.430707 -0.028143
v 0.004968 1.431548 0.045702
v 0.092673 1.432356 -0.022907
v 0.118669 1.437182 0.064086
v 0.072371 1.451716 -0.035174
v 0.048860 1.483812 0.059667
v -0.052339 1.427560 0.202975
v 0.113415 1.435872 0.229698
v 0.016678 1.483184 0.232501
v -0.066923 1.347848 0.438154
v 0.053953 1.353848 0.457690
v -0.020939 1.395573 0.473723
v -0.054090 1.209957 0.608647
v 0.001028 1.212710 0.617542
v -0.037323 1.239684 0.632220
v -0.032178 1.118224 0.680473
v 0.064630 1.388980 0.031501
v 0.141941 1.393915 -0.026302
v 0.094922 1.430956 0.004454
v 0.161274 1.453277 0.110747
v 0.083591 1.395429 0.162714
v 0.248103 1.405708 0.040786
v 0.284405 1.413102 0.291553
v 0.195451 1.358681 0.333746
v 0.364119 1.368881 0.210369
v 0.409912 1.282443 0.464882
v 0.351239 1.243460 0.477938
v 0.449460 1.249209 0.407010
v 0.457553 1.110510 0.548555
v 0.473754 1.135612 0.544033
v 0.487552 1.112233 0.527050
v 0.068020 1.391520 -0.009113
v 0.067309 1.391845 0.090552
v 0.104064 1.393766 -0.035800
v 0.192019 1.399724 -0.002294
v 0.075333 1.412963 -0.030435
v 0.121539 1.445495 0.048548
v 0.123370 1.388171 0.244919
v 0.307056 1.399473 0.109621
v 0.215377 1.445407 0.191629
v 0.277954 1.309661 0.415682
v 0.412978 1.317662 0.317709
v 0.353844 1.358204 0.389548
v 0.411959 1.172857 0.521737
v 0.473980 1.176453 0.477112
v 0.450349 1.202672 0.516603
v 0.484149 1.081819 0.552369
v 0.041310 1.394019 -0.039657
v 0.087200 1.409126 0.026642
v 0.057226 1.430219 -0.014989
v -0.044112 1.475857 0.040993
v -0.081444 1.420312 -0.022009
v 0.017577 1.451952 0.118847
v -0.214320 1.498396 0.156122
v -0.247473 1.442637 0.084272
v -0.144501 1.474406 0.228140
v -0.384046 1.456068 0.288977
v -0.395615 1.415812 0.242207
v -0.334731 1.433918 0.325712
v -0.475703 1.355422 0.359446
v -0.470327 1.376617 0.370310
v -0.457028 1.360897 0.384878
v 0.076965 1.391861 -0.036500
v -0.013292 1.404339 -0.037161
v 0.098035 1.398885 -0.005858
v 0.061254 1.428519 0.069708
v 0.091767 1.407634 -0.030664
v 0.014718 1.452906 0.006876
v -0.160223 1.435262 0.015363
v -0.048885 1.470241 0.172364
v -0.119793 1.492976 0.090015
v -0.330410 1.437748 0.166042
v -0.247229 1.462848 0.280961
v -0.308686 1.487593 0.226674
v -0.443932 1.385503 0.308157
v -0.405353 1.396872 0.360828
v -0.438739 1.415293 0.338336
v -0.482793 1.341808 0.387780
v 0.158818 1.392885 -0.034435
v 0.034866 1.382318 -0.072046
v 0.088182 1.420562 -0.061435
v 0.119433 1.434509 -0.196978
v 0.261627 1.401895 -0.139104
v -0.009592 1.379170 -0.221433
v 0.182434 1.392367 -0.424978
v 0.322851 1.362975 -0.354514
v 0.043538 1.340520 -0.439376
v 0.253008 1.273674 -0.642719
v 0.328714 1.250907 -0.589113
v 0.168595 1.238647 -0.637810
v 0.313889 1.128192 -0.727896
v 0.292510 1.146075 -0.742098
v 0.270106 1.124921 -0.741219
v 0.114708 1.392299 -0.014061
v 0.211244 1.397807 -0.075276
v 0.060840 1.387727 -0.030408
v 0.007426 1.380513 -0.137128
v 0.079651 1.407013 -0.015767
v 0.100335 1.430771 -0.118015
v 0.302065 1.393938 -0.230458
v -0.002054 1.368936 -0.322813
v 0.146544 1.424227 -0.299008
v 0.329295 1.313801 -0.483514
v 0.106652 1.296383 -0.551198
v 0.220280 1.341363 -0.548313
v 0.322854 1.185288 -0.670934
v 0.224750 1.177885 -0.700780
v 0.277780 1.203744 -0.707657
v 0.299143 1.100875 -0.752271
v 0.130545 1.397838 -0.069153
v 0.031179 1.396218 -0.030175
v 0.067311 1.427581 -0.067956
v 0.026550 1.387471 -0.200175
v 0.155228 1.350698 -0.210978
v -0.060651 1.346667 -0.126859
v -0.081364 1.048665 -0.571950
v 0.006067 1.030287 -0.554769
v -0.113723 1.027729 -0.505408
v -0.061830 0.863162 -0.615234
v -0.089799 0.880479 -0.624334
v -0.093471 0.862410 -0.601570
v 0.108273 1.412515 -0.030317
v 0.149127 1.378536 -0.131157
v 0.066230 1.411843 -0.012704
v -0.014546 1.375714 -0.067744
v 0.083558 1.432210 -0.020765
v 0.049367 1.415275 -0.124530
v 0.142136 1.303195 -0.303230
v -0.096494 1.298378 -0.209010
v 0.000125 1.336253 -0.293005
v 0.051293 1.129532 -0.492498
v -0.117537 1.125858 -0.423735
v -0.062143 1.154010 -0.503451
v -0.032395 0.937820 -0.594312
v -0.104748 0.936318 -0.563944
v -0.090382 0.952565 -0.611149
v -0.079318 0.829989 -0.617227
v 0.103960 1.406084 0.018329
v 0.113647 1.401572 -0.059663
v 0.114247 1.427235 -0.022632
v 0.220301 1.403491 -0.009591
v 0.197550 1.378510 0.077978
v 0.217367 1.368613 -0.093388
v 0.390361 1.313661 0.015199
v 0.360150 1.293819 0.103386
v 0.379371 1.283861 -0.071117
v 0.540012 1.168131 0.041633
v 0.515461 1.155003 0.091584
v 0.526313 1.149366 -0.006777
v 0.595550 1.031739 0.072847
v 0.601570 1.044714 0.058116
v 0.598526 1.030279 0.046269
v 0.081445 1.414752 -0.007828
v 0.142780 1.395114 0.049329
v 0.086110 1.412870 -0.040855
v 0.158072 1.387643 -0.079620
v 0.077665 1.428505 -0.026774
v 0.158915 1.420647 -0.017414
v 0.269709 1.347622 0.098109
v 0.291385 1.336632 -0.093108
v 0.297810 1.369826 0.001206
v 0.447996 1.226611 0.099092
v 0.463172 1.218730 -0.038721
v 0.476998 1.243702 0.029351
v 0.564183 1.087186 0.082296
v 0.570835 1.083763 0.022428
v 0.581025 1.098025 0.051437
v 0.607278 1.006732 0.062388
v 0.041911 1.425793 0.001503
v 0.103173 1.428685 0.010836
v 0.061980 1.464874 0.008809
v 0.034713 1.486392 0.135071
v -0.021938 1.431556 0.114070
v 0.118893 1.438587 0.136272
v -0.001923 1.446033 0.352418
v -0.058849 1.394253 0.319622
v 0.084336 1.401436 0.342266
v -0.038374 1.146573 0.657977
v -0.035735 1.170359 0.663830
v -0.021507 1.147328 0.660333
v 0.065553 1.428333 -0.025520
v 0.010190 1.428367 0.047788
v 0.088425 1.429302 -0.022421
v 0.115185 1.433461 0.064238
v 0.072999 1.447255 -0.032707
v 0.049703 1.478987 0.061053
v -0.047247 1.423990 0.203584
v 0.110403 1.431911 0.228528
v 0.017582 1.478321 0.231896
v -0.061336 1.345212 0.437594
v 0.050399 1.350783 0.455192
v -0.019910 1.391454 0.471258
v -0.048083 1.208722 0.607588
v -0.003092 1.210914 0.614387
v -0.035948 1.236942 0.628434
v -0.030843 1.117087 0.676027
v 0.070137 1.385663 0.032030
v 0.141555 1.389841 -0.023422
v 0.097862 1.426473 0.006471
v 0.162469 1.448313 0.111086
v 0.087468 1.391182 0.162158
v 0.246892 1.401162 0.042154
v 0.283310 1.408574 0.289892
v 0.197483 1.354642 0.331407
v 0.361028 1.364885 0.210083
v 0.407210 1.279238 0.461667
v 0.352248 1.240802 0.474018
v 0.444719 1.246622 0.405885
v 0.457487 1.109403 0.543875
v 0.470569 1.133788 0.540159
v 0.482239 1.110944 0.525409
v 0.073821 1.388616 -0.008475
v 0.072173 1.387991 0.090709
v 0.103592 1.389966 -0.032602
v 0.191431 1.395328 -0.000065
v 0.078135 1.408643 -0.027840
v 0.123760 1.440713 0.049842
v 0.126200 1.383852 0.243456
v 0.304933 1.395058 0.110062
v 0.215365 1.440530 0.190904
v 0.279363 1.306221 0.412460
v 0.408946 1.314313 0.316919
v 0.351814 1.354250 0.387026
v 0.412791 1.170947 0.517396
v 0.468835 1.174503 0.475858
v 0.447324 1.200161 0.512971
v 0.480511 1.080728 0.548646
v 0.042722 1.390919 -0.035468
v 0.083736 1.405430 0.026355
v 0.055749 1.426148 -0.012724
v -0.044270 1.471162 0.042631
v -0.079262 1.416402 -0.018640
v 0.015591 1.447430 0.118609
v -0.212801 1.493595 0.156865
v -0.243694 1.438797 0.086886
v -0.145250 1.469672 0.227017
v -0.380958 1.451899 0.288523
v -0.390223 1.413171 0.244346
v -0.334828 1.429835 0.323014
v -0.469433 1.354097 0.360947
v -0.466008 1.373584 0.368866
v -0.455917 1.358064 0.381108
v 0.078295 1.389096 -0.032110
v -0.011654 1.400772 -0.033365
v 0.094150 1.395514 -0.006326
v 0.058464 1.424382 0.069550
v 0.090479 1.403835 -0.027870
v 0.013795 1.448501 0.008868
v -0.157293 1.431237 0.018299
v -0.050127 1.465504 0.171787
v -0.119055 1.488134 0.091222
v -0.325806 1.434400 0.168418
v -0.247630 1.458333 0.279071
v -0.306400 1.483012 0.226840
v -0.438055 1.383553 0.310132
v -0.405286 1.393328 0.357467
v -0.435017 1.411628 0.337352
v -0.477622 1.339629 0.386289
v 0.091382 1.101799 0.025269
v 0.078526 0.842726 0.049820
v 0.120805 0.839924 0.013146
v 0.129423 1.100512 -0.008475
v 0.172979 0.838934 0.030994
v 0.177001 1.102155 0.007740
v 0.183818 0.840518 0.084282
v 0.186685 1.104831 0.056239
v 0.143113 0.842613 0.120492
v 0.149989 1.105892 0.089450
v 0.090625 0.843756 0.104005
v 0.102352 1.104512 0.074644
vn -0.0651 0.9974 -0.0322
vn 0.0331 -0.9993 -0.0191
vn -0.9559 -0.2201 0.1943
vn -0.9658 0.1592 0.2045
vn -0.9383 0.2782 0.2055
vn -0.6546 -0.2241 -0.7220
vn 0.3202 -0.0890 -0.9431
vn -0.3150 -0.1797 0.9319
vn -0.3241 -0.0707 0.9434
vn -0.3083 0.0209 0.9511
vn -0.2971 0.0892 0.9507
vn 0.6577 0.0286 0.7527
vn 0.6345 -0.2322 0.7373
vn 0.6242 -0.2505 0.7400
vn -0.3011 0.1532 0.9412
vn 0.6494 -0.1413 0.7472
vn 0.9608 0.1927 -0.1994
vn 0.9644 -0.1603 -0.2104
vn 0.9422 -0.2704 -0.1980
vn 0.6506 0.2799 0.7060
vn 0.9555 -0.2242 -0.1918
vn 0.2934 0.1430 -0.9452
vn 0.2995 0.0881 -0.9500
vn 0.3108 -0.0108 -0.9504
vn 0.9650 0.1666 -0.2027
vn 0.3162 -0.0792 -0.9454
vn -0.6682 -0.0633 -0.7413
vn -0.6477 0.2380 -0.7238
vn -0.6201 0.2606 -0.7400
vn -0.9476 0.2434 0.2069
vn -0.9707 -0.1043 0.2165
vn -0.9743 0.0683 0.2146
vn -0.2964 0.1197 0.9475
vn 0.6676 0.0707 0.7411
vn 0.9800 -0.0319 -0.1963
vn 0.3224 -0.0885 -0.9425
vn -0.6599 -0.0394 -0.7504
vn -0.6367 0.1558 -0.7552
vn 0.2010 0.9389 0.2793
vn -0.6362 0.7463 0.1959
vn 0.1906 0.9707 0.1460
vn 0.2407 0.8920 0.3826
vn 0.2120 0.9771 -0.0180
vn -0.4261 0.9046 0.0069
vn -0.3393 0.9283 -0.1524
vn 0.2714 0.9462 -0.1761
vn 0.3566 0.8882 -0.2898
vn -0.2890 0.9015 -0.3221
vn -0.2843 0.8394 -0.4632
vn 0.4760 0.7697 -0.4255
vn 0.5830 0.6332 -0.5091
vn -0.2844 0.7113 -0.6428
vn -0.2995 0.5655 -0.7685
vn 0.6668 0.4846 -0.5662
vn -0.3100 0.4110 -0.8573
vn 0.6509 0.2572 -0.7143
vn -0.1783 0.1940 -0.9647
vn -0.5245 0.8425 0.1230
vn -0.6882 0.6004 -0.4073
vn 0.6652 0.7206 -0.1955
vn -0.6466 0.7136 -0.2697
vn -0.7511 0.4522 -0.4810
vn -0.6325 0.7706 -0.0786
vn 0.5176 0.8550 -0.0339
vn 0.4575 0.8796 0.1302
vn -0.6673 0.7372 0.1060
vn -0.7398 0.6374 0.2154
vn 0.4393 0.8428 0.3110
vn 0.4710 0.7588 0.4499
vn 0.5176 0.5665 0.6412
vn 0.8641 -0.3797 -0.3304
vn -0.9114 0.1778 0.3712
vn 0.5672 0.3771 0.7322
vn -0.8346 0.0483 0.5487
vn 0.4680 0.2402 0.8505
vn 0.5883 0.7962 -0.1415
vn 0.0164 0.6245 -0.7809
vn 0.6049 0.7958 0.0275
vn -0.0418 0.7288 -0.6834
vn 0.0205 0.4970 -0.8675
vn -0.1543 0.8040 -0.5743
vn 0.4104 0.9119 -0.0027
vn 0.2759 0.9598 0.0511
vn -0.3020 0.8211 -0.4843
vn -0.4454 0.7809 -0.4380
vn 0.1506 0.9759 0.1581
vn 0.0740 0.9538 0.2911
vn -0.6290 0.6805 -0.3759
vn -0.7609 0.5537 -0.3383
vn -0.0159 0.8808 0.4732
vn -0.0639 0.7794 0.6232
vn -0.8550 0.4211 -0.3029
vn -0.0997 0.6660 0.7392
vn -0.9515 0.2916 -0.0980
vn -0.2862 0.5097 0.8113
vn 0.5185 0.8550 -0.0075
vn -0.2050 -0.9374 -0.2815
vn 0.6527 -0.7311 -0.1986
vn -0.1929 -0.9701 -0.1470
vn -0.2500 -0.8867 -0.3890
vn -0.2138 -0.9767 0.0175
vn 0.4309 -0.9024 -0.0077
vn 0.3430 -0.9270 0.1519
vn -0.2733 -0.9458 0.1757
vn -0.3594 -0.8873 0.2892
vn 0.2927 -0.9003 0.3221
vn 0.2895 -0.8376 0.4632
vn -0.4808 -0.7676 0.4239
vn -0.5918 -0.6287 0.5044
vn 0.2924 -0.7076 0.6432
vn 0.3131 -0.5581 0.7684
vn -0.6840 -0.4752 0.5535
vn 0.3350 -0.3965 0.8547
vn -0.6739 -0.2550 0.6934
vn 0.2122 -0.1848 0.9596
vn 0.5322 -0.8374 -0.1247
vn 0.7117 -0.5676 0.4139
vn -0.6998 -0.6883 0.1914
vn 0.6641 -0.6951 0.2755
vn 0.7909 -0.3761 0.4827
vn 0.6470 -0.7578 0.0838
vn -0.5296 -0.8477 0.0318
vn -0.4670 -0.8744 -0.1315
vn 0.6818 -0.7246 -0.1003
vn 0.7571 -0.6201 -0.2059
vn -0.4491 -0.8374 -0.3117
vn -0.4841 -0.7508 -0.4494
vn -0.5420 -0.5525 -0.6332
vn -0.3301 -0.7472 -0.5768
vn 0.9492 -0.1205 -0.2906
vn -0.6243 -0.3493 -0.6987
vn 0.9197 -0.0054 -0.3926
vn -0.5704 -0.2327 -0.7877
vn -0.6065 -0.7829 0.1385
vn -0.0109 -0.6135 0.7896
vn -0.6172 -0.7849 -0.0537
vn 0.0456 -0.7230 0.6893
vn -0.0133 -0.4699 0.8826
vn 0.1578 -0.7997 0.5793
vn -0.4140 -0.9103 -0.0021
vn -0.2787 -0.9588 -0.0546
vn 0.3061 -0.8163 0.4899
vn 0.4506 -0.7732 0.4462
vn -0.1535 -0.9748 -0.1621
vn -0.0785 -0.9517 -0.2970
vn 0.6363 -0.6661 0.3892
vn 0.7686 -0.5278 0.3614
vn 0.0081 -0.8761 -0.4820
vn 0.0488 -0.7696 -0.6366
vn 0.8608 -0.3729 0.3464
vn 0.0678 -0.6469 -0.7596
vn 0.9557 -0.2382 0.1728
vn 0.2309 -0.5056 -0.8313
vn -0.5242 -0.8516 -0.0010
vn -0.1840 -0.3230 0.9283
vn 0.3905 -0.4176 0.8204
vn 0.6060 -0.3088 0.7331
vn -0.6699 -0.6807 0.2965
vn -0.5727 -0.6906 0.4417
vn -0.3058 -0.3638 0.8799
vn 0.7753 -0.2095 0.5959
vn 0.8913 -0.1905 0.4114
vn -0.7799 -0.6259 0.0039
vn -0.7478 -0.6448 0.1582
vn 0.9348 -0.2732 0.2268
vn 0.8907 -0.4068 0.2028
vn -0.7239 -0.6755 -0.1403
vn -0.7534 -0.6430 -0.1376
vn 0.7933 -0.5231 0.3116
vn 0.6758 -0.5956 0.4343
vn -0.6886 -0.7201 0.0853
vn -0.7103 -0.7030 -0.0361
vn 0.5818 -0.6166 0.5304
vn 0.6937 -0.6657 0.2749
vn -0.6308 -0.7701 -0.0952
vn -0.6745 -0.7150 0.1838
vn 0.2445 -0.4301 -0.8690
vn -0.2737 -0.9076 -0.3185
vn -0.3987 -0.8910 -0.2173
vn 0.6816 -0.7271 -0.0823
vn 0.5735 -0.7759 -0.2629
vn 0.1321 -0.4171 -0.8992
vn -0.4884 -0.8512 -0.1921
vn -0.5286 -0.8205 -0.2176
vn 0.7865 -0.6170 0.0282
vn 0.7569 -0.6535 0.0104
vn -0.5207 -0.8128 -0.2612
vn -0.4614 -0.8150 -0.3505
vn 0.7311 -0.6768 -0.0866
vn 0.7744 -0.6327 0.0065
vn 0.6717 -0.6526 -0.3507
vn -0.2660 -0.6323 -0.7276
vn -0.6091 -0.5704 -0.5511
vn 0.8884 -0.4324 -0.1542
vn 0.6465 -0.5611 -0.5169
vn 0.7351 -0.4984 -0.4596
vn 0.0056 -0.8247 -0.5656
vn -0.1708 -0.7875 -0.5922
vn 0.6113 -0.5219 0.5949
vn 0.6104 -0.6785 0.4088
vn 0.6892 -0.6194 -0.3759
vn -0.3044 -0.7355 -0.6053
vn -0.4058 -0.7143 -0.5701
vn 0.5606 -0.2645 0.7847
vn 0.6053 -0.3662 0.7068
vn -0.4562 -0.7390 -0.4958
vn -0.4070 -0.7913 -0.4563
vn 0.4589 -0.3263 0.8264
vn 0.4786 -0.2516 0.8412
vn -0.2829 -0.8320 -0.4773
vn -0.1617 -0.8484 -0.5040
vn 0.5793 -0.5084 0.6371
vn 0.5170 -0.4262 0.7423
vn -0.0735 -0.8411 -0.5359
vn -0.2525 -0.8260 -0.5040
vn 0.4202 -0.3514 0.8366
vn 0.6313 -0.5234 0.5724
vn -0.8403 0.4089 0.3561
vn 0.3499 0.9054 -0.2405
vn -0.5671 0.8000 0.1957
vn 0.2586 0.9001 -0.3508
vn 0.4494 0.8784 -0.1629
vn 0.1783 0.8517 -0.4928
vn -0.5192 0.8498 -0.0909
vn -0.5496 0.7957 -0.2545
vn -0.6763 0.6261 -0.3880
vn -0.1609 -0.7057 0.6900
vn 0.2138 0.4775 -0.8522
vn 0.2710 0.3122 -0.9105
vn -0.8404 0.3625 -0.4029
vn -0.9189 0.1831 -0.3494
vn 0.3148 0.1555 -0.9363
vn -0.9563 0.0244 -0.2914
vn 0.2292 -0.0929 -0.9689
vn -0.8892 -0.2275 -0.3968
vn -0.5249 0.8490 0.0610
vn 0.0222 0.9187 0.3943
vn 0.0165 0.7951 -0.6062
vn 0.1626 0.9263 0.3398
vn -0.0949 0.8743 0.4760
vn 0.3206 0.8935 0.3145
vn 0.2439 0.8789 -0.4100
vn 0.3947 0.8521 -0.3437
vn 0.4608 0.8237 0.3303
vn 0.5592 0.7371 0.3794
vn 0.5358 0.7807 -0.3217
vn 0.6398 0.6875 -0.3436
vn 0.6641 0.6014 0.4441
vn 0.7255 0.4718 0.5011
vn 0.7534 0.5399 -0.3752
vn 0.8204 0.3974 -0.4111
vn 0.7650 0.3487 0.5415
vn 0.8611 0.2624 -0.4355
vn 0.8570 0.1814 0.4824
vn 0.9385 0.1001 -0.3306
vn 0.1162 0.8590 -0.4986
vn -0.7149 0.6939 0.0860
vn 0.2501 0.7388 -0.6258
vn -0.5644 0.8084 0.1669
vn -0.8348 0.5464 0.0673
vn -0.3957 0.8652 0.3080
vn 0.2606 0.8980 -0.3546
vn 0.3401 0.9250 -0.1697
vn -0.2672 0.8388 0.4744
vn -0.2156 0.7556 0.6185
vn 0.4584 0.8887 -0.0095
vn 0.5833 0.8082 0.0816
vn -0.1660 0.6042 0.7794
vn -0.1563 0.4526 0.8779
vn 0.7262 0.6650 0.1743
vn 0.8245 0.5232 0.2155
vn -0.1494 0.3134 0.9378
vn 0.8870 0.3929 0.2428
vn 0.0297 0.1587 0.9869
vn 0.8867 0.2332 0.3993
vn 0.2314 0.8294 -0.5085
vn -0.3569 -0.9031 0.2388
vn 0.5790 -0.7870 -0.2129
vn -0.2626 -0.8992 0.3501
vn -0.4684 -0.8685 0.1621
vn -0.1813 -0.8511 0.4927
vn 0.5258 -0.8461 0.0880
vn 0.5554 -0.7922 0.2528
vn 0.6834 -0.6209 0.3841
vn 0.9365 -0.1378 -0.3224
vn -0.2207 -0.4750 0.8519
vn -0.2827 -0.3081 0.9084
vn 0.8498 -0.3532 0.3913
vn 0.9298 -0.1703 0.3263
vn -0.3365 -0.1499 0.9297
vn 0.9691 -0.0070 0.2464
vn -0.2628 0.0808 0.9615
vn 0.9121 0.2365 0.3348
vn 0.5339 -0.8429 -0.0673
vn -0.0184 -0.9157 -0.4014
vn -0.0090 -0.7785 0.6276
vn -0.1611 -0.9252 -0.3435
vn 0.1069 -0.8641 -0.4919
vn -0.3198 -0.8930 -0.3166
vn -0.2426 -0.8773 0.4142
vn -0.3941 -0.8514 0.3461
vn -0.4599 -0.8236 -0.3320
vn -0.5579 -0.7370 -0.3815
vn -0.5353 -0.7802 0.3237
vn -0.6390 -0.6868 0.3464
vn -0.6618 -0.6012 -0.4479
vn -0.7207 -0.4708 -0.5088
vn -0.7520 -0.5386 0.3799
vn -0.8172 -0.3943 0.4203
vn -0.7539 -0.3456 -0.5587
vn -0.8529 -0.2551 0.4555
vn -0.8427 -0.1835 -0.5061
vn -0.9280 -0.0991 0.3592
vn -0.1129 -0.8546 0.5069
vn 0.7277 -0.6801 -0.0888
vn -0.2593 -0.7244 0.6388
vn 0.5735 -0.8017 -0.1682
vn 0.8556 -0.5110 -0.0818
vn 0.4020 -0.8617 -0.3095
vn -0.2653 -0.8954 0.3577
vn -0.3439 -0.9232 0.1715
vn 0.2723 -0.8360 -0.4764
vn 0.2218 -0.7519 -0.6208
vn -0.4620 -0.8868 0.0111
vn -0.5873 -0.8055 -0.0790
vn 0.1745 -0.5987 -0.7817
vn 0.1707 -0.4439 -0.8797
vn -0.7313 -0.6608 -0.1689
vn -0.8314 -0.5168 -0.2040
vn 0.1768 -0.2995 -0.9376
vn -0.8982 -0.3819 -0.2176
vn 0.0103 -0.1561 -0.9877
vn -0.9037 -0.2274 -0.3629
vn -0.2383 -0.8239 0.5142
vn 0.3785 0.0566 0.9239
vn 0.7840 -0.2901 0.5488
vn 0.9269 -0.1851 0.3266
vn -0.4721 -0.3993 0.7859
vn -0.3102 -0.3184 0.8958
vn 0.2250 0.1753 0.9585
vn 0.9937 -0.0631 0.0922
vn 0.9909 -0.0203 -0.1331
vn -0.6234 -0.5239 0.5804
vn -0.5807 -0.4557 0.6746
vn -0.5732 -0.6093 0.5479
vn 0.9265 -0.2347 -0.2942
vn 0.9333 -0.3006 -0.1962
vn -0.4404 -0.5125 0.7372
vn -0.4944 -0.5656 0.6601
vn 0.9346 -0.3323 -0.1270
vn 0.7881 -0.4402 -0.4303
vn -0.4692 -0.5632 0.6802
vn -0.4038 -0.4618 0.7897
vn -0.9672 -0.2540 0.0088
vn -0.7558 -0.3741 0.5374
vn -0.6408 -0.2907 0.7105
vn -0.4728 -0.4688 -0.7461
vn -0.6057 -0.5522 -0.5729
vn -0.9291 -0.3314 -0.1643
vn -0.4997 -0.2150 0.8391
vn -0.3436 -0.2086 0.9156
vn -0.1406 -0.3380 -0.9306
vn -0.3166 -0.3726 -0.8723
vn -0.2207 -0.2777 0.9350
vn -0.2207 -0.3439 0.9127
vn -0.0058 -0.4489 -0.8936
vn -0.0036 -0.3887 -0.9214
vn -0.3054 -0.3761 0.8748
vn -0.3985 -0.3962 0.8272
vn -0.2094 -0.5097 -0.8345
vn -0.0982 -0.4858 -0.8686
vn -0.4696 -0.3979 0.7881
vn -0.2661 -0.5024 0.8227
vn -0.0661 -0.6066 -0.7923
vn -0.2948 -0.5105 -0.8077
vn -0.2628 -0.6372 -0.7245
vn -0.4716 -0.8761 -0.1005
vn -0.5704 -0.8192 0.0590
vn 0.4157 -0.5043 -0.7569
vn 0.1891 -0.6128 -0.7673
vn -0.5261 -0.5887 -0.6137
vn -0.6642 -0.7255 0.1803
vn -0.7195 -0.6315 0.2891
vn 0.6855 -0.3804 -0.6208
vn 0.5828 -0.4014 -0.7065
vn -0.7124 -0.5884 0.3824
vn -0.7144 -0.5984 0.3628
vn 0.6400 -0.5406 -0.5461
vn 0.7120 -0.4513 -0.5379
vn -0.7576 -0.6004 0.2561
vn -0.7925 -0.5911 0.1501
vn 0.4257 -0.5511 -0.7177
vn 0.5211 -0.5632 -0.6413
vn -0.8257 -0.5524 0.1146
vn -0.7065 -0.5433 0.4535
vn 0.5310 -0.5566 -0.6389
vn 0.3737 -0.5194 -0.7685
vn 0.1572 0.7068 -0.6897
usemtl Wood
s off
f 4//1 2//1 12//1 10//1 8//1 6//1
f 1//2 3//2 5//2 7//2 9//2 11//2
f 11//3 30//3 13//3 1//3
f 30//4 29//4 14//4 13//4
f 29//5 28//5 15//5 14//5
f 391//6 2//6 4//6 394//6
f 4//7 6//7 396//7 394//7
f 9//8 27//8 30//8 11//8
f 27//9 26//9 29//9 30//9
f 26//10 25//10 28//10 29//10
f 25//11 399//11 401//11 28//11
f 7//12 24//12 27//12 9//12
f 24//13 23//13 26//13 27//13
f 23//14 22//14 25//14 26//14
f 10//15 12//15 402//15 400//15
f 22//16 397//16 399//16 25//16
f 5//17 21//17 24//17 7//17
f 21//18 20//18 23//18 24//18
f 20//19 19//19 22//19 23//19
f 8//20 10//20 400//20 398//20
f 19//21 395//21 397//21 22//21
f 3//22 18//22 21//22 5//22
f 18//23 17//23 20//23 21//23
f 17//24 16//24 19//24 20//24
f 6//25 8//25 398//25 396//25
f 16//26 393//26 395//26 19//26
f 1//27 13//27 18//27 3//27
f 13//28 14//28 17//28 18//28
f 14//29 15//29 16//29 17//29
f 28//30 401//30 392//30 15//30
f 12//31 2//31 391//31 402//31
f 402//32 391//32 392//32 401//32
f 400//33 402//33 401//33 399//33
f 398//34 400//34 399//34 397//34
f 396//35 398//35 397//35 395//35
f 394//36 396//36 395//36 393//36
f 391//37 394//37 393//37 392//37
f 15//38 392//38 393//38 16//38
usemtl Green_Tree
f 47//39 51//39 33//39 31//39
f 33//40 32//40 48//40 50//40
f 47//41 35//41 34//41 51//41
f 31//42 33//42 50//42 46//42
f 52//43 54//43 34//43 35//43
f 51//44 34//44 36//44 49//44
f 54//45 53//45 36//45 34//45
f 52//46 38//46 37//46 54//46
f 55//47 57//47 37//47 38//47
f 54//48 37//48 39//48 53//48
f 57//49 56//49 39//49 37//49
f 55//50 41//50 40//50 57//50
f 58//51 60//51 40//51 41//51
f 57//52 40//52 42//52 56//52
f 60//53 59//53 42//53 40//53
f 58//54 43//54 44//54 60//54
f 60//55 44//55 45//55 59//55
f 43//56 61//56 44//56
f 44//57 61//57 45//57
f 51//58 49//58 32//58 33//58
f 134//59 138//59 123//59 121//59
f 123//60 122//60 135//60 137//60
f 134//61 125//61 124//61 138//61
f 121//62 123//62 137//62 133//62
f 139//63 141//63 124//63 125//63
f 138//64 124//64 126//64 136//64
f 141//65 140//65 126//65 124//65
f 139//66 128//66 127//66 141//66
f 142//67 144//67 127//67 128//67
f 141//68 127//68 129//68 140//68
f 144//69 143//69 129//69 127//69
f 147//70 146//70 143//70 144//70
f 325//71 322//71 324//71 327//71
f 145//72 130//72 131//72 147//72
f 147//73 131//73 132//73 146//73
f 130//74 148//74 131//74
f 131//75 148//75 132//75
f 138//76 136//76 122//76 123//76
f 196//77 200//77 182//77 180//77
f 182//78 181//78 197//78 199//78
f 196//79 184//79 183//79 200//79
f 180//80 182//80 199//80 195//80
f 201//81 203//81 183//81 184//81
f 200//82 183//82 185//82 198//82
f 203//83 202//83 185//83 183//83
f 201//84 187//84 186//84 203//84
f 204//85 206//85 186//85 187//85
f 203//86 186//86 188//86 202//86
f 206//87 205//87 188//87 186//87
f 204//88 190//88 189//88 206//88
f 207//89 209//89 189//89 190//89
f 206//90 189//90 191//90 205//90
f 209//91 208//91 191//91 189//91
f 207//92 192//92 193//92 209//92
f 209//93 193//93 194//93 208//93
f 192//94 210//94 193//94
f 193//95 210//95 194//95
f 200//96 198//96 181//96 182//96
f 227//97 211//97 213//97 231//97
f 213//98 230//98 228//98 212//98
f 227//99 231//99 214//99 215//99
f 211//100 226//100 230//100 213//100
f 232//101 215//101 214//101 234//101
f 231//102 229//102 216//102 214//102
f 234//103 214//103 216//103 233//103
f 232//104 234//104 217//104 218//104
f 235//105 218//105 217//105 237//105
f 234//106 233//106 219//106 217//106
f 237//107 217//107 219//107 236//107
f 235//108 237//108 220//108 221//108
f 238//109 221//109 220//109 240//109
f 237//110 236//110 222//110 220//110
f 240//111 220//111 222//111 239//111
f 238//112 240//112 224//112 223//112
f 240//113 239//113 225//113 224//113
f 223//114 224//114 241//114
f 224//115 225//115 241//115
f 231//116 213//116 212//116 229//116
f 314//117 301//117 303//117 318//117
f 303//118 317//118 315//118 302//118
f 314//119 318//119 304//119 305//119
f 301//120 313//120 317//120 303//120
f 319//121 305//121 304//121 321//121
f 318//122 316//122 306//122 304//122
f 321//123 304//123 306//123 320//123
f 319//124 321//124 307//124 308//124
f 322//125 308//125 307//125 324//125
f 321//126 320//126 309//126 307//126
f 324//127 307//127 309//127 323//127
f 327//128 324//128 323//128 326//128
f 145//129 142//129 322//129 325//129
f 325//130 327//130 311//130 310//130
f 327//131 326//131 312//131 311//131
f 310//132 311//132 328//132
f 311//133 312//133 328//133
f 318//134 303//134 302//134 316//134
f 376//135 360//135 362//135 380//135
f 362//136 379//136 377//136 361//136
f 376//137 380//137 363//137 364//137
f 360//138 375//138 379//138 362//138
f 381//139 364//139 363//139 383//139
f 380//140 378//140 365//140 363//140
f 383//141 363//141 365//141 382//141
f 381//142 383//142 366//142 367//142
f 384//143 367//143 366//143 386//143
f 383//144 382//144 368//144 366//144
f 386//145 366//145 368//145 385//145
f 384//146 386//146 369//146 370//146
f 387//147 370//147 369//147 389//147
f 386//148 385//148 371//148 369//148
f 389//149 369//149 371//149 388//149
f 387//150 389//150 373//150 372//150
f 389//151 388//151 374//151 373//151
f 372//152 373//152 390//152
f 373//153 374//153 390//153
f 380//154 362//154 361//154 378//154
f 46//155 50//155 230//155 226//155
f 31//156 46//156 226//156 211//156
f 47//157 31//157 211//157 227//157
f 32//158 49//158 229//158 212//158
f 48//159 32//159 212//159 228//159
f 50//160 48//160 228//160 230//160
f 35//161 47//161 227//161 215//161
f 52//162 35//162 215//162 232//162
f 36//163 53//163 233//163 216//163
f 49//164 36//164 216//164 229//164
f 38//165 52//165 232//165 218//165
f 55//166 38//166 218//166 235//166
f 39//167 56//167 236//167 219//167
f 53//168 39//168 219//168 233//168
f 41//169 55//169 235//169 221//169
f 58//170 41//170 221//170 238//170
f 42//171 59//171 239//171 222//171
f 56//172 42//172 222//172 236//172
f 43//173 58//173 238//173 223//173
f 61//174 43//174 223//174 241//174
f 45//175 61//175 241//175 225//175
f 59//176 45//176 225//176 239//176
f 133//177 137//177 317//177 313//177
f 121//178 133//178 313//178 301//178
f 134//179 121//179 301//179 314//179
f 122//180 136//180 316//180 302//180
f 135//181 122//181 302//181 315//181
f 137//182 135//182 315//182 317//182
f 125//183 134//183 314//183 305//183
f 139//184 125//184 305//184 319//184
f 126//185 140//185 320//185 306//185
f 136//186 126//186 306//186 316//186
f 128//187 139//187 319//187 308//187
f 142//188 128//188 308//188 322//188
f 129//189 143//189 323//189 309//189
f 140//190 129//190 309//190 320//190
f 143//191 146//191 326//191 323//191
f 130//192 145//192 325//192 310//192
f 148//193 130//193 310//193 328//193
f 132//194 148//194 328//194 312//194
f 146//195 132//195 312//195 326//195
f 195//196 199//196 379//196 375//196
f 180//197 195//197 375//197 360//197
f 196//198 180//198 360//198 376//198
f 181//199 198//199 378//199 361//199
f 197//200 181//200 361//200 377//200
f 199//201 197//201 377//201 379//201
f 184//202 196//202 376//202 364//202
f 201//203 184//203 364//203 381//203
f 185//204 202//204 382//204 365//204
f 198//205 185//205 365//205 378//205
f 187//206 201//206 381//206 367//206
f 204//207 187//207 367//207 384//207
f 188//208 205//208 385//208 368//208
f 202//209 188//209 368//209 382//209
f 190//210 204//210 384//210 370//210
f 207//211 190//211 370//211 387//211
f 191//212 208//212 388//212 371//212
f 205//213 191//213 371//213 385//213
f 192//214 207//214 387//214 372//214
f 210//215 192//215 372//215 390//215
f 194//216 210//216 390//216 374//216
f 208//217 194//217 374//217 388//217
f 145//218 147//218 144//218 142//218
usemtl DarkGreen_Tree
f 75//219 79//219 64//219 62//219
f 64//220 63//220 76//220 78//220
f 75//221 66//221 65//221 79//221
f 62//222 64//222 78//222 74//222
f 80//223 82//223 65//223 66//223
f 79//224 65//224 67//224 77//224
f 82//225 81//225 67//225 65//225
f 85//226 84//226 81//226 82//226
f 263//227 260//227 262//227 265//227
f 83//228 69//228 68//228 85//228
f 86//229 88//229 68//229 69//229
f 85//230 68//230 70//230 84//230
f 88//231 87//231 70//231 68//231
f 86//232 71//232 72//232 88//232
f 88//233 72//233 73//233 87//233
f 71//234 89//234 72//234
f 72//235 89//235 73//235
f 79//236 77//236 63//236 64//236
f 106//237 110//237 92//237 90//237
f 92//238 91//238 107//238 109//238
f 106//239 94//239 93//239 110//239
f 90//240 92//240 109//240 105//240
f 111//241 113//241 93//241 94//241
f 110//242 93//242 95//242 108//242
f 113//243 112//243 95//243 93//243
f 111//244 97//244 96//244 113//244
f 114//245 116//245 96//245 97//245
f 113//246 96//246 98//246 112//246
f 116//247 115//247 98//247 96//247
f 114//248 100//248 99//248 116//248
f 117//249 119//249 99//249 100//249
f 116//250 99//250 101//250 115//250
f 119//251 118//251 101//251 99//251
f 117//252 102//252 103//252 119//252
f 119//253 103//253 104//253 118//253
f 102//254 120//254 103//254
f 103//255 120//255 104//255
f 110//256 108//256 91//256 92//256
f 165//257 169//257 151//257 149//257
f 151//258 150//258 166//258 168//258
f 165//259 153//259 152//259 169//259
f 149//260 151//260 168//260 164//260
f 170//261 172//261 152//261 153//261
f 169//262 152//262 154//262 167//262
f 172//263 171//263 154//263 152//263
f 170//264 156//264 155//264 172//264
f 173//265 175//265 155//265 156//265
f 172//266 155//266 157//266 171//266
f 175//267 174//267 157//267 155//267
f 173//268 159//268 158//268 175//268
f 176//269 178//269 158//269 159//269
f 175//270 158//270 160//270 174//270
f 178//271 177//271 160//271 158//271
f 176//272 161//272 162//272 178//272
f 178//273 162//273 163//273 177//273
f 161//274 179//274 162//274
f 162//275 179//275 163//275
f 169//276 167//276 150//276 151//276
f 255//277 242//277 244//277 259//277
f 244//278 258//278 256//278 243//278
f 255//279 259//279 245//279 246//279
f 242//280 254//280 258//280 244//280
f 260//281 246//281 245//281 262//281
f 259//282 257//282 247//282 245//282
f 262//283 245//283 247//283 261//283
f 265//284 262//284 261//284 264//284
f 83//285 80//285 260//285 263//285
f 263//286 265//286 248//286 249//286
f 266//287 249//287 248//287 268//287
f 265//288 264//288 250//288 248//288
f 268//289 248//289 250//289 267//289
f 266//290 268//290 252//290 251//290
f 268//291 267//291 253//291 252//291
f 251//292 252//292 269//292
f 252//293 253//293 269//293
f 259//294 244//294 243//294 257//294
f 286//295 270//295 272//295 290//295
f 272//296 289//296 287//296 271//296
f 286//297 290//297 273//297 274//297
f 270//298 285//298 289//298 272//298
f 291//299 274//299 273//299 293//299
f 290//300 288//300 275//300 273//300
f 293//301 273//301 275//301 292//301
f 291//302 293//302 276//302 277//302
f 294//303 277//303 276//303 296//303
f 293//304 292//304 278//304 276//304
f 296//305 276//305 278//305 295//305
f 294//306 296//306 279//306 280//306
f 297//307 280//307 279//307 299//307
f 296//308 295//308 281//308 279//308
f 299//309 279//309 281//309 298//309
f 297//310 299//310 283//310 282//310
f 299//311 298//311 284//311 283//311
f 282//312 283//312 300//312
f 283//313 284//313 300//313
f 290//314 272//314 271//314 288//314
f 345//315 329//315 331//315 349//315
f 331//316 348//316 346//316 330//316
f 345//317 349//317 332//317 333//317
f 329//318 344//318 348//318 331//318
f 350//319 333//319 332//319 352//319
f 349//320 347//320 334//320 332//320
f 352//321 332//321 334//321 351//321
f 350//322 352//322 335//322 336//322
f 353//323 336//323 335//323 355//323
f 352//324 351//324 337//324 335//324
f 355//325 335//325 337//325 354//325
f 353//326 355//326 338//326 339//326
f 356//327 339//327 338//327 358//327
f 355//328 354//328 340//328 338//328
f 358//329 338//329 340//329 357//329
f 356//330 358//330 342//330 341//330
f 358//331 357//331 343//331 342//331
f 341//332 342//332 359//332
f 342//333 343//333 359//333
f 349//334 331//334 330//334 347//334
f 74//335 78//335 258//335 254//335
f 62//336 74//336 254//336 242//336
f 75//337 62//337 242//337 255//337
f 63//338 77//338 257//338 243//338
f 76//339 63//339 243//339 256//339
f 78//340 76//340 256//340 258//340
f 66//341 75//341 255//341 246//341
f 80//342 66//342 246//342 260//342
f 67//343 81//343 261//343 247//343
f 77//344 67//344 247//344 257//344
f 81//345 84//345 264//345 261//345
f 69//346 83//346 263//346 249//346
f 86//347 69//347 249//347 266//347
f 70//348 87//348 267//348 250//348
f 84//349 70//349 250//349 264//349
f 71//350 86//350 266//350 251//350
f 89//351 71//351 251//351 269//351
f 73//352 89//352 269//352 253//352
f 87//353 73//353 253//353 267//353
f 105//354 109//354 289//354 285//354
f 90//355 105//355 285//355 270//355
f 106//356 90//356 270//356 286//356
f 91//357 108//357 288//357 271//357
f 107//358 91//358 271//358 287//358
f 109//359 107//359 287//359 289//359
f 94//360 106//360 286//360 274//360
f 111//361 94//361 274//361 291//361
f 95//362 112//362 292//362 275//362
f 108//363 95//363 275//363 288//363
f 97//364 111//364 291//364 277//364
f 114//365 97//365 277//365 294//365
f 98//366 115//366 295//366 278//366
f 112//367 98//367 278//367 292//367
f 100//368 114//368 294//368 280//368
f 117//369 100//369 280//369 297//369
f 101//370 118//370 298//370 281//370
f 115//371 101//371 281//371 295//371
f 102//372 117//372 297//372 282//372
f 120//373 102//373 282//373 300//373
f 104//374 120//374 300//374 284//374
f 118//375 104//375 284//375 298//375
f 164//376 168//376 348//376 344//376
f 149//377 164//377 344//377 329//377
f 165//378 149//378 329//378 345//378
f 150//379 167//379 347//379 330//379
f 166//380 150//380 330//380 346//380
f 168//381 166//381 346//381 348//381
f 153//382 165//382 345//382 333//382
f 170//383 153//383 333//383 350//383
f 154//384 171//384 351//384 334//384
f 167//385 154//385 334//385 347//385
f 156//386 170//386 350//386 336//386
f 173//387 156//387 336//387 353//387
f 157//388 174//388 354//388 337//388
f 171//389 157//389 337//389 351//389
f 159//390 173//390 353//390 339//390
f 176//391 159//391 339//391 356//391
f 160//392 177//392 357//392 340//392
f 174//393 160//393 340//393 354//393
f 161//394 176//394 356//394 341//394
f 179//395 161//395 341//395 359//395
f 163//396 179//396 359//396 343//396
f 177//397 163//397 343//397 357//397
f 83//398 85//398 82//398 80//398
`,Bs=`# Blender MTL File: 'PalmTree_4.blend'
# Material Count: 4

newmtl Coconuts
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.202352 0.091037 0.076548
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl DarkGreen_Tree
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.042528 0.072669 0.029578
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Green_Tree
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.069954 0.121857 0.047888
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2

newmtl Wood
Ns 96.078431
Ka 1.000000 1.000000 1.000000
Kd 0.122341 0.056288 0.047609
Ks 0.500000 0.500000 0.500000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 2
`,Vs=`# Blender v2.79 (sub 0) OBJ File: 'PalmTree_4.blend'
# www.blender.org
mtllib PalmTree_4.mtl
o PalmTree_4_Cylinder.041
v -0.057533 -0.017273 -0.018502
v 0.126107 2.591684 -0.039643
v -0.006774 -0.017273 -0.063391
v 0.153407 2.591782 -0.064981
v 0.057445 -0.017273 -0.042642
v 0.188337 2.591912 -0.053696
v 0.070999 -0.017273 0.023025
v 0.196125 2.591919 -0.017021
v 0.020528 -0.017273 0.068007
v 0.169094 2.591778 0.008404
v -0.043586 -0.017273 0.047292
v 0.133898 2.591689 -0.002967
v -0.126576 0.340740 0.022995
v -0.057602 0.690082 0.074932
v 0.147460 1.053019 0.110242
v 0.344572 1.488610 0.105445
v 0.326743 1.929846 0.042015
v 0.214773 2.296451 -0.010996
v 0.244086 2.296660 -0.038780
v 0.361146 1.930306 0.010236
v 0.385719 1.489916 0.069137
v 0.196072 1.053445 0.070907
v -0.008265 0.689682 0.033457
v -0.077864 0.340693 -0.020619
v 0.281557 2.296921 -0.026673
v 0.404515 1.930778 0.024257
v 0.437612 1.490774 0.085882
v 0.254023 1.054094 0.089588
v 0.052770 0.689523 0.053176
v -0.015833 0.340697 -0.000577
v 0.289896 2.296943 0.013275
v 0.413927 1.930650 0.070173
v 0.448653 1.490761 0.138919
v 0.266501 1.054069 0.148544
v 0.065466 0.689606 0.114693
v -0.002217 0.340703 0.063173
v 0.261230 2.296633 0.041267
v 0.380755 1.930389 0.102328
v 0.407845 1.489800 0.175318
v 0.219543 1.053500 0.188412
v 0.016628 0.689927 0.156329
v -0.050781 0.340727 0.106834
v 0.223118 2.296473 0.028955
v 0.336176 1.929873 0.087967
v 0.356020 1.488603 0.158716
v 0.159948 1.052997 0.169266
v -0.044895 0.690163 0.136452
v -0.112958 0.340745 0.086746
v 0.275507 2.580083 -0.045952
v 0.091023 2.564408 -0.101935
v 0.170936 2.619878 -0.085297
v 0.216223 2.639960 -0.279928
v 0.421631 2.593346 -0.196651
v 0.029055 2.560575 -0.315828
v 0.307107 2.579523 -0.606334
v 0.510041 2.537521 -0.504837
v 0.105525 2.505126 -0.627750
v 0.408963 2.409179 -0.918090
v 0.520803 2.376497 -0.839760
v 0.283551 2.358397 -0.911922
v 0.501089 2.199581 -1.038198
v 0.465896 2.225488 -1.060940
v 0.428421 2.194171 -1.060312
v 0.213207 2.578927 -0.016419
v 0.349819 2.587403 -0.104893
v 0.127626 2.571694 -0.042392
v 0.052645 2.562267 -0.195082
v 0.158578 2.600466 -0.019922
v 0.188579 2.634581 -0.166597
v 0.479652 2.581917 -0.327574
v 0.040320 2.545939 -0.461002
v 0.255373 2.625191 -0.426168
v 0.520398 2.466924 -0.688985
v 0.195465 2.441596 -0.787772
v 0.361738 2.506353 -0.782787
v 0.513476 2.282114 -0.956451
v 0.363349 2.270823 -1.002126
v 0.444650 2.308717 -1.011266
v 0.475405 2.159934 -1.075884
v 0.095793 2.620823 0.026970
v 0.207634 2.629292 -0.070939
v 0.137694 2.672760 -0.024990
v 0.244303 2.742372 0.118849
v 0.130200 2.668483 0.217709
v 0.368822 2.686029 0.010885
v 0.465410 2.766700 0.380445
v 0.330826 2.693480 0.465982
v 0.575997 2.710824 0.256191
v 0.703049 2.682891 0.651232
v 0.614421 2.627387 0.686710
v 0.755926 2.637398 0.565625
v 0.812252 2.511404 0.808325
v 0.835102 2.543423 0.794025
v 0.855254 2.514446 0.771529
v 0.100386 2.613955 -0.033837
v 0.101170 2.640956 0.113425
v 0.152341 2.617847 -0.079153
v 0.281777 2.654448 -0.043955
v 0.109465 2.636816 -0.070179
v 0.178736 2.708086 0.033597
v 0.480529 2.674032 0.588571
v 0.675702 2.687840 0.421564
v 0.594693 2.741337 0.529435
v 0.726872 2.568270 0.760070
v 0.816000 2.574575 0.683804
v 0.785008 2.610530 0.741031
v 0.858925 2.484294 0.816977
v 0.180349 2.618688 -0.086192
v 0.082254 2.640923 -0.001412
v 0.131294 2.670193 -0.046940
v 0.020147 2.735554 -0.176095
v 0.124079 2.656338 -0.256638
v -0.080550 2.702916 -0.076414
v -0.180588 2.768588 -0.399784
v -0.070626 2.689096 -0.471821
v -0.275615 2.735958 -0.287786
v -0.512425 2.567352 -0.750405
v -0.528569 2.597483 -0.738954
v -0.548024 2.575515 -0.718012
v 0.181229 2.615615 -0.032918
v 0.164066 2.633386 -0.163367
v 0.136013 2.625878 0.006406
v 0.006835 2.669062 -0.026842
v 0.167549 2.637945 -0.004358
v 0.085618 2.702620 -0.100443
v 0.049867 2.678006 -0.360969
v -0.175850 2.729508 -0.160030
v -0.067479 2.760369 -0.275302
v -0.206976 2.682737 -0.574532
v -0.369089 2.719873 -0.427682
v -0.297448 2.753676 -0.524329
v -0.432751 2.609591 -0.712952
v -0.506535 2.626511 -0.645811
v -0.477994 2.652066 -0.697130
v -0.555163 2.548343 -0.755795
v 0.236451 2.586957 -0.098941
v 0.085959 2.584276 -0.042495
v 0.142058 2.630163 -0.096745
v 0.082539 2.572589 -0.286972
v 0.269038 2.519992 -0.302690
v -0.045239 2.513688 -0.182016
v -0.073815 2.087117 -0.819786
v 0.055804 2.060941 -0.795304
v -0.123691 2.056488 -0.722997
v -0.040643 1.820407 -0.881908
v -0.086173 1.845469 -0.895080
v -0.095107 1.819041 -0.859908
v 0.205745 2.607522 -0.043145
v 0.261578 2.559709 -0.188048
v 0.135898 2.606306 -0.017060
v 0.020793 2.555200 -0.096862
v 0.164585 2.636704 -0.028972
v 0.115850 2.612509 -0.178209
v 0.249468 2.451968 -0.435044
v -0.096916 2.444484 -0.299910
v 0.043980 2.499115 -0.420225
v 0.119771 2.203325 -0.706103
v -0.128511 2.197295 -0.606602
v -0.046029 2.238161 -0.721550
v 0.001700 1.928211 -0.851797
v -0.111212 1.925383 -0.806207
v -0.086867 1.949261 -0.876055
v -0.072075 1.772330 -0.884733
v 0.195128 2.598962 0.029532
v 0.208765 2.592193 -0.087979
v 0.209555 2.629680 -0.032111
v 0.363529 2.595417 -0.012957
v 0.330834 2.559524 0.114053
v 0.359083 2.545303 -0.134668
v 0.607952 2.466261 0.022818
v 0.564229 2.437836 0.150543
v 0.591810 2.423565 -0.102506
v 0.822228 2.257313 0.060662
v 0.786166 2.238466 0.134638
v 0.802057 2.230233 -0.011423
v 0.900515 2.061026 0.108391
v 0.910179 2.079761 0.084180
v 0.905336 2.058526 0.064002
v 0.162367 2.611088 -0.007370
v 0.251548 2.583399 0.073374
v 0.168813 2.607933 -0.061741
v 0.273242 2.572551 -0.115696
v 0.156727 2.631486 -0.037861
v 0.274580 2.620192 -0.024410
v 0.434728 2.515057 0.142785
v 0.465720 2.499312 -0.133865
v 0.475270 2.546890 0.002709
v 0.689796 2.341363 0.144857
v 0.711735 2.330005 -0.056592
v 0.732016 2.365855 0.043095
v 0.855592 2.141058 0.121819
v 0.865592 2.135875 0.029818
v 0.880825 2.156625 0.074637
v 0.918277 2.024693 0.090498
v 0.218121 2.638603 0.001607
v 0.160108 2.630372 -0.109710
v 0.180790 2.675111 -0.059525
v 0.315595 2.711991 -0.143686
v 0.377288 2.665840 -0.015458
v 0.253297 2.648637 -0.251307
v 0.968482 2.419787 -0.453570
v 0.962345 2.443509 -0.479308
v 0.945657 2.416837 -0.495832
v 0.169470 2.634223 -0.008967
v 0.288614 2.651159 0.002384
v 0.142644 2.630406 -0.060500
v 0.194945 2.637979 -0.176765
v 0.139719 2.652038 -0.030931
v 0.235157 2.695847 -0.094820
v 0.485119 2.669871 -0.061798
v 0.346170 2.650920 -0.324360
v 0.425189 2.714471 -0.206373
v 0.737058 2.609740 -0.244866
v 0.633878 2.596285 -0.436549
v 0.711585 2.650524 -0.358330
v 0.916604 2.481031 -0.400438
v 0.869296 2.474917 -0.488034
v 0.913260 2.508216 -0.457316
v 0.982357 2.390042 -0.486385
v 0.100041 2.624324 -0.000493
v 0.200534 2.629323 0.015739
v 0.135111 2.682661 0.010454
v 0.096268 2.713741 0.192473
v 0.009652 2.633704 0.161212
v 0.221763 2.644346 0.195405
v 0.044016 2.655831 0.504559
v -0.043147 2.580246 0.455772
v 0.172618 2.591014 0.490597
v -0.014791 2.224087 0.939479
v -0.004909 2.259891 0.951355
v 0.023009 2.225983 0.945572
v 0.133638 2.627481 -0.039123
v 0.055176 2.628677 0.065949
v 0.179967 2.629828 -0.031672
v 0.216956 2.636694 0.092106
v 0.151080 2.657374 -0.049127
v 0.117628 2.703042 0.085818
v -0.026363 2.623004 0.289725
v 0.209481 2.634830 0.327748
v 0.071838 2.702148 0.331736
v -0.047115 2.509585 0.624350
v 0.124875 2.518122 0.652146
v 0.018314 2.577491 0.674960
v -0.028855 2.313387 0.866937
v 0.049570 2.317304 0.879593
v -0.004998 2.355683 0.900478
v 0.002322 2.182864 0.969134
v 0.162718 2.611054 -0.112413
v 0.081650 2.632849 0.003979
v 0.105611 2.664954 -0.069510
v -0.052572 2.654988 -0.172059
v 0.062157 2.576055 -0.269977
v -0.108199 2.621977 -0.023459
v -0.313266 2.550782 -0.326958
v -0.180551 2.477578 -0.417860
v -0.353070 2.524145 -0.167232
v -0.560273 2.346961 -0.455312
v -0.461171 2.298705 -0.494054
v -0.559742 2.325423 -0.349076
v -0.628527 2.123713 -0.500404
v -0.662123 2.154034 -0.492300
v -0.658541 2.131842 -0.456366
v 0.175103 2.626503 -0.059501
v 0.126902 2.595443 -0.186523
v 0.137761 2.636564 -0.005543
v -0.003727 2.630536 0.000590
v 0.159832 2.656498 -0.032698
v 0.038747 2.666723 -0.113620
v -0.037510 2.540700 -0.350813
v -0.226581 2.591703 -0.076642
v -0.169471 2.619685 -0.243570
v -0.334728 2.394619 -0.467520
v -0.471353 2.431577 -0.267774
v -0.454689 2.457142 -0.404049
v -0.559122 2.203733 -0.503070
v -0.621278 2.220573 -0.411777
v -0.629698 2.239525 -0.483776
v -0.663334 2.089432 -0.485056
v 0.140067 2.568110 0.045743
v 0.250068 2.575132 -0.036503
v 0.183167 2.627835 0.007259
v 0.277577 2.659594 0.158497
v 0.167046 2.577286 0.232439
v 0.401121 2.591912 0.058953
v 0.452774 2.602432 0.415758
v 0.326206 2.524999 0.475793
v 0.566195 2.539512 0.300245
v 0.631352 2.416524 0.662380
v 0.547869 2.361056 0.680957
v 0.687622 2.369236 0.580036
v 0.699139 2.171888 0.781435
v 0.722190 2.207604 0.775000
v 0.741822 2.174340 0.750836
v 0.144890 2.571724 -0.012046
v 0.143878 2.572187 0.129763
v 0.196175 2.574920 -0.050017
v 0.321322 2.583396 -0.002344
v 0.155296 2.602234 -0.042384
v 0.221040 2.648522 0.069998
v 0.223644 2.566959 0.349405
v 0.485003 2.583040 0.156895
v 0.354557 2.648397 0.273581
v 0.443596 2.455251 0.592376
v 0.635715 2.466635 0.452974
v 0.551576 2.524321 0.555191
v 0.634264 2.260598 0.743276
v 0.722512 2.265716 0.679782
v 0.688888 2.303022 0.735971
v 0.736980 2.131064 0.786861
v 0.106886 2.575279 -0.055505
v 0.172181 2.596775 0.038829
v 0.129531 2.626787 -0.020406
v -0.014658 2.691724 0.059247
v -0.067775 2.612690 -0.030394
v 0.073117 2.657710 0.170022
v -0.256838 2.723793 0.223060
v -0.304010 2.644455 0.120827
v -0.157496 2.689659 0.325530
v -0.498334 2.663566 0.412092
v -0.514795 2.606287 0.345546
v -0.428166 2.632051 0.464362
v -0.628749 2.520361 0.512359
v -0.621100 2.550519 0.527817
v -0.602177 2.528152 0.548546
v 0.157617 2.572209 -0.051013
v 0.029194 2.589963 -0.051954
v 0.187597 2.582203 -0.007415
v 0.135263 2.624368 0.100105
v 0.178679 2.594651 -0.042710
v 0.069049 2.659067 0.010705
v -0.179866 2.633963 0.022781
v -0.021449 2.683732 0.246169
v -0.122341 2.716081 0.128999
v -0.422018 2.637500 0.237175
v -0.303663 2.673213 0.400688
v -0.391107 2.708422 0.323445
v -0.583543 2.563163 0.439383
v -0.528650 2.579339 0.514326
v -0.576155 2.605549 0.482324
v -0.638837 2.500991 0.552675
v 0.274082 2.573666 -0.048075
v 0.097716 2.558631 -0.101591
v 0.173578 2.613047 -0.086492
v 0.218043 2.632891 -0.279350
v 0.420365 2.586486 -0.197004
v 0.034460 2.554152 -0.314146
v 0.307684 2.572930 -0.603760
v 0.507478 2.531109 -0.503501
v 0.110056 2.499159 -0.624247
v 0.408100 2.404047 -0.913574
v 0.515819 2.371652 -0.837300
v 0.287993 2.354208 -0.906590
v 0.494725 2.197047 -1.034768
v 0.464306 2.222491 -1.054975
v 0.432428 2.192393 -1.053724
v 0.211320 2.572833 -0.019086
v 0.348676 2.580669 -0.106186
v 0.134674 2.566327 -0.042345
v 0.058673 2.556062 -0.194192
v 0.161439 2.593768 -0.021514
v 0.190869 2.627572 -0.166998
v 0.477901 2.575164 -0.326988
v 0.045185 2.539590 -0.458394
v 0.256617 2.618261 -0.424524
v 0.516646 2.461141 -0.687049
v 0.199857 2.436357 -0.783353
v 0.361533 2.500358 -0.779248
v 0.507481 2.278287 -0.953720
v 0.367893 2.267753 -0.996186
v 0.443347 2.304547 -1.005972
v 0.473744 2.158179 -1.069450
v 0.103778 2.616390 0.027522
v 0.208613 2.623717 -0.066515
v 0.142689 2.667040 -0.022144
v 0.246866 2.735778 0.120104
v 0.135910 2.662726 0.217425
v 0.368563 2.679609 0.013614
v 0.464920 2.759859 0.379707
v 0.333775 2.687460 0.463808
v 0.572501 2.704496 0.257122
v 0.699892 2.676944 0.648356
v 0.616011 2.622432 0.682205
v 0.749298 2.632490 0.565415
v 0.811831 2.508345 0.802131
v 0.830174 2.539239 0.789586
v 0.846908 2.511445 0.770365
v 0.108822 2.610075 -0.033266
v 0.108232 2.635803 0.113731
v 0.153164 2.612649 -0.074317
v 0.282493 2.648380 -0.040299
v 0.114343 2.631303 -0.066644
v 0.182769 2.701900 0.035755
v 0.482751 2.668369 0.585233
v 0.670611 2.682040 0.421893
v 0.592835 2.734774 0.527636
v 0.728049 2.564190 0.754676
v 0.808347 2.570593 0.683293
v 0.780896 2.605366 0.737299
v 0.852921 2.481255 0.812289
v 0.173967 2.614508 -0.086561
v 0.081615 2.635236 -0.005326
v 0.127074 2.664721 -0.049420
v 0.017136 2.729120 -0.177151
v 0.119241 2.650884 -0.256131
v -0.080681 2.696330 -0.078730
v -0.181566 2.761772 -0.398950
v -0.073997 2.683285 -0.469522
v -0.273615 2.729203 -0.288445
v -0.511864 2.564696 -0.743930
v -0.524012 2.593481 -0.734069
v -0.540284 2.572259 -0.716304
v 0.174367 2.611940 -0.033373
v 0.158407 2.628532 -0.163441
v 0.135517 2.620521 0.002064
v 0.006280 2.662890 -0.029999
v 0.163521 2.632675 -0.007350
v 0.081845 2.696670 -0.102314
v 0.045899 2.672184 -0.359610
v -0.175102 2.722684 -0.161456
v -0.069470 2.753600 -0.275392
v -0.209773 2.677325 -0.571075
v -0.365551 2.713591 -0.427728
v -0.296968 2.747103 -0.522350
v -0.434041 2.605883 -0.707323
v -0.499792 2.622131 -0.644828
v -0.474567 2.646974 -0.692996
v -0.549523 2.545546 -0.750529
v 0.233854 2.580714 -0.097473
v 0.092471 2.578409 -0.042013
v 0.143881 2.623034 -0.095771
v 0.085885 2.565963 -0.283898
v 0.268974 2.513640 -0.299271
v -0.038191 2.507904 -0.179581
v -0.067661 2.083891 -0.812880
v 0.056740 2.057743 -0.788434
v -0.113705 2.054103 -0.718201
v -0.039868 1.819949 -0.874467
v -0.079663 1.844587 -0.887415
v -0.084888 1.818878 -0.855026
v 0.202164 2.601597 -0.042216
v 0.260293 2.553250 -0.185697
v 0.142343 2.600640 -0.017155
v 0.027411 2.549234 -0.095469
v 0.166998 2.629620 -0.028625
v 0.118349 2.605525 -0.176267
v 0.250345 2.446051 -0.430532
v -0.089189 2.439196 -0.296469
v 0.048285 2.493087 -0.415982
v 0.121090 2.198953 -0.699832
v -0.119130 2.193726 -0.601993
v -0.040313 2.233782 -0.715416
v 0.002014 1.926175 -0.844698
v -0.100933 1.924039 -0.801489
v -0.080493 1.947156 -0.868655
v -0.064751 1.772748 -0.877303
v 0.196027 2.592447 0.027000
v 0.209811 2.586026 -0.083971
v 0.210664 2.622542 -0.031281
v 0.361564 2.588758 -0.012725
v 0.329192 2.553212 0.111872
v 0.357389 2.539130 -0.131956
v 0.603534 2.460942 0.022547
v 0.560549 2.432710 0.148024
v 0.587897 2.418541 -0.100268
v 0.816465 2.253874 0.060159
v 0.781533 2.235194 0.131232
v 0.796974 2.227175 -0.008722
v 0.895487 2.059808 0.104571
v 0.904054 2.078270 0.083612
v 0.899722 2.057731 0.066754
v 0.163992 2.604779 -0.010218
v 0.251263 2.576838 0.071109
v 0.170630 2.602102 -0.057209
v 0.273020 2.566208 -0.112366
v 0.158613 2.624349 -0.037175
v 0.274220 2.613168 -0.023857
v 0.431864 2.509264 0.140516
v 0.462706 2.493626 -0.131558
v 0.471848 2.540856 0.002637
v 0.685540 2.337083 0.141914
v 0.707133 2.325870 -0.054174
v 0.726806 2.361401 0.042684
v 0.850856 2.138701 0.118016
v 0.860322 2.133831 0.032833
v 0.874821 2.154123 0.074109
v 0.912174 2.024227 0.089690
v 0.219508 2.632623 -0.001812
v 0.167099 2.625537 -0.106763
v 0.185553 2.668837 -0.059847
v 0.317599 2.705081 -0.143360
v 0.377095 2.659213 -0.017652
v 0.257811 2.642584 -0.248351
v 0.960025 2.417213 -0.455563
v 0.955713 2.439965 -0.476856
v 0.942716 2.414439 -0.490051
v 0.170919 2.628580 -0.012850
v 0.289515 2.644766 -0.000368
v 0.150128 2.626134 -0.057432
v 0.200919 2.632449 -0.173894
v 0.144583 2.645909 -0.032015
v 0.238761 2.689206 -0.094828
v 0.483343 2.663285 -0.063618
v 0.349035 2.644685 -0.321129
v 0.425269 2.707528 -0.205729
v 0.731616 2.604243 -0.246814
v 0.633976 2.590845 -0.432211
v 0.708152 2.644303 -0.357029
v 0.908855 2.477441 -0.402713
v 0.867885 2.471360 -0.482337
v 0.907449 2.503633 -0.455152
v 0.974745 2.387668 -0.484287
v 0.107741 2.620489 0.003059
v 0.194907 2.624605 0.016340
v 0.136296 2.676097 0.013455
v 0.097499 2.706713 0.193108
v 0.016892 2.628690 0.163226
v 0.217274 2.638693 0.194816
v 0.045371 2.649288 0.502359
v -0.035626 2.575613 0.455696
v 0.168105 2.585833 0.487915
v -0.006493 2.223200 0.937126
v -0.002738 2.257045 0.945454
v 0.017506 2.224274 0.940478
v 0.141380 2.624103 -0.035390
v 0.062606 2.624151 0.068916
v 0.173922 2.625483 -0.030980
v 0.211999 2.631400 0.092322
v 0.151974 2.651026 -0.045616
v 0.118828 2.696177 0.087790
v -0.019118 2.617923 0.290592
v 0.205195 2.629195 0.326083
v 0.073125 2.695228 0.330876
v -0.039165 2.505835 0.623554
v 0.119817 2.513761 0.648593
v 0.019778 2.571630 0.671453
v -0.020308 2.311629 0.865429
v 0.043708 2.314748 0.875104
v -0.003042 2.351783 0.895090
v 0.004223 2.181245 0.962808
v 0.159862 2.605412 -0.109577
v 0.083423 2.626147 0.002044
v 0.104515 2.658049 -0.069164
v -0.050694 2.648036 -0.170142
v 0.062630 2.569865 -0.266106
v -0.104255 2.615157 -0.023486
v -0.307812 2.544870 -0.323442
v -0.176946 2.472247 -0.412482
v -0.345962 2.518330 -0.165881
v -0.551905 2.343060 -0.450628
v -0.455665 2.295516 -0.487214
v -0.549892 2.321609 -0.347470
v -0.621624 2.122952 -0.493160
v -0.652088 2.152269 -0.487120
v -0.647384 2.130210 -0.454635
v 0.171222 2.621317 -0.056857
v 0.125582 2.589377 -0.183278
v 0.139063 2.630118 -0.008159
v -0.001056 2.623645 -0.000393
v 0.158389 2.649672 -0.032967
v 0.038922 2.659689 -0.112564
v -0.035286 2.534781 -0.346197
v -0.221075 2.585260 -0.075829
v -0.165692 2.613138 -0.240774
v -0.330052 2.390234 -0.461352
v -0.462755 2.426648 -0.266204
v -0.447701 2.452124 -0.399891
v -0.553242 2.201683 -0.495830
v -0.610685 2.217754 -0.410306
v -0.620367 2.236669 -0.478763
v -0.652712 2.088746 -0.480049
v 0.147901 2.563390 0.046495
v 0.249520 2.569335 -0.032405
v 0.187350 2.621458 0.010128
v 0.279277 2.652532 0.158981
v 0.172561 2.571244 0.231648
v 0.399398 2.585443 0.060899
v 0.451216 2.595989 0.413395
v 0.329096 2.519252 0.472464
v 0.561797 2.533826 0.299838
v 0.627508 2.411963 0.657806
v 0.549305 2.357275 0.675379
v 0.680877 2.365555 0.578436
v 0.699045 2.170312 0.774776
v 0.717658 2.205009 0.769487
v 0.734263 2.172505 0.748502
v 0.153144 2.567592 -0.011138
v 0.150798 2.566702 0.129986
v 0.195504 2.569513 -0.045467
v 0.320486 2.577142 0.000829
v 0.159282 2.596087 -0.038692
v 0.224199 2.641718 0.071839
v 0.227671 2.560813 0.347323
v 0.481982 2.576758 0.157523
v 0.354540 2.641458 0.272549
v 0.445600 2.450357 0.587792
v 0.629977 2.461869 0.451850
v 0.548687 2.518695 0.551602
v 0.635448 2.257881 0.737100
v 0.715190 2.262941 0.677997
v 0.684584 2.299448 0.730804
v 0.731804 2.129512 0.781563
v 0.108895 2.570869 -0.049545
v 0.167252 2.591516 0.038421
v 0.127431 2.620994 -0.017183
v -0.014883 2.685043 0.061579
v -0.064671 2.607127 -0.025601
v 0.070290 2.651276 0.169684
v -0.254678 2.716961 0.224117
v -0.298633 2.638992 0.124547
v -0.158563 2.682923 0.323933
v -0.493941 2.657635 0.411447
v -0.507123 2.602530 0.348589
v -0.428304 2.626241 0.460523
v -0.619827 2.518476 0.514495
v -0.614953 2.546203 0.525763
v -0.600595 2.524120 0.543181
v 0.159510 2.568275 -0.044768
v 0.031526 2.584888 -0.046553
v 0.182069 2.577407 -0.008080
v 0.131293 2.618481 0.099881
v 0.176846 2.589246 -0.038734
v 0.067736 2.652799 0.013539
v -0.175698 2.628236 0.026958
v -0.023216 2.676992 0.245348
v -0.121291 2.709192 0.130716
v -0.415466 2.632736 0.240554
v -0.304234 2.666789 0.397998
v -0.387855 2.701904 0.323681
v -0.575181 2.560387 0.442193
v -0.528555 2.574296 0.509544
v -0.570858 2.600335 0.480924
v -0.631478 2.497890 0.550553
v 0.083227 2.662554 0.032724
v 0.119959 2.684954 -0.091589
v 0.079473 2.707227 -0.035028
v 0.165859 2.862359 0.007137
v 0.155942 2.790349 0.142343
v 0.231443 2.835767 -0.119878
v 0.367557 3.070798 0.092541
v 0.350634 2.992321 0.223517
v 0.425103 3.036461 -0.042173
v 0.841363 3.203663 0.269748
v 0.833040 3.229480 0.246002
v 0.854150 3.211159 0.223234
v 0.068292 2.636599 -0.011454
v 0.110469 2.714655 0.087317
v 0.085142 2.646828 -0.068966
v 0.169135 2.750313 -0.112485
v 0.057399 2.647740 -0.046932
v 0.111922 2.775589 -0.018476
v 0.231613 2.884322 0.190352
v 0.314181 2.933589 -0.100736
v 0.248438 2.962289 0.043619
v 0.489287 3.089628 0.245613
v 0.547743 3.124027 0.034368
v 0.502773 3.162534 0.144417
v 0.745123 3.187228 0.268122
v 0.771627 3.202766 0.171714
v 0.750660 3.233284 0.223967
v 0.886483 3.208993 0.257392
v 0.024139 2.656560 -0.036196
v 0.122733 2.673464 0.040081
v 0.084392 2.703324 -0.010775
v -0.002489 2.786574 0.099392
v -0.112919 2.714162 0.029105
v 0.096961 2.750019 0.190224
v -0.476615 2.718884 0.714450
v -0.459736 2.748005 0.725849
v -0.438450 2.725331 0.743044
v 0.072668 2.647524 -0.044016
v -0.039994 2.679958 -0.014587
v 0.118283 2.655349 -0.008690
v 0.118958 2.707175 0.108031
v 0.109315 2.665968 -0.042714
v 0.050073 2.742804 0.032758
v -0.191789 2.750433 0.108194
v 0.042700 2.790383 0.287145
v -0.076249 2.826740 0.193694
v -0.347053 2.793186 0.381449
v -0.174269 2.822415 0.511299
v -0.275840 2.862119 0.454682
v -0.449682 2.751048 0.627817
v -0.370579 2.764410 0.687085
v -0.422376 2.793502 0.665729
v -0.476494 2.703519 0.758245
v 0.112294 2.694380 -0.071247
v 0.031679 2.684777 -0.040708
v 0.081316 2.736727 -0.044987
v 0.030257 2.820154 -0.172354
v 0.107984 2.764358 -0.212688
v -0.062141 2.744138 -0.148153
v -0.066705 2.873783 -0.422703
v 0.019002 2.816540 -0.449950
v -0.154072 2.795941 -0.384352
v -0.208683 2.671905 -0.884884
v -0.221423 2.701477 -0.876847
v -0.239000 2.668302 -0.873384
v 0.104490 2.679708 -0.030880
v 0.116169 2.724918 -0.132252
v 0.067340 2.675305 -0.016765
v -0.013621 2.709441 -0.083116
v 0.095794 2.697030 -0.007124
v 0.061127 2.777388 -0.095734
v 0.078535 2.799325 -0.317066
v -0.110628 2.776840 -0.245315
v -0.012334 2.855411 -0.279685
v -0.050735 2.810380 -0.588912
v -0.188711 2.793933 -0.536663
v -0.121264 2.866074 -0.574093
v -0.167707 2.723388 -0.811391
v -0.230614 2.715902 -0.787545
v -0.200156 2.761709 -0.810206
v -0.233700 2.645123 -0.912029
v 0.108936 2.675342 0.047959
v 0.123411 2.676449 -0.094810
v 0.108867 2.723742 -0.027303
v 0.266206 2.827359 -0.015242
v 0.253103 2.758548 0.139918
v 0.282872 2.760134 -0.161765
v 0.571408 2.922215 0.010598
v 0.539187 2.847294 0.167390
v 0.569003 2.848522 -0.138967
v 0.915075 2.920555 0.040929
v 0.878596 2.857047 0.131960
v 0.895033 2.857066 -0.044615
v 1.108281 2.791578 0.091603
v 1.114186 2.826391 0.062160
v 1.113322 2.791624 0.037929
v 0.074744 2.659395 0.005908
v 0.167488 2.710291 0.096631
v 0.081296 2.659774 -0.060153
v 0.190960 2.712243 -0.133047
v 0.061216 2.678066 -0.030420
v 0.172186 2.772627 -0.022780
v 0.373724 2.807767 0.167233
v 0.406571 2.809307 -0.168084
v 0.397154 2.879867 -0.004248
v 0.719259 2.868216 0.151415
v 0.742447 2.868703 -0.092292
v 0.756087 2.941158 0.026310
v 1.010367 2.826952 0.111317
v 1.020774 2.827011 0.000082
v 1.038026 2.876916 0.053241
v 1.149833 2.772401 0.068624
v 0.150544 2.699321 -0.052048
v 0.041840 2.694174 -0.094254
v 0.097241 2.738119 -0.059212
v 0.144780 2.854521 -0.183882
v 0.260194 2.801958 -0.151943
v 0.027776 2.789580 -0.240673
v 0.233376 2.979274 -0.435083
v 0.351100 2.924048 -0.389670
v 0.111943 2.909671 -0.479168
v 0.337767 3.018890 -0.726997
v 0.405185 2.972202 -0.691567
v 0.265293 2.962802 -0.742826
v 0.431082 2.938342 -0.906922
v 0.406981 2.963218 -0.909625
v 0.388349 2.935355 -0.922453
v 0.109778 2.676752 -0.031262
v 0.204080 2.743133 -0.090500
v 0.059672 2.674505 -0.050854
v 0.028303 2.734292 -0.158179
v 0.081661 2.689257 -0.022942
v 0.116790 2.791577 -0.108488
v 0.311377 2.865502 -0.247792
v 0.051387 2.850789 -0.346096
v 0.182564 2.919274 -0.290809
v 0.381821 2.964232 -0.547633
v 0.189890 2.951868 -0.618550
v 0.288085 3.017958 -0.589524
v 0.421661 2.959765 -0.813899
v 0.333254 2.953669 -0.846122
v 0.378902 2.996148 -0.837201
v 0.423358 2.924645 -0.949993
v 0.090599 2.662094 0.030783
v 0.124872 2.682403 -0.087414
v 0.086567 2.705741 -0.033859
v 0.172152 2.858978 0.007883
v 0.162600 2.787843 0.140671
v 0.236001 2.831593 -0.116630
v 0.371947 3.065432 0.092749
v 0.355837 2.988130 0.221111
v 0.427631 3.030531 -0.039259
v 0.840504 3.198501 0.265066
v 0.830376 3.222246 0.244892
v 0.849585 3.204551 0.226220
v 0.075770 2.636782 -0.013659
v 0.117586 2.713226 0.085615
v 0.089887 2.644666 -0.064426
v 0.174033 2.747011 -0.108813
v 0.064386 2.646556 -0.045277
v 0.118765 2.773269 -0.017508
v 0.237560 2.880784 0.188456
v 0.317935 2.928465 -0.097766
v 0.253851 2.957791 0.044109
v 0.493474 3.085009 0.242422
v 0.548642 3.117555 0.037415
v 0.505566 3.156247 0.144314
v 0.746533 3.182381 0.263471
v 0.768682 3.196002 0.175059
v 0.749708 3.225989 0.223167
v 0.882190 3.202094 0.256240
v 0.024125 2.652252 -0.030645
v 0.115019 2.669208 0.041899
v 0.080017 2.698354 -0.006495
v -0.004638 2.780344 0.102296
v -0.112019 2.708605 0.033237
v 0.091465 2.744200 0.191523
v -0.468164 2.715665 0.713860
v -0.454812 2.742812 0.722482
v -0.438229 2.720804 0.737822
v 0.072800 2.643685 -0.038162
v -0.039853 2.674977 -0.009646
v 0.110086 2.651664 -0.006987
v 0.112182 2.702120 0.109773
v 0.105169 2.661386 -0.037794
v 0.046613 2.737197 0.036459
v -0.189602 2.744532 0.111392
v 0.038585 2.784032 0.287649
v -0.076779 2.820055 0.195609
v -0.341446 2.787725 0.382987
v -0.176302 2.815998 0.509530
v -0.273424 2.855316 0.454452
v -0.441788 2.747083 0.628092
v -0.371748 2.759083 0.682920
v -0.418108 2.787564 0.663285
v -0.470498 2.699366 0.754400
v 0.105153 2.691013 -0.071889
v 0.035579 2.682281 -0.044937
v 0.079207 2.732248 -0.048760
v 0.029149 2.814626 -0.174673
v 0.101861 2.759711 -0.212876
v -0.058547 2.740367 -0.151447
v -0.066676 2.867799 -0.422901
v 0.013579 2.811542 -0.448491
v -0.149554 2.791943 -0.386086
v -0.213721 2.669039 -0.880318
v -0.220416 2.697172 -0.872979
v -0.232743 2.666502 -0.872712
v 0.097236 2.676742 -0.031472
v 0.109488 2.720892 -0.132841
v 0.071502 2.673202 -0.021094
v -0.010037 2.706265 -0.087015
v 0.093675 2.692919 -0.011282
v 0.059458 2.772376 -0.098910
v 0.072907 2.794297 -0.316502
v -0.106714 2.772738 -0.247799
v -0.012834 2.849529 -0.280939
v -0.056167 2.805786 -0.586499
v -0.183424 2.790424 -0.537749
v -0.120752 2.860230 -0.573137
v -0.173286 2.720039 -0.807589
v -0.224349 2.713680 -0.787709
v -0.199205 2.756767 -0.807126
v -0.232323 2.641703 -0.907567
v 0.113487 2.670835 0.045314
v 0.126468 2.671211 -0.090934
v 0.113543 2.718568 -0.026719
v 0.268166 2.820204 -0.014534
v 0.255114 2.751746 0.138126
v 0.283764 2.753053 -0.158428
v 0.569562 2.913679 0.011478
v 0.537862 2.839193 0.165670
v 0.566490 2.840302 -0.135463
v 0.909505 2.911876 0.041825
v 0.874155 2.849209 0.129486
v 0.889206 2.849164 -0.040400
v 1.101267 2.784901 0.088970
v 1.105971 2.818486 0.063010
v 1.105213 2.784849 0.042227
v 0.079876 2.655768 0.002832
v 0.170986 2.704618 0.094473
v 0.084770 2.655233 -0.055980
v 0.193152 2.706062 -0.129503
v 0.066298 2.673368 -0.029500
v 0.175753 2.766504 -0.022153
v 0.374019 2.800114 0.165608
v 0.405801 2.801499 -0.164774
v 0.397167 2.871847 -0.003443
v 0.716338 2.860069 0.149352
v 0.738223 2.860462 -0.088429
v 0.752366 2.932404 0.027209
v 1.004870 2.819685 0.108453
v 1.013851 2.819644 0.004570
v 1.031023 2.868516 0.054114
v 1.140606 2.765182 0.069686
v 0.147190 2.694509 -0.057007
v 0.047590 2.691249 -0.097493
v 0.099005 2.733620 -0.064211
v 0.145861 2.848468 -0.187390
v 0.256998 2.795650 -0.155626
v 0.032241 2.784753 -0.243178
v 0.233348 2.972145 -0.436367
v 0.346692 2.916941 -0.391298
v 0.115824 2.903873 -0.479805
v 0.336637 3.011713 -0.725546
v 0.398809 2.965770 -0.691119
v 0.269368 2.957485 -0.740918
v 0.423621 2.933142 -0.904688
v 0.404731 2.956838 -0.905771
v 0.391339 2.930997 -0.918024
v 0.106205 2.672424 -0.036417
v 0.200996 2.737580 -0.094972
v 0.065876 2.672238 -0.054075
v 0.033415 2.730416 -0.161230
v 0.082684 2.685015 -0.028358
v 0.118309 2.786330 -0.112871
v 0.307744 2.858624 -0.250464
v 0.055391 2.845266 -0.347735
v 0.183058 2.912530 -0.293213
v 0.376460 2.957308 -0.548242
v 0.193877 2.946161 -0.617955
v 0.287553 3.010689 -0.589507
v 0.414558 2.953966 -0.812701
v 0.337409 2.948962 -0.843140
v 0.377248 2.989275 -0.834513
v 0.419810 2.918911 -0.945218
v 0.067111 2.427796 -0.171997
v 0.073520 2.530571 -0.112670
v 0.071653 2.530571 -0.231495
v 0.114553 2.388244 -0.172742
v 0.092290 2.422151 -0.115873
v 0.090515 2.422151 -0.228883
v 0.054492 2.477015 -0.136868
v 0.096057 2.482560 -0.081001
v 0.093185 2.482560 -0.263856
v 0.053395 2.477015 -0.206712
v 0.125306 2.546397 -0.081441
v 0.057163 2.537425 -0.171840
v 0.122214 2.546397 -0.264301
v 0.100378 2.580304 -0.137589
v 0.099281 2.580304 -0.207432
v 0.165569 2.379390 -0.173620
v 0.165569 2.440845 -0.077472
v 0.264026 2.427796 -0.171997
v 0.165569 2.440845 -0.269728
v 0.257617 2.530571 -0.112670
v 0.259484 2.530571 -0.231495
v 0.165569 2.603522 -0.173141
v 0.165569 2.395682 -0.117112
v 0.216584 2.388244 -0.172742
v 0.238847 2.422151 -0.115873
v 0.165569 2.395682 -0.230117
v 0.240622 2.422151 -0.228883
v 0.165569 2.492335 -0.060578
v 0.276645 2.477015 -0.136868
v 0.235080 2.482560 -0.081001
v 0.237952 2.482560 -0.263856
v 0.277742 2.477015 -0.206712
v 0.165569 2.492335 -0.286589
v 0.205831 2.546397 -0.081441
v 0.273974 2.537425 -0.171840
v 0.208923 2.546397 -0.264301
v 0.165569 2.588987 -0.117050
v 0.230759 2.580304 -0.137589
v 0.231856 2.580304 -0.207432
v 0.165569 2.588987 -0.230054
v 0.165569 2.546222 -0.079059
v 0.165569 2.600518 -0.173548
v 0.165569 2.546222 -0.268073
v 0.126723 2.423048 0.181311
v 0.133132 2.525823 0.240638
v 0.131265 2.525823 0.121813
v 0.174165 2.383496 0.180566
v 0.151902 2.417403 0.237435
v 0.150127 2.417403 0.124425
v 0.114104 2.472267 0.216440
v 0.155670 2.477813 0.272307
v 0.152797 2.477813 0.089451
v 0.113007 2.472267 0.146596
v 0.184919 2.541649 0.271867
v 0.116775 2.532677 0.181467
v 0.181826 2.541649 0.089007
v 0.159990 2.575557 0.215719
v 0.158893 2.575557 0.145876
v 0.225181 2.374642 0.179688
v 0.225181 2.436097 0.275836
v 0.323638 2.423048 0.181311
v 0.225181 2.436097 0.083580
v 0.317229 2.525823 0.240638
v 0.319096 2.525823 0.121813
v 0.225181 2.598774 0.180166
v 0.225181 2.390935 0.236195
v 0.276196 2.383496 0.180566
v 0.298459 2.417403 0.237435
v 0.225181 2.390935 0.123191
v 0.300234 2.417403 0.124425
v 0.225181 2.487587 0.292730
v 0.336257 2.472267 0.216440
v 0.294692 2.477813 0.272307
v 0.297564 2.477813 0.089451
v 0.337354 2.472267 0.146596
v 0.225181 2.487587 0.066719
v 0.265443 2.541649 0.271867
v 0.333586 2.532677 0.181467
v 0.268535 2.541649 0.089007
v 0.225181 2.584239 0.236258
v 0.290371 2.575557 0.215719
v 0.291468 2.575557 0.145876
v 0.225181 2.584239 0.123254
v 0.225181 2.541475 0.274249
v 0.225181 2.595771 0.179760
v 0.225181 2.541475 0.085235
v 0.220552 2.417019 0.032958
v 0.226962 2.519794 0.092285
v 0.225095 2.519794 -0.026540
v 0.267995 2.377467 0.032213
v 0.245732 2.411374 0.089082
v 0.243956 2.411374 -0.023928
v 0.207934 2.466238 0.068087
v 0.249499 2.471783 0.123954
v 0.246626 2.471783 -0.058901
v 0.206837 2.466238 -0.001756
v 0.278748 2.535620 0.123514
v 0.210604 2.526648 0.033115
v 0.275656 2.535620 -0.059346
v 0.253820 2.569527 0.067366
v 0.252723 2.569527 -0.002477
v 0.319010 2.368613 0.031335
v 0.319010 2.430068 0.127483
v 0.417468 2.417019 0.032958
v 0.319010 2.430068 -0.064773
v 0.411059 2.519794 0.092285
v 0.412925 2.519794 -0.026540
v 0.319010 2.592745 0.031814
v 0.319010 2.384906 0.087843
v 0.370026 2.377467 0.032213
v 0.392288 2.411374 0.089082
v 0.319010 2.384906 -0.025162
v 0.394064 2.411374 -0.023928
v 0.319010 2.481558 0.144377
v 0.430086 2.466238 0.068087
v 0.388521 2.471783 0.123954
v 0.391394 2.471783 -0.058901
v 0.431184 2.466238 -0.001756
v 0.319010 2.481558 -0.081634
v 0.359272 2.535620 0.123514
v 0.427416 2.526648 0.033115
v 0.362364 2.535620 -0.059346
v 0.319010 2.578210 0.087905
v 0.384200 2.569527 0.067366
v 0.385297 2.569527 -0.002477
v 0.319010 2.578210 -0.025099
v 0.319010 2.535445 0.125896
v 0.319010 2.589741 0.031407
v 0.319010 2.535445 -0.063118
v -0.049602 2.417019 0.032958
v -0.043193 2.519794 0.092285
v -0.045060 2.519794 -0.026540
v -0.002160 2.377467 0.032213
v -0.024423 2.411374 0.089082
v -0.026198 2.411374 -0.023928
v -0.062221 2.466238 0.068087
v -0.020656 2.471783 0.123954
v -0.023528 2.471783 -0.058901
v -0.063318 2.466238 -0.001756
v 0.008593 2.535620 0.123514
v -0.059550 2.526648 0.033115
v 0.005501 2.535620 -0.059346
v -0.016335 2.569527 0.067366
v -0.017432 2.569527 -0.002477
v 0.048856 2.368613 0.031335
v 0.048856 2.430068 0.127483
v 0.147313 2.417019 0.032958
v 0.048856 2.430068 -0.064773
v 0.140904 2.519794 0.092285
v 0.142771 2.519794 -0.026540
v 0.048856 2.592745 0.031814
v 0.048856 2.384906 0.087843
v 0.099871 2.377467 0.032213
v 0.122134 2.411374 0.089082
v 0.048856 2.384906 -0.025162
v 0.123909 2.411374 -0.023928
v 0.048856 2.481558 0.144377
v 0.159932 2.466238 0.068087
v 0.118367 2.471783 0.123954
v 0.121239 2.471783 -0.058901
v 0.161029 2.466238 -0.001756
v 0.048856 2.481558 -0.081634
v 0.089118 2.535620 0.123514
v 0.157261 2.526648 0.033115
v 0.092210 2.535620 -0.059346
v 0.048856 2.578210 0.087905
v 0.114046 2.569527 0.067366
v 0.115143 2.569527 -0.002477
v 0.048856 2.578210 -0.025099
v 0.048856 2.535445 0.125896
v 0.048856 2.589741 0.031407
v 0.048856 2.535445 -0.063118
vn -0.6589 -0.2656 -0.7038
vn 0.3074 0.0100 -0.9515
vn 0.9398 0.2786 -0.1979
vn 0.6627 0.2830 0.6934
vn -0.0035 1.0000 0.0007
vn -0.3074 0.0100 0.9515
vn -0.9438 -0.2640 0.1988
vn -0.0000 -1.0000 -0.0000
vn -0.9567 -0.2080 0.2036
vn -0.9660 0.1599 0.2029
vn -0.8636 0.4708 0.1803
vn -0.8935 0.4066 0.1906
vn -0.9785 -0.0105 0.2059
vn -0.9455 -0.2603 0.1958
vn -0.3034 -0.1623 0.9390
vn -0.3067 -0.0753 0.9488
vn -0.3057 0.0869 0.9482
vn -0.3038 0.1594 0.9393
vn -0.3051 0.1374 0.9424
vn -0.3069 0.0582 0.9500
vn 0.6660 0.0524 0.7441
vn 0.6407 -0.2300 0.7325
vn 0.5962 -0.3941 0.6995
vn 0.6373 -0.2515 0.7284
vn 0.6691 0.1637 0.7250
vn 0.6572 0.3278 0.6788
vn 0.9550 0.2184 -0.2005
vn 0.9664 -0.1581 -0.2029
vn 0.8683 -0.4617 -0.1812
vn 0.9045 -0.3817 -0.1901
vn 0.9783 0.0455 -0.2021
vn 0.9379 0.2878 -0.1935
vn 0.3028 0.1721 -0.9374
vn 0.3064 0.0858 -0.9480
vn 0.3066 -0.0745 -0.9489
vn 0.3058 -0.1366 -0.9423
vn 0.3069 -0.1093 -0.9455
vn 0.3076 -0.0290 -0.9511
vn -0.6641 -0.0421 -0.7464
vn -0.6360 0.2377 -0.7342
vn -0.5835 0.3995 -0.7071
vn -0.6234 0.2709 -0.7335
vn -0.6617 -0.1342 -0.7377
vn -0.6497 -0.3002 -0.6984
vn 0.2010 0.9389 0.2793
vn -0.6362 0.7463 0.1959
vn 0.1906 0.9707 0.1460
vn 0.2407 0.8920 0.3826
vn 0.2120 0.9771 -0.0180
vn -0.4261 0.9046 0.0069
vn -0.3393 0.9283 -0.1524
vn 0.2714 0.9462 -0.1761
vn 0.3566 0.8882 -0.2898
vn -0.2890 0.9015 -0.3221
vn -0.2843 0.8394 -0.4632
vn 0.4760 0.7697 -0.4255
vn 0.5830 0.6332 -0.5091
vn -0.2844 0.7113 -0.6428
vn -0.2995 0.5655 -0.7685
vn 0.6668 0.4846 -0.5662
vn -0.3100 0.4110 -0.8573
vn 0.6509 0.2572 -0.7143
vn -0.1783 0.1940 -0.9647
vn -0.5245 0.8425 0.1230
vn -0.7232 0.6899 -0.0323
vn 0.0488 0.7080 -0.7046
vn -0.5786 0.8153 0.0229
vn -0.8420 0.5387 -0.0298
vn -0.2000 -0.9447 0.2597
vn 0.0468 0.8834 -0.4663
vn -0.3710 0.9023 0.2196
vn -0.2571 0.8758 0.4086
vn 0.3701 0.9201 -0.1281
vn -0.1976 0.7819 0.5913
vn -0.1679 0.6602 0.7321
vn 0.5487 0.8347 -0.0474
vn 0.6928 0.7211 -0.0044
vn -0.1410 0.5292 0.8367
vn 0.8025 0.5960 0.0294
vn 0.0484 0.3783 0.9244
vn 0.8725 0.4366 0.2192
vn 0.0232 0.8014 -0.5977
vn 0.6664 0.7441 -0.0476
vn 0.0488 0.7704 0.6357
vn 0.5818 0.8076 -0.0960
vn 0.7424 0.6687 -0.0412
vn 0.4828 0.8552 -0.1886
vn 0.0610 0.9097 0.4107
vn -0.0069 0.9608 0.2771
vn 0.3928 0.8625 -0.3191
vn 0.3397 0.8228 -0.4555
vn -0.1245 0.9789 0.1620
vn -0.2624 0.9602 0.0961
vn -0.5169 0.8560 -0.0065
vn -0.2430 -0.6757 0.6960
vn 0.1748 0.4723 -0.8639
vn -0.7320 0.6802 -0.0388
vn -0.0326 0.3398 -0.9399
vn -0.8247 0.5214 -0.2192
vn 0.0778 0.8450 0.5291
vn -0.6882 0.6004 -0.4073
vn 0.6652 0.7206 -0.1955
vn -0.6466 0.7136 -0.2697
vn -0.7511 0.4522 -0.4810
vn -0.6325 0.7706 -0.0786
vn 0.5176 0.8550 -0.0339
vn 0.4575 0.8796 0.1302
vn -0.6673 0.7372 0.1060
vn -0.7398 0.6374 0.2154
vn 0.4393 0.8428 0.3110
vn 0.4710 0.7588 0.4499
vn 0.5176 0.5665 0.6412
vn 0.8641 -0.3797 -0.3304
vn -0.9114 0.1778 0.3712
vn 0.5672 0.3771 0.7322
vn -0.8346 0.0483 0.5488
vn 0.4680 0.2402 0.8505
vn 0.5883 0.7962 -0.1415
vn 0.3748 0.8254 -0.4221
vn -0.0686 0.8986 0.4333
vn 0.2464 0.8540 -0.4583
vn 0.4850 0.7672 -0.4198
vn 0.0982 0.8422 -0.5302
vn -0.1791 0.9658 0.1875
vn -0.3043 0.9496 0.0748
vn -0.0262 0.7756 -0.6307
vn -0.0872 0.6731 -0.7344
vn -0.4573 0.8892 0.0130
vn -0.5951 0.8032 0.0281
vn -0.1506 0.4930 -0.8569
vn -0.1662 0.3107 -0.9359
vn -0.7645 0.6404 0.0735
vn -0.8690 0.4714 0.1507
vn -0.1688 0.1384 -0.9759
vn -0.9271 0.3041 0.2190
vn -0.3175 -0.0998 -0.9430
vn -0.9924 0.0319 0.1186
vn -0.0997 0.9459 0.3088
vn 0.0164 0.6245 -0.7809
vn 0.6049 0.7958 0.0275
vn -0.0418 0.7288 -0.6834
vn 0.0205 0.4970 -0.8675
vn -0.1543 0.8040 -0.5743
vn 0.4104 0.9119 -0.0027
vn 0.2759 0.9598 0.0511
vn -0.3020 0.8211 -0.4843
vn -0.4454 0.7809 -0.4380
vn 0.1506 0.9759 0.1581
vn 0.0740 0.9538 0.2911
vn -0.6290 0.6805 -0.3759
vn -0.7609 0.5537 -0.3383
vn -0.0159 0.8808 0.4732
vn -0.0639 0.7794 0.6232
vn -0.8550 0.4211 -0.3029
vn -0.0997 0.6660 0.7392
vn -0.9515 0.2916 -0.0980
vn -0.2862 0.5097 0.8113
vn 0.5185 0.8550 -0.0075
vn -0.2050 -0.9374 -0.2815
vn 0.6527 -0.7311 -0.1986
vn -0.1929 -0.9701 -0.1470
vn -0.2500 -0.8867 -0.3890
vn -0.2138 -0.9767 0.0175
vn 0.4309 -0.9024 -0.0077
vn 0.3430 -0.9270 0.1519
vn -0.2733 -0.9458 0.1757
vn -0.3594 -0.8873 0.2892
vn 0.2927 -0.9003 0.3221
vn 0.2895 -0.8376 0.4632
vn -0.4808 -0.7676 0.4239
vn -0.5918 -0.6287 0.5044
vn 0.2924 -0.7076 0.6432
vn 0.3131 -0.5581 0.7684
vn -0.6840 -0.4752 0.5535
vn 0.3350 -0.3965 0.8547
vn -0.6739 -0.2550 0.6934
vn 0.2122 -0.1848 0.9596
vn 0.5322 -0.8374 -0.1247
vn 0.7328 -0.6798 0.0296
vn -0.0570 -0.6968 0.7150
vn 0.5855 -0.8103 -0.0237
vn 0.8582 -0.5131 0.0150
vn -0.6133 -0.5659 0.5510
vn -0.0498 -0.8816 0.4693
vn 0.3750 -0.9002 -0.2214
vn 0.2609 -0.8733 -0.4114
vn -0.3742 -0.9181 0.1309
vn 0.2038 -0.7772 -0.5954
vn 0.1791 -0.6509 -0.7377
vn -0.5554 -0.8299 0.0531
vn -0.7028 -0.7112 0.0170
vn 0.1634 -0.5116 -0.8435
vn -0.8178 -0.5754 -0.0018
vn -0.0137 -0.3692 -0.9292
vn -0.8921 -0.4176 -0.1728
vn -0.0282 -0.7976 0.6026
vn -0.6696 -0.7410 0.0512
vn -0.0398 -0.7614 -0.6471
vn -0.5835 -0.8062 0.0981
vn -0.7515 -0.6577 0.0517
vn -0.4843 -0.8540 0.1902
vn -0.0581 -0.9087 -0.4133
vn 0.0094 -0.9602 -0.2791
vn -0.3946 -0.8609 0.3210
vn -0.3432 -0.8198 0.4584
vn 0.1274 -0.9781 -0.1645
vn 0.2667 -0.9586 -0.1000
vn 0.5256 -0.8507 -0.0024
vn 0.5192 -0.7086 -0.4777
vn -0.1969 -0.4500 0.8711
vn 0.7494 -0.6620 0.0091
vn -0.0008 -0.3244 0.9459
vn 0.8452 -0.5074 0.1679
vn -0.0731 -0.8425 -0.5338
vn 0.7117 -0.5676 0.4139
vn -0.6998 -0.6883 0.1914
vn 0.6641 -0.6951 0.2755
vn 0.7909 -0.3761 0.4827
vn 0.6470 -0.7578 0.0838
vn -0.5296 -0.8477 0.0318
vn -0.4670 -0.8744 -0.1315
vn 0.6818 -0.7246 -0.1003
vn 0.7571 -0.6201 -0.2059
vn -0.4491 -0.8374 -0.3117
vn -0.4841 -0.7508 -0.4494
vn -0.5420 -0.5525 -0.6332
vn -0.3301 -0.7472 -0.5768
vn 0.9492 -0.1205 -0.2906
vn -0.6243 -0.3493 -0.6987
vn 0.9197 -0.0054 -0.3926
vn -0.5704 -0.2327 -0.7877
vn -0.6065 -0.7829 0.1385
vn -0.3794 -0.8220 0.4246
vn 0.0705 -0.8913 -0.4480
vn -0.2493 -0.8522 0.4600
vn -0.4953 -0.7563 0.4274
vn -0.1003 -0.8407 0.5321
vn 0.1809 -0.9647 -0.1915
vn 0.3065 -0.9487 -0.0778
vn 0.0242 -0.7736 0.6332
vn 0.0841 -0.6699 0.7376
vn 0.4601 -0.8877 -0.0164
vn 0.5984 -0.8005 -0.0337
vn 0.1453 -0.4875 0.8610
vn 0.1562 -0.3021 0.9404
vn 0.7681 -0.6349 -0.0835
vn 0.8706 -0.4625 -0.1681
vn 0.1493 -0.1258 0.9808
vn 0.9236 -0.2910 -0.2497
vn 0.2881 0.1031 0.9520
vn 0.9865 -0.0277 -0.1616
vn 0.1018 -0.9434 -0.3156
vn -0.0109 -0.6135 0.7896
vn -0.6172 -0.7849 -0.0537
vn 0.0456 -0.7230 0.6893
vn -0.0133 -0.4699 0.8826
vn 0.1578 -0.7997 0.5793
vn -0.4140 -0.9103 -0.0021
vn -0.2787 -0.9588 -0.0546
vn 0.3061 -0.8163 0.4899
vn 0.4506 -0.7732 0.4462
vn -0.1535 -0.9748 -0.1621
vn -0.0785 -0.9517 -0.2970
vn 0.6363 -0.6661 0.3892
vn 0.7686 -0.5278 0.3614
vn 0.0081 -0.8761 -0.4820
vn 0.0488 -0.7696 -0.6366
vn 0.8608 -0.3729 0.3464
vn 0.0678 -0.6469 -0.7596
vn 0.9557 -0.2382 0.1728
vn 0.2309 -0.5056 -0.8313
vn -0.5242 -0.8516 -0.0010
vn -0.1840 -0.3230 0.9283
vn 0.3905 -0.4176 0.8204
vn 0.6060 -0.3088 0.7331
vn -0.6699 -0.6807 0.2965
vn -0.5726 -0.6906 0.4417
vn -0.3058 -0.3638 0.8799
vn 0.7753 -0.2095 0.5959
vn 0.8913 -0.1905 0.4114
vn -0.7799 -0.6259 0.0039
vn -0.7478 -0.6448 0.1582
vn 0.9348 -0.2732 0.2268
vn 0.8907 -0.4068 0.2028
vn -0.7239 -0.6755 -0.1403
vn -0.7534 -0.6430 -0.1376
vn 0.7933 -0.5231 0.3116
vn 0.6758 -0.5956 0.4343
vn -0.6886 -0.7201 0.0853
vn -0.7103 -0.7030 -0.0361
vn 0.5817 -0.6166 0.5304
vn 0.6937 -0.6657 0.2749
vn -0.6308 -0.7701 -0.0953
vn -0.6745 -0.7150 0.1838
vn -0.3608 -0.7523 -0.5513
vn -0.4541 -0.8889 0.0604
vn -0.5332 -0.8175 0.2176
vn 0.4344 -0.4700 -0.7684
vn 0.2336 -0.6111 -0.7563
vn -0.4349 -0.6867 -0.5825
vn -0.6083 -0.7113 0.3521
vn 0.7270 -0.3785 -0.5729
vn 0.5861 -0.3517 -0.7299
vn -0.5721 -0.5431 0.6145
vn 0.6884 -0.5379 -0.4865
vn -0.5957 -0.6045 0.5288
vn -0.6209 -0.6576 0.4266
vn 0.4500 -0.6756 -0.5840
vn 0.5681 -0.6277 -0.5322
vn -0.6506 -0.6648 0.3671
vn -0.5016 -0.5939 0.6290
vn 0.5033 -0.6840 -0.5281
vn 0.3651 -0.6853 -0.6301
vn 0.3315 -0.6625 0.6717
vn 0.5118 -0.8576 -0.0516
vn 0.5850 -0.7669 -0.2639
vn -0.4243 -0.4318 0.7959
vn -0.2656 -0.5596 0.7851
vn 0.4666 -0.6283 0.6226
vn 0.6251 -0.6544 -0.4255
vn 0.6109 -0.5683 -0.5513
vn -0.6771 -0.2265 0.7002
vn -0.5541 -0.3028 0.7754
vn 0.5403 -0.5429 -0.6429
vn 0.4989 -0.5966 -0.6287
vn -0.7605 -0.3527 0.5452
vn -0.7709 -0.2463 0.5875
vn -0.6017 -0.5276 0.5997
vn 0.5629 -0.7450 -0.3578
vn 0.4227 -0.7159 -0.5557
vn -0.5665 -0.5928 0.5724
vn -0.4396 -0.5977 0.6704
vn 0.2445 -0.4301 -0.8691
vn -0.2737 -0.9076 -0.3185
vn -0.3987 -0.8910 -0.2173
vn 0.6815 -0.7271 -0.0823
vn 0.5735 -0.7759 -0.2629
vn 0.1321 -0.4170 -0.8992
vn -0.4884 -0.8512 -0.1921
vn -0.5286 -0.8205 -0.2176
vn 0.7865 -0.6170 0.0282
vn 0.7569 -0.6535 0.0104
vn -0.5207 -0.8128 -0.2611
vn -0.4614 -0.8150 -0.3505
vn 0.7311 -0.6768 -0.0866
vn 0.7744 -0.6327 0.0065
vn 0.6717 -0.6526 -0.3507
vn -0.2660 -0.6323 -0.7276
vn -0.6091 -0.5704 -0.5511
vn 0.8884 -0.4325 -0.1542
vn 0.6465 -0.5611 -0.5169
vn 0.7401 -0.2011 0.6418
vn 0.8420 -0.5387 -0.0294
vn 0.8384 -0.4549 -0.3002
vn -0.0273 -0.2183 0.9755
vn 0.1856 -0.2823 0.9412
vn 0.8212 -0.1295 0.5558
vn 0.7800 -0.3537 -0.5163
vn 0.6642 -0.3242 -0.6736
vn -0.3578 -0.2009 0.9119
vn -0.2049 -0.1698 0.9639
vn 0.5269 -0.3954 -0.7524
vn 0.4866 -0.4645 -0.7399
vn -0.4125 -0.3776 0.8290
vn -0.4421 -0.3062 0.8431
vn 0.5197 -0.4960 -0.6956
vn 0.5597 -0.5193 -0.6458
vn -0.2577 -0.3826 0.8872
vn -0.3315 -0.3869 0.8605
vn 0.5836 -0.5273 -0.6175
vn 0.3979 -0.6513 -0.6461
vn -0.3049 -0.4900 0.8167
vn -0.2089 -0.3692 0.9056
vn 0.7351 -0.4984 -0.4596
vn 0.0056 -0.8247 -0.5655
vn -0.1708 -0.7875 -0.5922
vn 0.6113 -0.5219 0.5950
vn 0.6104 -0.6784 0.4088
vn 0.6893 -0.6194 -0.3759
vn -0.3044 -0.7355 -0.6052
vn -0.4058 -0.7144 -0.5701
vn 0.5606 -0.2645 0.7847
vn 0.6053 -0.3662 0.7068
vn -0.4561 -0.7390 -0.4959
vn -0.4070 -0.7913 -0.4563
vn 0.4590 -0.3263 0.8264
vn 0.4786 -0.2515 0.8412
vn -0.2830 -0.8320 -0.4773
vn -0.1617 -0.8484 -0.5040
vn 0.5793 -0.5085 0.6371
vn 0.5170 -0.4262 0.7424
vn -0.0735 -0.8411 -0.5359
vn -0.2525 -0.8260 -0.5040
vn 0.4202 -0.3514 0.8366
vn 0.6312 -0.5234 0.5724
vn 0.2352 0.6836 -0.6909
vn 0.1968 0.9459 -0.2579
vn -0.8403 0.4089 0.3561
vn -0.9197 0.3299 0.2130
vn -0.6685 0.3157 -0.6734
vn -0.8768 0.4373 0.1999
vn -0.9366 0.2350 0.2600
vn -0.8005 0.5573 0.2205
vn -0.6897 0.5190 -0.5050
vn -0.6268 0.6464 -0.4351
vn -0.6967 0.6579 0.2860
vn -0.5925 0.7081 0.3841
vn -0.5127 0.7605 -0.3983
vn -0.3770 0.8327 -0.4057
vn -0.0922 0.9023 -0.4212
vn 0.3623 -0.7365 -0.5712
vn -0.1435 0.6767 0.7222
vn 0.1822 0.8676 -0.4626
vn 0.1134 0.6922 0.7128
vn 0.3979 0.8590 -0.3222
vn -0.7011 0.4090 -0.5841
vn 0.7928 0.5598 0.2409
vn -0.4800 0.4541 0.7506
vn 0.6855 0.7011 0.1965
vn 0.8862 0.4124 0.2110
vn 0.5750 0.8147 0.0746
vn -0.4372 0.6630 0.6076
vn -0.4698 0.7537 0.4597
vn 0.5110 0.8537 -0.1008
vn 0.5184 0.8144 -0.2608
vn -0.5460 0.7846 0.2936
vn -0.6434 0.7475 0.1651
vn -0.7790 0.6257 -0.0411
vn -0.5695 -0.6430 0.5121
vn 0.5915 0.4816 -0.6467
vn -0.8660 0.4720 -0.1654
vn 0.4363 0.4062 -0.8029
vn -0.8396 0.4073 -0.3595
vn -0.4424 0.5579 0.7022
vn -0.6308 0.6808 0.3723
vn -0.5912 0.5552 -0.5850
vn -0.5382 0.7736 0.3346
vn -0.6824 0.5868 0.4359
vn -0.3967 0.8582 0.3259
vn -0.4712 0.7622 -0.4438
vn -0.3325 0.8513 -0.4059
vn -0.2334 0.9016 0.3642
vn -0.0971 0.8910 0.4436
vn -0.1625 0.8949 -0.4156
vn -0.0127 0.8783 -0.4779
vn 0.0910 0.8279 0.5535
vn 0.2308 0.7239 0.6502
vn 0.1960 0.8010 -0.5657
vn 0.3492 0.6773 -0.6476
vn 0.3433 0.6054 0.7181
vn 0.4686 0.5393 -0.6997
vn 0.5830 0.4647 0.6664
vn 0.7041 0.3942 -0.5907
vn -0.5570 0.6600 -0.5042
vn 0.2074 0.5646 0.7989
vn -0.7424 0.4974 0.4488
vn 0.1658 0.6839 0.7105
vn 0.2925 0.4452 0.8463
vn 0.1695 0.7975 0.5790
vn -0.6130 0.6799 0.4025
vn -0.5534 0.7767 0.3007
vn 0.2297 0.8713 0.4336
vn 0.3288 0.8904 0.3147
vn -0.5194 0.8409 0.1519
vn -0.5250 0.8511 -0.0027
vn 0.4702 0.8698 0.1496
vn 0.5932 0.8046 0.0252
vn -0.5301 0.8199 -0.2162
vn -0.5412 0.7460 -0.3880
vn 0.6901 0.7193 -0.0799
vn -0.5395 0.6561 -0.5277
vn 0.6960 0.6387 -0.3280
vn -0.3832 0.5852 -0.7146
vn -0.6757 0.5854 0.4480
vn 0.9193 -0.3277 -0.2181
vn 0.6598 -0.3073 0.6857
vn 0.8767 -0.4363 -0.2027
vn 0.9341 -0.2270 -0.2756
vn 0.8005 -0.5564 -0.2228
vn 0.6877 -0.5183 0.5084
vn 0.6252 -0.6461 0.4378
vn 0.6966 -0.6567 -0.2888
vn 0.5926 -0.7054 -0.3889
vn 0.5108 -0.7601 0.4016
vn 0.3739 -0.8316 0.4107
vn 0.0852 -0.8979 0.4319
vn 0.1518 -0.5758 0.8034
vn 0.1455 -0.6526 -0.7436
vn -0.1970 -0.8477 0.4926
vn -0.0985 -0.6684 -0.7373
vn -0.4061 -0.8343 0.3728
vn 0.6975 -0.4069 0.5899
vn -0.8167 -0.5325 -0.2222
vn 0.5114 -0.4184 -0.7506
vn -0.7036 -0.6859 -0.1856
vn -0.9222 -0.3505 -0.1636
vn -0.5903 -0.8044 -0.0668
vn 0.4485 -0.6545 -0.6086
vn 0.4785 -0.7473 -0.4610
vn -0.5265 -0.8433 0.1082
vn -0.5384 -0.7988 0.2682
vn 0.5548 -0.7778 -0.2954
vn 0.6543 -0.7373 -0.1684
vn 0.7958 -0.6049 0.0290
vn 0.5870 -0.8095 0.0055
vn -0.6660 -0.4098 0.6233
vn 0.8976 -0.4231 0.1233
vn -0.5897 -0.3324 0.7360
vn 0.8954 -0.3576 0.2652
vn 0.4594 -0.5429 -0.7030
vn 0.6317 -0.6772 -0.3773
vn 0.5899 -0.5438 0.5969
vn 0.5389 -0.7717 -0.3379
vn 0.6818 -0.5771 -0.4496
vn 0.3969 -0.8570 -0.3288
vn 0.4704 -0.7603 0.4479
vn 0.3312 -0.8502 0.4093
vn 0.2330 -0.9003 -0.3677
vn 0.0967 -0.8886 -0.4484
vn 0.1606 -0.8935 0.4195
vn 0.0104 -0.8752 0.4837
vn -0.0914 -0.8230 -0.5607
vn -0.2294 -0.7148 -0.6606
vn -0.1989 -0.7938 0.5748
vn -0.3502 -0.6633 0.6613
vn -0.3370 -0.5892 -0.7343
vn -0.4641 -0.5140 0.7214
vn -0.5651 -0.4535 -0.6891
vn -0.6890 -0.3696 0.6234
vn 0.5560 -0.6560 0.5104
vn -0.2200 -0.5566 -0.8011
vn 0.7626 -0.4827 -0.4306
vn -0.1739 -0.6801 -0.7122
vn -0.3151 -0.4230 -0.8496
vn -0.1763 -0.7949 -0.5805
vn 0.6178 -0.6771 -0.3999
vn 0.5572 -0.7747 -0.2989
vn -0.2375 -0.8684 -0.4353
vn -0.3399 -0.8853 -0.3173
vn 0.5235 -0.8388 -0.1497
vn 0.5309 -0.8474 0.0059
vn -0.4877 -0.8593 -0.1541
vn -0.6202 -0.7837 -0.0352
vn 0.5395 -0.8126 0.2207
vn 0.5571 -0.7311 0.3938
vn -0.7338 -0.6770 0.0566
vn 0.5691 -0.6262 0.5330
vn -0.7571 -0.5908 0.2787
vn 0.4355 -0.5599 0.7048
vn 0.6836 -0.5801 -0.4430
vn -0.0767 -0.9588 -0.2734
vn 0.1144 -0.8761 0.4684
vn 0.0705 -0.7428 0.6658
vn 0.3314 -0.5092 -0.7942
vn 0.2864 -0.6733 -0.6816
vn -0.1846 -0.9675 -0.1729
vn 0.0243 -0.6002 0.7995
vn 0.0238 -0.4711 0.8818
vn 0.4360 -0.1974 -0.8780
vn 0.3630 -0.3428 -0.8664
vn 0.0907 -0.3812 0.9200
vn 0.1487 -0.4125 0.8987
vn 0.6184 -0.1950 -0.7613
vn 0.5528 -0.1244 -0.8240
vn 0.5806 -0.4251 -0.6944
vn 0.1032 -0.6753 0.7303
vn 0.2532 -0.5067 0.8241
vn 0.5992 -0.4799 -0.6408
vn 0.4756 -0.5802 -0.6612
vn 0.2389 -0.7390 0.6299
vn 0.4082 -0.8817 -0.2364
vn 0.4638 -0.8059 -0.3680
vn -0.5354 -0.8395 0.0928
vn -0.3497 -0.9220 0.1659
vn 0.3508 -0.7133 0.6067
vn 0.5276 -0.7419 -0.4138
vn 0.5749 -0.7138 -0.4001
vn -0.6833 -0.7235 0.0981
vn -0.6484 -0.7567 0.0838
vn 0.5903 -0.7230 -0.3590
vn 0.5850 -0.7677 -0.2616
vn -0.5764 -0.8052 0.1393
vn -0.6617 -0.7426 0.1033
vn -0.3906 -0.8593 0.3302
vn 0.6077 -0.7685 0.2002
vn 0.8116 -0.5794 -0.0744
vn -0.6798 -0.6372 0.3631
vn -0.2850 -0.8260 0.4863
vn -0.6433 -0.7521 -0.1433
vn -0.3265 -0.7721 0.5452
vn -0.2902 -0.5864 0.7563
vn -0.1478 -0.5857 -0.7970
vn -0.2635 -0.7118 -0.6511
vn -0.7203 -0.6921 -0.0455
vn -0.2385 -0.3873 0.8906
vn -0.1196 -0.2465 0.9617
vn 0.1138 -0.4042 -0.9076
vn -0.0363 -0.4669 -0.8836
vn 0.0496 -0.2106 0.9763
vn 0.1161 -0.2540 0.9602
vn 0.2814 -0.4856 -0.8277
vn 0.2590 -0.4223 -0.8686
vn 0.0955 -0.3123 0.9452
vn 0.0633 -0.3694 0.9271
vn 0.1486 -0.5804 -0.8007
vn 0.2155 -0.5409 -0.8130
vn 0.0411 -0.3982 0.9164
vn 0.2624 -0.4056 0.8756
vn 0.2672 -0.6151 -0.7418
vn 0.0981 -0.5983 -0.7952
vn -0.1590 -0.7478 0.6446
vn 0.5699 -0.7647 0.3007
vn 0.7090 -0.6618 0.2434
vn -0.6267 -0.7157 -0.3084
vn -0.4742 -0.8605 -0.1861
vn -0.1295 -0.8410 0.5254
vn 0.8028 -0.5620 0.1991
vn 0.8555 -0.5027 0.1238
vn -0.7737 -0.4579 -0.4378
vn -0.7331 -0.5693 -0.3720
vn 0.8623 -0.5054 0.0310
vn 0.8198 -0.5726 0.0110
vn -0.6974 -0.4750 -0.5366
vn -0.7450 -0.4137 -0.5233
vn 0.7482 -0.6585 0.0815
vn 0.6740 -0.7211 0.1607
vn -0.6290 -0.6906 -0.3570
vn -0.6644 -0.5900 -0.4587
vn 0.6205 -0.7488 0.2330
vn 0.7371 -0.6649 0.1204
vn -0.6648 -0.4830 -0.5699
vn -0.6294 -0.7249 -0.2798
vn -0.3624 0.7439 0.5615
vn 0.5355 0.6734 -0.5097
vn 0.3499 0.9054 -0.2405
vn -0.5671 0.8000 0.1957
vn 0.2586 0.9001 -0.3508
vn 0.4494 0.8784 -0.1629
vn 0.1783 0.8517 -0.4928
vn -0.5192 0.8498 -0.0909
vn -0.5496 0.7957 -0.2545
vn -0.6763 0.6261 -0.3880
vn -0.1609 -0.7057 0.6900
vn 0.2138 0.4775 -0.8522
vn 0.2710 0.3122 -0.9105
vn -0.8404 0.3625 -0.4029
vn -0.9189 0.1831 -0.3494
vn 0.3148 0.1555 -0.9363
vn -0.9563 0.0244 -0.2914
vn 0.2292 -0.0929 -0.9689
vn -0.8892 -0.2275 -0.3968
vn -0.5249 0.8490 0.0610
vn 0.0222 0.9187 0.3943
vn 0.0165 0.7951 -0.6062
vn 0.1626 0.9263 0.3398
vn -0.0949 0.8743 0.4760
vn 0.3206 0.8935 0.3145
vn 0.2439 0.8789 -0.4100
vn 0.3947 0.8521 -0.3437
vn 0.4608 0.8237 0.3303
vn 0.5592 0.7371 0.3794
vn 0.5358 0.7807 -0.3217
vn 0.6398 0.6875 -0.3436
vn 0.6641 0.6014 0.4441
vn 0.7255 0.4718 0.5010
vn 0.7534 0.5399 -0.3752
vn 0.8204 0.3974 -0.4111
vn 0.7650 0.3487 0.5415
vn 0.8611 0.2624 -0.4355
vn 0.8570 0.1814 0.4824
vn 0.9385 0.1001 -0.3306
vn 0.1162 0.8590 -0.4986
vn -0.0930 0.8633 0.4961
vn -0.7083 0.6121 -0.3516
vn -0.0179 0.9242 0.3816
vn -0.1180 0.7849 0.6083
vn 0.1070 0.9567 0.2706
vn -0.4355 0.8466 -0.3059
vn -0.2546 0.9022 -0.3481
vn -0.0444 0.8718 -0.4879
vn -0.3369 -0.9203 -0.1986
vn 0.1593 0.6751 -0.7203
vn -0.6529 -0.7311 -0.1980
vn 0.8215 0.5227 0.2278
vn 0.2317 0.4465 -0.8643
vn 0.9366 0.3388 0.0889
vn 0.4214 0.2722 -0.8650
vn -0.5901 0.7464 -0.3076
vn -0.7149 0.6939 0.0860
vn 0.2501 0.7388 -0.6258
vn -0.5644 0.8084 0.1669
vn -0.8348 0.5464 0.0673
vn -0.3957 0.8652 0.3080
vn 0.2606 0.8980 -0.3546
vn 0.3401 0.9250 -0.1697
vn -0.2672 0.8388 0.4744
vn -0.2156 0.7556 0.6185
vn 0.4584 0.8887 -0.0095
vn 0.5833 0.8082 0.0816
vn -0.1660 0.6042 0.7794
vn -0.1563 0.4526 0.8779
vn 0.7262 0.6650 0.1743
vn 0.8245 0.5232 0.2155
vn -0.1494 0.3134 0.9378
vn 0.8870 0.3929 0.2428
vn 0.0297 0.1587 0.9869
vn 0.8867 0.2332 0.3993
vn 0.2314 0.8294 -0.5085
vn -0.3569 -0.9031 0.2388
vn 0.5790 -0.7870 -0.2129
vn -0.2626 -0.8992 0.3501
vn -0.4684 -0.8685 0.1621
vn -0.1813 -0.8511 0.4927
vn 0.5258 -0.8461 0.0880
vn 0.5554 -0.7922 0.2528
vn 0.6834 -0.6209 0.3841
vn 0.9365 -0.1378 -0.3224
vn -0.2207 -0.4750 0.8519
vn -0.2827 -0.3081 0.9084
vn 0.8498 -0.3532 0.3913
vn 0.9298 -0.1703 0.3263
vn -0.3365 -0.1499 0.9297
vn 0.9691 -0.0070 0.2464
vn -0.2628 0.0808 0.9615
vn 0.9121 0.2365 0.3348
vn 0.5339 -0.8429 -0.0673
vn -0.0184 -0.9157 -0.4014
vn -0.0090 -0.7785 0.6276
vn -0.1611 -0.9252 -0.3435
vn 0.1069 -0.8641 -0.4919
vn -0.3198 -0.8930 -0.3166
vn -0.2426 -0.8773 0.4142
vn -0.3942 -0.8514 0.3461
vn -0.4599 -0.8236 -0.3320
vn -0.5579 -0.7370 -0.3815
vn -0.5353 -0.7802 0.3237
vn -0.6390 -0.6868 0.3464
vn -0.6618 -0.6012 -0.4479
vn -0.7207 -0.4708 -0.5088
vn -0.7520 -0.5386 0.3799
vn -0.8172 -0.3943 0.4203
vn -0.7539 -0.3456 -0.5587
vn -0.8529 -0.2551 0.4555
vn -0.8427 -0.1835 -0.5061
vn -0.9280 -0.0991 0.3592
vn -0.1130 -0.8546 0.5069
vn 0.0895 -0.8590 -0.5040
vn 0.7236 -0.5790 0.3758
vn 0.0154 -0.9224 -0.3860
vn 0.1152 -0.7718 -0.6253
vn -0.1094 -0.9556 -0.2735
vn 0.4425 -0.8413 0.3104
vn 0.2594 -0.8995 0.3515
vn 0.0483 -0.8691 0.4923
vn 0.4339 -0.4942 0.7534
vn -0.1520 -0.6681 0.7284
vn 0.1979 -0.6345 0.7472
vn -0.8237 -0.4998 -0.2679
vn -0.2074 -0.4265 0.8804
vn -0.9356 -0.3190 -0.1514
vn -0.3805 -0.2644 0.8862
vn 0.6004 -0.7349 0.3154
vn 0.7277 -0.6801 -0.0888
vn -0.2593 -0.7244 0.6388
vn 0.5735 -0.8017 -0.1682
vn 0.8556 -0.5110 -0.0818
vn 0.4020 -0.8617 -0.3095
vn -0.2653 -0.8954 0.3577
vn -0.3439 -0.9232 0.1715
vn 0.2723 -0.8360 -0.4764
vn 0.2218 -0.7519 -0.6208
vn -0.4620 -0.8868 0.0111
vn -0.5873 -0.8055 -0.0790
vn 0.1745 -0.5987 -0.7817
vn 0.1707 -0.4439 -0.8797
vn -0.7313 -0.6608 -0.1689
vn -0.8314 -0.5168 -0.2040
vn 0.1768 -0.2995 -0.9376
vn -0.8982 -0.3819 -0.2176
vn 0.0103 -0.1561 -0.9877
vn -0.9037 -0.2274 -0.3629
vn -0.2383 -0.8239 0.5142
vn 0.3785 0.0566 0.9239
vn 0.7840 -0.2901 0.5488
vn 0.9269 -0.1851 0.3266
vn -0.4721 -0.3993 0.7859
vn -0.3102 -0.3184 0.8958
vn 0.2250 0.1753 0.9585
vn 0.9937 -0.0631 0.0922
vn 0.9909 -0.0203 -0.1331
vn -0.6234 -0.5239 0.5804
vn -0.5807 -0.4557 0.6746
vn -0.5733 -0.6093 0.5479
vn 0.9265 -0.2347 -0.2942
vn 0.9333 -0.3006 -0.1962
vn -0.4404 -0.5125 0.7372
vn -0.4944 -0.5656 0.6601
vn 0.9346 -0.3323 -0.1270
vn 0.7880 -0.4402 -0.4303
vn -0.4692 -0.5632 0.6802
vn -0.4038 -0.4618 0.7897
vn -0.9672 -0.2540 0.0088
vn -0.7559 -0.3741 0.5373
vn -0.6408 -0.2907 0.7105
vn -0.4728 -0.4688 -0.7461
vn -0.6057 -0.5522 -0.5728
vn -0.9291 -0.3314 -0.1643
vn -0.4997 -0.2150 0.8391
vn -0.3436 -0.2087 0.9156
vn -0.1406 -0.3380 -0.9306
vn -0.3166 -0.3726 -0.8723
vn -0.2207 -0.2777 0.9350
vn -0.2207 -0.3439 0.9127
vn -0.0058 -0.4489 -0.8935
vn -0.0036 -0.3887 -0.9214
vn -0.3054 -0.3761 0.8748
vn -0.3985 -0.3962 0.8272
vn -0.2094 -0.5097 -0.8345
vn -0.0982 -0.4858 -0.8686
vn -0.4696 -0.3979 0.7881
vn -0.2661 -0.5024 0.8227
vn -0.0661 -0.6066 -0.7923
vn -0.2948 -0.5106 -0.8077
vn -0.6884 -0.5624 0.4582
vn -0.1354 -0.5505 0.8238
vn 0.0625 -0.4361 0.8977
vn -0.4905 -0.8033 -0.3379
vn -0.4767 -0.8642 -0.1610
vn -0.6262 -0.6661 0.4052
vn 0.2370 -0.3337 0.9124
vn 0.3853 -0.3203 0.8654
vn -0.4841 -0.6077 -0.6295
vn -0.5080 -0.7073 -0.4916
vn -0.3901 -0.5686 -0.7243
vn -0.4591 -0.6307 -0.6256
vn 0.3338 0.9223 0.1947
vn 0.0398 -0.6375 0.7694
vn 0.2064 -0.6550 0.7269
vn -0.2940 -0.5906 -0.7515
vn -0.5440 -0.6425 -0.5397
vn -0.2628 -0.6372 -0.7245
vn -0.4716 -0.8760 -0.1005
vn -0.5705 -0.8192 0.0590
vn 0.4157 -0.5043 -0.7569
vn 0.1892 -0.6128 -0.7673
vn -0.5262 -0.5887 -0.6136
vn -0.6642 -0.7255 0.1803
vn -0.7195 -0.6315 0.2891
vn 0.6855 -0.3804 -0.6208
vn 0.5828 -0.4014 -0.7065
vn -0.7124 -0.5884 0.3824
vn -0.7144 -0.5983 0.3628
vn 0.6400 -0.5406 -0.5461
vn 0.7120 -0.4513 -0.5379
vn -0.7576 -0.6004 0.2561
vn -0.7925 -0.5911 0.1501
vn 0.4257 -0.5511 -0.7177
vn 0.5211 -0.5632 -0.6413
vn -0.8256 -0.5524 0.1146
vn -0.7065 -0.5433 0.4535
vn 0.5310 -0.5566 -0.6389
vn 0.3736 -0.5195 -0.7685
vn 0.6485 0.7384 0.1849
vn 0.1572 0.7068 -0.6897
vn -0.0967 0.6391 -0.7630
vn 0.8069 0.5621 -0.1817
vn -0.1160 0.7441 -0.6579
vn -0.1226 0.5268 -0.8411
vn -0.1830 0.8300 -0.5269
vn 0.5461 0.8135 -0.1999
vn 0.4004 0.9091 -0.1148
vn 0.2661 0.9592 0.0952
vn 0.3635 -0.8569 0.3655
vn 0.1714 0.8813 0.4404
vn 0.6560 -0.7333 0.1790
vn -0.8275 0.5574 -0.0676
vn 0.1587 0.7240 0.6713
vn -0.8799 0.4476 0.1595
vn -0.0184 0.5931 0.8049
vn 0.6848 0.6942 -0.2217
vn 0.1033 -0.6333 0.7670
vn -0.8298 -0.5360 0.1552
vn 0.1202 -0.7415 0.6601
vn 0.1324 -0.5099 0.8500
vn 0.1864 -0.8284 0.5282
vn -0.5542 -0.8088 0.1968
vn -0.4061 -0.9068 0.1128
vn -0.2714 -0.9574 -0.0984
vn -0.7199 -0.6221 -0.3077
vn -0.1812 -0.8760 -0.4470
vn -0.5065 -0.7913 -0.3424
vn 0.8467 -0.5239 0.0931
vn -0.1869 -0.7061 -0.6829
vn 0.9053 -0.4095 -0.1125
vn -0.0274 -0.5854 -0.8103
vn -0.6970 -0.6841 0.2150
vn 0.4216 -0.7840 -0.4557
vn -0.2325 -0.7926 -0.5637
vn -0.4400 -0.6750 -0.5922
vn 0.5640 -0.7302 0.3856
vn 0.4767 -0.8395 0.2607
vn 0.3841 -0.8543 -0.3503
vn -0.6021 -0.5543 -0.5747
vn -0.7172 -0.5023 -0.4830
vn 0.6842 -0.4560 0.5692
vn 0.6462 -0.5958 0.4770
vn 0.6389 -0.3742 0.6722
vn 0.6592 -0.4745 0.5834
vn -0.3589 0.8594 -0.3641
vn -0.3719 -0.8277 -0.4203
vn -0.5064 -0.8028 -0.3147
vn 0.5620 -0.3702 0.7397
vn 0.7006 -0.5264 0.4818
vn -0.6463 0.7434 -0.1721
vn -0.1599 -0.9485 0.2735
vn -0.1691 -0.9470 -0.2731
vn -0.8319 -0.4475 0.3282
vn -0.3326 -0.4614 -0.8224
vn -0.2291 -0.3035 0.9249
vn -0.9659 -0.2585 0.0152
vn -0.2484 -0.3014 -0.9206
vn -0.5412 0.5917 0.5976
vn -0.7873 0.5611 -0.2557
vn -0.2068 0.9480 -0.2421
vn -0.2960 0.7632 -0.5744
vn -0.5609 0.5917 -0.5790
vn -0.3330 0.9429 0.0052
vn -0.7087 0.7054 0.0111
vn -0.7789 0.5611 0.2803
vn -0.2036 0.9478 0.2456
vn -0.2855 0.7590 0.5851
vn -0.0413 0.6636 0.7470
vn -0.0807 0.3239 -0.9426
vn -0.3135 0.1360 -0.9398
vn -0.5815 0.2591 -0.7712
vn -0.9454 0.2051 -0.2532
vn -0.9985 0.0532 0.0157
vn -0.9370 0.2051 0.2828
vn -0.5557 0.2600 0.7897
vn -0.2974 0.1428 0.9440
vn -0.0545 0.3239 0.9445
vn -0.8213 0.0161 -0.5703
vn -0.7710 -0.2932 -0.5653
vn -0.8418 -0.4475 -0.3019
vn -0.8030 0.0161 0.5958
vn -0.7529 -0.2932 0.5892
vn -0.3176 -0.4591 0.8296
vn -0.2379 -0.6405 -0.7302
vn -0.3120 -0.8665 -0.3897
vn -0.6310 -0.7534 -0.1848
vn -0.6249 -0.7534 0.2046
vn -0.3060 -0.8656 0.3963
vn -0.2200 -0.6435 0.7331
vn -0.0622 0.6631 -0.7459
vn 0.1599 -0.9485 0.2735
vn 0.1691 -0.9470 -0.2731
vn 0.8319 -0.4475 0.3282
vn 0.3326 -0.4614 -0.8224
vn 0.2291 -0.3035 0.9249
vn 0.9659 -0.2585 0.0152
vn 0.2484 -0.3014 -0.9206
vn 0.5412 0.5917 0.5976
vn 0.7873 0.5611 -0.2557
vn 0.2068 0.9480 -0.2421
vn 0.2960 0.7632 -0.5744
vn 0.5609 0.5917 -0.5790
vn 0.3330 0.9429 0.0052
vn 0.7087 0.7054 0.0111
vn 0.7789 0.5611 0.2803
vn 0.2036 0.9478 0.2456
vn 0.2854 0.7590 0.5851
vn 0.0413 0.6636 0.7470
vn -1.0000 -0.0000 -0.0000
vn 0.0807 0.3239 -0.9426
vn 0.3135 0.1360 -0.9398
vn 0.5815 0.2591 -0.7712
vn 0.9454 0.2051 -0.2532
vn 0.9985 0.0532 0.0157
vn 0.9370 0.2051 0.2828
vn 0.5557 0.2600 0.7897
vn 0.2974 0.1428 0.9440
vn 0.0545 0.3239 0.9445
vn 0.8213 0.0161 -0.5703
vn 0.7710 -0.2932 -0.5653
vn 0.8418 -0.4475 -0.3019
vn 0.8030 0.0161 0.5958
vn 0.7529 -0.2932 0.5892
vn 0.3176 -0.4591 0.8296
vn 0.2379 -0.6405 -0.7302
vn 0.3120 -0.8665 -0.3897
vn 0.6310 -0.7534 -0.1848
vn 0.6249 -0.7534 0.2046
vn 0.3060 -0.8656 0.3963
vn 0.2200 -0.6435 0.7331
vn 0.0622 0.6631 -0.7459
vn 0.2855 0.7590 0.5851
usemtl Wood
s off
f 18//1 2//1 4//1 19//1
f 19//2 4//2 6//2 25//2
f 25//3 6//3 8//3 31//3
f 31//4 8//4 10//4 37//4
f 4//5 2//5 12//5 10//5 8//5 6//5
f 37//6 10//6 12//6 43//6
f 43//7 12//7 2//7 18//7
f 1//8 3//8 5//8 7//8 9//8 11//8
f 11//9 48//9 13//9 1//9
f 48//10 47//10 14//10 13//10
f 47//11 46//11 15//11 14//11
f 46//12 45//12 16//12 15//12
f 45//13 44//13 17//13 16//13
f 44//14 43//14 18//14 17//14
f 9//15 42//15 48//15 11//15
f 42//16 41//16 47//16 48//16
f 41//17 40//17 46//17 47//17
f 40//18 39//18 45//18 46//18
f 39//19 38//19 44//19 45//19
f 38//20 37//20 43//20 44//20
f 7//21 36//21 42//21 9//21
f 36//22 35//22 41//22 42//22
f 35//23 34//23 40//23 41//23
f 34//24 33//24 39//24 40//24
f 33//25 32//25 38//25 39//25
f 32//26 31//26 37//26 38//26
f 5//27 30//27 36//27 7//27
f 30//28 29//28 35//28 36//28
f 29//29 28//29 34//29 35//29
f 28//30 27//30 33//30 34//30
f 27//31 26//31 32//31 33//31
f 26//32 25//32 31//32 32//32
f 3//33 24//33 30//33 5//33
f 24//34 23//34 29//34 30//34
f 23//35 22//35 28//35 29//35
f 22//36 21//36 27//36 28//36
f 21//37 20//37 26//37 27//37
f 20//38 19//38 25//38 26//38
f 1//39 13//39 24//39 3//39
f 13//40 14//40 23//40 24//40
f 14//41 15//41 22//41 23//41
f 15//42 16//42 21//42 22//42
f 16//43 17//43 20//43 21//43
f 17//44 18//44 19//44 20//44
usemtl Green_Tree
f 65//45 69//45 51//45 49//45
f 51//46 50//46 66//46 68//46
f 65//47 53//47 52//47 69//47
f 49//48 51//48 68//48 64//48
f 70//49 72//49 52//49 53//49
f 69//50 52//50 54//50 67//50
f 72//51 71//51 54//51 52//51
f 70//52 56//52 55//52 72//52
f 73//53 75//53 55//53 56//53
f 72//54 55//54 57//54 71//54
f 75//55 74//55 57//55 55//55
f 73//56 59//56 58//56 75//56
f 76//57 78//57 58//57 59//57
f 75//58 58//58 60//58 74//58
f 78//59 77//59 60//59 58//59
f 76//60 61//60 62//60 78//60
f 78//61 62//61 63//61 77//61
f 61//62 79//62 62//62
f 62//63 79//63 63//63
f 69//64 67//64 50//64 51//64
f 96//65 100//65 82//65 80//65
f 82//66 81//66 97//66 99//66
f 96//67 84//67 83//67 100//67
f 80//68 82//68 99//68 95//68
f 377//69 380//69 378//69 375//69
f 100//70 83//70 85//70 98//70
f 84//71 87//71 86//71 83//71
f 101//72 103//72 86//72 87//72
f 103//73 102//73 88//73 86//73
f 101//74 90//74 89//74 103//74
f 104//75 106//75 89//75 90//75
f 103//76 89//76 91//76 102//76
f 106//77 105//77 91//77 89//77
f 104//78 92//78 93//78 106//78
f 106//79 93//79 94//79 105//79
f 92//80 107//80 93//80
f 93//81 107//81 94//81
f 100//82 98//82 81//82 82//82
f 121//83 125//83 110//83 108//83
f 110//84 109//84 122//84 124//84
f 121//85 112//85 111//85 125//85
f 108//86 110//86 124//86 120//86
f 126//87 128//87 111//87 112//87
f 125//88 111//88 113//88 123//88
f 128//89 127//89 113//89 111//89
f 126//90 115//90 114//90 128//90
f 129//91 131//91 114//91 115//91
f 128//92 114//92 116//92 127//92
f 131//93 130//93 116//93 114//93
f 134//94 133//94 130//94 131//94
f 424//95 421//95 423//95 426//95
f 132//96 117//96 118//96 134//96
f 134//97 118//97 119//97 133//97
f 117//98 135//98 118//98
f 118//99 135//99 119//99
f 125//100 123//100 109//100 110//100
f 233//101 237//101 222//101 220//101
f 222//102 221//102 234//102 236//102
f 233//103 224//103 223//103 237//103
f 220//104 222//104 236//104 232//104
f 238//105 240//105 223//105 224//105
f 237//106 223//106 225//106 235//106
f 240//107 239//107 225//107 223//107
f 238//108 227//108 226//108 240//108
f 241//109 243//109 226//109 227//109
f 240//110 226//110 228//110 239//110
f 243//111 242//111 228//111 226//111
f 246//112 245//112 242//112 243//112
f 536//113 533//113 535//113 538//113
f 244//114 229//114 230//114 246//114
f 246//115 230//115 231//115 245//115
f 229//116 247//116 230//116
f 230//117 247//117 231//117
f 237//118 235//118 221//118 222//118
f 264//119 268//119 250//119 248//119
f 250//120 249//120 265//120 267//120
f 264//121 252//121 251//121 268//121
f 248//122 250//122 267//122 263//122
f 269//123 271//123 251//123 252//123
f 268//124 251//124 253//124 266//124
f 271//125 270//125 253//125 251//125
f 269//126 255//126 254//126 271//126
f 272//127 274//127 254//127 255//127
f 271//128 254//128 256//128 270//128
f 274//129 273//129 256//129 254//129
f 272//130 258//130 257//130 274//130
f 275//131 277//131 257//131 258//131
f 274//132 257//132 259//132 273//132
f 277//133 276//133 259//133 257//133
f 275//134 260//134 261//134 277//134
f 277//135 261//135 262//135 276//135
f 260//136 278//136 261//136
f 261//137 278//137 262//137
f 268//138 266//138 249//138 250//138
f 326//139 330//139 312//139 310//139
f 312//140 311//140 327//140 329//140
f 326//141 314//141 313//141 330//141
f 310//142 312//142 329//142 325//142
f 331//143 333//143 313//143 314//143
f 330//144 313//144 315//144 328//144
f 333//145 332//145 315//145 313//145
f 331//146 317//146 316//146 333//146
f 334//147 336//147 316//147 317//147
f 333//148 316//148 318//148 332//148
f 336//149 335//149 318//149 316//149
f 334//150 320//150 319//150 336//150
f 337//151 339//151 319//151 320//151
f 336//152 319//152 321//152 335//152
f 339//153 338//153 321//153 319//153
f 337//154 322//154 323//154 339//154
f 339//155 323//155 324//155 338//155
f 322//156 340//156 323//156
f 323//157 340//157 324//157
f 330//158 328//158 311//158 312//158
f 357//159 341//159 343//159 361//159
f 343//160 360//160 358//160 342//160
f 357//161 361//161 344//161 345//161
f 341//162 356//162 360//162 343//162
f 362//163 345//163 344//163 364//163
f 361//164 359//164 346//164 344//164
f 364//165 344//165 346//165 363//165
f 362//166 364//166 347//166 348//166
f 365//167 348//167 347//167 367//167
f 364//168 363//168 349//168 347//168
f 367//169 347//169 349//169 366//169
f 365//170 367//170 350//170 351//170
f 368//171 351//171 350//171 370//171
f 367//172 366//172 352//172 350//172
f 370//173 350//173 352//173 369//173
f 368//174 370//174 354//174 353//174
f 370//175 369//175 355//175 354//175
f 353//176 354//176 371//176
f 354//177 355//177 371//177
f 361//178 343//178 342//178 359//178
f 388//179 372//179 374//179 392//179
f 374//180 391//180 389//180 373//180
f 388//181 392//181 375//181 376//181
f 372//182 387//182 391//182 374//182
f 87//183 84//183 376//183 379//183
f 392//184 390//184 377//184 375//184
f 375//185 378//185 379//185 376//185
f 393//186 379//186 378//186 395//186
f 395//187 378//187 380//187 394//187
f 393//188 395//188 381//188 382//188
f 396//189 382//189 381//189 398//189
f 395//190 394//190 383//190 381//190
f 398//191 381//191 383//191 397//191
f 396//192 398//192 385//192 384//192
f 398//193 397//193 386//193 385//193
f 384//194 385//194 399//194
f 385//195 386//195 399//195
f 392//196 374//196 373//196 390//196
f 413//197 400//197 402//197 417//197
f 402//198 416//198 414//198 401//198
f 413//199 417//199 403//199 404//199
f 400//200 412//200 416//200 402//200
f 418//201 404//201 403//201 420//201
f 417//202 415//202 405//202 403//202
f 420//203 403//203 405//203 419//203
f 418//204 420//204 406//204 407//204
f 421//205 407//205 406//205 423//205
f 420//206 419//206 408//206 406//206
f 423//207 406//207 408//207 422//207
f 426//208 423//208 422//208 425//208
f 132//209 129//209 421//209 424//209
f 424//210 426//210 410//210 409//210
f 426//211 425//211 411//211 410//211
f 409//212 410//212 427//212
f 410//213 411//213 427//213
f 417//214 402//214 401//214 415//214
f 525//215 512//215 514//215 529//215
f 514//216 528//216 526//216 513//216
f 525//217 529//217 515//217 516//217
f 512//218 524//218 528//218 514//218
f 530//219 516//219 515//219 532//219
f 529//220 527//220 517//220 515//220
f 532//221 515//221 517//221 531//221
f 530//222 532//222 518//222 519//222
f 533//223 519//223 518//223 535//223
f 532//224 531//224 520//224 518//224
f 535//225 518//225 520//225 534//225
f 538//226 535//226 534//226 537//226
f 244//227 241//227 533//227 536//227
f 536//228 538//228 522//228 521//228
f 538//229 537//229 523//229 522//229
f 521//230 522//230 539//230
f 522//231 523//231 539//231
f 529//232 514//232 513//232 527//232
f 556//233 540//233 542//233 560//233
f 542//234 559//234 557//234 541//234
f 556//235 560//235 543//235 544//235
f 540//236 555//236 559//236 542//236
f 561//237 544//237 543//237 563//237
f 560//238 558//238 545//238 543//238
f 563//239 543//239 545//239 562//239
f 561//240 563//240 546//240 547//240
f 564//241 547//241 546//241 566//241
f 563//242 562//242 548//242 546//242
f 566//243 546//243 548//243 565//243
f 564//244 566//244 549//244 550//244
f 567//245 550//245 549//245 569//245
f 566//246 565//246 551//246 549//246
f 569//247 549//247 551//247 568//247
f 567//248 569//248 553//248 552//248
f 569//249 568//249 554//249 553//249
f 552//250 553//250 570//250
f 553//251 554//251 570//251
f 560//252 542//252 541//252 558//252
f 618//253 602//253 604//253 622//253
f 604//254 621//254 619//254 603//254
f 618//255 622//255 605//255 606//255
f 602//256 617//256 621//256 604//256
f 623//257 606//257 605//257 625//257
f 622//258 620//258 607//258 605//258
f 625//259 605//259 607//259 624//259
f 623//260 625//260 608//260 609//260
f 626//261 609//261 608//261 628//261
f 625//262 624//262 610//262 608//262
f 628//263 608//263 610//263 627//263
f 626//264 628//264 611//264 612//264
f 629//265 612//265 611//265 631//265
f 628//266 627//266 613//266 611//266
f 631//267 611//267 613//267 630//267
f 629//268 631//268 615//268 614//268
f 631//269 630//269 616//269 615//269
f 614//270 615//270 632//270
f 615//271 616//271 632//271
f 622//272 604//272 603//272 620//272
f 64//273 68//273 360//273 356//273
f 49//274 64//274 356//274 341//274
f 65//275 49//275 341//275 357//275
f 50//276 67//276 359//276 342//276
f 66//277 50//277 342//277 358//277
f 68//278 66//278 358//278 360//278
f 53//279 65//279 357//279 345//279
f 70//280 53//280 345//280 362//280
f 54//281 71//281 363//281 346//281
f 67//282 54//282 346//282 359//282
f 56//283 70//283 362//283 348//283
f 73//284 56//284 348//284 365//284
f 57//285 74//285 366//285 349//285
f 71//286 57//286 349//286 363//286
f 59//287 73//287 365//287 351//287
f 76//288 59//288 351//288 368//288
f 60//289 77//289 369//289 352//289
f 74//290 60//290 352//290 366//290
f 61//291 76//291 368//291 353//291
f 79//292 61//292 353//292 371//292
f 63//293 79//293 371//293 355//293
f 77//294 63//294 355//294 369//294
f 95//295 99//295 391//295 387//295
f 80//296 95//296 387//296 372//296
f 96//297 80//297 372//297 388//297
f 81//298 98//298 390//298 373//298
f 97//299 81//299 373//299 389//299
f 99//300 97//300 389//300 391//300
f 84//301 96//301 388//301 376//301
f 85//302 88//302 380//302 377//302
f 98//303 85//303 377//303 390//303
f 101//304 87//304 379//304 393//304
f 88//305 102//305 394//305 380//305
f 90//306 101//306 393//306 382//306
f 104//307 90//307 382//307 396//307
f 91//308 105//308 397//308 383//308
f 102//309 91//309 383//309 394//309
f 92//310 104//310 396//310 384//310
f 107//311 92//311 384//311 399//311
f 94//312 107//312 399//312 386//312
f 105//313 94//313 386//313 397//313
f 120//314 124//314 416//314 412//314
f 108//315 120//315 412//315 400//315
f 121//316 108//316 400//316 413//316
f 109//317 123//317 415//317 401//317
f 122//318 109//318 401//318 414//318
f 124//319 122//319 414//319 416//319
f 112//320 121//320 413//320 404//320
f 126//321 112//321 404//321 418//321
f 113//322 127//322 419//322 405//322
f 123//323 113//323 405//323 415//323
f 115//324 126//324 418//324 407//324
f 129//325 115//325 407//325 421//325
f 116//326 130//326 422//326 408//326
f 127//327 116//327 408//327 419//327
f 130//328 133//328 425//328 422//328
f 117//329 132//329 424//329 409//329
f 135//330 117//330 409//330 427//330
f 119//331 135//331 427//331 411//331
f 133//332 119//332 411//332 425//332
f 232//333 236//333 528//333 524//333
f 220//334 232//334 524//334 512//334
f 233//335 220//335 512//335 525//335
f 221//336 235//336 527//336 513//336
f 234//337 221//337 513//337 526//337
f 236//338 234//338 526//338 528//338
f 224//339 233//339 525//339 516//339
f 238//340 224//340 516//340 530//340
f 225//341 239//341 531//341 517//341
f 235//342 225//342 517//342 527//342
f 227//343 238//343 530//343 519//343
f 241//344 227//344 519//344 533//344
f 228//345 242//345 534//345 520//345
f 239//346 228//346 520//346 531//346
f 242//347 245//347 537//347 534//347
f 229//348 244//348 536//348 521//348
f 247//349 229//349 521//349 539//349
f 231//350 247//350 539//350 523//350
f 245//351 231//351 523//351 537//351
f 263//352 267//352 559//352 555//352
f 248//353 263//353 555//353 540//353
f 264//354 248//354 540//354 556//354
f 249//355 266//355 558//355 541//355
f 265//356 249//356 541//356 557//356
f 267//357 265//357 557//357 559//357
f 252//358 264//358 556//358 544//358
f 269//359 252//359 544//359 561//359
f 253//360 270//360 562//360 545//360
f 266//361 253//361 545//361 558//361
f 255//362 269//362 561//362 547//362
f 272//363 255//363 547//363 564//363
f 256//364 273//364 565//364 548//364
f 270//365 256//365 548//365 562//365
f 258//366 272//366 564//366 550//366
f 275//367 258//367 550//367 567//367
f 259//368 276//368 568//368 551//368
f 273//369 259//369 551//369 565//369
f 260//370 275//370 567//370 552//370
f 278//371 260//371 552//371 570//371
f 262//372 278//372 570//372 554//372
f 276//373 262//373 554//373 568//373
f 325//374 329//374 621//374 617//374
f 310//375 325//375 617//375 602//375
f 326//376 310//376 602//376 618//376
f 311//377 328//377 620//377 603//377
f 327//378 311//378 603//378 619//378
f 329//379 327//379 619//379 621//379
f 314//380 326//380 618//380 606//380
f 331//381 314//381 606//381 623//381
f 315//382 332//382 624//382 607//382
f 328//383 315//383 607//383 620//383
f 317//384 331//384 623//384 609//384
f 334//385 317//385 609//385 626//385
f 318//386 335//386 627//386 610//386
f 332//387 318//387 610//387 624//387
f 320//388 334//388 626//388 612//388
f 337//389 320//389 612//389 629//389
f 321//390 338//390 630//390 613//390
f 335//391 321//391 613//391 627//391
f 322//392 337//392 629//392 614//392
f 340//393 322//393 614//393 632//393
f 324//394 340//394 632//394 616//394
f 338//395 324//395 616//395 630//395
f 132//396 134//396 131//396 129//396
f 83//397 86//397 88//397 85//397
f 244//398 246//398 243//398 241//398
f 646//399 650//399 635//399 633//399
f 635//400 634//400 647//400 649//400
f 646//401 637//401 636//401 650//401
f 633//402 635//402 649//402 645//402
f 651//403 653//403 636//403 637//403
f 650//404 636//404 638//404 648//404
f 653//405 652//405 638//405 636//405
f 651//406 640//406 639//406 653//406
f 654//407 656//407 639//407 640//407
f 653//408 639//408 641//408 652//408
f 656//409 655//409 641//409 639//409
f 659//410 658//410 655//410 656//410
f 800//411 797//411 799//411 802//411
f 657//412 642//412 643//412 659//412
f 659//413 643//413 644//413 658//413
f 642//414 660//414 643//414
f 643//415 660//415 644//415
f 650//416 648//416 634//416 635//416
f 699//417 703//417 688//417 686//417
f 688//418 687//418 700//418 702//418
f 699//419 690//419 689//419 703//419
f 686//420 688//420 702//420 698//420
f 704//421 706//421 689//421 690//421
f 703//422 689//422 691//422 701//422
f 706//423 705//423 691//423 689//423
f 704//424 693//424 692//424 706//424
f 707//425 709//425 692//425 693//425
f 706//426 692//426 694//426 705//426
f 709//427 708//427 694//427 692//427
f 712//428 711//428 708//428 709//428
f 853//429 850//429 852//429 855//429
f 710//430 695//430 696//430 712//430
f 712//431 696//431 697//431 711//431
f 695//432 713//432 696//432
f 696//433 713//433 697//433
f 703//434 701//434 687//434 688//434
f 730//435 734//435 716//435 714//435
f 716//436 715//436 731//436 733//436
f 730//437 718//437 717//437 734//437
f 714//438 716//438 733//438 729//438
f 735//439 737//439 717//439 718//439
f 734//440 717//440 719//440 732//440
f 737//441 736//441 719//441 717//441
f 735//442 721//442 720//442 737//442
f 738//443 740//443 720//443 721//443
f 737//444 720//444 722//444 736//444
f 740//445 739//445 722//445 720//445
f 738//446 724//446 723//446 740//446
f 741//447 743//447 723//447 724//447
f 740//448 723//448 725//448 739//448
f 743//449 742//449 725//449 723//449
f 741//450 726//450 727//450 743//450
f 743//451 727//451 728//451 742//451
f 726//452 744//452 727//452
f 727//453 744//453 728//453
f 734//454 732//454 715//454 716//454
f 761//455 765//455 747//455 745//455
f 747//456 746//456 762//456 764//456
f 761//457 749//457 748//457 765//457
f 745//458 747//458 764//458 760//458
f 766//459 768//459 748//459 749//459
f 765//460 748//460 750//460 763//460
f 768//461 767//461 750//461 748//461
f 766//462 752//462 751//462 768//462
f 769//463 771//463 751//463 752//463
f 768//464 751//464 753//464 767//464
f 771//465 770//465 753//465 751//465
f 769//466 755//466 754//466 771//466
f 772//467 774//467 754//467 755//467
f 771//468 754//468 756//468 770//468
f 774//469 773//469 756//469 754//469
f 772//470 757//470 758//470 774//470
f 774//471 758//471 759//471 773//471
f 757//472 775//472 758//472
f 758//473 775//473 759//473
f 765//474 763//474 746//474 747//474
f 789//475 776//475 778//475 793//475
f 778//476 792//476 790//476 777//476
f 789//477 793//477 779//477 780//477
f 776//478 788//478 792//478 778//478
f 794//479 780//479 779//479 796//479
f 793//480 791//480 781//480 779//480
f 796//481 779//481 781//481 795//481
f 794//482 796//482 782//482 783//482
f 797//483 783//483 782//483 799//483
f 796//484 795//484 784//484 782//484
f 799//485 782//485 784//485 798//485
f 802//486 799//486 798//486 801//486
f 657//487 654//487 797//487 800//487
f 800//488 802//488 786//488 785//488
f 802//489 801//489 787//489 786//489
f 785//490 786//490 803//490
f 786//491 787//491 803//491
f 793//492 778//492 777//492 791//492
f 842//493 829//493 831//493 846//493
f 831//494 845//494 843//494 830//494
f 842//495 846//495 832//495 833//495
f 829//496 841//496 845//496 831//496
f 847//497 833//497 832//497 849//497
f 846//498 844//498 834//498 832//498
f 849//499 832//499 834//499 848//499
f 847//500 849//500 835//500 836//500
f 850//501 836//501 835//501 852//501
f 849//502 848//502 837//502 835//502
f 852//503 835//503 837//503 851//503
f 855//504 852//504 851//504 854//504
f 710//505 707//505 850//505 853//505
f 853//506 855//506 839//506 838//506
f 855//507 854//507 840//507 839//507
f 838//508 839//508 856//508
f 839//509 840//509 856//509
f 846//510 831//510 830//510 844//510
f 873//511 857//511 859//511 877//511
f 859//512 876//512 874//512 858//512
f 873//513 877//513 860//513 861//513
f 857//514 872//514 876//514 859//514
f 878//515 861//515 860//515 880//515
f 877//516 875//516 862//516 860//516
f 880//517 860//517 862//517 879//517
f 878//518 880//518 863//518 864//518
f 881//519 864//519 863//519 883//519
f 880//520 879//520 865//520 863//520
f 883//521 863//521 865//521 882//521
f 881//522 883//522 866//522 867//522
f 884//523 867//523 866//523 886//523
f 883//524 882//524 868//524 866//524
f 886//525 866//525 868//525 885//525
f 884//526 886//526 870//526 869//526
f 886//527 885//527 871//527 870//527
f 869//528 870//528 887//528
f 870//529 871//529 887//529
f 877//530 859//530 858//530 875//530
f 904//531 888//531 890//531 908//531
f 890//532 907//532 905//532 889//532
f 904//533 908//533 891//533 892//533
f 888//534 903//534 907//534 890//534
f 909//535 892//535 891//535 911//535
f 908//536 906//536 893//536 891//536
f 911//537 891//537 893//537 910//537
f 909//538 911//538 894//538 895//538
f 912//539 895//539 894//539 914//539
f 911//540 910//540 896//540 894//540
f 914//541 894//541 896//541 913//541
f 912//542 914//542 897//542 898//542
f 915//543 898//543 897//543 917//543
f 914//544 913//544 899//544 897//544
f 917//545 897//545 899//545 916//545
f 915//546 917//546 901//546 900//546
f 917//547 916//547 902//547 901//547
f 900//548 901//548 918//548
f 901//549 902//549 918//549
f 908//550 890//550 889//550 906//550
f 645//551 649//551 792//551 788//551
f 633//552 645//552 788//552 776//552
f 646//553 633//553 776//553 789//553
f 634//554 648//554 791//554 777//554
f 647//555 634//555 777//555 790//555
f 649//556 647//556 790//556 792//556
f 637//557 646//557 789//557 780//557
f 651//558 637//558 780//558 794//558
f 638//559 652//559 795//559 781//559
f 648//560 638//560 781//560 791//560
f 640//561 651//561 794//561 783//561
f 654//562 640//562 783//562 797//562
f 641//563 655//563 798//563 784//563
f 652//564 641//564 784//564 795//564
f 655//565 658//565 801//565 798//565
f 642//566 657//566 800//566 785//566
f 660//567 642//567 785//567 803//567
f 644//568 660//568 803//568 787//568
f 658//569 644//569 787//569 801//569
f 698//570 702//570 845//570 841//570
f 686//571 698//571 841//571 829//571
f 699//572 686//572 829//572 842//572
f 687//573 701//573 844//573 830//573
f 700//574 687//574 830//574 843//574
f 702//575 700//575 843//575 845//575
f 690//576 699//576 842//576 833//576
f 704//577 690//577 833//577 847//577
f 691//578 705//578 848//578 834//578
f 701//579 691//579 834//579 844//579
f 693//580 704//580 847//580 836//580
f 707//581 693//581 836//581 850//581
f 694//582 708//582 851//582 837//582
f 705//583 694//583 837//583 848//583
f 708//584 711//584 854//584 851//584
f 695//585 710//585 853//585 838//585
f 713//586 695//586 838//586 856//586
f 697//587 713//587 856//587 840//587
f 711//588 697//588 840//588 854//588
f 729//589 733//589 876//589 872//589
f 714//590 729//590 872//590 857//590
f 730//591 714//591 857//591 873//591
f 715//592 732//592 875//592 858//592
f 731//593 715//593 858//593 874//593
f 733//594 731//594 874//594 876//594
f 718//595 730//595 873//595 861//595
f 735//596 718//596 861//596 878//596
f 719//597 736//597 879//597 862//597
f 732//598 719//598 862//598 875//598
f 721//599 735//599 878//599 864//599
f 738//600 721//600 864//600 881//600
f 722//601 739//601 882//601 865//601
f 736//602 722//602 865//602 879//602
f 724//603 738//603 881//603 867//603
f 741//604 724//604 867//604 884//604
f 725//605 742//605 885//605 868//605
f 739//606 725//606 868//606 882//606
f 726//607 741//607 884//607 869//607
f 744//608 726//608 869//608 887//608
f 728//609 744//609 887//609 871//609
f 742//610 728//610 871//610 885//610
f 760//611 764//611 907//611 903//611
f 745//612 760//612 903//612 888//612
f 761//613 745//613 888//613 904//613
f 746//614 763//614 906//614 889//614
f 762//615 746//615 889//615 905//615
f 764//616 762//616 905//616 907//616
f 749//617 761//617 904//617 892//617
f 766//618 749//618 892//618 909//618
f 750//619 767//619 910//619 893//619
f 763//620 750//620 893//620 906//620
f 752//621 766//621 909//621 895//621
f 769//622 752//622 895//622 912//622
f 753//623 770//623 913//623 896//623
f 767//624 753//624 896//624 910//624
f 755//625 769//625 912//625 898//625
f 772//626 755//626 898//626 915//626
f 756//627 773//627 916//627 899//627
f 770//628 756//628 899//628 913//628
f 757//629 772//629 915//629 900//629
f 775//630 757//630 900//630 918//630
f 759//631 775//631 918//631 902//631
f 773//632 759//632 902//632 916//632
f 657//633 659//633 656//633 654//633
f 710//634 712//634 709//634 707//634
usemtl DarkGreen_Tree
f 149//635 153//635 138//635 136//635
f 138//636 137//636 150//636 152//636
f 149//637 140//637 139//637 153//637
f 136//638 138//638 152//638 148//638
f 154//639 156//639 139//639 140//639
f 153//640 139//640 141//640 151//640
f 156//641 155//641 141//641 139//641
f 159//642 158//642 155//642 156//642
f 449//643 446//643 448//643 451//643
f 157//644 143//644 142//644 159//644
f 160//645 162//645 142//645 143//645
f 159//646 142//646 144//646 158//646
f 162//647 161//647 144//647 142//647
f 160//648 145//648 146//648 162//648
f 162//649 146//649 147//649 161//649
f 145//650 163//650 146//650
f 146//651 163//651 147//651
f 153//652 151//652 137//652 138//652
f 180//653 184//653 166//653 164//653
f 166//654 165//654 181//654 183//654
f 180//655 168//655 167//655 184//655
f 164//656 166//656 183//656 179//656
f 185//657 187//657 167//657 168//657
f 184//658 167//658 169//658 182//658
f 187//659 186//659 169//659 167//659
f 185//660 171//660 170//660 187//660
f 188//661 190//661 170//661 171//661
f 187//662 170//662 172//662 186//662
f 190//663 189//663 172//663 170//663
f 188//664 174//664 173//664 190//664
f 191//665 193//665 173//665 174//665
f 190//666 173//666 175//666 189//666
f 193//667 192//667 175//667 173//667
f 191//668 176//668 177//668 193//668
f 193//669 177//669 178//669 192//669
f 176//670 194//670 177//670
f 177//671 194//671 178//671
f 184//672 182//672 165//672 166//672
f 205//673 209//673 197//673 195//673
f 197//674 196//674 206//674 208//674
f 205//675 199//675 198//675 209//675
f 195//676 197//676 208//676 204//676
f 210//677 212//677 198//677 199//677
f 209//678 198//678 200//678 207//678
f 212//679 211//679 200//679 198//679
f 215//680 214//680 211//680 212//680
f 505//681 502//681 504//681 507//681
f 218//682 217//682 214//682 215//682
f 508//683 505//683 507//683 510//683
f 216//684 201//684 202//684 218//684
f 218//685 202//685 203//685 217//685
f 201//686 219//686 202//686
f 202//687 219//687 203//687
f 209//688 207//688 196//688 197//688
f 295//689 299//689 281//689 279//689
f 281//690 280//690 296//690 298//690
f 295//691 283//691 282//691 299//691
f 279//692 281//692 298//692 294//692
f 300//693 302//693 282//693 283//693
f 299//694 282//694 284//694 297//694
f 302//695 301//695 284//695 282//695
f 300//696 286//696 285//696 302//696
f 303//697 305//697 285//697 286//697
f 302//698 285//698 287//698 301//698
f 305//699 304//699 287//699 285//699
f 303//700 289//700 288//700 305//700
f 306//701 308//701 288//701 289//701
f 305//702 288//702 290//702 304//702
f 308//703 307//703 290//703 288//703
f 306//704 291//704 292//704 308//704
f 308//705 292//705 293//705 307//705
f 291//706 309//706 292//706
f 292//707 309//707 293//707
f 299//708 297//708 280//708 281//708
f 441//709 428//709 430//709 445//709
f 430//710 444//710 442//710 429//710
f 441//711 445//711 431//711 432//711
f 428//712 440//712 444//712 430//712
f 446//713 432//713 431//713 448//713
f 445//714 443//714 433//714 431//714
f 448//715 431//715 433//715 447//715
f 451//716 448//716 447//716 450//716
f 157//717 154//717 446//717 449//717
f 449//718 451//718 434//718 435//718
f 452//719 435//719 434//719 454//719
f 451//720 450//720 436//720 434//720
f 454//721 434//721 436//721 453//721
f 452//722 454//722 438//722 437//722
f 454//723 453//723 439//723 438//723
f 437//724 438//724 455//724
f 438//725 439//725 455//725
f 445//726 430//726 429//726 443//726
f 472//727 456//727 458//727 476//727
f 458//728 475//728 473//728 457//728
f 472//729 476//729 459//729 460//729
f 456//730 471//730 475//730 458//730
f 477//731 460//731 459//731 479//731
f 476//732 474//732 461//732 459//732
f 479//733 459//733 461//733 478//733
f 477//734 479//734 462//734 463//734
f 480//735 463//735 462//735 482//735
f 479//736 478//736 464//736 462//736
f 482//737 462//737 464//737 481//737
f 480//738 482//738 465//738 466//738
f 483//739 466//739 465//739 485//739
f 482//740 481//740 467//740 465//740
f 485//741 465//741 467//741 484//741
f 483//742 485//742 469//742 468//742
f 485//743 484//743 470//743 469//743
f 468//744 469//744 486//744
f 469//745 470//745 486//745
f 476//746 458//746 457//746 474//746
f 497//747 487//747 489//747 501//747
f 489//748 500//748 498//748 488//748
f 497//749 501//749 490//749 491//749
f 487//750 496//750 500//750 489//750
f 502//751 491//751 490//751 504//751
f 501//752 499//752 492//752 490//752
f 504//753 490//753 492//753 503//753
f 507//754 504//754 503//754 506//754
f 213//755 210//755 502//755 505//755
f 510//756 507//756 506//756 509//756
f 216//757 213//757 505//757 508//757
f 508//758 510//758 494//758 493//758
f 510//759 509//759 495//759 494//759
f 493//760 494//760 511//760
f 494//761 495//761 511//761
f 501//762 489//762 488//762 499//762
f 587//763 571//763 573//763 591//763
f 573//764 590//764 588//764 572//764
f 587//765 591//765 574//765 575//765
f 571//766 586//766 590//766 573//766
f 592//767 575//767 574//767 594//767
f 591//768 589//768 576//768 574//768
f 594//769 574//769 576//769 593//769
f 592//770 594//770 577//770 578//770
f 595//771 578//771 577//771 597//771
f 594//772 593//772 579//772 577//772
f 597//773 577//773 579//773 596//773
f 595//774 597//774 580//774 581//774
f 598//775 581//775 580//775 600//775
f 597//776 596//776 582//776 580//776
f 600//777 580//777 582//777 599//777
f 598//778 600//778 584//778 583//778
f 600//779 599//779 585//779 584//779
f 583//780 584//780 601//780
f 584//781 585//781 601//781
f 591//782 573//782 572//782 589//782
f 148//783 152//783 444//783 440//783
f 136//784 148//784 440//784 428//784
f 149//785 136//785 428//785 441//785
f 137//786 151//786 443//786 429//786
f 150//787 137//787 429//787 442//787
f 152//788 150//788 442//788 444//788
f 140//789 149//789 441//789 432//789
f 154//790 140//790 432//790 446//790
f 141//791 155//791 447//791 433//791
f 151//792 141//792 433//792 443//792
f 155//793 158//793 450//793 447//793
f 143//794 157//794 449//794 435//794
f 160//795 143//795 435//795 452//795
f 144//796 161//796 453//796 436//796
f 158//797 144//797 436//797 450//797
f 145//798 160//798 452//798 437//798
f 163//799 145//799 437//799 455//799
f 147//800 163//800 455//800 439//800
f 161//801 147//801 439//801 453//801
f 179//802 183//802 475//802 471//802
f 164//803 179//803 471//803 456//803
f 180//804 164//804 456//804 472//804
f 165//805 182//805 474//805 457//805
f 181//806 165//806 457//806 473//806
f 183//807 181//807 473//807 475//807
f 168//808 180//808 472//808 460//808
f 185//809 168//809 460//809 477//809
f 169//810 186//810 478//810 461//810
f 182//811 169//811 461//811 474//811
f 171//812 185//812 477//812 463//812
f 188//813 171//813 463//813 480//813
f 172//814 189//814 481//814 464//814
f 186//815 172//815 464//815 478//815
f 174//816 188//816 480//816 466//816
f 191//817 174//817 466//817 483//817
f 175//818 192//818 484//818 467//818
f 189//819 175//819 467//819 481//819
f 176//820 191//820 483//820 468//820
f 194//821 176//821 468//821 486//821
f 178//822 194//822 486//822 470//822
f 192//823 178//823 470//823 484//823
f 204//824 208//824 500//824 496//824
f 195//825 204//825 496//825 487//825
f 205//826 195//826 487//826 497//826
f 196//827 207//827 499//827 488//827
f 206//828 196//828 488//828 498//828
f 208//829 206//829 498//829 500//829
f 199//830 205//830 497//830 491//830
f 210//831 199//831 491//831 502//831
f 200//832 211//832 503//832 492//832
f 207//833 200//833 492//833 499//833
f 211//834 214//834 506//834 503//834
f 214//835 217//835 509//835 506//835
f 213//836 215//836 212//836 210//836
f 201//837 216//837 508//837 493//837
f 219//838 201//838 493//838 511//838
f 203//839 219//839 511//839 495//839
f 217//840 203//840 495//840 509//840
f 294//841 298//841 590//841 586//841
f 279//842 294//842 586//842 571//842
f 295//843 279//843 571//843 587//843
f 280//844 297//844 589//844 572//844
f 296//845 280//845 572//845 588//845
f 298//846 296//846 588//846 590//846
f 283//847 295//847 587//847 575//847
f 300//848 283//848 575//848 592//848
f 284//849 301//849 593//849 576//849
f 297//850 284//850 576//850 589//850
f 286//851 300//851 592//851 578//851
f 303//852 286//852 578//852 595//852
f 287//853 304//853 596//853 579//853
f 301//854 287//854 579//854 593//854
f 289//855 303//855 595//855 581//855
f 306//856 289//856 581//856 598//856
f 290//857 307//857 599//857 582//857
f 304//858 290//858 582//858 596//858
f 291//859 306//859 598//859 583//859
f 309//860 291//860 583//860 601//860
f 293//861 309//861 601//861 585//861
f 307//862 293//862 585//862 599//862
f 216//863 218//863 215//863 213//863
f 157//864 159//864 156//864 154//864
f 671//865 675//865 663//865 661//865
f 663//866 662//866 672//866 674//866
f 671//867 665//867 664//867 675//867
f 661//868 663//868 674//868 670//868
f 676//869 678//869 664//869 665//869
f 675//870 664//870 666//870 673//870
f 678//871 677//871 666//871 664//871
f 681//872 680//872 677//872 678//872
f 822//873 819//873 821//873 824//873
f 684//874 683//874 680//874 681//874
f 825//875 822//875 824//875 827//875
f 682//876 667//876 668//876 684//876
f 684//877 668//877 669//877 683//877
f 667//878 685//878 668//878
f 668//879 685//879 669//879
f 675//880 673//880 662//880 663//880
f 814//881 804//881 806//881 818//881
f 806//882 817//882 815//882 805//882
f 814//883 818//883 807//883 808//883
f 804//884 813//884 817//884 806//884
f 819//885 808//885 807//885 821//885
f 818//886 816//886 809//886 807//886
f 821//887 807//887 809//887 820//887
f 824//888 821//888 820//888 823//888
f 679//889 676//889 819//889 822//889
f 827//890 824//890 823//890 826//890
f 682//891 679//891 822//891 825//891
f 825//892 827//892 811//892 810//892
f 827//893 826//893 812//893 811//893
f 810//894 811//894 828//894
f 811//895 812//895 828//895
f 818//896 806//896 805//896 816//896
f 670//897 674//897 817//897 813//897
f 661//898 670//898 813//898 804//898
f 671//899 661//899 804//899 814//899
f 662//900 673//900 816//900 805//900
f 672//901 662//901 805//901 815//901
f 674//902 672//902 815//902 817//902
f 665//903 671//903 814//903 808//903
f 676//904 665//904 808//904 819//904
f 666//905 677//905 820//905 809//905
f 673//906 666//906 809//906 816//906
f 677//907 680//907 823//907 820//907
f 680//908 683//908 826//908 823//908
f 679//909 681//909 678//909 676//909
f 667//910 682//910 825//910 810//910
f 685//911 667//911 810//911 828//911
f 669//912 685//912 828//912 812//912
f 683//913 669//913 812//913 826//913
f 682//914 684//914 681//914 679//914
usemtl Coconuts
f 934//915 941//915 922//915
f 934//916 922//916 944//916
f 919//917 923//917 925//917
f 937//918 924//918 927//918
f 935//919 946//919 926//919
f 919//920 925//920 928//920
f 937//921 927//921 951//921
f 920//922 929//922 932//922
f 921//923 930//923 933//923
f 958//924 933//924 940//924
f 958//925 931//925 933//925
f 931//926 921//926 933//926
f 933//927 932//927 940//927
f 933//928 930//928 932//928
f 930//929 920//929 932//929
f 932//930 955//930 940//930
f 932//931 929//931 955//931
f 929//932 959//932 955//932
f 951//933 931//933 961//933
f 951//934 927//934 931//934
f 927//935 921//935 931//935
f 928//936 930//936 921//936
f 928//937 925//937 930//937
f 925//938 920//938 930//938
f 926//939 929//939 920//939
f 926//940 946//940 929//940
f 946//941 959//941 929//941
f 927//942 928//942 921//942
f 927//943 924//943 928//943
f 924//944 919//944 928//944
f 925//945 926//945 920//945
f 925//946 923//946 926//946
f 923//947 935//947 926//947
f 944//948 924//948 937//948
f 944//949 922//949 924//949
f 922//950 919//950 924//950
f 922//951 923//951 919//951
f 922//952 941//952 923//952
f 941//953 935//953 923//953
f 958//954 961//954 931//954
f 934//955 942//955 941//955
f 934//956 944//956 942//956
f 936//957 947//957 943//957
f 937//958 949//958 945//958
f 935//959 948//959 946//959
f 936//960 950//960 947//960
f 937//961 951//961 949//961
f 938//962 956//962 952//962
f 939//963 957//963 953//963
f 958//964 940//964 957//964
f 958//965 957//965 954//965
f 954//966 957//966 939//966
f 957//967 940//967 956//967
f 957//968 956//968 953//968
f 953//969 956//969 938//969
f 956//970 940//970 955//970
f 956//971 955//971 952//971
f 952//972 955//972 959//972
f 955//973 940//973 960//973
f 951//974 961//974 954//974
f 951//975 954//975 949//975
f 949//976 954//976 939//976
f 950//977 939//977 953//977
f 950//978 953//978 947//978
f 947//979 953//979 938//979
f 948//980 938//980 952//980
f 948//981 952//981 946//981
f 946//982 952//982 959//982
f 949//983 939//983 950//983
f 949//984 950//984 945//984
f 945//985 950//985 936//985
f 947//986 938//986 948//986
f 947//987 948//987 943//987
f 943//988 948//988 935//988
f 944//989 937//989 945//989
f 944//990 945//990 942//990
f 942//991 945//991 936//991
f 942//992 936//992 943//992
f 942//993 943//993 941//993
f 941//994 943//994 935//994
f 960//973 940//973 958//973
f 958//995 954//995 961//995
f 977//915 984//915 965//915
f 977//916 965//916 987//916
f 962//917 966//917 968//917
f 980//918 967//918 970//918
f 978//919 989//919 969//919
f 962//920 968//920 971//920
f 980//921 970//921 994//921
f 963//922 972//922 975//922
f 964//923 973//923 976//923
f 1001//924 976//924 983//924
f 1001//925 974//925 976//925
f 974//926 964//926 976//926
f 976//927 975//927 983//927
f 976//928 973//928 975//928
f 973//929 963//929 975//929
f 975//930 998//930 983//930
f 975//931 972//931 998//931
f 972//932 1002//932 998//932
f 994//933 974//933 1004//933
f 994//934 970//934 974//934
f 970//935 964//935 974//935
f 971//936 973//936 964//936
f 971//937 968//937 973//937
f 968//938 963//938 973//938
f 969//939 972//939 963//939
f 969//940 989//940 972//940
f 989//941 1002//941 972//941
f 970//942 971//942 964//942
f 970//943 967//943 971//943
f 967//944 962//944 971//944
f 968//945 969//945 963//945
f 968//946 966//946 969//946
f 966//947 978//947 969//947
f 987//948 967//948 980//948
f 987//949 965//949 967//949
f 965//950 962//950 967//950
f 965//951 966//951 962//951
f 965//952 984//952 966//952
f 984//953 978//953 966//953
f 1001//954 1004//954 974//954
f 977//955 985//955 984//955
f 977//956 987//956 985//956
f 979//957 990//957 986//957
f 980//958 992//958 988//958
f 978//959 991//959 989//959
f 979//960 993//960 990//960
f 980//961 994//961 992//961
f 981//962 999//962 995//962
f 982//963 1000//963 996//963
f 1001//964 983//964 1000//964
f 1001//965 1000//965 997//965
f 997//966 1000//966 982//966
f 1000//967 983//967 999//967
f 1000//968 999//968 996//968
f 996//969 999//969 981//969
f 999//970 983//970 998//970
f 999//996 998//996 995//996
f 995//972 998//972 1002//972
f 998//973 983//973 1003//973
f 994//974 1004//974 997//974
f 994//975 997//975 992//975
f 992//976 997//976 982//976
f 993//977 982//977 996//977
f 993//978 996//978 990//978
f 990//979 996//979 981//979
f 991//980 981//980 995//980
f 991//981 995//981 989//981
f 989//982 995//982 1002//982
f 992//983 982//983 993//983
f 992//984 993//984 988//984
f 988//985 993//985 979//985
f 990//986 981//986 991//986
f 990//987 991//987 986//987
f 986//988 991//988 978//988
f 987//989 980//989 988//989
f 987//990 988//990 985//990
f 985//991 988//991 979//991
f 985//992 979//992 986//992
f 985//993 986//993 984//993
f 984//994 986//994 978//994
f 1003//973 983//973 1001//973
f 1001//995 997//995 1004//995
f 1020//915 1027//915 1008//915
f 1020//916 1008//916 1030//916
f 1005//917 1009//917 1011//917
f 1023//918 1010//918 1013//918
f 1021//919 1032//919 1012//919
f 1005//920 1011//920 1014//920
f 1023//921 1013//921 1037//921
f 1006//922 1015//922 1018//922
f 1007//923 1016//923 1019//923
f 1044//924 1019//924 1026//924
f 1044//925 1017//925 1019//925
f 1017//926 1007//926 1019//926
f 1019//927 1018//927 1026//927
f 1019//928 1016//928 1018//928
f 1016//929 1006//929 1018//929
f 1018//930 1041//930 1026//930
f 1018//931 1015//931 1041//931
f 1015//932 1045//932 1041//932
f 1037//933 1017//933 1047//933
f 1037//934 1013//934 1017//934
f 1013//935 1007//935 1017//935
f 1014//936 1016//936 1007//936
f 1014//937 1011//937 1016//937
f 1011//938 1006//938 1016//938
f 1012//939 1015//939 1006//939
f 1012//940 1032//940 1015//940
f 1032//941 1045//941 1015//941
f 1013//942 1014//942 1007//942
f 1013//943 1010//943 1014//943
f 1010//944 1005//944 1014//944
f 1011//945 1012//945 1006//945
f 1011//946 1009//946 1012//946
f 1009//947 1021//947 1012//947
f 1030//948 1010//948 1023//948
f 1030//949 1008//949 1010//949
f 1008//950 1005//950 1010//950
f 1008//951 1009//951 1005//951
f 1008//952 1027//952 1009//952
f 1027//953 1021//953 1009//953
f 1044//954 1047//954 1017//954
f 1020//955 1028//955 1027//955
f 1020//956 1030//956 1028//956
f 1022//957 1033//957 1029//957
f 1023//958 1035//958 1031//958
f 1021//959 1034//959 1032//959
f 1022//960 1036//960 1033//960
f 1023//961 1037//961 1035//961
f 1024//962 1042//962 1038//962
f 1025//963 1043//963 1039//963
f 1044//964 1026//964 1043//964
f 1044//965 1043//965 1040//965
f 1040//966 1043//966 1025//966
f 1043//967 1026//967 1042//967
f 1043//968 1042//968 1039//968
f 1039//969 1042//969 1024//969
f 1042//970 1026//970 1041//970
f 1042//996 1041//996 1038//996
f 1038//972 1041//972 1045//972
f 1041//973 1026//973 1046//973
f 1037//974 1047//974 1040//974
f 1037//975 1040//975 1035//975
f 1035//976 1040//976 1025//976
f 1036//977 1025//977 1039//977
f 1036//978 1039//978 1033//978
f 1033//979 1039//979 1024//979
f 1034//980 1024//980 1038//980
f 1034//981 1038//981 1032//981
f 1032//982 1038//982 1045//982
f 1035//983 1025//983 1036//983
f 1035//984 1036//984 1031//984
f 1031//985 1036//985 1022//985
f 1033//986 1024//986 1034//986
f 1033//987 1034//987 1029//987
f 1029//988 1034//988 1021//988
f 1030//989 1023//989 1031//989
f 1030//990 1031//990 1028//990
f 1028//991 1031//991 1022//991
f 1028//992 1022//992 1029//992
f 1028//993 1029//993 1027//993
f 1027//994 1029//994 1021//994
f 1046//973 1026//973 1044//973
f 1044//995 1040//995 1047//995
f 1063//915 1070//915 1051//915
f 1063//916 1051//916 1073//916
f 1048//917 1052//917 1054//917
f 1066//918 1053//918 1056//918
f 1064//919 1075//919 1055//919
f 1048//920 1054//920 1057//920
f 1066//921 1056//921 1080//921
f 1049//922 1058//922 1061//922
f 1050//923 1059//923 1062//923
f 1087//924 1062//924 1069//924
f 1087//925 1060//925 1062//925
f 1060//926 1050//926 1062//926
f 1062//927 1061//927 1069//927
f 1062//928 1059//928 1061//928
f 1059//929 1049//929 1061//929
f 1061//930 1084//930 1069//930
f 1061//931 1058//931 1084//931
f 1058//932 1088//932 1084//932
f 1080//933 1060//933 1090//933
f 1080//934 1056//934 1060//934
f 1056//935 1050//935 1060//935
f 1057//936 1059//936 1050//936
f 1057//937 1054//937 1059//937
f 1054//938 1049//938 1059//938
f 1055//939 1058//939 1049//939
f 1055//940 1075//940 1058//940
f 1075//941 1088//941 1058//941
f 1056//942 1057//942 1050//942
f 1056//943 1053//943 1057//943
f 1053//944 1048//944 1057//944
f 1054//945 1055//945 1049//945
f 1054//946 1052//946 1055//946
f 1052//947 1064//947 1055//947
f 1073//948 1053//948 1066//948
f 1073//949 1051//949 1053//949
f 1051//950 1048//950 1053//950
f 1051//951 1052//951 1048//951
f 1051//952 1070//952 1052//952
f 1070//953 1064//953 1052//953
f 1087//954 1090//954 1060//954
f 1063//955 1071//955 1070//955
f 1063//956 1073//956 1071//956
f 1065//957 1076//957 1072//957
f 1066//958 1078//958 1074//958
f 1064//959 1077//959 1075//959
f 1065//960 1079//960 1076//960
f 1066//961 1080//961 1078//961
f 1067//962 1085//962 1081//962
f 1068//963 1086//963 1082//963
f 1087//964 1069//964 1086//964
f 1087//965 1086//965 1083//965
f 1083//966 1086//966 1068//966
f 1086//967 1069//967 1085//967
f 1086//968 1085//968 1082//968
f 1082//969 1085//969 1067//969
f 1085//970 1069//970 1084//970
f 1085//996 1084//996 1081//996
f 1081//972 1084//972 1088//972
f 1084//973 1069//973 1089//973
f 1080//974 1090//974 1083//974
f 1080//975 1083//975 1078//975
f 1078//976 1083//976 1068//976
f 1079//977 1068//977 1082//977
f 1079//978 1082//978 1076//978
f 1076//979 1082//979 1067//979
f 1077//980 1067//980 1081//980
f 1077//981 1081//981 1075//981
f 1075//982 1081//982 1088//982
f 1078//983 1068//983 1079//983
f 1078//984 1079//984 1074//984
f 1074//985 1079//985 1065//985
f 1076//986 1067//986 1077//986
f 1076//987 1077//987 1072//987
f 1072//988 1077//988 1064//988
f 1073//989 1066//989 1074//989
f 1073//990 1074//990 1071//990
f 1071//991 1074//991 1065//991
f 1071//992 1065//992 1072//992
f 1071//993 1072//993 1070//993
f 1070//994 1072//994 1064//994
f 1089//973 1069//973 1087//973
f 1087//995 1083//995 1090//995
`,Hs=e({NATURE_ASSETS:()=>Us,carModelUrl:()=>Ts,loadNatureAsset:()=>Ws,preloadExploreAssets:()=>Gs}),Us={palm:{obj:Vs,mtl:Bs},palmAlt:{obj:zs,mtl:Rs},bamboo:{obj:Ds,mtl:Es},cactus:{obj:ks,mtl:Os},bush:{obj:js,mtl:As},grass:{obj:Fs,mtl:Ps},flower:{obj:Ns,mtl:Ms},mushroom:{obj:Ls,mtl:Is}};async function Ws(e){let t=new us().parse(e.mtl,``);t.preload();let n=new ws().setMaterials(t).parse(e.obj);return n.traverse(e=>{e instanceof pi&&(e.castShadow=!0,e.receiveShadow=!0,(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!(e instanceof Ua))return;let t={h:0,s:0,l:0};e.color.getHSL(t),e.color.setHSL(t.h,Math.min(.82,t.s*1.05),Math.min(.68,Math.max(.2,t.l*1.55+.08))),e.emissive.copy(e.color).multiplyScalar(.035),e.specular.setScalar(.06),e.shininess=6,e.side=2}))}),n}async function Gs(){let e=await fetch(Ts,{cache:`force-cache`});if(!e.ok)throw Error(`Unable to preload ${Ts}`);await e.blob()}export{hn as $,S as $n,Se as $t,wa as A,Re as An,Ui as At,jn as B,ka as Bn,ze as Bt,an as C,te as Cn,s as Ct,ee as D,Oa as Dn,Ea as Dt,D as E,ft as En,H as Et,K as F,za as Fn,$ as Ft,ji as G,So as Gn,je as Gt,wo as H,Gr as Hn,ve as Ht,_ as I,p as In,Rt as It,Or as J,yr as Jn,Ae as Jt,zi as K,Aa as Kn,Oe as Kt,Rn as L,Ai as Ln,oo as Lt,pt as M,k as Mn,Bo as Mt,ya as N,Qe as Nn,pa as Nt,_a as O,_e as On,Vo as Ot,yo as P,zn as Pn,ca as Pt,He as Q,x as Qn,xe as Qt,qi as R,Ti as Rn,ge as Rt,xa as S,Ba as Sn,a as St,Di as T,n as Tn,io as Tt,Ta as U,jr as Un,E as Ut,v as V,Ro as Vn,Le as Vt,Ko as W,R as Wn,ie as Wt,Xa as X,d as Xn,Ne as Xt,kr as Y,Ia as Yn,Me as Yt,Ve as Z,C as Zn,be as Zt,L as _,ue as _n,ct as _r,Wa as _t,w as a,Pe as an,I as ar,u as at,va as b,ne as bn,A as br,Va as bt,Ei as c,de as cn,nt as cr,Ze as ct,_r as d,ce as dn,ja as dr,Q as dt,Ce as en,g as er,na as et,X as f,T as fn,ot as fr,Lt as ft,U as g,me as gn,Fa as gr,ti as gt,r as h,pe as hn,cs as hr,pi as ht,Ts as i,De as in,F as ir,c as it,mn as j,ye as jn,Da as jt,Uo as k,Be as kn,Io as kt,er as l,oe as ln,nn as lr,go as lt,ga as m,Ie as mn,j as mr,B as mt,Hs as n,Te as nn,b as nr,sa as nt,lo as o,he as on,z as or,l as ot,f as p,Fe as pn,at as pr,Vt as pt,h as q,vr as qn,ke as qt,Ws as r,Ee as rn,m as rr,oa as rt,Xo as s,fe as sn,co as sr,Xe as st,Us as t,we as tn,y as tr,Ji as tt,ba as u,se as un,Nn as ur,Wo as ut,Sa as v,le as vn,Ma as vr,Ga as vt,rn as w,O as wn,o as wt,ha as x,re as xn,ut as xr,i as xt,Yo as y,ae as yn,dt as yr,Ha as yt,tt as z,Cr as zn,gt as zt};