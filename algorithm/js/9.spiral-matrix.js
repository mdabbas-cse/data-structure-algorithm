
// Function to print in spiral order

function spiralOrder(matrix) {
  const len = matrix.length - 1
  const spiralArray = [];
  let top = 0
  let left = 0
  let right = len
  let bottom = matrix[0].length - 1
  let direction = 0

  while (top <= bottom && left <= right) {
    switch (direction) {
      case 0:
        for (let i = left; i <= right; i += 1)
          spiralArray.push(matrix[top][i])
        top += 1
        break;
      case 1:
        for (let i = top; i <= bottom; i += 1)
          spiralArray.push(matrix[i][right])
        right -= 1
        break
      case 2:
        for (let i = right; i >= left; i -= 1)
          spiralArray.push(matrix[i][bottom])
        bottom -= 1
        break
      case 3:
        for (let i = bottom; i >= top; i -= 1)
          spiralArray.push(matrix[i][left])
        left += 1
        break
    }
    direction = (direction + 1) % 4
  }
  return spiralArray
}

// Driver Code
// 4 * 4 matrix
// let a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// output is 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
// 3 * 3
// let a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// output is 1, 2, 3, 6, 9, 8, 7, 4, 5

// 5* 5
let a = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

console.log(spiralOrder(a));



