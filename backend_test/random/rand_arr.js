const rand = require('./rand_int')

module.exports = function (length = 7) {
    const randArr = [];

    for (let i = 0; i < length; i++) {
        randArr.push(rand());
    }
    return randArr;
}
