export declare const ToolkitUseDecimal: {
    /**
   * 四舍五入，保留指定小数位数，当原始数据不满足长度时，不要补 0
   * @param number [Number | String] 原始数据，支持字符串和数值型
   * @param i [Number] 保留的小数个数 >= 0
   * @returns [Number] 转换后的数据
   */
    transform: (nums: number, i: number) => number;
    /**
   * @description: 转成百分比
   * @param {number} point 小数
   * @param {number} i 保留几位小数
   * @param {boolean} flag 是否要转成百分比，默认转
   * @return {*}
   */
    percent: (point: number, i: number, flag?: boolean) => string;
    /**
   * @description: 将百分比转成小数
   * @param {string} percent 百分比
   * @param {number} i 保留几位小数
   * @return {*}
   */
    point: (percent: string, i: number) => number;
};
