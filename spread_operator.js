// array spread operator

const a1=[1,3,5,7,9]
const a2=[99,2,3,5,1]
const newarray={...a1, ...a2}
console.log(newarray)


// spread oprator in object


// const obj1={
//     key1:"value1",
//     key2:"value2",
//     key3:"value45"
//    }
//    const obj2={
//     key1:"value1 is mst",
//     key4:"value2",
//     key5:"value45"
//    }
//    let key={...obj1, ...obj2}
//    let var1=[..."abcd"]
//    console.log(var1)
//    console.log(key)
   


const obj1={
    k1:"valu1",
    k2:"value2"
}

const obj2={
    name:"divya",
    lname:"mishra"
}

let newobj={...obj1, ...obj2}
console.log(newobj)

let var1={..."divya"}
console.log(var1)



