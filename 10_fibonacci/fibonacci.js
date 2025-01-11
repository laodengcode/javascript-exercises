const fibonacci = function (index) {
    index = Number(index);
    if (index < 0) {
        return "OOPS";
    }
    if (index == 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    } else if (index == 2) {
        return 1;
    } else {
        n_2 = 1;
        n_1 = 1;
        let n = n_2 + n_1;
        for (let i = 3; i <= index; i++) {
            n = n_1 + n_2;
            n_2 = n_1;
            n_1 = n;
        }
        return n;
    }
};

// Do not edit below this line
module.exports = fibonacci;
