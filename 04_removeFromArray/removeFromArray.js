const removeFromArray = function (array, ...targets) {
    for (let target of targets) {
        array = array.filter((element) => { return element !== target })
    }
    return array;
    //return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
