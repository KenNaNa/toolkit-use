/*!
 * toolkit-use v0.0.16
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.replace.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.number.constructor.js","core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.to-string.js","core-js/modules/es.array.slice.js","core-js/modules/es.regexp.exec.js","core-js/modules/es.string.replace.js"],s):s(((e="undefined"!=typeof globalThis?globalThis:e||self)["/src/decimal/index"]=e["/src/decimal/index"]||{},e["/src/decimal/index"].ts={}))}(this,(function(e){"use strict";var s={transform:function(e,s){var r=0,o=Number(e);if(!isNaN(o)){var t=o.toString().split(".");if(t.length>1&&t[1].length>s)"5"===t[1].slice(s,s+1)&&(o+=Math.pow(.1,s+1)),r=o.toFixed(s);else r=o;r=Number(r)}return r},percent:function(e,r){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=s.transform(Number(100*e),r).toString();return o&&(t+="%"),t},point:function(e,r){var o=e.replace("%",""),t=Number(o)/100;return s.transform(t,r)}};e.ToolkitUseDecimal=s}));
