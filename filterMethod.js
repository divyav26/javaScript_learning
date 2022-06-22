//filter Method


const number=[2,4,6,5,7,8]
const isEven=function(number)
{
    return number%2==0
}
const ans =number.filter(isEven)
console.log(ans)




const users=[
    {name:"motii", age:21, lname:"mishra"},
    {name:"divya", age:21, lname:"mishra"},
    {name:"laxmi", age:16, lname:"mishra"}
]

const isAge=function(users)
{
    return users.age===21
}
const user1=users.filter(isAge)
console.log(user1)