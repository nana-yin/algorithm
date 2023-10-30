/**
 * 题目：
 *   去除字符串中出现次数最少的字符，不改变原字符串的顺序。
 *   实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序
 * 示例:
 *   输入：ababac
 *   输出：ababa
 * 
 *   输入：aaabbbcceeff
 *   输出：aaabbb
*/

function delMinCountStr(str) {
    let strArr = str.split('')
    // 先将字符串及其对应的次数做一个映射
    let strCountObj = {}
    strArr.forEach(element => {
        if (!!strCountObj[element]) {
            strCountObj[element]++
        } else {
            strCountObj[element] = 1
        }
    });

    // 然后将最小的次数取出，循环原字符串数组，取出要删除的字符串
    let minCount = Math.min(...Object.values(strCountObj))
    let delStrArr = []
    for (let i in strCountObj) {
        if (strCountObj[i] === minCount) {
            delStrArr.push(i)
        }
    }

    // 最后将字符串删除
    let resStr = JSON.parse(JSON.stringify(str))
    strArr.forEach((element, index) => {
        if (delStrArr.includes(element)) {
            resStr = resStr.replace(element, '')
        }
    });

    return resStr
}

let a = 'aaabbbcceeff'
let res = delMinCountStr(a)
console.log('最后的结果', res)