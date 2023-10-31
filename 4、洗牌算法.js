/**
 * 洗牌算法是将原来的数组进行打散，使原数组的某个数在打散后的数组中的每个位置上等概率的出现，即为乱序算法。
 * https://bost.ocks.org/mike/shuffle/
*/
// 方法1：时间复杂度是O(n2) -- 将取出的数据存储到新数组中
function shuffle(arr) {
    let resArr = []
    while(arr.length) {
        let randomNum = Math.floor(Math.random() * arr.length)
        resArr.push(arr[randomNum])
        arr.splice(randomNum,1)
    }
    return resArr
}

// 方法2：时间复杂度是O(n) -- 直接改变原数组
function shuffle2(arr) {
    let len = arr.length
    let randomNum = null
    while(len) {
       randomNum = (Math.random() * len--) >>> 0
       let a = arr[len]
       let b = arr[randomNum]
       // 将随机拿到的数据，和最后一位进行交换
       [a, b] = [b, a]
    }
    return arr
}

let arr = [1,2,3,4,5,6,7,8,9,10]
let res = shuffle2(arr)
console.log('res',res)

