!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.array.slice.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.number.constructor.js","core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.to-string.js","core-js/modules/es.array.slice.js"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).decimal={})}(this,(function(e){"use strict";var s=function(e,s){var r=0,o=Number(e);if(!isNaN(o)){var t=o.toString().split(".");if(t.length>1&&t[1].length>s)"5"===t[1].slice(s,s+1)&&(o+=Math.pow(.1,s+1)),r=o.toFixed(s);else r=o;r=Number(r)}return r};e.toPercent=function(e,r){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=s(Number(100*e),r).toString();return o&&(t+="%"),t},e.transformDecimal=s}));
