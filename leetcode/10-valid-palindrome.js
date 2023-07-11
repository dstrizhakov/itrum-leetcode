
/**
 * @param {string} s
 * @return {boolean}
 */

const isChar = (char) => {
  return char.toUpperCase() !== char.toLowerCase() || !Number.isNaN(+char);
 }

var isPalindrome = function(s) {

    const string = s.split('').filter((char) => isChar(char)).join('').toLowerCase().replaceAll(' ', '');
    const reversed = string.split('').reverse().join('');

  return string === reversed; 
};

const s = "A man, a plan, a canal: Panama"
isPalindrome(s);