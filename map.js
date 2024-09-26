const numbers = [4,5,6,87,33,10];

// function doubleit(number){
//     return number*2;
// }

const double = x => x*2;
const result = numbers.map(double);
// console.log(result);
// const doubled = [];
const output = numbers.map(x=>x*2);
console.log(output);

// for (let number of numbers){
//     number=number*2;
//     doubled.push(number);
// }
// console.log(doubled);
