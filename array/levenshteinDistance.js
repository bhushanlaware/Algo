function levenshteinDistance(str1 = '', str2 = '') {
    // Write your code here.
    let i = 0
    let j = 0
    let ops=0;
    while (i < str1.length && j < str2.length) {
        if (str1.charAt(i) === str2.charAt(j)) {
            i++
            j++
        } else {
            // remove? substitute?insert
            if (str1(i + 1) === str2(j + 1)) {
              //? remove or substitute
              ops++;
              j++;
            }
            else{
              //? insert
              ops++;
              j++;
            }
        }
    }
}
console.log(levenshteinDistance('abc', 'yabd'))
console.log(levenshteinDistance('algoexpert', 'algozexpert'))
console.log(levenshteinDistance('abcdefghij', '1234567890'))
console.log(levenshteinDistance('cereal ', 'saturday'))
