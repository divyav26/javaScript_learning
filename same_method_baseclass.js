//supar keyword=>it is used to call parent class constructor

class animal{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }

    about()
    {
        return `${this.name} age:${this.age}`
    }

    isCute()
    {
        return`cute ${this.name}`
    }
}
class dog extends animal{
    constructor(name,age, speed)
    {
        super(name,age)
        this.speed=speed;
    }
    run()
    {
        return`${this.name} is run ${this.speed} meters`
    }

    about()
    {
        return `${this.name} age:${this.age} year old`
    }
    
//same name ke method hoge to base class ko call karega 
}

const dog1=new dog("tommy",2,45)
console.log(dog1)
console.log(dog1.run())
console.log(dog1.about())