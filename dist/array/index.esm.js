/*!
 * toolkit-use v0.0.16
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.set.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.array.includes.js";function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(r)}var r={uniqueOptionsArr:function(o,r){for(var e={},t=[],n=0;n<o.length;n++)e[o[n][r]]||(t.push(o[n]),e[o[n][r]]=!0);return t},uniqueValueArr:function(o){var r=new Set(o);return Array.from(r)},deepClone:function(e){if([null,void 0,NaN,!1].includes(e)||"object"!==o(e)&&"function"!=typeof e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]="object"===o(e[n])?r.deepClone(e[n]):e[n];return t}};export{r as ToolkitUseArray};
