## 日期格式化示例
```vue
<script setup lang="ts">
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"

const date = new Date()

const str = ToolkitUseDate.formatDate(date, 'yyyy-MM-dd HH:mm:ss')
</script>
```

### formatDate 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| dateObj | date实例 | date |
| format | 格式化 | string |