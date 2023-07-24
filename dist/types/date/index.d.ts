export declare const ToolkitUseDate: {
    /**
   * 日期时间格式化函数
   * @param dateObj {Date} date实例
   * @param format {String} 格式字符串 'yyyy-MM-dd HH:mm:ss'
   * @returns {String} 格式化后的字符串
   */
    formatDate: (dateObj: Date | string, format: string) => string;
    /**
   * 判断润年
   * @param {string} year 年份
   * @return {Boolean}
   */
    isLeap: (year: number) => boolean;
    /**
   * 获取星期
   * @param {string} date 日期
   * @return {string} 星期
   */
    getWeek: (date: Date | string) => string;
    /**
   * 获取月份天数
   * @param {string} year  年份
   * @param {string} month 月份
   * @return {number} 月份天数
   */
    getMonthDays: (year: number, month: number) => number;
    /**
   * 数字补零
   * @param {string} str
   * @return {string}
   */
    padLeftZero: (str: number) => string | number;
    /**
   * 获取今天日期
   * @param {string} str  日期格式
   * @return {string} 格式化日期
   */
    getToday: (str?: string) => any;
    /**
   * 获取上一天日期
   * @param {string} str  当前日期
   * @return {string} 上一天日期
   */
    getYesterday: (str: string) => string;
    /**
   * 获取下一天日期
   * @param {string} str  当前日期
   * @return {string} 下一天日期
   */
    getTomorrow: (str: string) => string;
    /**
   * 获取前n天日期
   * @param {string} n  当前日期
   * @return {string} 前n天日期
   */
    beforeNDay: (date: string, n: number) => string;
    /**
   * 获取后n天日期
   * @param {string} n  当前日期
   * @return {string} 后n天日期
   */
    afterNDay: (date: string, n: number) => string;
};
