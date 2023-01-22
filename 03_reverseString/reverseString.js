const reverseString = function(string) {
    const stringLength = string.length-1

    let stringReversed = []
    let count = 0
    for (let index = stringLength; index > -1; index-- ) {
        stringReversed[count] = string.split("")[index]
        count++
    }
    stringReversed = stringReversed.join().replaceAll(",", "")
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
