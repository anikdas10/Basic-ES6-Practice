const people = [
    {naem:'Meena' , age:20},
    {naem:'Rina' , age:15},
    {naem:'Suchitra' , age:22}
]

const sum = people.reduce((previous,now ) =>previous + now.age,0);
console.log(sum);