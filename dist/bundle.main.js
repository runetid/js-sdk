!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react-admin"),require("ra-data-json-server"));else if("function"==typeof define&&define.amd)define(["react-admin","ra-data-json-server"],t);else{var r="object"==typeof exports?t(require("react-admin"),require("ra-data-json-server")):t(e["react-admin"],e["ra-data-json-server"]);for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(self,((e,t)=>(()=>{"use strict";var r={520:e=>{e.exports=t},872:t=>{t.exports=e}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{HttpHeaders:()=>r,HttpMethod:()=>o,authProviderCallback:()=>s,dataProviderCallback:()=>u});class e{constructor(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashStr(e,t=!1){return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(t){const r=e.hexChars,s=e.hexOut;let n,a,o,i;for(i=0;i<4;i+=1)for(a=8*i,n=t[i],o=0;o<8;o+=2)s[a+1+o]=r.charAt(15&n),n>>>=4,s[a+0+o]=r.charAt(15&n),n>>>=4;return s.join("")}static _md5cycle(e,t){let r=e[0],s=e[1],n=e[2],a=e[3];r+=(s&n|~s&a)+t[0]-680876936|0,r=(r<<7|r>>>25)+s|0,a+=(r&s|~r&n)+t[1]-389564586|0,a=(a<<12|a>>>20)+r|0,n+=(a&r|~a&s)+t[2]+606105819|0,n=(n<<17|n>>>15)+a|0,s+=(n&a|~n&r)+t[3]-1044525330|0,s=(s<<22|s>>>10)+n|0,r+=(s&n|~s&a)+t[4]-176418897|0,r=(r<<7|r>>>25)+s|0,a+=(r&s|~r&n)+t[5]+1200080426|0,a=(a<<12|a>>>20)+r|0,n+=(a&r|~a&s)+t[6]-1473231341|0,n=(n<<17|n>>>15)+a|0,s+=(n&a|~n&r)+t[7]-45705983|0,s=(s<<22|s>>>10)+n|0,r+=(s&n|~s&a)+t[8]+1770035416|0,r=(r<<7|r>>>25)+s|0,a+=(r&s|~r&n)+t[9]-1958414417|0,a=(a<<12|a>>>20)+r|0,n+=(a&r|~a&s)+t[10]-42063|0,n=(n<<17|n>>>15)+a|0,s+=(n&a|~n&r)+t[11]-1990404162|0,s=(s<<22|s>>>10)+n|0,r+=(s&n|~s&a)+t[12]+1804603682|0,r=(r<<7|r>>>25)+s|0,a+=(r&s|~r&n)+t[13]-40341101|0,a=(a<<12|a>>>20)+r|0,n+=(a&r|~a&s)+t[14]-1502002290|0,n=(n<<17|n>>>15)+a|0,s+=(n&a|~n&r)+t[15]+1236535329|0,s=(s<<22|s>>>10)+n|0,r+=(s&a|n&~a)+t[1]-165796510|0,r=(r<<5|r>>>27)+s|0,a+=(r&n|s&~n)+t[6]-1069501632|0,a=(a<<9|a>>>23)+r|0,n+=(a&s|r&~s)+t[11]+643717713|0,n=(n<<14|n>>>18)+a|0,s+=(n&r|a&~r)+t[0]-373897302|0,s=(s<<20|s>>>12)+n|0,r+=(s&a|n&~a)+t[5]-701558691|0,r=(r<<5|r>>>27)+s|0,a+=(r&n|s&~n)+t[10]+38016083|0,a=(a<<9|a>>>23)+r|0,n+=(a&s|r&~s)+t[15]-660478335|0,n=(n<<14|n>>>18)+a|0,s+=(n&r|a&~r)+t[4]-405537848|0,s=(s<<20|s>>>12)+n|0,r+=(s&a|n&~a)+t[9]+568446438|0,r=(r<<5|r>>>27)+s|0,a+=(r&n|s&~n)+t[14]-1019803690|0,a=(a<<9|a>>>23)+r|0,n+=(a&s|r&~s)+t[3]-187363961|0,n=(n<<14|n>>>18)+a|0,s+=(n&r|a&~r)+t[8]+1163531501|0,s=(s<<20|s>>>12)+n|0,r+=(s&a|n&~a)+t[13]-1444681467|0,r=(r<<5|r>>>27)+s|0,a+=(r&n|s&~n)+t[2]-51403784|0,a=(a<<9|a>>>23)+r|0,n+=(a&s|r&~s)+t[7]+1735328473|0,n=(n<<14|n>>>18)+a|0,s+=(n&r|a&~r)+t[12]-1926607734|0,s=(s<<20|s>>>12)+n|0,r+=(s^n^a)+t[5]-378558|0,r=(r<<4|r>>>28)+s|0,a+=(r^s^n)+t[8]-2022574463|0,a=(a<<11|a>>>21)+r|0,n+=(a^r^s)+t[11]+1839030562|0,n=(n<<16|n>>>16)+a|0,s+=(n^a^r)+t[14]-35309556|0,s=(s<<23|s>>>9)+n|0,r+=(s^n^a)+t[1]-1530992060|0,r=(r<<4|r>>>28)+s|0,a+=(r^s^n)+t[4]+1272893353|0,a=(a<<11|a>>>21)+r|0,n+=(a^r^s)+t[7]-155497632|0,n=(n<<16|n>>>16)+a|0,s+=(n^a^r)+t[10]-1094730640|0,s=(s<<23|s>>>9)+n|0,r+=(s^n^a)+t[13]+681279174|0,r=(r<<4|r>>>28)+s|0,a+=(r^s^n)+t[0]-358537222|0,a=(a<<11|a>>>21)+r|0,n+=(a^r^s)+t[3]-722521979|0,n=(n<<16|n>>>16)+a|0,s+=(n^a^r)+t[6]+76029189|0,s=(s<<23|s>>>9)+n|0,r+=(s^n^a)+t[9]-640364487|0,r=(r<<4|r>>>28)+s|0,a+=(r^s^n)+t[12]-421815835|0,a=(a<<11|a>>>21)+r|0,n+=(a^r^s)+t[15]+530742520|0,n=(n<<16|n>>>16)+a|0,s+=(n^a^r)+t[2]-995338651|0,s=(s<<23|s>>>9)+n|0,r+=(n^(s|~a))+t[0]-198630844|0,r=(r<<6|r>>>26)+s|0,a+=(s^(r|~n))+t[7]+1126891415|0,a=(a<<10|a>>>22)+r|0,n+=(r^(a|~s))+t[14]-1416354905|0,n=(n<<15|n>>>17)+a|0,s+=(a^(n|~r))+t[5]-57434055|0,s=(s<<21|s>>>11)+n|0,r+=(n^(s|~a))+t[12]+1700485571|0,r=(r<<6|r>>>26)+s|0,a+=(s^(r|~n))+t[3]-1894986606|0,a=(a<<10|a>>>22)+r|0,n+=(r^(a|~s))+t[10]-1051523|0,n=(n<<15|n>>>17)+a|0,s+=(a^(n|~r))+t[1]-2054922799|0,s=(s<<21|s>>>11)+n|0,r+=(n^(s|~a))+t[8]+1873313359|0,r=(r<<6|r>>>26)+s|0,a+=(s^(r|~n))+t[15]-30611744|0,a=(a<<10|a>>>22)+r|0,n+=(r^(a|~s))+t[6]-1560198380|0,n=(n<<15|n>>>17)+a|0,s+=(a^(n|~r))+t[13]+1309151649|0,s=(s<<21|s>>>11)+n|0,r+=(n^(s|~a))+t[4]-145523070|0,r=(r<<6|r>>>26)+s|0,a+=(s^(r|~n))+t[11]-1120210379|0,a=(a<<10|a>>>22)+r|0,n+=(r^(a|~s))+t[2]+718787259|0,n=(n<<15|n>>>17)+a|0,s+=(a^(n|~r))+t[9]-343485551|0,s=(s<<21|s>>>11)+n|0,e[0]=r+e[0]|0,e[1]=s+e[1]|0,e[2]=n+e[2]|0,e[3]=a+e[3]|0}start(){return this._dataLength=0,this._bufferLength=0,this._state.set(e.stateIdentity),this}appendStr(t){const r=this._buffer8,s=this._buffer32;let n,a,o=this._bufferLength;for(a=0;a<t.length;a+=1){if(n=t.charCodeAt(a),n<128)r[o++]=n;else if(n<2048)r[o++]=192+(n>>>6),r[o++]=63&n|128;else if(n<55296||n>56319)r[o++]=224+(n>>>12),r[o++]=n>>>6&63|128,r[o++]=63&n|128;else{if(n=1024*(n-55296)+(t.charCodeAt(++a)-56320)+65536,n>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");r[o++]=240+(n>>>18),r[o++]=n>>>12&63|128,r[o++]=n>>>6&63|128,r[o++]=63&n|128}o>=64&&(this._dataLength+=64,e._md5cycle(this._state,s),o-=64,s[0]=s[16])}return this._bufferLength=o,this}appendAsciiStr(t){const r=this._buffer8,s=this._buffer32;let n,a=this._bufferLength,o=0;for(;;){for(n=Math.min(t.length-o,64-a);n--;)r[a++]=t.charCodeAt(o++);if(a<64)break;this._dataLength+=64,e._md5cycle(this._state,s),a=0}return this._bufferLength=a,this}appendByteArray(t){const r=this._buffer8,s=this._buffer32;let n,a=this._bufferLength,o=0;for(;;){for(n=Math.min(t.length-o,64-a);n--;)r[a++]=t[o++];if(a<64)break;this._dataLength+=64,e._md5cycle(this._state,s),a=0}return this._bufferLength=a,this}getState(){const e=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){const t=e.buffer,r=e.state,s=this._state;let n;for(this._dataLength=e.length,this._bufferLength=e.buflen,s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],n=0;n<t.length;n+=1)this._buffer8[n]=t.charCodeAt(n)}end(t=!1){const r=this._bufferLength,s=this._buffer8,n=this._buffer32,a=1+(r>>2);this._dataLength+=r;const o=8*this._dataLength;if(s[r]=128,s[r+1]=s[r+2]=s[r+3]=0,n.set(e.buffer32Identity.subarray(a),a),r>55&&(e._md5cycle(this._state,n),n.set(e.buffer32Identity)),o<=4294967295)n[14]=o;else{const e=o.toString(16).match(/(.*?)(.{0,8})$/);if(null===e)return;const t=parseInt(e[2],16),r=parseInt(e[1],16)||0;n[14]=t,n[15]=r}return e._md5cycle(this._state,n),t?this._state:e._hex(this._state)}}if(e.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),e.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),e.hexChars="0123456789abcdef",e.hexOut=[],e.onePassHasher=new e,"5d41402abc4b2a76b9719d911017c592"!==e.hashStr("hello"))throw new Error("Md5 self test failed.");class t{constructor(){this.Hash="",this.Time=""}static getInstance(){return t.instance||(t.instance=new t),t.instance}getHeaders(r,s){return t.instance.Time=Date.now().toString(),t.instance.Hash=e.hashAsciiStr(r+t.instance.Time+s),this}}const r=t,s=(e,t,s)=>{const n=r.getInstance().getHeaders(t,s),a={"Content-Type":"application/json",ApiKey:t,Hash:n.Hash,Time:n.Time};function o(t){const r=new Request(e+"/user/byToken/"+t.token,{method:"GET",headers:new Headers(a)});return fetch(r).then((e=>{if(200==e.status)return e.json()})).then((e=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(e))}))}return{authProvider:{login:({username:t,password:r})=>{const s=new Request(e+"/user/login",{method:"POST",body:JSON.stringify({login:t,password:r}),headers:new Headers(a)});return fetch(s).then((e=>e.status<200||e.status>=300?Promise.reject(e.statusText):e.json())).then((e=>o(e))).catch((()=>Promise.reject("Invalid username or password")))},logout:()=>{localStorage.removeItem("user");const t=localStorage.getItem("token");localStorage.removeItem("token");const r=new Request(e+"/user/logout/",{method:"POST",headers:new Headers(Object.assign(Object.assign({},a),{Authorization:`Bearer ${t}`}))});return fetch(r),Promise.resolve()},checkError:()=>Promise.resolve(),checkAuth:()=>localStorage.getItem("user")?Promise.resolve():Promise.reject(),getPermissions:()=>Promise.resolve(void 0),getIdentity:()=>{const e=localStorage.getItem("user"),t=e?JSON.parse(e):null;return Promise.resolve(t)}},authUserByToken:o}};var o,i=n(872),h=n(520),c=n.n(h);function f(e,t=null){let r=[];for(let s in e){let n=t?t+"["+s+"]":s,a=typeof e[s];if("meta"!==n)switch(a){case"object":r=r.concat(f(e[s],n));break;case"function":break;default:r.push(n+"="+encodeURI(e[s]))}}return r.join("&")}!function(e){e.GET="GET",e.PUT="PUT",e.DELETE="DELETE",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.POST="POST"}(o||(o={}));const u=(e,t,s)=>{let n=(e,n={mode:"no-cors"})=>{const a=localStorage.getItem("token");if(!n.headers){const e=r.getInstance().getHeaders(t,s);n.headers=new Headers({Accept:"application/json",Authorization:`Bearer ${a}`,ApiKey:t,Hash:e.Hash,Time:e.Time})}return i.fetchUtils.fetchJson(e,n)};const a=c()(e,n);return Object.assign(Object.assign({},a),{fetch:(t,r,s)=>{let a={method:r};return s&&(a.body=JSON.stringify(s)),n(`${e}/${t}`,a)},getList:(t,r)=>{const s=f(r);let a=r.pagination.perPage,o=0;r.pagination.page&&r.pagination.perPage&&(a=r.pagination.perPage,o=r.pagination.page*r.pagination.perPage-r.pagination.perPage);const i=t.includes("?")?"&":"?";return n(`${e}/${t}/list${i}limit=${a}&offset=${o}&${s}`,{method:"GET"}).then((({json:e})=>e))},getManyReference:(t,r)=>{const s=f(r);let a=r.pagination.perPage,o=0;r.pagination.page&&r.pagination.perPage&&(a=r.pagination.perPage,o=r.pagination.page*r.pagination.perPage-r.pagination.perPage);const i=t.includes("?")?"&":"?";return n(`${e}/${t}/list${i}limit=${a}&offset=${o}&${s}`,{method:"GET"}).then((({json:e})=>e))},getOne:(t,r)=>n(`${e}/${t}/${r.id}`,{method:"GET"}).then((({json:e})=>e)).catch((e=>console.log(e))),create:(t,r)=>n(`${e}/${t}`,{method:"POST",body:JSON.stringify(r.data)}).then((({json:e})=>({data:e})))})}})(),a})()));