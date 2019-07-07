// Add your functions here
function map(arr, cb) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

function reduce(arr, cb, start) {
  let result
  let i
  if (start) {
    result = start
    i = 0
  } else {
    result = arr[0]
    i = 1
  }
  for (i; i < arr.length; i++) {
    result = cb(arr[i], result)
  }
  return result
}
