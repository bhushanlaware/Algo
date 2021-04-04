const merge = (l, r) => {
  const sorted = [];
  while (l.length > 0 && r.length > 0) {
    if (l[0] <= r[0]) sorted.push(l.shift());
    else sorted.push(r.shift());
  }
  if (l.length > 0) {
    while (l.length > 0) {
      sorted.push(l.shift());
    }
  }
  if (r.length > 0) {
    while (r.length > 0) {
      sorted.push(r.shift());
    }
  }
  return sorted;
}
const mergeSort = (a = []) => {
  if (a.length <= 1) return a;
  const mid = Math.floor(a.length / 2);
  const l = mergeSort(a.splice(0, mid));
  const r = mergeSort(a);
  return merge(l, r);
}
console.log(mergeSort([77, 2, 3, 1, 4, 2, 34, 7]));
