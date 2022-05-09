const path = require('path');


function pathResolver(basePath, relativePath) {
  return path.resolve(basePath, relativePath);
}

function testPathResolver() {
  console.log(pathResolver('/a/b/c', '../d/e/f'));
  console.log(pathResolver('/a/b/c', '../../d/e/f'));
  console.log(pathResolver('/a/b/c', '../../../d/e/f'));
  console.log(pathResolver('/a/b/c', '../../../../d/e/f'));
  console.log(pathResolver('/src', './foundation/main.scss'));
}
testPathResolver();

console.log(path.extname('abc.w'))
