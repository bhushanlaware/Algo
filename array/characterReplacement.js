
function charcterReplacement(string, k) {
  let l = 0;
  let max = 0;
  const freqObj = {};
  for (let r = 0; r < string.length; r++) {
    if (freqObj[string[r]]) {
      freqObj[string[r]]++;
    }
    else {
      freqObj[string[r]] = 1
    }
    while (((r - l + 1) - getFreq()) > k) {
      freqObj[string[l]]--;
      l++;
    }
    max = Math.max(r - l + 1, max);

  }
  function getFreq() {
    return Object.values(freqObj).length > 0 ? Math.max(...Object.values(freqObj)) : 0;
  }
  return max;
}

const out = charcterReplacement("AABABBA", 1);
console.log(out);