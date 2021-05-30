const repeatString = function(initialString, number) {
    let string = '';
    if (number < 0) {
        return 'ERROR'
    }
    for (i=0; i<number;i++){
        string = string + initialString
    }
    return string
};

module.exports = repeatString;
