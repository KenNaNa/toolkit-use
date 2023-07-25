import { describe, test, expect } from "@jest/globals";
import { ToolkitUseShared } from "../src";

describe('共享工具测试', () => {
  test('数据类型是否为基础类型', () => {
    const v = 'dds'
    expect(ToolkitUseShared.isPrimitive(v)).toBe(true)

    const v1 = 123
    expect(ToolkitUseShared.isPrimitive(v1)).toBe(true)

    const v2 = false
    expect(ToolkitUseShared.isPrimitive(v2)).toBe(true)

    const v3 = Symbol('12')
    expect(ToolkitUseShared.isPrimitive(v3)).toBe(true)
  })

  test('是否为引用类型或通过由new构造的类型', () => {
    const v = {}
    expect(ToolkitUseShared.isObject(v)).toBe(true)

    const v3 = Symbol('12')
    expect(ToolkitUseShared.isObject(v3)).toBe(false)
  })


  test('The object to inspect', () => {
    const v = {}
    expect(ToolkitUseShared.isPlainObject(v)).toBe(true)

    const v1 = { name: '小仙女' }
    expect(ToolkitUseShared.isPlainObject(v1)).toBe(true)
  })


  test('转换为字符串', () => {
    const v = 22
    expect(ToolkitUseShared.toString(v)).toBe('22')
  })
})