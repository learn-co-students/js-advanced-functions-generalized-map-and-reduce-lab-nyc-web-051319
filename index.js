// Add your functions here
function map(sourceArray, funct) {
  return sourceArray.map(x => funct(x))
}

function reduce(sourceArray, funct, startingPoint=0) {
    let starting = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1

    while(i < sourceArray.length){
      starting = funct(sourceArray[i], starting)
      i++
    }
    return starting
}
