/**
 * a function to make a deep copy of a structural data types
 * @param {Object} obj 
 * @returns Object
 */
function deepCopy(obj) {
  if (typeof obj !== "object") return obj

  const newObj = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}

let obj = {
  i: 'hvfv', v: {
    e: 'ghj', d: 'fdgbrfg'
  }
}
let n = { ...obj }
n.v.e = 'ivan'
let newObj = deepCopy(obj)
newObj.v.e = 'carlos'
console.log(newObj)
console.log(obj)
console.log(n)

module.exports = deepCopy



