## 链接下载示例

```vue
<template>
  <button @click="frontDownload">链接下载</button>
  <button @click="dataStreamDownload">数据流下载</button>
</template>
<script setup lang="ts">
import { frontUrlDownload } from '@toolkit-use/dist/download/index.esm'

const frontDownload = () => {
  frontUrlDownload(url, name)
}
</script>
```

## 数据流下载

```vue
<template>
  <button @click="dataStreamDownload">数据流下载</button>
</template>
<script setup lang="ts">
import { dataStreamDownloadExcelOrPdf } from '@toolkit-use/dist/download/index.esm'

const dataStreamDownload = () => {
  fetch().then((res) => {
    dataStreamDownloadExcelOrPdf(res.data as Blob, name, 'excel')
  })
}
</script>
```

## frontUrlDownload 链接下载参数

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| url | 下载链接 | string |
| name | 下载名称 | string |


## dataStreamDownloadExcelOrPdf 数据流下载参数

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| data | 数据流 | Blob |
| name | 下载名称 | string |
| type | 下载类型 | 'excel','pdf' |