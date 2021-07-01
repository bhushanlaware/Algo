function caesarCipherEncryptor(string, key) {
	const circle = key % 26;
	// console.log(circle);
	return string.split('').map(x=>{
		const code=`${x}`.charCodeAt(0)+circle;
		const circleCode= code > 122 ? code - 122 + 96 : code;
		return String.fromCharCode(circleCode);
	}).join('')
}
console.log(caesarCipherEncryptor('xyz', 2));