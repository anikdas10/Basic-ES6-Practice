const numbers = [12 , 22 , 54 , 10 , 4 , 73];
const total = numbers.reduce((previous, current) =>
    previous + current , 0) 
console.log(total);


const sum = numbers.reduce((previous , current) => previous + current , 0);
console.log(sum);