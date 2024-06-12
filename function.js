// Функция для проверки возраста
function checkAge(age) {
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are not an adult.");
  }
}

function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log("Number:", i);
  }
}

function countDown(start) {
  let i = start;
  while (i >= 1) {
    console.log("Number:", i);
    i--;
  }
}

function sumNumbers(a, b) {
  let sum = a + b;
  console.log("Sum of", a, "and", b, "is", sum);
}

checkAge(20);
printNumbers(10);
countDown(10);
sumNumbers(5, 3);
