
//normal
const person={
    fname:"divya",
    age:23,
    gendar:"Female"
}

console.log(person.fname)
console.log(person["fname"])//we can also write this way to access the value
console.log(person.age)

//Maps
//set is set the value

const newperson=new Map()
newperson.set('empid', 1),
newperson.set('Ename', 'divya'),
newperson.set('salary', 23000)
console.log(newperson)

// get value

console.log(newperson.emid)//aise nhi access kar sakte h 
console.log(newperson.get("empid"))
console.log(newperson.get("Ename"))
console.log(newperson.get("salary"))
console.log(newperson.keys())// it return only keys


// keys find using for loop
for(let key of newperson.keys())
{
    console.log(key)// 

}


//key and value pairs
for(let [key, value] of newperson)
{
    console.log(key , value)
}


