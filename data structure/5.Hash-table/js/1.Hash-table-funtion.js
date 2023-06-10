const HashTable = new Map()

// HashTabl.setter('access key', 'value')
HashTable.set('Md. Abbas Uddin', 100)
HashTable.set('109044', 101)

console.log(HashTable)
console.log(HashTable.size)
console.log(HashTable.get('109044')) // O(1)

for (let [key, value] of HashTable) {
  console.log(`HashTable Key: ${key}, value: ${value}`)
}
