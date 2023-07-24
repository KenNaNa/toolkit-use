export declare const ToolkitUseArray: {
    /**
   * @description: 对象数组去重
   * @param {any} arr 对象数组
   * @param {string} uniKey 唯一的key
   * @return {*}
   */
    uniqueOptionsArr: (arr: any[], uniKey: string) => any[];
    /**
   * @description: 单值数组去重
   * @param {any} arr 单值数组
   * @return {*}
   */
    uniqueValueArr: (arr: any[]) => any[];
    /**
   * @description: 深拷贝
   * @param {Array | Object} obj
   * @return {*}
   */
    deepClone: (obj: any) => any;
};
