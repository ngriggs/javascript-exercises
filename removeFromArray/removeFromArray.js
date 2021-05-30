const removeFromArray = function(array, ...args) {
    let initialArray = array;
    let argLength = args.length
    for (i=0; i<argLength; i++) {
        let index = initialArray.indexOf(args[i])
        if (index > -1) {
            initialArray.splice(index, 1);
        }
    }
    return initialArray;
};

module.exports = removeFromArray;
