// Add your functions here
function map(values, action) {
  const newArray = []
  values.forEach(value => {
    newArray.push(action(value))
  })
  return newArray
}

function reduce(values, action, startingPoint = 0) {
  let result
  values.forEach(value => {
    result = action(value, startingPoint)
  })
  return result
}
