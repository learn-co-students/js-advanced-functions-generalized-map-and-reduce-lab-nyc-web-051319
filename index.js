// Add your functions here
function map(array, fn){
  let newArray = []
  for (let i = 0; i< array.length; i++){
    newArray.push(fn(array[i]))
  }
  return newArray;
}

function reduce(array, fn, starting = 0){
  let r = (!!starting) ? starting : array[0]
  let i = (!!starting) ? 0 : 1

  for (; i < array.length ;i++) {
    r = fn(array[i], r)
  }
  return r
}

let sourceArray = [1,2,3]
reduce(sourceArray, function(e, memo){return e + memo})
