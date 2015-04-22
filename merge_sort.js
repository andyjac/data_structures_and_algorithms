function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }

  var step = 1, size = arr.length, left, right;

  while (step < size) {
    left = 0;
    right = step;

    while (right + step <= size) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }

    if (right < size) {
      mergeArrays(arr, left, left + step, right, size);
    }

    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var leftArr = new Array(stopLeft - startLeft + 1),
      rightArr = new Array(stopRight - startRight + 1),
      k, i, m, n;

  k = startLeft;
  for (i = 0; i < leftArr.length - 1; ++i) {
    leftArr[i] = arr[k];
    ++k;
  }

  k = startRight;
  for (i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  leftArr[leftArr.length - 1] = Infinity;
  rightArr[rightArr.length - 1] = Infinity;

  m = 0, n = 0;

  for (k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
}
