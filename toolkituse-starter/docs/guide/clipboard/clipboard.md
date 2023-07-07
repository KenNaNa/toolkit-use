## 示例
```vue
<template>
  <span class="copy-text">
    <span class="text">牛逼：{{message}}</span>
    <span class="copy" @click="copyFn">复制</span>
  </span>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { ToolkitUseClipboard } from '@toolkit-use/dist/clip/index.esm'

const message = ref('真牛逼')

const copyFn = () => {
  new ToolkitUseClipboard({
    message,
    className: 'text',
    onSuccess: () => {},
    onError: () => {}
  }).copy()
}

</script>
```

## ToolkitUseClipboardOptions 配置项

```ts
/**
 * @description: 复制配置项
 * @param {string} message 复制的内容
 * @param {string} className 复制的类名
 * @param {function} onSuccess 复制成功回调
 * @param {function} onError 复制失败回调
 * @return {*}
 */
export interface ToolkitUseClipboardOptions {
  message: string;
  className: string;
  onSuccess?: () => void;
  onError?: () => void;
}
```