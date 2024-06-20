// Замыкания
function createMupltiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMupltiplier(2);
console.log(double(5));

// reduce
function sumArray(arr) {
  return arr.reduce((total, arr) => total + arr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
