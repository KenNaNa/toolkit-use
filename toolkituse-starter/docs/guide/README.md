## 介绍
本项目是开源项目服务于平时开发过程中，常见的一些工具方法的集合

本项目是开源项目，希望广大网友来个支持，点个赞，一起维护这个工具包

ToolkitUse是一个专为前端开发人员设计的常用工具包，旨在提供便捷、高效的解决方案和工具，以加速前端项目的开发过程。本文将向您介绍ToolkitUse的主要特点和优势，以及它为前端开发人员带来的价值。

## 主要特点：

功能丰富的工具集：ToolkitUse提供了广泛的功能工具，包括字符串处理、日期操作、表单验证、网络请求等。这些工具能够帮助开发人员处理常见的前端任务和问题，提高开发效率。

轻量级和高性能：ToolkitUse被设计为轻量级和高性能的工具包，确保在项目中使用时不会引入额外的负担。它经过优化和测试，能够在各种浏览器和设备上提供快速而稳定的性能。

易于使用和集成：ToolkitUse提供简洁而直观的API，使其易于学习和使用。您可以轻松地将ToolkitUse集成到您的项目中，并且它与现有的前端框架和库兼容性良好。

社区支持和文档：ToolkitUse拥有活跃的开发者社区，您可以在社区中获取支持、建议和解决方案。此外，ToolkitUse提供详细的文档和示例，帮助您快速上手并了解每个工具的用法和功能。

## 优势：

提高开发效率：ToolkitUse为前端开发人员提供了丰富的工具，能够减少重复劳动并简化常见任务的处理。通过使用ToolkitUse，您可以更快地完成开发工作，从而提高整体的开发效率。

优化代码质量：ToolkitUse经过精心设计和测试，确保提供高质量的解决方案。它可以帮助您编写可靠、可维护的代码，并减少错误和潜在的漏洞。

跨平台和兼容性：ToolkitUse支持多种前端环境和框架，使其适用于各种项目。无论您是开发基于React、Vue.js还是Angular的应用，ToolkitUse都能为您提供支持和便利。

## 结论：
ToolkitUse是一个前端开发人员的常用工具包，它提供了丰富的功能工具，能够提高开发效率并优化代码质量。无论您是初学者还是经验丰富的开发人员，使用ToolkitUse都能帮助您更轻松地完成前端项目。探索ToolkitUse的功能，并将其应用到您的项目中，体验它为您带来的便利和效益。

## 如何安装

```bash
npm i toolkit-use
```


## 示例
```vue
<script setup lang='ts'>
import { 
  ToolkitUseClipboard,
  ToolkitUseClipboardOptions,
  uniqueOptionsArr,
  uniqueValueArr,
  deepClone,
  formatDate,
  transformDecimal, 
  toPercent, 
  toPoint,
  frontUrlDownload, 
  dataStreamDownloadExcelOrPdf,
  padStartZero,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isObject,
  isPromise,
  toRawType,
  hasOwn,
  toNumber,
  isPlainObject,
  toString,
  toArray,
  extend,
  toObject,
  cached,
  capitalize,
  hyphenate,
  camelize,
  makeMap,
  looseEqual,
  remove,
  looseCompareArrays,
  def,
  objectToString,
  toTypeString,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isIntegerKey,
  invokeArrayFns,
  hasChanged,
} from 'toolkit-use'
</script>
```