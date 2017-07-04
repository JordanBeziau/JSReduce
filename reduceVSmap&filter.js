const bigData = [];

for (let i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('filteredMappedData');
const filteredMapped = bigData
  .filter(data => data % 2 === 0)
  .map(data => data * 2);
console.timeEnd('filteredMappedData');

console.time('reducedData');
const reduced = bigData.reduce((prev, data) => {
  if (data % 2 === 0) {
    prev.push(data * 2);
  }
  return prev;
}, []);
console.timeEnd('reducedData')

/* LOG
filteredMappedData: 153.646ms                                                
reducedData: 37.977ms
*/
