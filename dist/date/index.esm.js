/*!
 * toolkit-use v0.0.14
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.regexp.test.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.regexp.constructor.js";import"core-js/modules/es.regexp.sticky.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.object.to-string.js";function e(e,t){var s={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,e.getFullYear().toString().substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[e.getDay().toString()+""])),s)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s[r]+"":("00"+s[r]).substr((""+s[r]).length)));return t}export{e as formatDate};
