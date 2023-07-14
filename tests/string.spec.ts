import { describe, test, expect } from "@jest/globals";
import { ToolkitUseString } from "../src";
describe('字符串工具测试', () => {
  test('测试前补零示例', () => {
    const str = 12
    const res = '0012'
    expect(ToolkitUseString.padStartZero(str, 4)).toBe(res)
  })
})