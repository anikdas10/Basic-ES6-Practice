
const odd = [1,3,5,7,9];

const even = odd.map( x => x + 1);
console.log(even);

// using for loop 
let oddArray = [];
for(let evens of odd){
    evens  = evens + 1;
    oddArray.push(evens)
}
console.log(oddArray);