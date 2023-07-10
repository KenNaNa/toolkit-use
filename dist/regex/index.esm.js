var d=/^[+-]?(0|([1-9]\d+))(\.\d+)?$/,$=/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/,a=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X)$/,A=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,z=/^1[34578]\d{9}$/,Z=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,u=/^([a-z\d._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,f=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,t=/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,w=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,F=/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,e=/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,p=/^[1-9][0-9]{4,10}$/,r=/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,x=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,E=/^[\u4e00-\u9fa5]{0,}$/;export{a as IdentificationCardReg,A as IdentificationCardRegO,x as carReg,$ as chineseRealNameReg,F as colorReg,Z as cryptographicStrengthReg,e as dateReg,u as emailReg,f as emailRegO,E as hanziReg,w as ipV4Reg,z as phoneReg,p as qqReg,d as significantDigitsReg,t as urlReg,r as wxReg};