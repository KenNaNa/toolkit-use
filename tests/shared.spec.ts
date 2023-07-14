import { describe, test, expect } from "@jest/globals";
import { ToolkitUseShared } from "../src";
describe('共享工具测试', () => {
  test('测试', () => {
    let str = undefined
    expect(ToolkitUseShared.isUndef(str)).toBe(true)


    let str2 = null
    expect(ToolkitUseShared.isUndef(str2)).toBe(true)


    let str1 = '小仙女'
    expect(ToolkitUseShared.isDef(str1)).toBe(true)

    let b1 = true
    expect(ToolkitUseShared.isTrue(b1)).toBe(true)

    let b2 = false
    expect(ToolkitUseShared.isFalse(b2)).toBe(true)
  })
})