!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("clipboard")):"function"==typeof define&&define.amd?define(["exports","clipboard"],o):o((t="undefined"!=typeof globalThis?globalThis:t||self).index={},t.Clipboard)}(this,(function(t,o){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var o=function(t,o){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,o||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(t,"string");return"symbol"===e(o)?o:String(o)}function i(t,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function n(t,o,e){return(o=r(o))in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var s=function(){function t(e){var r=this;!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_data",""),n(this,"_class",""),n(this,"_clipboard",void 0),n(this,"_options",void 0),this._class=e.className,this._data=e.message,console.log("options",e,this._class),this._clipboard=new o(this._class,{text:function(){return r._data}}),this._options=e}var e,r,s;return e=t,(r=[{key:"copy",value:function(){var t=this;return this._clipboard.on("success",(function(){t._options.onSuccess&&t._options.onSuccess(),t._clipboard.destroy()})),this._clipboard.on("error",(function(){t._options.onError&&t._options.onError(),t._clipboard.destroy()})),this._clipboard}}])&&i(e.prototype,r),s&&i(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.ToolkitUseClipboard=s}));
