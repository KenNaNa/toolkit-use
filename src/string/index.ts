/**
 * @description: 数字前面补0
 * @param {string|number} str 字符串或者数字
 * @param {number} n 0的个数
 * @return {*}
 */
 export const padStartZero = (str: string | number, n = 2) => {
  return String(str).padStart(n, '0')
}