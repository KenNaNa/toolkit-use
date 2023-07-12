## 获取16进制颜色
```ts
import { getColor } from 'toolkit-use/dist/dom/index.esm'
const color = getColor()
```

## 事件工具

```ts
import { eventUtils } from 'toolkit-use/dist/dom/index.esm'
// 添加监听
eventUtils.addHandler(element, type, handler)
// 移除监听
eventUtils.removeHandler(element, type, handler)
// 获取兼容性事件
eventUtils.getEvent(event)
// 获取实际目标
eventUtils.getTarget(event)
// 阻止默认事件
eventUtils.preventDefault(event)
// 阻止冒泡
eventUtils.stopPropagation(event)
// 获取相对目标
eventUtils.getRelatedTarget(event)
// 获取按钮对应的数字
eventUtils.getButton(event)
// 获取滚轮
eventUtils.getWheelDelta(event)
// 获取chatCode
eventUtils.getCharCode(event)
```

## 添加类名
```ts
import { addClass } from 'toolkit-use/dist/dom/index.esm'
addClass(elem, className)
```

## 移除某个类名
```ts
import { removeClass } from 'toolkit-use/dist/dom/index.esm'
removeClass(elem, className)
```

## 获取 offsetLeft
```ts
import { getElementLeft } from 'toolkit-use/dist/dom/index.esm'
getElementLeft(elem)
```

## 获取 offsetTop
```ts
import { getElementTop } from 'toolkit-use/dist/dom/index.esm'
getElementTop(elem)
```

## getOffset

```ts
import { getOffset } from 'toolkit-use/dist/dom/index.esm'
getOffset(elem)
```

## 获取 viewport 宽高
```ts
import { getViewport } from 'toolkit-use/dist/dom/index.esm'
getViewport()
```

## 遍历元素的属性函数
```ts
import { outputAttributes } from 'toolkit-use/dist/dom/index.esm'
outputAttributes(elem)
```