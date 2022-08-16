function lengthOfLongestSubstring(string) {
  let max = 0;
  let l = 0;
  let set = new Set();
  for (const c of string) {
    while (set.has(c)) {
      set.delete(string[l]);
      l++;
    }
    set.add(c);
    max = Math.max(set.size, max);
  }
  return max;
}

lengthOfLongestSubstring('pwwkew');