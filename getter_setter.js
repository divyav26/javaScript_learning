//getter and setter

class person{
    constructor(fname,lname,age)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age
    }

 get fullname()
    {
        return `first name is ${this.fname}  lastname is ${this.lname}`
    }

    about(){
        return `this is a function`
    }

    set fullname(fullname)
    {
        const [fname, lname]=fullname.split(" ")
        this.fname=fname;
        this.lname=lname;
    }
}

const person1=new person("Divya", "Mishra", 21)
console.log(person1)
console.log(person1.about())
// person1.fullname("annie", "mishra")
person1.fullname="annie mishra"//set change the fname and lname
console.log(person1)
// console.log(person1.fullname())



