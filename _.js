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
    words: function (string) {
        return string.split(' ');
    },
    pad: function (string, length) {
        if (string.length >= length){
            return string;
        }
        beginningPad = Math.floor((length - string.length) / 2);
        endPad = length - string.length - beginningPad;
        let paddedString = `${' '.repeat(beginningPad)}${string}${' '.repeat(endPad)}`;
        return paddedString;
    },
    has: function (object, key) {
        if (object[key]) {
            return true;
        } else {
            return false;
        }
    },
    invert: function (object) {
        let invertedObject = {};
        for (const property in object) {
            let originalValue = object[property];
            invertedObject.originalValue = property;
        }
        return invertedObject;
    },
    findKey: function (object, predicate) {
        for (const property in object) {
            if (predicate(object[property])) {
                return property;
            }
        }
        return undefined;
    }
};




// Do not write or modify code below this line.
module.exports = _;