
// Function to print in spiral order


// JavaScript Program to print a matrix spirally

function spiralOrder(arr) {
  let i, k = 0, l = 0;
  let m = arr.length
  let n = arr[0].length
  /*
    k - starting row index
    m - ending row index
    l - starting column index
    n - ending column index
    i - iterator
  */
  const spiralArray = []

  while (k < m && l < n) {
    // print the first row from the remaining rows
    for (i = l; i < n; ++i) {
      spiralArray.push(arr[k][i])
    }
    k++

    // print the last column from the remaining columns
    for (i = k; i < m; ++i) {
      spiralArray.push(arr[i][n - 1])
    }
    n--

    // print the last row from the remaining rows
    if (k < m) {
      for (i = n - 1; i >= l; --i) {
        spiralArray.push(arr[m - 1][i])
      }
      m--
    }

    // print the first column from the remaining columns
    if (l < n) {
      for (i = m - 1; i >= k; --i) {
        spiralArray.push(arr[i][l])
      }
      l++
    }
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
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// output is 1, 2, 3, 6, 9, 8, 7, 4, 5

// 5* 5
// let a = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]

console.log(spiralOrder(a));



