function binarySearch(array, target) {
  // Write your code here.
	function binaryS(s,e){
		if(e<s) return -1;
		const m = Math.floor((e+s)/2);
		if(array[m]===target){
			return m;
		}
		else if(array[m]>target){
			return binaryS(s,m-1);
		}
		else
		{
			return binaryS(m+1,e);
		}
	}
	return binaryS(0,array.length-1);
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));