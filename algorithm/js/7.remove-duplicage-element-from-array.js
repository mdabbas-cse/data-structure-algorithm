/**
 * Remove duplicate element from arry
 */

const arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

function remove_duplicate(arr) {
  const len = arr.length - 1

  const newArr = []
  newArr[0] = arr[0]
  for (let i = 1; i < len; i += 1) {
    if (arr[i - 1] !== arr[i]) {
      newArr.push(arr[i])
    }
  }

  return newArr.length
}

console.log(remove_duplicate(arr))