## 常用正则表达式

```vue
<script setup lang="ts">
import {
  // 有效数字检测
  significantDigitsReg,
  // 中文真名
  chineseRealNameReg,
  // 身份证1
  IdentificationCardReg,
  // 身份证2
  IdentificationCardRegO,
  // 手机号码
  phoneReg,
  // 密码强度
  cryptographicStrengthReg,
  // 邮箱1
  emailReg,
  // 邮箱2
  emailRegO,
  // url
  urlReg,
  // ipv4
  ipV4Reg,
  // 16进制颜色
  colorReg,
  // 日期正则
  dateReg,
  // qq正则
  qqReg,
  // 微信名正则
  wxReg,
  // 车牌正则
  carReg,
  // 汉字正则
  hanziReg,
 } from 'toolkit-use/dist/regex/index.esm'
</script>
```