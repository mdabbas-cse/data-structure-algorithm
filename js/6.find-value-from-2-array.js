// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// 👉 first solution
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}
//O(a*b)
//O(1) - Space Complexity
// 👉 Second Solution
function containsCommonItem2(arr1, arr2) {
  const map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) map[arr1[i]] = true
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] in map) return true
  }
  return false
}

function betterSolution(arr, sum) {
  const mySet = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return true
    mySet.add(sum - arr[i])
  }
  return false
}
//O(a + b) Time Complexity
//O(a) Space Complexity
// 👉 Second Solution
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'd'];
console.log(containsCommonItem(array1, array2))
console.log(containsCommonItem2(array1, array2))
console.log(containsCommonItem3(array1, array2))
console.log(betterSolution([1, 2, 3, 4, 5], 5))
