(function(SD,It){typeof exports=="object"&&typeof module<"u"?module.exports=It(require("vue")):typeof define=="function"&&define.amd?define(["vue"],It):(SD=typeof globalThis<"u"?globalThis:SD||self,SD["vue-three-d-mockup"]=It(SD.Vue))})(this,function(SD){"use strict";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const It="137",Ln="300 es";class Tt{addEventListener(M,D){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[M]===void 0&&(t[M]=[]),t[M].indexOf(D)===-1&&t[M].push(D)}hasEventListener(M,D){if(this._listeners===void 0)return!1;const t=this._listeners;return t[M]!==void 0&&t[M].indexOf(D)!==-1}removeEventListener(M,D){if(this._listeners===void 0)return;const e=this._listeners[M];if(e!==void 0){const N=e.indexOf(D);N!==-1&&e.splice(N,1)}}dispatchEvent(M){if(this._listeners===void 0)return;const t=this._listeners[M.type];if(t!==void 0){M.target=this;const e=t.slice(0);for(let N=0,A=e.length;N<A;N++)e[N].call(this,M);M.target=null}}}const iD=[];for(let n=0;n<256;n++)iD[n]=(n<16?"0":"")+n.toString(16);const uN=Math.PI/180,gN=180/Math.PI;function vD(){const n=Math.random()*4294967295|0,M=Math.random()*4294967295|0,D=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(iD[n&255]+iD[n>>8&255]+iD[n>>16&255]+iD[n>>24&255]+"-"+iD[M&255]+iD[M>>8&255]+"-"+iD[M>>16&15|64]+iD[M>>24&255]+"-"+iD[D&63|128]+iD[D>>8&255]+"-"+iD[D>>16&255]+iD[D>>24&255]+iD[t&255]+iD[t>>8&255]+iD[t>>16&255]+iD[t>>24&255]).toUpperCase()}function cD(n,M,D){return Math.max(M,Math.min(D,n))}function Oi(n,M){return(n%M+M)%M}function rN(n,M,D){return(1-D)*n+D*M}function wn(n){return(n&n-1)===0&&n!==0}function xi(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class q{constructor(M=0,D=0){this.x=M,this.y=D}get width(){return this.x}set width(M){this.x=M}get height(){return this.y}set height(M){this.y=M}set(M,D){return this.x=M,this.y=D,this}setScalar(M){return this.x=M,this.y=M,this}setX(M){return this.x=M,this}setY(M){return this.y=M,this}setComponent(M,D){switch(M){case 0:this.x=D;break;case 1:this.y=D;break;default:throw new Error("index is out of range: "+M)}return this}getComponent(M){switch(M){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+M)}}clone(){return new this.constructor(this.x,this.y)}copy(M){return this.x=M.x,this.y=M.y,this}add(M,D){return D!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(M,D)):(this.x+=M.x,this.y+=M.y,this)}addScalar(M){return this.x+=M,this.y+=M,this}addVectors(M,D){return this.x=M.x+D.x,this.y=M.y+D.y,this}addScaledVector(M,D){return this.x+=M.x*D,this.y+=M.y*D,this}sub(M,D){return D!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(M,D)):(this.x-=M.x,this.y-=M.y,this)}subScalar(M){return this.x-=M,this.y-=M,this}subVectors(M,D){return this.x=M.x-D.x,this.y=M.y-D.y,this}multiply(M){return this.x*=M.x,this.y*=M.y,this}multiplyScalar(M){return this.x*=M,this.y*=M,this}divide(M){return this.x/=M.x,this.y/=M.y,this}divideScalar(M){return this.multiplyScalar(1/M)}applyMatrix3(M){const D=this.x,t=this.y,e=M.elements;return this.x=e[0]*D+e[3]*t+e[6],this.y=e[1]*D+e[4]*t+e[7],this}min(M){return this.x=Math.min(this.x,M.x),this.y=Math.min(this.y,M.y),this}max(M){return this.x=Math.max(this.x,M.x),this.y=Math.max(this.y,M.y),this}clamp(M,D){return this.x=Math.max(M.x,Math.min(D.x,this.x)),this.y=Math.max(M.y,Math.min(D.y,this.y)),this}clampScalar(M,D){return this.x=Math.max(M,Math.min(D,this.x)),this.y=Math.max(M,Math.min(D,this.y)),this}clampLength(M,D){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(M,Math.min(D,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(M){return this.x*M.x+this.y*M.y}cross(M){return this.x*M.y-this.y*M.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(M){return Math.sqrt(this.distanceToSquared(M))}distanceToSquared(M){const D=this.x-M.x,t=this.y-M.y;return D*D+t*t}manhattanDistanceTo(M){return Math.abs(this.x-M.x)+Math.abs(this.y-M.y)}setLength(M){return this.normalize().multiplyScalar(M)}lerp(M,D){return this.x+=(M.x-this.x)*D,this.y+=(M.y-this.y)*D,this}lerpVectors(M,D,t){return this.x=M.x+(D.x-M.x)*t,this.y=M.y+(D.y-M.y)*t,this}equals(M){return M.x===this.x&&M.y===this.y}fromArray(M,D=0){return this.x=M[D],this.y=M[D+1],this}toArray(M=[],D=0){return M[D]=this.x,M[D+1]=this.y,M}fromBufferAttribute(M,D,t){return t!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=M.getX(D),this.y=M.getY(D),this}rotateAround(M,D){const t=Math.cos(D),e=Math.sin(D),N=this.x-M.x,A=this.y-M.y;return this.x=N*t-A*e+M.x,this.y=N*e+A*t+M.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}q.prototype.isVector2=!0;class zD{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(M,D,t,e,N,A,i,I,z){const T=this.elements;return T[0]=M,T[1]=e,T[2]=i,T[3]=D,T[4]=N,T[5]=I,T[6]=t,T[7]=A,T[8]=z,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(M){const D=this.elements,t=M.elements;return D[0]=t[0],D[1]=t[1],D[2]=t[2],D[3]=t[3],D[4]=t[4],D[5]=t[5],D[6]=t[6],D[7]=t[7],D[8]=t[8],this}extractBasis(M,D,t){return M.setFromMatrix3Column(this,0),D.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(M){const D=M.elements;return this.set(D[0],D[4],D[8],D[1],D[5],D[9],D[2],D[6],D[10]),this}multiply(M){return this.multiplyMatrices(this,M)}premultiply(M){return this.multiplyMatrices(M,this)}multiplyMatrices(M,D){const t=M.elements,e=D.elements,N=this.elements,A=t[0],i=t[3],I=t[6],z=t[1],T=t[4],u=t[7],g=t[2],r=t[5],j=t[8],y=e[0],o=e[3],c=e[6],s=e[1],l=e[4],C=e[7],E=e[2],v=e[5],h=e[8];return N[0]=A*y+i*s+I*E,N[3]=A*o+i*l+I*v,N[6]=A*c+i*C+I*h,N[1]=z*y+T*s+u*E,N[4]=z*o+T*l+u*v,N[7]=z*c+T*C+u*h,N[2]=g*y+r*s+j*E,N[5]=g*o+r*l+j*v,N[8]=g*c+r*C+j*h,this}multiplyScalar(M){const D=this.elements;return D[0]*=M,D[3]*=M,D[6]*=M,D[1]*=M,D[4]*=M,D[7]*=M,D[2]*=M,D[5]*=M,D[8]*=M,this}determinant(){const M=this.elements,D=M[0],t=M[1],e=M[2],N=M[3],A=M[4],i=M[5],I=M[6],z=M[7],T=M[8];return D*A*T-D*i*z-t*N*T+t*i*I+e*N*z-e*A*I}invert(){const M=this.elements,D=M[0],t=M[1],e=M[2],N=M[3],A=M[4],i=M[5],I=M[6],z=M[7],T=M[8],u=T*A-i*z,g=i*I-T*N,r=z*N-A*I,j=D*u+t*g+e*r;if(j===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/j;return M[0]=u*y,M[1]=(e*z-T*t)*y,M[2]=(i*t-e*A)*y,M[3]=g*y,M[4]=(T*D-e*I)*y,M[5]=(e*N-i*D)*y,M[6]=r*y,M[7]=(t*I-z*D)*y,M[8]=(A*D-t*N)*y,this}transpose(){let M;const D=this.elements;return M=D[1],D[1]=D[3],D[3]=M,M=D[2],D[2]=D[6],D[6]=M,M=D[5],D[5]=D[7],D[7]=M,this}getNormalMatrix(M){return this.setFromMatrix4(M).invert().transpose()}transposeIntoArray(M){const D=this.elements;return M[0]=D[0],M[1]=D[3],M[2]=D[6],M[3]=D[1],M[4]=D[4],M[5]=D[7],M[6]=D[2],M[7]=D[5],M[8]=D[8],this}setUvTransform(M,D,t,e,N,A,i){const I=Math.cos(N),z=Math.sin(N);return this.set(t*I,t*z,-t*(I*A+z*i)+A+M,-e*z,e*I,-e*(-z*A+I*i)+i+D,0,0,1),this}scale(M,D){const t=this.elements;return t[0]*=M,t[3]*=M,t[6]*=M,t[1]*=D,t[4]*=D,t[7]*=D,this}rotate(M){const D=Math.cos(M),t=Math.sin(M),e=this.elements,N=e[0],A=e[3],i=e[6],I=e[1],z=e[4],T=e[7];return e[0]=D*N+t*I,e[3]=D*A+t*z,e[6]=D*i+t*T,e[1]=-t*N+D*I,e[4]=-t*A+D*z,e[7]=-t*i+D*T,this}translate(M,D){const t=this.elements;return t[0]+=M*t[2],t[3]+=M*t[5],t[6]+=M*t[8],t[1]+=D*t[2],t[4]+=D*t[5],t[7]+=D*t[8],this}equals(M){const D=this.elements,t=M.elements;for(let e=0;e<9;e++)if(D[e]!==t[e])return!1;return!0}fromArray(M,D=0){for(let t=0;t<9;t++)this.elements[t]=M[t+D];return this}toArray(M=[],D=0){const t=this.elements;return M[D]=t[0],M[D+1]=t[1],M[D+2]=t[2],M[D+3]=t[3],M[D+4]=t[4],M[D+5]=t[5],M[D+6]=t[6],M[D+7]=t[7],M[D+8]=t[8],M}clone(){return new this.constructor().fromArray(this.elements)}}zD.prototype.isMatrix3=!0;function On(n){for(let M=n.length-1;M>=0;--M)if(n[M]>65535)return!0;return!1}function Jt(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const xn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xD={h:0,s:0,l:0},Ce={h:0,s:0,l:0};function sN(n,M,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?n+(M-n)*6*D:D<1/2?M:D<2/3?n+(M-n)*6*(2/3-D):n}function ot(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cN(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class cM{constructor(M,D,t){return D===void 0&&t===void 0?this.set(M):this.setRGB(M,D,t)}set(M){return M&&M.isColor?this.copy(M):typeof M=="number"?this.setHex(M):typeof M=="string"&&this.setStyle(M),this}setScalar(M){return this.r=M,this.g=M,this.b=M,this}setHex(M){return M=Math.floor(M),this.r=(M>>16&255)/255,this.g=(M>>8&255)/255,this.b=(M&255)/255,this}setRGB(M,D,t){return this.r=M,this.g=D,this.b=t,this}setHSL(M,D,t){if(M=Oi(M,1),D=cD(D,0,1),t=cD(t,0,1),D===0)this.r=this.g=this.b=t;else{const e=t<=.5?t*(1+D):t+D-t*D,N=2*t-e;this.r=sN(N,e,M+1/3),this.g=sN(N,e,M),this.b=sN(N,e,M-1/3)}return this}setStyle(M){function D(e){e!==void 0&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+M+" will be ignored.")}let t;if(t=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(M)){let e;const N=t[1],A=t[2];switch(N){case"rgb":case"rgba":if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,D(e[4]),this;if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,D(e[4]),this;break;case"hsl":case"hsla":if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A)){const i=parseFloat(e[1])/360,I=parseInt(e[2],10)/100,z=parseInt(e[3],10)/100;return D(e[4]),this.setHSL(i,I,z)}break}}else if(t=/^\#([A-Fa-f\d]+)$/.exec(M)){const e=t[1],N=e.length;if(N===3)return this.r=parseInt(e.charAt(0)+e.charAt(0),16)/255,this.g=parseInt(e.charAt(1)+e.charAt(1),16)/255,this.b=parseInt(e.charAt(2)+e.charAt(2),16)/255,this;if(N===6)return this.r=parseInt(e.charAt(0)+e.charAt(1),16)/255,this.g=parseInt(e.charAt(2)+e.charAt(3),16)/255,this.b=parseInt(e.charAt(4)+e.charAt(5),16)/255,this}return M&&M.length>0?this.setColorName(M):this}setColorName(M){const D=xn[M.toLowerCase()];return D!==void 0?this.setHex(D):console.warn("THREE.Color: Unknown color "+M),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(M){return this.r=M.r,this.g=M.g,this.b=M.b,this}copySRGBToLinear(M){return this.r=ot(M.r),this.g=ot(M.g),this.b=ot(M.b),this}copyLinearToSRGB(M){return this.r=cN(M.r),this.g=cN(M.g),this.b=cN(M.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(M){const D=this.r,t=this.g,e=this.b,N=Math.max(D,t,e),A=Math.min(D,t,e);let i,I;const z=(A+N)/2;if(A===N)i=0,I=0;else{const T=N-A;switch(I=z<=.5?T/(N+A):T/(2-N-A),N){case D:i=(t-e)/T+(t<e?6:0);break;case t:i=(e-D)/T+2;break;case e:i=(D-t)/T+4;break}i/=6}return M.h=i,M.s=I,M.l=z,M}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(M,D,t){return this.getHSL(xD),xD.h+=M,xD.s+=D,xD.l+=t,this.setHSL(xD.h,xD.s,xD.l),this}add(M){return this.r+=M.r,this.g+=M.g,this.b+=M.b,this}addColors(M,D){return this.r=M.r+D.r,this.g=M.g+D.g,this.b=M.b+D.b,this}addScalar(M){return this.r+=M,this.g+=M,this.b+=M,this}sub(M){return this.r=Math.max(0,this.r-M.r),this.g=Math.max(0,this.g-M.g),this.b=Math.max(0,this.b-M.b),this}multiply(M){return this.r*=M.r,this.g*=M.g,this.b*=M.b,this}multiplyScalar(M){return this.r*=M,this.g*=M,this.b*=M,this}lerp(M,D){return this.r+=(M.r-this.r)*D,this.g+=(M.g-this.g)*D,this.b+=(M.b-this.b)*D,this}lerpColors(M,D,t){return this.r=M.r+(D.r-M.r)*t,this.g=M.g+(D.g-M.g)*t,this.b=M.b+(D.b-M.b)*t,this}lerpHSL(M,D){this.getHSL(xD),M.getHSL(Ce);const t=rN(xD.h,Ce.h,D),e=rN(xD.s,Ce.s,D),N=rN(xD.l,Ce.l,D);return this.setHSL(t,e,N),this}equals(M){return M.r===this.r&&M.g===this.g&&M.b===this.b}fromArray(M,D=0){return this.r=M[D],this.g=M[D+1],this.b=M[D+2],this}toArray(M=[],D=0){return M[D]=this.r,M[D+1]=this.g,M[D+2]=this.b,M}fromBufferAttribute(M,D){return this.r=M.getX(D),this.g=M.getY(D),this.b=M.getZ(D),M.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}cM.NAMES=xn,cM.prototype.isColor=!0,cM.prototype.r=1,cM.prototype.g=1,cM.prototype.b=1;let Ct;class ut{static getDataURL(M){if(/^data:/i.test(M.src)||typeof HTMLCanvasElement>"u")return M.src;let D;if(M instanceof HTMLCanvasElement)D=M;else{Ct===void 0&&(Ct=Jt("canvas")),Ct.width=M.width,Ct.height=M.height;const t=Ct.getContext("2d");M instanceof ImageData?t.putImageData(M,0,0):t.drawImage(M,0,0,M.width,M.height),D=Ct}return D.width>2048||D.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",M),D.toDataURL("image/jpeg",.6)):D.toDataURL("image/png")}static sRGBToLinear(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const D=Jt("canvas");D.width=M.width,D.height=M.height;const t=D.getContext("2d");t.drawImage(M,0,0,M.width,M.height);const e=t.getImageData(0,0,M.width,M.height),N=e.data;for(let A=0;A<N.length;A++)N[A]=ot(N[A]/255)*255;return t.putImageData(e,0,0),D}else if(M.data){const D=M.data.slice(0);for(let t=0;t<D.length;t++)D instanceof Uint8Array||D instanceof Uint8ClampedArray?D[t]=Math.floor(ot(D[t]/255)*255):D[t]=ot(D[t]);return{data:D,width:M.width,height:M.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),M}}let Ei=0;class ND extends Tt{constructor(M=ND.DEFAULT_IMAGE,D=ND.DEFAULT_MAPPING,t=1001,e=1001,N=1006,A=1008,i=1023,I=1009,z=1,T=3e3){super(),Object.defineProperty(this,"id",{value:Ei++}),this.uuid=vD(),this.name="",this.image=M,this.mipmaps=[],this.mapping=D,this.wrapS=t,this.wrapT=e,this.magFilter=N,this.minFilter=A,this.anisotropy=z,this.format=i,this.internalFormat=null,this.type=I,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zD,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=T,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(M){return this.name=M.name,this.image=M.image,this.mipmaps=M.mipmaps.slice(0),this.mapping=M.mapping,this.wrapS=M.wrapS,this.wrapT=M.wrapT,this.magFilter=M.magFilter,this.minFilter=M.minFilter,this.anisotropy=M.anisotropy,this.format=M.format,this.internalFormat=M.internalFormat,this.type=M.type,this.offset.copy(M.offset),this.repeat.copy(M.repeat),this.center.copy(M.center),this.rotation=M.rotation,this.matrixAutoUpdate=M.matrixAutoUpdate,this.matrix.copy(M.matrix),this.generateMipmaps=M.generateMipmaps,this.premultiplyAlpha=M.premultiplyAlpha,this.flipY=M.flipY,this.unpackAlignment=M.unpackAlignment,this.encoding=M.encoding,this.userData=JSON.parse(JSON.stringify(M.userData)),this}toJSON(M){const D=M===void 0||typeof M=="string";if(!D&&M.textures[this.uuid]!==void 0)return M.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const e=this.image;if(e.uuid===void 0&&(e.uuid=vD()),!D&&M.images[e.uuid]===void 0){let N;if(Array.isArray(e)){N=[];for(let A=0,i=e.length;A<i;A++)e[A].isDataTexture?N.push(jN(e[A].image)):N.push(jN(e[A]))}else N=jN(e);M.images[e.uuid]={uuid:e.uuid,url:N}}t.image=e.uuid}return JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),D||(M.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(M){if(this.mapping!==300)return M;if(M.applyMatrix3(this.matrix),M.x<0||M.x>1)switch(this.wrapS){case 1e3:M.x=M.x-Math.floor(M.x);break;case 1001:M.x=M.x<0?0:1;break;case 1002:Math.abs(Math.floor(M.x)%2)===1?M.x=Math.ceil(M.x)-M.x:M.x=M.x-Math.floor(M.x);break}if(M.y<0||M.y>1)switch(this.wrapT){case 1e3:M.y=M.y-Math.floor(M.y);break;case 1001:M.y=M.y<0?0:1;break;case 1002:Math.abs(Math.floor(M.y)%2)===1?M.y=Math.ceil(M.y)-M.y:M.y=M.y-Math.floor(M.y);break}return this.flipY&&(M.y=1-M.y),M}set needsUpdate(M){M===!0&&this.version++}}ND.DEFAULT_IMAGE=void 0,ND.DEFAULT_MAPPING=300,ND.prototype.isTexture=!0;function jN(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ut.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class PM{constructor(M=0,D=0,t=0,e=1){this.x=M,this.y=D,this.z=t,this.w=e}get width(){return this.z}set width(M){this.z=M}get height(){return this.w}set height(M){this.w=M}set(M,D,t,e){return this.x=M,this.y=D,this.z=t,this.w=e,this}setScalar(M){return this.x=M,this.y=M,this.z=M,this.w=M,this}setX(M){return this.x=M,this}setY(M){return this.y=M,this}setZ(M){return this.z=M,this}setW(M){return this.w=M,this}setComponent(M,D){switch(M){case 0:this.x=D;break;case 1:this.y=D;break;case 2:this.z=D;break;case 3:this.w=D;break;default:throw new Error("index is out of range: "+M)}return this}getComponent(M){switch(M){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+M)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(M){return this.x=M.x,this.y=M.y,this.z=M.z,this.w=M.w!==void 0?M.w:1,this}add(M,D){return D!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(M,D)):(this.x+=M.x,this.y+=M.y,this.z+=M.z,this.w+=M.w,this)}addScalar(M){return this.x+=M,this.y+=M,this.z+=M,this.w+=M,this}addVectors(M,D){return this.x=M.x+D.x,this.y=M.y+D.y,this.z=M.z+D.z,this.w=M.w+D.w,this}addScaledVector(M,D){return this.x+=M.x*D,this.y+=M.y*D,this.z+=M.z*D,this.w+=M.w*D,this}sub(M,D){return D!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(M,D)):(this.x-=M.x,this.y-=M.y,this.z-=M.z,this.w-=M.w,this)}subScalar(M){return this.x-=M,this.y-=M,this.z-=M,this.w-=M,this}subVectors(M,D){return this.x=M.x-D.x,this.y=M.y-D.y,this.z=M.z-D.z,this.w=M.w-D.w,this}multiply(M){return this.x*=M.x,this.y*=M.y,this.z*=M.z,this.w*=M.w,this}multiplyScalar(M){return this.x*=M,this.y*=M,this.z*=M,this.w*=M,this}applyMatrix4(M){const D=this.x,t=this.y,e=this.z,N=this.w,A=M.elements;return this.x=A[0]*D+A[4]*t+A[8]*e+A[12]*N,this.y=A[1]*D+A[5]*t+A[9]*e+A[13]*N,this.z=A[2]*D+A[6]*t+A[10]*e+A[14]*N,this.w=A[3]*D+A[7]*t+A[11]*e+A[15]*N,this}divideScalar(M){return this.multiplyScalar(1/M)}setAxisAngleFromQuaternion(M){this.w=2*Math.acos(M.w);const D=Math.sqrt(1-M.w*M.w);return D<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=M.x/D,this.y=M.y/D,this.z=M.z/D),this}setAxisAngleFromRotationMatrix(M){let D,t,e,N;const I=M.elements,z=I[0],T=I[4],u=I[8],g=I[1],r=I[5],j=I[9],y=I[2],o=I[6],c=I[10];if(Math.abs(T-g)<.01&&Math.abs(u-y)<.01&&Math.abs(j-o)<.01){if(Math.abs(T+g)<.1&&Math.abs(u+y)<.1&&Math.abs(j+o)<.1&&Math.abs(z+r+c-3)<.1)return this.set(1,0,0,0),this;D=Math.PI;const l=(z+1)/2,C=(r+1)/2,E=(c+1)/2,v=(T+g)/4,h=(u+y)/4,F=(j+o)/4;return l>C&&l>E?l<.01?(t=0,e=.707106781,N=.707106781):(t=Math.sqrt(l),e=v/t,N=h/t):C>E?C<.01?(t=.707106781,e=0,N=.707106781):(e=Math.sqrt(C),t=v/e,N=F/e):E<.01?(t=.707106781,e=.707106781,N=0):(N=Math.sqrt(E),t=h/N,e=F/N),this.set(t,e,N,D),this}let s=Math.sqrt((o-j)*(o-j)+(u-y)*(u-y)+(g-T)*(g-T));return Math.abs(s)<.001&&(s=1),this.x=(o-j)/s,this.y=(u-y)/s,this.z=(g-T)/s,this.w=Math.acos((z+r+c-1)/2),this}min(M){return this.x=Math.min(this.x,M.x),this.y=Math.min(this.y,M.y),this.z=Math.min(this.z,M.z),this.w=Math.min(this.w,M.w),this}max(M){return this.x=Math.max(this.x,M.x),this.y=Math.max(this.y,M.y),this.z=Math.max(this.z,M.z),this.w=Math.max(this.w,M.w),this}clamp(M,D){return this.x=Math.max(M.x,Math.min(D.x,this.x)),this.y=Math.max(M.y,Math.min(D.y,this.y)),this.z=Math.max(M.z,Math.min(D.z,this.z)),this.w=Math.max(M.w,Math.min(D.w,this.w)),this}clampScalar(M,D){return this.x=Math.max(M,Math.min(D,this.x)),this.y=Math.max(M,Math.min(D,this.y)),this.z=Math.max(M,Math.min(D,this.z)),this.w=Math.max(M,Math.min(D,this.w)),this}clampLength(M,D){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(M,Math.min(D,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(M){return this.x*M.x+this.y*M.y+this.z*M.z+this.w*M.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(M){return this.normalize().multiplyScalar(M)}lerp(M,D){return this.x+=(M.x-this.x)*D,this.y+=(M.y-this.y)*D,this.z+=(M.z-this.z)*D,this.w+=(M.w-this.w)*D,this}lerpVectors(M,D,t){return this.x=M.x+(D.x-M.x)*t,this.y=M.y+(D.y-M.y)*t,this.z=M.z+(D.z-M.z)*t,this.w=M.w+(D.w-M.w)*t,this}equals(M){return M.x===this.x&&M.y===this.y&&M.z===this.z&&M.w===this.w}fromArray(M,D=0){return this.x=M[D],this.y=M[D+1],this.z=M[D+2],this.w=M[D+3],this}toArray(M=[],D=0){return M[D]=this.x,M[D+1]=this.y,M[D+2]=this.z,M[D+3]=this.w,M}fromBufferAttribute(M,D,t){return t!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=M.getX(D),this.y=M.getY(D),this.z=M.getZ(D),this.w=M.getW(D),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}PM.prototype.isVector4=!0;class oD extends Tt{constructor(M,D,t={}){super(),this.width=M,this.height=D,this.depth=1,this.scissor=new PM(0,0,M,D),this.scissorTest=!1,this.viewport=new PM(0,0,M,D),this.texture=new ND(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:M,height:D,depth:1},this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null}setTexture(M){M.image={width:this.width,height:this.height,depth:this.depth},this.texture=M}setSize(M,D,t=1){(this.width!==M||this.height!==D||this.depth!==t)&&(this.width=M,this.height=D,this.depth=t,this.texture.image.width=M,this.texture.image.height=D,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,M,D),this.scissor.set(0,0,M,D)}clone(){return new this.constructor().copy(this)}copy(M){return this.width=M.width,this.height=M.height,this.depth=M.depth,this.viewport.copy(M.viewport),this.texture=M.texture.clone(),this.texture.image=Object.assign({},M.texture.image),this.depthBuffer=M.depthBuffer,this.stencilBuffer=M.stencilBuffer,this.depthTexture=M.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}oD.prototype.isWebGLRenderTarget=!0;class li extends oD{constructor(M,D,t){super(M,D);const e=this.texture;this.texture=[];for(let N=0;N<t;N++)this.texture[N]=e.clone()}setSize(M,D,t=1){if(this.width!==M||this.height!==D||this.depth!==t){this.width=M,this.height=D,this.depth=t;for(let e=0,N=this.texture.length;e<N;e++)this.texture[e].image.width=M,this.texture[e].image.height=D,this.texture[e].image.depth=t;this.dispose()}return this.viewport.set(0,0,M,D),this.scissor.set(0,0,M,D),this}copy(M){this.dispose(),this.width=M.width,this.height=M.height,this.depth=M.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=M.depthBuffer,this.stencilBuffer=M.stencilBuffer,this.depthTexture=M.depthTexture,this.texture.length=0;for(let D=0,t=M.texture.length;D<t;D++)this.texture[D]=M.texture[D].clone();return this}}li.prototype.isWebGLMultipleRenderTargets=!0;class yN extends oD{constructor(M,D,t={}){super(M,D,t),this.samples=4,this.ignoreDepthForMultisampleCopy=t.ignoreDepth!==void 0?t.ignoreDepth:!0,this.useRenderToTexture=t.useRenderToTexture!==void 0?t.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(M){return super.copy.call(this,M),this.samples=M.samples,this.useRenderToTexture=M.useRenderToTexture,this.useRenderbuffer=M.useRenderbuffer,this}}yN.prototype.isWebGLMultisampleRenderTarget=!0;class sD{constructor(M=0,D=0,t=0,e=1){this._x=M,this._y=D,this._z=t,this._w=e}static slerp(M,D,t,e){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),t.slerpQuaternions(M,D,e)}static slerpFlat(M,D,t,e,N,A,i){let I=t[e+0],z=t[e+1],T=t[e+2],u=t[e+3];const g=N[A+0],r=N[A+1],j=N[A+2],y=N[A+3];if(i===0){M[D+0]=I,M[D+1]=z,M[D+2]=T,M[D+3]=u;return}if(i===1){M[D+0]=g,M[D+1]=r,M[D+2]=j,M[D+3]=y;return}if(u!==y||I!==g||z!==r||T!==j){let o=1-i;const c=I*g+z*r+T*j+u*y,s=c>=0?1:-1,l=1-c*c;if(l>Number.EPSILON){const E=Math.sqrt(l),v=Math.atan2(E,c*s);o=Math.sin(o*v)/E,i=Math.sin(i*v)/E}const C=i*s;if(I=I*o+g*C,z=z*o+r*C,T=T*o+j*C,u=u*o+y*C,o===1-i){const E=1/Math.sqrt(I*I+z*z+T*T+u*u);I*=E,z*=E,T*=E,u*=E}}M[D]=I,M[D+1]=z,M[D+2]=T,M[D+3]=u}static multiplyQuaternionsFlat(M,D,t,e,N,A){const i=t[e],I=t[e+1],z=t[e+2],T=t[e+3],u=N[A],g=N[A+1],r=N[A+2],j=N[A+3];return M[D]=i*j+T*u+I*r-z*g,M[D+1]=I*j+T*g+z*u-i*r,M[D+2]=z*j+T*r+i*g-I*u,M[D+3]=T*j-i*u-I*g-z*r,M}get x(){return this._x}set x(M){this._x=M,this._onChangeCallback()}get y(){return this._y}set y(M){this._y=M,this._onChangeCallback()}get z(){return this._z}set z(M){this._z=M,this._onChangeCallback()}get w(){return this._w}set w(M){this._w=M,this._onChangeCallback()}set(M,D,t,e){return this._x=M,this._y=D,this._z=t,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(M){return this._x=M.x,this._y=M.y,this._z=M.z,this._w=M.w,this._onChangeCallback(),this}setFromEuler(M,D){if(!(M&&M.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const t=M._x,e=M._y,N=M._z,A=M._order,i=Math.cos,I=Math.sin,z=i(t/2),T=i(e/2),u=i(N/2),g=I(t/2),r=I(e/2),j=I(N/2);switch(A){case"XYZ":this._x=g*T*u+z*r*j,this._y=z*r*u-g*T*j,this._z=z*T*j+g*r*u,this._w=z*T*u-g*r*j;break;case"YXZ":this._x=g*T*u+z*r*j,this._y=z*r*u-g*T*j,this._z=z*T*j-g*r*u,this._w=z*T*u+g*r*j;break;case"ZXY":this._x=g*T*u-z*r*j,this._y=z*r*u+g*T*j,this._z=z*T*j+g*r*u,this._w=z*T*u-g*r*j;break;case"ZYX":this._x=g*T*u-z*r*j,this._y=z*r*u+g*T*j,this._z=z*T*j-g*r*u,this._w=z*T*u+g*r*j;break;case"YZX":this._x=g*T*u+z*r*j,this._y=z*r*u+g*T*j,this._z=z*T*j-g*r*u,this._w=z*T*u-g*r*j;break;case"XZY":this._x=g*T*u-z*r*j,this._y=z*r*u-g*T*j,this._z=z*T*j+g*r*u,this._w=z*T*u+g*r*j;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+A)}return D!==!1&&this._onChangeCallback(),this}setFromAxisAngle(M,D){const t=D/2,e=Math.sin(t);return this._x=M.x*e,this._y=M.y*e,this._z=M.z*e,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(M){const D=M.elements,t=D[0],e=D[4],N=D[8],A=D[1],i=D[5],I=D[9],z=D[2],T=D[6],u=D[10],g=t+i+u;if(g>0){const r=.5/Math.sqrt(g+1);this._w=.25/r,this._x=(T-I)*r,this._y=(N-z)*r,this._z=(A-e)*r}else if(t>i&&t>u){const r=2*Math.sqrt(1+t-i-u);this._w=(T-I)/r,this._x=.25*r,this._y=(e+A)/r,this._z=(N+z)/r}else if(i>u){const r=2*Math.sqrt(1+i-t-u);this._w=(N-z)/r,this._x=(e+A)/r,this._y=.25*r,this._z=(I+T)/r}else{const r=2*Math.sqrt(1+u-t-i);this._w=(A-e)/r,this._x=(N+z)/r,this._y=(I+T)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(M,D){let t=M.dot(D)+1;return t<Number.EPSILON?(t=0,Math.abs(M.x)>Math.abs(M.z)?(this._x=-M.y,this._y=M.x,this._z=0,this._w=t):(this._x=0,this._y=-M.z,this._z=M.y,this._w=t)):(this._x=M.y*D.z-M.z*D.y,this._y=M.z*D.x-M.x*D.z,this._z=M.x*D.y-M.y*D.x,this._w=t),this.normalize()}angleTo(M){return 2*Math.acos(Math.abs(cD(this.dot(M),-1,1)))}rotateTowards(M,D){const t=this.angleTo(M);if(t===0)return this;const e=Math.min(1,D/t);return this.slerp(M,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(M){return this._x*M._x+this._y*M._y+this._z*M._z+this._w*M._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let M=this.length();return M===0?(this._x=0,this._y=0,this._z=0,this._w=1):(M=1/M,this._x=this._x*M,this._y=this._y*M,this._z=this._z*M,this._w=this._w*M),this._onChangeCallback(),this}multiply(M,D){return D!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(M,D)):this.multiplyQuaternions(this,M)}premultiply(M){return this.multiplyQuaternions(M,this)}multiplyQuaternions(M,D){const t=M._x,e=M._y,N=M._z,A=M._w,i=D._x,I=D._y,z=D._z,T=D._w;return this._x=t*T+A*i+e*z-N*I,this._y=e*T+A*I+N*i-t*z,this._z=N*T+A*z+t*I-e*i,this._w=A*T-t*i-e*I-N*z,this._onChangeCallback(),this}slerp(M,D){if(D===0)return this;if(D===1)return this.copy(M);const t=this._x,e=this._y,N=this._z,A=this._w;let i=A*M._w+t*M._x+e*M._y+N*M._z;if(i<0?(this._w=-M._w,this._x=-M._x,this._y=-M._y,this._z=-M._z,i=-i):this.copy(M),i>=1)return this._w=A,this._x=t,this._y=e,this._z=N,this;const I=1-i*i;if(I<=Number.EPSILON){const r=1-D;return this._w=r*A+D*this._w,this._x=r*t+D*this._x,this._y=r*e+D*this._y,this._z=r*N+D*this._z,this.normalize(),this._onChangeCallback(),this}const z=Math.sqrt(I),T=Math.atan2(z,i),u=Math.sin((1-D)*T)/z,g=Math.sin(D*T)/z;return this._w=A*u+this._w*g,this._x=t*u+this._x*g,this._y=e*u+this._y*g,this._z=N*u+this._z*g,this._onChangeCallback(),this}slerpQuaternions(M,D,t){return this.copy(M).slerp(D,t)}random(){const M=Math.random(),D=Math.sqrt(1-M),t=Math.sqrt(M),e=2*Math.PI*Math.random(),N=2*Math.PI*Math.random();return this.set(D*Math.cos(e),t*Math.sin(N),t*Math.cos(N),D*Math.sin(e))}equals(M){return M._x===this._x&&M._y===this._y&&M._z===this._z&&M._w===this._w}fromArray(M,D=0){return this._x=M[D],this._y=M[D+1],this._z=M[D+2],this._w=M[D+3],this._onChangeCallback(),this}toArray(M=[],D=0){return M[D]=this._x,M[D+1]=this._y,M[D+2]=this._z,M[D+3]=this._w,M}fromBufferAttribute(M,D){return this._x=M.getX(D),this._y=M.getY(D),this._z=M.getZ(D),this._w=M.getW(D),this}_onChange(M){return this._onChangeCallback=M,this}_onChangeCallback(){}}sD.prototype.isQuaternion=!0;class O{constructor(M=0,D=0,t=0){this.x=M,this.y=D,this.z=t}set(M,D,t){return t===void 0&&(t=this.z),this.x=M,this.y=D,this.z=t,this}setScalar(M){return this.x=M,this.y=M,this.z=M,this}setX(M){return this.x=M,this}setY(M){return this.y=M,this}setZ(M){return this.z=M,this}setComponent(M,D){switch(M){case 0:this.x=D;break;case 1:this.y=D;break;case 2:this.z=D;break;default:throw new Error("index is out of range: "+M)}return this}getComponent(M){switch(M){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+M)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(M){return this.x=M.x,this.y=M.y,this.z=M.z,this}add(M,D){return D!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(M,D)):(this.x+=M.x,this.y+=M.y,this.z+=M.z,this)}addScalar(M){return this.x+=M,this.y+=M,this.z+=M,this}addVectors(M,D){return this.x=M.x+D.x,this.y=M.y+D.y,this.z=M.z+D.z,this}addScaledVector(M,D){return this.x+=M.x*D,this.y+=M.y*D,this.z+=M.z*D,this}sub(M,D){return D!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(M,D)):(this.x-=M.x,this.y-=M.y,this.z-=M.z,this)}subScalar(M){return this.x-=M,this.y-=M,this.z-=M,this}subVectors(M,D){return this.x=M.x-D.x,this.y=M.y-D.y,this.z=M.z-D.z,this}multiply(M,D){return D!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(M,D)):(this.x*=M.x,this.y*=M.y,this.z*=M.z,this)}multiplyScalar(M){return this.x*=M,this.y*=M,this.z*=M,this}multiplyVectors(M,D){return this.x=M.x*D.x,this.y=M.y*D.y,this.z=M.z*D.z,this}applyEuler(M){return M&&M.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(En.setFromEuler(M))}applyAxisAngle(M,D){return this.applyQuaternion(En.setFromAxisAngle(M,D))}applyMatrix3(M){const D=this.x,t=this.y,e=this.z,N=M.elements;return this.x=N[0]*D+N[3]*t+N[6]*e,this.y=N[1]*D+N[4]*t+N[7]*e,this.z=N[2]*D+N[5]*t+N[8]*e,this}applyNormalMatrix(M){return this.applyMatrix3(M).normalize()}applyMatrix4(M){const D=this.x,t=this.y,e=this.z,N=M.elements,A=1/(N[3]*D+N[7]*t+N[11]*e+N[15]);return this.x=(N[0]*D+N[4]*t+N[8]*e+N[12])*A,this.y=(N[1]*D+N[5]*t+N[9]*e+N[13])*A,this.z=(N[2]*D+N[6]*t+N[10]*e+N[14])*A,this}applyQuaternion(M){const D=this.x,t=this.y,e=this.z,N=M.x,A=M.y,i=M.z,I=M.w,z=I*D+A*e-i*t,T=I*t+i*D-N*e,u=I*e+N*t-A*D,g=-N*D-A*t-i*e;return this.x=z*I+g*-N+T*-i-u*-A,this.y=T*I+g*-A+u*-N-z*-i,this.z=u*I+g*-i+z*-A-T*-N,this}project(M){return this.applyMatrix4(M.matrixWorldInverse).applyMatrix4(M.projectionMatrix)}unproject(M){return this.applyMatrix4(M.projectionMatrixInverse).applyMatrix4(M.matrixWorld)}transformDirection(M){const D=this.x,t=this.y,e=this.z,N=M.elements;return this.x=N[0]*D+N[4]*t+N[8]*e,this.y=N[1]*D+N[5]*t+N[9]*e,this.z=N[2]*D+N[6]*t+N[10]*e,this.normalize()}divide(M){return this.x/=M.x,this.y/=M.y,this.z/=M.z,this}divideScalar(M){return this.multiplyScalar(1/M)}min(M){return this.x=Math.min(this.x,M.x),this.y=Math.min(this.y,M.y),this.z=Math.min(this.z,M.z),this}max(M){return this.x=Math.max(this.x,M.x),this.y=Math.max(this.y,M.y),this.z=Math.max(this.z,M.z),this}clamp(M,D){return this.x=Math.max(M.x,Math.min(D.x,this.x)),this.y=Math.max(M.y,Math.min(D.y,this.y)),this.z=Math.max(M.z,Math.min(D.z,this.z)),this}clampScalar(M,D){return this.x=Math.max(M,Math.min(D,this.x)),this.y=Math.max(M,Math.min(D,this.y)),this.z=Math.max(M,Math.min(D,this.z)),this}clampLength(M,D){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(M,Math.min(D,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(M){return this.x*M.x+this.y*M.y+this.z*M.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(M){return this.normalize().multiplyScalar(M)}lerp(M,D){return this.x+=(M.x-this.x)*D,this.y+=(M.y-this.y)*D,this.z+=(M.z-this.z)*D,this}lerpVectors(M,D,t){return this.x=M.x+(D.x-M.x)*t,this.y=M.y+(D.y-M.y)*t,this.z=M.z+(D.z-M.z)*t,this}cross(M,D){return D!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(M,D)):this.crossVectors(this,M)}crossVectors(M,D){const t=M.x,e=M.y,N=M.z,A=D.x,i=D.y,I=D.z;return this.x=e*I-N*i,this.y=N*A-t*I,this.z=t*i-e*A,this}projectOnVector(M){const D=M.lengthSq();if(D===0)return this.set(0,0,0);const t=M.dot(this)/D;return this.copy(M).multiplyScalar(t)}projectOnPlane(M){return aN.copy(this).projectOnVector(M),this.sub(aN)}reflect(M){return this.sub(aN.copy(M).multiplyScalar(2*this.dot(M)))}angleTo(M){const D=Math.sqrt(this.lengthSq()*M.lengthSq());if(D===0)return Math.PI/2;const t=this.dot(M)/D;return Math.acos(cD(t,-1,1))}distanceTo(M){return Math.sqrt(this.distanceToSquared(M))}distanceToSquared(M){const D=this.x-M.x,t=this.y-M.y,e=this.z-M.z;return D*D+t*t+e*e}manhattanDistanceTo(M){return Math.abs(this.x-M.x)+Math.abs(this.y-M.y)+Math.abs(this.z-M.z)}setFromSpherical(M){return this.setFromSphericalCoords(M.radius,M.phi,M.theta)}setFromSphericalCoords(M,D,t){const e=Math.sin(D)*M;return this.x=e*Math.sin(t),this.y=Math.cos(D)*M,this.z=e*Math.cos(t),this}setFromCylindrical(M){return this.setFromCylindricalCoords(M.radius,M.theta,M.y)}setFromCylindricalCoords(M,D,t){return this.x=M*Math.sin(D),this.y=t,this.z=M*Math.cos(D),this}setFromMatrixPosition(M){const D=M.elements;return this.x=D[12],this.y=D[13],this.z=D[14],this}setFromMatrixScale(M){const D=this.setFromMatrixColumn(M,0).length(),t=this.setFromMatrixColumn(M,1).length(),e=this.setFromMatrixColumn(M,2).length();return this.x=D,this.y=t,this.z=e,this}setFromMatrixColumn(M,D){return this.fromArray(M.elements,D*4)}setFromMatrix3Column(M,D){return this.fromArray(M.elements,D*3)}equals(M){return M.x===this.x&&M.y===this.y&&M.z===this.z}fromArray(M,D=0){return this.x=M[D],this.y=M[D+1],this.z=M[D+2],this}toArray(M=[],D=0){return M[D]=this.x,M[D+1]=this.y,M[D+2]=this.z,M}fromBufferAttribute(M,D,t){return t!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=M.getX(D),this.y=M.getY(D),this.z=M.getZ(D),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const M=(Math.random()-.5)*2,D=Math.random()*Math.PI*2,t=Math.sqrt(1-M**2);return this.x=t*Math.cos(D),this.y=t*Math.sin(D),this.z=M,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}O.prototype.isVector3=!0;const aN=new O,En=new sD;class CD{constructor(M=new O(1/0,1/0,1/0),D=new O(-1/0,-1/0,-1/0)){this.min=M,this.max=D}set(M,D){return this.min.copy(M),this.max.copy(D),this}setFromArray(M){let D=1/0,t=1/0,e=1/0,N=-1/0,A=-1/0,i=-1/0;for(let I=0,z=M.length;I<z;I+=3){const T=M[I],u=M[I+1],g=M[I+2];T<D&&(D=T),u<t&&(t=u),g<e&&(e=g),T>N&&(N=T),u>A&&(A=u),g>i&&(i=g)}return this.min.set(D,t,e),this.max.set(N,A,i),this}setFromBufferAttribute(M){let D=1/0,t=1/0,e=1/0,N=-1/0,A=-1/0,i=-1/0;for(let I=0,z=M.count;I<z;I++){const T=M.getX(I),u=M.getY(I),g=M.getZ(I);T<D&&(D=T),u<t&&(t=u),g<e&&(e=g),T>N&&(N=T),u>A&&(A=u),g>i&&(i=g)}return this.min.set(D,t,e),this.max.set(N,A,i),this}setFromPoints(M){this.makeEmpty();for(let D=0,t=M.length;D<t;D++)this.expandByPoint(M[D]);return this}setFromCenterAndSize(M,D){const t=gt.copy(D).multiplyScalar(.5);return this.min.copy(M).sub(t),this.max.copy(M).add(t),this}setFromObject(M,D=!1){return this.makeEmpty(),this.expandByObject(M,D)}clone(){return new this.constructor().copy(this)}copy(M){return this.min.copy(M.min),this.max.copy(M.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(M){return this.isEmpty()?M.set(0,0,0):M.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(M){return this.isEmpty()?M.set(0,0,0):M.subVectors(this.max,this.min)}expandByPoint(M){return this.min.min(M),this.max.max(M),this}expandByVector(M){return this.min.sub(M),this.max.add(M),this}expandByScalar(M){return this.min.addScalar(-M),this.max.addScalar(M),this}expandByObject(M,D=!1){M.updateWorldMatrix(!1,!1);const t=M.geometry;if(t!==void 0)if(D&&t.attributes!=null&&t.attributes.position!==void 0){const N=t.attributes.position;for(let A=0,i=N.count;A<i;A++)gt.fromBufferAttribute(N,A).applyMatrix4(M.matrixWorld),this.expandByPoint(gt)}else t.boundingBox===null&&t.computeBoundingBox(),oN.copy(t.boundingBox),oN.applyMatrix4(M.matrixWorld),this.union(oN);const e=M.children;for(let N=0,A=e.length;N<A;N++)this.expandByObject(e[N],D);return this}containsPoint(M){return!(M.x<this.min.x||M.x>this.max.x||M.y<this.min.y||M.y>this.max.y||M.z<this.min.z||M.z>this.max.z)}containsBox(M){return this.min.x<=M.min.x&&M.max.x<=this.max.x&&this.min.y<=M.min.y&&M.max.y<=this.max.y&&this.min.z<=M.min.z&&M.max.z<=this.max.z}getParameter(M,D){return D.set((M.x-this.min.x)/(this.max.x-this.min.x),(M.y-this.min.y)/(this.max.y-this.min.y),(M.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(M){return!(M.max.x<this.min.x||M.min.x>this.max.x||M.max.y<this.min.y||M.min.y>this.max.y||M.max.z<this.min.z||M.min.z>this.max.z)}intersectsSphere(M){return this.clampPoint(M.center,gt),gt.distanceToSquared(M.center)<=M.radius*M.radius}intersectsPlane(M){let D,t;return M.normal.x>0?(D=M.normal.x*this.min.x,t=M.normal.x*this.max.x):(D=M.normal.x*this.max.x,t=M.normal.x*this.min.x),M.normal.y>0?(D+=M.normal.y*this.min.y,t+=M.normal.y*this.max.y):(D+=M.normal.y*this.max.y,t+=M.normal.y*this.min.y),M.normal.z>0?(D+=M.normal.z*this.min.z,t+=M.normal.z*this.max.z):(D+=M.normal.z*this.max.z,t+=M.normal.z*this.min.z),D<=-M.constant&&t>=-M.constant}intersectsTriangle(M){if(this.isEmpty())return!1;this.getCenter($t),Le.subVectors(this.max,$t),Lt.subVectors(M.a,$t),wt.subVectors(M.b,$t),Ot.subVectors(M.c,$t),HD.subVectors(wt,Lt),WD.subVectors(Ot,wt),rt.subVectors(Lt,Ot);let D=[0,-HD.z,HD.y,0,-WD.z,WD.y,0,-rt.z,rt.y,HD.z,0,-HD.x,WD.z,0,-WD.x,rt.z,0,-rt.x,-HD.y,HD.x,0,-WD.y,WD.x,0,-rt.y,rt.x,0];return!CN(D,Lt,wt,Ot,Le)||(D=[1,0,0,0,1,0,0,0,1],!CN(D,Lt,wt,Ot,Le))?!1:(we.crossVectors(HD,WD),D=[we.x,we.y,we.z],CN(D,Lt,wt,Ot,Le))}clampPoint(M,D){return D.copy(M).clamp(this.min,this.max)}distanceToPoint(M){return gt.copy(M).clamp(this.min,this.max).sub(M).length()}getBoundingSphere(M){return this.getCenter(M.center),M.radius=this.getSize(gt).length()*.5,M}intersect(M){return this.min.max(M.min),this.max.min(M.max),this.isEmpty()&&this.makeEmpty(),this}union(M){return this.min.min(M.min),this.max.max(M.max),this}applyMatrix4(M){return this.isEmpty()?this:(ZD[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(M),ZD[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(M),ZD[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(M),ZD[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(M),ZD[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(M),ZD[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(M),ZD[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(M),ZD[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(M),this.setFromPoints(ZD),this)}translate(M){return this.min.add(M),this.max.add(M),this}equals(M){return M.min.equals(this.min)&&M.max.equals(this.max)}}CD.prototype.isBox3=!0;const ZD=[new O,new O,new O,new O,new O,new O,new O,new O],gt=new O,oN=new CD,Lt=new O,wt=new O,Ot=new O,HD=new O,WD=new O,rt=new O,$t=new O,Le=new O,we=new O,st=new O;function CN(n,M,D,t,e){for(let N=0,A=n.length-3;N<=A;N+=3){st.fromArray(n,N);const i=e.x*Math.abs(st.x)+e.y*Math.abs(st.y)+e.z*Math.abs(st.z),I=M.dot(st),z=D.dot(st),T=t.dot(st);if(Math.max(-Math.max(I,z,T),Math.min(I,z,T))>i)return!1}return!0}const di=new CD,ln=new O,Oe=new O,LN=new O;class xt{constructor(M=new O,D=-1){this.center=M,this.radius=D}set(M,D){return this.center.copy(M),this.radius=D,this}setFromPoints(M,D){const t=this.center;D!==void 0?t.copy(D):di.setFromPoints(M).getCenter(t);let e=0;for(let N=0,A=M.length;N<A;N++)e=Math.max(e,t.distanceToSquared(M[N]));return this.radius=Math.sqrt(e),this}copy(M){return this.center.copy(M.center),this.radius=M.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(M){return M.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(M){return M.distanceTo(this.center)-this.radius}intersectsSphere(M){const D=this.radius+M.radius;return M.center.distanceToSquared(this.center)<=D*D}intersectsBox(M){return M.intersectsSphere(this)}intersectsPlane(M){return Math.abs(M.distanceToPoint(this.center))<=this.radius}clampPoint(M,D){const t=this.center.distanceToSquared(M);return D.copy(M),t>this.radius*this.radius&&(D.sub(this.center).normalize(),D.multiplyScalar(this.radius).add(this.center)),D}getBoundingBox(M){return this.isEmpty()?(M.makeEmpty(),M):(M.set(this.center,this.center),M.expandByScalar(this.radius),M)}applyMatrix4(M){return this.center.applyMatrix4(M),this.radius=this.radius*M.getMaxScaleOnAxis(),this}translate(M){return this.center.add(M),this}expandByPoint(M){LN.subVectors(M,this.center);const D=LN.lengthSq();if(D>this.radius*this.radius){const t=Math.sqrt(D),e=(t-this.radius)*.5;this.center.add(LN.multiplyScalar(e/t)),this.radius+=e}return this}union(M){return this.center.equals(M.center)===!0?Oe.set(0,0,1).multiplyScalar(M.radius):Oe.subVectors(M.center,this.center).normalize().multiplyScalar(M.radius),this.expandByPoint(ln.copy(M.center).add(Oe)),this.expandByPoint(ln.copy(M.center).sub(Oe)),this}equals(M){return M.center.equals(this.center)&&M.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _D=new O,wN=new O,xe=new O,qD=new O,ON=new O,Ee=new O,xN=new O;class Et{constructor(M=new O,D=new O(0,0,-1)){this.origin=M,this.direction=D}set(M,D){return this.origin.copy(M),this.direction.copy(D),this}copy(M){return this.origin.copy(M.origin),this.direction.copy(M.direction),this}at(M,D){return D.copy(this.direction).multiplyScalar(M).add(this.origin)}lookAt(M){return this.direction.copy(M).sub(this.origin).normalize(),this}recast(M){return this.origin.copy(this.at(M,_D)),this}closestPointToPoint(M,D){D.subVectors(M,this.origin);const t=D.dot(this.direction);return t<0?D.copy(this.origin):D.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(M){return Math.sqrt(this.distanceSqToPoint(M))}distanceSqToPoint(M){const D=_D.subVectors(M,this.origin).dot(this.direction);return D<0?this.origin.distanceToSquared(M):(_D.copy(this.direction).multiplyScalar(D).add(this.origin),_D.distanceToSquared(M))}distanceSqToSegment(M,D,t,e){wN.copy(M).add(D).multiplyScalar(.5),xe.copy(D).sub(M).normalize(),qD.copy(this.origin).sub(wN);const N=M.distanceTo(D)*.5,A=-this.direction.dot(xe),i=qD.dot(this.direction),I=-qD.dot(xe),z=qD.lengthSq(),T=Math.abs(1-A*A);let u,g,r,j;if(T>0)if(u=A*I-i,g=A*i-I,j=N*T,u>=0)if(g>=-j)if(g<=j){const y=1/T;u*=y,g*=y,r=u*(u+A*g+2*i)+g*(A*u+g+2*I)+z}else g=N,u=Math.max(0,-(A*g+i)),r=-u*u+g*(g+2*I)+z;else g=-N,u=Math.max(0,-(A*g+i)),r=-u*u+g*(g+2*I)+z;else g<=-j?(u=Math.max(0,-(-A*N+i)),g=u>0?-N:Math.min(Math.max(-N,-I),N),r=-u*u+g*(g+2*I)+z):g<=j?(u=0,g=Math.min(Math.max(-N,-I),N),r=g*(g+2*I)+z):(u=Math.max(0,-(A*N+i)),g=u>0?N:Math.min(Math.max(-N,-I),N),r=-u*u+g*(g+2*I)+z);else g=A>0?-N:N,u=Math.max(0,-(A*g+i)),r=-u*u+g*(g+2*I)+z;return t&&t.copy(this.direction).multiplyScalar(u).add(this.origin),e&&e.copy(xe).multiplyScalar(g).add(wN),r}intersectSphere(M,D){_D.subVectors(M.center,this.origin);const t=_D.dot(this.direction),e=_D.dot(_D)-t*t,N=M.radius*M.radius;if(e>N)return null;const A=Math.sqrt(N-e),i=t-A,I=t+A;return i<0&&I<0?null:i<0?this.at(I,D):this.at(i,D)}intersectsSphere(M){return this.distanceSqToPoint(M.center)<=M.radius*M.radius}distanceToPlane(M){const D=M.normal.dot(this.direction);if(D===0)return M.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(M.normal)+M.constant)/D;return t>=0?t:null}intersectPlane(M,D){const t=this.distanceToPlane(M);return t===null?null:this.at(t,D)}intersectsPlane(M){const D=M.distanceToPoint(this.origin);return D===0||M.normal.dot(this.direction)*D<0}intersectBox(M,D){let t,e,N,A,i,I;const z=1/this.direction.x,T=1/this.direction.y,u=1/this.direction.z,g=this.origin;return z>=0?(t=(M.min.x-g.x)*z,e=(M.max.x-g.x)*z):(t=(M.max.x-g.x)*z,e=(M.min.x-g.x)*z),T>=0?(N=(M.min.y-g.y)*T,A=(M.max.y-g.y)*T):(N=(M.max.y-g.y)*T,A=(M.min.y-g.y)*T),t>A||N>e||((N>t||t!==t)&&(t=N),(A<e||e!==e)&&(e=A),u>=0?(i=(M.min.z-g.z)*u,I=(M.max.z-g.z)*u):(i=(M.max.z-g.z)*u,I=(M.min.z-g.z)*u),t>I||i>e)||((i>t||t!==t)&&(t=i),(I<e||e!==e)&&(e=I),e<0)?null:this.at(t>=0?t:e,D)}intersectsBox(M){return this.intersectBox(M,_D)!==null}intersectTriangle(M,D,t,e,N){ON.subVectors(D,M),Ee.subVectors(t,M),xN.crossVectors(ON,Ee);let A=this.direction.dot(xN),i;if(A>0){if(e)return null;i=1}else if(A<0)i=-1,A=-A;else return null;qD.subVectors(this.origin,M);const I=i*this.direction.dot(Ee.crossVectors(qD,Ee));if(I<0)return null;const z=i*this.direction.dot(ON.cross(qD));if(z<0||I+z>A)return null;const T=-i*qD.dot(xN);return T<0?null:this.at(T/A,N)}applyMatrix4(M){return this.origin.applyMatrix4(M),this.direction.transformDirection(M),this}equals(M){return M.origin.equals(this.origin)&&M.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class aM{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(M,D,t,e,N,A,i,I,z,T,u,g,r,j,y,o){const c=this.elements;return c[0]=M,c[4]=D,c[8]=t,c[12]=e,c[1]=N,c[5]=A,c[9]=i,c[13]=I,c[2]=z,c[6]=T,c[10]=u,c[14]=g,c[3]=r,c[7]=j,c[11]=y,c[15]=o,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aM().fromArray(this.elements)}copy(M){const D=this.elements,t=M.elements;return D[0]=t[0],D[1]=t[1],D[2]=t[2],D[3]=t[3],D[4]=t[4],D[5]=t[5],D[6]=t[6],D[7]=t[7],D[8]=t[8],D[9]=t[9],D[10]=t[10],D[11]=t[11],D[12]=t[12],D[13]=t[13],D[14]=t[14],D[15]=t[15],this}copyPosition(M){const D=this.elements,t=M.elements;return D[12]=t[12],D[13]=t[13],D[14]=t[14],this}setFromMatrix3(M){const D=M.elements;return this.set(D[0],D[3],D[6],0,D[1],D[4],D[7],0,D[2],D[5],D[8],0,0,0,0,1),this}extractBasis(M,D,t){return M.setFromMatrixColumn(this,0),D.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(M,D,t){return this.set(M.x,D.x,t.x,0,M.y,D.y,t.y,0,M.z,D.z,t.z,0,0,0,0,1),this}extractRotation(M){const D=this.elements,t=M.elements,e=1/lt.setFromMatrixColumn(M,0).length(),N=1/lt.setFromMatrixColumn(M,1).length(),A=1/lt.setFromMatrixColumn(M,2).length();return D[0]=t[0]*e,D[1]=t[1]*e,D[2]=t[2]*e,D[3]=0,D[4]=t[4]*N,D[5]=t[5]*N,D[6]=t[6]*N,D[7]=0,D[8]=t[8]*A,D[9]=t[9]*A,D[10]=t[10]*A,D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,this}makeRotationFromEuler(M){M&&M.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const D=this.elements,t=M.x,e=M.y,N=M.z,A=Math.cos(t),i=Math.sin(t),I=Math.cos(e),z=Math.sin(e),T=Math.cos(N),u=Math.sin(N);if(M.order==="XYZ"){const g=A*T,r=A*u,j=i*T,y=i*u;D[0]=I*T,D[4]=-I*u,D[8]=z,D[1]=r+j*z,D[5]=g-y*z,D[9]=-i*I,D[2]=y-g*z,D[6]=j+r*z,D[10]=A*I}else if(M.order==="YXZ"){const g=I*T,r=I*u,j=z*T,y=z*u;D[0]=g+y*i,D[4]=j*i-r,D[8]=A*z,D[1]=A*u,D[5]=A*T,D[9]=-i,D[2]=r*i-j,D[6]=y+g*i,D[10]=A*I}else if(M.order==="ZXY"){const g=I*T,r=I*u,j=z*T,y=z*u;D[0]=g-y*i,D[4]=-A*u,D[8]=j+r*i,D[1]=r+j*i,D[5]=A*T,D[9]=y-g*i,D[2]=-A*z,D[6]=i,D[10]=A*I}else if(M.order==="ZYX"){const g=A*T,r=A*u,j=i*T,y=i*u;D[0]=I*T,D[4]=j*z-r,D[8]=g*z+y,D[1]=I*u,D[5]=y*z+g,D[9]=r*z-j,D[2]=-z,D[6]=i*I,D[10]=A*I}else if(M.order==="YZX"){const g=A*I,r=A*z,j=i*I,y=i*z;D[0]=I*T,D[4]=y-g*u,D[8]=j*u+r,D[1]=u,D[5]=A*T,D[9]=-i*T,D[2]=-z*T,D[6]=r*u+j,D[10]=g-y*u}else if(M.order==="XZY"){const g=A*I,r=A*z,j=i*I,y=i*z;D[0]=I*T,D[4]=-u,D[8]=z*T,D[1]=g*u+y,D[5]=A*T,D[9]=r*u-j,D[2]=j*u-r,D[6]=i*T,D[10]=y*u+g}return D[3]=0,D[7]=0,D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,this}makeRotationFromQuaternion(M){return this.compose(vi,M,pi)}lookAt(M,D,t){const e=this.elements;return jD.subVectors(M,D),jD.lengthSq()===0&&(jD.z=1),jD.normalize(),XD.crossVectors(t,jD),XD.lengthSq()===0&&(Math.abs(t.z)===1?jD.x+=1e-4:jD.z+=1e-4,jD.normalize(),XD.crossVectors(t,jD)),XD.normalize(),le.crossVectors(jD,XD),e[0]=XD.x,e[4]=le.x,e[8]=jD.x,e[1]=XD.y,e[5]=le.y,e[9]=jD.y,e[2]=XD.z,e[6]=le.z,e[10]=jD.z,this}multiply(M,D){return D!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(M,D)):this.multiplyMatrices(this,M)}premultiply(M){return this.multiplyMatrices(M,this)}multiplyMatrices(M,D){const t=M.elements,e=D.elements,N=this.elements,A=t[0],i=t[4],I=t[8],z=t[12],T=t[1],u=t[5],g=t[9],r=t[13],j=t[2],y=t[6],o=t[10],c=t[14],s=t[3],l=t[7],C=t[11],E=t[15],v=e[0],h=e[4],F=e[8],MM=e[12],Z=e[1],a=e[5],p=e[9],Y=e[13],k=e[2],f=e[6],Q=e[10],K=e[14],W=e[3],IM=e[7],_=e[11],H=e[15];return N[0]=A*v+i*Z+I*k+z*W,N[4]=A*h+i*a+I*f+z*IM,N[8]=A*F+i*p+I*Q+z*_,N[12]=A*MM+i*Y+I*K+z*H,N[1]=T*v+u*Z+g*k+r*W,N[5]=T*h+u*a+g*f+r*IM,N[9]=T*F+u*p+g*Q+r*_,N[13]=T*MM+u*Y+g*K+r*H,N[2]=j*v+y*Z+o*k+c*W,N[6]=j*h+y*a+o*f+c*IM,N[10]=j*F+y*p+o*Q+c*_,N[14]=j*MM+y*Y+o*K+c*H,N[3]=s*v+l*Z+C*k+E*W,N[7]=s*h+l*a+C*f+E*IM,N[11]=s*F+l*p+C*Q+E*_,N[15]=s*MM+l*Y+C*K+E*H,this}multiplyScalar(M){const D=this.elements;return D[0]*=M,D[4]*=M,D[8]*=M,D[12]*=M,D[1]*=M,D[5]*=M,D[9]*=M,D[13]*=M,D[2]*=M,D[6]*=M,D[10]*=M,D[14]*=M,D[3]*=M,D[7]*=M,D[11]*=M,D[15]*=M,this}determinant(){const M=this.elements,D=M[0],t=M[4],e=M[8],N=M[12],A=M[1],i=M[5],I=M[9],z=M[13],T=M[2],u=M[6],g=M[10],r=M[14],j=M[3],y=M[7],o=M[11],c=M[15];return j*(+N*I*u-e*z*u-N*i*g+t*z*g+e*i*r-t*I*r)+y*(+D*I*r-D*z*g+N*A*g-e*A*r+e*z*T-N*I*T)+o*(+D*z*u-D*i*r-N*A*u+t*A*r+N*i*T-t*z*T)+c*(-e*i*T-D*I*u+D*i*g+e*A*u-t*A*g+t*I*T)}transpose(){const M=this.elements;let D;return D=M[1],M[1]=M[4],M[4]=D,D=M[2],M[2]=M[8],M[8]=D,D=M[6],M[6]=M[9],M[9]=D,D=M[3],M[3]=M[12],M[12]=D,D=M[7],M[7]=M[13],M[13]=D,D=M[11],M[11]=M[14],M[14]=D,this}setPosition(M,D,t){const e=this.elements;return M.isVector3?(e[12]=M.x,e[13]=M.y,e[14]=M.z):(e[12]=M,e[13]=D,e[14]=t),this}invert(){const M=this.elements,D=M[0],t=M[1],e=M[2],N=M[3],A=M[4],i=M[5],I=M[6],z=M[7],T=M[8],u=M[9],g=M[10],r=M[11],j=M[12],y=M[13],o=M[14],c=M[15],s=u*o*z-y*g*z+y*I*r-i*o*r-u*I*c+i*g*c,l=j*g*z-T*o*z-j*I*r+A*o*r+T*I*c-A*g*c,C=T*y*z-j*u*z+j*i*r-A*y*r-T*i*c+A*u*c,E=j*u*I-T*y*I-j*i*g+A*y*g+T*i*o-A*u*o,v=D*s+t*l+e*C+N*E;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const h=1/v;return M[0]=s*h,M[1]=(y*g*N-u*o*N-y*e*r+t*o*r+u*e*c-t*g*c)*h,M[2]=(i*o*N-y*I*N+y*e*z-t*o*z-i*e*c+t*I*c)*h,M[3]=(u*I*N-i*g*N-u*e*z+t*g*z+i*e*r-t*I*r)*h,M[4]=l*h,M[5]=(T*o*N-j*g*N+j*e*r-D*o*r-T*e*c+D*g*c)*h,M[6]=(j*I*N-A*o*N-j*e*z+D*o*z+A*e*c-D*I*c)*h,M[7]=(A*g*N-T*I*N+T*e*z-D*g*z-A*e*r+D*I*r)*h,M[8]=C*h,M[9]=(j*u*N-T*y*N-j*t*r+D*y*r+T*t*c-D*u*c)*h,M[10]=(A*y*N-j*i*N+j*t*z-D*y*z-A*t*c+D*i*c)*h,M[11]=(T*i*N-A*u*N-T*t*z+D*u*z+A*t*r-D*i*r)*h,M[12]=E*h,M[13]=(T*y*e-j*u*e+j*t*g-D*y*g-T*t*o+D*u*o)*h,M[14]=(j*i*e-A*y*e-j*t*I+D*y*I+A*t*o-D*i*o)*h,M[15]=(A*u*e-T*i*e+T*t*I-D*u*I-A*t*g+D*i*g)*h,this}scale(M){const D=this.elements,t=M.x,e=M.y,N=M.z;return D[0]*=t,D[4]*=e,D[8]*=N,D[1]*=t,D[5]*=e,D[9]*=N,D[2]*=t,D[6]*=e,D[10]*=N,D[3]*=t,D[7]*=e,D[11]*=N,this}getMaxScaleOnAxis(){const M=this.elements,D=M[0]*M[0]+M[1]*M[1]+M[2]*M[2],t=M[4]*M[4]+M[5]*M[5]+M[6]*M[6],e=M[8]*M[8]+M[9]*M[9]+M[10]*M[10];return Math.sqrt(Math.max(D,t,e))}makeTranslation(M,D,t){return this.set(1,0,0,M,0,1,0,D,0,0,1,t,0,0,0,1),this}makeRotationX(M){const D=Math.cos(M),t=Math.sin(M);return this.set(1,0,0,0,0,D,-t,0,0,t,D,0,0,0,0,1),this}makeRotationY(M){const D=Math.cos(M),t=Math.sin(M);return this.set(D,0,t,0,0,1,0,0,-t,0,D,0,0,0,0,1),this}makeRotationZ(M){const D=Math.cos(M),t=Math.sin(M);return this.set(D,-t,0,0,t,D,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(M,D){const t=Math.cos(D),e=Math.sin(D),N=1-t,A=M.x,i=M.y,I=M.z,z=N*A,T=N*i;return this.set(z*A+t,z*i-e*I,z*I+e*i,0,z*i+e*I,T*i+t,T*I-e*A,0,z*I-e*i,T*I+e*A,N*I*I+t,0,0,0,0,1),this}makeScale(M,D,t){return this.set(M,0,0,0,0,D,0,0,0,0,t,0,0,0,0,1),this}makeShear(M,D,t,e,N,A){return this.set(1,t,N,0,M,1,A,0,D,e,1,0,0,0,0,1),this}compose(M,D,t){const e=this.elements,N=D._x,A=D._y,i=D._z,I=D._w,z=N+N,T=A+A,u=i+i,g=N*z,r=N*T,j=N*u,y=A*T,o=A*u,c=i*u,s=I*z,l=I*T,C=I*u,E=t.x,v=t.y,h=t.z;return e[0]=(1-(y+c))*E,e[1]=(r+C)*E,e[2]=(j-l)*E,e[3]=0,e[4]=(r-C)*v,e[5]=(1-(g+c))*v,e[6]=(o+s)*v,e[7]=0,e[8]=(j+l)*h,e[9]=(o-s)*h,e[10]=(1-(g+y))*h,e[11]=0,e[12]=M.x,e[13]=M.y,e[14]=M.z,e[15]=1,this}decompose(M,D,t){const e=this.elements;let N=lt.set(e[0],e[1],e[2]).length();const A=lt.set(e[4],e[5],e[6]).length(),i=lt.set(e[8],e[9],e[10]).length();this.determinant()<0&&(N=-N),M.x=e[12],M.y=e[13],M.z=e[14],ED.copy(this);const z=1/N,T=1/A,u=1/i;return ED.elements[0]*=z,ED.elements[1]*=z,ED.elements[2]*=z,ED.elements[4]*=T,ED.elements[5]*=T,ED.elements[6]*=T,ED.elements[8]*=u,ED.elements[9]*=u,ED.elements[10]*=u,D.setFromRotationMatrix(ED),t.x=N,t.y=A,t.z=i,this}makePerspective(M,D,t,e,N,A){A===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const i=this.elements,I=2*N/(D-M),z=2*N/(t-e),T=(D+M)/(D-M),u=(t+e)/(t-e),g=-(A+N)/(A-N),r=-2*A*N/(A-N);return i[0]=I,i[4]=0,i[8]=T,i[12]=0,i[1]=0,i[5]=z,i[9]=u,i[13]=0,i[2]=0,i[6]=0,i[10]=g,i[14]=r,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(M,D,t,e,N,A){const i=this.elements,I=1/(D-M),z=1/(t-e),T=1/(A-N),u=(D+M)*I,g=(t+e)*z,r=(A+N)*T;return i[0]=2*I,i[4]=0,i[8]=0,i[12]=-u,i[1]=0,i[5]=2*z,i[9]=0,i[13]=-g,i[2]=0,i[6]=0,i[10]=-2*T,i[14]=-r,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(M){const D=this.elements,t=M.elements;for(let e=0;e<16;e++)if(D[e]!==t[e])return!1;return!0}fromArray(M,D=0){for(let t=0;t<16;t++)this.elements[t]=M[t+D];return this}toArray(M=[],D=0){const t=this.elements;return M[D]=t[0],M[D+1]=t[1],M[D+2]=t[2],M[D+3]=t[3],M[D+4]=t[4],M[D+5]=t[5],M[D+6]=t[6],M[D+7]=t[7],M[D+8]=t[8],M[D+9]=t[9],M[D+10]=t[10],M[D+11]=t[11],M[D+12]=t[12],M[D+13]=t[13],M[D+14]=t[14],M[D+15]=t[15],M}}aM.prototype.isMatrix4=!0;const lt=new O,ED=new aM,vi=new O(0,0,0),pi=new O(1,1,1),XD=new O,le=new O,jD=new O,dn=new aM,vn=new sD;class JD{constructor(M=0,D=0,t=0,e=JD.DefaultOrder){this._x=M,this._y=D,this._z=t,this._order=e}get x(){return this._x}set x(M){this._x=M,this._onChangeCallback()}get y(){return this._y}set y(M){this._y=M,this._onChangeCallback()}get z(){return this._z}set z(M){this._z=M,this._onChangeCallback()}get order(){return this._order}set order(M){this._order=M,this._onChangeCallback()}set(M,D,t,e=this._order){return this._x=M,this._y=D,this._z=t,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(M){return this._x=M._x,this._y=M._y,this._z=M._z,this._order=M._order,this._onChangeCallback(),this}setFromRotationMatrix(M,D=this._order,t=!0){const e=M.elements,N=e[0],A=e[4],i=e[8],I=e[1],z=e[5],T=e[9],u=e[2],g=e[6],r=e[10];switch(D){case"XYZ":this._y=Math.asin(cD(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-T,r),this._z=Math.atan2(-A,N)):(this._x=Math.atan2(g,z),this._z=0);break;case"YXZ":this._x=Math.asin(-cD(T,-1,1)),Math.abs(T)<.9999999?(this._y=Math.atan2(i,r),this._z=Math.atan2(I,z)):(this._y=Math.atan2(-u,N),this._z=0);break;case"ZXY":this._x=Math.asin(cD(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-u,r),this._z=Math.atan2(-A,z)):(this._y=0,this._z=Math.atan2(I,N));break;case"ZYX":this._y=Math.asin(-cD(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,r),this._z=Math.atan2(I,N)):(this._x=0,this._z=Math.atan2(-A,z));break;case"YZX":this._z=Math.asin(cD(I,-1,1)),Math.abs(I)<.9999999?(this._x=Math.atan2(-T,z),this._y=Math.atan2(-u,N)):(this._x=0,this._y=Math.atan2(i,r));break;case"XZY":this._z=Math.asin(-cD(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(g,z),this._y=Math.atan2(i,N)):(this._x=Math.atan2(-T,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+D)}return this._order=D,t===!0&&this._onChangeCallback(),this}setFromQuaternion(M,D,t){return dn.makeRotationFromQuaternion(M),this.setFromRotationMatrix(dn,D,t)}setFromVector3(M,D=this._order){return this.set(M.x,M.y,M.z,D)}reorder(M){return vn.setFromEuler(this),this.setFromQuaternion(vn,M)}equals(M){return M._x===this._x&&M._y===this._y&&M._z===this._z&&M._order===this._order}fromArray(M){return this._x=M[0],this._y=M[1],this._z=M[2],M[3]!==void 0&&(this._order=M[3]),this._onChangeCallback(),this}toArray(M=[],D=0){return M[D]=this._x,M[D+1]=this._y,M[D+2]=this._z,M[D+3]=this._order,M}toVector3(M){return M?M.set(this._x,this._y,this._z):new O(this._x,this._y,this._z)}_onChange(M){return this._onChangeCallback=M,this}_onChangeCallback(){}}JD.prototype.isEuler=!0,JD.DefaultOrder="XYZ",JD.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class pn{constructor(){this.mask=1}set(M){this.mask=(1<<M|0)>>>0}enable(M){this.mask|=1<<M|0}enableAll(){this.mask=-1}toggle(M){this.mask^=1<<M|0}disable(M){this.mask&=~(1<<M|0)}disableAll(){this.mask=0}test(M){return(this.mask&M.mask)!==0}isEnabled(M){return(this.mask&(1<<M|0))!==0}}let hi=0;const hn=new O,dt=new sD,bD=new aM,de=new O,Me=new O,Yi=new O,Ui=new sD,Yn=new O(1,0,0),Un=new O(0,1,0),Qn=new O(0,0,1),Qi={type:"added"},fn={type:"removed"};class ZM extends Tt{constructor(){super(),Object.defineProperty(this,"id",{value:hi++}),this.uuid=vD(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ZM.DefaultUp.clone();const M=new O,D=new JD,t=new sD,e=new O(1,1,1);function N(){t.setFromEuler(D,!1)}function A(){D.setFromQuaternion(t,void 0,!1)}D._onChange(N),t._onChange(A),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:M},rotation:{configurable:!0,enumerable:!0,value:D},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new aM},normalMatrix:{value:new zD}}),this.matrix=new aM,this.matrixWorld=new aM,this.matrixAutoUpdate=ZM.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(M){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(M),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(M){return this.quaternion.premultiply(M),this}setRotationFromAxisAngle(M,D){this.quaternion.setFromAxisAngle(M,D)}setRotationFromEuler(M){this.quaternion.setFromEuler(M,!0)}setRotationFromMatrix(M){this.quaternion.setFromRotationMatrix(M)}setRotationFromQuaternion(M){this.quaternion.copy(M)}rotateOnAxis(M,D){return dt.setFromAxisAngle(M,D),this.quaternion.multiply(dt),this}rotateOnWorldAxis(M,D){return dt.setFromAxisAngle(M,D),this.quaternion.premultiply(dt),this}rotateX(M){return this.rotateOnAxis(Yn,M)}rotateY(M){return this.rotateOnAxis(Un,M)}rotateZ(M){return this.rotateOnAxis(Qn,M)}translateOnAxis(M,D){return hn.copy(M).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(D)),this}translateX(M){return this.translateOnAxis(Yn,M)}translateY(M){return this.translateOnAxis(Un,M)}translateZ(M){return this.translateOnAxis(Qn,M)}localToWorld(M){return M.applyMatrix4(this.matrixWorld)}worldToLocal(M){return M.applyMatrix4(bD.copy(this.matrixWorld).invert())}lookAt(M,D,t){M.isVector3?de.copy(M):de.set(M,D,t);const e=this.parent;this.updateWorldMatrix(!0,!1),Me.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bD.lookAt(Me,de,this.up):bD.lookAt(de,Me,this.up),this.quaternion.setFromRotationMatrix(bD),e&&(bD.extractRotation(e.matrixWorld),dt.setFromRotationMatrix(bD),this.quaternion.premultiply(dt.invert()))}add(M){if(arguments.length>1){for(let D=0;D<arguments.length;D++)this.add(arguments[D]);return this}return M===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",M),this):(M&&M.isObject3D?(M.parent!==null&&M.parent.remove(M),M.parent=this,this.children.push(M),M.dispatchEvent(Qi)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",M),this)}remove(M){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const D=this.children.indexOf(M);return D!==-1&&(M.parent=null,this.children.splice(D,1),M.dispatchEvent(fn)),this}removeFromParent(){const M=this.parent;return M!==null&&M.remove(this),this}clear(){for(let M=0;M<this.children.length;M++){const D=this.children[M];D.parent=null,D.dispatchEvent(fn)}return this.children.length=0,this}attach(M){return this.updateWorldMatrix(!0,!1),bD.copy(this.matrixWorld).invert(),M.parent!==null&&(M.parent.updateWorldMatrix(!0,!1),bD.multiply(M.parent.matrixWorld)),M.applyMatrix4(bD),this.add(M),M.updateWorldMatrix(!1,!0),this}getObjectById(M){return this.getObjectByProperty("id",M)}getObjectByName(M){return this.getObjectByProperty("name",M)}getObjectByProperty(M,D){if(this[M]===D)return this;for(let t=0,e=this.children.length;t<e;t++){const A=this.children[t].getObjectByProperty(M,D);if(A!==void 0)return A}}getWorldPosition(M){return this.updateWorldMatrix(!0,!1),M.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(M){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Me,M,Yi),M}getWorldScale(M){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Me,Ui,M),M}getWorldDirection(M){this.updateWorldMatrix(!0,!1);const D=this.matrixWorld.elements;return M.set(D[8],D[9],D[10]).normalize()}raycast(){}traverse(M){M(this);const D=this.children;for(let t=0,e=D.length;t<e;t++)D[t].traverse(M)}traverseVisible(M){if(this.visible===!1)return;M(this);const D=this.children;for(let t=0,e=D.length;t<e;t++)D[t].traverseVisible(M)}traverseAncestors(M){const D=this.parent;D!==null&&(M(D),D.traverseAncestors(M))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(M){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||M)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,M=!0);const D=this.children;for(let t=0,e=D.length;t<e;t++)D[t].updateMatrixWorld(M)}updateWorldMatrix(M,D){const t=this.parent;if(M===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),D===!0){const e=this.children;for(let N=0,A=e.length;N<A;N++)e[N].updateWorldMatrix(!1,!0)}}toJSON(M){const D=M===void 0||typeof M=="string",t={};D&&(M={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const e={};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON()));function N(i,I){return i[I.uuid]===void 0&&(i[I.uuid]=I.toJSON(M)),I.uuid}if(this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(M).uuid)),this.environment&&this.environment.isTexture&&(e.environment=this.environment.toJSON(M).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=N(M.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const I=i.shapes;if(Array.isArray(I))for(let z=0,T=I.length;z<T;z++){const u=I[z];N(M.shapes,u)}else N(M.shapes,I)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(N(M.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let I=0,z=this.material.length;I<z;I++)i.push(N(M.materials,this.material[I]));e.material=i}else e.material=N(M.materials,this.material);if(this.children.length>0){e.children=[];for(let i=0;i<this.children.length;i++)e.children.push(this.children[i].toJSON(M).object)}if(this.animations.length>0){e.animations=[];for(let i=0;i<this.animations.length;i++){const I=this.animations[i];e.animations.push(N(M.animations,I))}}if(D){const i=A(M.geometries),I=A(M.materials),z=A(M.textures),T=A(M.images),u=A(M.shapes),g=A(M.skeletons),r=A(M.animations);i.length>0&&(t.geometries=i),I.length>0&&(t.materials=I),z.length>0&&(t.textures=z),T.length>0&&(t.images=T),u.length>0&&(t.shapes=u),g.length>0&&(t.skeletons=g),r.length>0&&(t.animations=r)}return t.object=e,t;function A(i){const I=[];for(const z in i){const T=i[z];delete T.metadata,I.push(T)}return I}}clone(M){return new this.constructor().copy(this,M)}copy(M,D=!0){if(this.name=M.name,this.up.copy(M.up),this.position.copy(M.position),this.rotation.order=M.rotation.order,this.quaternion.copy(M.quaternion),this.scale.copy(M.scale),this.matrix.copy(M.matrix),this.matrixWorld.copy(M.matrixWorld),this.matrixAutoUpdate=M.matrixAutoUpdate,this.matrixWorldNeedsUpdate=M.matrixWorldNeedsUpdate,this.layers.mask=M.layers.mask,this.visible=M.visible,this.castShadow=M.castShadow,this.receiveShadow=M.receiveShadow,this.frustumCulled=M.frustumCulled,this.renderOrder=M.renderOrder,this.userData=JSON.parse(JSON.stringify(M.userData)),D===!0)for(let t=0;t<M.children.length;t++){const e=M.children[t];this.add(e.clone())}return this}}ZM.DefaultUp=new O(0,1,0),ZM.DefaultMatrixAutoUpdate=!0,ZM.prototype.isObject3D=!0;const lD=new O,KD=new O,EN=new O,RD=new O,vt=new O,pt=new O,mn=new O,lN=new O,dN=new O,vN=new O;class MD{constructor(M=new O,D=new O,t=new O){this.a=M,this.b=D,this.c=t}static getNormal(M,D,t,e){e.subVectors(t,D),lD.subVectors(M,D),e.cross(lD);const N=e.lengthSq();return N>0?e.multiplyScalar(1/Math.sqrt(N)):e.set(0,0,0)}static getBarycoord(M,D,t,e,N){lD.subVectors(e,D),KD.subVectors(t,D),EN.subVectors(M,D);const A=lD.dot(lD),i=lD.dot(KD),I=lD.dot(EN),z=KD.dot(KD),T=KD.dot(EN),u=A*z-i*i;if(u===0)return N.set(-2,-1,-1);const g=1/u,r=(z*I-i*T)*g,j=(A*T-i*I)*g;return N.set(1-r-j,j,r)}static containsPoint(M,D,t,e){return this.getBarycoord(M,D,t,e,RD),RD.x>=0&&RD.y>=0&&RD.x+RD.y<=1}static getUV(M,D,t,e,N,A,i,I){return this.getBarycoord(M,D,t,e,RD),I.set(0,0),I.addScaledVector(N,RD.x),I.addScaledVector(A,RD.y),I.addScaledVector(i,RD.z),I}static isFrontFacing(M,D,t,e){return lD.subVectors(t,D),KD.subVectors(M,D),lD.cross(KD).dot(e)<0}set(M,D,t){return this.a.copy(M),this.b.copy(D),this.c.copy(t),this}setFromPointsAndIndices(M,D,t,e){return this.a.copy(M[D]),this.b.copy(M[t]),this.c.copy(M[e]),this}setFromAttributeAndIndices(M,D,t,e){return this.a.fromBufferAttribute(M,D),this.b.fromBufferAttribute(M,t),this.c.fromBufferAttribute(M,e),this}clone(){return new this.constructor().copy(this)}copy(M){return this.a.copy(M.a),this.b.copy(M.b),this.c.copy(M.c),this}getArea(){return lD.subVectors(this.c,this.b),KD.subVectors(this.a,this.b),lD.cross(KD).length()*.5}getMidpoint(M){return M.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(M){return MD.getNormal(this.a,this.b,this.c,M)}getPlane(M){return M.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(M,D){return MD.getBarycoord(M,this.a,this.b,this.c,D)}getUV(M,D,t,e,N){return MD.getUV(M,this.a,this.b,this.c,D,t,e,N)}containsPoint(M){return MD.containsPoint(M,this.a,this.b,this.c)}isFrontFacing(M){return MD.isFrontFacing(this.a,this.b,this.c,M)}intersectsBox(M){return M.intersectsTriangle(this)}closestPointToPoint(M,D){const t=this.a,e=this.b,N=this.c;let A,i;vt.subVectors(e,t),pt.subVectors(N,t),lN.subVectors(M,t);const I=vt.dot(lN),z=pt.dot(lN);if(I<=0&&z<=0)return D.copy(t);dN.subVectors(M,e);const T=vt.dot(dN),u=pt.dot(dN);if(T>=0&&u<=T)return D.copy(e);const g=I*u-T*z;if(g<=0&&I>=0&&T<=0)return A=I/(I-T),D.copy(t).addScaledVector(vt,A);vN.subVectors(M,N);const r=vt.dot(vN),j=pt.dot(vN);if(j>=0&&r<=j)return D.copy(N);const y=r*z-I*j;if(y<=0&&z>=0&&j<=0)return i=z/(z-j),D.copy(t).addScaledVector(pt,i);const o=T*j-r*u;if(o<=0&&u-T>=0&&r-j>=0)return mn.subVectors(N,e),i=(u-T)/(u-T+(r-j)),D.copy(e).addScaledVector(mn,i);const c=1/(o+y+g);return A=y*c,i=g*c,D.copy(t).addScaledVector(vt,A).addScaledVector(pt,i)}equals(M){return M.a.equals(this.a)&&M.b.equals(this.b)&&M.c.equals(this.c)}}let fi=0;class nD extends Tt{constructor(){super(),Object.defineProperty(this,"id",{value:fi++}),this.uuid=vD(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(M){this._alphaTest>0!=M>0&&this.version++,this._alphaTest=M}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(M){if(M!==void 0)for(const D in M){const t=M[D];if(t===void 0){console.warn("THREE.Material: '"+D+"' parameter is undefined.");continue}if(D==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1;continue}const e=this[D];if(e===void 0){console.warn("THREE."+this.type+": '"+D+"' is not a property of this material.");continue}e&&e.isColor?e.set(t):e&&e.isVector3&&t&&t.isVector3?e.copy(t):this[D]=t}}toJSON(M){const D=M===void 0||typeof M=="string";D&&(M={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(M).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(M).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(M).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(M).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(M).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(M).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(M).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(M).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(M).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(M).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(M).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(M).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(M).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(M).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(M).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(M).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(M).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(M).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(M).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(M).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(M).uuid),this.attenuationDistance!==void 0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==0&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function e(N){const A=[];for(const i in N){const I=N[i];delete I.metadata,A.push(I)}return A}if(D){const N=e(M.textures),A=e(M.images);N.length>0&&(t.textures=N),A.length>0&&(t.images=A)}return t}clone(){return new this.constructor().copy(this)}copy(M){this.name=M.name,this.fog=M.fog,this.blending=M.blending,this.side=M.side,this.vertexColors=M.vertexColors,this.opacity=M.opacity,this.transparent=M.transparent,this.blendSrc=M.blendSrc,this.blendDst=M.blendDst,this.blendEquation=M.blendEquation,this.blendSrcAlpha=M.blendSrcAlpha,this.blendDstAlpha=M.blendDstAlpha,this.blendEquationAlpha=M.blendEquationAlpha,this.depthFunc=M.depthFunc,this.depthTest=M.depthTest,this.depthWrite=M.depthWrite,this.stencilWriteMask=M.stencilWriteMask,this.stencilFunc=M.stencilFunc,this.stencilRef=M.stencilRef,this.stencilFuncMask=M.stencilFuncMask,this.stencilFail=M.stencilFail,this.stencilZFail=M.stencilZFail,this.stencilZPass=M.stencilZPass,this.stencilWrite=M.stencilWrite;const D=M.clippingPlanes;let t=null;if(D!==null){const e=D.length;t=new Array(e);for(let N=0;N!==e;++N)t[N]=D[N].clone()}return this.clippingPlanes=t,this.clipIntersection=M.clipIntersection,this.clipShadows=M.clipShadows,this.shadowSide=M.shadowSide,this.colorWrite=M.colorWrite,this.precision=M.precision,this.polygonOffset=M.polygonOffset,this.polygonOffsetFactor=M.polygonOffsetFactor,this.polygonOffsetUnits=M.polygonOffsetUnits,this.dithering=M.dithering,this.alphaTest=M.alphaTest,this.alphaToCoverage=M.alphaToCoverage,this.premultipliedAlpha=M.premultipliedAlpha,this.visible=M.visible,this.toneMapped=M.toneMapped,this.userData=JSON.parse(JSON.stringify(M.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(M){M===!0&&this.version++}}nD.prototype.isMaterial=!0;class pN extends nD{constructor(M){super(),this.type="MeshBasicMaterial",this.color=new cM(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.map=M.map,this.lightMap=M.lightMap,this.lightMapIntensity=M.lightMapIntensity,this.aoMap=M.aoMap,this.aoMapIntensity=M.aoMapIntensity,this.specularMap=M.specularMap,this.alphaMap=M.alphaMap,this.envMap=M.envMap,this.combine=M.combine,this.reflectivity=M.reflectivity,this.refractionRatio=M.refractionRatio,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.wireframeLinecap=M.wireframeLinecap,this.wireframeLinejoin=M.wireframeLinejoin,this}}pN.prototype.isMeshBasicMaterial=!0;const FM=new O,ve=new q;class DD{constructor(M,D,t){if(Array.isArray(M))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=M,this.itemSize=D,this.count=M!==void 0?M.length/D:0,this.normalized=t===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(M){M===!0&&this.version++}setUsage(M){return this.usage=M,this}copy(M){return this.name=M.name,this.array=new M.array.constructor(M.array),this.itemSize=M.itemSize,this.count=M.count,this.normalized=M.normalized,this.usage=M.usage,this}copyAt(M,D,t){M*=this.itemSize,t*=D.itemSize;for(let e=0,N=this.itemSize;e<N;e++)this.array[M+e]=D.array[t+e];return this}copyArray(M){return this.array.set(M),this}copyColorsArray(M){const D=this.array;let t=0;for(let e=0,N=M.length;e<N;e++){let A=M[e];A===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",e),A=new cM),D[t++]=A.r,D[t++]=A.g,D[t++]=A.b}return this}copyVector2sArray(M){const D=this.array;let t=0;for(let e=0,N=M.length;e<N;e++){let A=M[e];A===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",e),A=new q),D[t++]=A.x,D[t++]=A.y}return this}copyVector3sArray(M){const D=this.array;let t=0;for(let e=0,N=M.length;e<N;e++){let A=M[e];A===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",e),A=new O),D[t++]=A.x,D[t++]=A.y,D[t++]=A.z}return this}copyVector4sArray(M){const D=this.array;let t=0;for(let e=0,N=M.length;e<N;e++){let A=M[e];A===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",e),A=new PM),D[t++]=A.x,D[t++]=A.y,D[t++]=A.z,D[t++]=A.w}return this}applyMatrix3(M){if(this.itemSize===2)for(let D=0,t=this.count;D<t;D++)ve.fromBufferAttribute(this,D),ve.applyMatrix3(M),this.setXY(D,ve.x,ve.y);else if(this.itemSize===3)for(let D=0,t=this.count;D<t;D++)FM.fromBufferAttribute(this,D),FM.applyMatrix3(M),this.setXYZ(D,FM.x,FM.y,FM.z);return this}applyMatrix4(M){for(let D=0,t=this.count;D<t;D++)FM.x=this.getX(D),FM.y=this.getY(D),FM.z=this.getZ(D),FM.applyMatrix4(M),this.setXYZ(D,FM.x,FM.y,FM.z);return this}applyNormalMatrix(M){for(let D=0,t=this.count;D<t;D++)FM.x=this.getX(D),FM.y=this.getY(D),FM.z=this.getZ(D),FM.applyNormalMatrix(M),this.setXYZ(D,FM.x,FM.y,FM.z);return this}transformDirection(M){for(let D=0,t=this.count;D<t;D++)FM.x=this.getX(D),FM.y=this.getY(D),FM.z=this.getZ(D),FM.transformDirection(M),this.setXYZ(D,FM.x,FM.y,FM.z);return this}set(M,D=0){return this.array.set(M,D),this}getX(M){return this.array[M*this.itemSize]}setX(M,D){return this.array[M*this.itemSize]=D,this}getY(M){return this.array[M*this.itemSize+1]}setY(M,D){return this.array[M*this.itemSize+1]=D,this}getZ(M){return this.array[M*this.itemSize+2]}setZ(M,D){return this.array[M*this.itemSize+2]=D,this}getW(M){return this.array[M*this.itemSize+3]}setW(M,D){return this.array[M*this.itemSize+3]=D,this}setXY(M,D,t){return M*=this.itemSize,this.array[M+0]=D,this.array[M+1]=t,this}setXYZ(M,D,t,e){return M*=this.itemSize,this.array[M+0]=D,this.array[M+1]=t,this.array[M+2]=e,this}setXYZW(M,D,t,e,N){return M*=this.itemSize,this.array[M+0]=D,this.array[M+1]=t,this.array[M+2]=e,this.array[M+3]=N,this}onUpload(M){return this.onUploadCallback=M,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const M={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(M.name=this.name),this.usage!==35044&&(M.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(M.updateRange=this.updateRange),M}}DD.prototype.isBufferAttribute=!0;class kn extends DD{constructor(M,D,t){super(new Uint16Array(M),D,t)}}class Sn extends DD{constructor(M,D,t){super(new Uint32Array(M),D,t)}}class mi extends DD{constructor(M,D,t){super(new Uint16Array(M),D,t)}}mi.prototype.isFloat16BufferAttribute=!0;class VM extends DD{constructor(M,D,t){super(new Float32Array(M),D,t)}}let ki=0;const LD=new aM,hN=new ZM,ht=new O,yD=new CD,De=new CD,AD=new O;class BM extends Tt{constructor(){super(),Object.defineProperty(this,"id",{value:ki++}),this.uuid=vD(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(M){return Array.isArray(M)?this.index=new(On(M)?Sn:kn)(M,1):this.index=M,this}getAttribute(M){return this.attributes[M]}setAttribute(M,D){return this.attributes[M]=D,this}deleteAttribute(M){return delete this.attributes[M],this}hasAttribute(M){return this.attributes[M]!==void 0}addGroup(M,D,t=0){this.groups.push({start:M,count:D,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(M,D){this.drawRange.start=M,this.drawRange.count=D}applyMatrix4(M){const D=this.attributes.position;D!==void 0&&(D.applyMatrix4(M),D.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const N=new zD().getNormalMatrix(M);t.applyNormalMatrix(N),t.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(M),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(M){return LD.makeRotationFromQuaternion(M),this.applyMatrix4(LD),this}rotateX(M){return LD.makeRotationX(M),this.applyMatrix4(LD),this}rotateY(M){return LD.makeRotationY(M),this.applyMatrix4(LD),this}rotateZ(M){return LD.makeRotationZ(M),this.applyMatrix4(LD),this}translate(M,D,t){return LD.makeTranslation(M,D,t),this.applyMatrix4(LD),this}scale(M,D,t){return LD.makeScale(M,D,t),this.applyMatrix4(LD),this}lookAt(M){return hN.lookAt(M),hN.updateMatrix(),this.applyMatrix4(hN.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ht).negate(),this.translate(ht.x,ht.y,ht.z),this}setFromPoints(M){const D=[];for(let t=0,e=M.length;t<e;t++){const N=M[t];D.push(N.x,N.y,N.z||0)}return this.setAttribute("position",new VM(D,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new CD);const M=this.attributes.position,D=this.morphAttributes.position;if(M&&M.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(M!==void 0){if(this.boundingBox.setFromBufferAttribute(M),D)for(let t=0,e=D.length;t<e;t++){const N=D[t];yD.setFromBufferAttribute(N),this.morphTargetsRelative?(AD.addVectors(this.boundingBox.min,yD.min),this.boundingBox.expandByPoint(AD),AD.addVectors(this.boundingBox.max,yD.max),this.boundingBox.expandByPoint(AD)):(this.boundingBox.expandByPoint(yD.min),this.boundingBox.expandByPoint(yD.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xt);const M=this.attributes.position,D=this.morphAttributes.position;if(M&&M.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(M){const t=this.boundingSphere.center;if(yD.setFromBufferAttribute(M),D)for(let N=0,A=D.length;N<A;N++){const i=D[N];De.setFromBufferAttribute(i),this.morphTargetsRelative?(AD.addVectors(yD.min,De.min),yD.expandByPoint(AD),AD.addVectors(yD.max,De.max),yD.expandByPoint(AD)):(yD.expandByPoint(De.min),yD.expandByPoint(De.max))}yD.getCenter(t);let e=0;for(let N=0,A=M.count;N<A;N++)AD.fromBufferAttribute(M,N),e=Math.max(e,t.distanceToSquared(AD));if(D)for(let N=0,A=D.length;N<A;N++){const i=D[N],I=this.morphTargetsRelative;for(let z=0,T=i.count;z<T;z++)AD.fromBufferAttribute(i,z),I&&(ht.fromBufferAttribute(M,z),AD.add(ht)),e=Math.max(e,t.distanceToSquared(AD))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const M=this.index,D=this.attributes;if(M===null||D.position===void 0||D.normal===void 0||D.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=M.array,e=D.position.array,N=D.normal.array,A=D.uv.array,i=e.length/3;D.tangent===void 0&&this.setAttribute("tangent",new DD(new Float32Array(4*i),4));const I=D.tangent.array,z=[],T=[];for(let Z=0;Z<i;Z++)z[Z]=new O,T[Z]=new O;const u=new O,g=new O,r=new O,j=new q,y=new q,o=new q,c=new O,s=new O;function l(Z,a,p){u.fromArray(e,Z*3),g.fromArray(e,a*3),r.fromArray(e,p*3),j.fromArray(A,Z*2),y.fromArray(A,a*2),o.fromArray(A,p*2),g.sub(u),r.sub(u),y.sub(j),o.sub(j);const Y=1/(y.x*o.y-o.x*y.y);!isFinite(Y)||(c.copy(g).multiplyScalar(o.y).addScaledVector(r,-y.y).multiplyScalar(Y),s.copy(r).multiplyScalar(y.x).addScaledVector(g,-o.x).multiplyScalar(Y),z[Z].add(c),z[a].add(c),z[p].add(c),T[Z].add(s),T[a].add(s),T[p].add(s))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.length}]);for(let Z=0,a=C.length;Z<a;++Z){const p=C[Z],Y=p.start,k=p.count;for(let f=Y,Q=Y+k;f<Q;f+=3)l(t[f+0],t[f+1],t[f+2])}const E=new O,v=new O,h=new O,F=new O;function MM(Z){h.fromArray(N,Z*3),F.copy(h);const a=z[Z];E.copy(a),E.sub(h.multiplyScalar(h.dot(a))).normalize(),v.crossVectors(F,a);const Y=v.dot(T[Z])<0?-1:1;I[Z*4]=E.x,I[Z*4+1]=E.y,I[Z*4+2]=E.z,I[Z*4+3]=Y}for(let Z=0,a=C.length;Z<a;++Z){const p=C[Z],Y=p.start,k=p.count;for(let f=Y,Q=Y+k;f<Q;f+=3)MM(t[f+0]),MM(t[f+1]),MM(t[f+2])}}computeVertexNormals(){const M=this.index,D=this.getAttribute("position");if(D!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new DD(new Float32Array(D.count*3),3),this.setAttribute("normal",t);else for(let g=0,r=t.count;g<r;g++)t.setXYZ(g,0,0,0);const e=new O,N=new O,A=new O,i=new O,I=new O,z=new O,T=new O,u=new O;if(M)for(let g=0,r=M.count;g<r;g+=3){const j=M.getX(g+0),y=M.getX(g+1),o=M.getX(g+2);e.fromBufferAttribute(D,j),N.fromBufferAttribute(D,y),A.fromBufferAttribute(D,o),T.subVectors(A,N),u.subVectors(e,N),T.cross(u),i.fromBufferAttribute(t,j),I.fromBufferAttribute(t,y),z.fromBufferAttribute(t,o),i.add(T),I.add(T),z.add(T),t.setXYZ(j,i.x,i.y,i.z),t.setXYZ(y,I.x,I.y,I.z),t.setXYZ(o,z.x,z.y,z.z)}else for(let g=0,r=D.count;g<r;g+=3)e.fromBufferAttribute(D,g+0),N.fromBufferAttribute(D,g+1),A.fromBufferAttribute(D,g+2),T.subVectors(A,N),u.subVectors(e,N),T.cross(u),t.setXYZ(g+0,T.x,T.y,T.z),t.setXYZ(g+1,T.x,T.y,T.z),t.setXYZ(g+2,T.x,T.y,T.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(M,D){if(!(M&&M.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",M);return}D===void 0&&(D=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const e in t){if(M.attributes[e]===void 0)continue;const A=t[e].array,i=M.attributes[e],I=i.array,z=i.itemSize*D,T=Math.min(I.length,A.length-z);for(let u=0,g=z;u<T;u++,g++)A[g]=I[u]}return this}normalizeNormals(){const M=this.attributes.normal;for(let D=0,t=M.count;D<t;D++)AD.fromBufferAttribute(M,D),AD.normalize(),M.setXYZ(D,AD.x,AD.y,AD.z)}toNonIndexed(){function M(i,I){const z=i.array,T=i.itemSize,u=i.normalized,g=new z.constructor(I.length*T);let r=0,j=0;for(let y=0,o=I.length;y<o;y++){i.isInterleavedBufferAttribute?r=I[y]*i.data.stride+i.offset:r=I[y]*T;for(let c=0;c<T;c++)g[j++]=z[r++]}return new DD(g,T,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const D=new BM,t=this.index.array,e=this.attributes;for(const i in e){const I=e[i],z=M(I,t);D.setAttribute(i,z)}const N=this.morphAttributes;for(const i in N){const I=[],z=N[i];for(let T=0,u=z.length;T<u;T++){const g=z[T],r=M(g,t);I.push(r)}D.morphAttributes[i]=I}D.morphTargetsRelative=this.morphTargetsRelative;const A=this.groups;for(let i=0,I=A.length;i<I;i++){const z=A[i];D.addGroup(z.start,z.count,z.materialIndex)}return D}toJSON(){const M={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(M.uuid=this.uuid,M.type=this.type,this.name!==""&&(M.name=this.name),Object.keys(this.userData).length>0&&(M.userData=this.userData),this.parameters!==void 0){const I=this.parameters;for(const z in I)I[z]!==void 0&&(M[z]=I[z]);return M}M.data={attributes:{}};const D=this.index;D!==null&&(M.data.index={type:D.array.constructor.name,array:Array.prototype.slice.call(D.array)});const t=this.attributes;for(const I in t){const z=t[I];M.data.attributes[I]=z.toJSON(M.data)}const e={};let N=!1;for(const I in this.morphAttributes){const z=this.morphAttributes[I],T=[];for(let u=0,g=z.length;u<g;u++){const r=z[u];T.push(r.toJSON(M.data))}T.length>0&&(e[I]=T,N=!0)}N&&(M.data.morphAttributes=e,M.data.morphTargetsRelative=this.morphTargetsRelative);const A=this.groups;A.length>0&&(M.data.groups=JSON.parse(JSON.stringify(A)));const i=this.boundingSphere;return i!==null&&(M.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),M}clone(){return new this.constructor().copy(this)}copy(M){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const D={};this.name=M.name;const t=M.index;t!==null&&this.setIndex(t.clone(D));const e=M.attributes;for(const z in e){const T=e[z];this.setAttribute(z,T.clone(D))}const N=M.morphAttributes;for(const z in N){const T=[],u=N[z];for(let g=0,r=u.length;g<r;g++)T.push(u[g].clone(D));this.morphAttributes[z]=T}this.morphTargetsRelative=M.morphTargetsRelative;const A=M.groups;for(let z=0,T=A.length;z<T;z++){const u=A[z];this.addGroup(u.start,u.count,u.materialIndex)}const i=M.boundingBox;i!==null&&(this.boundingBox=i.clone());const I=M.boundingSphere;return I!==null&&(this.boundingSphere=I.clone()),this.drawRange.start=M.drawRange.start,this.drawRange.count=M.drawRange.count,this.userData=M.userData,M.parameters!==void 0&&(this.parameters=Object.assign({},M.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}BM.prototype.isBufferGeometry=!0;const Zn=new aM,Yt=new Et,YN=new xt,$D=new O,Mt=new O,Dt=new O,UN=new O,QN=new O,fN=new O,pe=new O,he=new O,Ye=new O,Ue=new q,Qe=new q,fe=new q,mN=new O,me=new O;class tD extends ZM{constructor(M=new BM,D=new pN){super(),this.type="Mesh",this.geometry=M,this.material=D,this.updateMorphTargets()}copy(M){return super.copy(M),M.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=M.morphTargetInfluences.slice()),M.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},M.morphTargetDictionary)),this.material=M.material,this.geometry=M.geometry,this}updateMorphTargets(){const M=this.geometry;if(M.isBufferGeometry){const D=M.morphAttributes,t=Object.keys(D);if(t.length>0){const e=D[t[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let N=0,A=e.length;N<A;N++){const i=e[N].name||String(N);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=N}}}}else{const D=M.morphTargets;D!==void 0&&D.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(M,D){const t=this.geometry,e=this.material,N=this.matrixWorld;if(e===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),YN.copy(t.boundingSphere),YN.applyMatrix4(N),M.ray.intersectsSphere(YN)===!1)||(Zn.copy(N).invert(),Yt.copy(M.ray).applyMatrix4(Zn),t.boundingBox!==null&&Yt.intersectsBox(t.boundingBox)===!1))return;let A;if(t.isBufferGeometry){const i=t.index,I=t.attributes.position,z=t.morphAttributes.position,T=t.morphTargetsRelative,u=t.attributes.uv,g=t.attributes.uv2,r=t.groups,j=t.drawRange;if(i!==null)if(Array.isArray(e))for(let y=0,o=r.length;y<o;y++){const c=r[y],s=e[c.materialIndex],l=Math.max(c.start,j.start),C=Math.min(i.count,Math.min(c.start+c.count,j.start+j.count));for(let E=l,v=C;E<v;E+=3){const h=i.getX(E),F=i.getX(E+1),MM=i.getX(E+2);A=ke(this,s,M,Yt,I,z,T,u,g,h,F,MM),A&&(A.faceIndex=Math.floor(E/3),A.face.materialIndex=c.materialIndex,D.push(A))}}else{const y=Math.max(0,j.start),o=Math.min(i.count,j.start+j.count);for(let c=y,s=o;c<s;c+=3){const l=i.getX(c),C=i.getX(c+1),E=i.getX(c+2);A=ke(this,e,M,Yt,I,z,T,u,g,l,C,E),A&&(A.faceIndex=Math.floor(c/3),D.push(A))}}else if(I!==void 0)if(Array.isArray(e))for(let y=0,o=r.length;y<o;y++){const c=r[y],s=e[c.materialIndex],l=Math.max(c.start,j.start),C=Math.min(I.count,Math.min(c.start+c.count,j.start+j.count));for(let E=l,v=C;E<v;E+=3){const h=E,F=E+1,MM=E+2;A=ke(this,s,M,Yt,I,z,T,u,g,h,F,MM),A&&(A.faceIndex=Math.floor(E/3),A.face.materialIndex=c.materialIndex,D.push(A))}}else{const y=Math.max(0,j.start),o=Math.min(I.count,j.start+j.count);for(let c=y,s=o;c<s;c+=3){const l=c,C=c+1,E=c+2;A=ke(this,e,M,Yt,I,z,T,u,g,l,C,E),A&&(A.faceIndex=Math.floor(c/3),D.push(A))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}tD.prototype.isMesh=!0;function Si(n,M,D,t,e,N,A,i){let I;if(M.side===1?I=t.intersectTriangle(A,N,e,!0,i):I=t.intersectTriangle(e,N,A,M.side!==2,i),I===null)return null;me.copy(i),me.applyMatrix4(n.matrixWorld);const z=D.ray.origin.distanceTo(me);return z<D.near||z>D.far?null:{distance:z,point:me.clone(),object:n}}function ke(n,M,D,t,e,N,A,i,I,z,T,u){$D.fromBufferAttribute(e,z),Mt.fromBufferAttribute(e,T),Dt.fromBufferAttribute(e,u);const g=n.morphTargetInfluences;if(N&&g){pe.set(0,0,0),he.set(0,0,0),Ye.set(0,0,0);for(let j=0,y=N.length;j<y;j++){const o=g[j],c=N[j];o!==0&&(UN.fromBufferAttribute(c,z),QN.fromBufferAttribute(c,T),fN.fromBufferAttribute(c,u),A?(pe.addScaledVector(UN,o),he.addScaledVector(QN,o),Ye.addScaledVector(fN,o)):(pe.addScaledVector(UN.sub($D),o),he.addScaledVector(QN.sub(Mt),o),Ye.addScaledVector(fN.sub(Dt),o)))}$D.add(pe),Mt.add(he),Dt.add(Ye)}n.isSkinnedMesh&&(n.boneTransform(z,$D),n.boneTransform(T,Mt),n.boneTransform(u,Dt));const r=Si(n,M,D,t,$D,Mt,Dt,mN);if(r){i&&(Ue.fromBufferAttribute(i,z),Qe.fromBufferAttribute(i,T),fe.fromBufferAttribute(i,u),r.uv=MD.getUV(mN,$D,Mt,Dt,Ue,Qe,fe,new q)),I&&(Ue.fromBufferAttribute(I,z),Qe.fromBufferAttribute(I,T),fe.fromBufferAttribute(I,u),r.uv2=MD.getUV(mN,$D,Mt,Dt,Ue,Qe,fe,new q));const j={a:z,b:T,c:u,normal:new O,materialIndex:0};MD.getNormal($D,Mt,Dt,j.normal),r.face=j}return r}class te extends BM{constructor(M=1,D=1,t=1,e=1,N=1,A=1){super(),this.type="BoxGeometry",this.parameters={width:M,height:D,depth:t,widthSegments:e,heightSegments:N,depthSegments:A};const i=this;e=Math.floor(e),N=Math.floor(N),A=Math.floor(A);const I=[],z=[],T=[],u=[];let g=0,r=0;j("z","y","x",-1,-1,t,D,M,A,N,0),j("z","y","x",1,-1,t,D,-M,A,N,1),j("x","z","y",1,1,M,t,D,e,A,2),j("x","z","y",1,-1,M,t,-D,e,A,3),j("x","y","z",1,-1,M,D,t,e,N,4),j("x","y","z",-1,-1,M,D,-t,e,N,5),this.setIndex(I),this.setAttribute("position",new VM(z,3)),this.setAttribute("normal",new VM(T,3)),this.setAttribute("uv",new VM(u,2));function j(y,o,c,s,l,C,E,v,h,F,MM){const Z=C/h,a=E/F,p=C/2,Y=E/2,k=v/2,f=h+1,Q=F+1;let K=0,W=0;const IM=new O;for(let _=0;_<Q;_++){const H=_*a-Y;for(let eM=0;eM<f;eM++){const uM=eM*Z-p;IM[y]=uM*s,IM[o]=H*l,IM[c]=k,z.push(IM.x,IM.y,IM.z),IM[y]=0,IM[o]=0,IM[c]=v>0?1:-1,T.push(IM.x,IM.y,IM.z),u.push(eM/h),u.push(1-_/F),K+=1}}for(let _=0;_<F;_++)for(let H=0;H<h;H++){const eM=g+H+f*_,uM=g+H+f*(_+1),jM=g+(H+1)+f*(_+1),b=g+(H+1)+f*_;I.push(eM,uM,b),I.push(uM,jM,b),W+=6}i.addGroup(r,W,MM),r+=W,g+=K}}static fromJSON(M){return new te(M.width,M.height,M.depth,M.widthSegments,M.heightSegments,M.depthSegments)}}function Ut(n){const M={};for(const D in n){M[D]={};for(const t in n[D]){const e=n[D][t];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?M[D][t]=e.clone():Array.isArray(e)?M[D][t]=e.slice():M[D][t]=e}}return M}function ID(n){const M={};for(let D=0;D<n.length;D++){const t=Ut(n[D]);for(const e in t)M[e]=t[e]}return M}const Zi={clone:Ut,merge:ID};var _i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends nD{constructor(M){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=_i,this.fragmentShader=bi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,M!==void 0&&(M.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(M))}copy(M){return super.copy(M),this.fragmentShader=M.fragmentShader,this.vertexShader=M.vertexShader,this.uniforms=Ut(M.uniforms),this.defines=Object.assign({},M.defines),this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.lights=M.lights,this.clipping=M.clipping,this.extensions=Object.assign({},M.extensions),this.glslVersion=M.glslVersion,this}toJSON(M){const D=super.toJSON(M);D.glslVersion=this.glslVersion,D.uniforms={};for(const e in this.uniforms){const A=this.uniforms[e].value;A&&A.isTexture?D.uniforms[e]={type:"t",value:A.toJSON(M).uuid}:A&&A.isColor?D.uniforms[e]={type:"c",value:A.getHex()}:A&&A.isVector2?D.uniforms[e]={type:"v2",value:A.toArray()}:A&&A.isVector3?D.uniforms[e]={type:"v3",value:A.toArray()}:A&&A.isVector4?D.uniforms[e]={type:"v4",value:A.toArray()}:A&&A.isMatrix3?D.uniforms[e]={type:"m3",value:A.toArray()}:A&&A.isMatrix4?D.uniforms[e]={type:"m4",value:A.toArray()}:D.uniforms[e]={value:A}}Object.keys(this.defines).length>0&&(D.defines=this.defines),D.vertexShader=this.vertexShader,D.fragmentShader=this.fragmentShader;const t={};for(const e in this.extensions)this.extensions[e]===!0&&(t[e]=!0);return Object.keys(t).length>0&&(D.extensions=t),D}}ct.prototype.isShaderMaterial=!0;class kN extends ZM{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new aM,this.projectionMatrix=new aM,this.projectionMatrixInverse=new aM}copy(M,D){return super.copy(M,D),this.matrixWorldInverse.copy(M.matrixWorldInverse),this.projectionMatrix.copy(M.projectionMatrix),this.projectionMatrixInverse.copy(M.projectionMatrixInverse),this}getWorldDirection(M){this.updateWorldMatrix(!0,!1);const D=this.matrixWorld.elements;return M.set(-D[8],-D[9],-D[10]).normalize()}updateMatrixWorld(M){super.updateMatrixWorld(M),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(M,D){super.updateWorldMatrix(M,D),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}kN.prototype.isCamera=!0;class gD extends kN{constructor(M=50,D=1,t=.1,e=2e3){super(),this.type="PerspectiveCamera",this.fov=M,this.zoom=1,this.near=t,this.far=e,this.focus=10,this.aspect=D,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(M,D){return super.copy(M,D),this.fov=M.fov,this.zoom=M.zoom,this.near=M.near,this.far=M.far,this.focus=M.focus,this.aspect=M.aspect,this.view=M.view===null?null:Object.assign({},M.view),this.filmGauge=M.filmGauge,this.filmOffset=M.filmOffset,this}setFocalLength(M){const D=.5*this.getFilmHeight()/M;this.fov=gN*2*Math.atan(D),this.updateProjectionMatrix()}getFocalLength(){const M=Math.tan(uN*.5*this.fov);return .5*this.getFilmHeight()/M}getEffectiveFOV(){return gN*2*Math.atan(Math.tan(uN*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(M,D,t,e,N,A){this.aspect=M/D,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=M,this.view.fullHeight=D,this.view.offsetX=t,this.view.offsetY=e,this.view.width=N,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const M=this.near;let D=M*Math.tan(uN*.5*this.fov)/this.zoom,t=2*D,e=this.aspect*t,N=-.5*e;const A=this.view;if(this.view!==null&&this.view.enabled){const I=A.fullWidth,z=A.fullHeight;N+=A.offsetX*e/I,D-=A.offsetY*t/z,e*=A.width/I,t*=A.height/z}const i=this.filmOffset;i!==0&&(N+=M*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(N,N+e,D,D-t,M,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(M){const D=super.toJSON(M);return D.object.fov=this.fov,D.object.zoom=this.zoom,D.object.near=this.near,D.object.far=this.far,D.object.focus=this.focus,D.object.aspect=this.aspect,this.view!==null&&(D.object.view=Object.assign({},this.view)),D.object.filmGauge=this.filmGauge,D.object.filmOffset=this.filmOffset,D}}gD.prototype.isPerspectiveCamera=!0;const Qt=90,ft=1;class SN extends ZM{constructor(M,D,t){if(super(),this.type="CubeCamera",t.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=t;const e=new gD(Qt,ft,M,D);e.layers=this.layers,e.up.set(0,-1,0),e.lookAt(new O(1,0,0)),this.add(e);const N=new gD(Qt,ft,M,D);N.layers=this.layers,N.up.set(0,-1,0),N.lookAt(new O(-1,0,0)),this.add(N);const A=new gD(Qt,ft,M,D);A.layers=this.layers,A.up.set(0,0,1),A.lookAt(new O(0,1,0)),this.add(A);const i=new gD(Qt,ft,M,D);i.layers=this.layers,i.up.set(0,0,-1),i.lookAt(new O(0,-1,0)),this.add(i);const I=new gD(Qt,ft,M,D);I.layers=this.layers,I.up.set(0,-1,0),I.lookAt(new O(0,0,1)),this.add(I);const z=new gD(Qt,ft,M,D);z.layers=this.layers,z.up.set(0,-1,0),z.lookAt(new O(0,0,-1)),this.add(z)}update(M,D){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget,[e,N,A,i,I,z]=this.children,T=M.xr.enabled,u=M.getRenderTarget();M.xr.enabled=!1;const g=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,M.setRenderTarget(t,0),M.render(D,e),M.setRenderTarget(t,1),M.render(D,N),M.setRenderTarget(t,2),M.render(D,A),M.setRenderTarget(t,3),M.render(D,i),M.setRenderTarget(t,4),M.render(D,I),t.texture.generateMipmaps=g,M.setRenderTarget(t,5),M.render(D,z),M.setRenderTarget(u),M.xr.enabled=T,t.texture.needsPMREMUpdate=!0}}class Se extends ND{constructor(M,D,t,e,N,A,i,I,z,T){M=M!==void 0?M:[],D=D!==void 0?D:301,super(M,D,t,e,N,A,i,I,z,T),this.flipY=!1}get images(){return this.image}set images(M){this.image=M}}Se.prototype.isCubeTexture=!0;class _n extends oD{constructor(M,D,t){Number.isInteger(D)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),D=t),super(M,M,D),D=D||{},this.texture=new Se(void 0,D.mapping,D.wrapS,D.wrapT,D.magFilter,D.minFilter,D.format,D.type,D.anisotropy,D.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=D.generateMipmaps!==void 0?D.generateMipmaps:!1,this.texture.minFilter=D.minFilter!==void 0?D.minFilter:1006}fromEquirectangularTexture(M,D){this.texture.type=D.type,this.texture.format=1023,this.texture.encoding=D.encoding,this.texture.generateMipmaps=D.generateMipmaps,this.texture.minFilter=D.minFilter,this.texture.magFilter=D.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},e=new te(5,5,5),N=new ct({name:"CubemapFromEquirect",uniforms:Ut(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,blending:0});N.uniforms.tEquirect.value=D;const A=new tD(e,N),i=D.minFilter;return D.minFilter===1008&&(D.minFilter=1006),new SN(1,10,this).update(M,A),D.minFilter=i,A.geometry.dispose(),A.material.dispose(),this}clear(M,D,t,e){const N=M.getRenderTarget();for(let A=0;A<6;A++)M.setRenderTarget(this,A),M.clear(D,t,e);M.setRenderTarget(N)}}_n.prototype.isWebGLCubeRenderTarget=!0;const ZN=new O,Ki=new O,Ri=new zD;class PD{constructor(M=new O(1,0,0),D=0){this.normal=M,this.constant=D}set(M,D){return this.normal.copy(M),this.constant=D,this}setComponents(M,D,t,e){return this.normal.set(M,D,t),this.constant=e,this}setFromNormalAndCoplanarPoint(M,D){return this.normal.copy(M),this.constant=-D.dot(this.normal),this}setFromCoplanarPoints(M,D,t){const e=ZN.subVectors(t,D).cross(Ki.subVectors(M,D)).normalize();return this.setFromNormalAndCoplanarPoint(e,M),this}copy(M){return this.normal.copy(M.normal),this.constant=M.constant,this}normalize(){const M=1/this.normal.length();return this.normal.multiplyScalar(M),this.constant*=M,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(M){return this.normal.dot(M)+this.constant}distanceToSphere(M){return this.distanceToPoint(M.center)-M.radius}projectPoint(M,D){return D.copy(this.normal).multiplyScalar(-this.distanceToPoint(M)).add(M)}intersectLine(M,D){const t=M.delta(ZN),e=this.normal.dot(t);if(e===0)return this.distanceToPoint(M.start)===0?D.copy(M.start):null;const N=-(M.start.dot(this.normal)+this.constant)/e;return N<0||N>1?null:D.copy(t).multiplyScalar(N).add(M.start)}intersectsLine(M){const D=this.distanceToPoint(M.start),t=this.distanceToPoint(M.end);return D<0&&t>0||t<0&&D>0}intersectsBox(M){return M.intersectsPlane(this)}intersectsSphere(M){return M.intersectsPlane(this)}coplanarPoint(M){return M.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(M,D){const t=D||Ri.getNormalMatrix(M),e=this.coplanarPoint(ZN).applyMatrix4(M),N=this.normal.applyMatrix3(t).normalize();return this.constant=-e.dot(N),this}translate(M){return this.constant-=M.dot(this.normal),this}equals(M){return M.normal.equals(this.normal)&&M.constant===this.constant}clone(){return new this.constructor().copy(this)}}PD.prototype.isPlane=!0;const mt=new xt,Ze=new O;class _e{constructor(M=new PD,D=new PD,t=new PD,e=new PD,N=new PD,A=new PD){this.planes=[M,D,t,e,N,A]}set(M,D,t,e,N,A){const i=this.planes;return i[0].copy(M),i[1].copy(D),i[2].copy(t),i[3].copy(e),i[4].copy(N),i[5].copy(A),this}copy(M){const D=this.planes;for(let t=0;t<6;t++)D[t].copy(M.planes[t]);return this}setFromProjectionMatrix(M){const D=this.planes,t=M.elements,e=t[0],N=t[1],A=t[2],i=t[3],I=t[4],z=t[5],T=t[6],u=t[7],g=t[8],r=t[9],j=t[10],y=t[11],o=t[12],c=t[13],s=t[14],l=t[15];return D[0].setComponents(i-e,u-I,y-g,l-o).normalize(),D[1].setComponents(i+e,u+I,y+g,l+o).normalize(),D[2].setComponents(i+N,u+z,y+r,l+c).normalize(),D[3].setComponents(i-N,u-z,y-r,l-c).normalize(),D[4].setComponents(i-A,u-T,y-j,l-s).normalize(),D[5].setComponents(i+A,u+T,y+j,l+s).normalize(),this}intersectsObject(M){const D=M.geometry;return D.boundingSphere===null&&D.computeBoundingSphere(),mt.copy(D.boundingSphere).applyMatrix4(M.matrixWorld),this.intersectsSphere(mt)}intersectsSprite(M){return mt.center.set(0,0,0),mt.radius=.7071067811865476,mt.applyMatrix4(M.matrixWorld),this.intersectsSphere(mt)}intersectsSphere(M){const D=this.planes,t=M.center,e=-M.radius;for(let N=0;N<6;N++)if(D[N].distanceToPoint(t)<e)return!1;return!0}intersectsBox(M){const D=this.planes;for(let t=0;t<6;t++){const e=D[t];if(Ze.x=e.normal.x>0?M.max.x:M.min.x,Ze.y=e.normal.y>0?M.max.y:M.min.y,Ze.z=e.normal.z>0?M.max.z:M.min.z,e.distanceToPoint(Ze)<0)return!1}return!0}containsPoint(M){const D=this.planes;for(let t=0;t<6;t++)if(D[t].distanceToPoint(M)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bn(){let n=null,M=!1,D=null,t=null;function e(N,A){D(N,A),t=n.requestAnimationFrame(e)}return{start:function(){M!==!0&&D!==null&&(t=n.requestAnimationFrame(e),M=!0)},stop:function(){n.cancelAnimationFrame(t),M=!1},setAnimationLoop:function(N){D=N},setContext:function(N){n=N}}}function Pi(n,M){const D=M.isWebGL2,t=new WeakMap;function e(z,T){const u=z.array,g=z.usage,r=n.createBuffer();n.bindBuffer(T,r),n.bufferData(T,u,g),z.onUploadCallback();let j=5126;return u instanceof Float32Array?j=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?z.isFloat16BufferAttribute?D?j=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):j=5123:u instanceof Int16Array?j=5122:u instanceof Uint32Array?j=5125:u instanceof Int32Array?j=5124:u instanceof Int8Array?j=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(j=5121),{buffer:r,type:j,bytesPerElement:u.BYTES_PER_ELEMENT,version:z.version}}function N(z,T,u){const g=T.array,r=T.updateRange;n.bindBuffer(u,z),r.count===-1?n.bufferSubData(u,0,g):(D?n.bufferSubData(u,r.offset*g.BYTES_PER_ELEMENT,g,r.offset,r.count):n.bufferSubData(u,r.offset*g.BYTES_PER_ELEMENT,g.subarray(r.offset,r.offset+r.count)),r.count=-1)}function A(z){return z.isInterleavedBufferAttribute&&(z=z.data),t.get(z)}function i(z){z.isInterleavedBufferAttribute&&(z=z.data);const T=t.get(z);T&&(n.deleteBuffer(T.buffer),t.delete(z))}function I(z,T){if(z.isGLBufferAttribute){const g=t.get(z);(!g||g.version<z.version)&&t.set(z,{buffer:z.buffer,type:z.type,bytesPerElement:z.elementSize,version:z.version});return}z.isInterleavedBufferAttribute&&(z=z.data);const u=t.get(z);u===void 0?t.set(z,e(z,T)):u.version<z.version&&(N(u.buffer,z,T),u.version=z.version)}return{get:A,remove:i,update:I}}class _N extends BM{constructor(M=1,D=1,t=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:M,height:D,widthSegments:t,heightSegments:e};const N=M/2,A=D/2,i=Math.floor(t),I=Math.floor(e),z=i+1,T=I+1,u=M/i,g=D/I,r=[],j=[],y=[],o=[];for(let c=0;c<T;c++){const s=c*g-A;for(let l=0;l<z;l++){const C=l*u-N;j.push(C,-s,0),y.push(0,0,1),o.push(l/i),o.push(1-c/I)}}for(let c=0;c<I;c++)for(let s=0;s<i;s++){const l=s+z*c,C=s+z*(c+1),E=s+1+z*(c+1),v=s+1+z*c;r.push(l,C,v),r.push(C,E,v)}this.setIndex(r),this.setAttribute("position",new VM(j,3)),this.setAttribute("normal",new VM(y,3)),this.setAttribute("uv",new VM(o,2))}static fromJSON(M){return new _N(M.width,M.height,M.widthSegments,M.heightSegments)}}var Fi=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bi=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gi=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vi=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hi=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wi=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qi="vec3 transformed = vec3( position );",Xi=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ji=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$i=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mz=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ez=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nz=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Az=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iz=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zz=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Iz=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tz=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uz=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gz=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rz=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sz=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cz="gl_FragColor = linearToOutputTexel( gl_FragColor );",jz=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,az=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oz=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cz=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wz=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oz=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xz=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ez=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lz=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,dz=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vz=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pz=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,hz=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yz=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Uz=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qz=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,fz=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mz=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,kz=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sz=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zz=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_z=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bz=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kz=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rz=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pz=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fz=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bz=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gz=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wz=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qz=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xz=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jz=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$z=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,MI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,DI=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,AI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,II=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,uI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,CI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,OI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pI=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,hI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,YI=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,UI=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,QI=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fI=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,mI=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kI=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,SI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM={alphamap_fragment:Fi,alphamap_pars_fragment:Bi,alphatest_fragment:Gi,alphatest_pars_fragment:Vi,aomap_fragment:Hi,aomap_pars_fragment:Wi,begin_vertex:qi,beginnormal_vertex:Xi,bsdfs:Ji,bumpmap_pars_fragment:$i,clipping_planes_fragment:Mz,clipping_planes_pars_fragment:Dz,clipping_planes_pars_vertex:tz,clipping_planes_vertex:ez,color_fragment:Nz,color_pars_fragment:nz,color_pars_vertex:Az,color_vertex:iz,common:zz,cube_uv_reflection_fragment:Iz,defaultnormal_vertex:Tz,displacementmap_pars_vertex:uz,displacementmap_vertex:gz,emissivemap_fragment:rz,emissivemap_pars_fragment:sz,encodings_fragment:cz,encodings_pars_fragment:jz,envmap_fragment:yz,envmap_common_pars_fragment:az,envmap_pars_fragment:oz,envmap_pars_vertex:Cz,envmap_physical_pars_fragment:Yz,envmap_vertex:Lz,fog_vertex:wz,fog_pars_vertex:Oz,fog_fragment:xz,fog_pars_fragment:Ez,gradientmap_pars_fragment:lz,lightmap_fragment:dz,lightmap_pars_fragment:vz,lights_lambert_vertex:pz,lights_pars_begin:hz,lights_toon_fragment:Uz,lights_toon_pars_fragment:Qz,lights_phong_fragment:fz,lights_phong_pars_fragment:mz,lights_physical_fragment:kz,lights_physical_pars_fragment:Sz,lights_fragment_begin:Zz,lights_fragment_maps:_z,lights_fragment_end:bz,logdepthbuf_fragment:Kz,logdepthbuf_pars_fragment:Rz,logdepthbuf_pars_vertex:Pz,logdepthbuf_vertex:Fz,map_fragment:Bz,map_pars_fragment:Gz,map_particle_fragment:Vz,map_particle_pars_fragment:Hz,metalnessmap_fragment:Wz,metalnessmap_pars_fragment:qz,morphnormal_vertex:Xz,morphtarget_pars_vertex:Jz,morphtarget_vertex:$z,normal_fragment_begin:MI,normal_fragment_maps:DI,normal_pars_fragment:tI,normal_pars_vertex:eI,normal_vertex:NI,normalmap_pars_fragment:nI,clearcoat_normal_fragment_begin:AI,clearcoat_normal_fragment_maps:iI,clearcoat_pars_fragment:zI,output_fragment:II,packing:TI,premultiplied_alpha_fragment:uI,project_vertex:gI,dithering_fragment:rI,dithering_pars_fragment:sI,roughnessmap_fragment:cI,roughnessmap_pars_fragment:jI,shadowmap_pars_fragment:yI,shadowmap_pars_vertex:aI,shadowmap_vertex:oI,shadowmask_pars_fragment:CI,skinbase_vertex:LI,skinning_pars_vertex:wI,skinning_vertex:OI,skinnormal_vertex:xI,specularmap_fragment:EI,specularmap_pars_fragment:lI,tonemapping_fragment:dI,tonemapping_pars_fragment:vI,transmission_fragment:pI,transmission_pars_fragment:hI,uv_pars_fragment:YI,uv_pars_vertex:UI,uv_vertex:QI,uv2_pars_fragment:fI,uv2_pars_vertex:mI,uv2_vertex:kI,worldpos_vertex:SI,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},DM={common:{diffuse:{value:new cM(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zD},uv2Transform:{value:new zD},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cM(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new cM(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zD}},sprite:{diffuse:{value:new cM(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zD}}},pD={basic:{uniforms:ID([DM.common,DM.specularmap,DM.envmap,DM.aomap,DM.lightmap,DM.fog]),vertexShader:YM.meshbasic_vert,fragmentShader:YM.meshbasic_frag},lambert:{uniforms:ID([DM.common,DM.specularmap,DM.envmap,DM.aomap,DM.lightmap,DM.emissivemap,DM.fog,DM.lights,{emissive:{value:new cM(0)}}]),vertexShader:YM.meshlambert_vert,fragmentShader:YM.meshlambert_frag},phong:{uniforms:ID([DM.common,DM.specularmap,DM.envmap,DM.aomap,DM.lightmap,DM.emissivemap,DM.bumpmap,DM.normalmap,DM.displacementmap,DM.fog,DM.lights,{emissive:{value:new cM(0)},specular:{value:new cM(1118481)},shininess:{value:30}}]),vertexShader:YM.meshphong_vert,fragmentShader:YM.meshphong_frag},standard:{uniforms:ID([DM.common,DM.envmap,DM.aomap,DM.lightmap,DM.emissivemap,DM.bumpmap,DM.normalmap,DM.displacementmap,DM.roughnessmap,DM.metalnessmap,DM.fog,DM.lights,{emissive:{value:new cM(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:YM.meshphysical_vert,fragmentShader:YM.meshphysical_frag},toon:{uniforms:ID([DM.common,DM.aomap,DM.lightmap,DM.emissivemap,DM.bumpmap,DM.normalmap,DM.displacementmap,DM.gradientmap,DM.fog,DM.lights,{emissive:{value:new cM(0)}}]),vertexShader:YM.meshtoon_vert,fragmentShader:YM.meshtoon_frag},matcap:{uniforms:ID([DM.common,DM.bumpmap,DM.normalmap,DM.displacementmap,DM.fog,{matcap:{value:null}}]),vertexShader:YM.meshmatcap_vert,fragmentShader:YM.meshmatcap_frag},points:{uniforms:ID([DM.points,DM.fog]),vertexShader:YM.points_vert,fragmentShader:YM.points_frag},dashed:{uniforms:ID([DM.common,DM.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:YM.linedashed_vert,fragmentShader:YM.linedashed_frag},depth:{uniforms:ID([DM.common,DM.displacementmap]),vertexShader:YM.depth_vert,fragmentShader:YM.depth_frag},normal:{uniforms:ID([DM.common,DM.bumpmap,DM.normalmap,DM.displacementmap,{opacity:{value:1}}]),vertexShader:YM.meshnormal_vert,fragmentShader:YM.meshnormal_frag},sprite:{uniforms:ID([DM.sprite,DM.fog]),vertexShader:YM.sprite_vert,fragmentShader:YM.sprite_frag},background:{uniforms:{uvTransform:{value:new zD},t2D:{value:null}},vertexShader:YM.background_vert,fragmentShader:YM.background_frag},cube:{uniforms:ID([DM.envmap,{opacity:{value:1}}]),vertexShader:YM.cube_vert,fragmentShader:YM.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:YM.equirect_vert,fragmentShader:YM.equirect_frag},distanceRGBA:{uniforms:ID([DM.common,DM.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:YM.distanceRGBA_vert,fragmentShader:YM.distanceRGBA_frag},shadow:{uniforms:ID([DM.lights,DM.fog,{color:{value:new cM(0)},opacity:{value:1}}]),vertexShader:YM.shadow_vert,fragmentShader:YM.shadow_frag}};pD.physical={uniforms:ID([pD.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new cM(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new cM(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new cM(1,1,1)},specularColorMap:{value:null}}]),vertexShader:YM.meshphysical_vert,fragmentShader:YM.meshphysical_frag};function ZI(n,M,D,t,e,N){const A=new cM(0);let i=e===!0?0:1,I,z,T=null,u=0,g=null;function r(y,o){let c=!1,s=o.isScene===!0?o.background:null;s&&s.isTexture&&(s=M.get(s));const l=n.xr,C=l.getSession&&l.getSession();C&&C.environmentBlendMode==="additive"&&(s=null),s===null?j(A,i):s&&s.isColor&&(j(s,1),c=!0),(n.autoClear||c)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),s&&(s.isCubeTexture||s.mapping===306)?(z===void 0&&(z=new tD(new te(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Ut(pD.cube.uniforms),vertexShader:pD.cube.vertexShader,fragmentShader:pD.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),z.geometry.deleteAttribute("normal"),z.geometry.deleteAttribute("uv"),z.onBeforeRender=function(E,v,h){this.matrixWorld.copyPosition(h.matrixWorld)},Object.defineProperty(z.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),t.update(z)),z.material.uniforms.envMap.value=s,z.material.uniforms.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,(T!==s||u!==s.version||g!==n.toneMapping)&&(z.material.needsUpdate=!0,T=s,u=s.version,g=n.toneMapping),y.unshift(z,z.geometry,z.material,0,0,null)):s&&s.isTexture&&(I===void 0&&(I=new tD(new _N(2,2),new ct({name:"BackgroundMaterial",uniforms:Ut(pD.background.uniforms),vertexShader:pD.background.vertexShader,fragmentShader:pD.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),I.geometry.deleteAttribute("normal"),Object.defineProperty(I.material,"map",{get:function(){return this.uniforms.t2D.value}}),t.update(I)),I.material.uniforms.t2D.value=s,s.matrixAutoUpdate===!0&&s.updateMatrix(),I.material.uniforms.uvTransform.value.copy(s.matrix),(T!==s||u!==s.version||g!==n.toneMapping)&&(I.material.needsUpdate=!0,T=s,u=s.version,g=n.toneMapping),y.unshift(I,I.geometry,I.material,0,0,null))}function j(y,o){D.buffers.color.setClear(y.r,y.g,y.b,o,N)}return{getClearColor:function(){return A},setClearColor:function(y,o=1){A.set(y),i=o,j(A,i)},getClearAlpha:function(){return i},setClearAlpha:function(y){i=y,j(A,i)},render:r}}function _I(n,M,D,t){const e=n.getParameter(34921),N=t.isWebGL2?null:M.get("OES_vertex_array_object"),A=t.isWebGL2||N!==null,i={},I=y(null);let z=I;function T(Y,k,f,Q,K){let W=!1;if(A){const IM=j(Q,f,k);z!==IM&&(z=IM,g(z.object)),W=o(Q,K),W&&c(Q,K)}else{const IM=k.wireframe===!0;(z.geometry!==Q.id||z.program!==f.id||z.wireframe!==IM)&&(z.geometry=Q.id,z.program=f.id,z.wireframe=IM,W=!0)}Y.isInstancedMesh===!0&&(W=!0),K!==null&&D.update(K,34963),W&&(h(Y,k,f,Q),K!==null&&n.bindBuffer(34963,D.get(K).buffer))}function u(){return t.isWebGL2?n.createVertexArray():N.createVertexArrayOES()}function g(Y){return t.isWebGL2?n.bindVertexArray(Y):N.bindVertexArrayOES(Y)}function r(Y){return t.isWebGL2?n.deleteVertexArray(Y):N.deleteVertexArrayOES(Y)}function j(Y,k,f){const Q=f.wireframe===!0;let K=i[Y.id];K===void 0&&(K={},i[Y.id]=K);let W=K[k.id];W===void 0&&(W={},K[k.id]=W);let IM=W[Q];return IM===void 0&&(IM=y(u()),W[Q]=IM),IM}function y(Y){const k=[],f=[],Q=[];for(let K=0;K<e;K++)k[K]=0,f[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:f,attributeDivisors:Q,object:Y,attributes:{},index:null}}function o(Y,k){const f=z.attributes,Q=Y.attributes;let K=0;for(const W in Q){const IM=f[W],_=Q[W];if(IM===void 0||IM.attribute!==_||IM.data!==_.data)return!0;K++}return z.attributesNum!==K||z.index!==k}function c(Y,k){const f={},Q=Y.attributes;let K=0;for(const W in Q){const IM=Q[W],_={};_.attribute=IM,IM.data&&(_.data=IM.data),f[W]=_,K++}z.attributes=f,z.attributesNum=K,z.index=k}function s(){const Y=z.newAttributes;for(let k=0,f=Y.length;k<f;k++)Y[k]=0}function l(Y){C(Y,0)}function C(Y,k){const f=z.newAttributes,Q=z.enabledAttributes,K=z.attributeDivisors;f[Y]=1,Q[Y]===0&&(n.enableVertexAttribArray(Y),Q[Y]=1),K[Y]!==k&&((t.isWebGL2?n:M.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,k),K[Y]=k)}function E(){const Y=z.newAttributes,k=z.enabledAttributes;for(let f=0,Q=k.length;f<Q;f++)k[f]!==Y[f]&&(n.disableVertexAttribArray(f),k[f]=0)}function v(Y,k,f,Q,K,W){t.isWebGL2===!0&&(f===5124||f===5125)?n.vertexAttribIPointer(Y,k,f,K,W):n.vertexAttribPointer(Y,k,f,Q,K,W)}function h(Y,k,f,Q){if(t.isWebGL2===!1&&(Y.isInstancedMesh||Q.isInstancedBufferGeometry)&&M.get("ANGLE_instanced_arrays")===null)return;s();const K=Q.attributes,W=f.getAttributes(),IM=k.defaultAttributeValues;for(const _ in W){const H=W[_];if(H.location>=0){let eM=K[_];if(eM===void 0&&(_==="instanceMatrix"&&Y.instanceMatrix&&(eM=Y.instanceMatrix),_==="instanceColor"&&Y.instanceColor&&(eM=Y.instanceColor)),eM!==void 0){const uM=eM.normalized,jM=eM.itemSize,b=D.get(eM);if(b===void 0)continue;const kM=b.buffer,rM=b.type,wM=b.bytesPerElement;if(eM.isInterleavedBufferAttribute){const iM=eM.data,vM=iM.stride,OM=eM.offset;if(iM&&iM.isInstancedInterleavedBuffer){for(let B=0;B<H.locationSize;B++)C(H.location+B,iM.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=iM.meshPerAttribute*iM.count)}else for(let B=0;B<H.locationSize;B++)l(H.location+B);n.bindBuffer(34962,kM);for(let B=0;B<H.locationSize;B++)v(H.location+B,jM/H.locationSize,rM,uM,vM*wM,(OM+jM/H.locationSize*B)*wM)}else{if(eM.isInstancedBufferAttribute){for(let iM=0;iM<H.locationSize;iM++)C(H.location+iM,eM.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=eM.meshPerAttribute*eM.count)}else for(let iM=0;iM<H.locationSize;iM++)l(H.location+iM);n.bindBuffer(34962,kM);for(let iM=0;iM<H.locationSize;iM++)v(H.location+iM,jM/H.locationSize,rM,uM,jM*wM,jM/H.locationSize*iM*wM)}}else if(IM!==void 0){const uM=IM[_];if(uM!==void 0)switch(uM.length){case 2:n.vertexAttrib2fv(H.location,uM);break;case 3:n.vertexAttrib3fv(H.location,uM);break;case 4:n.vertexAttrib4fv(H.location,uM);break;default:n.vertexAttrib1fv(H.location,uM)}}}}E()}function F(){a();for(const Y in i){const k=i[Y];for(const f in k){const Q=k[f];for(const K in Q)r(Q[K].object),delete Q[K];delete k[f]}delete i[Y]}}function MM(Y){if(i[Y.id]===void 0)return;const k=i[Y.id];for(const f in k){const Q=k[f];for(const K in Q)r(Q[K].object),delete Q[K];delete k[f]}delete i[Y.id]}function Z(Y){for(const k in i){const f=i[k];if(f[Y.id]===void 0)continue;const Q=f[Y.id];for(const K in Q)r(Q[K].object),delete Q[K];delete f[Y.id]}}function a(){p(),z!==I&&(z=I,g(z.object))}function p(){I.geometry=null,I.program=null,I.wireframe=!1}return{setup:T,reset:a,resetDefaultState:p,dispose:F,releaseStatesOfGeometry:MM,releaseStatesOfProgram:Z,initAttributes:s,enableAttribute:l,disableUnusedAttributes:E}}function bI(n,M,D,t){const e=t.isWebGL2;let N;function A(z){N=z}function i(z,T){n.drawArrays(N,z,T),D.update(T,N,1)}function I(z,T,u){if(u===0)return;let g,r;if(e)g=n,r="drawArraysInstanced";else if(g=M.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[r](N,z,T,u),D.update(T,N,u)}this.setMode=A,this.render=i,this.renderInstances=I}function KI(n,M,D){let t;function e(){if(t!==void 0)return t;if(M.has("EXT_texture_filter_anisotropic")===!0){const h=M.get("EXT_texture_filter_anisotropic");t=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function N(h){if(h==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const A=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let i=D.precision!==void 0?D.precision:"highp";const I=N(i);I!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",I,"instead."),i=I);const z=A||M.has("WEBGL_draw_buffers"),T=D.logarithmicDepthBuffer===!0,u=n.getParameter(34930),g=n.getParameter(35660),r=n.getParameter(3379),j=n.getParameter(34076),y=n.getParameter(34921),o=n.getParameter(36347),c=n.getParameter(36348),s=n.getParameter(36349),l=g>0,C=A||M.has("OES_texture_float"),E=l&&C,v=A?n.getParameter(36183):0;return{isWebGL2:A,drawBuffers:z,getMaxAnisotropy:e,getMaxPrecision:N,precision:i,logarithmicDepthBuffer:T,maxTextures:u,maxVertexTextures:g,maxTextureSize:r,maxCubemapSize:j,maxAttributes:y,maxVertexUniforms:o,maxVaryings:c,maxFragmentUniforms:s,vertexTextures:l,floatFragmentTextures:C,floatVertexTextures:E,maxSamples:v}}function RI(n){const M=this;let D=null,t=0,e=!1,N=!1;const A=new PD,i=new zD,I={value:null,needsUpdate:!1};this.uniform=I,this.numPlanes=0,this.numIntersection=0,this.init=function(u,g,r){const j=u.length!==0||g||t!==0||e;return e=g,D=T(u,r,0),t=u.length,j},this.beginShadows=function(){N=!0,T(null)},this.endShadows=function(){N=!1,z()},this.setState=function(u,g,r){const j=u.clippingPlanes,y=u.clipIntersection,o=u.clipShadows,c=n.get(u);if(!e||j===null||j.length===0||N&&!o)N?T(null):z();else{const s=N?0:t,l=s*4;let C=c.clippingState||null;I.value=C,C=T(j,g,l,r);for(let E=0;E!==l;++E)C[E]=D[E];c.clippingState=C,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=s}};function z(){I.value!==D&&(I.value=D,I.needsUpdate=t>0),M.numPlanes=t,M.numIntersection=0}function T(u,g,r,j){const y=u!==null?u.length:0;let o=null;if(y!==0){if(o=I.value,j!==!0||o===null){const c=r+y*4,s=g.matrixWorldInverse;i.getNormalMatrix(s),(o===null||o.length<c)&&(o=new Float32Array(c));for(let l=0,C=r;l!==y;++l,C+=4)A.copy(u[l]).applyMatrix4(s,i),A.normal.toArray(o,C),o[C+3]=A.constant}I.value=o,I.needsUpdate=!0}return M.numPlanes=y,M.numIntersection=0,o}}function PI(n){let M=new WeakMap;function D(A,i){return i===303?A.mapping=301:i===304&&(A.mapping=302),A}function t(A){if(A&&A.isTexture&&A.isRenderTargetTexture===!1){const i=A.mapping;if(i===303||i===304)if(M.has(A)){const I=M.get(A).texture;return D(I,A.mapping)}else{const I=A.image;if(I&&I.height>0){const z=new _n(I.height/2);return z.fromEquirectangularTexture(n,A),M.set(A,z),A.addEventListener("dispose",e),D(z.texture,A.mapping)}else return null}}return A}function e(A){const i=A.target;i.removeEventListener("dispose",e);const I=M.get(i);I!==void 0&&(M.delete(i),I.dispose())}function N(){M=new WeakMap}return{get:t,dispose:N}}class bN extends kN{constructor(M=-1,D=1,t=1,e=-1,N=.1,A=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=M,this.right=D,this.top=t,this.bottom=e,this.near=N,this.far=A,this.updateProjectionMatrix()}copy(M,D){return super.copy(M,D),this.left=M.left,this.right=M.right,this.top=M.top,this.bottom=M.bottom,this.near=M.near,this.far=M.far,this.zoom=M.zoom,this.view=M.view===null?null:Object.assign({},M.view),this}setViewOffset(M,D,t,e,N,A){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=M,this.view.fullHeight=D,this.view.offsetX=t,this.view.offsetY=e,this.view.width=N,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const M=(this.right-this.left)/(2*this.zoom),D=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let N=t-M,A=t+M,i=e+D,I=e-D;if(this.view!==null&&this.view.enabled){const z=(this.right-this.left)/this.view.fullWidth/this.zoom,T=(this.top-this.bottom)/this.view.fullHeight/this.zoom;N+=z*this.view.offsetX,A=N+z*this.view.width,i-=T*this.view.offsetY,I=i-T*this.view.height}this.projectionMatrix.makeOrthographic(N,A,i,I,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(M){const D=super.toJSON(M);return D.object.zoom=this.zoom,D.object.left=this.left,D.object.right=this.right,D.object.top=this.top,D.object.bottom=this.bottom,D.object.near=this.near,D.object.far=this.far,this.view!==null&&(D.object.view=Object.assign({},this.view)),D}}bN.prototype.isOrthographicCamera=!0;class be extends ct{constructor(M){super(M),this.type="RawShaderMaterial"}}be.prototype.isRawShaderMaterial=!0;const kt=4,tt=8,hD=Math.pow(2,tt),Kn=[.125,.215,.35,.446,.526,.582],Rn=tt-kt+1+Kn.length,St=20,KN=new bN,{_lodPlanes:ee,_sizeLods:Pn,_sigmas:Ke}=FI(),Fn=new cM;let RN=null;const jt=(1+Math.sqrt(5))/2,Zt=1/jt,Bn=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,jt,Zt),new O(0,jt,-Zt),new O(Zt,0,jt),new O(-Zt,0,jt),new O(jt,Zt,0),new O(-jt,Zt,0)];class Gn{constructor(M){this._renderer=M,this._pingPongRenderTarget=null,this._blurMaterial=BI(St),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(M,D=0,t=.1,e=100){RN=this._renderer.getRenderTarget();const N=this._allocateTargets();return this._sceneToCubeUV(M,t,e,N),D>0&&this._blur(N,0,0,D),this._applyPMREM(N),this._cleanup(N),N}fromEquirectangular(M,D=null){return this._fromTexture(M,D)}fromCubemap(M,D=null){return this._fromTexture(M,D)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Wn(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Hn(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let M=0;M<ee.length;M++)ee[M].dispose()}_cleanup(M){this._renderer.setRenderTarget(RN),M.scissorTest=!1,Re(M,0,0,M.width,M.height)}_fromTexture(M,D){RN=this._renderer.getRenderTarget();const t=D||this._allocateTargets(M);return this._textureToCubeUV(M,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(M){const D={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},t=Vn(D);return t.depthBuffer=!M,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=Vn(D)),t}_compileMaterial(M){const D=new tD(ee[0],M);this._renderer.compile(D,KN)}_sceneToCubeUV(M,D,t,e){const i=new gD(90,1,D,t),I=[1,-1,1,1,1,1],z=[1,1,1,-1,-1,-1],T=this._renderer,u=T.autoClear,g=T.toneMapping;T.getClearColor(Fn),T.toneMapping=0,T.autoClear=!1;const r=new pN({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),j=new tD(new te,r);let y=!1;const o=M.background;o?o.isColor&&(r.color.copy(o),M.background=null,y=!0):(r.color.copy(Fn),y=!0);for(let c=0;c<6;c++){const s=c%3;s===0?(i.up.set(0,I[c],0),i.lookAt(z[c],0,0)):s===1?(i.up.set(0,0,I[c]),i.lookAt(0,z[c],0)):(i.up.set(0,I[c],0),i.lookAt(0,0,z[c])),Re(e,s*hD,c>2?hD:0,hD,hD),T.setRenderTarget(e),y&&T.render(j,i),T.render(M,i)}j.geometry.dispose(),j.material.dispose(),T.toneMapping=g,T.autoClear=u,M.background=o}_textureToCubeUV(M,D){const t=this._renderer,e=M.mapping===301||M.mapping===302;e?(this._cubemapShader===null&&(this._cubemapShader=Wn()),this._cubemapShader.uniforms.flipEnvMap.value=M.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=Hn());const N=e?this._cubemapShader:this._equirectShader,A=new tD(ee[0],N),i=N.uniforms;i.envMap.value=M,e||i.texelSize.value.set(1/M.image.width,1/M.image.height),Re(D,0,0,3*hD,2*hD),t.setRenderTarget(D),t.render(A,KN)}_applyPMREM(M){const D=this._renderer,t=D.autoClear;D.autoClear=!1;for(let e=1;e<Rn;e++){const N=Math.sqrt(Ke[e]*Ke[e]-Ke[e-1]*Ke[e-1]),A=Bn[(e-1)%Bn.length];this._blur(M,e-1,e,N,A)}D.autoClear=t}_blur(M,D,t,e,N){const A=this._pingPongRenderTarget;this._halfBlur(M,A,D,t,e,"latitudinal",N),this._halfBlur(A,M,t,t,e,"longitudinal",N)}_halfBlur(M,D,t,e,N,A,i){const I=this._renderer,z=this._blurMaterial;A!=="latitudinal"&&A!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const T=3,u=new tD(ee[e],z),g=z.uniforms,r=Pn[t]-1,j=isFinite(N)?Math.PI/(2*r):2*Math.PI/(2*St-1),y=N/j,o=isFinite(N)?1+Math.floor(T*y):St;o>St&&console.warn(`sigmaRadians, ${N}, is too large and will clip, as it requested ${o} samples when the maximum is set to ${St}`);const c=[];let s=0;for(let v=0;v<St;++v){const h=v/y,F=Math.exp(-h*h/2);c.push(F),v===0?s+=F:v<o&&(s+=2*F)}for(let v=0;v<c.length;v++)c[v]=c[v]/s;g.envMap.value=M.texture,g.samples.value=o,g.weights.value=c,g.latitudinal.value=A==="latitudinal",i&&(g.poleAxis.value=i),g.dTheta.value=j,g.mipInt.value=tt-t;const l=Pn[e],C=3*Math.max(0,hD-2*l),E=(e===0?0:2*hD)+2*l*(e>tt-kt?e-tt+kt:0);Re(D,C,E,3*l,2*l),I.setRenderTarget(D),I.render(u,KN)}}function FI(){const n=[],M=[],D=[];let t=tt;for(let e=0;e<Rn;e++){const N=Math.pow(2,t);M.push(N);let A=1/N;e>tt-kt?A=Kn[e-tt+kt-1]:e===0&&(A=0),D.push(A);const i=1/(N-1),I=-i/2,z=1+i/2,T=[I,I,z,I,z,z,I,I,z,z,I,z],u=6,g=6,r=3,j=2,y=1,o=new Float32Array(r*g*u),c=new Float32Array(j*g*u),s=new Float32Array(y*g*u);for(let C=0;C<u;C++){const E=C%3*2/3-1,v=C>2?0:-1,h=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];o.set(h,r*g*C),c.set(T,j*g*C);const F=[C,C,C,C,C,C];s.set(F,y*g*C)}const l=new BM;l.setAttribute("position",new DD(o,r)),l.setAttribute("uv",new DD(c,j)),l.setAttribute("faceIndex",new DD(s,y)),n.push(l),t>kt&&t--}return{_lodPlanes:n,_sizeLods:M,_sigmas:D}}function Vn(n){const M=new oD(3*hD,3*hD,n);return M.texture.mapping=306,M.texture.name="PMREM.cubeUv",M.scissorTest=!0,M}function Re(n,M,D,t,e){n.viewport.set(M,D,t,e),n.scissor.set(M,D,t,e)}function BI(n){const M=new Float32Array(n),D=new O(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:M},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:D}},vertexShader:PN(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hn(){const n=new q(1,1);return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n}},vertexShader:PN(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wn(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:PN(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function PN(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GI(n){let M=new WeakMap,D=null;function t(i){if(i&&i.isTexture){const I=i.mapping,z=I===303||I===304,T=I===301||I===302;if(z||T)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let u=M.get(i);return D===null&&(D=new Gn(n)),u=z?D.fromEquirectangular(i,u):D.fromCubemap(i,u),M.set(i,u),u.texture}else{if(M.has(i))return M.get(i).texture;{const u=i.image;if(z&&u&&u.height>0||T&&u&&e(u)){D===null&&(D=new Gn(n));const g=z?D.fromEquirectangular(i):D.fromCubemap(i);return M.set(i,g),i.addEventListener("dispose",N),g.texture}else return null}}}return i}function e(i){let I=0;const z=6;for(let T=0;T<z;T++)i[T]!==void 0&&I++;return I===z}function N(i){const I=i.target;I.removeEventListener("dispose",N);const z=M.get(I);z!==void 0&&(M.delete(I),z.dispose())}function A(){M=new WeakMap,D!==null&&(D.dispose(),D=null)}return{get:t,dispose:A}}function VI(n){const M={};function D(t){if(M[t]!==void 0)return M[t];let e;switch(t){case"WEBGL_depth_texture":e=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=n.getExtension(t)}return M[t]=e,e}return{has:function(t){return D(t)!==null},init:function(t){t.isWebGL2?D("EXT_color_buffer_float"):(D("WEBGL_depth_texture"),D("OES_texture_float"),D("OES_texture_half_float"),D("OES_texture_half_float_linear"),D("OES_standard_derivatives"),D("OES_element_index_uint"),D("OES_vertex_array_object"),D("ANGLE_instanced_arrays")),D("OES_texture_float_linear"),D("EXT_color_buffer_half_float"),D("WEBGL_multisampled_render_to_texture")},get:function(t){const e=D(t);return e===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function HI(n,M,D,t){const e={},N=new WeakMap;function A(u){const g=u.target;g.index!==null&&M.remove(g.index);for(const j in g.attributes)M.remove(g.attributes[j]);g.removeEventListener("dispose",A),delete e[g.id];const r=N.get(g);r&&(M.remove(r),N.delete(g)),t.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,D.memory.geometries--}function i(u,g){return e[g.id]===!0||(g.addEventListener("dispose",A),e[g.id]=!0,D.memory.geometries++),g}function I(u){const g=u.attributes;for(const j in g)M.update(g[j],34962);const r=u.morphAttributes;for(const j in r){const y=r[j];for(let o=0,c=y.length;o<c;o++)M.update(y[o],34962)}}function z(u){const g=[],r=u.index,j=u.attributes.position;let y=0;if(r!==null){const s=r.array;y=r.version;for(let l=0,C=s.length;l<C;l+=3){const E=s[l+0],v=s[l+1],h=s[l+2];g.push(E,v,v,h,h,E)}}else{const s=j.array;y=j.version;for(let l=0,C=s.length/3-1;l<C;l+=3){const E=l+0,v=l+1,h=l+2;g.push(E,v,v,h,h,E)}}const o=new(On(g)?Sn:kn)(g,1);o.version=y;const c=N.get(u);c&&M.remove(c),N.set(u,o)}function T(u){const g=N.get(u);if(g){const r=u.index;r!==null&&g.version<r.version&&z(u)}else z(u);return N.get(u)}return{get:i,update:I,getWireframeAttribute:T}}function WI(n,M,D,t){const e=t.isWebGL2;let N;function A(g){N=g}let i,I;function z(g){i=g.type,I=g.bytesPerElement}function T(g,r){n.drawElements(N,r,i,g*I),D.update(r,N,1)}function u(g,r,j){if(j===0)return;let y,o;if(e)y=n,o="drawElementsInstanced";else if(y=M.get("ANGLE_instanced_arrays"),o="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[o](N,r,i,g*I,j),D.update(r,N,j)}this.setMode=A,this.setIndex=z,this.render=T,this.renderInstances=u}function qI(n){const M={geometries:0,textures:0},D={frame:0,calls:0,triangles:0,points:0,lines:0};function t(N,A,i){switch(D.calls++,A){case 4:D.triangles+=i*(N/3);break;case 1:D.lines+=i*(N/2);break;case 3:D.lines+=i*(N-1);break;case 2:D.lines+=i*N;break;case 0:D.points+=i*N;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",A);break}}function e(){D.frame++,D.calls=0,D.triangles=0,D.points=0,D.lines=0}return{memory:M,render:D,programs:null,autoReset:!0,reset:e,update:t}}class FN extends ND{constructor(M=null,D=1,t=1,e=1){super(null),this.image={data:M,width:D,height:t,depth:e},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}FN.prototype.isDataTexture2DArray=!0;function XI(n,M){return n[0]-M[0]}function JI(n,M){return Math.abs(M[1])-Math.abs(n[1])}function qn(n,M){let D=1;const t=M.isInterleavedBufferAttribute?M.data.array:M.array;t instanceof Int8Array?D=127:t instanceof Int16Array?D=32767:t instanceof Int32Array?D=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",t),n.divideScalar(D)}function $I(n,M,D){const t={},e=new Float32Array(8),N=new WeakMap,A=new O,i=[];for(let z=0;z<8;z++)i[z]=[z,0];function I(z,T,u,g){const r=z.morphTargetInfluences;if(M.isWebGL2===!0){const j=T.morphAttributes.position.length;let y=N.get(T);if(y===void 0||y.count!==j){let p=function(){Z.dispose(),N.delete(T),T.removeEventListener("dispose",p)};y!==void 0&&y.texture.dispose();const s=T.morphAttributes.normal!==void 0,l=T.morphAttributes.position,C=T.morphAttributes.normal||[],E=T.attributes.position.count,v=s===!0?2:1;let h=E*v,F=1;h>M.maxTextureSize&&(F=Math.ceil(h/M.maxTextureSize),h=M.maxTextureSize);const MM=new Float32Array(h*F*4*j),Z=new FN(MM,h,F,j);Z.format=1023,Z.type=1015,Z.needsUpdate=!0;const a=v*4;for(let Y=0;Y<j;Y++){const k=l[Y],f=C[Y],Q=h*F*4*Y;for(let K=0;K<k.count;K++){A.fromBufferAttribute(k,K),k.normalized===!0&&qn(A,k);const W=K*a;MM[Q+W+0]=A.x,MM[Q+W+1]=A.y,MM[Q+W+2]=A.z,MM[Q+W+3]=0,s===!0&&(A.fromBufferAttribute(f,K),f.normalized===!0&&qn(A,f),MM[Q+W+4]=A.x,MM[Q+W+5]=A.y,MM[Q+W+6]=A.z,MM[Q+W+7]=0)}}y={count:j,texture:Z,size:new q(h,F)},N.set(T,y),T.addEventListener("dispose",p)}let o=0;for(let s=0;s<r.length;s++)o+=r[s];const c=T.morphTargetsRelative?1:1-o;g.getUniforms().setValue(n,"morphTargetBaseInfluence",c),g.getUniforms().setValue(n,"morphTargetInfluences",r),g.getUniforms().setValue(n,"morphTargetsTexture",y.texture,D),g.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const j=r===void 0?0:r.length;let y=t[T.id];if(y===void 0||y.length!==j){y=[];for(let C=0;C<j;C++)y[C]=[C,0];t[T.id]=y}for(let C=0;C<j;C++){const E=y[C];E[0]=C,E[1]=r[C]}y.sort(JI);for(let C=0;C<8;C++)C<j&&y[C][1]?(i[C][0]=y[C][0],i[C][1]=y[C][1]):(i[C][0]=Number.MAX_SAFE_INTEGER,i[C][1]=0);i.sort(XI);const o=T.morphAttributes.position,c=T.morphAttributes.normal;let s=0;for(let C=0;C<8;C++){const E=i[C],v=E[0],h=E[1];v!==Number.MAX_SAFE_INTEGER&&h?(o&&T.getAttribute("morphTarget"+C)!==o[v]&&T.setAttribute("morphTarget"+C,o[v]),c&&T.getAttribute("morphNormal"+C)!==c[v]&&T.setAttribute("morphNormal"+C,c[v]),e[C]=h,s+=h):(o&&T.hasAttribute("morphTarget"+C)===!0&&T.deleteAttribute("morphTarget"+C),c&&T.hasAttribute("morphNormal"+C)===!0&&T.deleteAttribute("morphNormal"+C),e[C]=0)}const l=T.morphTargetsRelative?1:1-s;g.getUniforms().setValue(n,"morphTargetBaseInfluence",l),g.getUniforms().setValue(n,"morphTargetInfluences",e)}}return{update:I}}function MT(n,M,D,t){let e=new WeakMap;function N(I){const z=t.render.frame,T=I.geometry,u=M.get(I,T);return e.get(u)!==z&&(M.update(u),e.set(u,z)),I.isInstancedMesh&&(I.hasEventListener("dispose",i)===!1&&I.addEventListener("dispose",i),D.update(I.instanceMatrix,34962),I.instanceColor!==null&&D.update(I.instanceColor,34962)),u}function A(){e=new WeakMap}function i(I){const z=I.target;z.removeEventListener("dispose",i),D.remove(z.instanceMatrix),z.instanceColor!==null&&D.remove(z.instanceColor)}return{update:N,dispose:A}}class Xn extends ND{constructor(M=null,D=1,t=1,e=1){super(null),this.image={data:M,width:D,height:t,depth:e},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xn.prototype.isDataTexture3D=!0;const Jn=new ND,$n=new FN,MA=new Xn,DA=new Se,tA=[],eA=[],NA=new Float32Array(16),nA=new Float32Array(9),AA=new Float32Array(4);function _t(n,M,D){const t=n[0];if(t<=0||t>0)return n;const e=M*D;let N=tA[e];if(N===void 0&&(N=new Float32Array(e),tA[e]=N),M!==0){t.toArray(N,0);for(let A=1,i=0;A!==M;++A)i+=D,n[A].toArray(N,i)}return N}function rD(n,M){if(n.length!==M.length)return!1;for(let D=0,t=n.length;D<t;D++)if(n[D]!==M[D])return!1;return!0}function TD(n,M){for(let D=0,t=M.length;D<t;D++)n[D]=M[D]}function Pe(n,M){let D=eA[M];D===void 0&&(D=new Int32Array(M),eA[M]=D);for(let t=0;t!==M;++t)D[t]=n.allocateTextureUnit();return D}function DT(n,M){const D=this.cache;D[0]!==M&&(n.uniform1f(this.addr,M),D[0]=M)}function tT(n,M){const D=this.cache;if(M.x!==void 0)(D[0]!==M.x||D[1]!==M.y)&&(n.uniform2f(this.addr,M.x,M.y),D[0]=M.x,D[1]=M.y);else{if(rD(D,M))return;n.uniform2fv(this.addr,M),TD(D,M)}}function eT(n,M){const D=this.cache;if(M.x!==void 0)(D[0]!==M.x||D[1]!==M.y||D[2]!==M.z)&&(n.uniform3f(this.addr,M.x,M.y,M.z),D[0]=M.x,D[1]=M.y,D[2]=M.z);else if(M.r!==void 0)(D[0]!==M.r||D[1]!==M.g||D[2]!==M.b)&&(n.uniform3f(this.addr,M.r,M.g,M.b),D[0]=M.r,D[1]=M.g,D[2]=M.b);else{if(rD(D,M))return;n.uniform3fv(this.addr,M),TD(D,M)}}function NT(n,M){const D=this.cache;if(M.x!==void 0)(D[0]!==M.x||D[1]!==M.y||D[2]!==M.z||D[3]!==M.w)&&(n.uniform4f(this.addr,M.x,M.y,M.z,M.w),D[0]=M.x,D[1]=M.y,D[2]=M.z,D[3]=M.w);else{if(rD(D,M))return;n.uniform4fv(this.addr,M),TD(D,M)}}function nT(n,M){const D=this.cache,t=M.elements;if(t===void 0){if(rD(D,M))return;n.uniformMatrix2fv(this.addr,!1,M),TD(D,M)}else{if(rD(D,t))return;AA.set(t),n.uniformMatrix2fv(this.addr,!1,AA),TD(D,t)}}function AT(n,M){const D=this.cache,t=M.elements;if(t===void 0){if(rD(D,M))return;n.uniformMatrix3fv(this.addr,!1,M),TD(D,M)}else{if(rD(D,t))return;nA.set(t),n.uniformMatrix3fv(this.addr,!1,nA),TD(D,t)}}function iT(n,M){const D=this.cache,t=M.elements;if(t===void 0){if(rD(D,M))return;n.uniformMatrix4fv(this.addr,!1,M),TD(D,M)}else{if(rD(D,t))return;NA.set(t),n.uniformMatrix4fv(this.addr,!1,NA),TD(D,t)}}function zT(n,M){const D=this.cache;D[0]!==M&&(n.uniform1i(this.addr,M),D[0]=M)}function IT(n,M){const D=this.cache;rD(D,M)||(n.uniform2iv(this.addr,M),TD(D,M))}function TT(n,M){const D=this.cache;rD(D,M)||(n.uniform3iv(this.addr,M),TD(D,M))}function uT(n,M){const D=this.cache;rD(D,M)||(n.uniform4iv(this.addr,M),TD(D,M))}function gT(n,M){const D=this.cache;D[0]!==M&&(n.uniform1ui(this.addr,M),D[0]=M)}function rT(n,M){const D=this.cache;rD(D,M)||(n.uniform2uiv(this.addr,M),TD(D,M))}function sT(n,M){const D=this.cache;rD(D,M)||(n.uniform3uiv(this.addr,M),TD(D,M))}function cT(n,M){const D=this.cache;rD(D,M)||(n.uniform4uiv(this.addr,M),TD(D,M))}function jT(n,M,D){const t=this.cache,e=D.allocateTextureUnit();t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e),D.safeSetTexture2D(M||Jn,e)}function yT(n,M,D){const t=this.cache,e=D.allocateTextureUnit();t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e),D.setTexture3D(M||MA,e)}function aT(n,M,D){const t=this.cache,e=D.allocateTextureUnit();t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e),D.safeSetTextureCube(M||DA,e)}function oT(n,M,D){const t=this.cache,e=D.allocateTextureUnit();t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e),D.setTexture2DArray(M||$n,e)}function CT(n){switch(n){case 5126:return DT;case 35664:return tT;case 35665:return eT;case 35666:return NT;case 35674:return nT;case 35675:return AT;case 35676:return iT;case 5124:case 35670:return zT;case 35667:case 35671:return IT;case 35668:case 35672:return TT;case 35669:case 35673:return uT;case 5125:return gT;case 36294:return rT;case 36295:return sT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return oT}}function LT(n,M){n.uniform1fv(this.addr,M)}function wT(n,M){const D=_t(M,this.size,2);n.uniform2fv(this.addr,D)}function OT(n,M){const D=_t(M,this.size,3);n.uniform3fv(this.addr,D)}function xT(n,M){const D=_t(M,this.size,4);n.uniform4fv(this.addr,D)}function ET(n,M){const D=_t(M,this.size,4);n.uniformMatrix2fv(this.addr,!1,D)}function lT(n,M){const D=_t(M,this.size,9);n.uniformMatrix3fv(this.addr,!1,D)}function dT(n,M){const D=_t(M,this.size,16);n.uniformMatrix4fv(this.addr,!1,D)}function vT(n,M){n.uniform1iv(this.addr,M)}function pT(n,M){n.uniform2iv(this.addr,M)}function hT(n,M){n.uniform3iv(this.addr,M)}function YT(n,M){n.uniform4iv(this.addr,M)}function UT(n,M){n.uniform1uiv(this.addr,M)}function QT(n,M){n.uniform2uiv(this.addr,M)}function fT(n,M){n.uniform3uiv(this.addr,M)}function mT(n,M){n.uniform4uiv(this.addr,M)}function kT(n,M,D){const t=M.length,e=Pe(D,t);n.uniform1iv(this.addr,e);for(let N=0;N!==t;++N)D.safeSetTexture2D(M[N]||Jn,e[N])}function ST(n,M,D){const t=M.length,e=Pe(D,t);n.uniform1iv(this.addr,e);for(let N=0;N!==t;++N)D.setTexture3D(M[N]||MA,e[N])}function ZT(n,M,D){const t=M.length,e=Pe(D,t);n.uniform1iv(this.addr,e);for(let N=0;N!==t;++N)D.safeSetTextureCube(M[N]||DA,e[N])}function _T(n,M,D){const t=M.length,e=Pe(D,t);n.uniform1iv(this.addr,e);for(let N=0;N!==t;++N)D.setTexture2DArray(M[N]||$n,e[N])}function bT(n){switch(n){case 5126:return LT;case 35664:return wT;case 35665:return OT;case 35666:return xT;case 35674:return ET;case 35675:return lT;case 35676:return dT;case 5124:case 35670:return vT;case 35667:case 35671:return pT;case 35668:case 35672:return hT;case 35669:case 35673:return YT;case 5125:return UT;case 36294:return QT;case 36295:return fT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return _T}}function KT(n,M,D){this.id=n,this.addr=D,this.cache=[],this.setValue=CT(M.type)}function iA(n,M,D){this.id=n,this.addr=D,this.cache=[],this.size=M.size,this.setValue=bT(M.type)}iA.prototype.updateCache=function(n){const M=this.cache;n instanceof Float32Array&&M.length!==n.length&&(this.cache=new Float32Array(n.length)),TD(M,n)};function zA(n){this.id=n,this.seq=[],this.map={}}zA.prototype.setValue=function(n,M,D){const t=this.seq;for(let e=0,N=t.length;e!==N;++e){const A=t[e];A.setValue(n,M[A.id],D)}};const BN=/(\w+)(\])?(\[|\.)?/g;function IA(n,M){n.seq.push(M),n.map[M.id]=M}function RT(n,M,D){const t=n.name,e=t.length;for(BN.lastIndex=0;;){const N=BN.exec(t),A=BN.lastIndex;let i=N[1];const I=N[2]==="]",z=N[3];if(I&&(i=i|0),z===void 0||z==="["&&A+2===e){IA(D,z===void 0?new KT(i,n,M):new iA(i,n,M));break}else{let u=D.map[i];u===void 0&&(u=new zA(i),IA(D,u)),D=u}}}function et(n,M){this.seq=[],this.map={};const D=n.getProgramParameter(M,35718);for(let t=0;t<D;++t){const e=n.getActiveUniform(M,t),N=n.getUniformLocation(M,e.name);RT(e,N,this)}}et.prototype.setValue=function(n,M,D,t){const e=this.map[M];e!==void 0&&e.setValue(n,D,t)},et.prototype.setOptional=function(n,M,D){const t=M[D];t!==void 0&&this.setValue(n,D,t)},et.upload=function(n,M,D,t){for(let e=0,N=M.length;e!==N;++e){const A=M[e],i=D[A.id];i.needsUpdate!==!1&&A.setValue(n,i.value,t)}},et.seqWithValue=function(n,M){const D=[];for(let t=0,e=n.length;t!==e;++t){const N=n[t];N.id in M&&D.push(N)}return D};function TA(n,M,D){const t=n.createShader(M);return n.shaderSource(t,D),n.compileShader(t),t}let PT=0;function FT(n){const M=n.split(`
`);for(let D=0;D<M.length;D++)M[D]=D+1+": "+M[D];return M.join(`
`)}function BT(n){switch(n){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function uA(n,M,D){const t=n.getShaderParameter(M,35713),e=n.getShaderInfoLog(M).trim();return t&&e===""?"":D.toUpperCase()+`

`+e+`

`+FT(n.getShaderSource(M))}function GT(n,M){const D=BT(M);return"vec4 "+n+"( vec4 value ) { return LinearTo"+D[0]+D[1]+"; }"}function VT(n,M){let D;switch(M){case 1:D="Linear";break;case 2:D="Reinhard";break;case 3:D="OptimizedCineon";break;case 4:D="ACESFilmic";break;case 5:D="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",M),D="Linear"}return"vec3 "+n+"( vec3 color ) { return "+D+"ToneMapping( color ); }"}function HT(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ne).join(`
`)}function WT(n){const M=[];for(const D in n){const t=n[D];t!==!1&&M.push("#define "+D+" "+t)}return M.join(`
`)}function qT(n,M){const D={},t=n.getProgramParameter(M,35721);for(let e=0;e<t;e++){const N=n.getActiveAttrib(M,e),A=N.name;let i=1;N.type===35674&&(i=2),N.type===35675&&(i=3),N.type===35676&&(i=4),D[A]={type:N.type,location:n.getAttribLocation(M,A),locationSize:i}}return D}function Ne(n){return n!==""}function gA(n,M){return n.replace(/NUM_DIR_LIGHTS/g,M.numDirLights).replace(/NUM_SPOT_LIGHTS/g,M.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,M.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,M.numPointLights).replace(/NUM_HEMI_LIGHTS/g,M.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,M.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,M.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,M.numPointLightShadows)}function rA(n,M){return n.replace(/NUM_CLIPPING_PLANES/g,M.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,M.numClippingPlanes-M.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function GN(n){return n.replace(XT,JT)}function JT(n,M){const D=YM[M];if(D===void 0)throw new Error("Can not resolve #include <"+M+">");return GN(D)}const $T=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Mu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sA(n){return n.replace(Mu,cA).replace($T,Du)}function Du(n,M,D,t){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),cA(n,M,D,t)}function cA(n,M,D,t){let e="";for(let N=parseInt(M);N<parseInt(D);N++)e+=t.replace(/\[\s*i\s*\]/g,"[ "+N+" ]").replace(/UNROLLED_LOOP_INDEX/g,N);return e}function jA(n){let M="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?M+=`
#define HIGH_PRECISION`:n.precision==="mediump"?M+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(M+=`
#define LOW_PRECISION`),M}function tu(n){let M="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?M="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?M="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(M="SHADOWMAP_TYPE_VSM"),M}function eu(n){let M="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:M="ENVMAP_TYPE_CUBE";break;case 306:case 307:M="ENVMAP_TYPE_CUBE_UV";break}return M}function Nu(n){let M="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:case 307:M="ENVMAP_MODE_REFRACTION";break}return M}function nu(n){let M="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:M="ENVMAP_BLENDING_MULTIPLY";break;case 1:M="ENVMAP_BLENDING_MIX";break;case 2:M="ENVMAP_BLENDING_ADD";break}return M}function Au(n,M,D,t){const e=n.getContext(),N=D.defines;let A=D.vertexShader,i=D.fragmentShader;const I=tu(D),z=eu(D),T=Nu(D),u=nu(D),g=D.isWebGL2?"":HT(D),r=WT(N),j=e.createProgram();let y,o,c=D.glslVersion?"#version "+D.glslVersion+`
`:"";D.isRawShaderMaterial?(y=[r].filter(Ne).join(`
`),y.length>0&&(y+=`
`),o=[g,r].filter(Ne).join(`
`),o.length>0&&(o+=`
`)):(y=[jA(D),"#define SHADER_NAME "+D.shaderName,r,D.instancing?"#define USE_INSTANCING":"",D.instancingColor?"#define USE_INSTANCING_COLOR":"",D.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+D.maxBones,D.useFog&&D.fog?"#define USE_FOG":"",D.useFog&&D.fogExp2?"#define FOG_EXP2":"",D.map?"#define USE_MAP":"",D.envMap?"#define USE_ENVMAP":"",D.envMap?"#define "+T:"",D.lightMap?"#define USE_LIGHTMAP":"",D.aoMap?"#define USE_AOMAP":"",D.emissiveMap?"#define USE_EMISSIVEMAP":"",D.bumpMap?"#define USE_BUMPMAP":"",D.normalMap?"#define USE_NORMALMAP":"",D.normalMap&&D.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",D.normalMap&&D.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",D.clearcoatMap?"#define USE_CLEARCOATMAP":"",D.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",D.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",D.displacementMap&&D.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",D.specularMap?"#define USE_SPECULARMAP":"",D.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",D.specularColorMap?"#define USE_SPECULARCOLORMAP":"",D.roughnessMap?"#define USE_ROUGHNESSMAP":"",D.metalnessMap?"#define USE_METALNESSMAP":"",D.alphaMap?"#define USE_ALPHAMAP":"",D.transmission?"#define USE_TRANSMISSION":"",D.transmissionMap?"#define USE_TRANSMISSIONMAP":"",D.thicknessMap?"#define USE_THICKNESSMAP":"",D.sheenColorMap?"#define USE_SHEENCOLORMAP":"",D.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",D.vertexTangents?"#define USE_TANGENT":"",D.vertexColors?"#define USE_COLOR":"",D.vertexAlphas?"#define USE_COLOR_ALPHA":"",D.vertexUvs?"#define USE_UV":"",D.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",D.flatShading?"#define FLAT_SHADED":"",D.skinning?"#define USE_SKINNING":"",D.useVertexTexture?"#define BONE_TEXTURE":"",D.morphTargets?"#define USE_MORPHTARGETS":"",D.morphNormals&&D.flatShading===!1?"#define USE_MORPHNORMALS":"",D.morphTargets&&D.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",D.morphTargets&&D.isWebGL2?"#define MORPHTARGETS_COUNT "+D.morphTargetsCount:"",D.doubleSided?"#define DOUBLE_SIDED":"",D.flipSided?"#define FLIP_SIDED":"",D.shadowMapEnabled?"#define USE_SHADOWMAP":"",D.shadowMapEnabled?"#define "+I:"",D.sizeAttenuation?"#define USE_SIZEATTENUATION":"",D.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",D.logarithmicDepthBuffer&&D.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ne).join(`
`),o=[g,jA(D),"#define SHADER_NAME "+D.shaderName,r,D.useFog&&D.fog?"#define USE_FOG":"",D.useFog&&D.fogExp2?"#define FOG_EXP2":"",D.map?"#define USE_MAP":"",D.matcap?"#define USE_MATCAP":"",D.envMap?"#define USE_ENVMAP":"",D.envMap?"#define "+z:"",D.envMap?"#define "+T:"",D.envMap?"#define "+u:"",D.lightMap?"#define USE_LIGHTMAP":"",D.aoMap?"#define USE_AOMAP":"",D.emissiveMap?"#define USE_EMISSIVEMAP":"",D.bumpMap?"#define USE_BUMPMAP":"",D.normalMap?"#define USE_NORMALMAP":"",D.normalMap&&D.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",D.normalMap&&D.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",D.clearcoat?"#define USE_CLEARCOAT":"",D.clearcoatMap?"#define USE_CLEARCOATMAP":"",D.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",D.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",D.specularMap?"#define USE_SPECULARMAP":"",D.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",D.specularColorMap?"#define USE_SPECULARCOLORMAP":"",D.roughnessMap?"#define USE_ROUGHNESSMAP":"",D.metalnessMap?"#define USE_METALNESSMAP":"",D.alphaMap?"#define USE_ALPHAMAP":"",D.alphaTest?"#define USE_ALPHATEST":"",D.sheen?"#define USE_SHEEN":"",D.sheenColorMap?"#define USE_SHEENCOLORMAP":"",D.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",D.transmission?"#define USE_TRANSMISSION":"",D.transmissionMap?"#define USE_TRANSMISSIONMAP":"",D.thicknessMap?"#define USE_THICKNESSMAP":"",D.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",D.vertexTangents?"#define USE_TANGENT":"",D.vertexColors||D.instancingColor?"#define USE_COLOR":"",D.vertexAlphas?"#define USE_COLOR_ALPHA":"",D.vertexUvs?"#define USE_UV":"",D.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",D.gradientMap?"#define USE_GRADIENTMAP":"",D.flatShading?"#define FLAT_SHADED":"",D.doubleSided?"#define DOUBLE_SIDED":"",D.flipSided?"#define FLIP_SIDED":"",D.shadowMapEnabled?"#define USE_SHADOWMAP":"",D.shadowMapEnabled?"#define "+I:"",D.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",D.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",D.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",D.logarithmicDepthBuffer&&D.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(D.extensionShaderTextureLOD||D.envMap)&&D.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",D.toneMapping!==0?"#define TONE_MAPPING":"",D.toneMapping!==0?YM.tonemapping_pars_fragment:"",D.toneMapping!==0?VT("toneMapping",D.toneMapping):"",D.dithering?"#define DITHERING":"",D.transparent?"":"#define OPAQUE",YM.encodings_pars_fragment,GT("linearToOutputTexel",D.outputEncoding),D.depthPacking?"#define DEPTH_PACKING "+D.depthPacking:"",`
`].filter(Ne).join(`
`)),A=GN(A),A=gA(A,D),A=rA(A,D),i=GN(i),i=gA(i,D),i=rA(i,D),A=sA(A),i=sA(i),D.isWebGL2&&D.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,o=["#define varying in",D.glslVersion===Ln?"":"layout(location = 0) out highp vec4 pc_fragColor;",D.glslVersion===Ln?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const s=c+y+A,l=c+o+i,C=TA(e,35633,s),E=TA(e,35632,l);if(e.attachShader(j,C),e.attachShader(j,E),D.index0AttributeName!==void 0?e.bindAttribLocation(j,0,D.index0AttributeName):D.morphTargets===!0&&e.bindAttribLocation(j,0,"position"),e.linkProgram(j),n.debug.checkShaderErrors){const F=e.getProgramInfoLog(j).trim(),MM=e.getShaderInfoLog(C).trim(),Z=e.getShaderInfoLog(E).trim();let a=!0,p=!0;if(e.getProgramParameter(j,35714)===!1){a=!1;const Y=uA(e,C,"vertex"),k=uA(e,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(j,35715)+`

Program Info Log: `+F+`
`+Y+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(MM===""||Z==="")&&(p=!1);p&&(this.diagnostics={runnable:a,programLog:F,vertexShader:{log:MM,prefix:y},fragmentShader:{log:Z,prefix:o}})}e.deleteShader(C),e.deleteShader(E);let v;this.getUniforms=function(){return v===void 0&&(v=new et(e,j)),v};let h;return this.getAttributes=function(){return h===void 0&&(h=qT(e,j)),h},this.destroy=function(){t.releaseStatesOfProgram(this),e.deleteProgram(j),this.program=void 0},this.name=D.shaderName,this.id=PT++,this.cacheKey=M,this.usedTimes=1,this.program=j,this.vertexShader=C,this.fragmentShader=E,this}let iu=0;class zu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(M){const D=M.vertexShader,t=M.fragmentShader,e=this._getShaderStage(D),N=this._getShaderStage(t),A=this._getShaderCacheForMaterial(M);return A.has(e)===!1&&(A.add(e),e.usedTimes++),A.has(N)===!1&&(A.add(N),N.usedTimes++),this}remove(M){const D=this.materialCache.get(M);for(const t of D)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t);return this.materialCache.delete(M),this}getVertexShaderID(M){return this._getShaderStage(M.vertexShader).id}getFragmentShaderID(M){return this._getShaderStage(M.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(M){const D=this.materialCache;return D.has(M)===!1&&D.set(M,new Set),D.get(M)}_getShaderStage(M){const D=this.shaderCache;if(D.has(M)===!1){const t=new Iu;D.set(M,t)}return D.get(M)}}class Iu{constructor(){this.id=iu++,this.usedTimes=0}}function Tu(n,M,D,t,e,N,A){const i=new pn,I=new zu,z=[],T=e.isWebGL2,u=e.logarithmicDepthBuffer,g=e.floatVertexTextures,r=e.maxVertexUniforms,j=e.vertexTextures;let y=e.precision;const o={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(a){const Y=a.skeleton.bones;if(g)return 1024;{const f=Math.floor((r-20)/4),Q=Math.min(f,Y.length);return Q<Y.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Y.length+" bones. This GPU supports "+Q+"."),0):Q}}function s(a,p,Y,k,f){const Q=k.fog,K=a.isMeshStandardMaterial?k.environment:null,W=(a.isMeshStandardMaterial?D:M).get(a.envMap||K),IM=o[a.type],_=f.isSkinnedMesh?c(f):0;a.precision!==null&&(y=e.getMaxPrecision(a.precision),y!==a.precision&&console.warn("THREE.WebGLProgram.getParameters:",a.precision,"not supported, using",y,"instead."));let H,eM,uM,jM;if(IM){const iM=pD[IM];H=iM.vertexShader,eM=iM.fragmentShader}else H=a.vertexShader,eM=a.fragmentShader,I.update(a),uM=I.getVertexShaderID(a),jM=I.getFragmentShaderID(a);const b=n.getRenderTarget(),kM=a.alphaTest>0,rM=a.clearcoat>0;return{isWebGL2:T,shaderID:IM,shaderName:a.type,vertexShader:H,fragmentShader:eM,defines:a.defines,customVertexShaderID:uM,customFragmentShaderID:jM,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:y,instancing:f.isInstancedMesh===!0,instancingColor:f.isInstancedMesh===!0&&f.instanceColor!==null,supportsVertexTextures:j,outputEncoding:b===null?n.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:3e3,map:!!a.map,matcap:!!a.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUV:!!W&&(W.mapping===306||W.mapping===307),lightMap:!!a.lightMap,aoMap:!!a.aoMap,emissiveMap:!!a.emissiveMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,objectSpaceNormalMap:a.normalMapType===1,tangentSpaceNormalMap:a.normalMapType===0,decodeVideoTexture:!!a.map&&a.map.isVideoTexture===!0&&a.map.encoding===3001,clearcoat:rM,clearcoatMap:rM&&!!a.clearcoatMap,clearcoatRoughnessMap:rM&&!!a.clearcoatRoughnessMap,clearcoatNormalMap:rM&&!!a.clearcoatNormalMap,displacementMap:!!a.displacementMap,roughnessMap:!!a.roughnessMap,metalnessMap:!!a.metalnessMap,specularMap:!!a.specularMap,specularIntensityMap:!!a.specularIntensityMap,specularColorMap:!!a.specularColorMap,transparent:a.transparent,alphaMap:!!a.alphaMap,alphaTest:kM,gradientMap:!!a.gradientMap,sheen:a.sheen>0,sheenColorMap:!!a.sheenColorMap,sheenRoughnessMap:!!a.sheenRoughnessMap,transmission:a.transmission>0,transmissionMap:!!a.transmissionMap,thicknessMap:!!a.thicknessMap,combine:a.combine,vertexTangents:!!a.normalMap&&!!f.geometry&&!!f.geometry.attributes.tangent,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!f.geometry&&!!f.geometry.attributes.color&&f.geometry.attributes.color.itemSize===4,vertexUvs:!!a.map||!!a.bumpMap||!!a.normalMap||!!a.specularMap||!!a.alphaMap||!!a.emissiveMap||!!a.roughnessMap||!!a.metalnessMap||!!a.clearcoatMap||!!a.clearcoatRoughnessMap||!!a.clearcoatNormalMap||!!a.displacementMap||!!a.transmissionMap||!!a.thicknessMap||!!a.specularIntensityMap||!!a.specularColorMap||!!a.sheenColorMap||!!a.sheenRoughnessMap,uvsVertexOnly:!(!!a.map||!!a.bumpMap||!!a.normalMap||!!a.specularMap||!!a.alphaMap||!!a.emissiveMap||!!a.roughnessMap||!!a.metalnessMap||!!a.clearcoatNormalMap||a.transmission>0||!!a.transmissionMap||!!a.thicknessMap||!!a.specularIntensityMap||!!a.specularColorMap||a.sheen>0||!!a.sheenColorMap||!!a.sheenRoughnessMap)&&!!a.displacementMap,fog:!!Q,useFog:a.fog,fogExp2:Q&&Q.isFogExp2,flatShading:!!a.flatShading,sizeAttenuation:a.sizeAttenuation,logarithmicDepthBuffer:u,skinning:f.isSkinnedMesh===!0&&_>0,maxBones:_,useVertexTexture:g,morphTargets:!!f.geometry&&!!f.geometry.morphAttributes.position,morphNormals:!!f.geometry&&!!f.geometry.morphAttributes.normal,morphTargetsCount:!!f.geometry&&!!f.geometry.morphAttributes.position?f.geometry.morphAttributes.position.length:0,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numClippingPlanes:A.numPlanes,numClipIntersection:A.numIntersection,dithering:a.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:a.toneMapped?n.toneMapping:0,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,depthPacking:a.depthPacking!==void 0?a.depthPacking:!1,index0AttributeName:a.index0AttributeName,extensionDerivatives:a.extensions&&a.extensions.derivatives,extensionFragDepth:a.extensions&&a.extensions.fragDepth,extensionDrawBuffers:a.extensions&&a.extensions.drawBuffers,extensionShaderTextureLOD:a.extensions&&a.extensions.shaderTextureLOD,rendererExtensionFragDepth:T||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:T||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:T||t.has("EXT_shader_texture_lod"),customProgramCacheKey:a.customProgramCacheKey()}}function l(a){const p=[];if(a.shaderID?p.push(a.shaderID):(p.push(a.customVertexShaderID),p.push(a.customFragmentShaderID)),a.defines!==void 0)for(const Y in a.defines)p.push(Y),p.push(a.defines[Y]);return a.isRawShaderMaterial===!1&&(C(p,a),E(p,a),p.push(n.outputEncoding)),p.push(a.customProgramCacheKey),p.join()}function C(a,p){a.push(p.precision),a.push(p.outputEncoding),a.push(p.envMapMode),a.push(p.combine),a.push(p.vertexUvs),a.push(p.fogExp2),a.push(p.sizeAttenuation),a.push(p.maxBones),a.push(p.morphTargetsCount),a.push(p.numDirLights),a.push(p.numPointLights),a.push(p.numSpotLights),a.push(p.numHemiLights),a.push(p.numRectAreaLights),a.push(p.numDirLightShadows),a.push(p.numPointLightShadows),a.push(p.numSpotLightShadows),a.push(p.shadowMapType),a.push(p.toneMapping),a.push(p.numClippingPlanes),a.push(p.numClipIntersection)}function E(a,p){i.disableAll(),p.isWebGL2&&i.enable(0),p.supportsVertexTextures&&i.enable(1),p.instancing&&i.enable(2),p.instancingColor&&i.enable(3),p.map&&i.enable(4),p.matcap&&i.enable(5),p.envMap&&i.enable(6),p.envMapCubeUV&&i.enable(7),p.lightMap&&i.enable(8),p.aoMap&&i.enable(9),p.emissiveMap&&i.enable(10),p.bumpMap&&i.enable(11),p.normalMap&&i.enable(12),p.objectSpaceNormalMap&&i.enable(13),p.tangentSpaceNormalMap&&i.enable(14),p.clearcoat&&i.enable(15),p.clearcoatMap&&i.enable(16),p.clearcoatRoughnessMap&&i.enable(17),p.clearcoatNormalMap&&i.enable(18),p.displacementMap&&i.enable(19),p.specularMap&&i.enable(20),p.roughnessMap&&i.enable(21),p.metalnessMap&&i.enable(22),p.gradientMap&&i.enable(23),p.alphaMap&&i.enable(24),p.alphaTest&&i.enable(25),p.vertexColors&&i.enable(26),p.vertexAlphas&&i.enable(27),p.vertexUvs&&i.enable(28),p.vertexTangents&&i.enable(29),p.uvsVertexOnly&&i.enable(30),p.fog&&i.enable(31),a.push(i.mask),i.disableAll(),p.useFog&&i.enable(0),p.flatShading&&i.enable(1),p.logarithmicDepthBuffer&&i.enable(2),p.skinning&&i.enable(3),p.useVertexTexture&&i.enable(4),p.morphTargets&&i.enable(5),p.morphNormals&&i.enable(6),p.premultipliedAlpha&&i.enable(7),p.shadowMapEnabled&&i.enable(8),p.physicallyCorrectLights&&i.enable(9),p.doubleSided&&i.enable(10),p.flipSided&&i.enable(11),p.depthPacking&&i.enable(12),p.dithering&&i.enable(13),p.specularIntensityMap&&i.enable(14),p.specularColorMap&&i.enable(15),p.transmission&&i.enable(16),p.transmissionMap&&i.enable(17),p.thicknessMap&&i.enable(18),p.sheen&&i.enable(19),p.sheenColorMap&&i.enable(20),p.sheenRoughnessMap&&i.enable(21),p.decodeVideoTexture&&i.enable(22),p.transparent&&i.enable(23),a.push(i.mask)}function v(a){const p=o[a.type];let Y;if(p){const k=pD[p];Y=Zi.clone(k.uniforms)}else Y=a.uniforms;return Y}function h(a,p){let Y;for(let k=0,f=z.length;k<f;k++){const Q=z[k];if(Q.cacheKey===p){Y=Q,++Y.usedTimes;break}}return Y===void 0&&(Y=new Au(n,p,a,N),z.push(Y)),Y}function F(a){if(--a.usedTimes===0){const p=z.indexOf(a);z[p]=z[z.length-1],z.pop(),a.destroy()}}function MM(a){I.remove(a)}function Z(){I.dispose()}return{getParameters:s,getProgramCacheKey:l,getUniforms:v,acquireProgram:h,releaseProgram:F,releaseShaderCache:MM,programs:z,dispose:Z}}function uu(){let n=new WeakMap;function M(N){let A=n.get(N);return A===void 0&&(A={},n.set(N,A)),A}function D(N){n.delete(N)}function t(N,A,i){n.get(N)[A]=i}function e(){n=new WeakMap}return{get:M,remove:D,update:t,dispose:e}}function gu(n,M){return n.groupOrder!==M.groupOrder?n.groupOrder-M.groupOrder:n.renderOrder!==M.renderOrder?n.renderOrder-M.renderOrder:n.material.id!==M.material.id?n.material.id-M.material.id:n.z!==M.z?n.z-M.z:n.id-M.id}function yA(n,M){return n.groupOrder!==M.groupOrder?n.groupOrder-M.groupOrder:n.renderOrder!==M.renderOrder?n.renderOrder-M.renderOrder:n.z!==M.z?M.z-n.z:n.id-M.id}function aA(){const n=[];let M=0;const D=[],t=[],e=[];function N(){M=0,D.length=0,t.length=0,e.length=0}function A(u,g,r,j,y,o){let c=n[M];return c===void 0?(c={id:u.id,object:u,geometry:g,material:r,groupOrder:j,renderOrder:u.renderOrder,z:y,group:o},n[M]=c):(c.id=u.id,c.object=u,c.geometry=g,c.material=r,c.groupOrder=j,c.renderOrder=u.renderOrder,c.z=y,c.group=o),M++,c}function i(u,g,r,j,y,o){const c=A(u,g,r,j,y,o);r.transmission>0?t.push(c):r.transparent===!0?e.push(c):D.push(c)}function I(u,g,r,j,y,o){const c=A(u,g,r,j,y,o);r.transmission>0?t.unshift(c):r.transparent===!0?e.unshift(c):D.unshift(c)}function z(u,g){D.length>1&&D.sort(u||gu),t.length>1&&t.sort(g||yA),e.length>1&&e.sort(g||yA)}function T(){for(let u=M,g=n.length;u<g;u++){const r=n[u];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:D,transmissive:t,transparent:e,init:N,push:i,unshift:I,finish:T,sort:z}}function ru(){let n=new WeakMap;function M(t,e){let N;return n.has(t)===!1?(N=new aA,n.set(t,[N])):e>=n.get(t).length?(N=new aA,n.get(t).push(N)):N=n.get(t)[e],N}function D(){n=new WeakMap}return{get:M,dispose:D}}function su(){const n={};return{get:function(M){if(n[M.id]!==void 0)return n[M.id];let D;switch(M.type){case"DirectionalLight":D={direction:new O,color:new cM};break;case"SpotLight":D={position:new O,direction:new O,color:new cM,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":D={position:new O,color:new cM,distance:0,decay:0};break;case"HemisphereLight":D={direction:new O,skyColor:new cM,groundColor:new cM};break;case"RectAreaLight":D={color:new cM,position:new O,halfWidth:new O,halfHeight:new O};break}return n[M.id]=D,D}}}function cu(){const n={};return{get:function(M){if(n[M.id]!==void 0)return n[M.id];let D;switch(M.type){case"DirectionalLight":D={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":D={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":D={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[M.id]=D,D}}}let ju=0;function yu(n,M){return(M.castShadow?1:0)-(n.castShadow?1:0)}function au(n,M){const D=new su,t=cu(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let T=0;T<9;T++)e.probe.push(new O);const N=new O,A=new aM,i=new aM;function I(T,u){let g=0,r=0,j=0;for(let MM=0;MM<9;MM++)e.probe[MM].set(0,0,0);let y=0,o=0,c=0,s=0,l=0,C=0,E=0,v=0;T.sort(yu);const h=u!==!0?Math.PI:1;for(let MM=0,Z=T.length;MM<Z;MM++){const a=T[MM],p=a.color,Y=a.intensity,k=a.distance,f=a.shadow&&a.shadow.map?a.shadow.map.texture:null;if(a.isAmbientLight)g+=p.r*Y*h,r+=p.g*Y*h,j+=p.b*Y*h;else if(a.isLightProbe)for(let Q=0;Q<9;Q++)e.probe[Q].addScaledVector(a.sh.coefficients[Q],Y);else if(a.isDirectionalLight){const Q=D.get(a);if(Q.color.copy(a.color).multiplyScalar(a.intensity*h),a.castShadow){const K=a.shadow,W=t.get(a);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,e.directionalShadow[y]=W,e.directionalShadowMap[y]=f,e.directionalShadowMatrix[y]=a.shadow.matrix,C++}e.directional[y]=Q,y++}else if(a.isSpotLight){const Q=D.get(a);if(Q.position.setFromMatrixPosition(a.matrixWorld),Q.color.copy(p).multiplyScalar(Y*h),Q.distance=k,Q.coneCos=Math.cos(a.angle),Q.penumbraCos=Math.cos(a.angle*(1-a.penumbra)),Q.decay=a.decay,a.castShadow){const K=a.shadow,W=t.get(a);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,e.spotShadow[c]=W,e.spotShadowMap[c]=f,e.spotShadowMatrix[c]=a.shadow.matrix,v++}e.spot[c]=Q,c++}else if(a.isRectAreaLight){const Q=D.get(a);Q.color.copy(p).multiplyScalar(Y),Q.halfWidth.set(a.width*.5,0,0),Q.halfHeight.set(0,a.height*.5,0),e.rectArea[s]=Q,s++}else if(a.isPointLight){const Q=D.get(a);if(Q.color.copy(a.color).multiplyScalar(a.intensity*h),Q.distance=a.distance,Q.decay=a.decay,a.castShadow){const K=a.shadow,W=t.get(a);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,e.pointShadow[o]=W,e.pointShadowMap[o]=f,e.pointShadowMatrix[o]=a.shadow.matrix,E++}e.point[o]=Q,o++}else if(a.isHemisphereLight){const Q=D.get(a);Q.skyColor.copy(a.color).multiplyScalar(Y*h),Q.groundColor.copy(a.groundColor).multiplyScalar(Y*h),e.hemi[l]=Q,l++}}s>0&&(M.isWebGL2||n.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=DM.LTC_FLOAT_1,e.rectAreaLTC2=DM.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=DM.LTC_HALF_1,e.rectAreaLTC2=DM.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=g,e.ambient[1]=r,e.ambient[2]=j;const F=e.hash;(F.directionalLength!==y||F.pointLength!==o||F.spotLength!==c||F.rectAreaLength!==s||F.hemiLength!==l||F.numDirectionalShadows!==C||F.numPointShadows!==E||F.numSpotShadows!==v)&&(e.directional.length=y,e.spot.length=c,e.rectArea.length=s,e.point.length=o,e.hemi.length=l,e.directionalShadow.length=C,e.directionalShadowMap.length=C,e.pointShadow.length=E,e.pointShadowMap.length=E,e.spotShadow.length=v,e.spotShadowMap.length=v,e.directionalShadowMatrix.length=C,e.pointShadowMatrix.length=E,e.spotShadowMatrix.length=v,F.directionalLength=y,F.pointLength=o,F.spotLength=c,F.rectAreaLength=s,F.hemiLength=l,F.numDirectionalShadows=C,F.numPointShadows=E,F.numSpotShadows=v,e.version=ju++)}function z(T,u){let g=0,r=0,j=0,y=0,o=0;const c=u.matrixWorldInverse;for(let s=0,l=T.length;s<l;s++){const C=T[s];if(C.isDirectionalLight){const E=e.directional[g];E.direction.setFromMatrixPosition(C.matrixWorld),N.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(N),E.direction.transformDirection(c),g++}else if(C.isSpotLight){const E=e.spot[j];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(C.matrixWorld),N.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(N),E.direction.transformDirection(c),j++}else if(C.isRectAreaLight){const E=e.rectArea[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(c),i.identity(),A.copy(C.matrixWorld),A.premultiply(c),i.extractRotation(A),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(i),E.halfHeight.applyMatrix4(i),y++}else if(C.isPointLight){const E=e.point[r];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(c),r++}else if(C.isHemisphereLight){const E=e.hemi[o];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(c),E.direction.normalize(),o++}}}return{setup:I,setupView:z,state:e}}function oA(n,M){const D=new au(n,M),t=[],e=[];function N(){t.length=0,e.length=0}function A(u){t.push(u)}function i(u){e.push(u)}function I(u){D.setup(t,u)}function z(u){D.setupView(t,u)}return{init:N,state:{lightsArray:t,shadowsArray:e,lights:D},setupLights:I,setupLightsView:z,pushLight:A,pushShadow:i}}function ou(n,M){let D=new WeakMap;function t(N,A=0){let i;return D.has(N)===!1?(i=new oA(n,M),D.set(N,[i])):A>=D.get(N).length?(i=new oA(n,M),D.get(N).push(i)):i=D.get(N)[A],i}function e(){D=new WeakMap}return{get:t,dispose:e}}class CA extends nD{constructor(M){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(M)}copy(M){return super.copy(M),this.depthPacking=M.depthPacking,this.map=M.map,this.alphaMap=M.alphaMap,this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this}}CA.prototype.isMeshDepthMaterial=!0;class LA extends nD{constructor(M){super(),this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(M)}copy(M){return super.copy(M),this.referencePosition.copy(M.referencePosition),this.nearDistance=M.nearDistance,this.farDistance=M.farDistance,this.map=M.map,this.alphaMap=M.alphaMap,this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this}}LA.prototype.isMeshDistanceMaterial=!0;const Cu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wA(n,M,D){let t=new _e;const e=new q,N=new q,A=new PM,i=new CA({depthPacking:3201}),I=new LA,z={},T=D.maxTextureSize,u={0:1,1:0,2:2},g=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Cu,fragmentShader:Lu}),r=g.clone();r.defines.HORIZONTAL_PASS=1;const j=new BM;j.setAttribute("position",new DD(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tD(j,g),o=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(C,E,v){if(o.enabled===!1||o.autoUpdate===!1&&o.needsUpdate===!1||C.length===0)return;const h=n.getRenderTarget(),F=n.getActiveCubeFace(),MM=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(0),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);for(let a=0,p=C.length;a<p;a++){const Y=C[a],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;e.copy(k.mapSize);const f=k.getFrameExtents();if(e.multiply(f),N.copy(k.mapSize),(e.x>T||e.y>T)&&(e.x>T&&(N.x=Math.floor(T/f.x),e.x=N.x*f.x,k.mapSize.x=N.x),e.y>T&&(N.y=Math.floor(T/f.y),e.y=N.y*f.y,k.mapSize.y=N.y)),k.map===null&&!k.isPointLightShadow&&this.type===3){const K={minFilter:1006,magFilter:1006,format:1023};k.map=new oD(e.x,e.y,K),k.map.texture.name=Y.name+".shadowMap",k.mapPass=new oD(e.x,e.y,K),k.camera.updateProjectionMatrix()}if(k.map===null){const K={minFilter:1003,magFilter:1003,format:1023};k.map=new oD(e.x,e.y,K),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Q=k.getViewportCount();for(let K=0;K<Q;K++){const W=k.getViewport(K);A.set(N.x*W.x,N.y*W.y,N.x*W.z,N.y*W.w),Z.viewport(A),k.updateMatrices(Y,K),t=k.getFrustum(),l(E,v,k.camera,Y,this.type)}!k.isPointLightShadow&&this.type===3&&c(k,v),k.needsUpdate=!1}o.needsUpdate=!1,n.setRenderTarget(h,F,MM)};function c(C,E){const v=M.update(y);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,r.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,r.needsUpdate=!0),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(E,null,v,g,y,null),r.uniforms.shadow_pass.value=C.mapPass.texture,r.uniforms.resolution.value=C.mapSize,r.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(E,null,v,r,y,null)}function s(C,E,v,h,F,MM,Z){let a=null;const p=h.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(p!==void 0?a=p:a=h.isPointLight===!0?I:i,n.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const Y=a.uuid,k=v.uuid;let f=z[Y];f===void 0&&(f={},z[Y]=f);let Q=f[k];Q===void 0&&(Q=a.clone(),f[k]=Q),a=Q}return a.visible=v.visible,a.wireframe=v.wireframe,Z===3?a.side=v.shadowSide!==null?v.shadowSide:v.side:a.side=v.shadowSide!==null?v.shadowSide:u[v.side],a.alphaMap=v.alphaMap,a.alphaTest=v.alphaTest,a.clipShadows=v.clipShadows,a.clippingPlanes=v.clippingPlanes,a.clipIntersection=v.clipIntersection,a.displacementMap=v.displacementMap,a.displacementScale=v.displacementScale,a.displacementBias=v.displacementBias,a.wireframeLinewidth=v.wireframeLinewidth,a.linewidth=v.linewidth,h.isPointLight===!0&&a.isMeshDistanceMaterial===!0&&(a.referencePosition.setFromMatrixPosition(h.matrixWorld),a.nearDistance=F,a.farDistance=MM),a}function l(C,E,v,h,F){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===3)&&(!C.frustumCulled||t.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);const a=M.update(C),p=C.material;if(Array.isArray(p)){const Y=a.groups;for(let k=0,f=Y.length;k<f;k++){const Q=Y[k],K=p[Q.materialIndex];if(K&&K.visible){const W=s(C,a,K,h,v.near,v.far,F);n.renderBufferDirect(v,null,a,W,C,Q)}}}else if(p.visible){const Y=s(C,a,p,h,v.near,v.far,F);n.renderBufferDirect(v,null,a,Y,C,null)}}const Z=C.children;for(let a=0,p=Z.length;a<p;a++)l(Z[a],E,v,h,F)}}function wu(n,M,D){const t=D.isWebGL2;function e(){let d=!1;const TM=new PM;let AM=null;const LM=new PM(0,0,0,0);return{setMask:function(G){AM!==G&&!d&&(n.colorMask(G,G,G,G),AM=G)},setLocked:function(G){d=G},setClear:function(G,oM,UM,qM,aD){aD===!0&&(G*=qM,oM*=qM,UM*=qM),TM.set(G,oM,UM,qM),LM.equals(TM)===!1&&(n.clearColor(G,oM,UM,qM),LM.copy(TM))},reset:function(){d=!1,AM=null,LM.set(-1,0,0,0)}}}function N(){let d=!1,TM=null,AM=null,LM=null;return{setTest:function(G){G?b(2929):kM(2929)},setMask:function(G){TM!==G&&!d&&(n.depthMask(G),TM=G)},setFunc:function(G){if(AM!==G){if(G)switch(G){case 0:n.depthFunc(512);break;case 1:n.depthFunc(519);break;case 2:n.depthFunc(513);break;case 3:n.depthFunc(515);break;case 4:n.depthFunc(514);break;case 5:n.depthFunc(518);break;case 6:n.depthFunc(516);break;case 7:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);AM=G}},setLocked:function(G){d=G},setClear:function(G){LM!==G&&(n.clearDepth(G),LM=G)},reset:function(){d=!1,TM=null,AM=null,LM=null}}}function A(){let d=!1,TM=null,AM=null,LM=null,G=null,oM=null,UM=null,qM=null,aD=null;return{setTest:function(XM){d||(XM?b(2960):kM(2960))},setMask:function(XM){TM!==XM&&!d&&(n.stencilMask(XM),TM=XM)},setFunc:function(XM,QD,GD){(AM!==XM||LM!==QD||G!==GD)&&(n.stencilFunc(XM,QD,GD),AM=XM,LM=QD,G=GD)},setOp:function(XM,QD,GD){(oM!==XM||UM!==QD||qM!==GD)&&(n.stencilOp(XM,QD,GD),oM=XM,UM=QD,qM=GD)},setLocked:function(XM){d=XM},setClear:function(XM){aD!==XM&&(n.clearStencil(XM),aD=XM)},reset:function(){d=!1,TM=null,AM=null,LM=null,G=null,oM=null,UM=null,qM=null,aD=null}}}const i=new e,I=new N,z=new A;let T={},u={},g=new WeakMap,r=[],j=null,y=!1,o=null,c=null,s=null,l=null,C=null,E=null,v=null,h=!1,F=null,MM=null,Z=null,a=null,p=null;const Y=n.getParameter(35661);let k=!1,f=0;const Q=n.getParameter(7938);Q.indexOf("WebGL")!==-1?(f=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=f>=1):Q.indexOf("OpenGL ES")!==-1&&(f=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=f>=2);let K=null,W={};const IM=n.getParameter(3088),_=n.getParameter(2978),H=new PM().fromArray(IM),eM=new PM().fromArray(_);function uM(d,TM,AM){const LM=new Uint8Array(4),G=n.createTexture();n.bindTexture(d,G),n.texParameteri(d,10241,9728),n.texParameteri(d,10240,9728);for(let oM=0;oM<AM;oM++)n.texImage2D(TM+oM,0,6408,1,1,0,6408,5121,LM);return G}const jM={};jM[3553]=uM(3553,3553,1),jM[34067]=uM(34067,34069,6),i.setClear(0,0,0,1),I.setClear(1),z.setClear(0),b(2929),I.setFunc(3),X(!1),zM(1),b(2884),B(0);function b(d){T[d]!==!0&&(n.enable(d),T[d]=!0)}function kM(d){T[d]!==!1&&(n.disable(d),T[d]=!1)}function rM(d,TM){return u[d]!==TM?(n.bindFramebuffer(d,TM),u[d]=TM,t&&(d===36009&&(u[36160]=TM),d===36160&&(u[36009]=TM)),!0):!1}function wM(d,TM){let AM=r,LM=!1;if(d)if(AM=g.get(TM),AM===void 0&&(AM=[],g.set(TM,AM)),d.isWebGLMultipleRenderTargets){const G=d.texture;if(AM.length!==G.length||AM[0]!==36064){for(let oM=0,UM=G.length;oM<UM;oM++)AM[oM]=36064+oM;AM.length=G.length,LM=!0}}else AM[0]!==36064&&(AM[0]=36064,LM=!0);else AM[0]!==1029&&(AM[0]=1029,LM=!0);LM&&(D.isWebGL2?n.drawBuffers(AM):M.get("WEBGL_draw_buffers").drawBuffersWEBGL(AM))}function iM(d){return j!==d?(n.useProgram(d),j=d,!0):!1}const vM={[100]:32774,[101]:32778,[102]:32779};if(t)vM[103]=32775,vM[104]=32776;else{const d=M.get("EXT_blend_minmax");d!==null&&(vM[103]=d.MIN_EXT,vM[104]=d.MAX_EXT)}const OM={[200]:0,[201]:1,[202]:768,[204]:770,[210]:776,[208]:774,[206]:772,[203]:769,[205]:771,[209]:775,[207]:773};function B(d,TM,AM,LM,G,oM,UM,qM){if(d===0){y===!0&&(kM(3042),y=!1);return}if(y===!1&&(b(3042),y=!0),d!==5){if(d!==o||qM!==h){if((c!==100||C!==100)&&(n.blendEquation(32774),c=100,C=100),qM)switch(d){case 1:n.blendFuncSeparate(1,771,1,771);break;case 2:n.blendFunc(1,1);break;case 3:n.blendFuncSeparate(0,769,0,1);break;case 4:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}else switch(d){case 1:n.blendFuncSeparate(770,771,1,771);break;case 2:n.blendFunc(770,1);break;case 3:n.blendFuncSeparate(0,769,0,1);break;case 4:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}s=null,l=null,E=null,v=null,o=d,h=qM}return}G=G||TM,oM=oM||AM,UM=UM||LM,(TM!==c||G!==C)&&(n.blendEquationSeparate(vM[TM],vM[G]),c=TM,C=G),(AM!==s||LM!==l||oM!==E||UM!==v)&&(n.blendFuncSeparate(OM[AM],OM[LM],OM[oM],OM[UM]),s=AM,l=LM,E=oM,v=UM),o=d,h=null}function $(d,TM){d.side===2?kM(2884):b(2884);let AM=d.side===1;TM&&(AM=!AM),X(AM),d.blending===1&&d.transparent===!1?B(0):B(d.blending,d.blendEquation,d.blendSrc,d.blendDst,d.blendEquationAlpha,d.blendSrcAlpha,d.blendDstAlpha,d.premultipliedAlpha),I.setFunc(d.depthFunc),I.setTest(d.depthTest),I.setMask(d.depthWrite),i.setMask(d.colorWrite);const LM=d.stencilWrite;z.setTest(LM),LM&&(z.setMask(d.stencilWriteMask),z.setFunc(d.stencilFunc,d.stencilRef,d.stencilFuncMask),z.setOp(d.stencilFail,d.stencilZFail,d.stencilZPass)),CM(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),d.alphaToCoverage===!0?b(32926):kM(32926)}function X(d){F!==d&&(d?n.frontFace(2304):n.frontFace(2305),F=d)}function zM(d){d!==0?(b(2884),d!==MM&&(d===1?n.cullFace(1029):d===2?n.cullFace(1028):n.cullFace(1032))):kM(2884),MM=d}function nM(d){d!==Z&&(k&&n.lineWidth(d),Z=d)}function CM(d,TM,AM){d?(b(32823),(a!==TM||p!==AM)&&(n.polygonOffset(TM,AM),a=TM,p=AM)):kM(32823)}function xM(d){d?b(3089):kM(3089)}function QM(d){d===void 0&&(d=33984+Y-1),K!==d&&(n.activeTexture(d),K=d)}function GM(d,TM){K===null&&QM();let AM=W[K];AM===void 0&&(AM={type:void 0,texture:void 0},W[K]=AM),(AM.type!==d||AM.texture!==TM)&&(n.bindTexture(d,TM||jM[d]),AM.type=d,AM.texture=TM)}function RM(){const d=W[K];d!==void 0&&d.type!==void 0&&(n.bindTexture(d.type,null),d.type=void 0,d.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function L(){try{n.texSubImage2D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function P(){try{n.texSubImage3D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function gM(){try{n.texStorage2D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function R(){try{n.texStorage3D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function yM(){try{n.texImage2D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function sM(){try{n.texImage3D.apply(n,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function NM(d){H.equals(d)===!1&&(n.scissor(d.x,d.y,d.z,d.w),H.copy(d))}function tM(d){eM.equals(d)===!1&&(n.viewport(d.x,d.y,d.z,d.w),eM.copy(d))}function lM(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),t===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),T={},K=null,W={},u={},g=new WeakMap,r=[],j=null,y=!1,o=null,c=null,s=null,l=null,C=null,E=null,v=null,h=!1,F=null,MM=null,Z=null,a=null,p=null,H.set(0,0,n.canvas.width,n.canvas.height),eM.set(0,0,n.canvas.width,n.canvas.height),i.reset(),I.reset(),z.reset()}return{buffers:{color:i,depth:I,stencil:z},enable:b,disable:kM,bindFramebuffer:rM,drawBuffers:wM,useProgram:iM,setBlending:B,setMaterial:$,setFlipSided:X,setCullFace:zM,setLineWidth:nM,setPolygonOffset:CM,setScissorTest:xM,activeTexture:QM,bindTexture:GM,unbindTexture:RM,compressedTexImage2D:x,texImage2D:yM,texImage3D:sM,texStorage2D:gM,texStorage3D:R,texSubImage2D:L,texSubImage3D:P,compressedTexSubImage2D:J,scissor:NM,viewport:tM,reset:lM}}function Ou(n,M,D,t,e,N,A){const i=e.isWebGL2,I=e.maxTextures,z=e.maxCubemapSize,T=e.maxTextureSize,u=e.maxSamples,r=M.has("WEBGL_multisampled_render_to_texture")?M.get("WEBGL_multisampled_render_to_texture"):void 0,j=new WeakMap;let y,o=!1;try{o=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(x,L){return o?new OffscreenCanvas(x,L):Jt("canvas")}function s(x,L,P,J){let gM=1;if((x.width>J||x.height>J)&&(gM=J/Math.max(x.width,x.height)),gM<1||L===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const R=L?xi:Math.floor,yM=R(gM*x.width),sM=R(gM*x.height);y===void 0&&(y=c(yM,sM));const NM=P?c(yM,sM):y;return NM.width=yM,NM.height=sM,NM.getContext("2d").drawImage(x,0,0,yM,sM),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+yM+"x"+sM+")."),NM}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function l(x){return wn(x.width)&&wn(x.height)}function C(x){return i?!1:x.wrapS!==1001||x.wrapT!==1001||x.minFilter!==1003&&x.minFilter!==1006}function E(x,L){return x.generateMipmaps&&L&&x.minFilter!==1003&&x.minFilter!==1006}function v(x){n.generateMipmap(x)}function h(x,L,P,J,gM=!1){if(i===!1)return L;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let R=L;return L===6403&&(P===5126&&(R=33326),P===5131&&(R=33325),P===5121&&(R=33321)),L===33319&&(P===5126&&(R=33328),P===5131&&(R=33327),P===5121&&(R=33323)),L===6408&&(P===5126&&(R=34836),P===5131&&(R=34842),P===5121&&(R=J===3001&&gM===!1?35907:32856),P===32819&&(R=32854),P===32820&&(R=32855)),(R===33325||R===33326||R===33327||R===33328||R===34842||R===34836)&&M.get("EXT_color_buffer_float"),R}function F(x,L,P){return E(x,P)===!0||x.isFramebufferTexture&&x.minFilter!==1003&&x.minFilter!==1006?Math.log2(Math.max(L.width,L.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?L.mipmaps.length:1}function MM(x){return x===1003||x===1004||x===1005?9728:9729}function Z(x){const L=x.target;L.removeEventListener("dispose",Z),p(L),L.isVideoTexture&&j.delete(L),A.memory.textures--}function a(x){const L=x.target;L.removeEventListener("dispose",a),Y(L)}function p(x){const L=t.get(x);L.__webglInit!==void 0&&(n.deleteTexture(L.__webglTexture),t.remove(x))}function Y(x){const L=x.texture,P=t.get(x),J=t.get(L);if(!!x){if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),A.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let gM=0;gM<6;gM++)n.deleteFramebuffer(P.__webglFramebuffer[gM]),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[gM]);else n.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer&&n.deleteRenderbuffer(P.__webglColorRenderbuffer),P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer);if(x.isWebGLMultipleRenderTargets)for(let gM=0,R=L.length;gM<R;gM++){const yM=t.get(L[gM]);yM.__webglTexture&&(n.deleteTexture(yM.__webglTexture),A.memory.textures--),t.remove(L[gM])}t.remove(L),t.remove(x)}}let k=0;function f(){k=0}function Q(){const x=k;return x>=I&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+I),k+=1,x}function K(x,L){const P=t.get(x);if(x.isVideoTexture&&nM(x),x.version>0&&P.__version!==x.version){const J=x.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(P,x,L);return}}D.activeTexture(33984+L),D.bindTexture(3553,P.__webglTexture)}function W(x,L){const P=t.get(x);if(x.version>0&&P.__version!==x.version){b(P,x,L);return}D.activeTexture(33984+L),D.bindTexture(35866,P.__webglTexture)}function IM(x,L){const P=t.get(x);if(x.version>0&&P.__version!==x.version){b(P,x,L);return}D.activeTexture(33984+L),D.bindTexture(32879,P.__webglTexture)}function _(x,L){const P=t.get(x);if(x.version>0&&P.__version!==x.version){kM(P,x,L);return}D.activeTexture(33984+L),D.bindTexture(34067,P.__webglTexture)}const H={[1e3]:10497,[1001]:33071,[1002]:33648},eM={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function uM(x,L,P){if(P?(n.texParameteri(x,10242,H[L.wrapS]),n.texParameteri(x,10243,H[L.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,H[L.wrapR]),n.texParameteri(x,10240,eM[L.magFilter]),n.texParameteri(x,10241,eM[L.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(L.wrapS!==1001||L.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,MM(L.magFilter)),n.texParameteri(x,10241,MM(L.minFilter)),L.minFilter!==1003&&L.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.has("EXT_texture_filter_anisotropic")===!0){const J=M.get("EXT_texture_filter_anisotropic");if(L.type===1015&&M.has("OES_texture_float_linear")===!1||i===!1&&L.type===1016&&M.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||t.get(L).__currentAnisotropy)&&(n.texParameterf(x,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,e.getMaxAnisotropy())),t.get(L).__currentAnisotropy=L.anisotropy)}}function jM(x,L){x.__webglInit===void 0&&(x.__webglInit=!0,L.addEventListener("dispose",Z),x.__webglTexture=n.createTexture(),A.memory.textures++)}function b(x,L,P){let J=3553;L.isDataTexture2DArray&&(J=35866),L.isDataTexture3D&&(J=32879),jM(x,L),D.activeTexture(33984+P),D.bindTexture(J,x.__webglTexture),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const gM=C(L)&&l(L.image)===!1;let R=s(L.image,gM,!1,T);R=CM(L,R);const yM=l(R)||i,sM=N.convert(L.format,L.encoding);let NM=N.convert(L.type),tM=h(L.internalFormat,sM,NM,L.encoding,L.isVideoTexture);uM(J,L,yM);let lM;const d=L.mipmaps,TM=i&&L.isVideoTexture!==!0,AM=x.__version===void 0,LM=F(L,R,yM);if(L.isDepthTexture)tM=6402,i?L.type===1015?tM=36012:L.type===1014?tM=33190:L.type===1020?tM=35056:tM=33189:L.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===1026&&tM===6402&&L.type!==1012&&L.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=1012,NM=N.convert(L.type)),L.format===1027&&tM===6402&&(tM=34041,L.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=1020,NM=N.convert(L.type))),TM&&AM?D.texStorage2D(3553,1,tM,R.width,R.height):D.texImage2D(3553,0,tM,R.width,R.height,0,sM,NM,null);else if(L.isDataTexture)if(d.length>0&&yM){TM&&AM&&D.texStorage2D(3553,LM,tM,d[0].width,d[0].height);for(let G=0,oM=d.length;G<oM;G++)lM=d[G],TM?D.texSubImage2D(3553,0,0,0,lM.width,lM.height,sM,NM,lM.data):D.texImage2D(3553,G,tM,lM.width,lM.height,0,sM,NM,lM.data);L.generateMipmaps=!1}else TM?(AM&&D.texStorage2D(3553,LM,tM,R.width,R.height),D.texSubImage2D(3553,0,0,0,R.width,R.height,sM,NM,R.data)):D.texImage2D(3553,0,tM,R.width,R.height,0,sM,NM,R.data);else if(L.isCompressedTexture){TM&&AM&&D.texStorage2D(3553,LM,tM,d[0].width,d[0].height);for(let G=0,oM=d.length;G<oM;G++)lM=d[G],L.format!==1023?sM!==null?TM?D.compressedTexSubImage2D(3553,G,0,0,lM.width,lM.height,sM,lM.data):D.compressedTexImage2D(3553,G,tM,lM.width,lM.height,0,lM.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):TM?D.texSubImage2D(3553,G,0,0,lM.width,lM.height,sM,NM,lM.data):D.texImage2D(3553,G,tM,lM.width,lM.height,0,sM,NM,lM.data)}else if(L.isDataTexture2DArray)TM?(AM&&D.texStorage3D(35866,LM,tM,R.width,R.height,R.depth),D.texSubImage3D(35866,0,0,0,0,R.width,R.height,R.depth,sM,NM,R.data)):D.texImage3D(35866,0,tM,R.width,R.height,R.depth,0,sM,NM,R.data);else if(L.isDataTexture3D)TM?(AM&&D.texStorage3D(32879,LM,tM,R.width,R.height,R.depth),D.texSubImage3D(32879,0,0,0,0,R.width,R.height,R.depth,sM,NM,R.data)):D.texImage3D(32879,0,tM,R.width,R.height,R.depth,0,sM,NM,R.data);else if(L.isFramebufferTexture)TM&&AM?D.texStorage2D(3553,LM,tM,R.width,R.height):D.texImage2D(3553,0,tM,R.width,R.height,0,sM,NM,null);else if(d.length>0&&yM){TM&&AM&&D.texStorage2D(3553,LM,tM,d[0].width,d[0].height);for(let G=0,oM=d.length;G<oM;G++)lM=d[G],TM?D.texSubImage2D(3553,G,0,0,sM,NM,lM):D.texImage2D(3553,G,tM,sM,NM,lM);L.generateMipmaps=!1}else TM?(AM&&D.texStorage2D(3553,LM,tM,R.width,R.height),D.texSubImage2D(3553,0,0,0,sM,NM,R)):D.texImage2D(3553,0,tM,sM,NM,R);E(L,yM)&&v(J),x.__version=L.version,L.onUpdate&&L.onUpdate(L)}function kM(x,L,P){if(L.image.length!==6)return;jM(x,L),D.activeTexture(33984+P),D.bindTexture(34067,x.__webglTexture),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const J=L&&(L.isCompressedTexture||L.image[0].isCompressedTexture),gM=L.image[0]&&L.image[0].isDataTexture,R=[];for(let G=0;G<6;G++)!J&&!gM?R[G]=s(L.image[G],!1,!0,z):R[G]=gM?L.image[G].image:L.image[G],R[G]=CM(L,R[G]);const yM=R[0],sM=l(yM)||i,NM=N.convert(L.format,L.encoding),tM=N.convert(L.type),lM=h(L.internalFormat,NM,tM,L.encoding),d=i&&L.isVideoTexture!==!0,TM=x.__version===void 0;let AM=F(L,yM,sM);uM(34067,L,sM);let LM;if(J){d&&TM&&D.texStorage2D(34067,AM,lM,yM.width,yM.height);for(let G=0;G<6;G++){LM=R[G].mipmaps;for(let oM=0;oM<LM.length;oM++){const UM=LM[oM];L.format!==1023?NM!==null?d?D.compressedTexSubImage2D(34069+G,oM,0,0,UM.width,UM.height,NM,UM.data):D.compressedTexImage2D(34069+G,oM,lM,UM.width,UM.height,0,UM.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):d?D.texSubImage2D(34069+G,oM,0,0,UM.width,UM.height,NM,tM,UM.data):D.texImage2D(34069+G,oM,lM,UM.width,UM.height,0,NM,tM,UM.data)}}}else{LM=L.mipmaps,d&&TM&&(LM.length>0&&AM++,D.texStorage2D(34067,AM,lM,R[0].width,R[0].height));for(let G=0;G<6;G++)if(gM){d?D.texSubImage2D(34069+G,0,0,0,R[G].width,R[G].height,NM,tM,R[G].data):D.texImage2D(34069+G,0,lM,R[G].width,R[G].height,0,NM,tM,R[G].data);for(let oM=0;oM<LM.length;oM++){const qM=LM[oM].image[G].image;d?D.texSubImage2D(34069+G,oM+1,0,0,qM.width,qM.height,NM,tM,qM.data):D.texImage2D(34069+G,oM+1,lM,qM.width,qM.height,0,NM,tM,qM.data)}}else{d?D.texSubImage2D(34069+G,0,0,0,NM,tM,R[G]):D.texImage2D(34069+G,0,lM,NM,tM,R[G]);for(let oM=0;oM<LM.length;oM++){const UM=LM[oM];d?D.texSubImage2D(34069+G,oM+1,0,0,NM,tM,UM.image[G]):D.texImage2D(34069+G,oM+1,lM,NM,tM,UM.image[G])}}}E(L,sM)&&v(34067),x.__version=L.version,L.onUpdate&&L.onUpdate(L)}function rM(x,L,P,J,gM){const R=N.convert(P.format,P.encoding),yM=N.convert(P.type),sM=h(P.internalFormat,R,yM,P.encoding);t.get(L).__hasExternalTextures||(gM===32879||gM===35866?D.texImage3D(gM,0,sM,L.width,L.height,L.depth,0,R,yM,null):D.texImage2D(gM,0,sM,L.width,L.height,0,R,yM,null)),D.bindFramebuffer(36160,x),L.useRenderToTexture?r.framebufferTexture2DMultisampleEXT(36160,J,gM,t.get(P).__webglTexture,0,zM(L)):n.framebufferTexture2D(36160,J,gM,t.get(P).__webglTexture,0),D.bindFramebuffer(36160,null)}function wM(x,L,P){if(n.bindRenderbuffer(36161,x),L.depthBuffer&&!L.stencilBuffer){let J=33189;if(P||L.useRenderToTexture){const gM=L.depthTexture;gM&&gM.isDepthTexture&&(gM.type===1015?J=36012:gM.type===1014&&(J=33190));const R=zM(L);L.useRenderToTexture?r.renderbufferStorageMultisampleEXT(36161,R,J,L.width,L.height):n.renderbufferStorageMultisample(36161,R,J,L.width,L.height)}else n.renderbufferStorage(36161,J,L.width,L.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(L.depthBuffer&&L.stencilBuffer){const J=zM(L);P&&L.useRenderbuffer?n.renderbufferStorageMultisample(36161,J,35056,L.width,L.height):L.useRenderToTexture?r.renderbufferStorageMultisampleEXT(36161,J,35056,L.width,L.height):n.renderbufferStorage(36161,34041,L.width,L.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const J=L.isWebGLMultipleRenderTargets===!0?L.texture[0]:L.texture,gM=N.convert(J.format,J.encoding),R=N.convert(J.type),yM=h(J.internalFormat,gM,R,J.encoding),sM=zM(L);P&&L.useRenderbuffer?n.renderbufferStorageMultisample(36161,sM,yM,L.width,L.height):L.useRenderToTexture?r.renderbufferStorageMultisampleEXT(36161,sM,yM,L.width,L.height):n.renderbufferStorage(36161,yM,L.width,L.height)}n.bindRenderbuffer(36161,null)}function iM(x,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(D.bindFramebuffer(36160,x),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),K(L.depthTexture,0);const J=t.get(L.depthTexture).__webglTexture,gM=zM(L);if(L.depthTexture.format===1026)L.useRenderToTexture?r.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,gM):n.framebufferTexture2D(36160,36096,3553,J,0);else if(L.depthTexture.format===1027)L.useRenderToTexture?r.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,gM):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function vM(x){const L=t.get(x),P=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!L.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");iM(L.__webglFramebuffer,x)}else if(P){L.__webglDepthbuffer=[];for(let J=0;J<6;J++)D.bindFramebuffer(36160,L.__webglFramebuffer[J]),L.__webglDepthbuffer[J]=n.createRenderbuffer(),wM(L.__webglDepthbuffer[J],x,!1)}else D.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),wM(L.__webglDepthbuffer,x,!1);D.bindFramebuffer(36160,null)}function OM(x,L,P){const J=t.get(x);L!==void 0&&rM(J.__webglFramebuffer,x,x.texture,36064,3553),P!==void 0&&vM(x)}function B(x){const L=x.texture,P=t.get(x),J=t.get(L);x.addEventListener("dispose",a),x.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=L.version,A.memory.textures++);const gM=x.isWebGLCubeRenderTarget===!0,R=x.isWebGLMultipleRenderTargets===!0,yM=L.isDataTexture3D||L.isDataTexture2DArray,sM=l(x)||i;if(gM){P.__webglFramebuffer=[];for(let NM=0;NM<6;NM++)P.__webglFramebuffer[NM]=n.createFramebuffer()}else if(P.__webglFramebuffer=n.createFramebuffer(),R)if(e.drawBuffers){const NM=x.texture;for(let tM=0,lM=NM.length;tM<lM;tM++){const d=t.get(NM[tM]);d.__webglTexture===void 0&&(d.__webglTexture=n.createTexture(),A.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(x.useRenderbuffer)if(i){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,P.__webglColorRenderbuffer);const NM=N.convert(L.format,L.encoding),tM=N.convert(L.type),lM=h(L.internalFormat,NM,tM,L.encoding),d=zM(x);n.renderbufferStorageMultisample(36161,d,lM,x.width,x.height),D.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,P.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),x.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),wM(P.__webglDepthRenderbuffer,x,!0)),D.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(gM){D.bindTexture(34067,J.__webglTexture),uM(34067,L,sM);for(let NM=0;NM<6;NM++)rM(P.__webglFramebuffer[NM],x,L,36064,34069+NM);E(L,sM)&&v(34067),D.unbindTexture()}else if(R){const NM=x.texture;for(let tM=0,lM=NM.length;tM<lM;tM++){const d=NM[tM],TM=t.get(d);D.bindTexture(3553,TM.__webglTexture),uM(3553,d,sM),rM(P.__webglFramebuffer,x,d,36064+tM,3553),E(d,sM)&&v(3553)}D.unbindTexture()}else{let NM=3553;yM&&(i?NM=L.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),D.bindTexture(NM,J.__webglTexture),uM(NM,L,sM),rM(P.__webglFramebuffer,x,L,36064,NM),E(L,sM)&&v(NM),D.unbindTexture()}x.depthBuffer&&vM(x)}function $(x){const L=l(x)||i,P=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0,gM=P.length;J<gM;J++){const R=P[J];if(E(R,L)){const yM=x.isWebGLCubeRenderTarget?34067:3553,sM=t.get(R).__webglTexture;D.bindTexture(yM,sM),v(yM),D.unbindTexture()}}}function X(x){if(x.useRenderbuffer)if(i){const L=x.width,P=x.height;let J=16384;const gM=[36064],R=x.stencilBuffer?33306:36096;x.depthBuffer&&gM.push(R),x.ignoreDepthForMultisampleCopy||(x.depthBuffer&&(J|=256),x.stencilBuffer&&(J|=1024));const yM=t.get(x);D.bindFramebuffer(36008,yM.__webglMultisampledFramebuffer),D.bindFramebuffer(36009,yM.__webglFramebuffer),x.ignoreDepthForMultisampleCopy&&(n.invalidateFramebuffer(36008,[R]),n.invalidateFramebuffer(36009,[R])),n.blitFramebuffer(0,0,L,P,0,0,L,P,J,9728),n.invalidateFramebuffer(36008,gM),D.bindFramebuffer(36008,null),D.bindFramebuffer(36009,yM.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function zM(x){return i&&(x.useRenderbuffer||x.useRenderToTexture)?Math.min(u,x.samples):0}function nM(x){const L=A.render.frame;j.get(x)!==L&&(j.set(x,L),x.update())}function CM(x,L){const P=x.encoding,J=x.format,gM=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===1035||P!==3e3&&(P===3001?i===!1?M.has("EXT_sRGB")===!0&&J===1023?(x.format=1035,x.minFilter=1006,x.generateMipmaps=!1):L=ut.sRGBToLinear(L):(J!==1023||gM!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),L}let xM=!1,QM=!1;function GM(x,L){x&&x.isWebGLRenderTarget&&(xM===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),xM=!0),x=x.texture),K(x,L)}function RM(x,L){x&&x.isWebGLCubeRenderTarget&&(QM===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),QM=!0),x=x.texture),_(x,L)}this.allocateTextureUnit=Q,this.resetTextureUnits=f,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=IM,this.setTextureCube=_,this.rebindTextures=OM,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=vM,this.setupFrameBufferTexture=rM,this.safeSetTexture2D=GM,this.safeSetTextureCube=RM}function xu(n,M,D){const t=D.isWebGL2;function e(N,A=null){let i;if(N===1009)return 5121;if(N===1017)return 32819;if(N===1018)return 32820;if(N===1010)return 5120;if(N===1011)return 5122;if(N===1012)return 5123;if(N===1013)return 5124;if(N===1014)return 5125;if(N===1015)return 5126;if(N===1016)return t?5131:(i=M.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(N===1021)return 6406;if(N===1023)return 6408;if(N===1024)return 6409;if(N===1025)return 6410;if(N===1026)return 6402;if(N===1027)return 34041;if(N===1028)return 6403;if(N===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(N===1035)return i=M.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(N===1029)return 36244;if(N===1030)return 33319;if(N===1031)return 33320;if(N===1033)return 36249;if(N===33776||N===33777||N===33778||N===33779)if(A===3001)if(i=M.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(N===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(N===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(N===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(N===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=M.get("WEBGL_compressed_texture_s3tc"),i!==null){if(N===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(N===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(N===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(N===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(N===35840||N===35841||N===35842||N===35843)if(i=M.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(N===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(N===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(N===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(N===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(N===36196)return i=M.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(N===37492||N===37496)if(i=M.get("WEBGL_compressed_texture_etc"),i!==null){if(N===37492)return A===3001?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(N===37496)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(N===37808||N===37809||N===37810||N===37811||N===37812||N===37813||N===37814||N===37815||N===37816||N===37817||N===37818||N===37819||N===37820||N===37821)if(i=M.get("WEBGL_compressed_texture_astc"),i!==null){if(N===37808)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(N===37809)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(N===37810)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(N===37811)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(N===37812)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(N===37813)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(N===37814)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(N===37815)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(N===37816)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(N===37817)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(N===37818)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(N===37819)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(N===37820)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(N===37821)return A===3001?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(N===36492)if(i=M.get("EXT_texture_compression_bptc"),i!==null){if(N===36492)return A===3001?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(N===1020)return t?34042:(i=M.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:e}}class OA extends gD{constructor(M=[]){super(),this.cameras=M}}OA.prototype.isArrayCamera=!0;class yt extends ZM{constructor(){super(),this.type="Group"}}yt.prototype.isGroup=!0;const Eu={type:"move"};class VN{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(M){return this._targetRay!==null&&this._targetRay.dispatchEvent(M),this._grip!==null&&this._grip.dispatchEvent(M),this._hand!==null&&this._hand.dispatchEvent(M),this}disconnect(M){return this.dispatchEvent({type:"disconnected",data:M}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(M,D,t){let e=null,N=null,A=null;const i=this._targetRay,I=this._grip,z=this._hand;if(M&&D.session.visibilityState!=="visible-blurred")if(i!==null&&(e=D.getPose(M.targetRaySpace,t),e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),e.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(e.linearVelocity)):i.hasLinearVelocity=!1,e.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(e.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Eu))),z&&M.hand){A=!0;for(const y of M.hand.values()){const o=D.getJointPose(y,t);if(z.joints[y.jointName]===void 0){const s=new yt;s.matrixAutoUpdate=!1,s.visible=!1,z.joints[y.jointName]=s,z.add(s)}const c=z.joints[y.jointName];o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=o.radius),c.visible=o!==null}const T=z.joints["index-finger-tip"],u=z.joints["thumb-tip"],g=T.position.distanceTo(u.position),r=.02,j=.005;z.inputState.pinching&&g>r+j?(z.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:M.handedness,target:this})):!z.inputState.pinching&&g<=r-j&&(z.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:M.handedness,target:this}))}else I!==null&&M.gripSpace&&(N=D.getPose(M.gripSpace,t),N!==null&&(I.matrix.fromArray(N.transform.matrix),I.matrix.decompose(I.position,I.rotation,I.scale),N.linearVelocity?(I.hasLinearVelocity=!0,I.linearVelocity.copy(N.linearVelocity)):I.hasLinearVelocity=!1,N.angularVelocity?(I.hasAngularVelocity=!0,I.angularVelocity.copy(N.angularVelocity)):I.hasAngularVelocity=!1));return i!==null&&(i.visible=e!==null),I!==null&&(I.visible=N!==null),z!==null&&(z.visible=A!==null),this}}class HN extends ND{constructor(M,D,t,e,N,A,i,I,z,T){if(T=T!==void 0?T:1026,T!==1026&&T!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&T===1026&&(t=1012),t===void 0&&T===1027&&(t=1020),super(null,e,N,A,i,I,T,t,z),this.image={width:M,height:D},this.magFilter=i!==void 0?i:1003,this.minFilter=I!==void 0?I:1003,this.flipY=!1,this.generateMipmaps=!1}}HN.prototype.isDepthTexture=!0;class lu extends Tt{constructor(M,D){super();const t=this;let e=null,N=1,A=null,i="local-floor";const I=M.extensions.has("WEBGL_multisampled_render_to_texture");let z=null,T=null,u=null,g=null,r=!1,j=null;const y=D.getContextAttributes();let o=null,c=null;const s=[],l=new Map,C=new gD;C.layers.enable(1),C.viewport=new PM;const E=new gD;E.layers.enable(2),E.viewport=new PM;const v=[C,E],h=new OA;h.layers.enable(1),h.layers.enable(2);let F=null,MM=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_){let H=s[_];return H===void 0&&(H=new VN,s[_]=H),H.getTargetRaySpace()},this.getControllerGrip=function(_){let H=s[_];return H===void 0&&(H=new VN,s[_]=H),H.getGripSpace()},this.getHand=function(_){let H=s[_];return H===void 0&&(H=new VN,s[_]=H),H.getHandSpace()};function Z(_){const H=l.get(_.inputSource);H&&H.dispatchEvent({type:_.type,data:_.inputSource})}function a(){l.forEach(function(_,H){_.disconnect(H)}),l.clear(),F=null,MM=null,M.setRenderTarget(o),g=null,u=null,T=null,e=null,c=null,IM.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_){N=_,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_){i=_,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return T},this.getFrame=function(){return j},this.getSession=function(){return e},this.setSession=async function(_){if(e=_,e!==null){if(o=M.getRenderTarget(),e.addEventListener("select",Z),e.addEventListener("selectstart",Z),e.addEventListener("selectend",Z),e.addEventListener("squeeze",Z),e.addEventListener("squeezestart",Z),e.addEventListener("squeezeend",Z),e.addEventListener("end",a),e.addEventListener("inputsourceschange",p),y.xrCompatible!==!0&&await D.makeXRCompatible(),e.renderState.layers===void 0||M.capabilities.isWebGL2===!1){const H={antialias:e.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:N};g=new XRWebGLLayer(e,D,H),e.updateRenderState({baseLayer:g}),c=new oD(g.framebufferWidth,g.framebufferHeight,{format:1023,type:1009,encoding:M.outputEncoding})}else{r=y.antialias;let H=null,eM=null,uM=null;y.depth&&(uM=y.stencil?35056:33190,H=y.stencil?1027:1026,eM=y.stencil?1020:1012);const jM={colorFormat:M.outputEncoding===3001?35907:32856,depthFormat:uM,scaleFactor:N};T=new XRWebGLBinding(e,D),u=T.createProjectionLayer(jM),e.updateRenderState({layers:[u]}),r?c=new yN(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new HN(u.textureWidth,u.textureHeight,eM,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:y.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:I,encoding:M.outputEncoding}):c=new oD(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new HN(u.textureWidth,u.textureHeight,eM,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:y.stencil,ignoreDepth:u.ignoreDepthValues,encoding:M.outputEncoding})}c.isXRRenderTarget=!0,this.setFoveation(1),A=await e.requestReferenceSpace(i),IM.setContext(e),IM.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function p(_){const H=e.inputSources;for(let eM=0;eM<s.length;eM++)l.set(H[eM],s[eM]);for(let eM=0;eM<_.removed.length;eM++){const uM=_.removed[eM],jM=l.get(uM);jM&&(jM.dispatchEvent({type:"disconnected",data:uM}),l.delete(uM))}for(let eM=0;eM<_.added.length;eM++){const uM=_.added[eM],jM=l.get(uM);jM&&jM.dispatchEvent({type:"connected",data:uM})}}const Y=new O,k=new O;function f(_,H,eM){Y.setFromMatrixPosition(H.matrixWorld),k.setFromMatrixPosition(eM.matrixWorld);const uM=Y.distanceTo(k),jM=H.projectionMatrix.elements,b=eM.projectionMatrix.elements,kM=jM[14]/(jM[10]-1),rM=jM[14]/(jM[10]+1),wM=(jM[9]+1)/jM[5],iM=(jM[9]-1)/jM[5],vM=(jM[8]-1)/jM[0],OM=(b[8]+1)/b[0],B=kM*vM,$=kM*OM,X=uM/(-vM+OM),zM=X*-vM;H.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(zM),_.translateZ(X),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert();const nM=kM+X,CM=rM+X,xM=B-zM,QM=$+(uM-zM),GM=wM*rM/CM*nM,RM=iM*rM/CM*nM;_.projectionMatrix.makePerspective(xM,QM,GM,RM,nM,CM)}function Q(_,H){H===null?_.matrixWorld.copy(_.matrix):_.matrixWorld.multiplyMatrices(H.matrixWorld,_.matrix),_.matrixWorldInverse.copy(_.matrixWorld).invert()}this.updateCamera=function(_){if(e===null)return;h.near=E.near=C.near=_.near,h.far=E.far=C.far=_.far,(F!==h.near||MM!==h.far)&&(e.updateRenderState({depthNear:h.near,depthFar:h.far}),F=h.near,MM=h.far);const H=_.parent,eM=h.cameras;Q(h,H);for(let jM=0;jM<eM.length;jM++)Q(eM[jM],H);h.matrixWorld.decompose(h.position,h.quaternion,h.scale),_.position.copy(h.position),_.quaternion.copy(h.quaternion),_.scale.copy(h.scale),_.matrix.copy(h.matrix),_.matrixWorld.copy(h.matrixWorld);const uM=_.children;for(let jM=0,b=uM.length;jM<b;jM++)uM[jM].updateMatrixWorld(!0);eM.length===2?f(h,C,E):h.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return h},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(_){u!==null&&(u.fixedFoveation=_),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=_)};let K=null;function W(_,H){if(z=H.getViewerPose(A),j=H,z!==null){const uM=z.views;g!==null&&(M.setRenderTargetFramebuffer(c,g.framebuffer),M.setRenderTarget(c));let jM=!1;uM.length!==h.cameras.length&&(h.cameras.length=0,jM=!0);for(let b=0;b<uM.length;b++){const kM=uM[b];let rM=null;if(g!==null)rM=g.getViewport(kM);else{const iM=T.getViewSubImage(u,kM);rM=iM.viewport,b===0&&(M.setRenderTargetTextures(c,iM.colorTexture,u.ignoreDepthValues?void 0:iM.depthStencilTexture),M.setRenderTarget(c))}const wM=v[b];wM.matrix.fromArray(kM.transform.matrix),wM.projectionMatrix.fromArray(kM.projectionMatrix),wM.viewport.set(rM.x,rM.y,rM.width,rM.height),b===0&&h.matrix.copy(wM.matrix),jM===!0&&h.cameras.push(wM)}}const eM=e.inputSources;for(let uM=0;uM<s.length;uM++){const jM=s[uM],b=eM[uM];jM.update(b,H,A)}K&&K(_,H),j=null}const IM=new bn;IM.setAnimationLoop(W),this.setAnimationLoop=function(_){K=_},this.dispose=function(){}}}function du(n){function M(c,s){c.fogColor.value.copy(s.color),s.isFog?(c.fogNear.value=s.near,c.fogFar.value=s.far):s.isFogExp2&&(c.fogDensity.value=s.density)}function D(c,s,l,C,E){s.isMeshBasicMaterial?t(c,s):s.isMeshLambertMaterial?(t(c,s),I(c,s)):s.isMeshToonMaterial?(t(c,s),T(c,s)):s.isMeshPhongMaterial?(t(c,s),z(c,s)):s.isMeshStandardMaterial?(t(c,s),s.isMeshPhysicalMaterial?g(c,s,E):u(c,s)):s.isMeshMatcapMaterial?(t(c,s),r(c,s)):s.isMeshDepthMaterial?(t(c,s),j(c,s)):s.isMeshDistanceMaterial?(t(c,s),y(c,s)):s.isMeshNormalMaterial?(t(c,s),o(c,s)):s.isLineBasicMaterial?(e(c,s),s.isLineDashedMaterial&&N(c,s)):s.isPointsMaterial?A(c,s,l,C):s.isSpriteMaterial?i(c,s):s.isShadowMaterial?(c.color.value.copy(s.color),c.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function t(c,s){c.opacity.value=s.opacity,s.color&&c.diffuse.value.copy(s.color),s.emissive&&c.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(c.map.value=s.map),s.alphaMap&&(c.alphaMap.value=s.alphaMap),s.specularMap&&(c.specularMap.value=s.specularMap),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest);const l=n.get(s).envMap;l&&(c.envMap.value=l,c.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=s.reflectivity,c.ior.value=s.ior,c.refractionRatio.value=s.refractionRatio),s.lightMap&&(c.lightMap.value=s.lightMap,c.lightMapIntensity.value=s.lightMapIntensity),s.aoMap&&(c.aoMap.value=s.aoMap,c.aoMapIntensity.value=s.aoMapIntensity);let C;s.map?C=s.map:s.specularMap?C=s.specularMap:s.displacementMap?C=s.displacementMap:s.normalMap?C=s.normalMap:s.bumpMap?C=s.bumpMap:s.roughnessMap?C=s.roughnessMap:s.metalnessMap?C=s.metalnessMap:s.alphaMap?C=s.alphaMap:s.emissiveMap?C=s.emissiveMap:s.clearcoatMap?C=s.clearcoatMap:s.clearcoatNormalMap?C=s.clearcoatNormalMap:s.clearcoatRoughnessMap?C=s.clearcoatRoughnessMap:s.specularIntensityMap?C=s.specularIntensityMap:s.specularColorMap?C=s.specularColorMap:s.transmissionMap?C=s.transmissionMap:s.thicknessMap?C=s.thicknessMap:s.sheenColorMap?C=s.sheenColorMap:s.sheenRoughnessMap&&(C=s.sheenRoughnessMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),c.uvTransform.value.copy(C.matrix));let E;s.aoMap?E=s.aoMap:s.lightMap&&(E=s.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),c.uv2Transform.value.copy(E.matrix))}function e(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity}function N(c,s){c.dashSize.value=s.dashSize,c.totalSize.value=s.dashSize+s.gapSize,c.scale.value=s.scale}function A(c,s,l,C){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.size.value=s.size*l,c.scale.value=C*.5,s.map&&(c.map.value=s.map),s.alphaMap&&(c.alphaMap.value=s.alphaMap),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest);let E;s.map?E=s.map:s.alphaMap&&(E=s.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),c.uvTransform.value.copy(E.matrix))}function i(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.rotation.value=s.rotation,s.map&&(c.map.value=s.map),s.alphaMap&&(c.alphaMap.value=s.alphaMap),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest);let l;s.map?l=s.map:s.alphaMap&&(l=s.alphaMap),l!==void 0&&(l.matrixAutoUpdate===!0&&l.updateMatrix(),c.uvTransform.value.copy(l.matrix))}function I(c,s){s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap)}function z(c,s){c.specular.value.copy(s.specular),c.shininess.value=Math.max(s.shininess,1e-4),s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap),s.bumpMap&&(c.bumpMap.value=s.bumpMap,c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias)}function T(c,s){s.gradientMap&&(c.gradientMap.value=s.gradientMap),s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap),s.bumpMap&&(c.bumpMap.value=s.bumpMap,c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias)}function u(c,s){c.roughness.value=s.roughness,c.metalness.value=s.metalness,s.roughnessMap&&(c.roughnessMap.value=s.roughnessMap),s.metalnessMap&&(c.metalnessMap.value=s.metalnessMap),s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap),s.bumpMap&&(c.bumpMap.value=s.bumpMap,c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias),n.get(s).envMap&&(c.envMapIntensity.value=s.envMapIntensity)}function g(c,s,l){u(c,s),c.ior.value=s.ior,s.sheen>0&&(c.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),c.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(c.sheenColorMap.value=s.sheenColorMap),s.sheenRoughnessMap&&(c.sheenRoughnessMap.value=s.sheenRoughnessMap)),s.clearcoat>0&&(c.clearcoat.value=s.clearcoat,c.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(c.clearcoatMap.value=s.clearcoatMap),s.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap),s.clearcoatNormalMap&&(c.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),c.clearcoatNormalMap.value=s.clearcoatNormalMap,s.side===1&&c.clearcoatNormalScale.value.negate())),s.transmission>0&&(c.transmission.value=s.transmission,c.transmissionSamplerMap.value=l.texture,c.transmissionSamplerSize.value.set(l.width,l.height),s.transmissionMap&&(c.transmissionMap.value=s.transmissionMap),c.thickness.value=s.thickness,s.thicknessMap&&(c.thicknessMap.value=s.thicknessMap),c.attenuationDistance.value=s.attenuationDistance,c.attenuationColor.value.copy(s.attenuationColor)),c.specularIntensity.value=s.specularIntensity,c.specularColor.value.copy(s.specularColor),s.specularIntensityMap&&(c.specularIntensityMap.value=s.specularIntensityMap),s.specularColorMap&&(c.specularColorMap.value=s.specularColorMap)}function r(c,s){s.matcap&&(c.matcap.value=s.matcap),s.bumpMap&&(c.bumpMap.value=s.bumpMap,c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias)}function j(c,s){s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias)}function y(c,s){s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias),c.referencePosition.value.copy(s.referencePosition),c.nearDistance.value=s.nearDistance,c.farDistance.value=s.farDistance}function o(c,s){s.bumpMap&&(c.bumpMap.value=s.bumpMap,c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias)}return{refreshFogUniforms:M,refreshMaterialUniforms:D}}function vu(){const n=Jt("canvas");return n.style.display="block",n}function _M(n={}){const M=n.canvas!==void 0?n.canvas:vu(),D=n.context!==void 0?n.context:null,t=n.alpha!==void 0?n.alpha:!1,e=n.depth!==void 0?n.depth:!0,N=n.stencil!==void 0?n.stencil:!0,A=n.antialias!==void 0?n.antialias:!1,i=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,I=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,z=n.powerPreference!==void 0?n.powerPreference:"default",T=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u=null,g=null;const r=[],j=[];this.domElement=M,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let o=!1,c=0,s=0,l=null,C=-1,E=null;const v=new PM,h=new PM;let F=null,MM=M.width,Z=M.height,a=1,p=null,Y=null;const k=new PM(0,0,MM,Z),f=new PM(0,0,MM,Z);let Q=!1;const K=new _e;let W=!1,IM=!1,_=null;const H=new aM,eM=new O,uM={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function jM(){return l===null?a:1}let b=D;function kM(w,U){for(let S=0;S<w.length;S++){const m=w[S],V=M.getContext(m,U);if(V!==null)return V}return null}try{const w={alpha:!0,depth:e,stencil:N,antialias:A,premultipliedAlpha:i,preserveDrawingBuffer:I,powerPreference:z,failIfMajorPerformanceCaveat:T};if("setAttribute"in M&&M.setAttribute("data-engine",`three.js r${It}`),M.addEventListener("webglcontextlost",lM,!1),M.addEventListener("webglcontextrestored",d,!1),b===null){const U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),b=kM(U,w),b===null)throw kM(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rM,wM,iM,vM,OM,B,$,X,zM,nM,CM,xM,QM,GM,RM,x,L,P,J,gM,R,yM,sM;function NM(){rM=new VI(b),wM=new KI(b,rM,n),rM.init(wM),yM=new xu(b,rM,wM),iM=new wu(b,rM,wM),vM=new qI,OM=new uu,B=new Ou(b,rM,iM,OM,wM,yM,vM),$=new PI(y),X=new GI(y),zM=new Pi(b,wM),sM=new _I(b,rM,zM,wM),nM=new HI(b,zM,vM,sM),CM=new MT(b,nM,zM,vM),J=new $I(b,wM,B),x=new RI(OM),xM=new Tu(y,$,X,rM,wM,sM,x),QM=new du(OM),GM=new ru,RM=new ou(rM,wM),P=new ZI(y,$,iM,CM,t,i),L=new wA(y,CM,wM),gM=new bI(b,rM,vM,wM),R=new WI(b,rM,vM,wM),vM.programs=xM.programs,y.capabilities=wM,y.extensions=rM,y.properties=OM,y.renderLists=GM,y.shadowMap=L,y.state=iM,y.info=vM}NM();const tM=new lu(y,b);this.xr=tM,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=rM.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rM.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return a},this.setPixelRatio=function(w){w!==void 0&&(a=w,this.setSize(MM,Z,!1))},this.getSize=function(w){return w.set(MM,Z)},this.setSize=function(w,U,S){if(tM.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}MM=w,Z=U,M.width=Math.floor(w*a),M.height=Math.floor(U*a),S!==!1&&(M.style.width=w+"px",M.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(MM*a,Z*a).floor()},this.setDrawingBufferSize=function(w,U,S){MM=w,Z=U,a=S,M.width=Math.floor(w*S),M.height=Math.floor(U*S),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,U,S,m){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,U,S,m),iM.viewport(v.copy(k).multiplyScalar(a).floor())},this.getScissor=function(w){return w.copy(f)},this.setScissor=function(w,U,S,m){w.isVector4?f.set(w.x,w.y,w.z,w.w):f.set(w,U,S,m),iM.scissor(h.copy(f).multiplyScalar(a).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){iM.setScissorTest(Q=w)},this.setOpaqueSort=function(w){p=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor.apply(P,arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha.apply(P,arguments)},this.clear=function(w,U,S){let m=0;(w===void 0||w)&&(m|=16384),(U===void 0||U)&&(m|=256),(S===void 0||S)&&(m|=1024),b.clear(m)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){M.removeEventListener("webglcontextlost",lM,!1),M.removeEventListener("webglcontextrestored",d,!1),GM.dispose(),RM.dispose(),OM.dispose(),$.dispose(),X.dispose(),CM.dispose(),sM.dispose(),xM.dispose(),tM.dispose(),tM.removeEventListener("sessionstart",UM),tM.removeEventListener("sessionend",qM),_&&(_.dispose(),_=null),aD.stop()};function lM(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),o=!0}function d(){console.log("THREE.WebGLRenderer: Context Restored."),o=!1;const w=vM.autoReset,U=L.enabled,S=L.autoUpdate,m=L.needsUpdate,V=L.type;NM(),vM.autoReset=w,L.enabled=U,L.autoUpdate=S,L.needsUpdate=m,L.type=V}function TM(w){const U=w.target;U.removeEventListener("dispose",TM),AM(U)}function AM(w){LM(w),OM.remove(w)}function LM(w){const U=OM.get(w).programs;U!==void 0&&(U.forEach(function(S){xM.releaseProgram(S)}),w.isShaderMaterial&&xM.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,S,m,V,EM){U===null&&(U=uM);const dM=V.isMesh&&V.matrixWorld.determinant()<0,hM=jr(w,U,S,m,V);iM.setMaterial(m,dM);let pM=S.index;const KM=S.attributes.position;if(pM===null){if(KM===void 0||KM.count===0)return}else if(pM.count===0)return;let fM=1;m.wireframe===!0&&(pM=nM.getWireframeAttribute(S),fM=2),sM.setup(V,m,hM,S,pM);let mM,JM=gM;pM!==null&&(mM=zM.get(pM),JM=R,JM.setIndex(mM));const at=pM!==null?pM.count:KM.count,Xt=S.drawRange.start*fM,SM=S.drawRange.count*fM,fD=EM!==null?EM.start*fM:0,eD=EM!==null?EM.count*fM:1/0,mD=Math.max(Xt,fD),TN=Math.min(at,Xt+SM,fD+eD)-1,kD=Math.max(0,TN-mD+1);if(kD!==0){if(V.isMesh)m.wireframe===!0?(iM.setLineWidth(m.wireframeLinewidth*jM()),JM.setMode(1)):JM.setMode(4);else if(V.isLine){let VD=m.linewidth;VD===void 0&&(VD=1),iM.setLineWidth(VD*jM()),V.isLineSegments?JM.setMode(1):V.isLineLoop?JM.setMode(2):JM.setMode(3)}else V.isPoints?JM.setMode(0):V.isSprite&&JM.setMode(4);if(V.isInstancedMesh)JM.renderInstances(mD,kD,V.count);else if(S.isInstancedBufferGeometry){const VD=Math.min(S.instanceCount,S._maxInstanceCount);JM.renderInstances(mD,kD,VD)}else JM.render(mD,kD)}},this.compile=function(w,U){g=RM.get(w),g.init(),j.push(g),w.traverseVisible(function(S){S.isLight&&S.layers.test(U.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),g.setupLights(y.physicallyCorrectLights),w.traverse(function(S){const m=S.material;if(m)if(Array.isArray(m))for(let V=0;V<m.length;V++){const EM=m[V];Cn(EM,w,S)}else Cn(m,w,S)}),j.pop(),g=null};let G=null;function oM(w){G&&G(w)}function UM(){aD.stop()}function qM(){aD.start()}const aD=new bn;aD.setAnimationLoop(oM),typeof window<"u"&&aD.setContext(window),this.setAnimationLoop=function(w){G=w,tM.setAnimationLoop(w),w===null?aD.stop():aD.start()},tM.addEventListener("sessionstart",UM),tM.addEventListener("sessionend",qM),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(o===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),tM.enabled===!0&&tM.isPresenting===!0&&(tM.cameraAutoUpdate===!0&&tM.updateCamera(U),U=tM.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,l),g=RM.get(w,j.length),g.init(),j.push(g),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(H),IM=this.localClippingEnabled,W=x.init(this.clippingPlanes,IM,U),u=GM.get(w,r.length),u.init(),r.push(u),XM(w,U,0,y.sortObjects),u.finish(),y.sortObjects===!0&&u.sort(p,Y),W===!0&&x.beginShadows();const S=g.state.shadowsArray;if(L.render(S,w,U),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),P.render(u,w),g.setupLights(y.physicallyCorrectLights),U.isArrayCamera){const m=U.cameras;for(let V=0,EM=m.length;V<EM;V++){const dM=m[V];QD(u,w,dM,dM.viewport)}}else QD(u,w,U);l!==null&&(B.updateMultisampleRenderTarget(l),B.updateRenderTargetMipmap(l)),w.isScene===!0&&w.onAfterRender(y,w,U),iM.buffers.depth.setTest(!0),iM.buffers.depth.setMask(!0),iM.buffers.color.setMask(!0),iM.setPolygonOffset(!1),sM.resetDefaultState(),C=-1,E=null,j.pop(),j.length>0?g=j[j.length-1]:g=null,r.pop(),r.length>0?u=r[r.length-1]:u=null};function XM(w,U,S,m){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)S=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){m&&eM.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const dM=CM.update(w),hM=w.material;hM.visible&&u.push(w,dM,hM,S,eM.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==vM.render.frame&&(w.skeleton.update(),w.skeleton.frame=vM.render.frame),!w.frustumCulled||K.intersectsObject(w))){m&&eM.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const dM=CM.update(w),hM=w.material;if(Array.isArray(hM)){const pM=dM.groups;for(let KM=0,fM=pM.length;KM<fM;KM++){const mM=pM[KM],JM=hM[mM.materialIndex];JM&&JM.visible&&u.push(w,dM,JM,S,eM.z,mM)}}else hM.visible&&u.push(w,dM,hM,S,eM.z,null)}}const EM=w.children;for(let dM=0,hM=EM.length;dM<hM;dM++)XM(EM[dM],U,S,m)}function QD(w,U,S,m){const V=w.opaque,EM=w.transmissive,dM=w.transparent;g.setupLightsView(S),EM.length>0&&GD(V,U,S),m&&iM.viewport(v.copy(m)),V.length>0&&IN(V,U,S),EM.length>0&&IN(EM,U,S),dM.length>0&&IN(dM,U,S)}function GD(w,U,S){if(_===null){const dM=A===!0&&wM.isWebGL2===!0?yN:oD;_=new dM(1024,1024,{generateMipmaps:!0,type:yM.convert(1016)!==null?1016:1009,minFilter:1008,magFilter:1003,wrapS:1001,wrapT:1001,useRenderToTexture:rM.has("WEBGL_multisampled_render_to_texture")})}const m=y.getRenderTarget();y.setRenderTarget(_),y.clear();const V=y.toneMapping;y.toneMapping=0,IN(w,U,S),y.toneMapping=V,B.updateMultisampleRenderTarget(_),B.updateRenderTargetMipmap(_),y.setRenderTarget(m)}function IN(w,U,S){const m=U.isScene===!0?U.overrideMaterial:null;for(let V=0,EM=w.length;V<EM;V++){const dM=w[V],hM=dM.object,pM=dM.geometry,KM=m===null?dM.material:m,fM=dM.group;hM.layers.test(S.layers)&&cr(hM,U,S,pM,KM,fM)}}function cr(w,U,S,m,V,EM){w.onBeforeRender(y,U,S,m,V,EM),w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(y,U,S,m,w,EM),V.transparent===!0&&V.side===2?(V.side=1,V.needsUpdate=!0,y.renderBufferDirect(S,U,m,V,w,EM),V.side=0,V.needsUpdate=!0,y.renderBufferDirect(S,U,m,V,w,EM),V.side=2):y.renderBufferDirect(S,U,m,V,w,EM),w.onAfterRender(y,U,S,m,V,EM)}function Cn(w,U,S){U.isScene!==!0&&(U=uM);const m=OM.get(w),V=g.state.lights,EM=g.state.shadowsArray,dM=V.state.version,hM=xM.getParameters(w,V.state,EM,U,S),pM=xM.getProgramCacheKey(hM);let KM=m.programs;m.environment=w.isMeshStandardMaterial?U.environment:null,m.fog=U.fog,m.envMap=(w.isMeshStandardMaterial?X:$).get(w.envMap||m.environment),KM===void 0&&(w.addEventListener("dispose",TM),KM=new Map,m.programs=KM);let fM=KM.get(pM);if(fM!==void 0){if(m.currentProgram===fM&&m.lightsStateVersion===dM)return wi(w,hM),fM}else hM.uniforms=xM.getUniforms(w),w.onBuild(S,hM,y),w.onBeforeCompile(hM,y),fM=xM.acquireProgram(hM,pM),KM.set(pM,fM),m.uniforms=hM.uniforms;const mM=m.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(mM.clippingPlanes=x.uniform),wi(w,hM),m.needsLights=ar(w),m.lightsStateVersion=dM,m.needsLights&&(mM.ambientLightColor.value=V.state.ambient,mM.lightProbe.value=V.state.probe,mM.directionalLights.value=V.state.directional,mM.directionalLightShadows.value=V.state.directionalShadow,mM.spotLights.value=V.state.spot,mM.spotLightShadows.value=V.state.spotShadow,mM.rectAreaLights.value=V.state.rectArea,mM.ltc_1.value=V.state.rectAreaLTC1,mM.ltc_2.value=V.state.rectAreaLTC2,mM.pointLights.value=V.state.point,mM.pointLightShadows.value=V.state.pointShadow,mM.hemisphereLights.value=V.state.hemi,mM.directionalShadowMap.value=V.state.directionalShadowMap,mM.directionalShadowMatrix.value=V.state.directionalShadowMatrix,mM.spotShadowMap.value=V.state.spotShadowMap,mM.spotShadowMatrix.value=V.state.spotShadowMatrix,mM.pointShadowMap.value=V.state.pointShadowMap,mM.pointShadowMatrix.value=V.state.pointShadowMatrix);const JM=fM.getUniforms(),at=et.seqWithValue(JM.seq,mM);return m.currentProgram=fM,m.uniformsList=at,fM}function wi(w,U){const S=OM.get(w);S.outputEncoding=U.outputEncoding,S.instancing=U.instancing,S.skinning=U.skinning,S.morphTargets=U.morphTargets,S.morphNormals=U.morphNormals,S.morphTargetsCount=U.morphTargetsCount,S.numClippingPlanes=U.numClippingPlanes,S.numIntersection=U.numClipIntersection,S.vertexAlphas=U.vertexAlphas,S.vertexTangents=U.vertexTangents,S.toneMapping=U.toneMapping}function jr(w,U,S,m,V){U.isScene!==!0&&(U=uM),B.resetTextureUnits();const EM=U.fog,dM=m.isMeshStandardMaterial?U.environment:null,hM=l===null?y.outputEncoding:l.isXRRenderTarget===!0?l.texture.encoding:3e3,pM=(m.isMeshStandardMaterial?X:$).get(m.envMap||dM),KM=m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,fM=!!m.normalMap&&!!S.attributes.tangent,mM=!!S.morphAttributes.position,JM=!!S.morphAttributes.normal,at=S.morphAttributes.position?S.morphAttributes.position.length:0,Xt=m.toneMapped?y.toneMapping:0,SM=OM.get(m),fD=g.state.lights;if(W===!0&&(IM===!0||w!==E)){const dD=w===E&&m.id===C;x.setState(m,w,dD)}let eD=!1;m.version===SM.__version?(SM.needsLights&&SM.lightsStateVersion!==fD.state.version||SM.outputEncoding!==hM||V.isInstancedMesh&&SM.instancing===!1||!V.isInstancedMesh&&SM.instancing===!0||V.isSkinnedMesh&&SM.skinning===!1||!V.isSkinnedMesh&&SM.skinning===!0||SM.envMap!==pM||m.fog&&SM.fog!==EM||SM.numClippingPlanes!==void 0&&(SM.numClippingPlanes!==x.numPlanes||SM.numIntersection!==x.numIntersection)||SM.vertexAlphas!==KM||SM.vertexTangents!==fM||SM.morphTargets!==mM||SM.morphNormals!==JM||SM.toneMapping!==Xt||wM.isWebGL2===!0&&SM.morphTargetsCount!==at)&&(eD=!0):(eD=!0,SM.__version=m.version);let mD=SM.currentProgram;eD===!0&&(mD=Cn(m,U,V));let TN=!1,kD=!1,VD=!1;const uD=mD.getUniforms(),oe=SM.uniforms;if(iM.useProgram(mD.program)&&(TN=!0,kD=!0,VD=!0),m.id!==C&&(C=m.id,kD=!0),TN||E!==w){if(uD.setValue(b,"projectionMatrix",w.projectionMatrix),wM.logarithmicDepthBuffer&&uD.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,kD=!0,VD=!0),m.isShaderMaterial||m.isMeshPhongMaterial||m.isMeshToonMaterial||m.isMeshStandardMaterial||m.envMap){const dD=uD.map.cameraPosition;dD!==void 0&&dD.setValue(b,eM.setFromMatrixPosition(w.matrixWorld))}(m.isMeshPhongMaterial||m.isMeshToonMaterial||m.isMeshLambertMaterial||m.isMeshBasicMaterial||m.isMeshStandardMaterial||m.isShaderMaterial)&&uD.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),(m.isMeshPhongMaterial||m.isMeshToonMaterial||m.isMeshLambertMaterial||m.isMeshBasicMaterial||m.isMeshStandardMaterial||m.isShaderMaterial||m.isShadowMaterial||V.isSkinnedMesh)&&uD.setValue(b,"viewMatrix",w.matrixWorldInverse)}if(V.isSkinnedMesh){uD.setOptional(b,V,"bindMatrix"),uD.setOptional(b,V,"bindMatrixInverse");const dD=V.skeleton;dD&&(wM.floatVertexTextures?(dD.boneTexture===null&&dD.computeBoneTexture(),uD.setValue(b,"boneTexture",dD.boneTexture,B),uD.setValue(b,"boneTextureSize",dD.boneTextureSize)):uD.setOptional(b,dD,"boneMatrices"))}return!!S&&(S.morphAttributes.position!==void 0||S.morphAttributes.normal!==void 0)&&J.update(V,S,m,mD),(kD||SM.receiveShadow!==V.receiveShadow)&&(SM.receiveShadow=V.receiveShadow,uD.setValue(b,"receiveShadow",V.receiveShadow)),kD&&(uD.setValue(b,"toneMappingExposure",y.toneMappingExposure),SM.needsLights&&yr(oe,VD),EM&&m.fog&&QM.refreshFogUniforms(oe,EM),QM.refreshMaterialUniforms(oe,m,a,Z,_),et.upload(b,SM.uniformsList,oe,B)),m.isShaderMaterial&&m.uniformsNeedUpdate===!0&&(et.upload(b,SM.uniformsList,oe,B),m.uniformsNeedUpdate=!1),m.isSpriteMaterial&&uD.setValue(b,"center",V.center),uD.setValue(b,"modelViewMatrix",V.modelViewMatrix),uD.setValue(b,"normalMatrix",V.normalMatrix),uD.setValue(b,"modelMatrix",V.matrixWorld),mD}function yr(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function ar(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(w,U,S){OM.get(w.texture).__webglTexture=U,OM.get(w.depthTexture).__webglTexture=S;const m=OM.get(w);m.__hasExternalTextures=!0,m.__hasExternalTextures&&(m.__autoAllocateDepthBuffer=S===void 0,m.__autoAllocateDepthBuffer||w.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),w.useRenderToTexture=!1,w.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(w,U){const S=OM.get(w);S.__webglFramebuffer=U,S.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,S=0){l=w,c=U,s=S;let m=!0;if(w){const pM=OM.get(w);pM.__useDefaultFramebuffer!==void 0?(iM.bindFramebuffer(36160,null),m=!1):pM.__webglFramebuffer===void 0?B.setupRenderTarget(w):pM.__hasExternalTextures&&B.rebindTextures(w,OM.get(w.texture).__webglTexture,OM.get(w.depthTexture).__webglTexture)}let V=null,EM=!1,dM=!1;if(w){const pM=w.texture;(pM.isDataTexture3D||pM.isDataTexture2DArray)&&(dM=!0);const KM=OM.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(V=KM[U],EM=!0):w.useRenderbuffer?V=OM.get(w).__webglMultisampledFramebuffer:V=KM,v.copy(w.viewport),h.copy(w.scissor),F=w.scissorTest}else v.copy(k).multiplyScalar(a).floor(),h.copy(f).multiplyScalar(a).floor(),F=Q;if(iM.bindFramebuffer(36160,V)&&wM.drawBuffers&&m&&iM.drawBuffers(w,V),iM.viewport(v),iM.scissor(h),iM.setScissorTest(F),EM){const pM=OM.get(w.texture);b.framebufferTexture2D(36160,36064,34069+U,pM.__webglTexture,S)}else if(dM){const pM=OM.get(w.texture),KM=U||0;b.framebufferTextureLayer(36160,36064,pM.__webglTexture,S||0,KM)}C=-1},this.readRenderTargetPixels=function(w,U,S,m,V,EM,dM){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let hM=OM.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dM!==void 0&&(hM=hM[dM]),hM){iM.bindFramebuffer(36160,hM);try{const pM=w.texture,KM=pM.format,fM=pM.type;if(KM!==1023&&yM.convert(KM)!==b.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mM=fM===1016&&(rM.has("EXT_color_buffer_half_float")||wM.isWebGL2&&rM.has("EXT_color_buffer_float"));if(fM!==1009&&yM.convert(fM)!==b.getParameter(35738)&&!(fM===1015&&(wM.isWebGL2||rM.has("OES_texture_float")||rM.has("WEBGL_color_buffer_float")))&&!mM){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b.checkFramebufferStatus(36160)===36053?U>=0&&U<=w.width-m&&S>=0&&S<=w.height-V&&b.readPixels(U,S,m,V,yM.convert(KM),yM.convert(fM),EM):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const pM=l!==null?OM.get(l).__webglFramebuffer:null;iM.bindFramebuffer(36160,pM)}}},this.copyFramebufferToTexture=function(w,U,S=0){if(U.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const m=Math.pow(2,-S),V=Math.floor(U.image.width*m),EM=Math.floor(U.image.height*m);B.setTexture2D(U,0),b.copyTexSubImage2D(3553,S,0,0,w.x,w.y,V,EM),iM.unbindTexture()},this.copyTextureToTexture=function(w,U,S,m=0){const V=U.image.width,EM=U.image.height,dM=yM.convert(S.format),hM=yM.convert(S.type);B.setTexture2D(S,0),b.pixelStorei(37440,S.flipY),b.pixelStorei(37441,S.premultiplyAlpha),b.pixelStorei(3317,S.unpackAlignment),U.isDataTexture?b.texSubImage2D(3553,m,w.x,w.y,V,EM,dM,hM,U.image.data):U.isCompressedTexture?b.compressedTexSubImage2D(3553,m,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,dM,U.mipmaps[0].data):b.texSubImage2D(3553,m,w.x,w.y,dM,hM,U.image),m===0&&S.generateMipmaps&&b.generateMipmap(3553),iM.unbindTexture()},this.copyTextureToTexture3D=function(w,U,S,m,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const EM=w.max.x-w.min.x+1,dM=w.max.y-w.min.y+1,hM=w.max.z-w.min.z+1,pM=yM.convert(m.format),KM=yM.convert(m.type);let fM;if(m.isDataTexture3D)B.setTexture3D(m,0),fM=32879;else if(m.isDataTexture2DArray)B.setTexture2DArray(m,0),fM=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(37440,m.flipY),b.pixelStorei(37441,m.premultiplyAlpha),b.pixelStorei(3317,m.unpackAlignment);const mM=b.getParameter(3314),JM=b.getParameter(32878),at=b.getParameter(3316),Xt=b.getParameter(3315),SM=b.getParameter(32877),fD=S.isCompressedTexture?S.mipmaps[0]:S.image;b.pixelStorei(3314,fD.width),b.pixelStorei(32878,fD.height),b.pixelStorei(3316,w.min.x),b.pixelStorei(3315,w.min.y),b.pixelStorei(32877,w.min.z),S.isDataTexture||S.isDataTexture3D?b.texSubImage3D(fM,V,U.x,U.y,U.z,EM,dM,hM,pM,KM,fD.data):S.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(fM,V,U.x,U.y,U.z,EM,dM,hM,pM,fD.data)):b.texSubImage3D(fM,V,U.x,U.y,U.z,EM,dM,hM,pM,KM,fD),b.pixelStorei(3314,mM),b.pixelStorei(32878,JM),b.pixelStorei(3316,at),b.pixelStorei(3315,Xt),b.pixelStorei(32877,SM),V===0&&m.generateMipmaps&&b.generateMipmap(fM),iM.unbindTexture()},this.initTexture=function(w){B.setTexture2D(w,0),iM.unbindTexture()},this.resetState=function(){c=0,s=0,l=null,iM.reset(),sM.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_M.prototype.isWebGLRenderer=!0;class pu extends _M{}pu.prototype.isWebGL1Renderer=!0;class WN extends ZM{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(M,D){return super.copy(M,D),M.background!==null&&(this.background=M.background.clone()),M.environment!==null&&(this.environment=M.environment.clone()),M.fog!==null&&(this.fog=M.fog.clone()),M.overrideMaterial!==null&&(this.overrideMaterial=M.overrideMaterial.clone()),this.autoUpdate=M.autoUpdate,this.matrixAutoUpdate=M.matrixAutoUpdate,this}toJSON(M){const D=super.toJSON(M);return this.fog!==null&&(D.object.fog=this.fog.toJSON()),D}}WN.prototype.isScene=!0;class ne{constructor(M,D){this.array=M,this.stride=D,this.count=M!==void 0?M.length/D:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vD()}onUploadCallback(){}set needsUpdate(M){M===!0&&this.version++}setUsage(M){return this.usage=M,this}copy(M){return this.array=new M.array.constructor(M.array),this.count=M.count,this.stride=M.stride,this.usage=M.usage,this}copyAt(M,D,t){M*=this.stride,t*=D.stride;for(let e=0,N=this.stride;e<N;e++)this.array[M+e]=D.array[t+e];return this}set(M,D=0){return this.array.set(M,D),this}clone(M){M.arrayBuffers===void 0&&(M.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vD()),M.arrayBuffers[this.array.buffer._uuid]===void 0&&(M.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const D=new this.array.constructor(M.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(D,this.stride);return t.setUsage(this.usage),t}onUpload(M){return this.onUploadCallback=M,this}toJSON(M){return M.arrayBuffers===void 0&&(M.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vD()),M.arrayBuffers[this.array.buffer._uuid]===void 0&&(M.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ne.prototype.isInterleavedBuffer=!0;const $M=new O;class Ae{constructor(M,D,t,e=!1){this.name="",this.data=M,this.itemSize=D,this.offset=t,this.normalized=e===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(M){this.data.needsUpdate=M}applyMatrix4(M){for(let D=0,t=this.data.count;D<t;D++)$M.x=this.getX(D),$M.y=this.getY(D),$M.z=this.getZ(D),$M.applyMatrix4(M),this.setXYZ(D,$M.x,$M.y,$M.z);return this}applyNormalMatrix(M){for(let D=0,t=this.count;D<t;D++)$M.x=this.getX(D),$M.y=this.getY(D),$M.z=this.getZ(D),$M.applyNormalMatrix(M),this.setXYZ(D,$M.x,$M.y,$M.z);return this}transformDirection(M){for(let D=0,t=this.count;D<t;D++)$M.x=this.getX(D),$M.y=this.getY(D),$M.z=this.getZ(D),$M.transformDirection(M),this.setXYZ(D,$M.x,$M.y,$M.z);return this}setX(M,D){return this.data.array[M*this.data.stride+this.offset]=D,this}setY(M,D){return this.data.array[M*this.data.stride+this.offset+1]=D,this}setZ(M,D){return this.data.array[M*this.data.stride+this.offset+2]=D,this}setW(M,D){return this.data.array[M*this.data.stride+this.offset+3]=D,this}getX(M){return this.data.array[M*this.data.stride+this.offset]}getY(M){return this.data.array[M*this.data.stride+this.offset+1]}getZ(M){return this.data.array[M*this.data.stride+this.offset+2]}getW(M){return this.data.array[M*this.data.stride+this.offset+3]}setXY(M,D,t){return M=M*this.data.stride+this.offset,this.data.array[M+0]=D,this.data.array[M+1]=t,this}setXYZ(M,D,t,e){return M=M*this.data.stride+this.offset,this.data.array[M+0]=D,this.data.array[M+1]=t,this.data.array[M+2]=e,this}setXYZW(M,D,t,e,N){return M=M*this.data.stride+this.offset,this.data.array[M+0]=D,this.data.array[M+1]=t,this.data.array[M+2]=e,this.data.array[M+3]=N,this}clone(M){if(M===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const D=[];for(let t=0;t<this.count;t++){const e=t*this.data.stride+this.offset;for(let N=0;N<this.itemSize;N++)D.push(this.data.array[e+N])}return new DD(new this.array.constructor(D),this.itemSize,this.normalized)}else return M.interleavedBuffers===void 0&&(M.interleavedBuffers={}),M.interleavedBuffers[this.data.uuid]===void 0&&(M.interleavedBuffers[this.data.uuid]=this.data.clone(M)),new Ae(M.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(M){if(M===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const D=[];for(let t=0;t<this.count;t++){const e=t*this.data.stride+this.offset;for(let N=0;N<this.itemSize;N++)D.push(this.data.array[e+N])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:D,normalized:this.normalized}}else return M.interleavedBuffers===void 0&&(M.interleavedBuffers={}),M.interleavedBuffers[this.data.uuid]===void 0&&(M.interleavedBuffers[this.data.uuid]=this.data.toJSON(M)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Ae.prototype.isInterleavedBufferAttribute=!0;class xA extends nD{constructor(M){super(),this.type="SpriteMaterial",this.color=new cM(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.map=M.map,this.alphaMap=M.alphaMap,this.rotation=M.rotation,this.sizeAttenuation=M.sizeAttenuation,this}}xA.prototype.isSpriteMaterial=!0;let bt;const ie=new O,Kt=new O,Rt=new O,Pt=new q,ze=new q,EA=new aM,Fe=new O,Ie=new O,Be=new O,lA=new q,qN=new q,dA=new q;class hu extends ZM{constructor(M){if(super(),this.type="Sprite",bt===void 0){bt=new BM;const D=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new ne(D,5);bt.setIndex([0,1,2,0,2,3]),bt.setAttribute("position",new Ae(t,3,0,!1)),bt.setAttribute("uv",new Ae(t,2,3,!1))}this.geometry=bt,this.material=M!==void 0?M:new xA,this.center=new q(.5,.5)}raycast(M,D){M.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kt.setFromMatrixScale(this.matrixWorld),EA.copy(M.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(M.camera.matrixWorldInverse,this.matrixWorld),Rt.setFromMatrixPosition(this.modelViewMatrix),M.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kt.multiplyScalar(-Rt.z);const t=this.material.rotation;let e,N;t!==0&&(N=Math.cos(t),e=Math.sin(t));const A=this.center;Ge(Fe.set(-.5,-.5,0),Rt,A,Kt,e,N),Ge(Ie.set(.5,-.5,0),Rt,A,Kt,e,N),Ge(Be.set(.5,.5,0),Rt,A,Kt,e,N),lA.set(0,0),qN.set(1,0),dA.set(1,1);let i=M.ray.intersectTriangle(Fe,Ie,Be,!1,ie);if(i===null&&(Ge(Ie.set(-.5,.5,0),Rt,A,Kt,e,N),qN.set(0,1),i=M.ray.intersectTriangle(Fe,Be,Ie,!1,ie),i===null))return;const I=M.ray.origin.distanceTo(ie);I<M.near||I>M.far||D.push({distance:I,point:ie.clone(),uv:MD.getUV(ie,Fe,Ie,Be,lA,qN,dA,new q),face:null,object:this})}copy(M){return super.copy(M),M.center!==void 0&&this.center.copy(M.center),this.material=M.material,this}}hu.prototype.isSprite=!0;function Ge(n,M,D,t,e,N){Pt.subVectors(n,D).addScalar(.5).multiply(t),e!==void 0?(ze.x=N*Pt.x-e*Pt.y,ze.y=e*Pt.x+N*Pt.y):ze.copy(Pt),n.copy(M),n.x+=ze.x,n.y+=ze.y,n.applyMatrix4(EA)}const vA=new O,pA=new PM,hA=new PM,Yu=new O,YA=new aM;class UA extends tD{constructor(M,D){super(M,D),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new aM,this.bindMatrixInverse=new aM}copy(M){return super.copy(M),this.bindMode=M.bindMode,this.bindMatrix.copy(M.bindMatrix),this.bindMatrixInverse.copy(M.bindMatrixInverse),this.skeleton=M.skeleton,this}bind(M,D){this.skeleton=M,D===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),D=this.matrixWorld),this.bindMatrix.copy(D),this.bindMatrixInverse.copy(D).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const M=new PM,D=this.geometry.attributes.skinWeight;for(let t=0,e=D.count;t<e;t++){M.x=D.getX(t),M.y=D.getY(t),M.z=D.getZ(t),M.w=D.getW(t);const N=1/M.manhattanLength();N!==1/0?M.multiplyScalar(N):M.set(1,0,0,0),D.setXYZW(t,M.x,M.y,M.z,M.w)}}updateMatrixWorld(M){super.updateMatrixWorld(M),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(M,D){const t=this.skeleton,e=this.geometry;pA.fromBufferAttribute(e.attributes.skinIndex,M),hA.fromBufferAttribute(e.attributes.skinWeight,M),vA.copy(D).applyMatrix4(this.bindMatrix),D.set(0,0,0);for(let N=0;N<4;N++){const A=hA.getComponent(N);if(A!==0){const i=pA.getComponent(N);YA.multiplyMatrices(t.bones[i].matrixWorld,t.boneInverses[i]),D.addScaledVector(Yu.copy(vA).applyMatrix4(YA),A)}}return D.applyMatrix4(this.bindMatrixInverse)}}UA.prototype.isSkinnedMesh=!0;class Uu extends ZM{constructor(){super(),this.type="Bone"}}Uu.prototype.isBone=!0;class Qu extends ND{constructor(M=null,D=1,t=1,e,N,A,i,I,z=1003,T=1003,u,g){super(null,A,i,I,z,T,e,N,u,g),this.image={data:M,width:D,height:t},this.magFilter=z,this.minFilter=T,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Qu.prototype.isDataTexture=!0;class XN extends DD{constructor(M,D,t,e=1){typeof t=="number"&&(e=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(M,D,t),this.meshPerAttribute=e}copy(M){return super.copy(M),this.meshPerAttribute=M.meshPerAttribute,this}toJSON(){const M=super.toJSON();return M.meshPerAttribute=this.meshPerAttribute,M.isInstancedBufferAttribute=!0,M}}XN.prototype.isInstancedBufferAttribute=!0;const QA=new aM,fA=new aM,Ve=[],Te=new tD;class fu extends tD{constructor(M,D,t){super(M,D),this.instanceMatrix=new XN(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}copy(M){return super.copy(M),this.instanceMatrix.copy(M.instanceMatrix),M.instanceColor!==null&&(this.instanceColor=M.instanceColor.clone()),this.count=M.count,this}getColorAt(M,D){D.fromArray(this.instanceColor.array,M*3)}getMatrixAt(M,D){D.fromArray(this.instanceMatrix.array,M*16)}raycast(M,D){const t=this.matrixWorld,e=this.count;if(Te.geometry=this.geometry,Te.material=this.material,Te.material!==void 0)for(let N=0;N<e;N++){this.getMatrixAt(N,QA),fA.multiplyMatrices(t,QA),Te.matrixWorld=fA,Te.raycast(M,Ve);for(let A=0,i=Ve.length;A<i;A++){const I=Ve[A];I.instanceId=N,I.object=this,D.push(I)}Ve.length=0}}setColorAt(M,D){this.instanceColor===null&&(this.instanceColor=new XN(new Float32Array(this.instanceMatrix.count*3),3)),D.toArray(this.instanceColor.array,M*3)}setMatrixAt(M,D){D.toArray(this.instanceMatrix.array,M*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}fu.prototype.isInstancedMesh=!0;class Nt extends nD{constructor(M){super(),this.type="LineBasicMaterial",this.color=new cM(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.linewidth=M.linewidth,this.linecap=M.linecap,this.linejoin=M.linejoin,this}}Nt.prototype.isLineBasicMaterial=!0;const mA=new O,kA=new O,SA=new aM,JN=new Et,He=new xt;class $N extends ZM{constructor(M=new BM,D=new Nt){super(),this.type="Line",this.geometry=M,this.material=D,this.updateMorphTargets()}copy(M){return super.copy(M),this.material=M.material,this.geometry=M.geometry,this}computeLineDistances(){const M=this.geometry;if(M.isBufferGeometry)if(M.index===null){const D=M.attributes.position,t=[0];for(let e=1,N=D.count;e<N;e++)mA.fromBufferAttribute(D,e-1),kA.fromBufferAttribute(D,e),t[e]=t[e-1],t[e]+=mA.distanceTo(kA);M.setAttribute("lineDistance",new VM(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else M.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(M,D){const t=this.geometry,e=this.matrixWorld,N=M.params.Line.threshold,A=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),He.copy(t.boundingSphere),He.applyMatrix4(e),He.radius+=N,M.ray.intersectsSphere(He)===!1)return;SA.copy(e).invert(),JN.copy(M.ray).applyMatrix4(SA);const i=N/((this.scale.x+this.scale.y+this.scale.z)/3),I=i*i,z=new O,T=new O,u=new O,g=new O,r=this.isLineSegments?2:1;if(t.isBufferGeometry){const j=t.index,o=t.attributes.position;if(j!==null){const c=Math.max(0,A.start),s=Math.min(j.count,A.start+A.count);for(let l=c,C=s-1;l<C;l+=r){const E=j.getX(l),v=j.getX(l+1);if(z.fromBufferAttribute(o,E),T.fromBufferAttribute(o,v),JN.distanceSqToSegment(z,T,g,u)>I)continue;g.applyMatrix4(this.matrixWorld);const F=M.ray.origin.distanceTo(g);F<M.near||F>M.far||D.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:l,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,A.start),s=Math.min(o.count,A.start+A.count);for(let l=c,C=s-1;l<C;l+=r){if(z.fromBufferAttribute(o,l),T.fromBufferAttribute(o,l+1),JN.distanceSqToSegment(z,T,g,u)>I)continue;g.applyMatrix4(this.matrixWorld);const v=M.ray.origin.distanceTo(g);v<M.near||v>M.far||D.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:l,face:null,faceIndex:null,object:this})}}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const M=this.geometry;if(M.isBufferGeometry){const D=M.morphAttributes,t=Object.keys(D);if(t.length>0){const e=D[t[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let N=0,A=e.length;N<A;N++){const i=e[N].name||String(N);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=N}}}}else{const D=M.morphTargets;D!==void 0&&D.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}$N.prototype.isLine=!0;const ZA=new O,_A=new O;class ue extends $N{constructor(M,D){super(M,D),this.type="LineSegments"}computeLineDistances(){const M=this.geometry;if(M.isBufferGeometry)if(M.index===null){const D=M.attributes.position,t=[];for(let e=0,N=D.count;e<N;e+=2)ZA.fromBufferAttribute(D,e),_A.fromBufferAttribute(D,e+1),t[e]=e===0?0:t[e-1],t[e+1]=t[e]+ZA.distanceTo(_A);M.setAttribute("lineDistance",new VM(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else M.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ue.prototype.isLineSegments=!0;class mu extends $N{constructor(M,D){super(M,D),this.type="LineLoop"}}mu.prototype.isLineLoop=!0;class Ft extends nD{constructor(M){super(),this.type="PointsMaterial",this.color=new cM(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.map=M.map,this.alphaMap=M.alphaMap,this.size=M.size,this.sizeAttenuation=M.sizeAttenuation,this}}Ft.prototype.isPointsMaterial=!0;const bA=new aM,Mn=new Et,We=new xt,qe=new O;class Xe extends ZM{constructor(M=new BM,D=new Ft){super(),this.type="Points",this.geometry=M,this.material=D,this.updateMorphTargets()}copy(M){return super.copy(M),this.material=M.material,this.geometry=M.geometry,this}raycast(M,D){const t=this.geometry,e=this.matrixWorld,N=M.params.Points.threshold,A=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),We.copy(t.boundingSphere),We.applyMatrix4(e),We.radius+=N,M.ray.intersectsSphere(We)===!1)return;bA.copy(e).invert(),Mn.copy(M.ray).applyMatrix4(bA);const i=N/((this.scale.x+this.scale.y+this.scale.z)/3),I=i*i;if(t.isBufferGeometry){const z=t.index,u=t.attributes.position;if(z!==null){const g=Math.max(0,A.start),r=Math.min(z.count,A.start+A.count);for(let j=g,y=r;j<y;j++){const o=z.getX(j);qe.fromBufferAttribute(u,o),KA(qe,o,I,e,M,D,this)}}else{const g=Math.max(0,A.start),r=Math.min(u.count,A.start+A.count);for(let j=g,y=r;j<y;j++)qe.fromBufferAttribute(u,j),KA(qe,j,I,e,M,D,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const M=this.geometry;if(M.isBufferGeometry){const D=M.morphAttributes,t=Object.keys(D);if(t.length>0){const e=D[t[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let N=0,A=e.length;N<A;N++){const i=e[N].name||String(N);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=N}}}}else{const D=M.morphTargets;D!==void 0&&D.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Xe.prototype.isPoints=!0;function KA(n,M,D,t,e,N,A){const i=Mn.distanceSqToPoint(n);if(i<D){const I=new O;Mn.closestPointToPoint(n,I),I.applyMatrix4(t);const z=e.ray.origin.distanceTo(I);if(z<e.near||z>e.far)return;N.push({distance:z,distanceToRay:Math.sqrt(i),point:I,index:M,face:null,object:A})}}class RA extends ND{constructor(M,D,t,e,N,A,i,I,z){super(M,D,t,e,N,A,i,I,z),this.minFilter=A!==void 0?A:1006,this.magFilter=N!==void 0?N:1006,this.generateMipmaps=!1;const T=this;function u(){T.needsUpdate=!0,M.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in M&&M.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const M=this.image;"requestVideoFrameCallback"in M===!1&&M.readyState>=M.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}RA.prototype.isVideoTexture=!0;class ku extends ND{constructor(M,D,t){super({width:M,height:D}),this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}ku.prototype.isFramebufferTexture=!0;class Su extends ND{constructor(M,D,t,e,N,A,i,I,z,T,u,g){super(null,A,i,I,z,T,e,N,u,g),this.image={width:D,height:t},this.mipmaps=M,this.flipY=!1,this.generateMipmaps=!1}}Su.prototype.isCompressedTexture=!0;class Zu extends ND{constructor(M,D,t,e,N,A,i,I,z){super(M,D,t,e,N,A,i,I,z),this.needsUpdate=!0}}Zu.prototype.isCanvasTexture=!0,new O,new O,new O,new MD;class wD{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(M,D){const t=this.getUtoTmapping(M);return this.getPoint(t,D)}getPoints(M=5){const D=[];for(let t=0;t<=M;t++)D.push(this.getPoint(t/M));return D}getSpacedPoints(M=5){const D=[];for(let t=0;t<=M;t++)D.push(this.getPointAt(t/M));return D}getLength(){const M=this.getLengths();return M[M.length-1]}getLengths(M=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===M+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const D=[];let t,e=this.getPoint(0),N=0;D.push(0);for(let A=1;A<=M;A++)t=this.getPoint(A/M),N+=t.distanceTo(e),D.push(N),e=t;return this.cacheArcLengths=D,D}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(M,D){const t=this.getLengths();let e=0;const N=t.length;let A;D?A=D:A=M*t[N-1];let i=0,I=N-1,z;for(;i<=I;)if(e=Math.floor(i+(I-i)/2),z=t[e]-A,z<0)i=e+1;else if(z>0)I=e-1;else{I=e;break}if(e=I,t[e]===A)return e/(N-1);const T=t[e],g=t[e+1]-T,r=(A-T)/g;return(e+r)/(N-1)}getTangent(M,D){let e=M-1e-4,N=M+1e-4;e<0&&(e=0),N>1&&(N=1);const A=this.getPoint(e),i=this.getPoint(N),I=D||(A.isVector2?new q:new O);return I.copy(i).sub(A).normalize(),I}getTangentAt(M,D){const t=this.getUtoTmapping(M);return this.getTangent(t,D)}computeFrenetFrames(M,D){const t=new O,e=[],N=[],A=[],i=new O,I=new aM;for(let r=0;r<=M;r++){const j=r/M;e[r]=this.getTangentAt(j,new O)}N[0]=new O,A[0]=new O;let z=Number.MAX_VALUE;const T=Math.abs(e[0].x),u=Math.abs(e[0].y),g=Math.abs(e[0].z);T<=z&&(z=T,t.set(1,0,0)),u<=z&&(z=u,t.set(0,1,0)),g<=z&&t.set(0,0,1),i.crossVectors(e[0],t).normalize(),N[0].crossVectors(e[0],i),A[0].crossVectors(e[0],N[0]);for(let r=1;r<=M;r++){if(N[r]=N[r-1].clone(),A[r]=A[r-1].clone(),i.crossVectors(e[r-1],e[r]),i.length()>Number.EPSILON){i.normalize();const j=Math.acos(cD(e[r-1].dot(e[r]),-1,1));N[r].applyMatrix4(I.makeRotationAxis(i,j))}A[r].crossVectors(e[r],N[r])}if(D===!0){let r=Math.acos(cD(N[0].dot(N[M]),-1,1));r/=M,e[0].dot(i.crossVectors(N[0],N[M]))>0&&(r=-r);for(let j=1;j<=M;j++)N[j].applyMatrix4(I.makeRotationAxis(e[j],r*j)),A[j].crossVectors(e[j],N[j])}return{tangents:e,normals:N,binormals:A}}clone(){return new this.constructor().copy(this)}copy(M){return this.arcLengthDivisions=M.arcLengthDivisions,this}toJSON(){const M={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return M.arcLengthDivisions=this.arcLengthDivisions,M.type=this.type,M}fromJSON(M){return this.arcLengthDivisions=M.arcLengthDivisions,this}}class Je extends wD{constructor(M=0,D=0,t=1,e=1,N=0,A=Math.PI*2,i=!1,I=0){super(),this.type="EllipseCurve",this.aX=M,this.aY=D,this.xRadius=t,this.yRadius=e,this.aStartAngle=N,this.aEndAngle=A,this.aClockwise=i,this.aRotation=I}getPoint(M,D){const t=D||new q,e=Math.PI*2;let N=this.aEndAngle-this.aStartAngle;const A=Math.abs(N)<Number.EPSILON;for(;N<0;)N+=e;for(;N>e;)N-=e;N<Number.EPSILON&&(A?N=0:N=e),this.aClockwise===!0&&!A&&(N===e?N=-e:N=N-e);const i=this.aStartAngle+M*N;let I=this.aX+this.xRadius*Math.cos(i),z=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){const T=Math.cos(this.aRotation),u=Math.sin(this.aRotation),g=I-this.aX,r=z-this.aY;I=g*T-r*u+this.aX,z=g*u+r*T+this.aY}return t.set(I,z)}copy(M){return super.copy(M),this.aX=M.aX,this.aY=M.aY,this.xRadius=M.xRadius,this.yRadius=M.yRadius,this.aStartAngle=M.aStartAngle,this.aEndAngle=M.aEndAngle,this.aClockwise=M.aClockwise,this.aRotation=M.aRotation,this}toJSON(){const M=super.toJSON();return M.aX=this.aX,M.aY=this.aY,M.xRadius=this.xRadius,M.yRadius=this.yRadius,M.aStartAngle=this.aStartAngle,M.aEndAngle=this.aEndAngle,M.aClockwise=this.aClockwise,M.aRotation=this.aRotation,M}fromJSON(M){return super.fromJSON(M),this.aX=M.aX,this.aY=M.aY,this.xRadius=M.xRadius,this.yRadius=M.yRadius,this.aStartAngle=M.aStartAngle,this.aEndAngle=M.aEndAngle,this.aClockwise=M.aClockwise,this.aRotation=M.aRotation,this}}Je.prototype.isEllipseCurve=!0;class PA extends Je{constructor(M,D,t,e,N,A){super(M,D,t,t,e,N,A),this.type="ArcCurve"}}PA.prototype.isArcCurve=!0;function Dn(){let n=0,M=0,D=0,t=0;function e(N,A,i,I){n=N,M=i,D=-3*N+3*A-2*i-I,t=2*N-2*A+i+I}return{initCatmullRom:function(N,A,i,I,z){e(A,i,z*(i-N),z*(I-A))},initNonuniformCatmullRom:function(N,A,i,I,z,T,u){let g=(A-N)/z-(i-N)/(z+T)+(i-A)/T,r=(i-A)/T-(I-A)/(T+u)+(I-i)/u;g*=T,r*=T,e(A,i,g,r)},calc:function(N){const A=N*N,i=A*N;return n+M*N+D*A+t*i}}}const $e=new O,tn=new Dn,en=new Dn,Nn=new Dn;class FA extends wD{constructor(M=[],D=!1,t="centripetal",e=.5){super(),this.type="CatmullRomCurve3",this.points=M,this.closed=D,this.curveType=t,this.tension=e}getPoint(M,D=new O){const t=D,e=this.points,N=e.length,A=(N-(this.closed?0:1))*M;let i=Math.floor(A),I=A-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/N)+1)*N:I===0&&i===N-1&&(i=N-2,I=1);let z,T;this.closed||i>0?z=e[(i-1)%N]:($e.subVectors(e[0],e[1]).add(e[0]),z=$e);const u=e[i%N],g=e[(i+1)%N];if(this.closed||i+2<N?T=e[(i+2)%N]:($e.subVectors(e[N-1],e[N-2]).add(e[N-1]),T=$e),this.curveType==="centripetal"||this.curveType==="chordal"){const r=this.curveType==="chordal"?.5:.25;let j=Math.pow(z.distanceToSquared(u),r),y=Math.pow(u.distanceToSquared(g),r),o=Math.pow(g.distanceToSquared(T),r);y<1e-4&&(y=1),j<1e-4&&(j=y),o<1e-4&&(o=y),tn.initNonuniformCatmullRom(z.x,u.x,g.x,T.x,j,y,o),en.initNonuniformCatmullRom(z.y,u.y,g.y,T.y,j,y,o),Nn.initNonuniformCatmullRom(z.z,u.z,g.z,T.z,j,y,o)}else this.curveType==="catmullrom"&&(tn.initCatmullRom(z.x,u.x,g.x,T.x,this.tension),en.initCatmullRom(z.y,u.y,g.y,T.y,this.tension),Nn.initCatmullRom(z.z,u.z,g.z,T.z,this.tension));return t.set(tn.calc(I),en.calc(I),Nn.calc(I)),t}copy(M){super.copy(M),this.points=[];for(let D=0,t=M.points.length;D<t;D++){const e=M.points[D];this.points.push(e.clone())}return this.closed=M.closed,this.curveType=M.curveType,this.tension=M.tension,this}toJSON(){const M=super.toJSON();M.points=[];for(let D=0,t=this.points.length;D<t;D++){const e=this.points[D];M.points.push(e.toArray())}return M.closed=this.closed,M.curveType=this.curveType,M.tension=this.tension,M}fromJSON(M){super.fromJSON(M),this.points=[];for(let D=0,t=M.points.length;D<t;D++){const e=M.points[D];this.points.push(new O().fromArray(e))}return this.closed=M.closed,this.curveType=M.curveType,this.tension=M.tension,this}}FA.prototype.isCatmullRomCurve3=!0;function BA(n,M,D,t,e){const N=(t-M)*.5,A=(e-D)*.5,i=n*n,I=n*i;return(2*D-2*t+N+A)*I+(-3*D+3*t-2*N-A)*i+N*n+D}function _u(n,M){const D=1-n;return D*D*M}function bu(n,M){return 2*(1-n)*n*M}function Ku(n,M){return n*n*M}function ge(n,M,D,t){return _u(n,M)+bu(n,D)+Ku(n,t)}function Ru(n,M){const D=1-n;return D*D*D*M}function Pu(n,M){const D=1-n;return 3*D*D*n*M}function Fu(n,M){return 3*(1-n)*n*n*M}function Bu(n,M){return n*n*n*M}function re(n,M,D,t,e){return Ru(n,M)+Pu(n,D)+Fu(n,t)+Bu(n,e)}class nn extends wD{constructor(M=new q,D=new q,t=new q,e=new q){super(),this.type="CubicBezierCurve",this.v0=M,this.v1=D,this.v2=t,this.v3=e}getPoint(M,D=new q){const t=D,e=this.v0,N=this.v1,A=this.v2,i=this.v3;return t.set(re(M,e.x,N.x,A.x,i.x),re(M,e.y,N.y,A.y,i.y)),t}copy(M){return super.copy(M),this.v0.copy(M.v0),this.v1.copy(M.v1),this.v2.copy(M.v2),this.v3.copy(M.v3),this}toJSON(){const M=super.toJSON();return M.v0=this.v0.toArray(),M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M.v3=this.v3.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v0.fromArray(M.v0),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this.v3.fromArray(M.v3),this}}nn.prototype.isCubicBezierCurve=!0;class GA extends wD{constructor(M=new O,D=new O,t=new O,e=new O){super(),this.type="CubicBezierCurve3",this.v0=M,this.v1=D,this.v2=t,this.v3=e}getPoint(M,D=new O){const t=D,e=this.v0,N=this.v1,A=this.v2,i=this.v3;return t.set(re(M,e.x,N.x,A.x,i.x),re(M,e.y,N.y,A.y,i.y),re(M,e.z,N.z,A.z,i.z)),t}copy(M){return super.copy(M),this.v0.copy(M.v0),this.v1.copy(M.v1),this.v2.copy(M.v2),this.v3.copy(M.v3),this}toJSON(){const M=super.toJSON();return M.v0=this.v0.toArray(),M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M.v3=this.v3.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v0.fromArray(M.v0),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this.v3.fromArray(M.v3),this}}GA.prototype.isCubicBezierCurve3=!0;class MN extends wD{constructor(M=new q,D=new q){super(),this.type="LineCurve",this.v1=M,this.v2=D}getPoint(M,D=new q){const t=D;return M===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(M).add(this.v1)),t}getPointAt(M,D){return this.getPoint(M,D)}getTangent(M,D){const t=D||new q;return t.copy(this.v2).sub(this.v1).normalize(),t}copy(M){return super.copy(M),this.v1.copy(M.v1),this.v2.copy(M.v2),this}toJSON(){const M=super.toJSON();return M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this}}MN.prototype.isLineCurve=!0;class Gu extends wD{constructor(M=new O,D=new O){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=M,this.v2=D}getPoint(M,D=new O){const t=D;return M===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(M).add(this.v1)),t}getPointAt(M,D){return this.getPoint(M,D)}copy(M){return super.copy(M),this.v1.copy(M.v1),this.v2.copy(M.v2),this}toJSON(){const M=super.toJSON();return M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this}}class An extends wD{constructor(M=new q,D=new q,t=new q){super(),this.type="QuadraticBezierCurve",this.v0=M,this.v1=D,this.v2=t}getPoint(M,D=new q){const t=D,e=this.v0,N=this.v1,A=this.v2;return t.set(ge(M,e.x,N.x,A.x),ge(M,e.y,N.y,A.y)),t}copy(M){return super.copy(M),this.v0.copy(M.v0),this.v1.copy(M.v1),this.v2.copy(M.v2),this}toJSON(){const M=super.toJSON();return M.v0=this.v0.toArray(),M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v0.fromArray(M.v0),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this}}An.prototype.isQuadraticBezierCurve=!0;class VA extends wD{constructor(M=new O,D=new O,t=new O){super(),this.type="QuadraticBezierCurve3",this.v0=M,this.v1=D,this.v2=t}getPoint(M,D=new O){const t=D,e=this.v0,N=this.v1,A=this.v2;return t.set(ge(M,e.x,N.x,A.x),ge(M,e.y,N.y,A.y),ge(M,e.z,N.z,A.z)),t}copy(M){return super.copy(M),this.v0.copy(M.v0),this.v1.copy(M.v1),this.v2.copy(M.v2),this}toJSON(){const M=super.toJSON();return M.v0=this.v0.toArray(),M.v1=this.v1.toArray(),M.v2=this.v2.toArray(),M}fromJSON(M){return super.fromJSON(M),this.v0.fromArray(M.v0),this.v1.fromArray(M.v1),this.v2.fromArray(M.v2),this}}VA.prototype.isQuadraticBezierCurve3=!0;class zn extends wD{constructor(M=[]){super(),this.type="SplineCurve",this.points=M}getPoint(M,D=new q){const t=D,e=this.points,N=(e.length-1)*M,A=Math.floor(N),i=N-A,I=e[A===0?A:A-1],z=e[A],T=e[A>e.length-2?e.length-1:A+1],u=e[A>e.length-3?e.length-1:A+2];return t.set(BA(i,I.x,z.x,T.x,u.x),BA(i,I.y,z.y,T.y,u.y)),t}copy(M){super.copy(M),this.points=[];for(let D=0,t=M.points.length;D<t;D++){const e=M.points[D];this.points.push(e.clone())}return this}toJSON(){const M=super.toJSON();M.points=[];for(let D=0,t=this.points.length;D<t;D++){const e=this.points[D];M.points.push(e.toArray())}return M}fromJSON(M){super.fromJSON(M),this.points=[];for(let D=0,t=M.points.length;D<t;D++){const e=M.points[D];this.points.push(new q().fromArray(e))}return this}}zn.prototype.isSplineCurve=!0;var HA=Object.freeze({__proto__:null,ArcCurve:PA,CatmullRomCurve3:FA,CubicBezierCurve:nn,CubicBezierCurve3:GA,EllipseCurve:Je,LineCurve:MN,LineCurve3:Gu,QuadraticBezierCurve:An,QuadraticBezierCurve3:VA,SplineCurve:zn});class Vu extends wD{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(M){this.curves.push(M)}closePath(){const M=this.curves[0].getPoint(0),D=this.curves[this.curves.length-1].getPoint(1);M.equals(D)||this.curves.push(new MN(D,M))}getPoint(M,D){const t=M*this.getLength(),e=this.getCurveLengths();let N=0;for(;N<e.length;){if(e[N]>=t){const A=e[N]-t,i=this.curves[N],I=i.getLength(),z=I===0?0:1-A/I;return i.getPointAt(z,D)}N++}return null}getLength(){const M=this.getCurveLengths();return M[M.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const M=[];let D=0;for(let t=0,e=this.curves.length;t<e;t++)D+=this.curves[t].getLength(),M.push(D);return this.cacheLengths=M,M}getSpacedPoints(M=40){const D=[];for(let t=0;t<=M;t++)D.push(this.getPoint(t/M));return this.autoClose&&D.push(D[0]),D}getPoints(M=12){const D=[];let t;for(let e=0,N=this.curves;e<N.length;e++){const A=N[e],i=A&&A.isEllipseCurve?M*2:A&&(A.isLineCurve||A.isLineCurve3)?1:A&&A.isSplineCurve?M*A.points.length:M,I=A.getPoints(i);for(let z=0;z<I.length;z++){const T=I[z];t&&t.equals(T)||(D.push(T),t=T)}}return this.autoClose&&D.length>1&&!D[D.length-1].equals(D[0])&&D.push(D[0]),D}copy(M){super.copy(M),this.curves=[];for(let D=0,t=M.curves.length;D<t;D++){const e=M.curves[D];this.curves.push(e.clone())}return this.autoClose=M.autoClose,this}toJSON(){const M=super.toJSON();M.autoClose=this.autoClose,M.curves=[];for(let D=0,t=this.curves.length;D<t;D++){const e=this.curves[D];M.curves.push(e.toJSON())}return M}fromJSON(M){super.fromJSON(M),this.autoClose=M.autoClose,this.curves=[];for(let D=0,t=M.curves.length;D<t;D++){const e=M.curves[D];this.curves.push(new HA[e.type]().fromJSON(e))}return this}}class In extends Vu{constructor(M){super(),this.type="Path",this.currentPoint=new q,M&&this.setFromPoints(M)}setFromPoints(M){this.moveTo(M[0].x,M[0].y);for(let D=1,t=M.length;D<t;D++)this.lineTo(M[D].x,M[D].y);return this}moveTo(M,D){return this.currentPoint.set(M,D),this}lineTo(M,D){const t=new MN(this.currentPoint.clone(),new q(M,D));return this.curves.push(t),this.currentPoint.set(M,D),this}quadraticCurveTo(M,D,t,e){const N=new An(this.currentPoint.clone(),new q(M,D),new q(t,e));return this.curves.push(N),this.currentPoint.set(t,e),this}bezierCurveTo(M,D,t,e,N,A){const i=new nn(this.currentPoint.clone(),new q(M,D),new q(t,e),new q(N,A));return this.curves.push(i),this.currentPoint.set(N,A),this}splineThru(M){const D=[this.currentPoint.clone()].concat(M),t=new zn(D);return this.curves.push(t),this.currentPoint.copy(M[M.length-1]),this}arc(M,D,t,e,N,A){const i=this.currentPoint.x,I=this.currentPoint.y;return this.absarc(M+i,D+I,t,e,N,A),this}absarc(M,D,t,e,N,A){return this.absellipse(M,D,t,t,e,N,A),this}ellipse(M,D,t,e,N,A,i,I){const z=this.currentPoint.x,T=this.currentPoint.y;return this.absellipse(M+z,D+T,t,e,N,A,i,I),this}absellipse(M,D,t,e,N,A,i,I){const z=new Je(M,D,t,e,N,A,i,I);if(this.curves.length>0){const u=z.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(z);const T=z.getPoint(1);return this.currentPoint.copy(T),this}copy(M){return super.copy(M),this.currentPoint.copy(M.currentPoint),this}toJSON(){const M=super.toJSON();return M.currentPoint=this.currentPoint.toArray(),M}fromJSON(M){return super.fromJSON(M),this.currentPoint.fromArray(M.currentPoint),this}}class Bt extends In{constructor(M){super(M),this.uuid=vD(),this.type="Shape",this.holes=[]}getPointsHoles(M){const D=[];for(let t=0,e=this.holes.length;t<e;t++)D[t]=this.holes[t].getPoints(M);return D}extractPoints(M){return{shape:this.getPoints(M),holes:this.getPointsHoles(M)}}copy(M){super.copy(M),this.holes=[];for(let D=0,t=M.holes.length;D<t;D++){const e=M.holes[D];this.holes.push(e.clone())}return this}toJSON(){const M=super.toJSON();M.uuid=this.uuid,M.holes=[];for(let D=0,t=this.holes.length;D<t;D++){const e=this.holes[D];M.holes.push(e.toJSON())}return M}fromJSON(M){super.fromJSON(M),this.uuid=M.uuid,this.holes=[];for(let D=0,t=M.holes.length;D<t;D++){const e=M.holes[D];this.holes.push(new In().fromJSON(e))}return this}}const Hu={triangulate:function(n,M,D=2){const t=M&&M.length,e=t?M[0]*D:n.length;let N=WA(n,0,e,D,!0);const A=[];if(!N||N.next===N.prev)return A;let i,I,z,T,u,g,r;if(t&&(N=$u(n,M,N,D)),n.length>80*D){i=z=n[0],I=T=n[1];for(let j=D;j<e;j+=D)u=n[j],g=n[j+1],u<i&&(i=u),g<I&&(I=g),u>z&&(z=u),g>T&&(T=g);r=Math.max(z-i,T-I),r=r!==0?1/r:0}return se(N,A,D,i,I,r),A}};function WA(n,M,D,t,e){let N,A;if(e===Tg(n,M,D,t)>0)for(N=M;N<D;N+=t)A=JA(N,n[N],n[N+1],A);else for(N=D-t;N>=M;N-=t)A=JA(N,n[N],n[N+1],A);return A&&DN(A,A.next)&&(je(A),A=A.next),A}function nt(n,M){if(!n)return n;M||(M=n);let D=n,t;do if(t=!1,!D.steiner&&(DN(D,D.next)||WM(D.prev,D,D.next)===0)){if(je(D),D=M=D.prev,D===D.next)break;t=!0}else D=D.next;while(t||D!==M);return M}function se(n,M,D,t,e,N,A){if(!n)return;!A&&N&&Ng(n,t,e,N);let i=n,I,z;for(;n.prev!==n.next;){if(I=n.prev,z=n.next,N?qu(n,t,e,N):Wu(n)){M.push(I.i/D),M.push(n.i/D),M.push(z.i/D),je(n),n=z.next,i=z.next;continue}if(n=z,n===i){A?A===1?(n=Xu(nt(n),M,D),se(n,M,D,t,e,N,2)):A===2&&Ju(n,M,D,t,e,N):se(nt(n),M,D,t,e,N,1);break}}}function Wu(n){const M=n.prev,D=n,t=n.next;if(WM(M,D,t)>=0)return!1;let e=n.next.next;for(;e!==n.prev;){if(Gt(M.x,M.y,D.x,D.y,t.x,t.y,e.x,e.y)&&WM(e.prev,e,e.next)>=0)return!1;e=e.next}return!0}function qu(n,M,D,t){const e=n.prev,N=n,A=n.next;if(WM(e,N,A)>=0)return!1;const i=e.x<N.x?e.x<A.x?e.x:A.x:N.x<A.x?N.x:A.x,I=e.y<N.y?e.y<A.y?e.y:A.y:N.y<A.y?N.y:A.y,z=e.x>N.x?e.x>A.x?e.x:A.x:N.x>A.x?N.x:A.x,T=e.y>N.y?e.y>A.y?e.y:A.y:N.y>A.y?N.y:A.y,u=Tn(i,I,M,D,t),g=Tn(z,T,M,D,t);let r=n.prevZ,j=n.nextZ;for(;r&&r.z>=u&&j&&j.z<=g;){if(r!==n.prev&&r!==n.next&&Gt(e.x,e.y,N.x,N.y,A.x,A.y,r.x,r.y)&&WM(r.prev,r,r.next)>=0||(r=r.prevZ,j!==n.prev&&j!==n.next&&Gt(e.x,e.y,N.x,N.y,A.x,A.y,j.x,j.y)&&WM(j.prev,j,j.next)>=0))return!1;j=j.nextZ}for(;r&&r.z>=u;){if(r!==n.prev&&r!==n.next&&Gt(e.x,e.y,N.x,N.y,A.x,A.y,r.x,r.y)&&WM(r.prev,r,r.next)>=0)return!1;r=r.prevZ}for(;j&&j.z<=g;){if(j!==n.prev&&j!==n.next&&Gt(e.x,e.y,N.x,N.y,A.x,A.y,j.x,j.y)&&WM(j.prev,j,j.next)>=0)return!1;j=j.nextZ}return!0}function Xu(n,M,D){let t=n;do{const e=t.prev,N=t.next.next;!DN(e,N)&&qA(e,t,t.next,N)&&ce(e,N)&&ce(N,e)&&(M.push(e.i/D),M.push(t.i/D),M.push(N.i/D),je(t),je(t.next),t=n=N),t=t.next}while(t!==n);return nt(t)}function Ju(n,M,D,t,e,N){let A=n;do{let i=A.next.next;for(;i!==A.prev;){if(A.i!==i.i&&ig(A,i)){let I=XA(A,i);A=nt(A,A.next),I=nt(I,I.next),se(A,M,D,t,e,N),se(I,M,D,t,e,N);return}i=i.next}A=A.next}while(A!==n)}function $u(n,M,D,t){const e=[];let N,A,i,I,z;for(N=0,A=M.length;N<A;N++)i=M[N]*t,I=N<A-1?M[N+1]*t:n.length,z=WA(n,i,I,t,!1),z===z.next&&(z.steiner=!0),e.push(Ag(z));for(e.sort(Mg),N=0;N<e.length;N++)Dg(e[N],D),D=nt(D,D.next);return D}function Mg(n,M){return n.x-M.x}function Dg(n,M){if(M=tg(n,M),M){const D=XA(M,n);nt(M,M.next),nt(D,D.next)}}function tg(n,M){let D=M;const t=n.x,e=n.y;let N=-1/0,A;do{if(e<=D.y&&e>=D.next.y&&D.next.y!==D.y){const g=D.x+(e-D.y)*(D.next.x-D.x)/(D.next.y-D.y);if(g<=t&&g>N){if(N=g,g===t){if(e===D.y)return D;if(e===D.next.y)return D.next}A=D.x<D.next.x?D:D.next}}D=D.next}while(D!==M);if(!A)return null;if(t===N)return A;const i=A,I=A.x,z=A.y;let T=1/0,u;D=A;do t>=D.x&&D.x>=I&&t!==D.x&&Gt(e<z?t:N,e,I,z,e<z?N:t,e,D.x,D.y)&&(u=Math.abs(e-D.y)/(t-D.x),ce(D,n)&&(u<T||u===T&&(D.x>A.x||D.x===A.x&&eg(A,D)))&&(A=D,T=u)),D=D.next;while(D!==i);return A}function eg(n,M){return WM(n.prev,n,M.prev)<0&&WM(M.next,n,n.next)<0}function Ng(n,M,D,t){let e=n;do e.z===null&&(e.z=Tn(e.x,e.y,M,D,t)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==n);e.prevZ.nextZ=null,e.prevZ=null,ng(e)}function ng(n){let M,D,t,e,N,A,i,I,z=1;do{for(D=n,n=null,N=null,A=0;D;){for(A++,t=D,i=0,M=0;M<z&&(i++,t=t.nextZ,!!t);M++);for(I=z;i>0||I>0&&t;)i!==0&&(I===0||!t||D.z<=t.z)?(e=D,D=D.nextZ,i--):(e=t,t=t.nextZ,I--),N?N.nextZ=e:n=e,e.prevZ=N,N=e;D=t}N.nextZ=null,z*=2}while(A>1);return n}function Tn(n,M,D,t,e){return n=32767*(n-D)*e,M=32767*(M-t)*e,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,M=(M|M<<8)&16711935,M=(M|M<<4)&252645135,M=(M|M<<2)&858993459,M=(M|M<<1)&1431655765,n|M<<1}function Ag(n){let M=n,D=n;do(M.x<D.x||M.x===D.x&&M.y<D.y)&&(D=M),M=M.next;while(M!==n);return D}function Gt(n,M,D,t,e,N,A,i){return(e-A)*(M-i)-(n-A)*(N-i)>=0&&(n-A)*(t-i)-(D-A)*(M-i)>=0&&(D-A)*(N-i)-(e-A)*(t-i)>=0}function ig(n,M){return n.next.i!==M.i&&n.prev.i!==M.i&&!zg(n,M)&&(ce(n,M)&&ce(M,n)&&Ig(n,M)&&(WM(n.prev,n,M.prev)||WM(n,M.prev,M))||DN(n,M)&&WM(n.prev,n,n.next)>0&&WM(M.prev,M,M.next)>0)}function WM(n,M,D){return(M.y-n.y)*(D.x-M.x)-(M.x-n.x)*(D.y-M.y)}function DN(n,M){return n.x===M.x&&n.y===M.y}function qA(n,M,D,t){const e=eN(WM(n,M,D)),N=eN(WM(n,M,t)),A=eN(WM(D,t,n)),i=eN(WM(D,t,M));return!!(e!==N&&A!==i||e===0&&tN(n,D,M)||N===0&&tN(n,t,M)||A===0&&tN(D,n,t)||i===0&&tN(D,M,t))}function tN(n,M,D){return M.x<=Math.max(n.x,D.x)&&M.x>=Math.min(n.x,D.x)&&M.y<=Math.max(n.y,D.y)&&M.y>=Math.min(n.y,D.y)}function eN(n){return n>0?1:n<0?-1:0}function zg(n,M){let D=n;do{if(D.i!==n.i&&D.next.i!==n.i&&D.i!==M.i&&D.next.i!==M.i&&qA(D,D.next,n,M))return!0;D=D.next}while(D!==n);return!1}function ce(n,M){return WM(n.prev,n,n.next)<0?WM(n,M,n.next)>=0&&WM(n,n.prev,M)>=0:WM(n,M,n.prev)<0||WM(n,n.next,M)<0}function Ig(n,M){let D=n,t=!1;const e=(n.x+M.x)/2,N=(n.y+M.y)/2;do D.y>N!=D.next.y>N&&D.next.y!==D.y&&e<(D.next.x-D.x)*(N-D.y)/(D.next.y-D.y)+D.x&&(t=!t),D=D.next;while(D!==n);return t}function XA(n,M){const D=new un(n.i,n.x,n.y),t=new un(M.i,M.x,M.y),e=n.next,N=M.prev;return n.next=M,M.prev=n,D.next=e,e.prev=D,t.next=D,D.prev=t,N.next=t,t.prev=N,t}function JA(n,M,D,t){const e=new un(n,M,D);return t?(e.next=t.next,e.prev=t,t.next.prev=e,t.next=e):(e.prev=e,e.next=e),e}function je(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function un(n,M,D){this.i=n,this.x=M,this.y=D,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tg(n,M,D,t){let e=0;for(let N=M,A=D-t;N<D;N+=t)e+=(n[A]-n[N])*(n[N+1]+n[A+1]),A=N;return e}class At{static area(M){const D=M.length;let t=0;for(let e=D-1,N=0;N<D;e=N++)t+=M[e].x*M[N].y-M[N].x*M[e].y;return t*.5}static isClockWise(M){return At.area(M)<0}static triangulateShape(M,D){const t=[],e=[],N=[];$A(M),Mi(t,M);let A=M.length;D.forEach($A);for(let I=0;I<D.length;I++)e.push(A),A+=D[I].length,Mi(t,D[I]);const i=Hu.triangulate(t,e);for(let I=0;I<i.length;I+=3)N.push(i.slice(I,I+3));return N}}function $A(n){const M=n.length;M>2&&n[M-1].equals(n[0])&&n.pop()}function Mi(n,M){for(let D=0;D<M.length;D++)n.push(M[D].x),n.push(M[D].y)}class Vt extends BM{constructor(M=new Bt([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),D={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:M,options:D},M=Array.isArray(M)?M:[M];const t=this,e=[],N=[];for(let i=0,I=M.length;i<I;i++){const z=M[i];A(z)}this.setAttribute("position",new VM(e,3)),this.setAttribute("uv",new VM(N,2)),this.computeVertexNormals();function A(i){const I=[],z=D.curveSegments!==void 0?D.curveSegments:12,T=D.steps!==void 0?D.steps:1;let u=D.depth!==void 0?D.depth:1,g=D.bevelEnabled!==void 0?D.bevelEnabled:!0,r=D.bevelThickness!==void 0?D.bevelThickness:.2,j=D.bevelSize!==void 0?D.bevelSize:r-.1,y=D.bevelOffset!==void 0?D.bevelOffset:0,o=D.bevelSegments!==void 0?D.bevelSegments:3;const c=D.extrudePath,s=D.UVGenerator!==void 0?D.UVGenerator:ug;D.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=D.amount);let l,C=!1,E,v,h,F;c&&(l=c.getSpacedPoints(T),C=!0,g=!1,E=c.computeFrenetFrames(T,!1),v=new O,h=new O,F=new O),g||(o=0,r=0,j=0,y=0);const MM=i.extractPoints(z);let Z=MM.shape;const a=MM.holes;if(!At.isClockWise(Z)){Z=Z.reverse();for(let B=0,$=a.length;B<$;B++){const X=a[B];At.isClockWise(X)&&(a[B]=X.reverse())}}const Y=At.triangulateShape(Z,a),k=Z;for(let B=0,$=a.length;B<$;B++){const X=a[B];Z=Z.concat(X)}function f(B,$,X){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(X).add(B)}const Q=Z.length,K=Y.length;function W(B,$,X){let zM,nM,CM;const xM=B.x-$.x,QM=B.y-$.y,GM=X.x-B.x,RM=X.y-B.y,x=xM*xM+QM*QM,L=xM*RM-QM*GM;if(Math.abs(L)>Number.EPSILON){const P=Math.sqrt(x),J=Math.sqrt(GM*GM+RM*RM),gM=$.x-QM/P,R=$.y+xM/P,yM=X.x-RM/J,sM=X.y+GM/J,NM=((yM-gM)*RM-(sM-R)*GM)/(xM*RM-QM*GM);zM=gM+xM*NM-B.x,nM=R+QM*NM-B.y;const tM=zM*zM+nM*nM;if(tM<=2)return new q(zM,nM);CM=Math.sqrt(tM/2)}else{let P=!1;xM>Number.EPSILON?GM>Number.EPSILON&&(P=!0):xM<-Number.EPSILON?GM<-Number.EPSILON&&(P=!0):Math.sign(QM)===Math.sign(RM)&&(P=!0),P?(zM=-QM,nM=xM,CM=Math.sqrt(x)):(zM=xM,nM=QM,CM=Math.sqrt(x/2))}return new q(zM/CM,nM/CM)}const IM=[];for(let B=0,$=k.length,X=$-1,zM=B+1;B<$;B++,X++,zM++)X===$&&(X=0),zM===$&&(zM=0),IM[B]=W(k[B],k[X],k[zM]);const _=[];let H,eM=IM.concat();for(let B=0,$=a.length;B<$;B++){const X=a[B];H=[];for(let zM=0,nM=X.length,CM=nM-1,xM=zM+1;zM<nM;zM++,CM++,xM++)CM===nM&&(CM=0),xM===nM&&(xM=0),H[zM]=W(X[zM],X[CM],X[xM]);_.push(H),eM=eM.concat(H)}for(let B=0;B<o;B++){const $=B/o,X=r*Math.cos($*Math.PI/2),zM=j*Math.sin($*Math.PI/2)+y;for(let nM=0,CM=k.length;nM<CM;nM++){const xM=f(k[nM],IM[nM],zM);rM(xM.x,xM.y,-X)}for(let nM=0,CM=a.length;nM<CM;nM++){const xM=a[nM];H=_[nM];for(let QM=0,GM=xM.length;QM<GM;QM++){const RM=f(xM[QM],H[QM],zM);rM(RM.x,RM.y,-X)}}}const uM=j+y;for(let B=0;B<Q;B++){const $=g?f(Z[B],eM[B],uM):Z[B];C?(h.copy(E.normals[0]).multiplyScalar($.x),v.copy(E.binormals[0]).multiplyScalar($.y),F.copy(l[0]).add(h).add(v),rM(F.x,F.y,F.z)):rM($.x,$.y,0)}for(let B=1;B<=T;B++)for(let $=0;$<Q;$++){const X=g?f(Z[$],eM[$],uM):Z[$];C?(h.copy(E.normals[B]).multiplyScalar(X.x),v.copy(E.binormals[B]).multiplyScalar(X.y),F.copy(l[B]).add(h).add(v),rM(F.x,F.y,F.z)):rM(X.x,X.y,u/T*B)}for(let B=o-1;B>=0;B--){const $=B/o,X=r*Math.cos($*Math.PI/2),zM=j*Math.sin($*Math.PI/2)+y;for(let nM=0,CM=k.length;nM<CM;nM++){const xM=f(k[nM],IM[nM],zM);rM(xM.x,xM.y,u+X)}for(let nM=0,CM=a.length;nM<CM;nM++){const xM=a[nM];H=_[nM];for(let QM=0,GM=xM.length;QM<GM;QM++){const RM=f(xM[QM],H[QM],zM);C?rM(RM.x,RM.y+l[T-1].y,l[T-1].x+X):rM(RM.x,RM.y,u+X)}}}jM(),b();function jM(){const B=e.length/3;if(g){let $=0,X=Q*$;for(let zM=0;zM<K;zM++){const nM=Y[zM];wM(nM[2]+X,nM[1]+X,nM[0]+X)}$=T+o*2,X=Q*$;for(let zM=0;zM<K;zM++){const nM=Y[zM];wM(nM[0]+X,nM[1]+X,nM[2]+X)}}else{for(let $=0;$<K;$++){const X=Y[$];wM(X[2],X[1],X[0])}for(let $=0;$<K;$++){const X=Y[$];wM(X[0]+Q*T,X[1]+Q*T,X[2]+Q*T)}}t.addGroup(B,e.length/3-B,0)}function b(){const B=e.length/3;let $=0;kM(k,$),$+=k.length;for(let X=0,zM=a.length;X<zM;X++){const nM=a[X];kM(nM,$),$+=nM.length}t.addGroup(B,e.length/3-B,1)}function kM(B,$){let X=B.length;for(;--X>=0;){const zM=X;let nM=X-1;nM<0&&(nM=B.length-1);for(let CM=0,xM=T+o*2;CM<xM;CM++){const QM=Q*CM,GM=Q*(CM+1),RM=$+zM+QM,x=$+nM+QM,L=$+nM+GM,P=$+zM+GM;iM(RM,x,L,P)}}}function rM(B,$,X){I.push(B),I.push($),I.push(X)}function wM(B,$,X){vM(B),vM($),vM(X);const zM=e.length/3,nM=s.generateTopUV(t,e,zM-3,zM-2,zM-1);OM(nM[0]),OM(nM[1]),OM(nM[2])}function iM(B,$,X,zM){vM(B),vM($),vM(zM),vM($),vM(X),vM(zM);const nM=e.length/3,CM=s.generateSideWallUV(t,e,nM-6,nM-3,nM-2,nM-1);OM(CM[0]),OM(CM[1]),OM(CM[3]),OM(CM[1]),OM(CM[2]),OM(CM[3])}function vM(B){e.push(I[B*3+0]),e.push(I[B*3+1]),e.push(I[B*3+2])}function OM(B){N.push(B.x),N.push(B.y)}}}toJSON(){const M=super.toJSON(),D=this.parameters.shapes,t=this.parameters.options;return gg(D,t,M)}static fromJSON(M,D){const t=[];for(let N=0,A=M.shapes.length;N<A;N++){const i=D[M.shapes[N]];t.push(i)}const e=M.options.extrudePath;return e!==void 0&&(M.options.extrudePath=new HA[e.type]().fromJSON(e)),new Vt(t,M.options)}}const ug={generateTopUV:function(n,M,D,t,e){const N=M[D*3],A=M[D*3+1],i=M[t*3],I=M[t*3+1],z=M[e*3],T=M[e*3+1];return[new q(N,A),new q(i,I),new q(z,T)]},generateSideWallUV:function(n,M,D,t,e,N){const A=M[D*3],i=M[D*3+1],I=M[D*3+2],z=M[t*3],T=M[t*3+1],u=M[t*3+2],g=M[e*3],r=M[e*3+1],j=M[e*3+2],y=M[N*3],o=M[N*3+1],c=M[N*3+2];return Math.abs(i-T)<Math.abs(A-z)?[new q(A,1-I),new q(z,1-u),new q(g,1-j),new q(y,1-c)]:[new q(i,1-I),new q(T,1-u),new q(r,1-j),new q(o,1-c)]}};function gg(n,M,D){if(D.shapes=[],Array.isArray(n))for(let t=0,e=n.length;t<e;t++){const N=n[t];D.shapes.push(N.uuid)}else D.shapes.push(n.uuid);return M.extrudePath!==void 0&&(D.options.extrudePath=M.extrudePath.toJSON()),D}class NN extends BM{constructor(M=new Bt([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),D=12){super(),this.type="ShapeGeometry",this.parameters={shapes:M,curveSegments:D};const t=[],e=[],N=[],A=[];let i=0,I=0;if(Array.isArray(M)===!1)z(M);else for(let T=0;T<M.length;T++)z(M[T]),this.addGroup(i,I,T),i+=I,I=0;this.setIndex(t),this.setAttribute("position",new VM(e,3)),this.setAttribute("normal",new VM(N,3)),this.setAttribute("uv",new VM(A,2));function z(T){const u=e.length/3,g=T.extractPoints(D);let r=g.shape;const j=g.holes;At.isClockWise(r)===!1&&(r=r.reverse());for(let o=0,c=j.length;o<c;o++){const s=j[o];At.isClockWise(s)===!0&&(j[o]=s.reverse())}const y=At.triangulateShape(r,j);for(let o=0,c=j.length;o<c;o++){const s=j[o];r=r.concat(s)}for(let o=0,c=r.length;o<c;o++){const s=r[o];e.push(s.x,s.y,0),N.push(0,0,1),A.push(s.x,s.y)}for(let o=0,c=y.length;o<c;o++){const s=y[o],l=s[0]+u,C=s[1]+u,E=s[2]+u;t.push(l,C,E),I+=3}}}toJSON(){const M=super.toJSON(),D=this.parameters.shapes;return rg(D,M)}static fromJSON(M,D){const t=[];for(let e=0,N=M.shapes.length;e<N;e++){const A=D[M.shapes[e]];t.push(A)}return new NN(t,M.curveSegments)}}function rg(n,M){if(M.shapes=[],Array.isArray(n))for(let D=0,t=n.length;D<t;D++){const e=n[D];M.shapes.push(e.uuid)}else M.shapes.push(n.uuid);return M}class sg extends nD{constructor(M){super(),this.type="ShadowMaterial",this.color=new cM(0),this.transparent=!0,this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this}}sg.prototype.isShadowMaterial=!0;class Di extends nD{constructor(M){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new cM(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new cM(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(M)}copy(M){return super.copy(M),this.defines={STANDARD:""},this.color.copy(M.color),this.roughness=M.roughness,this.metalness=M.metalness,this.map=M.map,this.lightMap=M.lightMap,this.lightMapIntensity=M.lightMapIntensity,this.aoMap=M.aoMap,this.aoMapIntensity=M.aoMapIntensity,this.emissive.copy(M.emissive),this.emissiveMap=M.emissiveMap,this.emissiveIntensity=M.emissiveIntensity,this.bumpMap=M.bumpMap,this.bumpScale=M.bumpScale,this.normalMap=M.normalMap,this.normalMapType=M.normalMapType,this.normalScale.copy(M.normalScale),this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.roughnessMap=M.roughnessMap,this.metalnessMap=M.metalnessMap,this.alphaMap=M.alphaMap,this.envMap=M.envMap,this.envMapIntensity=M.envMapIntensity,this.refractionRatio=M.refractionRatio,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.wireframeLinecap=M.wireframeLinecap,this.wireframeLinejoin=M.wireframeLinejoin,this.flatShading=M.flatShading,this}}Di.prototype.isMeshStandardMaterial=!0;class cg extends Di{constructor(M){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cD(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(D){this.ior=(1+.4*D)/(1-.4*D)}}),this.sheenColor=new cM(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new cM(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new cM(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(M)}get sheen(){return this._sheen}set sheen(M){this._sheen>0!=M>0&&this.version++,this._sheen=M}get clearcoat(){return this._clearcoat}set clearcoat(M){this._clearcoat>0!=M>0&&this.version++,this._clearcoat=M}get transmission(){return this._transmission}set transmission(M){this._transmission>0!=M>0&&this.version++,this._transmission=M}copy(M){return super.copy(M),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=M.clearcoat,this.clearcoatMap=M.clearcoatMap,this.clearcoatRoughness=M.clearcoatRoughness,this.clearcoatRoughnessMap=M.clearcoatRoughnessMap,this.clearcoatNormalMap=M.clearcoatNormalMap,this.clearcoatNormalScale.copy(M.clearcoatNormalScale),this.ior=M.ior,this.sheen=M.sheen,this.sheenColor.copy(M.sheenColor),this.sheenColorMap=M.sheenColorMap,this.sheenRoughness=M.sheenRoughness,this.sheenRoughnessMap=M.sheenRoughnessMap,this.transmission=M.transmission,this.transmissionMap=M.transmissionMap,this.thickness=M.thickness,this.thicknessMap=M.thicknessMap,this.attenuationDistance=M.attenuationDistance,this.attenuationColor.copy(M.attenuationColor),this.specularIntensity=M.specularIntensity,this.specularIntensityMap=M.specularIntensityMap,this.specularColor.copy(M.specularColor),this.specularColorMap=M.specularColorMap,this}}cg.prototype.isMeshPhysicalMaterial=!0;class ti extends nD{constructor(M){super(),this.type="MeshPhongMaterial",this.color=new cM(16777215),this.specular=new cM(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new cM(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.specular.copy(M.specular),this.shininess=M.shininess,this.map=M.map,this.lightMap=M.lightMap,this.lightMapIntensity=M.lightMapIntensity,this.aoMap=M.aoMap,this.aoMapIntensity=M.aoMapIntensity,this.emissive.copy(M.emissive),this.emissiveMap=M.emissiveMap,this.emissiveIntensity=M.emissiveIntensity,this.bumpMap=M.bumpMap,this.bumpScale=M.bumpScale,this.normalMap=M.normalMap,this.normalMapType=M.normalMapType,this.normalScale.copy(M.normalScale),this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.specularMap=M.specularMap,this.alphaMap=M.alphaMap,this.envMap=M.envMap,this.combine=M.combine,this.reflectivity=M.reflectivity,this.refractionRatio=M.refractionRatio,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.wireframeLinecap=M.wireframeLinecap,this.wireframeLinejoin=M.wireframeLinejoin,this.flatShading=M.flatShading,this}}ti.prototype.isMeshPhongMaterial=!0;class jg extends nD{constructor(M){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new cM(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new cM(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.map=M.map,this.gradientMap=M.gradientMap,this.lightMap=M.lightMap,this.lightMapIntensity=M.lightMapIntensity,this.aoMap=M.aoMap,this.aoMapIntensity=M.aoMapIntensity,this.emissive.copy(M.emissive),this.emissiveMap=M.emissiveMap,this.emissiveIntensity=M.emissiveIntensity,this.bumpMap=M.bumpMap,this.bumpScale=M.bumpScale,this.normalMap=M.normalMap,this.normalMapType=M.normalMapType,this.normalScale.copy(M.normalScale),this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.alphaMap=M.alphaMap,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.wireframeLinecap=M.wireframeLinecap,this.wireframeLinejoin=M.wireframeLinejoin,this}}jg.prototype.isMeshToonMaterial=!0;class yg extends nD{constructor(M){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(M)}copy(M){return super.copy(M),this.bumpMap=M.bumpMap,this.bumpScale=M.bumpScale,this.normalMap=M.normalMap,this.normalMapType=M.normalMapType,this.normalScale.copy(M.normalScale),this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.flatShading=M.flatShading,this}}yg.prototype.isMeshNormalMaterial=!0;class gn extends nD{constructor(M){super(),this.type="MeshLambertMaterial",this.color=new cM(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new cM(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(M)}copy(M){return super.copy(M),this.color.copy(M.color),this.map=M.map,this.lightMap=M.lightMap,this.lightMapIntensity=M.lightMapIntensity,this.aoMap=M.aoMap,this.aoMapIntensity=M.aoMapIntensity,this.emissive.copy(M.emissive),this.emissiveMap=M.emissiveMap,this.emissiveIntensity=M.emissiveIntensity,this.specularMap=M.specularMap,this.alphaMap=M.alphaMap,this.envMap=M.envMap,this.combine=M.combine,this.reflectivity=M.reflectivity,this.refractionRatio=M.refractionRatio,this.wireframe=M.wireframe,this.wireframeLinewidth=M.wireframeLinewidth,this.wireframeLinecap=M.wireframeLinecap,this.wireframeLinejoin=M.wireframeLinejoin,this}}gn.prototype.isMeshLambertMaterial=!0;class ag extends nD{constructor(M){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new cM(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(M)}copy(M){return super.copy(M),this.defines={MATCAP:""},this.color.copy(M.color),this.matcap=M.matcap,this.map=M.map,this.bumpMap=M.bumpMap,this.bumpScale=M.bumpScale,this.normalMap=M.normalMap,this.normalMapType=M.normalMapType,this.normalScale.copy(M.normalScale),this.displacementMap=M.displacementMap,this.displacementScale=M.displacementScale,this.displacementBias=M.displacementBias,this.alphaMap=M.alphaMap,this.flatShading=M.flatShading,this}}ag.prototype.isMeshMatcapMaterial=!0;class og extends Nt{constructor(M){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(M)}copy(M){return super.copy(M),this.scale=M.scale,this.dashSize=M.dashSize,this.gapSize=M.gapSize,this}}og.prototype.isLineDashedMaterial=!0;const HM={arraySlice:function(n,M,D){return HM.isTypedArray(n)?new n.constructor(n.subarray(M,D!==void 0?D:n.length)):n.slice(M,D)},convertArray:function(n,M,D){return!n||!D&&n.constructor===M?n:typeof M.BYTES_PER_ELEMENT=="number"?new M(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function M(e,N){return n[e]-n[N]}const D=n.length,t=new Array(D);for(let e=0;e!==D;++e)t[e]=e;return t.sort(M),t},sortedArray:function(n,M,D){const t=n.length,e=new n.constructor(t);for(let N=0,A=0;A!==t;++N){const i=D[N]*M;for(let I=0;I!==M;++I)e[A++]=n[i+I]}return e},flattenJSON:function(n,M,D,t){let e=1,N=n[0];for(;N!==void 0&&N[t]===void 0;)N=n[e++];if(N===void 0)return;let A=N[t];if(A!==void 0)if(Array.isArray(A))do A=N[t],A!==void 0&&(M.push(N.time),D.push.apply(D,A)),N=n[e++];while(N!==void 0);else if(A.toArray!==void 0)do A=N[t],A!==void 0&&(M.push(N.time),A.toArray(D,D.length)),N=n[e++];while(N!==void 0);else do A=N[t],A!==void 0&&(M.push(N.time),D.push(A)),N=n[e++];while(N!==void 0)},subclip:function(n,M,D,t,e=30){const N=n.clone();N.name=M;const A=[];for(let I=0;I<N.tracks.length;++I){const z=N.tracks[I],T=z.getValueSize(),u=[],g=[];for(let r=0;r<z.times.length;++r){const j=z.times[r]*e;if(!(j<D||j>=t)){u.push(z.times[r]);for(let y=0;y<T;++y)g.push(z.values[r*T+y])}}u.length!==0&&(z.times=HM.convertArray(u,z.times.constructor),z.values=HM.convertArray(g,z.values.constructor),A.push(z))}N.tracks=A;let i=1/0;for(let I=0;I<N.tracks.length;++I)i>N.tracks[I].times[0]&&(i=N.tracks[I].times[0]);for(let I=0;I<N.tracks.length;++I)N.tracks[I].shift(-1*i);return N.resetDuration(),N},makeClipAdditive:function(n,M=0,D=n,t=30){t<=0&&(t=30);const e=D.tracks.length,N=M/t;for(let A=0;A<e;++A){const i=D.tracks[A],I=i.ValueTypeName;if(I==="bool"||I==="string")continue;const z=n.tracks.find(function(c){return c.name===i.name&&c.ValueTypeName===I});if(z===void 0)continue;let T=0;const u=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(T=u/3);let g=0;const r=z.getValueSize();z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=r/3);const j=i.times.length-1;let y;if(N<=i.times[0]){const c=T,s=u-T;y=HM.arraySlice(i.values,c,s)}else if(N>=i.times[j]){const c=j*u+T,s=c+u-T;y=HM.arraySlice(i.values,c,s)}else{const c=i.createInterpolant(),s=T,l=u-T;c.evaluate(N),y=HM.arraySlice(c.resultBuffer,s,l)}I==="quaternion"&&new sD().fromArray(y).normalize().conjugate().toArray(y);const o=z.times.length;for(let c=0;c<o;++c){const s=c*r+g;if(I==="quaternion")sD.multiplyQuaternionsFlat(z.values,s,y,0,z.values,s);else{const l=r-g*2;for(let C=0;C<l;++C)z.values[s+C]-=y[C]}}}return n.blendMode=2501,n}};class it{constructor(M,D,t,e){this.parameterPositions=M,this._cachedIndex=0,this.resultBuffer=e!==void 0?e:new D.constructor(t),this.sampleValues=D,this.valueSize=t,this.settings=null,this.DefaultSettings_={}}evaluate(M){const D=this.parameterPositions;let t=this._cachedIndex,e=D[t],N=D[t-1];M:{D:{let A;t:{e:if(!(M<e)){for(let i=t+2;;){if(e===void 0){if(M<N)break e;return t=D.length,this._cachedIndex=t,this.afterEnd_(t-1,M,N)}if(t===i)break;if(N=e,e=D[++t],M<e)break D}A=D.length;break t}if(!(M>=N)){const i=D[1];M<i&&(t=2,N=i);for(let I=t-2;;){if(N===void 0)return this._cachedIndex=0,this.beforeStart_(0,M,e);if(t===I)break;if(e=N,N=D[--t-1],M>=N)break D}A=t,t=0;break t}break M}for(;t<A;){const i=t+A>>>1;M<D[i]?A=i:t=i+1}if(e=D[t],N=D[t-1],N===void 0)return this._cachedIndex=0,this.beforeStart_(0,M,e);if(e===void 0)return t=D.length,this._cachedIndex=t,this.afterEnd_(t-1,N,M)}this._cachedIndex=t,this.intervalChanged_(t,N,e)}return this.interpolate_(t,N,M,e)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(M){const D=this.resultBuffer,t=this.sampleValues,e=this.valueSize,N=M*e;for(let A=0;A!==e;++A)D[A]=t[N+A];return D}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}it.prototype.beforeStart_=it.prototype.copySampleValue_,it.prototype.afterEnd_=it.prototype.copySampleValue_;class Cg extends it{constructor(M,D,t,e){super(M,D,t,e),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(M,D,t){const e=this.parameterPositions;let N=M-2,A=M+1,i=e[N],I=e[A];if(i===void 0)switch(this.getSettings_().endingStart){case 2401:N=M,i=2*D-t;break;case 2402:N=e.length-2,i=D+e[N]-e[N+1];break;default:N=M,i=t}if(I===void 0)switch(this.getSettings_().endingEnd){case 2401:A=M,I=2*t-D;break;case 2402:A=1,I=t+e[1]-e[0];break;default:A=M-1,I=D}const z=(t-D)*.5,T=this.valueSize;this._weightPrev=z/(D-i),this._weightNext=z/(I-t),this._offsetPrev=N*T,this._offsetNext=A*T}interpolate_(M,D,t,e){const N=this.resultBuffer,A=this.sampleValues,i=this.valueSize,I=M*i,z=I-i,T=this._offsetPrev,u=this._offsetNext,g=this._weightPrev,r=this._weightNext,j=(t-D)/(e-D),y=j*j,o=y*j,c=-g*o+2*g*y-g*j,s=(1+g)*o+(-1.5-2*g)*y+(-.5+g)*j+1,l=(-1-r)*o+(1.5+r)*y+.5*j,C=r*o-r*y;for(let E=0;E!==i;++E)N[E]=c*A[T+E]+s*A[z+E]+l*A[I+E]+C*A[u+E];return N}}class ei extends it{constructor(M,D,t,e){super(M,D,t,e)}interpolate_(M,D,t,e){const N=this.resultBuffer,A=this.sampleValues,i=this.valueSize,I=M*i,z=I-i,T=(t-D)/(e-D),u=1-T;for(let g=0;g!==i;++g)N[g]=A[z+g]*u+A[I+g]*T;return N}}class Lg extends it{constructor(M,D,t,e){super(M,D,t,e)}interpolate_(M){return this.copySampleValue_(M-1)}}class YD{constructor(M,D,t,e){if(M===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(D===void 0||D.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+M);this.name=M,this.times=HM.convertArray(D,this.TimeBufferType),this.values=HM.convertArray(t,this.ValueBufferType),this.setInterpolation(e||this.DefaultInterpolation)}static toJSON(M){const D=M.constructor;let t;if(D.toJSON!==this.toJSON)t=D.toJSON(M);else{t={name:M.name,times:HM.convertArray(M.times,Array),values:HM.convertArray(M.values,Array)};const e=M.getInterpolation();e!==M.DefaultInterpolation&&(t.interpolation=e)}return t.type=M.ValueTypeName,t}InterpolantFactoryMethodDiscrete(M){return new Lg(this.times,this.values,this.getValueSize(),M)}InterpolantFactoryMethodLinear(M){return new ei(this.times,this.values,this.getValueSize(),M)}InterpolantFactoryMethodSmooth(M){return new Cg(this.times,this.values,this.getValueSize(),M)}setInterpolation(M){let D;switch(M){case 2300:D=this.InterpolantFactoryMethodDiscrete;break;case 2301:D=this.InterpolantFactoryMethodLinear;break;case 2302:D=this.InterpolantFactoryMethodSmooth;break}if(D===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(M!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=D,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(M){if(M!==0){const D=this.times;for(let t=0,e=D.length;t!==e;++t)D[t]+=M}return this}scale(M){if(M!==1){const D=this.times;for(let t=0,e=D.length;t!==e;++t)D[t]*=M}return this}trim(M,D){const t=this.times,e=t.length;let N=0,A=e-1;for(;N!==e&&t[N]<M;)++N;for(;A!==-1&&t[A]>D;)--A;if(++A,N!==0||A!==e){N>=A&&(A=Math.max(A,1),N=A-1);const i=this.getValueSize();this.times=HM.arraySlice(t,N,A),this.values=HM.arraySlice(this.values,N*i,A*i)}return this}validate(){let M=!0;const D=this.getValueSize();D-Math.floor(D)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),M=!1);const t=this.times,e=this.values,N=t.length;N===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),M=!1);let A=null;for(let i=0;i!==N;i++){const I=t[i];if(typeof I=="number"&&isNaN(I)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,I),M=!1;break}if(A!==null&&A>I){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,I,A),M=!1;break}A=I}if(e!==void 0&&HM.isTypedArray(e))for(let i=0,I=e.length;i!==I;++i){const z=e[i];if(isNaN(z)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,z),M=!1;break}}return M}optimize(){const M=HM.arraySlice(this.times),D=HM.arraySlice(this.values),t=this.getValueSize(),e=this.getInterpolation()===2302,N=M.length-1;let A=1;for(let i=1;i<N;++i){let I=!1;const z=M[i],T=M[i+1];if(z!==T&&(i!==1||z!==M[0]))if(e)I=!0;else{const u=i*t,g=u-t,r=u+t;for(let j=0;j!==t;++j){const y=D[u+j];if(y!==D[g+j]||y!==D[r+j]){I=!0;break}}}if(I){if(i!==A){M[A]=M[i];const u=i*t,g=A*t;for(let r=0;r!==t;++r)D[g+r]=D[u+r]}++A}}if(N>0){M[A]=M[N];for(let i=N*t,I=A*t,z=0;z!==t;++z)D[I+z]=D[i+z];++A}return A!==M.length?(this.times=HM.arraySlice(M,0,A),this.values=HM.arraySlice(D,0,A*t)):(this.times=M,this.values=D),this}clone(){const M=HM.arraySlice(this.times,0),D=HM.arraySlice(this.values,0),t=this.constructor,e=new t(this.name,M,D);return e.createInterpolant=this.createInterpolant,e}}YD.prototype.TimeBufferType=Float32Array,YD.prototype.ValueBufferType=Float32Array,YD.prototype.DefaultInterpolation=2301;class Ht extends YD{}Ht.prototype.ValueTypeName="bool",Ht.prototype.ValueBufferType=Array,Ht.prototype.DefaultInterpolation=2300,Ht.prototype.InterpolantFactoryMethodLinear=void 0,Ht.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends YD{}Ni.prototype.ValueTypeName="color";class nN extends YD{}nN.prototype.ValueTypeName="number";class wg extends it{constructor(M,D,t,e){super(M,D,t,e)}interpolate_(M,D,t,e){const N=this.resultBuffer,A=this.sampleValues,i=this.valueSize,I=(t-D)/(e-D);let z=M*i;for(let T=z+i;z!==T;z+=4)sD.slerpFlat(N,0,A,z-i,A,z,I);return N}}class ye extends YD{InterpolantFactoryMethodLinear(M){return new wg(this.times,this.values,this.getValueSize(),M)}}ye.prototype.ValueTypeName="quaternion",ye.prototype.DefaultInterpolation=2301,ye.prototype.InterpolantFactoryMethodSmooth=void 0;class Wt extends YD{}Wt.prototype.ValueTypeName="string",Wt.prototype.ValueBufferType=Array,Wt.prototype.DefaultInterpolation=2300,Wt.prototype.InterpolantFactoryMethodLinear=void 0,Wt.prototype.InterpolantFactoryMethodSmooth=void 0;class AN extends YD{}AN.prototype.ValueTypeName="vector";class ni{constructor(M,D=-1,t,e=2500){this.name=M,this.tracks=t,this.duration=D,this.blendMode=e,this.uuid=vD(),this.duration<0&&this.resetDuration()}static parse(M){const D=[],t=M.tracks,e=1/(M.fps||1);for(let A=0,i=t.length;A!==i;++A)D.push(xg(t[A]).scale(e));const N=new this(M.name,M.duration,D,M.blendMode);return N.uuid=M.uuid,N}static toJSON(M){const D=[],t=M.tracks,e={name:M.name,duration:M.duration,tracks:D,uuid:M.uuid,blendMode:M.blendMode};for(let N=0,A=t.length;N!==A;++N)D.push(YD.toJSON(t[N]));return e}static CreateFromMorphTargetSequence(M,D,t,e){const N=D.length,A=[];for(let i=0;i<N;i++){let I=[],z=[];I.push((i+N-1)%N,i,(i+1)%N),z.push(0,1,0);const T=HM.getKeyframeOrder(I);I=HM.sortedArray(I,1,T),z=HM.sortedArray(z,1,T),!e&&I[0]===0&&(I.push(N),z.push(z[0])),A.push(new nN(".morphTargetInfluences["+D[i].name+"]",I,z).scale(1/t))}return new this(M,-1,A)}static findByName(M,D){let t=M;if(!Array.isArray(M)){const e=M;t=e.geometry&&e.geometry.animations||e.animations}for(let e=0;e<t.length;e++)if(t[e].name===D)return t[e];return null}static CreateClipsFromMorphTargetSequences(M,D,t){const e={},N=/^([\w-]*?)([\d]+)$/;for(let i=0,I=M.length;i<I;i++){const z=M[i],T=z.name.match(N);if(T&&T.length>1){const u=T[1];let g=e[u];g||(e[u]=g=[]),g.push(z)}}const A=[];for(const i in e)A.push(this.CreateFromMorphTargetSequence(i,e[i],D,t));return A}static parseAnimation(M,D){if(!M)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const t=function(u,g,r,j,y){if(r.length!==0){const o=[],c=[];HM.flattenJSON(r,o,c,j),o.length!==0&&y.push(new u(g,o,c))}},e=[],N=M.name||"default",A=M.fps||30,i=M.blendMode;let I=M.length||-1;const z=M.hierarchy||[];for(let u=0;u<z.length;u++){const g=z[u].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const r={};let j;for(j=0;j<g.length;j++)if(g[j].morphTargets)for(let y=0;y<g[j].morphTargets.length;y++)r[g[j].morphTargets[y]]=-1;for(const y in r){const o=[],c=[];for(let s=0;s!==g[j].morphTargets.length;++s){const l=g[j];o.push(l.time),c.push(l.morphTarget===y?1:0)}e.push(new nN(".morphTargetInfluence["+y+"]",o,c))}I=r.length*(A||1)}else{const r=".bones["+D[u].name+"]";t(AN,r+".position",g,"pos",e),t(ye,r+".quaternion",g,"rot",e),t(AN,r+".scale",g,"scl",e)}}return e.length===0?null:new this(N,I,e,i)}resetDuration(){const M=this.tracks;let D=0;for(let t=0,e=M.length;t!==e;++t){const N=this.tracks[t];D=Math.max(D,N.times[N.times.length-1])}return this.duration=D,this}trim(){for(let M=0;M<this.tracks.length;M++)this.tracks[M].trim(0,this.duration);return this}validate(){let M=!0;for(let D=0;D<this.tracks.length;D++)M=M&&this.tracks[D].validate();return M}optimize(){for(let M=0;M<this.tracks.length;M++)this.tracks[M].optimize();return this}clone(){const M=[];for(let D=0;D<this.tracks.length;D++)M.push(this.tracks[D].clone());return new this.constructor(this.name,this.duration,M,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Og(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nN;case"vector":case"vector2":case"vector3":case"vector4":return AN;case"color":return Ni;case"quaternion":return ye;case"bool":case"boolean":return Ht;case"string":return Wt}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function xg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const M=Og(n.type);if(n.times===void 0){const D=[],t=[];HM.flattenJSON(n.keys,D,t,"value"),n.times=D,n.values=t}return M.parse!==void 0?M.parse(n):new M(n.name,n.times,n.values,n.interpolation)}const qt={enabled:!1,files:{},add:function(n,M){this.enabled!==!1&&(this.files[n]=M)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Eg{constructor(M,D,t){const e=this;let N=!1,A=0,i=0,I;const z=[];this.onStart=void 0,this.onLoad=M,this.onProgress=D,this.onError=t,this.itemStart=function(T){i++,N===!1&&e.onStart!==void 0&&e.onStart(T,A,i),N=!0},this.itemEnd=function(T){A++,e.onProgress!==void 0&&e.onProgress(T,A,i),A===i&&(N=!1,e.onLoad!==void 0&&e.onLoad())},this.itemError=function(T){e.onError!==void 0&&e.onError(T)},this.resolveURL=function(T){return I?I(T):T},this.setURLModifier=function(T){return I=T,this},this.addHandler=function(T,u){return z.push(T,u),this},this.removeHandler=function(T){const u=z.indexOf(T);return u!==-1&&z.splice(u,2),this},this.getHandler=function(T){for(let u=0,g=z.length;u<g;u+=2){const r=z[u],j=z[u+1];if(r.global&&(r.lastIndex=0),r.test(T))return j}return null}}}const lg=new Eg;class FD{constructor(M){this.manager=M!==void 0?M:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(M,D){const t=this;return new Promise(function(e,N){t.load(M,e,D,N)})}parse(){}setCrossOrigin(M){return this.crossOrigin=M,this}setWithCredentials(M){return this.withCredentials=M,this}setPath(M){return this.path=M,this}setResourcePath(M){return this.resourcePath=M,this}setRequestHeader(M){return this.requestHeader=M,this}}const BD={};class Ai extends FD{constructor(M){super(M)}load(M,D,t,e){M===void 0&&(M=""),this.path!==void 0&&(M=this.path+M),M=this.manager.resolveURL(M);const N=qt.get(M);if(N!==void 0)return this.manager.itemStart(M),setTimeout(()=>{D&&D(N),this.manager.itemEnd(M)},0),N;if(BD[M]!==void 0){BD[M].push({onLoad:D,onProgress:t,onError:e});return}BD[M]=[],BD[M].push({onLoad:D,onProgress:t,onError:e});const A=new Request(M,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,I=this.responseType;fetch(A).then(z=>{if(z.status===200||z.status===0){if(z.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||z.body.getReader===void 0)return z;const T=BD[M],u=z.body.getReader(),g=z.headers.get("Content-Length"),r=g?parseInt(g):0,j=r!==0;let y=0;const o=new ReadableStream({start(c){s();function s(){u.read().then(({done:l,value:C})=>{if(l)c.close();else{y+=C.byteLength;const E=new ProgressEvent("progress",{lengthComputable:j,loaded:y,total:r});for(let v=0,h=T.length;v<h;v++){const F=T[v];F.onProgress&&F.onProgress(E)}c.enqueue(C),s()}})}}});return new Response(o)}else throw Error(`fetch for "${z.url}" responded with ${z.status}: ${z.statusText}`)}).then(z=>{switch(I){case"arraybuffer":return z.arrayBuffer();case"blob":return z.blob();case"document":return z.text().then(T=>new DOMParser().parseFromString(T,i));case"json":return z.json();default:if(i===void 0)return z.text();{const u=/charset="?([^;"\s]*)"?/i.exec(i),g=u&&u[1]?u[1].toLowerCase():void 0,r=new TextDecoder(g);return z.arrayBuffer().then(j=>r.decode(j))}}}).then(z=>{qt.add(M,z);const T=BD[M];delete BD[M];for(let u=0,g=T.length;u<g;u++){const r=T[u];r.onLoad&&r.onLoad(z)}}).catch(z=>{const T=BD[M];if(T===void 0)throw this.manager.itemError(M),z;delete BD[M];for(let u=0,g=T.length;u<g;u++){const r=T[u];r.onError&&r.onError(z)}this.manager.itemError(M)}).finally(()=>{this.manager.itemEnd(M)}),this.manager.itemStart(M)}setResponseType(M){return this.responseType=M,this}setMimeType(M){return this.mimeType=M,this}}class ii extends FD{constructor(M){super(M)}load(M,D,t,e){this.path!==void 0&&(M=this.path+M),M=this.manager.resolveURL(M);const N=this,A=qt.get(M);if(A!==void 0)return N.manager.itemStart(M),setTimeout(function(){D&&D(A),N.manager.itemEnd(M)},0),A;const i=Jt("img");function I(){T(),qt.add(M,this),D&&D(this),N.manager.itemEnd(M)}function z(u){T(),e&&e(u),N.manager.itemError(M),N.manager.itemEnd(M)}function T(){i.removeEventListener("load",I,!1),i.removeEventListener("error",z,!1)}return i.addEventListener("load",I,!1),i.addEventListener("error",z,!1),M.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),N.manager.itemStart(M),i.src=M,i}}class dg extends FD{constructor(M){super(M)}load(M,D,t,e){const N=new Se,A=new ii(this.manager);A.setCrossOrigin(this.crossOrigin),A.setPath(this.path);let i=0;function I(z){A.load(M[z],function(T){N.images[z]=T,i++,i===6&&(N.needsUpdate=!0,D&&D(N))},void 0,e)}for(let z=0;z<M.length;++z)I(z);return N}}class zi extends FD{constructor(M){super(M)}load(M,D,t,e){const N=new ND,A=new ii(this.manager);return A.setCrossOrigin(this.crossOrigin),A.setPath(this.path),A.load(M,function(i){N.image=i,N.needsUpdate=!0,D!==void 0&&D(N)},t,e),N}}class UD extends ZM{constructor(M,D=1){super(),this.type="Light",this.color=new cM(M),this.intensity=D}dispose(){}copy(M){return super.copy(M),this.color.copy(M.color),this.intensity=M.intensity,this}toJSON(M){const D=super.toJSON(M);return D.object.color=this.color.getHex(),D.object.intensity=this.intensity,this.groundColor!==void 0&&(D.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(D.object.distance=this.distance),this.angle!==void 0&&(D.object.angle=this.angle),this.decay!==void 0&&(D.object.decay=this.decay),this.penumbra!==void 0&&(D.object.penumbra=this.penumbra),this.shadow!==void 0&&(D.object.shadow=this.shadow.toJSON()),D}}UD.prototype.isLight=!0;class vg extends UD{constructor(M,D,t){super(M,t),this.type="HemisphereLight",this.position.copy(ZM.DefaultUp),this.updateMatrix(),this.groundColor=new cM(D)}copy(M){return UD.prototype.copy.call(this,M),this.groundColor.copy(M.groundColor),this}}vg.prototype.isHemisphereLight=!0;const Ii=new aM,Ti=new O,ui=new O;class rn{constructor(M){this.camera=M,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new aM,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _e,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new PM(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(M){const D=this.camera,t=this.matrix;Ti.setFromMatrixPosition(M.matrixWorld),D.position.copy(Ti),ui.setFromMatrixPosition(M.target.matrixWorld),D.lookAt(ui),D.updateMatrixWorld(),Ii.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ii),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(D.projectionMatrix),t.multiply(D.matrixWorldInverse)}getViewport(M){return this._viewports[M]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(M){return this.camera=M.camera.clone(),this.bias=M.bias,this.radius=M.radius,this.mapSize.copy(M.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const M={};return this.bias!==0&&(M.bias=this.bias),this.normalBias!==0&&(M.normalBias=this.normalBias),this.radius!==1&&(M.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(M.mapSize=this.mapSize.toArray()),M.camera=this.camera.toJSON(!1).object,delete M.camera.matrix,M}}class gi extends rn{constructor(){super(new gD(50,1,.5,500)),this.focus=1}updateMatrices(M){const D=this.camera,t=gN*2*M.angle*this.focus,e=this.mapSize.width/this.mapSize.height,N=M.distance||D.far;(t!==D.fov||e!==D.aspect||N!==D.far)&&(D.fov=t,D.aspect=e,D.far=N,D.updateProjectionMatrix()),super.updateMatrices(M)}copy(M){return super.copy(M),this.focus=M.focus,this}}gi.prototype.isSpotLightShadow=!0;class pg extends UD{constructor(M,D,t=0,e=Math.PI/3,N=0,A=1){super(M,D),this.type="SpotLight",this.position.copy(ZM.DefaultUp),this.updateMatrix(),this.target=new ZM,this.distance=t,this.angle=e,this.penumbra=N,this.decay=A,this.shadow=new gi}get power(){return this.intensity*Math.PI}set power(M){this.intensity=M/Math.PI}dispose(){this.shadow.dispose()}copy(M){return super.copy(M),this.distance=M.distance,this.angle=M.angle,this.penumbra=M.penumbra,this.decay=M.decay,this.target=M.target.clone(),this.shadow=M.shadow.clone(),this}}pg.prototype.isSpotLight=!0;const ri=new aM,ae=new O,sn=new O;class si extends rn{constructor(){super(new gD(90,1,.5,500)),this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new PM(2,1,1,1),new PM(0,1,1,1),new PM(3,1,1,1),new PM(1,1,1,1),new PM(3,0,1,1),new PM(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(M,D=0){const t=this.camera,e=this.matrix,N=M.distance||t.far;N!==t.far&&(t.far=N,t.updateProjectionMatrix()),ae.setFromMatrixPosition(M.matrixWorld),t.position.copy(ae),sn.copy(t.position),sn.add(this._cubeDirections[D]),t.up.copy(this._cubeUps[D]),t.lookAt(sn),t.updateMatrixWorld(),e.makeTranslation(-ae.x,-ae.y,-ae.z),ri.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ri)}}si.prototype.isPointLightShadow=!0;class hg extends UD{constructor(M,D,t=0,e=1){super(M,D),this.type="PointLight",this.distance=t,this.decay=e,this.shadow=new si}get power(){return this.intensity*4*Math.PI}set power(M){this.intensity=M/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(M){return super.copy(M),this.distance=M.distance,this.decay=M.decay,this.shadow=M.shadow.clone(),this}}hg.prototype.isPointLight=!0;class ci extends rn{constructor(){super(new bN(-5,5,5,-5,.5,500))}}ci.prototype.isDirectionalLightShadow=!0;class ji extends UD{constructor(M,D){super(M,D),this.type="DirectionalLight",this.position.copy(ZM.DefaultUp),this.updateMatrix(),this.target=new ZM,this.shadow=new ci}dispose(){this.shadow.dispose()}copy(M){return super.copy(M),this.target=M.target.clone(),this.shadow=M.shadow.clone(),this}}ji.prototype.isDirectionalLight=!0;class Yg extends UD{constructor(M,D){super(M,D),this.type="AmbientLight"}}Yg.prototype.isAmbientLight=!0;class Ug extends UD{constructor(M,D,t=10,e=10){super(M,D),this.type="RectAreaLight",this.width=t,this.height=e}get power(){return this.intensity*this.width*this.height*Math.PI}set power(M){this.intensity=M/(this.width*this.height*Math.PI)}copy(M){return super.copy(M),this.width=M.width,this.height=M.height,this}toJSON(M){const D=super.toJSON(M);return D.object.width=this.width,D.object.height=this.height,D}}Ug.prototype.isRectAreaLight=!0;class yi{constructor(){this.coefficients=[];for(let M=0;M<9;M++)this.coefficients.push(new O)}set(M){for(let D=0;D<9;D++)this.coefficients[D].copy(M[D]);return this}zero(){for(let M=0;M<9;M++)this.coefficients[M].set(0,0,0);return this}getAt(M,D){const t=M.x,e=M.y,N=M.z,A=this.coefficients;return D.copy(A[0]).multiplyScalar(.282095),D.addScaledVector(A[1],.488603*e),D.addScaledVector(A[2],.488603*N),D.addScaledVector(A[3],.488603*t),D.addScaledVector(A[4],1.092548*(t*e)),D.addScaledVector(A[5],1.092548*(e*N)),D.addScaledVector(A[6],.315392*(3*N*N-1)),D.addScaledVector(A[7],1.092548*(t*N)),D.addScaledVector(A[8],.546274*(t*t-e*e)),D}getIrradianceAt(M,D){const t=M.x,e=M.y,N=M.z,A=this.coefficients;return D.copy(A[0]).multiplyScalar(.886227),D.addScaledVector(A[1],2*.511664*e),D.addScaledVector(A[2],2*.511664*N),D.addScaledVector(A[3],2*.511664*t),D.addScaledVector(A[4],2*.429043*t*e),D.addScaledVector(A[5],2*.429043*e*N),D.addScaledVector(A[6],.743125*N*N-.247708),D.addScaledVector(A[7],2*.429043*t*N),D.addScaledVector(A[8],.429043*(t*t-e*e)),D}add(M){for(let D=0;D<9;D++)this.coefficients[D].add(M.coefficients[D]);return this}addScaledSH(M,D){for(let t=0;t<9;t++)this.coefficients[t].addScaledVector(M.coefficients[t],D);return this}scale(M){for(let D=0;D<9;D++)this.coefficients[D].multiplyScalar(M);return this}lerp(M,D){for(let t=0;t<9;t++)this.coefficients[t].lerp(M.coefficients[t],D);return this}equals(M){for(let D=0;D<9;D++)if(!this.coefficients[D].equals(M.coefficients[D]))return!1;return!0}copy(M){return this.set(M.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(M,D=0){const t=this.coefficients;for(let e=0;e<9;e++)t[e].fromArray(M,D+e*3);return this}toArray(M=[],D=0){const t=this.coefficients;for(let e=0;e<9;e++)t[e].toArray(M,D+e*3);return M}static getBasisAt(M,D){const t=M.x,e=M.y,N=M.z;D[0]=.282095,D[1]=.488603*e,D[2]=.488603*N,D[3]=.488603*t,D[4]=1.092548*t*e,D[5]=1.092548*e*N,D[6]=.315392*(3*N*N-1),D[7]=1.092548*t*N,D[8]=.546274*(t*t-e*e)}}yi.prototype.isSphericalHarmonics3=!0;class cn extends UD{constructor(M=new yi,D=1){super(void 0,D),this.sh=M}copy(M){return super.copy(M),this.sh.copy(M.sh),this}fromJSON(M){return this.intensity=M.intensity,this.sh.fromArray(M.sh),this}toJSON(M){const D=super.toJSON(M);return D.object.sh=this.sh.toArray(),D}}cn.prototype.isLightProbe=!0;class Qg{static decodeText(M){if(typeof TextDecoder<"u")return new TextDecoder().decode(M);let D="";for(let t=0,e=M.length;t<e;t++)D+=String.fromCharCode(M[t]);try{return decodeURIComponent(escape(D))}catch{return D}}static extractUrlBase(M){const D=M.lastIndexOf("/");return D===-1?"./":M.substr(0,D+1)}static resolveURL(M,D){return typeof M!="string"||M===""?"":(/^https?:\/\//i.test(D)&&/^\//.test(M)&&(D=D.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(M)||/^data:.*,.*$/i.test(M)||/^blob:.*$/i.test(M)?M:D+M)}}class fg extends BM{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(M){return super.copy(M),this.instanceCount=M.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const M=super.toJSON(this);return M.instanceCount=this.instanceCount,M.isInstancedBufferGeometry=!0,M}}fg.prototype.isInstancedBufferGeometry=!0;class mg extends FD{constructor(M){super(M),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(M){return this.options=M,this}load(M,D,t,e){M===void 0&&(M=""),this.path!==void 0&&(M=this.path+M),M=this.manager.resolveURL(M);const N=this,A=qt.get(M);if(A!==void 0)return N.manager.itemStart(M),setTimeout(function(){D&&D(A),N.manager.itemEnd(M)},0),A;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(M,i).then(function(I){return I.blob()}).then(function(I){return createImageBitmap(I,Object.assign(N.options,{colorSpaceConversion:"none"}))}).then(function(I){qt.add(M,I),D&&D(I),N.manager.itemEnd(M)}).catch(function(I){e&&e(I),N.manager.itemError(M),N.manager.itemEnd(M)}),N.manager.itemStart(M)}}mg.prototype.isImageBitmapLoader=!0;let iN;const kg={getContext:function(){return iN===void 0&&(iN=new(window.AudioContext||window.webkitAudioContext)),iN},setContext:function(n){iN=n}};class Sg extends FD{constructor(M){super(M)}load(M,D,t,e){const N=this,A=new Ai(this.manager);A.setResponseType("arraybuffer"),A.setPath(this.path),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(M,function(i){try{const I=i.slice(0);kg.getContext().decodeAudioData(I,function(T){D(T)})}catch(I){e?e(I):console.error(I),N.manager.itemError(M)}},t,e)}}class Zg extends cn{constructor(M,D,t=1){super(void 0,t);const e=new cM().set(M),N=new cM().set(D),A=new O(e.r,e.g,e.b),i=new O(N.r,N.g,N.b),I=Math.sqrt(Math.PI),z=I*Math.sqrt(.75);this.sh.coefficients[0].copy(A).add(i).multiplyScalar(I),this.sh.coefficients[1].copy(A).sub(i).multiplyScalar(z)}}Zg.prototype.isHemisphereLightProbe=!0;class _g extends cn{constructor(M,D=1){super(void 0,D);const t=new cM().set(M);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}}_g.prototype.isAmbientLightProbe=!0;class bg extends ZM{constructor(M){super(),this.type="Audio",this.listener=M,this.context=M.context,this.gain=this.context.createGain(),this.gain.connect(M.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(M){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=M,this.connect(),this}setMediaElementSource(M){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(M),this.connect(),this}setMediaStreamSource(M){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(M),this.connect(),this}setBuffer(M){return this.buffer=M,this.sourceType="buffer",this.autoplay&&this.play(),this}play(M=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+M;const D=this.context.createBufferSource();return D.buffer=this.buffer,D.loop=this.loop,D.loopStart=this.loopStart,D.loopEnd=this.loopEnd,D.onended=this.onEnded.bind(this),D.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=D,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let M=1,D=this.filters.length;M<D;M++)this.filters[M-1].connect(this.filters[M]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let M=1,D=this.filters.length;M<D;M++)this.filters[M-1].disconnect(this.filters[M]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(M){return M||(M=[]),this._connected===!0?(this.disconnect(),this.filters=M.slice(),this.connect()):this.filters=M.slice(),this}setDetune(M){if(this.detune=M,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(M){return this.setFilters(M?[M]:[])}setPlaybackRate(M){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=M,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(M){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=M,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(M){return this.loopStart=M,this}setLoopEnd(M){return this.loopEnd=M,this}getVolume(){return this.gain.gain.value}setVolume(M){return this.gain.gain.setTargetAtTime(M,this.context.currentTime,.01),this}}class Kg{constructor(M,D,t){this.binding=M,this.valueSize=t;let e,N,A;switch(D){case"quaternion":e=this._slerp,N=this._slerpAdditive,A=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(t*6),this._workIndex=5;break;case"string":case"bool":e=this._select,N=this._select,A=this._setAdditiveIdentityOther,this.buffer=new Array(t*5);break;default:e=this._lerp,N=this._lerpAdditive,A=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(t*5)}this._mixBufferRegion=e,this._mixBufferRegionAdditive=N,this._setIdentity=A,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(M,D){const t=this.buffer,e=this.valueSize,N=M*e+e;let A=this.cumulativeWeight;if(A===0){for(let i=0;i!==e;++i)t[N+i]=t[i];A=D}else{A+=D;const i=D/A;this._mixBufferRegion(t,N,0,i,e)}this.cumulativeWeight=A}accumulateAdditive(M){const D=this.buffer,t=this.valueSize,e=t*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(D,e,0,M,t),this.cumulativeWeightAdditive+=M}apply(M){const D=this.valueSize,t=this.buffer,e=M*D+D,N=this.cumulativeWeight,A=this.cumulativeWeightAdditive,i=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,N<1){const I=D*this._origIndex;this._mixBufferRegion(t,e,I,1-N,D)}A>0&&this._mixBufferRegionAdditive(t,e,this._addIndex*D,1,D);for(let I=D,z=D+D;I!==z;++I)if(t[I]!==t[I+D]){i.setValue(t,e);break}}saveOriginalState(){const M=this.binding,D=this.buffer,t=this.valueSize,e=t*this._origIndex;M.getValue(D,e);for(let N=t,A=e;N!==A;++N)D[N]=D[e+N%t];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const M=this.valueSize*3;this.binding.setValue(this.buffer,M)}_setAdditiveIdentityNumeric(){const M=this._addIndex*this.valueSize,D=M+this.valueSize;for(let t=M;t<D;t++)this.buffer[t]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const M=this._origIndex*this.valueSize,D=this._addIndex*this.valueSize;for(let t=0;t<this.valueSize;t++)this.buffer[D+t]=this.buffer[M+t]}_select(M,D,t,e,N){if(e>=.5)for(let A=0;A!==N;++A)M[D+A]=M[t+A]}_slerp(M,D,t,e){sD.slerpFlat(M,D,M,D,M,t,e)}_slerpAdditive(M,D,t,e,N){const A=this._workIndex*N;sD.multiplyQuaternionsFlat(M,A,M,D,M,t),sD.slerpFlat(M,D,M,D,M,A,e)}_lerp(M,D,t,e,N){const A=1-e;for(let i=0;i!==N;++i){const I=D+i;M[I]=M[I]*A+M[t+i]*e}}_lerpAdditive(M,D,t,e,N){for(let A=0;A!==N;++A){const i=D+A;M[i]=M[i]+M[t+A]*e}}}const jn="\\[\\]\\.:\\/",Rg=new RegExp("["+jn+"]","g"),yn="[^"+jn+"]",Pg="[^"+jn.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",yn),Bg=/(WCOD+)?/.source.replace("WCOD",Pg),Gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yn),Vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yn),Hg=new RegExp("^"+Fg+Bg+Gg+Vg+"$"),Wg=["material","materials","bones"];class qg{constructor(M,D,t){const e=t||bM.parseTrackName(D);this._targetGroup=M,this._bindings=M.subscribe_(D,e)}getValue(M,D){this.bind();const t=this._targetGroup.nCachedObjects_,e=this._bindings[t];e!==void 0&&e.getValue(M,D)}setValue(M,D){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,N=t.length;e!==N;++e)t[e].setValue(M,D)}bind(){const M=this._bindings;for(let D=this._targetGroup.nCachedObjects_,t=M.length;D!==t;++D)M[D].bind()}unbind(){const M=this._bindings;for(let D=this._targetGroup.nCachedObjects_,t=M.length;D!==t;++D)M[D].unbind()}}class bM{constructor(M,D,t){this.path=D,this.parsedPath=t||bM.parseTrackName(D),this.node=bM.findNode(M,this.parsedPath.nodeName)||M,this.rootNode=M,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(M,D,t){return M&&M.isAnimationObjectGroup?new bM.Composite(M,D,t):new bM(M,D,t)}static sanitizeNodeName(M){return M.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(M){const D=Hg.exec(M);if(!D)throw new Error("PropertyBinding: Cannot parse trackName: "+M);const t={nodeName:D[2],objectName:D[3],objectIndex:D[4],propertyName:D[5],propertyIndex:D[6]},e=t.nodeName&&t.nodeName.lastIndexOf(".");if(e!==void 0&&e!==-1){const N=t.nodeName.substring(e+1);Wg.indexOf(N)!==-1&&(t.nodeName=t.nodeName.substring(0,e),t.objectName=N)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+M);return t}static findNode(M,D){if(!D||D===""||D==="."||D===-1||D===M.name||D===M.uuid)return M;if(M.skeleton){const t=M.skeleton.getBoneByName(D);if(t!==void 0)return t}if(M.children){const t=function(N){for(let A=0;A<N.length;A++){const i=N[A];if(i.name===D||i.uuid===D)return i;const I=t(i.children);if(I)return I}return null},e=t(M.children);if(e)return e}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(M,D){M[D]=this.targetObject[this.propertyName]}_getValue_array(M,D){const t=this.resolvedProperty;for(let e=0,N=t.length;e!==N;++e)M[D++]=t[e]}_getValue_arrayElement(M,D){M[D]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(M,D){this.resolvedProperty.toArray(M,D)}_setValue_direct(M,D){this.targetObject[this.propertyName]=M[D]}_setValue_direct_setNeedsUpdate(M,D){this.targetObject[this.propertyName]=M[D],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(M,D){this.targetObject[this.propertyName]=M[D],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(M,D){const t=this.resolvedProperty;for(let e=0,N=t.length;e!==N;++e)t[e]=M[D++]}_setValue_array_setNeedsUpdate(M,D){const t=this.resolvedProperty;for(let e=0,N=t.length;e!==N;++e)t[e]=M[D++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(M,D){const t=this.resolvedProperty;for(let e=0,N=t.length;e!==N;++e)t[e]=M[D++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(M,D){this.resolvedProperty[this.propertyIndex]=M[D]}_setValue_arrayElement_setNeedsUpdate(M,D){this.resolvedProperty[this.propertyIndex]=M[D],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(M,D){this.resolvedProperty[this.propertyIndex]=M[D],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(M,D){this.resolvedProperty.fromArray(M,D)}_setValue_fromArray_setNeedsUpdate(M,D){this.resolvedProperty.fromArray(M,D),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(M,D){this.resolvedProperty.fromArray(M,D),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(M,D){this.bind(),this.getValue(M,D)}_setValue_unbound(M,D){this.bind(),this.setValue(M,D)}bind(){let M=this.node;const D=this.parsedPath,t=D.objectName,e=D.propertyName;let N=D.propertyIndex;if(M||(M=bM.findNode(this.rootNode,D.nodeName)||this.rootNode,this.node=M),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!M){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let z=D.objectIndex;switch(t){case"materials":if(!M.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!M.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}M=M.material.materials;break;case"bones":if(!M.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}M=M.skeleton.bones;for(let T=0;T<M.length;T++)if(M[T].name===z){z=T;break}break;default:if(M[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}M=M[t]}if(z!==void 0){if(M[z]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,M);return}M=M[z]}}const A=M[e];if(A===void 0){const z=D.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+z+"."+e+" but it wasn't found.",M);return}let i=this.Versioning.None;this.targetObject=M,M.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:M.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let I=this.BindingType.Direct;if(N!==void 0){if(e==="morphTargetInfluences"){if(!M.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(M.geometry.isBufferGeometry){if(!M.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}M.morphTargetDictionary[N]!==void 0&&(N=M.morphTargetDictionary[N])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}I=this.BindingType.ArrayElement,this.resolvedProperty=A,this.propertyIndex=N}else A.fromArray!==void 0&&A.toArray!==void 0?(I=this.BindingType.HasFromToArray,this.resolvedProperty=A):Array.isArray(A)?(I=this.BindingType.EntireArray,this.resolvedProperty=A):this.propertyName=e;this.getValue=this.GetterByBindingType[I],this.setValue=this.SetterByBindingTypeAndVersioning[I][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bM.Composite=qg,bM.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},bM.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},bM.prototype.GetterByBindingType=[bM.prototype._getValue_direct,bM.prototype._getValue_array,bM.prototype._getValue_arrayElement,bM.prototype._getValue_toArray],bM.prototype.SetterByBindingTypeAndVersioning=[[bM.prototype._setValue_direct,bM.prototype._setValue_direct_setNeedsUpdate,bM.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bM.prototype._setValue_array,bM.prototype._setValue_array_setNeedsUpdate,bM.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bM.prototype._setValue_arrayElement,bM.prototype._setValue_arrayElement_setNeedsUpdate,bM.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bM.prototype._setValue_fromArray,bM.prototype._setValue_fromArray_setNeedsUpdate,bM.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xg{constructor(M,D,t=null,e=D.blendMode){this._mixer=M,this._clip=D,this._localRoot=t,this.blendMode=e;const N=D.tracks,A=N.length,i=new Array(A),I={endingStart:2400,endingEnd:2400};for(let z=0;z!==A;++z){const T=N[z].createInterpolant(null);i[z]=T,T.settings=I}this._interpolantSettings=I,this._interpolants=i,this._propertyBindings=new Array(A),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(M){return this._startTime=M,this}setLoop(M,D){return this.loop=M,this.repetitions=D,this}setEffectiveWeight(M){return this.weight=M,this._effectiveWeight=this.enabled?M:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(M){return this._scheduleFading(M,0,1)}fadeOut(M){return this._scheduleFading(M,1,0)}crossFadeFrom(M,D,t){if(M.fadeOut(D),this.fadeIn(D),t){const e=this._clip.duration,N=M._clip.duration,A=N/e,i=e/N;M.warp(1,A,D),this.warp(i,1,D)}return this}crossFadeTo(M,D,t){return M.crossFadeFrom(this,D,t)}stopFading(){const M=this._weightInterpolant;return M!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(M)),this}setEffectiveTimeScale(M){return this.timeScale=M,this._effectiveTimeScale=this.paused?0:M,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(M){return this.timeScale=this._clip.duration/M,this.stopWarping()}syncWith(M){return this.time=M.time,this.timeScale=M.timeScale,this.stopWarping()}halt(M){return this.warp(this._effectiveTimeScale,0,M)}warp(M,D,t){const e=this._mixer,N=e.time,A=this.timeScale;let i=this._timeScaleInterpolant;i===null&&(i=e._lendControlInterpolant(),this._timeScaleInterpolant=i);const I=i.parameterPositions,z=i.sampleValues;return I[0]=N,I[1]=N+t,z[0]=M/A,z[1]=D/A,this}stopWarping(){const M=this._timeScaleInterpolant;return M!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(M)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(M,D,t,e){if(!this.enabled){this._updateWeight(M);return}const N=this._startTime;if(N!==null){const I=(M-N)*t;if(I<0||t===0)return;this._startTime=null,D=t*I}D*=this._updateTimeScale(M);const A=this._updateTime(D),i=this._updateWeight(M);if(i>0){const I=this._interpolants,z=this._propertyBindings;switch(this.blendMode){case 2501:for(let T=0,u=I.length;T!==u;++T)I[T].evaluate(A),z[T].accumulateAdditive(i);break;case 2500:default:for(let T=0,u=I.length;T!==u;++T)I[T].evaluate(A),z[T].accumulate(e,i)}}}_updateWeight(M){let D=0;if(this.enabled){D=this.weight;const t=this._weightInterpolant;if(t!==null){const e=t.evaluate(M)[0];D*=e,M>t.parameterPositions[1]&&(this.stopFading(),e===0&&(this.enabled=!1))}}return this._effectiveWeight=D,D}_updateTimeScale(M){let D=0;if(!this.paused){D=this.timeScale;const t=this._timeScaleInterpolant;t!==null&&(D*=t.evaluate(M)[0],M>t.parameterPositions[1]&&(this.stopWarping(),D===0?this.paused=!0:this.timeScale=D))}return this._effectiveTimeScale=D,D}_updateTime(M){const D=this._clip.duration,t=this.loop;let e=this.time+M,N=this._loopCount;const A=t===2202;if(M===0)return N===-1?e:A&&(N&1)===1?D-e:e;if(t===2200){N===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));M:{if(e>=D)e=D;else if(e<0)e=0;else{this.time=e;break M}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=e,this._mixer.dispatchEvent({type:"finished",action:this,direction:M<0?-1:1})}}else{if(N===-1&&(M>=0?(N=0,this._setEndings(!0,this.repetitions===0,A)):this._setEndings(this.repetitions===0,!0,A)),e>=D||e<0){const i=Math.floor(e/D);e-=D*i,N+=Math.abs(i);const I=this.repetitions-N;if(I<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,e=M>0?D:0,this.time=e,this._mixer.dispatchEvent({type:"finished",action:this,direction:M>0?1:-1});else{if(I===1){const z=M<0;this._setEndings(z,!z,A)}else this._setEndings(!1,!1,A);this._loopCount=N,this.time=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=e;if(A&&(N&1)===1)return D-e}return e}_setEndings(M,D,t){const e=this._interpolantSettings;t?(e.endingStart=2401,e.endingEnd=2401):(M?e.endingStart=this.zeroSlopeAtStart?2401:2400:e.endingStart=2402,D?e.endingEnd=this.zeroSlopeAtEnd?2401:2400:e.endingEnd=2402)}_scheduleFading(M,D,t){const e=this._mixer,N=e.time;let A=this._weightInterpolant;A===null&&(A=e._lendControlInterpolant(),this._weightInterpolant=A);const i=A.parameterPositions,I=A.sampleValues;return i[0]=N,I[0]=D,i[1]=N+M,I[1]=t,this}}class Jg extends Tt{constructor(M){super(),this._root=M,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(M,D){const t=M._localRoot||this._root,e=M._clip.tracks,N=e.length,A=M._propertyBindings,i=M._interpolants,I=t.uuid,z=this._bindingsByRootAndName;let T=z[I];T===void 0&&(T={},z[I]=T);for(let u=0;u!==N;++u){const g=e[u],r=g.name;let j=T[r];if(j!==void 0)++j.referenceCount,A[u]=j;else{if(j=A[u],j!==void 0){j._cacheIndex===null&&(++j.referenceCount,this._addInactiveBinding(j,I,r));continue}const y=D&&D._propertyBindings[u].binding.parsedPath;j=new Kg(bM.create(t,r,y),g.ValueTypeName,g.getValueSize()),++j.referenceCount,this._addInactiveBinding(j,I,r),A[u]=j}i[u].resultBuffer=j.buffer}}_activateAction(M){if(!this._isActiveAction(M)){if(M._cacheIndex===null){const t=(M._localRoot||this._root).uuid,e=M._clip.uuid,N=this._actionsByClip[e];this._bindAction(M,N&&N.knownActions[0]),this._addInactiveAction(M,e,t)}const D=M._propertyBindings;for(let t=0,e=D.length;t!==e;++t){const N=D[t];N.useCount++===0&&(this._lendBinding(N),N.saveOriginalState())}this._lendAction(M)}}_deactivateAction(M){if(this._isActiveAction(M)){const D=M._propertyBindings;for(let t=0,e=D.length;t!==e;++t){const N=D[t];--N.useCount===0&&(N.restoreOriginalState(),this._takeBackBinding(N))}this._takeBackAction(M)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const M=this;this.stats={actions:{get total(){return M._actions.length},get inUse(){return M._nActiveActions}},bindings:{get total(){return M._bindings.length},get inUse(){return M._nActiveBindings}},controlInterpolants:{get total(){return M._controlInterpolants.length},get inUse(){return M._nActiveControlInterpolants}}}}_isActiveAction(M){const D=M._cacheIndex;return D!==null&&D<this._nActiveActions}_addInactiveAction(M,D,t){const e=this._actions,N=this._actionsByClip;let A=N[D];if(A===void 0)A={knownActions:[M],actionByRoot:{}},M._byClipCacheIndex=0,N[D]=A;else{const i=A.knownActions;M._byClipCacheIndex=i.length,i.push(M)}M._cacheIndex=e.length,e.push(M),A.actionByRoot[t]=M}_removeInactiveAction(M){const D=this._actions,t=D[D.length-1],e=M._cacheIndex;t._cacheIndex=e,D[e]=t,D.pop(),M._cacheIndex=null;const N=M._clip.uuid,A=this._actionsByClip,i=A[N],I=i.knownActions,z=I[I.length-1],T=M._byClipCacheIndex;z._byClipCacheIndex=T,I[T]=z,I.pop(),M._byClipCacheIndex=null;const u=i.actionByRoot,g=(M._localRoot||this._root).uuid;delete u[g],I.length===0&&delete A[N],this._removeInactiveBindingsForAction(M)}_removeInactiveBindingsForAction(M){const D=M._propertyBindings;for(let t=0,e=D.length;t!==e;++t){const N=D[t];--N.referenceCount===0&&this._removeInactiveBinding(N)}}_lendAction(M){const D=this._actions,t=M._cacheIndex,e=this._nActiveActions++,N=D[e];M._cacheIndex=e,D[e]=M,N._cacheIndex=t,D[t]=N}_takeBackAction(M){const D=this._actions,t=M._cacheIndex,e=--this._nActiveActions,N=D[e];M._cacheIndex=e,D[e]=M,N._cacheIndex=t,D[t]=N}_addInactiveBinding(M,D,t){const e=this._bindingsByRootAndName,N=this._bindings;let A=e[D];A===void 0&&(A={},e[D]=A),A[t]=M,M._cacheIndex=N.length,N.push(M)}_removeInactiveBinding(M){const D=this._bindings,t=M.binding,e=t.rootNode.uuid,N=t.path,A=this._bindingsByRootAndName,i=A[e],I=D[D.length-1],z=M._cacheIndex;I._cacheIndex=z,D[z]=I,D.pop(),delete i[N],Object.keys(i).length===0&&delete A[e]}_lendBinding(M){const D=this._bindings,t=M._cacheIndex,e=this._nActiveBindings++,N=D[e];M._cacheIndex=e,D[e]=M,N._cacheIndex=t,D[t]=N}_takeBackBinding(M){const D=this._bindings,t=M._cacheIndex,e=--this._nActiveBindings,N=D[e];M._cacheIndex=e,D[e]=M,N._cacheIndex=t,D[t]=N}_lendControlInterpolant(){const M=this._controlInterpolants,D=this._nActiveControlInterpolants++;let t=M[D];return t===void 0&&(t=new ei(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),t.__cacheIndex=D,M[D]=t),t}_takeBackControlInterpolant(M){const D=this._controlInterpolants,t=M.__cacheIndex,e=--this._nActiveControlInterpolants,N=D[e];M.__cacheIndex=e,D[e]=M,N.__cacheIndex=t,D[t]=N}clipAction(M,D,t){const e=D||this._root,N=e.uuid;let A=typeof M=="string"?ni.findByName(e,M):M;const i=A!==null?A.uuid:M,I=this._actionsByClip[i];let z=null;if(t===void 0&&(A!==null?t=A.blendMode:t=2500),I!==void 0){const u=I.actionByRoot[N];if(u!==void 0&&u.blendMode===t)return u;z=I.knownActions[0],A===null&&(A=z._clip)}if(A===null)return null;const T=new Xg(this,A,D,t);return this._bindAction(T,z),this._addInactiveAction(T,i,N),T}existingAction(M,D){const t=D||this._root,e=t.uuid,N=typeof M=="string"?ni.findByName(t,M):M,A=N?N.uuid:M,i=this._actionsByClip[A];return i!==void 0&&i.actionByRoot[e]||null}stopAllAction(){const M=this._actions,D=this._nActiveActions;for(let t=D-1;t>=0;--t)M[t].stop();return this}update(M){M*=this.timeScale;const D=this._actions,t=this._nActiveActions,e=this.time+=M,N=Math.sign(M),A=this._accuIndex^=1;for(let z=0;z!==t;++z)D[z]._update(e,M,N,A);const i=this._bindings,I=this._nActiveBindings;for(let z=0;z!==I;++z)i[z].apply(A);return this}setTime(M){this.time=0;for(let D=0;D<this._actions.length;D++)this._actions[D].time=0;return this.update(M)}getRoot(){return this._root}uncacheClip(M){const D=this._actions,t=M.uuid,e=this._actionsByClip,N=e[t];if(N!==void 0){const A=N.knownActions;for(let i=0,I=A.length;i!==I;++i){const z=A[i];this._deactivateAction(z);const T=z._cacheIndex,u=D[D.length-1];z._cacheIndex=null,z._byClipCacheIndex=null,u._cacheIndex=T,D[T]=u,D.pop(),this._removeInactiveBindingsForAction(z)}delete e[t]}}uncacheRoot(M){const D=M.uuid,t=this._actionsByClip;for(const A in t){const i=t[A].actionByRoot,I=i[D];I!==void 0&&(this._deactivateAction(I),this._removeInactiveAction(I))}const e=this._bindingsByRootAndName,N=e[D];if(N!==void 0)for(const A in N){const i=N[A];i.restoreOriginalState(),this._removeInactiveBinding(i)}}uncacheAction(M,D){const t=this.existingAction(M,D);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}}Jg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class $g extends ne{constructor(M,D,t=1){super(M,D),this.meshPerAttribute=t}copy(M){return super.copy(M),this.meshPerAttribute=M.meshPerAttribute,this}clone(M){const D=super.clone(M);return D.meshPerAttribute=this.meshPerAttribute,D}toJSON(M){const D=super.toJSON(M);return D.isInstancedInterleavedBuffer=!0,D.meshPerAttribute=this.meshPerAttribute,D}}$g.prototype.isInstancedInterleavedBuffer=!0;const zt=new O,zN=new aM,an=new aM;class Mr extends ue{constructor(M){const D=ai(M),t=new BM,e=[],N=[],A=new cM(0,0,1),i=new cM(0,1,0);for(let z=0;z<D.length;z++){const T=D[z];T.parent&&T.parent.isBone&&(e.push(0,0,0),e.push(0,0,0),N.push(A.r,A.g,A.b),N.push(i.r,i.g,i.b))}t.setAttribute("position",new VM(e,3)),t.setAttribute("color",new VM(N,3));const I=new Nt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(t,I),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=M,this.bones=D,this.matrix=M.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(M){const D=this.bones,t=this.geometry,e=t.getAttribute("position");an.copy(this.root.matrixWorld).invert();for(let N=0,A=0;N<D.length;N++){const i=D[N];i.parent&&i.parent.isBone&&(zN.multiplyMatrices(an,i.matrixWorld),zt.setFromMatrixPosition(zN),e.setXYZ(A,zt.x,zt.y,zt.z),zN.multiplyMatrices(an,i.parent.matrixWorld),zt.setFromMatrixPosition(zN),e.setXYZ(A+1,zt.x,zt.y,zt.z),A+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(M)}}function ai(n){const M=[];n&&n.isBone&&M.push(n);for(let D=0;D<n.children.length;D++)M.push.apply(M,ai(n.children[D]));return M}class Dr extends ue{constructor(M=10,D=10,t=4473924,e=8947848){t=new cM(t),e=new cM(e);const N=D/2,A=M/D,i=M/2,I=[],z=[];for(let g=0,r=0,j=-i;g<=D;g++,j+=A){I.push(-i,0,j,i,0,j),I.push(j,0,-i,j,0,i);const y=g===N?t:e;y.toArray(z,r),r+=3,y.toArray(z,r),r+=3,y.toArray(z,r),r+=3,y.toArray(z,r),r+=3}const T=new BM;T.setAttribute("position",new VM(I,3)),T.setAttribute("color",new VM(z,3));const u=new Nt({vertexColors:!0,toneMapped:!1});super(T,u),this.type="GridHelper"}}const tr=new Float32Array(1);new Int32Array(tr.buffer),wD.create=function(n,M){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(wD.prototype),n.prototype.constructor=n,n.prototype.getPoint=M,n},In.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)},Dr.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Mr.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},FD.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qg.extractUrlBase(n)},FD.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},CD.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)},CD.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},CD.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},CD.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)},CD.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)},xt.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},_e.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)},zD.prototype.flattenToArrayOffset=function(n,M){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,M)},zD.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},zD.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},zD.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},zD.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},zD.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()},aM.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)},aM.prototype.flattenToArrayOffset=function(n,M){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,M)},aM.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new O().setFromMatrixColumn(this,3)},aM.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)},aM.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},aM.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},aM.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},aM.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},aM.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)},aM.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},aM.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},aM.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},aM.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},aM.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},aM.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},aM.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},aM.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},aM.prototype.makeFrustum=function(n,M,D,t,e,N){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,M,t,D,e,N)},aM.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()},PD.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)},sD.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)},sD.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Et.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},Et.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)},Et.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)},MD.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},MD.prototype.barycoordFromPoint=function(n,M){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,M)},MD.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)},MD.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)},MD.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)},MD.barycoordFromPoint=function(n,M,D,t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),MD.getBarycoord(n,M,D,t,e)},MD.normal=function(n,M,D,t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),MD.getNormal(n,M,D,t)},Bt.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)},Bt.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vt(this,n)},Bt.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new NN(this,n)},q.prototype.fromAttribute=function(n,M,D){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,M,D)},q.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},O.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},O.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},O.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)},O.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)},O.prototype.getColumnFromMatrix=function(n,M){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(M,n)},O.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)},O.prototype.fromAttribute=function(n,M,D){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,M,D)},O.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},O.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},PM.prototype.fromAttribute=function(n,M,D){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,M,D)},PM.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},ZM.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)},ZM.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},ZM.prototype.translate=function(n,M){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(M,n)},ZM.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},ZM.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)},Object.defineProperties(ZM.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),tD.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(tD.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),UA.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},gD.prototype.setLens=function(n,M){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),M!==void 0&&(this.filmGauge=M),this.setFocalLength(n)},Object.defineProperties(UD.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}}),Object.defineProperties(DD.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),DD.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?35048:35044),this},DD.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},DD.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},BM.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)},BM.prototype.addAttribute=function(n,M){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(M&&M.isBufferAttribute)&&!(M&&M.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new DD(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(M),this):this.setAttribute(n,M)},BM.prototype.addDrawCall=function(n,M,D){D!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,M)},BM.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},BM.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},BM.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)},BM.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)},Object.defineProperties(BM.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),ne.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?35048:35044),this},ne.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Vt.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Vt.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Vt.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},WN.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(nD.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new cM}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(ct.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}}),_M.prototype.clearTarget=function(n,M,D,t){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(M,D,t)},_M.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)},_M.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},_M.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},_M.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},_M.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},_M.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},_M.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},_M.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},_M.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},_M.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},_M.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},_M.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},_M.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},_M.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)},_M.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},_M.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},_M.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},_M.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},_M.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},_M.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},_M.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},_M.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},_M.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},_M.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(_M.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),Object.defineProperties(wA.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(oD.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}}),bg.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const M=this;return new Sg().load(n,function(t){M.setBuffer(t)}),this},SN.prototype.updateCubeMap=function(n,M){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,M)},SN.prototype.clear=function(n,M,D,t){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,M,D,t)},ut.crossOrigin=void 0,ut.loadTexture=function(n,M,D,t){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const e=new zi;e.setCrossOrigin(this.crossOrigin);const N=e.load(n,D,void 0,t);return M&&(N.mapping=M),N},ut.loadTextureCube=function(n,M,D,t){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const e=new dg;e.setCrossOrigin(this.crossOrigin);const N=e.load(n,D,void 0,t);return M&&(N.mapping=M),N},ut.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},ut.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:It}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=It);const er=/^[og]\s*(.+)?/,Nr=/^mtllib /,nr=/^usemtl /,Ar=/^usemap /,oi=new O,on=new O,Ci=new O,Li=new O,OD=new O;function ir(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(M,D){if(this.object&&this.object.fromDeclaration===!1){this.object.name=M,this.object.fromDeclaration=D!==!1;return}const t=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:M||"",fromDeclaration:D!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,N){const A=this._finalize(!1);A&&(A.inherited||A.groupCount<=0)&&this.materials.splice(A.index,1);const i={index:this.materials.length,name:e||"",mtllib:Array.isArray(N)&&N.length>0?N[N.length-1]:"",smooth:A!==void 0?A.smooth:this.smooth,groupStart:A!==void 0?A.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(I){const z={index:typeof I=="number"?I:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return z.clone=this.clone.bind(z),z}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const N=this.currentMaterial();if(N&&N.groupEnd===-1&&(N.groupEnd=this.geometry.vertices.length/3,N.groupCount=N.groupEnd-N.groupStart,N.inherited=!1),e&&this.materials.length>1)for(let A=this.materials.length-1;A>=0;A--)this.materials[A].groupCount<=0&&this.materials.splice(A,1);return e&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),N}},t&&t.name&&typeof t.clone=="function"){const e=t.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(M,D){const t=parseInt(M,10);return(t>=0?t-1:t+D/3)*3},parseNormalIndex:function(M,D){const t=parseInt(M,10);return(t>=0?t-1:t+D/3)*3},parseUVIndex:function(M,D){const t=parseInt(M,10);return(t>=0?t-1:t+D/2)*2},addVertex:function(M,D,t){const e=this.vertices,N=this.object.geometry.vertices;N.push(e[M+0],e[M+1],e[M+2]),N.push(e[D+0],e[D+1],e[D+2]),N.push(e[t+0],e[t+1],e[t+2])},addVertexPoint:function(M){const D=this.vertices;this.object.geometry.vertices.push(D[M+0],D[M+1],D[M+2])},addVertexLine:function(M){const D=this.vertices;this.object.geometry.vertices.push(D[M+0],D[M+1],D[M+2])},addNormal:function(M,D,t){const e=this.normals,N=this.object.geometry.normals;N.push(e[M+0],e[M+1],e[M+2]),N.push(e[D+0],e[D+1],e[D+2]),N.push(e[t+0],e[t+1],e[t+2])},addFaceNormal:function(M,D,t){const e=this.vertices,N=this.object.geometry.normals;oi.fromArray(e,M),on.fromArray(e,D),Ci.fromArray(e,t),OD.subVectors(Ci,on),Li.subVectors(oi,on),OD.cross(Li),OD.normalize(),N.push(OD.x,OD.y,OD.z),N.push(OD.x,OD.y,OD.z),N.push(OD.x,OD.y,OD.z)},addColor:function(M,D,t){const e=this.colors,N=this.object.geometry.colors;e[M]!==void 0&&N.push(e[M+0],e[M+1],e[M+2]),e[D]!==void 0&&N.push(e[D+0],e[D+1],e[D+2]),e[t]!==void 0&&N.push(e[t+0],e[t+1],e[t+2])},addUV:function(M,D,t){const e=this.uvs,N=this.object.geometry.uvs;N.push(e[M+0],e[M+1]),N.push(e[D+0],e[D+1]),N.push(e[t+0],e[t+1])},addDefaultUV:function(){const M=this.object.geometry.uvs;M.push(0,0),M.push(0,0),M.push(0,0)},addUVLine:function(M){const D=this.uvs;this.object.geometry.uvs.push(D[M+0],D[M+1])},addFace:function(M,D,t,e,N,A,i,I,z){const T=this.vertices.length;let u=this.parseVertexIndex(M,T),g=this.parseVertexIndex(D,T),r=this.parseVertexIndex(t,T);if(this.addVertex(u,g,r),this.addColor(u,g,r),i!==void 0&&i!==""){const j=this.normals.length;u=this.parseNormalIndex(i,j),g=this.parseNormalIndex(I,j),r=this.parseNormalIndex(z,j),this.addNormal(u,g,r)}else this.addFaceNormal(u,g,r);if(e!==void 0&&e!==""){const j=this.uvs.length;u=this.parseUVIndex(e,j),g=this.parseUVIndex(N,j),r=this.parseUVIndex(A,j),this.addUV(u,g,r),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(M){this.object.geometry.type="Points";const D=this.vertices.length;for(let t=0,e=M.length;t<e;t++){const N=this.parseVertexIndex(M[t],D);this.addVertexPoint(N),this.addColor(N)}},addLineGeometry:function(M,D){this.object.geometry.type="Line";const t=this.vertices.length,e=this.uvs.length;for(let N=0,A=M.length;N<A;N++)this.addVertexLine(this.parseVertexIndex(M[N],t));for(let N=0,A=D.length;N<A;N++)this.addUVLine(this.parseUVIndex(D[N],e))}};return n.startObject("",!1),n}class zr extends FD{constructor(M){super(M),this.materials=null}load(M,D,t,e){const N=this,A=new Ai(this.manager);A.setPath(this.path),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(M,function(i){try{D(N.parse(i))}catch(I){e?e(I):console.error(I),N.manager.itemError(M)}},t,e)}setMaterials(M){return this.materials=M,this}parse(M){const D=new ir;M.indexOf(`\r
`)!==-1&&(M=M.replace(/\r\n/g,`
`)),M.indexOf(`\\
`)!==-1&&(M=M.replace(/\\\n/g,""));const t=M.split(`