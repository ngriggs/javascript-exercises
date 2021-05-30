const fibonacci = function(int) {
    int = parseInt(int)
    if (int < 0) {
        return 'OOPS'
    }
    fib = [0, 1]
    for (i = 0; i < int - 1; i++) {
        fib.push(fib[fib.length-1] + fib[fib.length-2])
    }
    return fib[int]
};

module.exports = fibonacci;
