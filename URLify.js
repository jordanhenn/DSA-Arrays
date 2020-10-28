function urlify(string) {
    const stringArray = string.split('')
    console.log(stringArray)
    let finalString = ''
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === ' ') {
            finalString += '%20'
        }
            finalString += stringArray[i]
    }
    console.log(finalString)
    return finalString
}

urlify('egg .com');