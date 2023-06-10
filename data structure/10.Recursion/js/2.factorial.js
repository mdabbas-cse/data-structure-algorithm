let fact = 1
function factorial(n) {
  if (n === 2) return 2
  return n * factorial(n - 1)
}


console.log(factorial(5))

// function factorial(n) {
//   fact *= n
//   return n - 1
// }

// factorial(factorial(factorial(factorial(factorial(5)))))
// 1 * 2 * 3 * 4 * 5
// console.log(fact)