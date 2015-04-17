function selectionSort(arr) {
  var numElements = arr.length, outer, min, inner, temp;

  for (outer = 0; outer < numElements - 1; ++outer) {
    min = outer;
    for (inner = outer + 1; inner < numElements - 1; ++inner) {
      if (arr[inner] < arr[min]) {
        console.log(arr[inner] + ' < ' + arr[min]);
        min = inner;
      }
    }
    swap(arr, outer, min);
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;
}
