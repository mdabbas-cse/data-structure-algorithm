// selection sort

const arr = [5, 3, 6, 2, 10];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_indx = i;
    /**
     * itaration 0: 5, 3, 6, 2, 10
     * i = 0, min_indx = 3, j = 4
     */
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_indx]) {
        min_indx = j;
      }
    }


    if (min_indx !== i) {
      let temp = arr[i];
      arr[i] = arr[min_indx];
      arr[min_indx] = temp;
    }
  }
}

selectionSort(arr);

console.log(arr);