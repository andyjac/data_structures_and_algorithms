function insertionSort(arr) {
  var numElements = arr.length, outer, temp, inner;

  for (outer = 1; outer <= numElements - 1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner - 1] >= temp)) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
  }
}
