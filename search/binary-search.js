const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // console.log("arr[mid]", arr[mid]);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left++;
      continue;
    }

    right--;
  }

  return -1;
};

export default binarySearch;
