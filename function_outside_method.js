
const userMethod={
    about:function()
    {
        return(`user name is ${this.firstname} and ${this.age} year old`)
    },
    isAge:function()
    {
        return this.age>=18
    }
   
}





function user(firstname, lastname,age, email)
{
    const user={}
    user.firstname=firstname;
    user.lastname=lastname
    user.age=age
    user.email=email
    user.about=userMethod.about
    user.isAge=userMethod.isAge
    return user
}

const user1=user("divya","mishra",21,"divya23@ggmail.com")
const user2=user("annie","mishra",18,"divya23@ggmail.com")
const user3=user("priti","mishra",20,"divya23@ggmail.com")
console.log(user1)
console.log(user2)
console.log(user3)

//user1
const about=user1.about()
console.log(about)
const isAge=user1.isAge()
console.log(isAge)

//user2
const about2=user2.about()
console.log(about2)
const isAge2=user2.isAge()
console.log(isAge2)

//user3
const about3=user3.about()
console.log(about3)
const isAge3=user3.isAge()
console.log(isAge3)
