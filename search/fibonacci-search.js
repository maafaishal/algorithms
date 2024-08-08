function fibonacciSearch(arr, target) {
  const n = arr.length;
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;

  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);

    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 -= fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }

  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}

export default fibonacciSearch;
