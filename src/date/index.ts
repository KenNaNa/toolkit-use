/**
 * 日期时间格式化函数
 * @param dateObj {Date} date实例
 * @param format {String} 格式字符串 'yyyy-MM-dd HH:mm:ss'
 * @returns {String} 格式化后的字符串
 */
export function formatDate(dateObj: any, format: string): string {
  dateObj = new Date(dateObj)
  const o: Record<string, string | number> = {
    'M+': dateObj.getMonth() + 1,
    'd+': dateObj.getDate(),
    'h+': dateObj.getHours() % 12 === 0 ? 12 : dateObj.getHours() % 12,
    'H+': dateObj.getHours(),
    'm+': dateObj.getMinutes(),
    's+': dateObj.getSeconds(),
    'q+': Math.floor((dateObj.getMonth() + 3) / 3),
    S: dateObj.getMilliseconds(),
  }
  const week: Record<string, string> = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d',
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateObj.getFullYear().toString()).substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') +
        week[dateObj.getDay().toString() + '']
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] + '' : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}