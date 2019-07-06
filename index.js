// Add your functions here
function map(values, action) {
  const newArray = []
  values.forEach(value => {
    newArray.push(action(value))
  })
  return newArray
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
