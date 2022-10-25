console.clear()

function fibonacciIteration(n) { // O(n)
  const arr = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  console.log(arr[n])
}

fibonacciIteration(6)


function fibonacci(n) { // O(2 ^ n)
  if (n < 2) {
    // console.log(n)
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))