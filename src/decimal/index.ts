/**
 * 四舍五入，保留指定小数位数，当原始数据不满足长度时，不要补 0
 * @param number [Number | String] 原始数据，支持字符串和数值型
 * @param i [Number] 保留的小数个数 >= 0
 * @returns [Number] 转换后的数据
 */
 export const transformDecimal = (nums: number, i: number): number => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let decimalNum: any = 0
  // 先转换为数值型
  let num = Number(nums)
  // 判断是否为数值型
  if (!isNaN(num)) {
    // 切分整数与小数
    const arr = num.toString().split('.')
    // 是小数且小数位大于保留个数
    if (arr.length > 1 && arr[1].length > i) {
      // 小数部分字符串
      const decimal = arr[1].slice(i, i + 1)
      // toFixed 有 bug，四舍六入五随机
      // 当四舍五入的数为 5，给其 + 1
      if (decimal === '5') {
        // 这里可能会存在 0.1 ** 5 = 0.000010000000000000003 但不影响四舍五入
        num += Math.pow(0.1, i + 1)
      }
      decimalNum = num.toFixed(i)
    } else {
      decimalNum = num
    }
    decimalNum = Number(decimalNum)
  }
  return decimalNum
}


/**
 * @description: 专成百分比
 * @param {number} point 小数
 * @param {number} i 保留几位小数
 * @param {boolean} flag 是否要转成百分比，默认转
 * @return {*}
 */
 export function toPercent(point: number, i: number, flag = true): string {
  let percent = transformDecimal(Number(point * 100), i).toString()
  if (flag) {
    percent += '%'
  }
  return percent
}

/**
 * @description: 将百分比转成小数
 * @param {string} percent 百分比
 * @param {number} i 保留几位小数
 * @return {*}
 */
export const toPoint = (percent: string, i: number) => {
  let str = percent.replace('%', '')
  const aaa = Number(str) / 100
  return transformDecimal(aaa, i)
}