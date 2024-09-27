const instructor = [
    {name:'Nodi' , age:28 , position:"Senior"},
    {name:'akil' , age:26 , position:"Senior"},
    {name:'Shobuj' , age:30 , position:"Senior"},
    {name:'Anik' , age:22 , position:"Junior"}
]

const seniorInstructor = instructor.filter(x => x.position =="Senior");
console.log(seniorInstructor); 