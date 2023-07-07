const s = "anagram";
const t = "nagaram";


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sortedS = s.split('').sort((a, b) => a.localeCompare(b)).join('');
  const sortedT = t.split('').sort((a, b) => a.localeCompare(b)).join('');
  return sortedS === sortedT;
  
};

isAnagram(s,t);