// Add your functions here
function map(ary, f){
  return ary.map(
    ary => f(ary)
  )
}

function reduce(ary, f, start=0){

  return ary.reduce(
    ((a,b) => f(a, b)), start
  )
}

ary = [1,2,3]
console.log(reduce(ary, function(e, memo){return e + memo}))
