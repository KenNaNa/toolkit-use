import { IToolkitUseDownload } from "../../types/dowload"
export const ToolkitUseDownload: IToolkitUseDownload = {
  /**
 * @description: 接口返回下载链接
 * @param {string} url
 */
  frontUrlDownload: (url: string, name: string) => {
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    a.remove()
  },
  /**
 * @description: 处理后端数据流下载 excel 表格, pdf
 * @param {Blob} data
 * @param {string} fileName
 * @param {string} format
 */
  dataStreamDownloadExcelOrPdf: (data: Blob, fileName: string, format: string, itype?: string) => {
    let name!: string
    let type = ''
    if (format === 'pdf') {
      type = itype ? itype : 'application/pdf;chartset=utf-8'
      name = `${fileName}.pdf`
    }
    if (format === 'excel') {
      type = itype ? itype : 'application/vnd.ms-excel;charset=utf-8'
      name = `${fileName}.xlsx`
    }
    const blob = new Blob([data], { type: type })

    if ('download' in document.createElement('a')) {
      // 非IE下载
      const elink = document.createElement('a')
      elink.download = name
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
    } else {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ; (window.navigator as any).msSaveBlob(blob, name)
      } catch (e) {
        console.log(e)
      }
    }
  }
}