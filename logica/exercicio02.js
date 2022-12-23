function binarysearch(arr, n, k) {
  return arr.findIndex((item) => item === k);
}

console.log(binarysearch([11, 22, 33, 44, 55], 5, 445));
