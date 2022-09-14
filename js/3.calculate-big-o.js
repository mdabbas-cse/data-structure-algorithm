/**
 * count Big Operation O(n)
 * @param {*} n 
 * @returns Number
 */

const n = [1, 2, 3, 4, 5]

function countBigO(n) {
  let a = 10 // O(1)
  a = 15 + 12 // O(1)
  const len = n.length // O(1)

  for (let i = 0; i < len; i++) { // O(n)
    let state = true // O(n)
    a++; // O(n)
  }
  return a // O(1)
}
countBigO(n)
// now count BIG O(4+ 3n)
// or BIG O(n)