## 事件总线示例
```vue
<script setup lang="ts">
import { useEventHub } from 'toolkit-use/dist/event-hub/index.esm'
const events = useEventHub()
const focus = () => console.log('专注')
// 监听事件
events.on('focus', focus)
events.emit('focus', '专注')
events.off('focus', focus)
</script>
```