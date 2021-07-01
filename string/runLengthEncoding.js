function runLengthEncoding(s = '') {
	// Write your code here.
	let count = 1;
	let outStr = '';
	// console.log(s);
	for (let i = 0; i < s.length; i++) {
		const currentChar = s.charAt(i);
		const nextChar = s.charAt(i + 1);
		if (currentChar !== nextChar) {
			outStr += `${count}${currentChar}`
			count = 1;
		}
		else if (i === s.length - 1) {
			outStr += `${count + 1}${currentChar}`
		}
		else {
			count++;
			if (count === 10) {
				count = 1;
				outStr += `${9}${currentChar}`
			}
		}
	}
	return outStr;
}
const string = 'AAAAAAAAAAAAABBCCCCDD';
console.log(runLengthEncoding(string));