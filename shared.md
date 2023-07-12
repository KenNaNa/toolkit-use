import { hyphenateRE, camelizeRE } from '../regex/index'

## 判断是否为undefined或null
```ts
export const isUndef = (v: any) => {
  return v === undefined || v === null
}
```

## 判断是否为undefined或null
```ts
export const isDef = (v: any) => {
  return v !== undefined && v !== null
}
```

## 判断真假与否
```ts
export const isTrue = (v: any) => {
  return v === true
}

export const isFalse = (v: any) => {
  return v === false
}
```


## 数据类型是否为基础类型

```ts
export const isPrimitive = (v: any) => {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}
```
## 是否为引用类型或通过由new构造的类型
```ts
export const isObject = (obj: any) => {
  return obj !== null && typeof obj === 'object'  // 注意 null 在 typeof 的坑
}
```

## 是否为 Promise 函数
```ts
export const isPromise = (val: any) => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
```
## 获取值的原始类型字符串
```ts
const _toString = Object.prototype.toString
export const toRawType = (val: any) => {
  return _toString.call(val).slice(8, -1)
}
```
## 判断对象是否存在指定属性
```ts
const hasOwnProperty = Object.prototype.hasOwnProperty
export const  hasOwn = (obj: any, key: any) => {
  return hasOwnProperty.call(obj, key)
}
```

## 转换为数字

```ts
export const toNumber = (val: any) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n
}
```

## The object to inspect
```ts
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
 export function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = Object.getPrototypeOf(obj)
  // 1. edge case Object.create(null)
  if (proto === null) return true
  let baseProto = proto
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto)
  }
  // 2. 原型链第一个和最后一个比较
  return proto === baseProto
}
```


## 转换为字符串
```ts
export const toString = (val: any) => {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)  // 针对数组或对象
      : String(val)
}
```
## 将类数组对象转换为数组
```ts
export function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}
```

## 将属性赋予目标对象
```ts
export function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}
```

## 将对象数组合并到对象中
```ts
export function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}
```

## 传参是函数，返回也是函数，用于缓存创建的函数，上述的capitalize、hyphenate均使用了cached方法
```ts
export function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];  // 进行缓存
    return hit || (cache[str] = fn(str))
  })
}
```


## 驼峰式变短横线分隔
```ts
export const capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});
```

## 驼峰式变短横线分隔
```ts
export const hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});
```

## 短横线分隔变驼峰式
```ts
export const camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});
```

## 创建 map

```ts
export function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}
```

## 判断对象是否相等
```ts
export function looseEqual (a, b) {
  // a、b恒等于，返回true
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  // 判断是否为对象（引用类型）
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        // 若两者为数组，当长度一致时再递归判断每个数据项，不一致时返回false
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        // 若两者为Date类型，利用时间戳判断
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        // 若两者为对象，当长度一致时再递归判断每个属性值是否相同，不一致时返回false
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
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
```
## 删除数组项
```ts
export function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
```
## 函数只执行一次
```ts
export function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}
```
## 比较两数组是否相等
```ts
export function looseCompareArrays(a, b) {
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
```
## 定义对象属性
```ts
export const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
      configurable: true,  // 可配置的
      enumerable: false,  // 不可枚举的
      value
  });
};
```
## 获取原型上面的 toString 方法
```ts
export const objectToString = Object.prototype.toString;
```
## 方法函数
```ts
export const toTypeString = (value) => objectToString.call(value);
```
## 检测数组
```ts
export const isArray = Array.isArray;
```

## 检测 map
```ts
export const isMap = (val) => toTypeString(val) === '[object Map]';
```

## 检测 set
```ts
export const isSet = (val) => toTypeString(val) === '[object Set]';
```

## 检测日期
```ts
export const isDate = (val) => val instanceof Date;
```

## 检测函数
```ts
export const isFunction = (val) => typeof val === 'function';
```

## 检测字符串
```ts
export const isString = (val) => typeof val === 'string';
```

## 检测 symbol
```ts
export const isSymbol = (val) => typeof val === 'symbol';
```



## 判断是否为整数键值
```ts
export const isIntegerKey = (key) => isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
```

## fns是数组，各元素均为函数，遍历数组执行，利于一次性执行多个函数
```ts
export const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
  }
};
```

## 比较两个值是否相等，利用Object.is，与严格比较运算符（===）的行为基本一致，但注意：+0不等于-0，NaN等于自身
```ts
export const hasChanged = (value, oldValue) => !Object.is(value, oldValue)
```



