/**
 * just to swap to numbers of an array base on thier index */
const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

/**
 * Sort an array of numbers base on the mergeSort Algorithm
 * @param {Array} arrayToSort 
 * @returns Array
 */
function mergeSort(arrayToSort) {

  if (arrayToSort.length == 0) return []
  if (arrayToSort.length == 1) return arrayToSort

  if (arrayToSort.length == 2) {

    if (arrayToSort[1] < arrayToSort[0]) {
      swap(arrayToSort, 0, 1)
    }

    return arrayToSort
  }

  const med = Math.floor((arrayToSort.length) / 2)
  return Merge(
    mergeSort(
      [...arrayToSort].splice(0, med)
    ),
    mergeSort(
      [...arrayToSort].splice(med)
    )
  )

}
/**
 * a function use two merge to array of sorted numbers
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns Array
 */
var i = 0
function Merge(array1, array2) {
  if (array1.length == 0) return array2

  if (array2.length == 0) return array1

  if (array1[0] < array2[0])
    return [array1[0], ...Merge(array1.splice(1), array2)]

  else
    return [array2[0], ...Merge(array1, array2.splice(1))]

}

// console.log(mergeSort([1, 15, 10, 45, 27, 100]));
// console.log(mergeSort([6, 1, 2, 3, 4, 5, 1, 15, 10, 45, 27, 100]));
// console.log(mergeSort([12, 25, 31, 23, 75, 81, 100, 6, 1, 2, 3, 4, 5, 1, 15, 10, 45, 27, 100]));
console.log(mergeSort([1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2, 12, 25, 31, 23, 75, 81, 100, 6, 1, 2, 3, 4, 5, 1, 15, 10, 45, 27, 100]));

module.exports = mergeSort