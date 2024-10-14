/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const charMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const openBrackets = Object.keys(charMap);

    for(const character of s) {
        if (openBrackets.includes(character)) {
            stack.push(character);
            continue;
        }

        if (!stack.length || charMap[stack.pop()] !== character) {
            return false;
        }
    }
    return stack.length === 0;
};
