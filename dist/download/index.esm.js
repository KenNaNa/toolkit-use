/*!
 * toolkit-use v0.0.15
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.url.js";import"core-js/modules/web.url-search-params.js";var e={frontUrlDownload:function(e,o){var t=document.createElement("a");t.href=e,t.download=o,t.style.display="none",document.body.appendChild(t),t.click(),t.remove()},dataStreamDownloadExcelOrPdf:function(e,o,t,r){var a,c="";"pdf"===t&&(c=r||"application/pdf;chartset=utf-8",a="".concat(o,".pdf")),"excel"===t&&(c=r||"application/vnd.ms-excel;charset=utf-8",a="".concat(o,".xlsx"));var l=new Blob([e],{type:c});if("download"in document.createElement("a")){var d=document.createElement("a");d.download=a,d.style.display="none",d.href=URL.createObjectURL(l),document.body.appendChild(d),d.click(),URL.revokeObjectURL(d.href),document.body.removeChild(d)}else try{window.navigator.msSaveBlob(l,a)}catch(e){console.log(e)}}};export{e as ToolkitUseDownload};
