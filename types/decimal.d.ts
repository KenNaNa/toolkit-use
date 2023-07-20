/**
 * @description: IToolkitUseDecimal 接口
 * @param {function} transform 四舍五入，保留指定小数位数
 * @param {function} toPercent 转成百分比
 * @param {function} toPoint 将百分比转成小数
 * @return {*}
 */
export interface IToolkitUseDecimal {
  transform: (nums: number, i: number) => number
  percent: (point: number, i: number, flag: boolean) => string
  point: (percent: string, i: number) => number
}