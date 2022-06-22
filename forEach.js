// forEach method

const users=[
    {EmpId:1, fname:"divya", age:21},
    {EmpId:2, fname:"annie", age:22 },
    {EmpId:3, fname:"laxmi", age:16}
]

users.forEach(function(users, index)
{
    console.log(`Employee index is ${index}`)
    console.log(`Employee details is ${fname} `)
})