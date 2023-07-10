## 事件总线示例
```vue
<script setup lang="ts">
import { useEventHub } from 'toolkit-use/dist/event-hub/index.esm'
const events = useEventHub()

// 监听事件
events.on('focus', () => console.log('专注'))
events.emit('focus', '专注')
events.off('focus', () => console.log('专注'))
</script>
```