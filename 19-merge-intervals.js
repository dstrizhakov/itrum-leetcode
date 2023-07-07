/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] -b[0]);
  for(let i = 1; i < intervals.length; i+=1) {
    let [prevMin, prevMax] = intervals[i - 1];
    let [min, max] = intervals[i];
    if (min <= prevMax) {
      intervals[i - 1][1] = Math.max(max, prevMax);
      intervals.splice(i, 1);
      i--;
    }
  }
  return intervals
  };