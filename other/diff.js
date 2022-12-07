function diff(oldCode, newCode) {
  const newKeys = Object.keys(newCode)
  const keys = Object.keys(oldCode)
  const oldEntries = Object.entries(oldCode)
  let newEntries = []
  const keys2 = Object.values(oldCode)

  keys.map((key) => {
    if (!newKeys.includes(key)) {
      console.log(key)
      newEntries.push(['-', key, oldCode[key]])
    }
    return key
  })

  newKeys.map((key) => {
    const value = oldCode[key]
    const newValue = newCode[key]
    if (value) {
      console.log(key, 'K')
      if (value !== newValue) {
        newEntries.push(['+,', key, newValue])
      }
    } else {
      newEntries.push(['+', key, newValue])
    }
  })
  return newEntries
}

const oldCode = {
  apples: 3,
  grapes: 5
}
const newCode = {
  apples: 3,
  oranges: 4
}

console.log(diff(oldCode, newCode))