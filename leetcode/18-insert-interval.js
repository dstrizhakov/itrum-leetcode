// O(n), O(n)
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let [start, end] = newInterval;
  let left = [];
  let right = [];
  
  for (interval of intervals) {
      let [first, second] = interval;

      if (second < start) left.push(interval);
      else if (first > end) right.push(interval);
      else {
          start = Math.min(first, start);
          end = Math.max(second, end);
      }        
  }
  return [...left, [start, end], ...right];
};