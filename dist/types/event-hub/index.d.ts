/**
 * @description: 创建发布订阅事件中心 emit on off
 * @param {function} emit 派发
 * @param {function} on 绑定事件
 * @param {function} off 解绑事件
 * @return {*}
 */
declare class CreateEventHub {
    private _hub;
    /**
     * @description: 派发函数
     * @param {string} event 事件米女
     * @param {MISSING_TYPE} data 数据
     * @return {*}
     */
    emit(event: string, data: any): void;
    /**
     * @description: 监听事件
     * @param {string} event 事件名称
     * @param {MISSING_TYPE} handler 处理函数
     * @return {*}
     */
    on(event: string, handler: any): void;
    /**
     * @description: 解绑事件
     * @param {string} event 事件名称
     * @param {MISSING_TYPE} handler 处理函数
     * @return {*}
     */
    off(event: string, handler: any): void;
}
/**
 * @description: 使用 CreateEventHub 创建消息中心
 * @return {*}
 */
export declare const useEventHub: () => CreateEventHub;
export {};
