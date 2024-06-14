const array = [
  { name: "Tesla", year: 2020, model: "Y" },
  { name: "Toyota", year: 2019, model: "75" },
  { name: "Ferrari", year: 2021, model: "Sport" },
];
function getCar(arr, key, value) {
  return arr.find(function (item) {
    return item[key] === value;
  });
}
console.log(getCar(array, "name", "Tesla"));
console.log(getCar(array, "year", 2021));
console.log(getCar(array, "model", "75"));
