/**
 * @description: 日期格式
 * @param { String }  dd  天
 * @param { String }  hh  小时
 * @param { String }  mm  分钟
 * @param { String }  ss  秒
 */
 interface IRetObj {
  dd: string | number
  hh: string | number
  mm: string | number
  ss: string | number
}

class Countdown {
  /**
   * @description: 获取d日期的n天后的日期
   * @param { Date } d  日期
   * @param { number } n  设置d日期的n天后的日期
   * @return { Date }
   */
  public getNDate(d: Date, n: number): Date {
    const date = new Date(d)
    const tomorrow = date.setDate(new Date(d).getDate() + n)
    return new Date(tomorrow)
  }

  /**
   * @description: 剩余时间（当前时间-结束时间）
   * @param { Date } endDate  结束时间
   * @returns { IRetObj }
   */
  public createTime(endDate: Date): IRetObj {
    // 当前时间戳
    const start = new Date().getTime()
    // 结束时间戳
    const end = new Date(endDate).getTime()

    let d = 0 // 天
    let h = 0 // 时
    let m = 0 // 分
    let s = 0 // 秒
    // 做时间结束判断
    if (start >= end) {
      d = 0
      h = 0
      m = 0
      s = 0
      return {
        dd: d,
        hh: h,
        mm: m,
        ss: s,
      }
    }
    // 用结束时间减去当前时间获得倒计时时间戳
    const msec: number = end - start
    d = Math.floor(msec / 1000 / 60 / 60 / 24) // 算出天
    h = Math.floor((msec / 1000 / 60 / 60) % 24) // 算出时
    m = Math.floor((msec / 1000 / 60) % 60) // 算出分
    s = Math.floor((msec / 1000) % 60) // 算出秒

    const dd = d > 9 ? d : '0' + d
    const hh = h > 9 ? h : '0' + h
    const mm = m > 9 ? m : '0' + m
    const ss = s > 9 ? s : '0' + s

    return {
      dd,
      hh,
      mm,
      ss,
    }
  }
}
export default new Countdown()
