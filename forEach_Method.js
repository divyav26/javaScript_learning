//for each

//normal 
const numbers=[2,4,6,8]
function multby2(numbers, index)
{
    console.log("Multiply by 2 ", numbers*2)
    console.log("index is ", index)
    
}
for (let i=0; i<numbers.length; i++)
{
    multby2([i],i)

}



//forEach
function fun1(numbers, index)
{
    console.log(`number is  ${numbers} and index is ${index}`)
}
numbers.forEach(function(numbers,index)
{
    console.log(`index is ${index} and number is ${numbers}`)
})


//example forEach method

const users=[
    {user1:1, name:"divya"},
    {user1:2, name:"annie"}
]

users.forEach(function(users)
{
    console.log(users.name)
    console.log(users.user1)
})

users.forEach(function(users, index)
{
    console.log(`index is ${index} and name is  ${name} `)
})