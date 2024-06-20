// ф-я которая принимает два числа и возвращает их произведение.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

// метод массивыа map*2
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((num) => num * 2);
console.log(doubled);

// обьекты
let person = {
  name: "John",
  age: 25,
};
person.city = "New York";
console.log(person);

// highorder function
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(5, 3, (x, y) => x + y));
console.log(applyOperation(5, 3, (x, y) => x - y));
