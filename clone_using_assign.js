//clone using Object  assign

const obj={
    key1:"value1",
    key2:"value2"
}

// const obj2=obj
// const obj2={...obj}//clone kiya obj2 me obj ko 


//using Objet assign we can copy obj in obj2
const obj2=Object.assign({}, obj)
obj2.key3="value3"

console.log(obj)
console.log(obj2)