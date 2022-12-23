function searchNumber(arr, n, k) {
  const arry = [];

  for (i = 0; i < arr.length; i++) {
    arry.push(arr[i]);
  }

  return arry.includes(k) ? 1 : -1;
}

console.log(searchNumber([1, 3, 4, 5, 8], 5, 2));
