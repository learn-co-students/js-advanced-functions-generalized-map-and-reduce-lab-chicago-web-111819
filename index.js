// Add your functions here
function map (arr, fcn){
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(fcn(arr[i]))
    }
    return newArr
}


// doesnt pass "reduce returns true when all values are true"
// function reduce (arr, fcn, start = 0){
//     let result = start
//     for (let i = 0; i < arr.length; i++){
//         result = fcn(arr[i], result)
//     }
//     return result
// }

function reduce (arr, fcn, start = 0){
    let result = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for (; i < arr.length; i++){
        result = fcn(arr[i], result)
    }
    return result
}