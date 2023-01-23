const leapYears = function(year) {
    const centuryYear = year % 100 == 0 && year % 400 != 0;
    const leapYear = year % 4 == 0;

    if (centuryYear || !leapYear) {
        return false
    } else {
        return true
    };
};

// leapYears(34992)
// Do not edit below this line
module.exports = leapYears;
