import Clipboard from "clipboard";
/**
 * @description: 复制配置项
 * @param {string} message 复制的内容
 * @param {string} className 复制的类名
 * @param {function} onSuccess 复制成功回调
 * @param {function} onError 复制失败回调
 * @return {*}
 */
interface ToolkitUseClipboardOptions {
    message: string;
    className: string;
    onSuccess?: () => void;
    onError?: () => void;
}
/**
 * @description: 自定义复制功能
 * @return {*}
 */
declare class ToolkitUseClipboard {
    private _data;
    private _class;
    private _clipboard;
    private _options;
    constructor(options: ToolkitUseClipboardOptions);
    copy(): Clipboard;
}
export { ToolkitUseClipboardOptions, ToolkitUseClipboard };
