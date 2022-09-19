//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i += 1) {
    for (let j = i + 1; j < input.length; j += 1) {
      if (input[i] === input[j]) return input[i]
    }
  }
  return undefined
} // O(n^2)
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]))

// solved by hash table
function firstRecurringCharacter2(input) {
  const map = {}
  for (let i = 0; i < input.length; i += 1) {
    if (map[input[i]] !== undefined)
      return input[i]
    map[input[i]] = true
  }
  return undefined
} //O(n)
console.log(firstRecurringCharacter2([2, 3, 4, 5]))


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2