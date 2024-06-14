const getMin = [1, 5, 3, 6, 9, 9, 25, 0];
let minarr = getMin.filter(function (minNumber) {
  return minNumber <= 0;
});

console.log(minarr);
