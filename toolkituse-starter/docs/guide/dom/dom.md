## 获取16进制颜色
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
const color = ToolkitUseDom.getColor()
```

## 事件工具

```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
// 添加监听
ToolkitUseDom.addHandler(element, type, handler)
// 移除监听
ToolkitUseDom.removeHandler(element, type, handler)
// 获取兼容性事件
ToolkitUseDom.getEvent(event)
// 获取实际目标
ToolkitUseDom.getTarget(event)
// 阻止默认事件
ToolkitUseDom.preventDefault(event)
// 阻止冒泡
ToolkitUseDom.stopPropagation(event)
// 获取相对目标
ToolkitUseDom.getRelatedTarget(event)
// 获取按钮对应的数字
ToolkitUseDom.getButton(event)
// 获取滚轮
ToolkitUseDom.getWheelDelta(event)
// 获取chatCode
ToolkitUseDom.getCharCode(event)
```

## 添加类名
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.addClass(elem, className)
```

## 移除某个类名
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.removeClass(elem, className)
```

## 获取 offsetLeft
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.getElementLeft(elem)
```

## 获取 offsetTop
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.getElementTop(elem)
```

## getOffset

```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.getOffset(elem)
```

## 获取 viewport 宽高
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.getViewport()
```

## 遍历元素的属性函数
```ts
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.outputAttributes(elem)
```

## 平滑滚动函数
```ts
/**
 * 平滑滚动函数
 * 当存在目标锚点时滚动至锚点位置
 * 否则返回顶部
 */
import { ToolkitUseDom } from 'toolkit-use/dist/dom/index.esm'
ToolkitUseDom.scrollToAims(elem)
```