"""
Remove duplicate element from array without new array
"""

arr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

def remove_duplicate(arr):
  length = len(arr)
  newArr = []
  for i in range(length):
    if arr[i-1] != arr[i]:
      newArr.append(arr[i])
  
  print(newArr)
  return len(newArr)


print(remove_duplicate(arr))