function filterArray(arr) {
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}

filterArray([0, 5, 8, 2, 3, 6]);