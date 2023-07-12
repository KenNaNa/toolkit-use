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