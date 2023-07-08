/**
 * @description: 对象数组去重
 * @param {any} arr 对象数组
 * @param {string} uniKey 唯一的key
 * @return {*}
 */
 export const uniqueOptionsArr = (arr: any[], uniKey: string) => {
  const obj: any = {}
  const newArr: any[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i][uniKey]]) {
      newArr.push(arr[i])
      obj[arr[i][uniKey]] = true
    }
  }
  return newArr
}

/**
 * @description: 单值数组去重
 * @param {any} arr 单值数组
 * @return {*}
 */
export const uniqueValueArr = (arr: any[]) => {
  const set = new Set(arr)
  const list = Array.from(set)
  return list
}


/**
 * @description: 深拷贝
 * @param {Array | Object} obj
 * @return {*}
 */
 export const deepClone = (obj: any) => {
  if (
    [null, undefined, NaN, false].includes(obj) ||
    (typeof obj !== 'object' && typeof obj !== 'function')
  ) {
    return obj
  }

  const o: any = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
  }
  return o
}