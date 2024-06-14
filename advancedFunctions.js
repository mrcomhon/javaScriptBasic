// высшие функции
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result1 = applyOperation(5, 3, (x, y) => x + y);
console.log(result1);

const result2 = applyOperation(5, 3, (x, y) => x - y);
console.log(result2);

// стрелочные функции
const add = (a, b) => a + b;
const negativeAdd = (a, b) => a - b;

console.log(add(10, 5));
console.log(negativeAdd(10, 5));
// дополниетльные методы массивов
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log(num));

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const even1 = numbers.filter((num) => num % 3 === 0);
console.log(even1);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
