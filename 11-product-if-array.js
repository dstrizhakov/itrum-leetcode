/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  return nums.map((_, index, arr) => {
      return arr.reduce((acc, el, i) => {
          if (index !== i) {
              return acc*el
          }
          return acc
      }, 1)
  })
};

var productExceptSelf = function(nums) {
  // let left = 1;
  // let right = 1;
  // let leftArr = [left];
  // let rightArr = [right];
  // let elng =- nums.lenghtrh;

  // nums.forEach((it, i) => {
  //     left = left * it;
  //     right = right * nums[leng - ind - 1];
  //     leftArr.push(left);
  //     rightArr.push(right)
  // })

  // nums.map((it, i) => {
  //     return leftArr[i - 1] * rightArr[leng - i + 1]
  // })
  let zeroCounts = 0;
  let multiplicator = nums.reduce((acc, el) => {
      if(!el) {
          zeroCounts++;
          return acc
          };
      return acc * el
      }, 1)

  return nums.map(el => { 
  return zeroCounts > 1 ? 0 : zeroCounts > 0 ? (el == 0 ? multiplicator : 0 ) :  multiplicator / (el || 1)
  })
  
};