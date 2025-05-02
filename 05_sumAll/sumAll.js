const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof(start) !== "number" || typeof(end) !== "number" 
    || start % 1 != 0 || end % 1 != 0) {
        return "ERROR";
    }
    let res = 0;
    let minStart = Math.min(start, end);
    let maxEnd = Math.max(start, end);
   
    for (i = minStart; i <= maxEnd; i++) {
        res += i;
    }
    
    return res;

};

// Do not edit below this line
module.exports = sumAll;
