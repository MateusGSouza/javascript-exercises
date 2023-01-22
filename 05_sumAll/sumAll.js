const sumAll = function(initialNum, finalNum) {
    let result = 0;
    let count = 0;
    
    if (typeof(initialNum) != "number" || typeof(finalNum) != "number") {
        return "ERROR"
    };

    if (initialNum < 0 || finalNum < 0) {
        return "ERROR"
    };

    if (initialNum > finalNum) {
        count  = finalNum;

        while (count <= initialNum) {
            result+=count
            count++
        };

    } else {
        count = initialNum;
        
        while (count <= finalNum) {
            result+=count
            count++
        }
    };

    
    return result
};

// Do not edit below this line
module.exports = sumAll;
