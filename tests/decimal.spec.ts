import { describe, test, expect } from "@jest/globals";
import { ToolkitUseDecimal } from "../src";
describe('小数工具测试', () => {
  test('测试保留小数', () => {
    const str = 12.1212222
    const res = 12.12
    expect(ToolkitUseDecimal.transform(str, 2)).toBe(res)
  })

  test('测试小数转百分比', () => {
    const str = 12.1212222
    const res = '1212.12%'
    expect(ToolkitUseDecimal.percent(str, 2, true)).toBe(res)
  })


  test('测试小数转百分比', () => {
    const str = "12.12123%"
    const res = 0.12
    expect(ToolkitUseDecimal.point(str, 2)).toBe(res)
  })
})