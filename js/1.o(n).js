/**
 * Big Operation notation O(n)
 */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const findNumber = (dataArr) => {
  const arrLen = dataArr.length
  for (let i = 0; i < arrLen; i += 1) {
    if (dataArr[i] === 6) {
      console.log("Number Found!")
    }
  }
}

findNumber(number) // O(length of array) => liner time