// function flattenOfObject(obj) {
//   let stringHelper = ''
//   const entries = Object.values(obj)
//   entries.forEach((value) => {
//     if (typeof value == 'object') {
//       stringHelper += flattenOfObject(value)
//     } else {
//       stringHelper += Object.getOwnPropertyNames(obj).find((propName) => obj[propName] == value)
//     }

//   })

// }
// flattenOfObject()


palidrone('hi')

function palidrone(strng) {
  const length = strng.length
  let prev, next

  if (length % 2 == 0) {
    prev = Math.floor((length - 1) / 2)
    next = Math.ceil((length - 1) / 2)
  } else {
    prev = Math.floor((length) / 2)
    next = Math.ceil((length) / 2)
  }

  console.log(prev, next);
  function palin(strng, prev, next) {

    if (prev == 0 || next == (length) - 1) {
      return strng[prev] == strng[next]
    }
    return strng[prev] == strng[next] && palin(strng, prev - 1, next + 1)
  }

  console.log(palin(strng, prev, next));
}

palidrone('ivan')



