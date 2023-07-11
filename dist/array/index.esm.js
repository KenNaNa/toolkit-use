/*!
 * toolkit-use v0.0.14
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.set.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.array.includes.js";function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(r)}var r=function(o,r){for(var t={},e=[],s=0;s<o.length;s++)t[o[s][r]]||(e.push(o[s]),t[o[s][r]]=!0);return e},t=function(o){var r=new Set(o);return Array.from(r)},e=function r(t){if([null,void 0,NaN,!1].includes(t)||"object"!==o(t)&&"function"!=typeof t)return t;var e=Array.isArray(t)?[]:{};for(var s in t)e[s]="object"===o(t[s])?r(t[s]):t[s];return e};export{e as deepClone,r as uniqueOptionsArr,t as uniqueValueArr};
