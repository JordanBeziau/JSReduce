const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var result = data.reduce((prev, value) => {
  return prev.concat(value);
}, []);
console.log(result);

const input = [
  {
    title: 'Batman Begins',
    year: 2005,
    cast: [
      'Christian Bale',
      'Michael Caine',
      'Liam Neeson',
      'Katie Holmes',
      'Gary Oldman',
      'Cillian Murphy'
    ]
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    cast: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
      'Maggie Gyllenhal',
      'Gary Oldman',
      'Morgan Freeman'
    ]
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    cast: [
      'Christian Bale',
      'Gary Oldman',
      'Tom Hardy',
      'Joseph Gordon-Levitt',
      'Anne Hathaway',
      'Marion Cotillard',
      'Morgan Freeman',
      'Michael Caine'
    ]
  }
];

result = input.reduce((prev, value) => {
  value.cast.forEach((star) => {
    if (prev.indexOf(star) === -1) {
      prev.push(star);
    }
  });
  return prev;
}, []);
console.log(result);

/* LOG
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
                                                
[ 'Christian Bale',
  'Michael Caine',
  'Liam Neeson',
  'Katie Holmes',
  'Gary Oldman',
  'Cillian Murphy',
  'Heath Ledger',
  'Aaron Eckhart',
  'Maggie Gyllenhal',
  'Morgan Freeman',
  'Tom Hardy',
  'Joseph Gordon-Levitt',
  'Anne Hathaway',
  'Marion Cotillard' ]
*/
