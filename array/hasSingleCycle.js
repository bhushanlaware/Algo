function getPostion(currentIndex, addIndex, length) {
    const nextIndex = (currentIndex + addIndex) % length
    return nextIndex < 0 ? nextIndex + length : nextIndex
}
function hasSingleCycle(array = []) {
    // Write your code here.
    let visitedCount = 1
    let currentIndex = getPostion(0, array[0], array.length)
    while (currentIndex !== 0 && visitedCount <= array.length) {
        visitedCount++;
        currentIndex=getPostion(currentIndex,array[currentIndex],array.length);
    }
    if(currentIndex===0 && visitedCount===array.length){
      return true;
    }
    return false;
}
console.log(hasSingleCycle([2, 3, 1, -4, 1, 2]))
