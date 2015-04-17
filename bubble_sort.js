function bubbleSort(arr) {
  var numElements = arr.length;

  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (arr[inner] > arr[inner + 1]) {
        swap(arr, inner, inner + 1);
      }
    }
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
