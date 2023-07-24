export declare const ToolkitUseDownload: {
    /**
   * @description: 接口返回下载链接
   * @param {string} url
   */
    frontUrlDownload: (url: string, name: string) => void;
    /**
   * @description: 处理后端数据流下载 excel 表格, pdf
   * @param {Blob} data
   * @param {string} fileName
   * @param {string} format
   */
    dataStreamDownloadExcelOrPdf: (data: Blob, fileName: string, format: string, itype?: string | undefined) => void;
};
