/**
 * @param {string} s
 * @return {number}
 */

const isPalindrome = (str) => {
  return str === str.split().reverse().join();
}

var countSubstrings = function(s) {
const results = [];
 //перебираем все варианты
 for(let i = 0; i< s.length; i++) {
     for(let j = i; j<=s.length; j++) {
         let substring = s.slice(i,j);

         if (isPalindrome(substring)) {
             results.push(substring)
         }
     }
 }
 return results.length
 
};

console.log(countSubstrings('aaa'))