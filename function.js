
//normal function

function hello()
{
    console.log("this is function")
}

hello()


function sum1()
{
    let num=4
    if(num%2===0)
    {
        console.log("even")
    }
    else
    {
        console.log("odd")
    }
}
sum1()


function sum(num)
{
    
    if(num%2===0)
    {
        return ("even")
    }
    else
    {
        return ("odd")
    }
}
sum(7)


// Expression function

const hello1=function()
{
    console.log("hii")
}
hello1()


//arrow function

const isEven=(num)=>
{
    if(num%2==0)
    {
        return "Even number"
    } 
    return "odd"
}
console.log(isEven(4))


//arrow function

const myfunc=()=> "hello mya arrow function"
 
console.log(myfunc())