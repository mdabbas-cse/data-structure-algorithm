/**
 * Big Operation Big O(n^2)
 * Quadratic Time
 */
const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(`${arr[i]}--${arr[j]}`)
  }
}