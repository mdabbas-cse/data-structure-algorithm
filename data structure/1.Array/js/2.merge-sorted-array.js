function mergeSortedArray(arr1, arr2) {
  const mergeSortedArray = []
  let arrayItem1 = arr1[0]
  let arrayItem2 = arr2[0]
  let i = 1
  let j = 1

  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      mergeSortedArray.push(arrayItem1)
      arrayItem1 = arr1[i]
      i++
    } else {
      mergeSortedArray.push(arrayItem2)
      arrayItem2 = arr2[j]
      j++
    }
  }
  return mergeSortedArray
}
console.log(mergeSortedArray([0, 3, 4, 31], [34, 4, 6, 30]))