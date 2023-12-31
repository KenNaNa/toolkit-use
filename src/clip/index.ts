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
class ToolkitUseClipboard {
  private _data: string = ''
  private _class: string = ''
  private _clipboard: Clipboard
  private _options: ToolkitUseClipboardOptions


  constructor(options: ToolkitUseClipboardOptions) {
    this._class = options.className
    this._data = options.message,
      console.log('options', options, this._class)
    this._clipboard = new Clipboard(this._class, {
      text: () => this._data
    })
    this._options = options
  }


  copy(): Clipboard {
    this._clipboard.on('success', () => {
      this._options.onSuccess && this._options.onSuccess();
      this._clipboard.destroy()
    })

    this._clipboard.on('error', () => {
      this._options.onError && this._options.onError();
      this._clipboard.destroy()
    })

    return this._clipboard
  }
}

export {
  ToolkitUseClipboardOptions,
  ToolkitUseClipboard
}