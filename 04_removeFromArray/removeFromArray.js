const removeFromArray = function(list, ...itemsToRemove) {
    return list.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
