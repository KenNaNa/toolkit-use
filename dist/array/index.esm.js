import"core-js/modules/es.array.includes.js";function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(r)}var r=function(o,r){for(var t={},n=[],e=0;e<o.length;e++)t[o[e][r]]||(n.push(o[e]),t[o[e][r]]=!0);return n},t=function r(t){if([null,void 0,NaN,!1].includes(t)||"object"!==o(t)&&"function"!=typeof t)return t;var n=Array.isArray(t)?[]:{};for(var e in t)n[e]="object"===o(t[e])?r(t[e]):t[e];return n};export{t as deepClone,r as uniqueArr};
