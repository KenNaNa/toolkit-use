/**
 * @description: IToolkitUseArray 接口
 * @param {function} uniqueOptionsArr 对象数组去重
 * @param {function} uniqueValueArr 单值数组去重
 * @param {function} deepClone 深拷贝
 * @return {*}
 */
export interface IToolkitUseArray {
  uniqueOptionsArr: (arr: any[], uniKey: string) => any[]
  uniqueValueArr: (arr: any[]) => any[]
  deepClone: (obj: any) => any
}