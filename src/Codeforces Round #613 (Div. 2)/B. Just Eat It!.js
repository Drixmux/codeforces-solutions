'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });
  
  main();    
});

function readline() {
  return inputString[currentLine++];
}

function print(item) {
  console.log(item);
}

function maxSubArraySum(array_of_numbers, init_value, array_size) {
  var max_so_far = Number.MIN_SAFE_INTEGER;
  var max_ending_here = 0;
  var start_index = 0;
  var end_index = 0;
  var start_tmp = 0; 

  for (var i = init_value; i < array_size; i++) { 
    max_ending_here += array_of_numbers[i];

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
      start_index = start_tmp;
      end_index = i;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
      start_tmp = i + 1;
    }
  }
  return { max_so_far, start_index, end_index }; 
}

function main() {
  const test_cases = parseInt(readline(), 10);
  for(var i = 0; i < test_cases; i++) {
    var cupcakes_count = parseInt(readline(), 10);
    var cupcakes_taste = readline().trim().split(' ').map(string => parseInt(string, 10));
    
    var total_taste = cupcakes_taste.reduce((a, b) => a + b, 0);

    var result_begin = maxSubArraySum(cupcakes_taste, 0, cupcakes_count - 1);
    var result_end = maxSubArraySum(cupcakes_taste, 1, cupcakes_count);
    
    if (total_taste > Math.max(result_begin.max_so_far, result_end.max_so_far)) {
      print('YES');
    } else {
      print('NO');
    }
  }
}

// main();