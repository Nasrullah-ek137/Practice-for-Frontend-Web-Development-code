// Constructor concept...
/* class student
{
    constructor(firstname,lastname)
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }
    display()
    {
        return this.firstname+" "+ this.lastname;
    }
}
const s1=new student("shanu","bhai");
const s2=new student("shanu","boii");
const name1=s1.display();
const name2=s2.display();
console.log(name1,name2); */

// Inheritance concept...
class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    displayper()
    {
        console.log("person name:",this.name,"and age:",this.age);
    }
    persondemo()
    {
        console.log('person class');
    }
}

class student extends person
{
    constructor(name,age)
    {
        super(name,age);
        this.name=name;
        this.age=age;
    }
    displaystud()
    {
        console.log("student name:",this.name,"and age:",this.age);
    }
    studentdem()
    {
        console.log('student class');

    }
}
const s1=new student("shanu",29);
s1.displayper();
s1.displaystud();