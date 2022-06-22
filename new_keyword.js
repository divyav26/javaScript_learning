//new keyword 

function users(firstName, lastname,email,age)
{
    this.firstName=firstName;
    this.lastname=lastname;
    this.email=email;
    this.age=age

}
users.prototype.about=function()
{
    return `${this.firstName} and ${this.lastname}`
}

users.prototype.isAge=function()
{
    return this.age>=18
}

const user1=new users("divya","mishra","divya23@gmail.com",23)
const user2=new users("annie","mishra","divya23@gmail.com",13)
console.log(user1)
console.log(user2)
console.log(user2.about())
console.log(user2.isAge())
// const about=about()
// console.log(about)
console.log(user1.about())
console.log(user1.isAge())





