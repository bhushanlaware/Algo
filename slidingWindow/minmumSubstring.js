function minmumWindowSubstring(s, t) {
  const haveMap = {};
  const needMap = {};
  let need = t.length;
  let have = 0;
  for (let c of t) {
    needMap[c] = needMap[c] ? needMap[c] + 1 : 1;
  }
  let l = 0
  let minLength = Infinity;
  let [startI, endI] = [-1, -1];

  for (let r = 0; r < s.length; r++) {
    console.log(l, r, s.substring(l, r + 1));
    if (needMap[s[r]]) {
      haveMap[s[r]] = haveMap[s[r]] ? haveMap[s[r]] + 1 : 1;
      if (haveMap[s[r]] <= needMap[s[r]]) {
        have++;
      }
    }
    while (need === have) {
      console.log(l, r, s.substring(l, r + 1));
      if (r - l + 1 < minLength) {
        minLength = r - l + 1;
        [startI, endI] = [l, r]
      }
      if (needMap[s[l]]) {
        haveMap[s[l]]--;
        if (haveMap[s[l]] < needMap[s[l]]) {
          have--;
        }
      }
      l++;
    }

  }
  return minLength === Infinity ? "" : s.substring(startI, endI + 1);
}
const a = "aa";
const b = "aa";
console.log(minmumWindowSubstring(a, b));