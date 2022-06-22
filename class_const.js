//class 

class UserMethod
{
    constructor(firstname,lastname, age, email)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.email=email
    }
    


about()
{
    return `firstName: ${this.firstname} And lastName is: ${this.lastname} `
}

sign()
{
    return `this is sign method`
}

isAge()
{
    return this.age>=18
}

}

const user1=new UserMethod("divya","mishra",22, "divya34@gmail.com")
const user2=new UserMethod("annie","mishra",13, "annie34@gmail.com")
console.log(user1)
console.log(user1.about())
console.log(user1.sign())
console.log(user1.isAge())

console.log(user2)
console.log(user2.about())
console.log(user2.isAge())
