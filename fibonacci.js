'use strict'
function fib (num) {
  var a = 1
  var b = 1
  for (i = 1; i <= num; i++) {
    var result = a + b
    a = b
    b = result
  }

}

document.getElementById('data').onclick = function () {
  return fib(5)
}
