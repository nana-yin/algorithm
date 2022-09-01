/**
 * https://leetcode.cn/circle/discuss/niKSMZ/
 * 给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母；反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换。
    输入描述:
    输入为两行，第一行为参数K，第二行为字符串S。
    输出描述:
    输出转换后的字符串。
    示例1
    输入
    3
    12abc-abCABc-4aB@
    输出
    12abc-abc-ABC-4aB-@
    说明
    子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每3个字符一组为abC、ABc、4aB、@，abC中小写字母较多，转换为abc，ABc中大写字母较多，转换为ABC，4aB中大小写字母都为1个，不做转换，@中没有字母，连起来即12abc-abc-ABC-4aB-@
    示例2
    输入
    12
    12abc-abCABc-4aB@
    输出
    12abc-abCABc4aB@
    说明
    子串为12abc、abCABc、4aB@，第一个子串保留，后面的子串每12个字符一组为abCABc4aB@，这个子串中大小写字母都为4个，不做转换，连起来即12abc-abCABc4aB@
 */
const S = '12abc-abCABc-4aB@' // 原始字符串
const K = 3 // 要分割的字符的个数
function stringCut(S, K) {
  const firstHl = S.indexOf('-') // 1、先找到第一个-的位置
  const firstS = S.slice(0, firstHl + 1) // 第一个子串
  // 将后面的字符串进行截取，再进行去除-的操作,将其余的串进行合并
  const otherS = S.slice(firstHl + 1).replace('-', '')
  // 能得到多少个子串
  const sumS = Math.ceil(otherS.length / 3)
  let cutS = firstS
  // K个字符组成新串，并且用"-"分割
  for (let j = 0; j < sumS; j++) {
    cutS += otherS.slice(K * j, K * (j + 1))
    if (j !== sumS - 1) {
      cutS += '-'
    }
  }
  const newArr = cutS.split('-')
  const resArr = []

  newArr.forEach((itemStr, index) => {
    let min = 0
    let max = 0
    for (let j = 0; j < itemStr.length; j++) {
      const code = itemStr[j].charCodeAt(j)
      // 大写字母
      if (code >= 65 && code <= 90) {
        max++
      }
      // 小写字母
      if (code >= 97 && code <= 122) {
        min++
      }
    }
    let str = itemStr
    if (min - max > 0) {
      str = itemStr.toLowerCase()
    } else if (min - max < 0) {
      str = itemStr.toUpperCase()
    }
    resArr.push(index === 0 ? str + '-' : str)
  })
  return resArr.join('')
}
console.log('最终的结果', stringCut(S, K))