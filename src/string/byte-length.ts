/**
 * 计算utf8字节长度
 * @returns {number} returns the byte length of an utf8 string
 * @param str
 */
function byteLength(str: string): number {
  let s = str.length;
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xdc00 && code <= 0xdfff) i--;
  }
  return s;
}

export default byteLength;
