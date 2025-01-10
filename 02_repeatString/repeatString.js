const repeatString = function (text, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let response = '';
    for (let i = 0; i < num; i++) {
        response += text;
    }
    return response;

};

// Do not edit below this line
module.exports = repeatString;
