function shellSort(gaps, arr) {
  var numGaps = gaps.length, numElements = arr.length,
      g, i, temp, j;

  for (g = 0; g < numGaps; ++g) {
    for (i = gaps[g]; i < numElements; ++i) {
      temp = arr[i];
      for (j = i; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
        arr[j] = arr[j - gaps[g]];
      }
      arr[j] = temp;
    }
  }
}
