function minWindow(s, t) {
  let l = 0;
  const charWeWant = new Set(t.split(''));
  let yetToFindSet = new Set(t.split(''));
  let subStr = [];
  let minStr = s;

  while (!charWeWant.has(s[l])) {
    l++;
  }
  for (r = 0; r < s.length; r++) {
    if (yetToFindSet.size === 0) {

      if (subStr.length < minStr.length) {
        minStr = subStr.join('');
      }
      yetToFindSet.add(s[l]);
      subStr.shift();
      l++;
      while (!charWeWant.has(s[l])) {
        l++;
        subStr.shift();
      }
    }
    yetToFindSet.delete(s[r]);
    subStr.push(s[r]);
  }
  return minStr;
}

const out = minWindow("ADOBECODEBANC", "ABC");
console.log(out);
