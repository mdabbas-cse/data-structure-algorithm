// reference type
const Object1 = { val: 10 }
const Object2 = Object1
const Object3 = { val: 10 }

Object1.val = 20 // we reassing val property value is 20, but not change this reference so Object1 & Object2 true

console.log(Object1 === Object2) // output: true; because stored object reference
console.log(Object1 === Object3) // output: false; because 2 object reference are not same
