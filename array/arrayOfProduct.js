function arrayOfProducts(array = []) {
  // Write your code here.
  const mul = array.reduce((a, v) => a * v, 1);
  return array.map((number, index) => {
    if (number === 0) {
      let newMul = 1;
      for (let i = 0; i < array.length; i++) {
        if (i !== index) {
          if (array[i] === 0) return 0;
          else {
            newMul *= array[i]
          }
        }
      }
      return newMul;
    }
    else {
      return mul / number;
    }
  });
}
console.log(arrayOfProducts([1, 2, 3, 0]));