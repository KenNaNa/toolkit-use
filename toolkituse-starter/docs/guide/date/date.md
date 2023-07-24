## 日期格式化示例
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"

const date = new Date()

const str = ToolkitUseDate.formatDate(date, 'yyyy-MM-dd HH:mm:ss')
```

### formatDate 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| dateObj | date实例 | date |
| format | 格式化 | string |

## 判断润年

```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.isLeap(year: number)
```

### isLeap 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| year | 年份 | number |

## 获取星期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.getWeek(date: Date | string)
```
### getWeek 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| date | 日期 | Date, string |

## 获取月份天数
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.getMonthDays(year: number, month: number)
```

### getMonthDays 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| year | 年份 | number |
| month | 月份 | number |

## 数字补零
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.padLeftZero(str: number)
```

### padLeftZero 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 字符串 | string |

## 获取今天日期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.getToday(str = 'yyyy-mm-dd')
```

### getToday 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 日期 | string |

## 获取上一天日期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.getYesterday(str: string)
```

### getYesterday 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 字符串 | string |

## 获取下一天日期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.getTomorrow(str: string)
```

### getTomorrow 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 字符串 | string |

## 获取前n天日期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.beforeNDay(date: string, n: number)
```

### beforeNDay 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| date | 日期 | string |
| n | n天 | number |

## 获取后n天日期
```ts
import { ToolkitUseDate } from "toolkit-use/dist/date/index.esm"
ToolkitUseDate.afterNDay(date: string, n: number)
```
### afterNDay 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| date | 日期 | string |
| n | n天 | number |