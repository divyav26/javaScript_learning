//window object

console.log(this)// window object deta h 
console.log(window)

"use strict";
function func()
{
    console.log(this)
}
func()