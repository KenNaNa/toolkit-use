/*!
 * toolkit-use v0.0.16
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.find-index.js"),require("core-js/modules/es.array.splice.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.object.to-string.js","core-js/modules/web.dom-collections.for-each.js","core-js/modules/es.array.find-index.js","core-js/modules/es.array.splice.js"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self)["/src/event-hub/index"]=e["/src/event-hub/index"]||{},e["/src/event-hub/index"].ts={}))}(this,(function(e){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}var o=function(){function e(){var t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="_hub",o=Object.create(null),(n=r(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}var t,o,i;return t=e,(o=[{key:"emit",value:function(e,t){(this._hub[e]||[]).forEach((function(e){return e(t)}))}},{key:"on",value:function(e,t){this._hub[e]||(this._hub[e]=[]),this._hub[e].push(t)}},{key:"off",value:function(e,t){var r=(this._hub[e]||[]).findIndex((function(e){return e===t}));r>-1&&this._hub[e].splice(r,1),0===this._hub[e].length&&delete this._hub[e]}}])&&n(t.prototype,o),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.useEventHub=function(){return new o}}));
