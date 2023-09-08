/**
 * Spiral 
 */
function spiralOrder(matrix) {
  const len = matrix.length - 1
  let left = 0
  let right = len
  let top = 0
  let bottom = matrix[0].length - 1
  let direction = 0
  const spiralArray = []

  while (left <= right && top <= bottom) {
    switch (direction) {
      case 0:
        for (let i = left; i <= right; i++) {
          spiralArray.push(matrix[top][i])
        }
        top++
        break

      case 1:
        for (let i = top; i <= bottom; i++) {
          spiralArray.push(matrix[i][right])
        }
        right--
        break

      case 2:
        for (let i = right; i >= left; i--) {
          spiralArray.push(matrix[i][bottom])
        }
        bottom--
        break

      case 3:
        for (let i = bottom; i >= top; i--) {
          spiralArray.push(matrix[i][left])
        }
        left++
        break
    }
    direction = (direction + 1) % 4
  }
  return spiralArray
}



let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// output is 1, 2, 3, 6, 9, 8, 7, 4, 5


console.log(spiralOrder(a));