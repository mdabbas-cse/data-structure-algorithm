const string = 'hello! im abbas'
// first solution
function reverseString(string) {
  const item = string.length
  if (!string || item < 2 || typeof string !== 'string')
    return "Hmm! ✋ Invalid String"
  let s = ''
  for (let i = item - 1; i >= 0; i--)
    s += string[i]

  return s
}

// second solution 
function reverseString2(string) {
  return string.split('').reverse().join('')
}

console.log(reverseString(string))
console.log(reverseString2(string))