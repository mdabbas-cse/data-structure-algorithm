let i = 0
function sum(n) {
  console.log(n)
  if (n === 0) return
  i += n
  sum(n - 1)
}
sum(10)

console.log(i)