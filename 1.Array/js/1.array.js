const arr = ['a', 'b', 'c', 'd']
// (4*4) = 16 bytes store data

// acces array element
console.log(arr[2]) // O(1)

// insert data in array
arr.push('e') // O(1)
console.log(arr)

// delete data in arrry last index
arr.pop() // O(1)
console.log(arr)

// 
arr.unshift('x') // O(n)
console.log(arr)

// shift
arr.shift() // O(n)
console.log(arr);

// splice
arr.splice(3, 0, ...['e', 'f', 'g']) // O(n)
console.log(arr)