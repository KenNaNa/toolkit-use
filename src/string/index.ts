/**
 * @description: 数字前面补0
 * @param {String|Number} str 字符串或者数字
 * @return {*}
 */
 export const padStartZero = (str: string | number) => {
  return String(str).padStart(2, '0')
}