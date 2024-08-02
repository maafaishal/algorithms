import linearSearch from "./linear-search.js";
import binarySearch from "./binary-search.js";
import jumpSearch from "./jump-search.js";
import interpolationSearch from "./interpolation-search.js";

const ARRAY = [
  9, 17, 18, 22, 23, 34, 36, 49, 51, 52, 63, 68, 70, 71, 72, 74, 81, 82, 85, 88,
  95, 97, 99,
];
const TARGET = 99;

const start = performance.now();

// Linear Search
// const result = linearSearch(ARRAY, TARGET);

// Binary Search
// const result = binarySearch(ARRAY, TARGET);

// Jump Search
const result = jumpSearch(ARRAY, TARGET);

// Interpolation Search
// const result = interpolationSearch(ARRAY, TARGET);

const end = performance.now();

console.log("result", result);
console.log("execution time", end - start, "ms");
