/**
 * @param {number[]} height
 * @return {number}
 */

// ? O(n*n)
// var maxArea = function(height) {
//   let maxVolume = 0
//   for (let i = 0; i < height.length - 1; i++) {
//       for(let j = i + 1; j < height.length; j++) {
//           let minHeight = Math.min(height[i], height[j])
//           let volume = minHeight * (j - i);
//           console.log(height[i], height[j], minHeight);
//           maxVolume = Math.max(maxVolume, volume)
//       }

//   }
//   return maxVolume;
// };

// ?O(n)
var maxArea = function(height) {
  let maxVolume = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let volume = minHeight * (right - left);
    maxVolume = Math.max(maxVolume, volume);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxVolume;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));