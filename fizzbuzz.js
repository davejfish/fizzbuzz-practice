const process = require('process');

function fizzbuzz(
    min, 
    max, 
    var1, 
    var2,
    word1,
    word2,
  ) {

  let text = false

  for (let i = min; i <= max; ++i) {
  
    if (i % var1 === 0) {
      process.stdout.write(`${word1}`)
      text = true
    }
    if (i % var2 === 0) {
      process.stdout.write(`${word2}`)
      text = true
    }
    if (!text) {
      process.stdout.write(`${i}`)
    }

    process.stdout.write('\n')
    text = false
  }

}

fizzbuzz(1, 100, 3, 5, 'foo', 'bar');


// function increment(num) {
//   return ++num;
// }


