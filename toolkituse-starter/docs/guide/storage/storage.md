## 判断是否支持 Storage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.isSupportStorage()
```

## 设置 setStorage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.setStorage(key, value, expire = 0)
```

## 获取 getStorage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.getStorage(key)
```

## 是否存在 hasStorage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.hasStorage(key)
```

## 获取所有key
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.getStorageKeys()
```

## 根据索引获取key
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.getStorageForIndex(index)
```

## 获取localStorage长度
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.getStorageLength()
```

## 获取全部 getAllStorage

```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.getStorageAll()
```

## 删除 removeStorage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.removeStorage(key)
```

## 清空 clearStorage
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.clearStorage()
```

## 名称前自动添加前缀
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.autoAddPrefix(key)
```

## 移除已添加的前缀
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.autoRemovePrefix(key)
```

## 加密方法

```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.encrypt(data)
```

## 解密方法
```ts
import { ToolkitUseStorage } from 'toolkit-use'
ToolkitUseStorage.decrypt(data)
```