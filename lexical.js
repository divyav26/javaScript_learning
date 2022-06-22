// lexical

// var ko kahi bhi use kar sakte h 
// let ko function ke bahar access nhi kar sakte h 

var salary=12000
function Emp()
{
    console.log(`Employee salary is ${salary}`)
    console.log("Employee") 

    // let salary=15000
    const E1=()=>
    {
        let salary1=15000
        return `Employee1 salary is ${salary1}`
    }
    console.log(E1())

    const E2=function()
    {
        console.log("Employee2 salary is  ", salary)
    }
    E2()
}
Emp()