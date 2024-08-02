const jumpSearch = (arr, target) => {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));

  let prev = 0;
  let steps = step;

  while (arr[Math.min(steps, n) - 1] < target) {
    prev = steps;
    steps += Math.floor(Math.sqrt(n));

    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(steps, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

export default jumpSearch;
