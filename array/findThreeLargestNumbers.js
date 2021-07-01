function findThreeLargestNumbers(a) {
	const maxArr = [a[0], a[1], a[2]];
	maxArr.sort((a, b) => a - b);
	console.log(maxArr);
	for (let i = 3; i < a.length; i++) {
		const e = a[i];
		if (maxArr[2] < e) {
			maxArr[0]=maxArr[1];
			maxArr[1]=maxArr[2];
			maxArr[2] = e;
			
		} else if (maxArr[1] < e) {
			maxArr[0]=maxArr[1];
			maxArr[1] = e;
		}
		else if (maxArr[0] < e) {
			maxArr[0] = e;
		}
	}
	return maxArr;
}
const output = findThreeLargestNumbers( [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
console.log(output);
