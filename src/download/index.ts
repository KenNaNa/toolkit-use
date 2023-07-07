/**
 * @description: 接口返回下载链接
 * @param {string} url
 * @return {*}
 */
 export const frontURLDownload = (url: string, name: string) => {
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  a.remove()
}