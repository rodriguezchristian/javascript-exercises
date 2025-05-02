const removeFromArray = function(arr, ...targets) {
    let res = arr.filter(item => !targets.includes(item));
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
