// array with 20 elements
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// binary search function
function binarySearch(arr, element, left, right) {
    if (left <= right) {

        const mid = Math.floor((left + right) / 2)
        
        if (element === arr[mid])
            return mid

        if (element < arr[mid])
            return binarySearch(arr, element, left, mid - 1)

        return binarySearch(arr, element, mid + 1, right)
    }
    return -1;
}

// test 
const index = binarySearch(arr, 11, 0, arr.length - 1)

if (-1 === index)
    console.log('not found')
else
    console.log('found at index: ', index)
