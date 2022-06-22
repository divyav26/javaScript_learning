// callback function


function fun2()
{
    let name="divya"
    console.log("This is function2")
    console.log(name)
}


function fun1(callback)
{
    console.log("This is function 1")
    callback(name)

}
fun1(fun2)


//example

function Add2()
{
    let a=5
    let b=5
    console.log("This is Add2")
    console.log("Add2 is ", a+b)
}
function Add1(callback)
{
    console.log("This is Add1")
    callback()
    
}
Add1(Add2)