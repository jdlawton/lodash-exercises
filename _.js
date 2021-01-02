const _ = {
    clamp: function (number, lower, upper) {
        let clampedNum = Math.max(number, lower);
        clampedNum = Math.min(clampedNum, upper);
        return clampedNum;
    },
    inRange: function (number, start, end) {
        if (!end){
            end = start;
            start = 0;
        }
        if (start > end){
            let temp = start;
            start = end;
            end = temp;
        }

        if (number < start || number >= end) {
            return false;
        } else {
            return true;
        }
    },
    
};




// Do not write or modify code below this line.
module.exports = _;