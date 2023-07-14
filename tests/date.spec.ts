import { describe, test, expect } from "@jest/globals";
import { ToolkitUseDate } from "../src";
describe('日期工具测试', () => {
  test('测试日期格式化', () => {
    const date = '2023-07-14 10:14:30'
    expect(ToolkitUseDate.formatDate(date, 'yyyy-MM-dd HH:mm:ss')).toBe(date)
  })

  test('测试判断润年', () => {
    const year = 2000
    const year1 = 2023
    expect(ToolkitUseDate.isLeap(year)).toBeTruthy()
    expect(ToolkitUseDate.isLeap(year1)).toBeFalsy()
  })

  test('测试获取星期', () => {
    const week = '五'
    const date = '2023-07-14 10:14:30'
    expect(ToolkitUseDate.getWeek(date)).toBe(week)
  })

  test('测试获取月份天数', () => {
    const day = 31
    const year = 2023
    const month = 7
    expect(ToolkitUseDate.getMonthDays(year, month)).toBe(day)
  })

  test('测试数字补零', () => {
    const month = 7
    const padMongth = '07'
    expect(ToolkitUseDate.padLeftZero(month)).toBe(padMongth)
  })

  test('测试获取今天日期', () => {
    const date = '2023-07-14'
    expect(ToolkitUseDate.getToday('yyyy-mm-dd')).toBe(date)
  })


  test('测试获取上一天日期', () => {
    const date = '2023-07-14'
    const lastDate = '2023-07-13'
    expect(ToolkitUseDate.getYesterday(date)).toBe(lastDate)
  })

  test('测试获取下一天日期', () => {
    const date = '2023-07-14'
    const newDate = '2023-07-15'
    expect(ToolkitUseDate.getTomorrow(date)).toBe(newDate)
  })

  test('测试获取前n天日期', () => {
    const date = '2023-07-14'
    const n = 7
    const nDate = '2023-07-07'
    expect(ToolkitUseDate.beforeNDay(date, n)).toBe(nDate)
  })

  test('测试获取后n天日期', () => {
    const date = '2023-07-14'
    const n = 7
    const nDate = '2023-07-21'
    expect(ToolkitUseDate.afterNDay(date, n)).toBe(nDate)
  })
})