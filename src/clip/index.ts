import ClipboardJS from "clipboard";
import { ToolkitUseClipboardOptions } from "./type";
/**
 * @description: 自定义复制功能
 * @return {*}
 */
export class ToolkitUseClipboard {
  private _data: string = ''
  private _class: string = ''
  private _clipboard: ClipboardJS
  private _options: ToolkitUseClipboardOptions


  constructor(options: ToolkitUseClipboardOptions) {
    this._class = options.className
    this._data = options.message,
    this._clipboard = new ClipboardJS(`.${this._class}`, {
      text: () => this._data
    })
    this._options = options
  }


  copy(): ClipboardJS {
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