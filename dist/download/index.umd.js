/*!
 * toolkit-use v0.0.15
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.array.iterator.js","core-js/modules/es.object.to-string.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","core-js/modules/web.url.js","core-js/modules/web.url-search-params.js"],o):o(((e="undefined"!=typeof globalThis?globalThis:e||self)["/src/download/index"]=e["/src/download/index"]||{},e["/src/download/index"].ts={}))}(this,(function(e){"use strict";e.dataStreamDownloadExcelOrPdf=function(e,o,r,s){var t,d="";"pdf"===r&&(d=s||"application/pdf;chartset=utf-8",t="".concat(o,".pdf")),"excel"===r&&(d=s||"application/vnd.ms-excel;charset=utf-8",t="".concat(o,".xlsx"));var c=new Blob([e],{type:d});if("download"in document.createElement("a")){var n=document.createElement("a");n.download=t,n.style.display="none",n.href=URL.createObjectURL(c),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}else try{window.navigator.msSaveBlob(c,t)}catch(e){console.log(e)}},e.frontUrlDownload=function(e,o){var r=document.createElement("a");r.href=e,r.download=o,r.style.display="none",document.body.appendChild(r),r.click(),r.remove()}}));
