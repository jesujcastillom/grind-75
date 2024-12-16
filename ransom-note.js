/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const aL = new Map();
    for (const l of magazine) {
        const count = aL.get(l) ?? 0
        aL.set(l, count + 1)
    }

    for (const l of ransomNote) {
        const count = aL.get(l);
        if (!aL.has(l) || count == 0) return false;
        aL.set(l, count - 1);
    }
    return true;
};
