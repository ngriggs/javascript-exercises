const getTheTitles = function(obj) {
    let bookTitles = []
    for (i = 0; i < obj.length; i++) {
        bookTitles.push(obj[i].title)
    }
    return bookTitles
};

module.exports = getTheTitles;
