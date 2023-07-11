/*!
 * toolkit-use v0.0.14
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.url.js";import"core-js/modules/web.url-search-params.js";var e=function(e,o){var t=document.createElement("a");t.href=e,t.download=o,t.style.display="none",document.body.appendChild(t),t.click(),t.remove()},o=function(e,o,t,r){var c,a="";"pdf"===t&&(a=r||"application/pdf;chartset=utf-8",c="".concat(o,".pdf")),"excel"===t&&(a=r||"application/vnd.ms-excel;charset=utf-8",c="".concat(o,".xlsx"));var s=new Blob([e],{type:a});if("download"in document.createElement("a")){var l=document.createElement("a");l.download=c,l.style.display="none",l.href=URL.createObjectURL(s),document.body.appendChild(l),l.click(),URL.revokeObjectURL(l.href),document.body.removeChild(l)}else try{window.navigator.msSaveBlob(s,c)}catch(e){console.log(e)}};export{o as dataStreamDownloadExcelOrPdf,e as frontUrlDownload};
