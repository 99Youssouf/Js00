let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`New value of a: ${a}`);
console.log(`New value of b: ${b}`);