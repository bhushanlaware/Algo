// @ts-check
function generateDocument(characters = '', document = '') {
  // Write your code here.
  const charMap = new Map();
  const docMap = new Map();
  for (let i = 0; i < characters.length; i++) {
    const char = characters.charAt(i);
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    }
    else {
      charMap.set(char,1);
    }
  }
  for (let i = 0; i < document.length; i++) {
    const char = document.charAt(i);
    if (docMap.has(char)) {
      docMap.set(char, docMap.get(char) + 1);
    }
    else {
      docMap.set(char, 1);
    }
  }
  for (const [key, value] of [...docMap]) {
    if (!charMap.has(key) || charMap.get(key) < value) {
      return false;
    }
  }

  return true;
}

const c = 'helloworld ';
const d = "hello wOrld";
console.log(generateDocument(c, d));
