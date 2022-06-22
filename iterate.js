//iterate

//two way to iterate

//1. for in loop
// object keys

// for in loop

const Emp={
    id:1,
    name:"rajesh",
    gander:"male"
}

for(Employee in Emp)
{
    console.log(Emp[Employee])
}


const paisa={
    one:1,
    200:"two handred",
    three:3
}

for(let key of Object.keys(paisa))
{
    console.log(paisa[key])
    console.log(key)
}






const fname={
    fname:"divya",
    friend:"annie",
    gander:"Female"
}

for(let key of Object.keys(fname))
{
    console.log(fname[key])
}