module.exports = function count(hay, needle) {
    var matches = 0;
    for (var i = 0; i < hay.length - needle.length + 1; i++) {
        var fail = false;
        for (var j = 0; j < needle.length; j++) {
            if (hay[i + j] !== needle[j]) {
                fail = true;
                break
            }
        }
        if (!fail) matches++
    }
    return matches
}
