'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
          if ( i != j ) {
              sum += arr[j];
          }
      }
      if (sum < min) min = sum;
      if (sum > max) max = sum;
  }
  console.log(min, max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
