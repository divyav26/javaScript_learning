//find method

const string=["anita", "divya",  "pk"]
const string1=function(string)
{
    return string.length===5
    // return string.length===4
}
console.log(string.find(string1))


const users=[
    {userid:1, name:"motii"},
    {userid:2, name:"anita"},
    {userid:3, name:"divya"},
    {userid:4, name:"priti"}
]

const user1=users.find((myuser)=>
{
    return myuser.userid==3
})
console.log(user1)


//example

const mystring=["dog","cat","mau"]
const animal=function(mystring)
{
    return mystring.length==3
}
console.log(mystring.find(animal))




const users1=[
    {userid:1, name:"motii"},
    {userid:2, name:"anita"},
    {userid:3, name:"divya"},
    {userid:4, name:"priti"}
]

const usern=function(users1)
{
    return users1.userid==4
}
console.log(users1.find(usern))