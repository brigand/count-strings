module.exports = function count(hay, needle) {
    var matches = 0;
    var i = 0;
    var j = 0;
    var length = hay.length;
    var sublength = needle.length;

    if (sublength === 0) {
        return length;
    }

    while (i < length) {
        if (hay[i + j] === needle[j]) {
            j++;
            if (j >= sublength) {
                matches++;
                i += j;
                j = 0;
            }
        } else {
            j = 0;
            i++;
        }
    }

    return matches;
};
