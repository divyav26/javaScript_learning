// function returning function

// function fun1(){
//     function fun2()
//     {
//         return "hello world"
//     }
//     return fun2
// }
// const ans=fun1()
// console.log(ans)
// console.log(ans())




function myfun(){
    function fun1(){
    return "hello world"
    }
    return fun1
   }
   const ans1=myfun()
   console.log(ans1)
   console.log(ans1())



   function myfun(){
    function fun1(){
    return "hello world"
    }
    return fun1
   }
   const ans=myfun()
   console.log(ans)
   console.log(ans())