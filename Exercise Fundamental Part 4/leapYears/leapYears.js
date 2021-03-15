const leapYears = function (num1) {
    let result = false;
    if (num1 % 100 == 0 && num1 % 400 == 0) {

        result = true;
        return result;
    }
    else if (num1 % 4 == 0 && num1 % 100 != 0) {
        result = true;
        return result;
    }
    else {
        return result;
    }
}

module.exports = leapYears
