//optional changing

const users={
    // fname:"divya",
    address:{houseNumber:12345},
    gendar:"Female"
}

console.log(users.fname)// this is show error 
console.log(users.address)
console.log(users.address.houseNumber)


// this is optional chaining 
console.log(users?.fname)// it is show undefined

console.log(users?.gendar)