const findTheOldest = function (array) {
    array.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        if (!'yearOfDeath' in a) {
            a['yearOfDeath'] = currentYear;
        }

        if (!('yearOfDeath' in b)) {
            b['yearOfDeath'] = currentYear;
        }

        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;

        return (aAge - bAge) > 0 ? -1 : 1;
    })

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
