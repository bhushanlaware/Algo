function isMonotonic(a) {
  // Write your code here
  const l = a.length;
  if (a[0] < a[l-1]) {
    for (let i = 0; i < l - 1; i++) {
      if (a[i] > a[i + 1]) {
        return false;
      }
    }
    return true;
  }
  else if (a[0] > a[l-1]) {
    for (let i = 0; i < l - 1; i++) {
      if (a[i] < a[i + 1]) {
        return false;
      }
    }
    return true;
  }
  else {
    for (let i = 0; i < l; i++) {
      if (a[i] !== a[0]) {
        return false;
      }
    }
    return true;
  }
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));