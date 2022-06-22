// default parameters



// function AddTwo(a,b)
// {
//  if(b===undefined)
//  {
//  b=7 
//  }
//  return a+b
// }
// const ans=AddTwo(4)
// console.log(ans)
// //second way
// function TwoNum(a, b=8)
// {
//  return a+b
// }
// console.log(TwoNum(4))


// first way
function Add(a, b)
{
    if(b===undefined)
    {
        b=7  // default parameters
    }
    return a+b
}
console.log(Add(4))



// second way
function sub(a, b=5)//b=5 is  default parameters
{
    return a-b
}
console.log(sub(10))