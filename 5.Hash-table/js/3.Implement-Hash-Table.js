/**
 | HASH TABLE TIME COMPLEXITY IN BIG O NOTATION	
 | Algorithm  Average   Worst case
 | Space      O(n)	    O(n)
 | Search     O(1)	    O(n)
 | Insert     O(1)	    O(n)
 | Delete     O(1)	    O(n)
 */
class HashTable {
  constructor() {
    this.table = new Array(127)
    this.length = 0
  }

  _hash(key) {
    let hash = 0
    const len = key.length
    for (let i = 0; i < len; i += 1) {
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length
  }

  get(key) {
    const tatgetIndex = this._hash(key)
    if (this.table[tatgetIndex]) {
      const len = this.table.length
      for (let i = 0; i < len; i++) {
        if (this.table[tatgetIndex][i][0] === key) {
          return this.table[tatgetIndex][i][1]
        }
      }
    }
    return 'Invalid target key!'
  }

  set(key, value) {
    const index = this._hash(key)
    // chack index already exist
    if (this.table[index]) {
      const len = this.table[index].length
      for (let i = 0; i < len; i += 1) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value
          return
        }
      }
      // not found, push a new key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = []
      this.table[index].push([key, value])
    }
    this.length++
  }

  remove(key) {
    const removeTargetIndex = this._hash(key)
    if (this.table[removeTargetIndex] && this.table[removeTargetIndex].length) {
      for (let i = 0; i < this.table.length; i += 1) {
        this.table[removeTargetIndex].splice(i, 1)
        this.length--
        return true
      }
    }
    return 'Invalid target key!'
  }
  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.length); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
console.log(ht.table)