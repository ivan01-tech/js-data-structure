

function xPuissanceN(x, n) {

  if (n == 0) {
    return 1
  }

  if (n == 1) {
    return x
  }

  if (n == 2) {
    return x * x
  }

  if (n % 2 !== 0) {
    return x * xPuissanceN(x, Math.floor(n))
  }

  return xPuissanceN(x, Math.floor(n / 2)) * xPuissanceN(x, Math.floor(n / 2))
}
console.log(xPuissanceN(2, 3));
console.log(xPuissanceN(10, 8));