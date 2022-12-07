function base10ToTwo(number) {

  function convertDicmalToBase2WihtRecursion(number) {
    // the base case of the probleme
    if (number <= 1) {
      return number + ''
    }
    return number % 2 + '' + convertDicmalToBase2WihtRecursion(Math.floor(number / 2))
  }
  return convertDicmalToBase2WihtRecursion(number).split('').reverse().join('')

}


console.log(base10ToTwo(65));
console.log(base10ToTwo(7));