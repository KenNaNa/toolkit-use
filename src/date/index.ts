export const ToolkitUseDate = {
  /**
 * 日期时间格式化函数
 * @param dateObj {Date} date实例
 * @param format {String} 格式字符串 'yyyy-MM-dd HH:mm:ss'
 * @returns {String} 格式化后的字符串
 */
  formatDate: (dateObj: Date | string, format: string) => {
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
  },
  /**
 * 判断润年
 * @param {string} year 年份
 * @return {Boolean}
 */
  isLeap: (year: number) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true
    } else {
      return false
    }
  },
  /**
 * 获取星期
 * @param {string} date 日期
 * @return {string} 星期
 */
  getWeek: (date: Date | string) => {
    let Stamp = new Date(date);
    let weeks = ["日", "一", "二", "三", "四", "五", "六"];
    return weeks[Stamp.getDay()];
  },
  /**
 * 获取月份天数
 * @param {string} year  年份
 * @param {string} month 月份
 * @return {number} 月份天数
 */
  getMonthDays: (year: number, month: number): number => {
    month = parseInt(String(month)) - 1;
    if (month < 0 || month > 11) return 0;
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (ToolkitUseDate.isLeap(year)) {
      months[1] = 29;
    }
    return months[month];
  },
  /**
 * 数字补零
 * @param {string} str
 * @return {string}
 */
  padLeftZero: (str: number) => {
    const aa = parseInt(String(str));
    return aa > 9 ? aa : "0" + aa;
  },
  /**
 * 获取今天日期
 * @param {string} str  日期格式
 * @return {string} 格式化日期
 */
  getToday: (str = 'yyyy-mm-dd') => {
    const date = new Date();
    const year = date.getFullYear(),
      month = ToolkitUseDate.padLeftZero(date.getMonth() + 1),
      day = ToolkitUseDate.padLeftZero(date.getDate()),
      hour = ToolkitUseDate.padLeftZero(date.getHours()),
      minute = ToolkitUseDate.padLeftZero(date.getMinutes()),
      second = ToolkitUseDate.padLeftZero(date.getSeconds());
    let res;
    switch (str) {
      case "yyyy-mm-dd":
        res = year + "-" + month + "-" + day;
        break;
      case "mm-dd-yyyy":
        res = month + "-" + day + "-" + year;
        break;
      case "yyyy-mm-dd hh:MM:ss":
        res =
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second;
        break;
      case "hh:MM:ss":
        res = hour + ":" + minute + ":" + second;
        break;
      case "yyyy":
        res = year;
        break;
      case "mm":
        res = month;
        break;
      case "dd":
        res = day;
        break;
      case "hh":
        res = hour;
        break;
      case "MM":
        res = minute;
        break;
      case "ss":
        res = second;
        break;
      case "mm-dd":
        res = month + "-" + day;
        break;
      default:
        res = "参数错误";
        break;
    }
    return res;
  },
  /**
 * 获取上一天日期
 * @param {string} str  当前日期
 * @return {string} 上一天日期
 */
  getYesterday: (str: string) => {
    let date = str.split("-");
    let year = parseInt(date[0]),
      month = parseInt(date[1]),
      day = parseInt(date[2]);
    if (month > 12 || month < 1 || day > ToolkitUseDate.getMonthDays(year, month))
      return "日期不合法";
    day -= 1;
    if (day > 0) {
      return year + "-" + ToolkitUseDate.padLeftZero(month) + "-" + ToolkitUseDate.padLeftZero(day);
    }
    month -= 1;
    if (month > 0) {
      return year + "-" + ToolkitUseDate.padLeftZero(month) + "-" + ToolkitUseDate.getMonthDays(year, month);
    }
    year -= 1;
    return year + "-" + 12 + "-" + ToolkitUseDate.getMonthDays(year, 12);
  },
  /**
 * 获取下一天日期
 * @param {string} str  当前日期
 * @return {string} 下一天日期
 */
  getTomorrow: (str: string) => {
    let date = str.split("-");
    let year = parseInt(date[0]),
      month = parseInt(date[1]),
      day = parseInt(date[2]);
    if (month > 12 || month < 1 || day > ToolkitUseDate.getMonthDays(year, month))
      return "日期不合法";
    day += 1;
    if (day <= ToolkitUseDate.getMonthDays(year, month)) {
      return year + "-" + ToolkitUseDate.padLeftZero(month) + "-" + ToolkitUseDate.padLeftZero(day);
    }
    month += 1;
    if (month < 13) {
      return year + "-" + ToolkitUseDate.padLeftZero(month) + "-" + "01";
    }
    year += 1;
    return year + "-" + "01" + "-" + "01";
  },
  /**
 * 获取前n天日期
 * @param {string} n  当前日期
 * @return {string} 前n天日期
 */
  beforeNDay: (date: string, n: number) => {
    if (date.split("-").length < 3) return "日期格式错误";
    let res = ToolkitUseDate.formatDate(date, 'yyyy-MM-dd HH:mm:ss');
    n = parseInt(String(n));
    while (n--) {
      res = ToolkitUseDate.getYesterday(res);
    }
    return res;
  },
  /**
 * 获取后n天日期
 * @param {string} n  当前日期
 * @return {string} 后n天日期
 */
  afterNDay: (date: string, n: number) => {
    if (date.split("-").length < 3) return "日期格式错误";
    let res = ToolkitUseDate.formatDate(date, 'yyyy-MM-dd HH:mm:ss')
    while (n--) {
      res = ToolkitUseDate.getTomorrow(res);
    }
    return res;
  }
}