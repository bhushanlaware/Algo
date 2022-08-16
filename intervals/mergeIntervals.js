function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < intervals.length; i++) {
    if (isOverlap(intervals[i - 1], intervals[i])) {
      mergedInterval = merge(intervals[i - 1], intervals[i]);
      intervals.splice(i - 1, 2, mergedInterval);
      i--
    }
  }
  function isOverlap(p1, p2) {
    return (p1[1] >= p2[0] && p1[0] <= p2[1])
  }
  function merge(p1, p2) {
    return [Math.min(p1[0], p2[0]), Math.max(p1[1], p2[1])];
  }
  return intervals;
}
const a = mergeIntervals([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]);
console.log(a);
// expected output: [[1, 3], [4, 7]]:
// sorted by start time: [[1, 3], [2, 2], [2, 2], [2, 3], [3, 3], [4, 6], [5, 7]]