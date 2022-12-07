
const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function selectionSort(arrayToSort) {
  for (let i = 0; i < arrayToSort.length; i++) {
    let min = i
    for (let j = i; j < arrayToSort.length; j++) {
      if (arrayToSort[j] < arrayToSort[min]) {
        min = j
      }
    }
    if (min != i)
      swap(arrayToSort, min, i)
  }
  return arrayToSort

}

console.log(selectionSort([6, 1, 2, 3, 4, 5]));
console.log(selectionSort([12, 25, 31, 23, 75, 81, 100]));
console.log(selectionSort([1, 15, 10, 45, 27, 100]));

module.exports = selectionSort