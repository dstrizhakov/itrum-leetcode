/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const unique = new Set(nums);
  return unique.size !== nums.length;
};