/*!
 * toolkit-use v0.0.15
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("clipboard"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.set.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.from.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.regexp.test.js"),require("core-js/modules/es.string.replace.js"),require("core-js/modules/es.regexp.constructor.js"),require("core-js/modules/es.regexp.sticky.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.string.pad-start.js"),require("core-js/modules/es.parse-float.js"),require("core-js/modules/es.object.get-prototype-of.js"),require("core-js/modules/es.json.stringify.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.array.splice.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.parse-int.js")):"function"==typeof define&&define.amd?define(["exports","clipboard","core-js/modules/es.array.iterator.js","core-js/modules/es.object.to-string.js","core-js/modules/es.set.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","core-js/modules/es.array.from.js","core-js/modules/es.array.includes.js","core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.test.js","core-js/modules/es.string.replace.js","core-js/modules/es.regexp.constructor.js","core-js/modules/es.regexp.sticky.js","core-js/modules/es.regexp.to-string.js","core-js/modules/es.number.constructor.js","core-js/modules/es.array.slice.js","core-js/modules/web.url.js","core-js/modules/web.url-search-params.js","core-js/modules/es.string.pad-start.js","core-js/modules/es.parse-float.js","core-js/modules/es.object.get-prototype-of.js","core-js/modules/es.json.stringify.js","core-js/modules/es.object.keys.js","core-js/modules/es.array.index-of.js","core-js/modules/es.array.splice.js","core-js/modules/es.object.define-property.js","core-js/modules/es.parse-int.js"],r):r(((e="undefined"!=typeof globalThis?globalThis:e||self)["/src/index"]=e["/src/index"]||{},e["/src/index"].ts={}),e.Clipboard)}(this,(function(e,r){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function s(e,r,t){return(r=o(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(){function e(t){var o=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_data",""),s(this,"_class",""),s(this,"_clipboard",void 0),s(this,"_options",void 0),this._class=t.className,this._data=t.message,console.log("options",t,this._class),this._clipboard=new r(this._class,{text:function(){return o._data}}),this._options=t}var t,o,i;return t=e,(o=[{key:"copy",value:function(){var e=this;return this._clipboard.on("success",(function(){e._options.onSuccess&&e._options.onSuccess(),e._clipboard.destroy()})),this._clipboard.on("error",(function(){e._options.onError&&e._options.onError(),e._clipboard.destroy()})),this._clipboard}}])&&n(t.prototype,o),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();var u=function(e,r){var t=0,o=Number(e);if(!isNaN(o)){var n=o.toString().split(".");if(n.length>1&&n[1].length>r)"5"===n[1].slice(r,r+1)&&(o+=Math.pow(.1,r+1)),t=o.toFixed(r);else t=o;t=Number(t)}return t};var c=/\B([A-Z])/g,a=/-(\w)/g,l=function(e){return null!=e},f=function(e){return null!==e&&"object"===t(e)},d=Object.prototype.toString,j=Object.prototype.hasOwnProperty;function p(e){if("object"!==t(e)||null===e)return!1;var r=Object.getPrototypeOf(e);if(null===r)return!0;for(var o=r;null!==Object.getPrototypeOf(o);)o=Object.getPrototypeOf(o);return r===o}function m(e,r){for(var t in r)e[t]=r[t];return e}function y(e){var r=Object.create(null);return function(t){return r[t]||(r[t]=e(t))}}var g=y((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),b=y((function(e){return e.replace(c,"-$1").toLowerCase()})),h=y((function(e){return e.replace(a,(function(e,r){return r?r.toUpperCase():""}))}));var v=function e(r,t){if(r===t)return!0;var o=f(r),n=f(t);if(!o||!n)return!o&&!n&&String(r)===String(t);try{var s=Array.isArray(r),i=Array.isArray(t);if(s&&i)return r.length===t.length&&r.every((function(r,o){return e(r,t[o])}));if(r instanceof Date&&t instanceof Date)return r.getTime()===t.getTime();if(s||i)return!1;var u=Object.keys(r),c=Object.keys(t);return u.length===c.length&&u.every((function(o){return e(r[o],t[o])}))}catch(e){return!1}};var x=Object.prototype.toString,S=function(e){return x.call(e)},w=Array.isArray,q=function(e){return"string"==typeof e};e.ToolkitUseClipboard=i,e.cached=y,e.camelize=h,e.capitalize=g,e.dataStreamDownloadExcelOrPdf=function(e,r,t,o){var n,s="";"pdf"===t&&(s=o||"application/pdf;chartset=utf-8",n="".concat(r,".pdf")),"excel"===t&&(s=o||"application/vnd.ms-excel;charset=utf-8",n="".concat(r,".xlsx"));var i=new Blob([e],{type:s});if("download"in document.createElement("a")){var u=document.createElement("a");u.download=n,u.style.display="none",u.href=URL.createObjectURL(i),document.body.appendChild(u),u.click(),URL.revokeObjectURL(u.href),document.body.removeChild(u)}else try{window.navigator.msSaveBlob(i,n)}catch(e){console.log(e)}},e.deepClone=function e(r){if([null,void 0,NaN,!1].includes(r)||"object"!==t(r)&&"function"!=typeof r)return r;var o=Array.isArray(r)?[]:{};for(var n in r)o[n]="object"===t(r[n])?e(r[n]):r[n];return o},e.def=function(e,r,t){Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:t})},e.extend=m,e.formatDate=function(e,r){var t={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,e.getFullYear().toString().substr(4-RegExp.$1.length))),/(E+)/.test(r)&&(r=r.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[e.getDay().toString()+""])),t)new RegExp("("+o+")").test(r)&&(r=r.replace(RegExp.$1,1==RegExp.$1.length?t[o]+"":("00"+t[o]).substr((""+t[o]).length)));return r},e.frontUrlDownload=function(e,r){var t=document.createElement("a");t.href=e,t.download=r,t.style.display="none",document.body.appendChild(t),t.click(),t.remove()},e.hasChanged=function(e,r){return!Object.is(e,r)},e.hasOwn=function(e,r){return j.call(e,r)},e.hyphenate=b,e.invokeArrayFns=function(e,r){for(var t=0;t<e.length;t++)e[t](r)},e.isArray=w,e.isDate=function(e){return e instanceof Date},e.isDef=l,e.isFalse=function(e){return!1===e},e.isFunction=function(e){return"function"==typeof e},e.isIntegerKey=function(e){return q(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e},e.isMap=function(e){return"[object Map]"===S(e)},e.isObject=f,e.isPlainObject=p,e.isPrimitive=function(e){return"string"==typeof e||"number"==typeof e||"symbol"===t(e)||"boolean"==typeof e},e.isPromise=function(e){return l(e)&&"function"==typeof e.then&&"function"==typeof e.catch},e.isSet=function(e){return"[object Set]"===S(e)},e.isString=q,e.isSymbol=function(e){return"symbol"===t(e)},e.isTrue=function(e){return!0===e},e.isUndef=function(e){return null==e},e.looseCompareArrays=function(e,r){if(e.length!==r.length)return!1;for(var t=!0,o=0;t&&o<e.length;o++)t=v(e[o],r[o]);return t},e.looseEqual=v,e.makeMap=function(e,r){for(var t=Object.create(null),o=e.split(","),n=0;n<o.length;n++)t[o[n]]=!0;return r?function(e){return t[e.toLowerCase()]}:function(e){return t[e]}},e.objectToString=x,e.padStartZero=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(r,"0")},e.remove=function(e,r){if(e.length){var t=e.indexOf(r);if(t>-1)return e.splice(t,1)}},e.toArray=function(e,r){r=r||0;for(var t=e.length-r,o=new Array(t);t--;)o[t]=e[t+r];return o},e.toNumber=function(e){var r=parseFloat(e);return isNaN(r)?e:r},e.toObject=function(e){for(var r={},t=0;t<e.length;t++)e[t]&&m(r,e[t]);return r},e.toPercent=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=u(Number(100*e),r).toString();return t&&(o+="%"),o},e.toPoint=function(e,r){var t=e.replace("%",""),o=Number(t)/100;return u(o,r)},e.toRawType=function(e){return d.call(e).slice(8,-1)},e.toString=function(e){return null==e?"":Array.isArray(e)||p(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)},e.toTypeString=S,e.transformDecimal=u,e.uniqueOptionsArr=function(e,r){for(var t={},o=[],n=0;n<e.length;n++)t[e[n][r]]||(o.push(e[n]),t[e[n][r]]=!0);return o},e.uniqueValueArr=function(e){var r=new Set(e);return Array.from(r)}}));
