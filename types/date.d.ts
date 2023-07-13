/**
 * @description: IToolkitUseDate 接口
 * @param {function} formatDate 格式化日期
 * @param {function} isLeap 判断润年
 * @param {function} getWeek 获取星期
 * @param {function} getMonthDays 获取月份天数
 * @param {function} padLeftZero 数字补零
 * @param {function} getToday 获取今天日期
 * @param {function} getYesterday 获取上一天日期
 * @param {function} getTomorrow 获取下一天日期
 * @param {function} beforeNDay 获取前n天日期
 * @param {function} afterNDay 获取后n天日期
 * @return {*}
 */
export interface IToolkitUseDate {
  formatDate: (dateObj: Date | string, format: string) => string
  isLeap: (year: number) => boolean
  getWeek: (date: Date | string) => string
  getMonthDays: (year: number, month: number) => number
  padLeftZero: (str: number) => string | number
  getToday: (str: string) => string
  getYesterday: (str: string) => string
  getTomorrow: (str: string) => string
  beforeNDay: (date: string, n: number) => string
  afterNDay: (date: string, n: number) => string
}