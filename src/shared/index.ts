import { ToolkitUseRegex } from '../regex/index'
/**
 * @description: 判断是否为undefined或null
 * @param {any} v
 * @return {*}
 */
const isUndef = (v: any) => {
  return v === undefined || v === null
}


/**
 * @description: 判断是否为undefined或null
 * @param {any} v
 * @return {*}
 */
const isDef = (v: any) => {
  return v !== undefined && v !== null
}

/**
 * @description: 判断真假与否
 * @param {any} v
 * @return {*}
 */
const isTrue = (v: any) => {
  return v === true
}

/**
 * @description: 判断真假与否
 * @param {any} v
 * @return {*}
 */
const isFalse = (v: any) => {
  return v === false
}

/**
 * @description: 数据类型是否为基础类型（部分）
 * @param {any} v
 * @return {*}
 */
const isPrimitive = (v: any) => {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}

/**
 * @description: 是否为引用类型或通过由new构造的类型
 * @param {any} obj
 * @return {*}
 */
const isObject = (obj: any) => {
  return obj !== null && typeof obj === 'object'  // 注意 null 在 typeof 的坑
}

/**
 * @description: 是否为 Promise 函数
 * @param {any} val
 * @return {*}
 */
const isPromise = (val: any) => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

const _toString = Object.prototype.toString

/**
 * @description: 获取值的原始类型字符串
 * @param {any} val
 * @return {*}
 */
const toRawType = (val: any) => {
  return _toString.call(val).slice(8, -1)
}

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * @description: 判断对象是否存在指定属性
 * @param {any} obj
 * @param {any} key
 * @return {*}
 */
const hasOwn = (obj: any, key: any) => {
  return hasOwnProperty.call(obj, key)
}


/**
 * @description: 转换为数字
 * @param {any} val
 * @return {*}
 */
const toNumber = (val: any) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n
}


/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj: any) {
  if (typeof obj !== 'object' || obj === null) return false

  const proto = Object.getPrototypeOf(obj)
  // 1. edge case Object.create(null)
  if (proto === null) return true
  let baseProto = proto
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto)
  }
  // 2. 原型链第一个和最后一个比较
  return proto === baseProto
}



/**
 * @description: 转换为字符串
 * @param {any} val
 * @return {*}
 */
const toString = (val: any) => {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)  // 针对数组或对象
      : String(val)
}

/**
 * @description: 将类数组对象转换为数组
 * @param {*} list
 * @param {*} start
 * @return {*}
 */
function toArray(list: any, start: any) {
  start = start || 0;
  let i = list.length - start;
  let ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}


// 将属性赋予目标对象
function extend(to: any, _from: any) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * @description: 将对象数组合并到对象中
 * @param {*} arr
 * @return {*}
 */
function toObject(arr: any) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * @description: 传参是函数，返回也是函数，用于缓存创建的函数，上述的capitalize、hyphenate均使用了cached方法
 * @param {*} fn
 * @return {*}
 */
function cached(fn: any) {
  let cache = Object.create(null);
  return (function cachedFn(str: any) {
    let hit = cache[str];  // 进行缓存
    return hit || (cache[str] = fn(str))
  })
}



/**
 * @description: 驼峰式变短横线分隔
 * @param {*} function
 * @return {*}
 */
const capitalize = cached(function (str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});


/**
 * @description: 驼峰式变短横线分隔
 * @param {*} function
 * @return {*}
 */
const hyphenate = cached(function (str: any) {
  return str.replace(ToolkitUseRegex.hyphenateRE, '-$1').toLowerCase()
});


/**
 * @description: 短横线分隔变驼峰式
 * @param {*} function
 * @param {*} function
 * @param {*} c
 * @return {*}
 */
const camelize = cached(function (str: any) {
  return str.replace(ToolkitUseRegex.camelizeRE, function (_: any, c: any) { return c ? c.toUpperCase() : ''; })
});

/**
 * @description: 创建 map
 * @param str 待判断字符串
 * @param expectsLowerCase 是否需要小写
 * @return {*}
 */
function makeMap(
  str: any,
  expectsLowerCase: any
) {
  let map = Object.create(null);
  let list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val: any) { return map[val.toLowerCase()]; }
    : function (val: any) { return map[val]; }
}


/**
 * @description: 判断对象是否相等
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
const looseEqual = (a: any, b: any) => {
  // a、b恒等于，返回true
  if (a === b) { return true }
  let isObjectA = isObject(a);
  let isObjectB = isObject(b);
  // 判断是否为对象（引用类型）
  if (isObjectA && isObjectB) {
    try {
      let isArrayA = Array.isArray(a);
      let isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        // 若两者为数组，当长度一致时再递归判断每个数据项，不一致时返回false
        return a.length === b.length && a.every(function (e: any, i: any) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        // 若两者为Date类型，利用时间戳判断
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        // 若两者为对象，当长度一致时再递归判断每个属性值是否相同，不一致时返回false
        let keysA = Object.keys(a);
        let keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    // 若两者均不是对象（引用类型），转为字符串比较
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * @description: 删除数组项
 * @param {*} arr
 * @param {*} item
 * @return {*}
 */
function remove(arr: any, item: any) {
  if (arr.length) {
    let index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * @description: 比较两数组是否相等
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
function looseCompareArrays(a: any, b: any) {
  // 若长度不一致，返回false
  if (a.length !== b.length)
    return false;
  let equal = true;
  // 若长度一致，再逐个数组项进行对比
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}

/**
 * @description: 定义对象属性
 * @param {*} obj
 * @param {*} key
 * @param {*} value
 * @return {*}
 */
const def = (obj: any, key: any, value: any) => {
  Object.defineProperty(obj, key, {
    configurable: true,  // 可配置的
    enumerable: false,  // 不可枚举的
    value
  });
};

/**
 * @description: 获取原型上面的 toString 方法
 * @return {*}
 */
const objectToString = Object.prototype.toString;
/**
 * @description: 方法函数
 * @param {*} value
 * @return {*}
 */
const toTypeString = (value: any) => objectToString.call(value);
/**
 * @description: 检测数组
 * @return {*}
 */
const isArray = Array.isArray;
/**
 * @description: 检测 map
 * @param {*} val
 * @return {*}
 */
const isMap = (val: any) => toTypeString(val) === '[object Map]';
/**
 * @description: 检测 set
 * @param {*} val
 * @return {*}
 */
const isSet = (val: any) => toTypeString(val) === '[object Set]';
/**
 * @description: 检测日期
 * @param {*} val
 * @return {*}
 */
const isDate = (val: any) => val instanceof Date;
/**
 * @description: 检测函数
 * @param {*} val
 * @return {*}
 */
const isFunction = (val: any) => typeof val === 'function';
/**
 * @description: 检测字符串
 * @param {*} val
 * @return {*}
 */
const isString = (val: any) => typeof val === 'string';
/**
 * @description: 检测 symbol
 * @param {*} val
 * @return {*}
 */
const isSymbol = (val: any) => typeof val === 'symbol';




/**
 * @description: 判断是否为整数键值
 * @param {*} key
 * @return {*}
 */
const isIntegerKey = (key: any) => isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;

/**
 * @description: fns是数组，各元素均为函数，遍历数组执行，利于一次性执行多个函数
 * @param {*} fns
 * @param {*} arg
 * @return {*}
 */
const invokeArrayFns = (fns: any, arg: any) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

/**
 * @description: 比较两个值是否相等，利用Object.is，与严格比较运算符（===）的行为基本一致，但注意：+0不等于-0，NaN等于自身
 * @param {*} value
 * @param {*} oldValue
 * @return {*}
 */
const hasChanged = (value: any, oldValue: any) => !Object.is(value, oldValue)

export const ToolkitUseShared = {
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isObject,
  isPromise,
  toRawType,
  hasOwn,
  toNumber,
  isPlainObject,
  toString,
  toArray,
  extend,
  toObject,
  cached,
  capitalize,
  hyphenate,
  camelize,
  makeMap,
  looseEqual,
  remove,
  looseCompareArrays,
  def,
  objectToString,
  toTypeString,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isIntegerKey,
  invokeArrayFns,
  hasChanged
}