
function insertionSort(arrayToSort) {

  for (let i = 1; i < arrayToSort.length; i++) {

    if (arrayToSort[i] < arrayToSort[i - 1]) {

      const temp = arrayToSort[i]
      let j = i - 1

      while (temp < arrayToSort[j]) {

        arrayToSort[j + 1] = arrayToSort[j]
        j--

      }

      if (j != i - 1)
        arrayToSort[j + 1] = temp

    }

  }

  return arrayToSort
}

console.log(insertionSort([12, 25, 31, 23, 75, 81, 100]));

console.log(insertionSort([1, 15, 10, 45, 27, 100]));