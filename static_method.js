class person{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
    fullname()
    {
        return `name:${this.name} and age:${this.age}`
    }

    mystring()
    {
        return `this is string`
    }
}
class chlid extends person
{
    static myfunc()
    {
        return `this is static function`
    }
}

const person1=new person("divya", 23)
console.log(person1)
console.log(chlid.myfunc())