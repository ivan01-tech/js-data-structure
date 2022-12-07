/**
 * An implementation of quick sort Algoritm
 * Here our pivot is always the last element of the array
 * @param {Array} arrayToSort 
 * @returns Array
 */

// TODO write another version of this algorithm

// TODO i steel i have soo much to do here

function quickSort(arrayToSort) {
  if (arrayToSort.every((a, b) => a === b)) return arrayToSort

  if (arrayToSort.length == 0) return []
  if (arrayToSort.length == 1) return arrayToSort

  const length = arrayToSort.length
  const pivot = arrayToSort[length - 1]
  const leftArray = []
  const rightArray = []

  for (let i = 0; i < length - 1; i++) {
    if (arrayToSort[i] < pivot) leftArray.push(arrayToSort[i])
    if (arrayToSort[i] >= pivot) rightArray.push(arrayToSort[i])
  }
  console.log(leftArray, rightArray);
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]

}

console.log(quickSort([12, 25, 31, 23, 75, 81, 100]));
console.log('==========================')
console.log(quickSort([1, 15, 10, 45, 27, 100]));

module.exports = quickSort

