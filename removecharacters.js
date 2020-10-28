function removeCharacters(string, char) {
    let finalString = ''
    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < char.length; j++)
            if(string[i] !== char[j]) {
                finalString += string[i]
            }
            else {
                finalString += ''
            }
    }
    console.log(finalString)
    return finalString
}

removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');