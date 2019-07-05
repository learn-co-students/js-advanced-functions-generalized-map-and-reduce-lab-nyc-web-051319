// Add your functions here
function map(arr, fn){
    let newArr = []
    for(let i =0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}


function reduce(array, fn, starting = 0) {
    let x = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
        x = fn(array[i], x)
    }
    return x
}

let sourceArray = [1, 2, 3]
reduce(sourceArray, function (e, memo) {
    return e + memo
})