!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t,r){var o=r.getInstance().getHeaders(),n=new Request(t+"/user/byToken/"+e.token,{method:"GET",headers:new Headers({"Content-Type":"application/json",ApiKey:o.ApiKey,Hash:o.Hash,Time:o.Time})});return fetch(n).then((function(e){if(200==e.status)return e.json()})).then((function(t){localStorage.setItem("token",e.token),localStorage.setItem("user",JSON.stringify(t))}))}e.r(t),e.d(t,{authProviderCallback:()=>o,authUserByToken:()=>r});var o=function(e,t){return{login:function(o){var n=o.username,s=o.password,a=t.getInstance().getHeaders(),i=new Request(e+"/user/login",{method:"POST",body:JSON.stringify({login:n,password:s}),headers:new Headers({"Content-Type":"application/json",ApiKey:a.ApiKey,Hash:a.Hash,Time:a.Time})});return fetch(i).then((function(e){return e.status<200||e.status>=300?Promise.reject(e.statusText):e.json()})).then((function(e){return r(e)})).catch((function(){return Promise.reject("Invalid username or password")}))},logout:function(){localStorage.removeItem("user");var r=localStorage.getItem("token");localStorage.removeItem("token");var o=t.getInstance().getHeaders(),n=new Request(e+"/user/logout/",{method:"POST",headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(r),ApiKey:o.ApiKey,Hash:o.Hash,Time:o.Time})});return fetch(n),Promise.resolve()},checkError:function(){return Promise.resolve()},checkAuth:function(){return localStorage.getItem("user")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve(void 0)},getIdentity:function(){var e=localStorage.getItem("user"),t=e?JSON.parse(e):null;return Promise.resolve(t)}}};return t})()));