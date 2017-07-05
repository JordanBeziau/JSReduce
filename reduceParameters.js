var reducer = (accumulator, value) => {
  return accumulator + value;
};

const data = [1, 2, 3, 4, 2, 3, 5, 9];
const sum = data.reduce(reducer, 0);
console.log(sum); // 29
console.log(sum / data.length); // 3.625

reducer = (accumulator, value, index, array) => {
  let intermediateValue = accumulator + value;
  if (index === array.length - 1) {
    return intermediateValue / array.length;
  }
  return intermediateValue;
};

const average = data.reduce(reducer, 0);
console.log(average); // 3.625
