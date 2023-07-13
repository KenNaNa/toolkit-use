/**
 * @description: IToolkitUseDownload 接口
 * @param {function} frontUrlDownload 链接压缩包下载
 * @param {function} dataStreamDownloadExcelOrPdf 处理后端数据流下载 excel 表格, pdf
 * @return {*}
 */
export interface IToolkitUseDownload {
  frontUrlDownload: (url: string, name: string) => void
  dataStreamDownloadExcelOrPdf: (data: Blob, fileName: string, format: string, itype?: string) => void
}