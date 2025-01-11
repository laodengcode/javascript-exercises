const palindromes = function (text) {
    const regex = /[,. !]+/gi;
    let pureChar = text.replaceAll(regex, '').toLowerCase();
    let mirror = Array.from(pureChar).reverse().join('');
    return pureChar === mirror;
};

// Do not edit below this line
module.exports = palindromes;
