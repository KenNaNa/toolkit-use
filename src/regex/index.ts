const significantDigitsReg = /^[+-]?(0|([1-9]\d+))(\.\d+)?$/

const chineseRealNameReg = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/

const identificationCardReg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X)$/

const identificationCardRegO = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

//以 1 开头：/^1/
//第2位为3、4、5、7、8中的一个：/[34578]/ 或 /(3|4|5|7|8)/
//剩余3-11位均为数字，并以数字结尾：/\d{9}$/
const phoneReg = /^1[34578]\d{9}$/

// 密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
const cryptographicStrengthReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/


//yourname：任意英文字母（a-z/A-Z）、数字（0-9）、下划线（_）、英文句点（.）、连字符（-），长度大于0：/[a-z\d._-]+/
//domain：任意英文字母（a-z/A-Z）、数字（0-9）、连字符（-），长度大于0：/[a-z\d-]+/
//extension：任意英文字母（a-z/A-Z），长度2-8：/[a-z]{2,8}/
//optional-extension："."开头，后面跟任意英文字母（a-z/A-Z），长度2-8，可选： /(\.[a-z]{2,8})?/
const emailReg = /^([a-z\d._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const emailRegO = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/

const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

const ipV4Reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

const colorReg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

const dateReg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/

const qqReg = /^[1-9][0-9]{4,10}$/

const wxReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/

const carReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

const hanziReg = /^[\u4e00-\u9fa5]{0,}$/


const hyphenateRE = /\B([A-Z])/g

const camelizeRE = /-(\w)/g

export const ToolkitUseRegex = {
  significantDigitsReg,
  chineseRealNameReg,
  identificationCardReg,
  identificationCardRegO,
  phoneReg,
  cryptographicStrengthReg,
  emailReg,
  emailRegO,
  urlReg,
  ipV4Reg,
  colorReg,
  dateReg,
  qqReg,
  wxReg,
  carReg,
  hanziReg,
  hyphenateRE,
  camelizeRE,
}



