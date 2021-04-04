const partion = (a, start, end) => {
  let pivot = a[end];
  let index = start;
  for (let i = start; i < end; i++) {
    if (a[i] < pivot) {
      const temp = a[i];
      a[i] = a[index];
      a[index] = temp;
      index++;
    }
  }
  const temp = a[index];
  a[index] = a[end];
  a[end] = temp;
  return index;
}
const quickSort = (a = [], start, end) => {
  if (end <= start) return;
  const pivot = partion(a, start, end);
  // console.log(pivot)
  quickSort(a, start, pivot - 1);
  quickSort(a, pivot + 1, end);
}

const a = [77, 2, 3, 1, 4, 2, 34, 7];
quickSort(a, 0, a.length - 1);
console.log(a);
