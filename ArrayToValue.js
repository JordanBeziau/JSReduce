const array = [];

const reducer = (accumulator, item) => accumulator + item,
  initialValue = 0;

var log = array.reduce(reducer, initialValue);
console.log(log); // 0

array.push(2, 6, 13, 1);
log = array.reduce(reducer, initialValue);
console.log(log); // 22
