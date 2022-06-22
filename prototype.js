// prototype 
//it is only use in function
function hello()
{
    console.log("hello")
}
hello()

//we can create own properties
hello.myString="divya"
console.log(hello.myString)

// it is not work in array 
const myarray=["value1","value2","value3"]
if(myarray.prototype){
    console.log("present prototype")
}
else{
    console.log("prototype is not present")
}



const myobj={
    fname:"divya",
    lname:"mishra"
}
if(myobj.prototype)
{
    console.log("prototype is present")
}
else{
    console.log("prototype is not present")
}