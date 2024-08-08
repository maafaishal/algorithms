import linearSearch from "./linear-search.js";
import binarySearch from "./binary-search.js";
import jumpSearch from "./jump-search.js";
import interpolationSearch from "./interpolation-search.js";
import exponentialSearch from "./exponential-search.js";
import fibonacciSearch from "./fibonacci-search.js";

const ARRAY = Array.from({ length: 50 }, (_, i) => i + 1);
const TARGET = 42;

const start = performance.now();

// Linear Search
// const result = linearSearch(ARRAY, TARGET);

// Binary Search
// const result = binarySearch(ARRAY, TARGET);

// Jump Search
// const result = jumpSearch(ARRAY, TARGET);

// Interpolation Search
// const result = interpolationSearch(ARRAY, TARGET);

// Exponential Search
// const result = exponentialSearch(ARRAY, TARGET);

// Fibonacci Search
const result = fibonacciSearch(ARRAY, TARGET);

const end = performance.now();

console.log("result", result);
console.log("execution time", end - start, "ms");
