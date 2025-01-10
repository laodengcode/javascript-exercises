const leapYears = function (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return year % 4 === 0;
    }

};

// Do not edit below this line
module.exports = leapYears;
