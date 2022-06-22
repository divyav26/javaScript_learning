//innerfunction

const myfun1=function()
{
    console.log("my function")
    const sum=(a,b)=>
    {
        return a+b
    }

    const mult=(b,c)=>
    {
        return b*c
    }
    console.log(sum(3,5))
    console.log(mult(2,5))

}

myfun1()