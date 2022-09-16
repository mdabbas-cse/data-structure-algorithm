/**
 * Excercise Space Complexity
 */
function foo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('hello')
  }
}
foo([1, 2, 3, 4, 5]) // O(1)

function arrayOfName(n) {
  const arr = []
  for (let i = 0; i < n.length; i++) {
    arr[i] = 'hello'
  }
  return arr
}
arrayOfName(["Red", "Green", "White", "Black"]) // O(n)