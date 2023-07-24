## 前补零示例
```ts
import { ToolkitUseString } from "toolkit-use/dist/string/index.esm"

let str = 12

str = ToolkitUseString.padStartZero(str, 3)
```

### padStartZero 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| str | 字符串,数字 | string,number,any |
| n | 补零个数 | number |