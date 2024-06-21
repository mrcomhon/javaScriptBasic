//Определить сколько раз каждый элемент встречается в массиве.
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
function countFruits(arr) {
  const object = {};
  fruits.forEach((element) => {
    if (!(element in object)) {
      object[element] = 1;
    } else {
      object[element]++;
    }
  });
  return object;
}

console.log(countFruits(fruits));
// {kiwi: 3, apple: 2, orange: 1}
