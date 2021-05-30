const reverseString = function(input) {
    stringArray = input.split("");
    reverseArray = stringArray.reverse()
    reverse = reverseArray.join("")
    return reverse;
};

module.exports = reverseString;
