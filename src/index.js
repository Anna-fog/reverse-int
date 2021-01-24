module.exports = function reverse (int) {
    if (!int) return 0;
    return parseInt(int.toString().split('').reverse().toString().replace(/,/g, ''));
}
