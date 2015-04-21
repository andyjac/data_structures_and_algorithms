function dynamicShellSort(arr) {
  var N = arr.length, h = 1, i, j;

  while (h < N / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (i = h; i < N; i++) {
      for (j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        swap(arr, j, j - h);
      }
    }
    h = (h - 1) / 3;
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
