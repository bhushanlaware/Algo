function longestPalindromicSubstring(string) {
  // Write your code here.
  function checkPalindrome(i, j, str) {
    if (i >= j) {
      return str;
    }
    const pal = string[i] === string[j] ? str + string[i] : str;
    const pal1 = checkPalindrome(i + 1, j, pal);
    const pal2 = checkPalindrome(i, j - 1, pal);

    return pal1.length > pal2.length ? pal1 : pal2;
  }
  const pal = checkPalindrome(0, string.length - 1, "");
  let pal2 = "";

  for (let i = pal.length - 1; i >= 0; i--) {
    pal2 += pal[i]
  }
  return pal + pal2;
}

function longestPalindromicSubstring1(string) {
  // Write your code here.
  let largetsPal = ''
  for (let i = 0; i < string.length; i++) {
    const [m1, n1] = checkPalAsCenter(i);
    const len1 = n1 - m1;

    const [m2, n2] = checkLeftAsCenter(i);
    const len2 = n2 - m2;

    const [m, n] = len1 > len2 ? [m1, n1] : [m2, n2];

    largetsPal = largetsPal.length > n - m + 1 ? largetsPal : string.substring(m, n - m);
  }

  function checkPalAsCenter(i) {
    let m = i - 1;
    let n = i + 1;
    return checkPal(m, n)

  }

  function checkLeftAsCenter(i) {
    let m = i - 1;
    let n = i;
    return checkPal(m, n)
  }

  function checkPal(m, n) {

    while (m >= 0 && n < string.length && string[m] === string[n]) {
      m--;
      n++;
    }

    if (m < 0) {
      return [0, n]
    }
    else if (n >= string.length) {
      return [m, string.length]
    }

    return [m, n];
  }
  return largetsPal;
}

// Do not edit the line below.

console.log(longestPalindromicSubstring1('abaxyzzyxf'))

