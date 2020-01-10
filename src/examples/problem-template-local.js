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

function main() {
  const couter = parseInt(readline(), 10);
  const items = readline().trim().split(' ').map(string => parseInt(string, 10));
  console.log(couter);
  console.log(items);
}