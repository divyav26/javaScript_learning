

// map method


const numbers=[2,4,5,3]
const square=function(numbers)
{
    return numbers*numbers
}
console.log(numbers.map(square))



const square1=(numbers, index)=>
{
    return(`number is ${numbers*numbers} and index is ${index}`)
}

// console.log(numbers.map(square1))
const ans=numbers.map(square1)
console.log(ans)

//example

const users=[
    {name:"divya", age:21},
    {name:"annie", age:21}
]

const user1=(users)=>
{
    return users.name
}
const ans1=users.map(user1)
console.log(ans1)