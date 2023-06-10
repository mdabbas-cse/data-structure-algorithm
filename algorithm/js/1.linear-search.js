// create a array with 20 elements

const arr = [...Array(20).keys()];

// linear search function
function linearSearch(arr, element) {
    for (let i = 0 ; i < arr.length ; i++) {
        if ( element === arr[i]) {
            return i;
        }
    }
    return -1;
}

// test
const index = linearSearch(arr, 10);

if ( -1 === index ) {
    console.log('not found');
} else {
    console.log('found at index: ', index);
}