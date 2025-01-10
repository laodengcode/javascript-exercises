const reverseString = function (text) {
    let response = '';
    for (let i = text.length - 1; i >= 0; i--) {
        response += text[i];
    }
    return response;

    // return text.split('').reverse().join('');


};

// Do not edit below this line
module.exports = reverseString;
