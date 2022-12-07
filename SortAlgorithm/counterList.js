/**
 * A function to count a number of some words inside a string.
 * @param {String} string 
 */

function counterList(string) {
  const word = string.replace(/[.]/, "").split(" ")
  const objCountWord = {}
  word.forEach((w, index) => {
    if (objCountWord[w]) objCountWord[w]++
    else {
      objCountWord[w] = 1
    }
  })
  console.log(objCountWord);
}

// counterList('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto voluptatum neque beatae harum sapiente natus perspiciatis officiis rem veniam tempora deleniti doloremque ? Accusamus, laborum quasi eveniet voluptatem minus explicabo Lorem ipsum dolor sit amet')

