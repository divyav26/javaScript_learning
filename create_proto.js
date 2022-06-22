// create__proto=>Object.create()




const userMethod={
    about:function()
    {
        return(`user name is ${this.firstname} and ${this.age} year old`)
    },
    isAge:function()
    {
        return this.age>=18
    },
    song:function()
    {
        return `tuna na na `
    }
}





function user(firstname, lastname,age, email)
{
    const user=Object.create(userMethod)
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
console.log(user1.song())
console.log(user2.about())
console.log(user3.isAge())
