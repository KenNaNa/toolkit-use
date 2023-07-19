## 数据类型是否为基础类型

```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isPrimitive(v)
```
## 是否为引用类型或通过由new构造的类型
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isObject(obj)
```

## 是否为 Promise 函数
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isPromise(val)
```

## 转换为数字

```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.toNumber(val)
```

## The object to inspect
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isPlainObject(obj)
```


## 转换为字符串
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.toString(val)
```
## 将类数组对象转换为数组
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.toArray(list, start)
```

## 将属性赋予目标对象
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.extend(to, _from)
```

## 将对象数组合并到对象中
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.toObject(arr)
```


## 驼峰式变短横线分隔
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.capitalize(str)
```

## 驼峰式变短横线分隔
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.hyphenate(str)
```

## 短横线分隔变驼峰式
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.camelize(str)
```

## 删除数组项
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.remove(arr, item)
```
## 函数只执行一次
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.once(fn)
```

## 检测数组
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isArray(obj)
```

## 检测 map
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isMap(val)
```

## 检测 set
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isSet(val)
```

## 检测日期
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isDate(val)
```

## 检测函数
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isFunction(val)
```

## 检测字符串
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isString(val)
```

## 检测 symbol
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isSymbol(val)
```



## 判断是否为整数键值
```ts
import { ToolkitUseShared } from 'toolkit-use/dist/shared/index.esm'
ToolkitUseShared.isIntegerKey(val)
```



