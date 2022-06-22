//__proto__

// const obj={
//     key1:"value1",
//     key2:"value2"
// }

// // const ob2={
// //     key3:"value3"
// // }

// const obj2=Object.create(obj)
// obj2.key3="value3"
// console.log(obj2)


const obj1={
    key1:"value1",
    key2:"value2"
   }
   //const obj2={
    // key3:"value3"
   //}
   //anthor may to create empty object 
   //ecmascript documantion
   //[prototype ] and __proto same hota h 
   const obj2=Object.create(obj1)
   obj2.key3="value3"
   console.log(obj2)
   //console.log(obj1)
   console.log(obj2.__proto__)