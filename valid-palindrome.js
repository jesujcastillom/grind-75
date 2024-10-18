const alphaNum = /[a-zA-Z0-9]/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.split('').filter(c => alphaNum.test(c)).map(c=>c.toLowerCase());
    for(let i=0; i < cleanString.length / 2; i++){
        if(cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
            return false
        }
    }
    return true;
};
