/**
 * @description: IToolkitUseString 接口
 * @param {function} padStartZero 数字前面补0
 * @return {*}
 */
export interface IToolkitUseString {
  padStartZero: (str: string | number, n: number) => string
}
