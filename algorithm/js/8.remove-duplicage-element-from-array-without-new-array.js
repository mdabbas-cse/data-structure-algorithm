/**
 * Remove duplicate element from arry
 */

const arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

function remove_duplicate(arr) {

  return [...new Set(arr)].length
}

console.log(remove_duplicate(arr))