/*!
 * toolkit-use v0.1.3
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.url.js";import"core-js/modules/web.url-search-params.js";var e={frontUrlDownload:function(e,o){var t=document.createElement("a");t.href=e,t.download=o,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},dataStreamDownloadExcelOrPdf:function(e,o,t,r){var a,c="";"pdf"===t&&(c=r||"application/pdf;chartset=utf-8",a="".concat(o,".pdf")),"excel"===t&&(c=r||"application/vnd.ms-excel;charset=utf-8",a="".concat(o,".xlsx"));var d=new Blob([e],{type:c});if("download"in document.createElement("a")){var l=document.createElement("a");l.download=a,l.style.display="none",l.href=URL.createObjectURL(d),document.body.appendChild(l),l.click(),URL.revokeObjectURL(l.href),document.body.removeChild(l)}else try{window.navigator.msSaveBlob(d,a)}catch(e){console.log(e)}}};export{e as ToolkitUseDownload};
