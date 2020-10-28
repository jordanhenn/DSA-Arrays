const e = require("express")

function merge(arr1, arr2) {
    let finalArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; i++) {
            if(arr1[i] < arr2[j]) {
            finalArray.push(arr1[i], arr2[j])
            }
            else {
             finalArray.push(arr2[j], arr1[i])
            }
        }
    }
    console.log(finalArray)
    return finalArray
}

merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])