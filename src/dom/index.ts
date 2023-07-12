/**
 * @description: 获取16进制颜色
 * @return {*}
 */
export const getColor = () => {
  const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let str = ''
  for (let i = 0; i < 6; i++) {
    str += colors[Math.floor(Math.random() * 16)];
  }
  str = '#' + str;
  return str;
}

/**
 * @description: 事件工具
 * @param {function} addHandler 添加监听
 * @param {function} removeHandler 移除监听
 * @param {function} getEvent 获取事件
 * @param {function} getTarget 获取实际目标
 * @param {function} preventDefault 阻止默认事件
 * @param {function} stopPropagation 阻止冒泡
 * @param {function} getRelatedTarget 获取相对目标
 * @return {*}
 */
export const eventUtils = {
  addHandler: (element: any, type: any, handler: any) => {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: (element, type, handler) => {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: (event) => {
    return event ? event : window.event
  },
  getTarget: (event) => {
    return event.target || event.srcElement
  },
  preventDefault: (event) => {
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  },
  stopPropagation: (event) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  getRelatedTarget: (event) => {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },
  getButton: function (event) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return event.wheelDelta
    } else {
      return -event.detail * 40
    }
  },
  getCharCode: function (event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }
}

/**
 * @description: 添加类名
 * @param {*} elem 元素
 * @param {*} classN 类名
 * @return {*}
 */
export function addClass(elem, classN) {
  // 对传参进来的类名进行切割
  const arr1 = elem.className.split(' ');
  // 对要添加的类名进行切割
  const arr2 = classN.split(' ');
  // 连接数组
  const arr3 = arr1.concat(arr2);
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
      if (arr3[i] == arr3[j]) {
        arr3.splice(j, 1)
        arr3.length--;
      }
    }
  }
}

//删除某个Class类名
export function removeClass(obj, cName) {
  //首先，取得类名字符串并拆分成数组
  var classNames = obj.className.split(/\s+/);
  var pos,//存储要删除类名的位置
    len = classNames.length,
    i;
  for (i = 0; i < len; i++) {
    if (classNames[i] == cName) {
      pos = i;
      break;
    }
  }
  classNames.splice(i, 1);
  obj.className = classNames.join(' ');
  return pos
}

export function getElementLeft(element) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

export function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

// 要想知道某个元素在页面上的偏移量，
// 将这个元素的 offsetLeft 和 offsetTop 与其 offsetParent
// 的相同属性相加，如此循环直至根元素，就可以得到一个基本准确的值。
export function getOffset(obj) {
  var json = {
    left: 0,
    top: 0
  }
  while (obj.offsetParent != null) {
    json.left += obj.offsetLeft;
    json.top += obj.offsetTop;
    obj = obj.offsetParent;
  }
  return json
}

export function getViewport() {
  if (document.compatMode == "BackCompat") {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }
}

//遍历元素的属性函数
//兼容IE7之前 
//每个特性节点都有一个名为 specified 的属性，这个属性的值如果为 true，
//则意味着要么是在 HTML 中指定了相应特性，
//attributes[i]获取的是属性节点
export function outputAttributes(element) {
  var attrName,
    attrValue,
    attrArr = new Array(),
    length = element.attributes.length;
  for (var i = 0; i < length; i++) {
    if (element.attributes[i].specified) {
      attrName = element.attributes[i].nodeName;//属性名称
      attrValue = element.attributes[i].nodeValue;//属性节点的内容
      attrArr.push(attrName + '=\"' + attrValue + '"');
    }
  }
  return attrArr.join(' ');
}