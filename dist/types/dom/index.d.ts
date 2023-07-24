/**
 * @description: 添加类名
 * @param {*} elem 元素
 * @param {*} classN 类名
 * @return {*}
 */
declare function addClass(elem: any, classN: any): void;
declare function removeClass(obj: any, cName: any): any;
declare function getElementLeft(element: any): any;
declare function getElementTop(element: any): any;
declare function getOffset(obj: any): {
    left: number;
    top: number;
};
declare function getViewport(): {
    width: number;
    height: number;
};
declare function outputAttributes(element: any): string;
/**
 * 平滑滚动函数
 * 当存在目标锚点时滚动至锚点位置
 * 否则返回顶部
 */
declare function scrollToAims(element: any): void;
export declare const ToolkitUseDom: {
    getColor: () => string;
    addHandler: (element: any, type: any, handler: any) => void;
    removeHandler: (element: any, type: any, handler: any) => void;
    getEvent: (event: any) => any;
    getTarget: (event: any) => any;
    preventDefault: (event: any) => void;
    stopPropagation: (event: any) => void;
    getRelatedTarget: (event: any) => any;
    getButton: (event: any) => any;
    getWheelDelta: (event: any) => any;
    getCharCode: (event: any) => any;
    addClass: typeof addClass;
    removeClass: typeof removeClass;
    getElementLeft: typeof getElementLeft;
    getElementTop: typeof getElementTop;
    getOffset: typeof getOffset;
    getViewport: typeof getViewport;
    outputAttributes: typeof outputAttributes;
    scrollToAims: typeof scrollToAims;
};
export {};
