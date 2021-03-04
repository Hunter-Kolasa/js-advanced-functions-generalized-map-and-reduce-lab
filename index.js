// Add your functions here
function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let e = array[i]
        newArray.push(fn(e))
    }
    return newArray
}

function reduce(array, fn, startingPoint) {
    let r = (!!startingPoint) ? startingPoint : array[0];
    let i = (!!startingPoint) ? 0 : 1
    for (; i < array.length; i++) {
        r = fn(array[i], r)
    }
    return r
}