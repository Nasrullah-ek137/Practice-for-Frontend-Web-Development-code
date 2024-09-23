// ARRAY FUNCTION..
const student = [
    {
        name:"shanu",
        age:19,
        marks:90
    },
    {
        name:"NASSU",
        age:20,
        marks:95
    },
    {
        name:"mohd",
        age:21,
        marks:89
    }
]
console.log(student);
console.log(student[1].marks);
console.log(student.length);

// POP FUNCTION..
const naam = ["hello","shanu","bhai","heyyy"];
console.log(naam);
naam.pop();
console.log(naam);

// PUSH AND SORT FUNCTION..
const names = ["hello","shanu","bhai","heyyy"];
console.log(names);
names.push("mohd");
console.log(names);
console.log(names.sort());

// SLICE FUNCTION..
const n = ["hello","shanu","bhai","heyyy"];
console.log(n);
console.log(n.slice(2));

// REVERSE FUNCTION..
const h = ["hello","shanu","bhai","heyyy"];
console.log(h);
h.reverse();
console.log(h);

// INSERTING FUNCTION..
const num=[19,39,46,55,90];
console.log(num);
num[4]=65;
console.log(num);

// FOREACH LOOP IN JS
const number = [1,3,8,79,44];
number.forEach(function(value,index,array){
    console.log(value,index,array);
});

// MAP IN JS
const nums = [10,30,47,67];
const addnum = nums.map(function(value){
    return value*2;
});
console.log(nums);
console.log(addnum);













