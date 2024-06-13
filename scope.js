let globalView = "Global view"; //глобальная переменная

function myFunction() {
  let localView = "Local view";
  console.log(globalView); // глобальная переменная
  console.log(myFunction); // локальная переменная
}

myFunction();
console.log(globalView); //
// console.log(localView); вызовет ошибку так как находится за границей локальной переменной
