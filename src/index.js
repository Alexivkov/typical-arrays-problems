exports.min = function min(array) {
    if (array === undefined || !array.length) return 0;
    let k = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < k) {
            k = array[i];
        }
    }
    return k;
};

exports.max = function max(array) {
    if (array === undefined || !array.length) return 0;
    let k = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > k) {
            k = array[i];
        }
    }
    return k;
};

exports.avg = function avg(array) {
    if (array === undefined || !array.length) return 0;
    let k = array[0];
    for (let i = 1; i < array.length; i++) {
        k += array[i];
    }
    return k / array.length;
};
