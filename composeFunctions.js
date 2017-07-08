const increment = input => input + 1,
  decrement = input => input - 1,
  double = input => input * 2,
  halve = input => input / 2;

const pipeline = [
  increment,
  decrement,
  double,
  increment,
  double,
  double,
  decrement,
  halve
];

const initialValue = 2;

const result = pipeline.reduce((acc, fn) => {
  console.log(acc);
  return fn(acc);
}, initialValue);

console.log(result);

/* Log
2                                                                            
3                                                                            
2                                                                            
4                                                                            
5                                                                            
10                                                                           
20                                                                           
19                                                                           
9.5 
*/
