// create unsorted arr with 20 elements unsorted
const arr = [23, 20, 12, 45, 34, 11]

// bubble sort function for ascending and descending order
function bubbleSortAscendingOrder(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        const len2nd = len - i - 1

        // flag to check if the array is sorted
        let isSorted = false

        for (let j = 0; j < len2nd; j++) {
            const nextIndex = j + 1

            if (arr[j] > arr[nextIndex]) {
                const temp = arr[j]
                arr[j] = arr[nextIndex]
                arr[nextIndex] = temp
                isSorted = true
            }

        }

        if (!isSorted)
            break

    }
    return arr
}

function bubbleSortDescendingOrder(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        const len2nd = len - i - 1

        // flag to check if the array is sorted
        let isSorted = false

        for (let j = 0; j < len2nd; j++) {
            const nextIndex = j + 1

            if (arr[j] < arr[nextIndex]) {
                const temp = arr[j]
                arr[j] = arr[nextIndex]
                arr[nextIndex] = temp
                isSorted = true
            }

        }

        if (!isSorted) 
            break
        
    }
    return arr
}



// test
console.log('before sort: ', arr)
console.log('after sorted ascending: ', bubbleSortAscendingOrder(arr))
console.log('after sorted descending: ', bubbleSortDescendingOrder(arr))