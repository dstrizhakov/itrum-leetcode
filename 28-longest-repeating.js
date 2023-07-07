/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const chars = {}
  let left = 0;
  let maxf = 0;
  let output = 0;
  for(let right = 0; right < s.length; right++) {
      const char = s[right];
      chars[char] = 1 + (chars[char] || 0);
      maxf = Math.max(maxf, chars[char]);
      while((right-left+1) - maxf > k) {
              chars[s[left]] -= 1;
              left++;
        }
      output = Math.max(output, right - left +1)
  }
  return output
};

console.log(characterReplacement("AABABBA", 1));
