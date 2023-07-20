## 对象数组去重示例
```vue
<script setup lang="ts">
import { ToolkitUseArray } from "toolkit-use/dist/array/index.esm"

// 目前的需求就是想去掉 id 重复的
const optionsArr = [
  {
    id: '1',
    name: 'kennana',
    age: '16',
  },
  {
    id: '2',
    name: '小仙女',
    age: '18',
  },
  {
    id: '3',
    name: 'aaa',
    age: '20'
  },
  {
    id: '1',
    name: 'ken',
    age: '19'
  }
]

const arr = ToolkitUseArray.uniqueOptionsArr(optionsArr, 'id')
</script>
```


## 单值数组去重示例

```vue
<script setup lang="ts">
import { ToolkitUseArray } from "toolkit-use/dist/array/index.esm"

// 目前的需求就是想去掉 id 重复的
const optionsArr = [
  1,
  2,
  2,
  "abc",
  "abc",
  true,
  true,
  false,
  false,
  undefined,
  undefined,
  NaN,
  NaN,
]

const arr = ToolkitUseArray.uniqueValueArr(optionsArr)
</script>
```

## 深复制示例

```vue
<script setup lang="ts">
import { ToolkitUseArray } from "toolkit-use/dist/array/index.esm"

// 目前的需求就是想去掉 id 重复的
const optionsArr = [
  {
    name: '小仙女',
    age: '18'
  },
  {
    name: '李天霸',
    age: '108'
  }
]

const arr = ToolkitUseArray.deepClone(optionsArr)

const obj = {
  name: '小仙女',
  hoby: {
    1: '逛街',
    2: '买东西',
    3: '看电影',
    4: '旅游'
  }
}

const obj1 = ToolkitUseArray.deepClone(obj)
</script>
```

## uniqueOptionsArr 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| arr | 对象数组 | any[] |
| uniKey | 唯一key | string |

## uniqueValueArr 参数说明

| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| arr | 单值数组 | any[] |

## deepClone 深复制参数说明
| 参数        | 说明 | 值类型
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| obj | 数组,对象 | Array,Object |
