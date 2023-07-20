import { describe, test, expect } from "@jest/globals";
import { ToolkitUseArray } from "../src";
describe('数组工具测试', () => {
  test('测试对象数组去重', () => {
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
    const arr = [
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
    ]
    expect(ToolkitUseArray.uniqueOptionsArr(optionsArr, 'id')).toStrictEqual(arr)
  })
  test('测试单值数组去重', () => {
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
    const arr = [
      1,
      2,
      "abc",
      true,
      false,
      undefined,
      NaN,
    ]
    expect(ToolkitUseArray.uniqueValueArr(optionsArr)).toStrictEqual(arr)
  })

  test('测试数组克隆', () => {
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
    expect(optionsArr === arr).toBeFalsy()
  })

  test('测试对象克隆', () => {
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
    expect(obj === obj1).toBeFalsy()
    obj1.name = '李天霸'
    obj1.hoby[1] = 'ddddd'
    expect(obj1.name === obj.name).toBeFalsy()
    expect(obj1.hoby[1] === obj.hoby[1]).toBeFalsy()
  })
})