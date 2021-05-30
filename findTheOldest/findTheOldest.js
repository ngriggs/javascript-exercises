const findTheOldest = function(objs) {
    let temp = []
    let thisYear = new Date().getFullYear()
    for (i = 0; i < objs.length; i++) {
        if (objs[i].yearOfDeath == undefined) {
            temp[i] = thisYear - objs[i].yearOfBirth 
        } else {
            temp[i] = objs[i].yearOfDeath - objs[i].yearOfBirth 
        }
    }
    let maxAge = Math.max(...temp);
    index = temp.indexOf(maxAge)
    return objs[index]
};

module.exports = findTheOldest;
