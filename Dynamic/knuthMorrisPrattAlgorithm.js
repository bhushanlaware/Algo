function knuthMorrisPrattAlgorithm(string, substring) {
  const pattern = getSubstringPattern(substring);
  console.log(pattern)
  let i = 0;
  let j = 0;

  while (i < string.length) {
    if (string[i] === substring[j]) {
      if (j === substring.length - 1) return true;
      i++;
      j++;
    }
    else if (j > 0) {
      j = pattern[j - 1] + 1;
    }
    else {
      i++;
    }
  }

  return false;
}

// O(n)
function getSubstringPattern(substring) {
  let j = 0;
  let i = 1;
  const pattern = new Array(substring.length).fill(-1);

  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      pattern[i] = j;
      i++;
      j++;
    }
    else if (j > 0) {
      j = pattern[j - 1] + 1;
    }
    else {
      i++;
    }
  }
  return pattern;
}

const r = knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefaedaefaefa");
console.log(r);