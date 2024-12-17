/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let set = new Set(s[i]);
        for (let j = i + 1; j < s.length; j++) {
            if (set.has(s[j])) break;
            set.add(s[j]);
        }
        max = Math.max(max, set.size)
    }

    return max;
};
