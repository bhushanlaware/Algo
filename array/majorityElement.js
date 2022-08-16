function majorityElements(arr) {
  const countMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (countMap.has(`${arr[i]}`)) {
      countMap.set(`${arr[i]}`, countMap.get(`${arr[i]}`) + 1);
    } else {
      countMap.set(`${arr[i]}`, 1);
    }
  }
  //   console.log(countMap);
  let majElement;

  countMap.forEach((count, number) => {
    console.log(count, number);
    if (count > Math.floor(arr.length / 2)) {
      majElement = number;
    }
  });
  return majElement;
}
console.log(majorityElements([1, 1, 2]))

