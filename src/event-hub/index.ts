/**
 * @description: 创建发布订阅事件中心 emit on off
 * @param {function} emit 派发
 * @param {function} on 绑定事件
 * @param {function} off 解绑事件
 * @return {*}
 */
 class CreateEventHub {
  private _hub: any = Object.create(null)

  /**
   * @description: 派发函数
   * @param {string} event 事件米女
   * @param {MISSING_TYPE} data 数据
   * @return {*}
   */
  public emit(event: string, data: any) {
    ;(this._hub[event] || []).forEach((handler: any) => handler(data))
  }

  /**
   * @description: 监听事件
   * @param {string} event 事件名称
   * @param {MISSING_TYPE} handler 处理函数
   * @return {*}
   */
  public on(event: string, handler: any) {
    if (!this._hub[event]) this._hub[event] = []
    this._hub[event].push(handler)
  }

  /**
   * @description: 解绑事件
   * @param {string} event 事件名称
   * @param {MISSING_TYPE} handler 处理函数
   * @return {*}
   */
  public off(event: string, handler: any) {
    const i = (this._hub[event] || []).findIndex((h: any) => h === handler)
    if (i > -1) this._hub[event].splice(i, 1)
    if (this._hub[event].length === 0) delete this._hub[event]
  }
}

/**
 * @description: 使用 CreateEventHub 创建消息中心
 * @return {*}
 */
export const useEventHub = () => {
  return new CreateEventHub()
}
