arr = [2, 5, 6, 3, 9, 5, 8, 7]


def bubbleSort(arr):
    length = len(arr) - 1
    for i in range(0, length):
        for j in range(0, length):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
        length -= 1
    return arr


sortedArray = bubbleSort(arr)
print(sortedArray)
