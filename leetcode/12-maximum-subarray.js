/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  let summ = 0;
  for (let i = 0; i < nums.length; i++) {
        summ += nums[i];
        max = Math.max(max, summ)
        if (summ < 0) {
            summ = 0;
        }
  }
  
  return max;
};

maxSubArray([5,4,-1,7,8]);