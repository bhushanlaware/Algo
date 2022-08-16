function groupAngaram(strings) {
  const strMap = new Map();
  for (const str of strings) {
    const sortedStr = str.split('').sort().join('');
    if (strMap.has(sortedStr)) {
      strMap.set(sortedStr, [...strMap.get(sortedStr), str]);
    } else {
      strMap.set(sortedStr, [str]);
    }
  }
  const result = []
  console.log(strMap);
  for ([key, value] of strMap) {
    result.push(value);
  }
  return result;
}

console.log(groupAngaram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));