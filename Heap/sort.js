function heapSort(array) {

  createMinHeap(array);

  // o(n)
  function createMinHeap() {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(i)
    }
  }

  // O(logn)
  function heapify(i) {
    i++;
    const left = 2 * i;
    const right = 2 * i + 1;
    if (right <= array.length) {
      s = i;
      if (array[s - 1] > array[left - 1]) {
        s = left;
      }
      if (array[s - 1] > array[right - 1]) {
        s = right;
      }
      if (s !== i) {
        swap(i - 1, s - 1);
        heapify(s - 1);
      }
    }
    else if (left <= array.length) {
      const s = array[left] < array[i] ? left : i;
      if (i !== s) {
        swap(i, s);
      }
    }
    else {
      return;
    }
  }

  // O(1)
  function swap(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // O(logn)
  function deleteMinHeapTop() {
    const top = array[0];
    array[0] = array[array.length - 1];
    array.pop();
    heapify(0);
    return top;
  }

  // o(nlogn)
  function sortMinHeap() {
    const sortedArr = [];
    while (array.length) {
      sortedArr.push(deleteMinHeapTop());
    }
    return sortedArr;
  }

  return sortMinHeap();

}

heapSort([8, 5, 2, 9, 5, 6, 3]);
