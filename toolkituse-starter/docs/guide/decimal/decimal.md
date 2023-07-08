## 保留小数示例
```vue
<script setup lang="ts">
import { transformDecimal } from "toolkit-use/dist/decimal/index.esm"

let str = 12.1212222
// 可用此方法来替代 toFixed 小数精度丢失问题
str = transformDecimal(str, 2)
</script>
```

## transformDecimal 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 字符串,数字 | string,number |
| n | 小数位数 | number |

## 小数转百分比示例
```vue
<script setup lang="ts">
import { toPercent } from "toolkit-use/dist/decimal/index.esm"

let str = 12.1212222
str = toPercent(str, 2, true)
</script>
```

## toPercent 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| point | 小数 | string,number |
| i | 小数位数 | number |
| flag | 是否要转成百分比，默认转 | boolean |

## 百分比转小数示例
```vue
<script setup lang="ts">
import { toPoint } from "toolkit-use/dist/decimal/index.esm"

let str = "12.12123%"
str = toPoint(str, 2)
</script>
```

## toPoint 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| percent | 百分比 | string |
| i | 小数位数 | number |