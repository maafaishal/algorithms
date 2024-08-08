function jumpSearch(arr, target) {
  const n = arr.length;
  const steps = Math.floor(Math.sqrt(n));

  let step = steps;
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export default jumpSearch;
