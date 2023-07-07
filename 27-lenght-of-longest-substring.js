/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let dictionary = new Set();
  let counter = 0;
  let maxCounter = 0;
for (let i = 0; i < s.length; i++) {
  if(dictionary.has(s[i])) {
      counter = 0;
      i-= dictionary.size;
      dictionary.clear();
  } else {
    dictionary.add(s[i])
    counter += 1;
  }
  maxCounter = Math.max(maxCounter,counter);
}
console.log(maxCounter)
  return maxCounter
};

lengthOfLongestSubstring('dvdfe')