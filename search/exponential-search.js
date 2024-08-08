import binarySearch from "./binary-search.js";

function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;

  let i = 1;

  while (i < arr.length && arr[i] <= target) {
    i = i * 2;
  }

  return (
    i / 2 + binarySearch(arr.slice(i / 2, Math.min(i, arr.length)), target)
  );
}

export default exponentialSearch;
