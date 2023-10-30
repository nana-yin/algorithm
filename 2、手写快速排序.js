/**
 * 题目：手写快速排序（从小到大）
*/
function quickSort(arr) {
  if (arr.length <= 1) return arr
  // 先找中间数
  let middleIndex = Math.floor(arr.length / 2)
  let middle = arr[middleIndex]
  // 然后将中间数左边和右边的数据进行分区
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (i === middleIndex) continue
    if (item < middle) {
      leftArr.push(item)
    } else {
      rightArr.push(item)
    }
  }

  return [...quickSort(leftArr), middle, ...quickSort(rightArr)]
}

let arrRaw = [1,45,6,7,90,43,4,5,6]
let res = quickSort(arrRaw)
console.log('res',res)