/*!
 * toolkit-use v0.0.15
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";var r={transform:function(r,e){var o=0,s=Number(r);if(!isNaN(s)){var t=s.toString().split(".");if(t.length>1&&t[1].length>e)"5"===t[1].slice(e,e+1)&&(s+=Math.pow(.1,e+1)),o=s.toFixed(e);else o=s;o=Number(o)}return o},percent:function(e,o){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=r.transform(Number(100*e),o).toString();return s&&(t+="%"),t},point:function(e,o){var s=e.replace("%",""),t=Number(s)/100;return r.transform(t,o)}};export{r as ToolkitUseDecimal};
