//inheritance

//extends keyword

class animal{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    about()
    {
        return `animal name is ${this.name}`
    }

    isCute()
    {
        return `cute`
    }
    isAge()
    {
        return this.age>=1
    }
}
class Dog extends animal
{

}
const dog1=new Dog("tommy", 2)
console.log(dog1.about())
console.log(dog1.isCute())
console.log(dog1.isAge())

