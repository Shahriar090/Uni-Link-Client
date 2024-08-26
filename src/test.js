const arr = [1, 2, 3, 4, 5];

const sumArr = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(sumArr);
