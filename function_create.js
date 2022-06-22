//function
//crete function
// create value pair
// return

function user(firstname, lastname, age, email, adress)
{
const user={}
user.firstname=firstname;
user.lastname=lastname
user.age=age;
user.email=email;
user.adress=adress
user.about=function()
{
    return (`${this.firstname} is ${this.age} year old`)
}

user.isAge=function()
{
    return this.age>=18
}

return user
}

const user1=user("divya", "mishra",18,"divya12@gmail.com", "lokmanya")
// console.log(user1)
const isAge=user1.isAge()
console.log(isAge)
const about=user1.about()
console.log(about)
console.log(user1)
