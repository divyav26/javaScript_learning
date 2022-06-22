//set ka use unique value ke liye karte h 

const number=new Set()
// number.add(4)
number.add(3)
number.add(2)
number.add(5)
// number.add(4)
console.log(number)
console.log(Number.length)//this method show wrong length

// HOW TO CHECK 4 is present or not in set

if(number.has(4))
{
    console.log("4 is present")
}

else{
    console.log("4 is not present")
}

//how to check length
const myarray=[1,4,5,69,0,12,3]
const setElements=new Set(myarray)
console.log(setElements)

let length=0
for(let Element of setElements)
{
    length++
}
console.log(length)
