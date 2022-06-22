//method

function personInfo()
{
    console.log(`this is name  ${this.name} and age is ${this.age}`)
}

const person1={
    name:"divya",
    age:21,
    about:personInfo
}

const person2={
    name:"annie",
    age:21,
    about:personInfo
}

const person3={
    name:"priti",
    age:21,
    about:personInfo
}
console.log(person1.name)
person1.about()
person2.about()
// console.log(person3.about())//undefined dega
person3.about()