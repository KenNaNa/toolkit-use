/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
declare function isPlainObject(obj: any): boolean;
/**
 * @description: 将类数组对象转换为数组
 * @param {*} list
 * @param {*} start
 * @return {*}
 */
declare function toArray(list: any, start: any): any[];
declare function extend(to: any, _from: any): any;
/**
 * @description: 将对象数组合并到对象中
 * @param {*} arr
 * @return {*}
 */
declare function toObject(arr: any): {};
/**
 * @description: 传参是函数，返回也是函数，用于缓存创建的函数，上述的capitalize、hyphenate均使用了cached方法
 * @param {*} fn
 * @return {*}
 */
declare function cached(fn: any): (str: any) => any;
/**
 * @description: 创建 map
 * @param str 待判断字符串
 * @param expectsLowerCase 是否需要小写
 * @return {*}
 */
declare function makeMap(str: any, expectsLowerCase: any): (val: any) => any;
/**
 * @description: 删除数组项
 * @param {*} arr
 * @param {*} item
 * @return {*}
 */
declare function remove(arr: any, item: any): any;
/**
 * @description: 比较两数组是否相等
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
declare function looseCompareArrays(a: any, b: any): boolean;
export declare const ToolkitUseShared: {
    isUndef: (v: any) => boolean;
    isDef: (v: any) => boolean;
    isTrue: (v: any) => boolean;
    isFalse: (v: any) => boolean;
    isPrimitive: (v: any) => boolean;
    isObject: (obj: any) => boolean;
    isPromise: (val: any) => boolean;
    toRawType: (val: any) => string;
    hasOwn: (obj: any, key: any) => boolean;
    toNumber: (val: any) => any;
    isPlainObject: typeof isPlainObject;
    toString: (val: any) => string;
    toArray: typeof toArray;
    extend: typeof extend;
    toObject: typeof toObject;
    cached: typeof cached;
    capitalize: (str: any) => any;
    hyphenate: (str: any) => any;
    camelize: (str: any) => any;
    makeMap: typeof makeMap;
    looseEqual: (a: any, b: any) => any;
    remove: typeof remove;
    looseCompareArrays: typeof looseCompareArrays;
    def: (obj: any, key: any, value: any) => void;
    objectToString: () => string;
    toTypeString: (value: any) => string;
    isArray: (arg: any) => arg is any[];
    isMap: (val: any) => boolean;
    isSet: (val: any) => boolean;
    isDate: (val: any) => boolean;
    isFunction: (val: any) => boolean;
    isString: (val: any) => boolean;
    isSymbol: (val: any) => boolean;
    isIntegerKey: (key: any) => boolean;
    invokeArrayFns: (fns: any, arg: any) => void;
    hasChanged: (value: any, oldValue: any) => boolean;
};
export {};
