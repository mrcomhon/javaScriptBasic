let car = {
  brand: "Toyota",
  model: 70,
  year: 2019,
};
console.log(car);

car.year = 2020;
console.log(car);

car.color = "red";
console.log("After adding color:", car);

delete car.color;
console.log(car);
