/*!
 * toolkit-use v0.0.16
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.splice.js";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function r(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t(o.key),o)}}var n=function(){function e(){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="_hub",o=Object.create(null),(n=t(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}var n,o,i;return n=e,(o=[{key:"emit",value:function(e,t){(this._hub[e]||[]).forEach((function(e){return e(t)}))}},{key:"on",value:function(e,t){this._hub[e]||(this._hub[e]=[]),this._hub[e].push(t)}},{key:"off",value:function(e,t){var r=(this._hub[e]||[]).findIndex((function(e){return e===t}));r>-1&&this._hub[e].splice(r,1),0===this._hub[e].length&&delete this._hub[e]}}])&&r(n.prototype,o),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}(),o=function(){return new n};export{o as useEventHub};
