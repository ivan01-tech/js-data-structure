
const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

/**
 * Sort an Array base on the bubble sort alogorith : the peincipe is to map over all element in the array and for each item of Array we comparaison to each others it's right place.
 * @param {Array} array 
 * @returns {Array}
 */
function bubbleSort(array) {
  const arrayLength = array.length

  for (let i = 0; i < arrayLength; i++) {
    const num = array[i]
    for (let j = 0; j < i; j++) {
      if (num < array[j]) swap(array, i, j)
    }
  }
  return array
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]))
console.log('==========================')
console.log(bubbleSort([12, 25, 31, 23, 75, 81, 100]));
console.log('==========================')
console.log([1, 15, 10, 45, 27, 100].splice(1));
if ([])
  console.log(
    "fff"
  );