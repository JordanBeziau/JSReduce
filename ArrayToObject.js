const votes = [
  'angular',
  'vue',
  'react',
  'react',
  'ember',
  'react',
  'angular',
  'vue'
];

const initiateValue = {};

const reducer = (prev, vote) => {
  !prev[vote] ? prev[vote] = 1 : prev[vote] ++;
  return prev;
};

const result = votes.reduce(reducer, initiateValue);

console.log(result); // { angular: 2, vue: 2, react: 3, ember: 1 }
