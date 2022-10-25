const arr = [2, 5, 6, 3, 9, 5, 8, 7]

function bubbleSort(arr) {
  let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    len--
  }
  return arr
}

const sortedArray = bubbleSort(arr)
console.log(sortedArray)