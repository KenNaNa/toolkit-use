import Clipboard from "clipboard";
import { ToolkitUseClipboardOptions } from "../../types/clip.d";
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