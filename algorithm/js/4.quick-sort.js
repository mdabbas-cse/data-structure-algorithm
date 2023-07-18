// array for quick sort

const array = [3, 5, 1, 6, 4, 7, 2];


function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// quick sort

function partition(arr, left, right) {
  let pivot = arr[left]
  let i = left
  let j = right
  while (i < j) {
    while (arr[i] < pivot) i++

    while (arr[j] > pivot) j--

    if (i < j)
      swap(arr, i, j)
  }

  swap(arr, left, j)
  return j
}

function quickSort(arr, left, right) {
  if (left < right) {
    let j = partition(arr, left, right)
    quickSort(arr, left, j - 1)
    quickSort(arr, j + 1, right)
  }
  return arr
}

quickSort(array, 0, array.length - 1)

console.log(array)