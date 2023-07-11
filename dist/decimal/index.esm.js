/*!
 * toolkit-use v0.0.14
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";var e=function(e,r){var s=0,o=Number(e);if(!isNaN(o)){var t=o.toString().split(".");if(t.length>1&&t[1].length>r)"5"===t[1].slice(r,r+1)&&(o+=Math.pow(.1,r+1)),s=o.toFixed(r);else s=o;s=Number(s)}return s};function r(r,s){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=e(Number(100*r),s).toString();return o&&(t+="%"),t}var s=function(r,s){var o=r.replace("%",""),t=Number(o)/100;return e(t,s)};export{r as toPercent,s as toPoint,e as transformDecimal};
