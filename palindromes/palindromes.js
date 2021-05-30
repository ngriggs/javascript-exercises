const palindromes = function (string) {
    string = string.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, "");
    string = string.toLowerCase();
    stringArray = string.split('')
    forwardString = stringArray.join('')
    reverseString = stringArray.reverse().join('')
    return forwardString == reverseString

};

module.exports = palindromes;