
//🔴🟡🟢 Object Methods  in JavaScipt ::

var obj = {
    x: 20, 
    y: 40,
    z: 60
}

//return keys as a array : 
console.log(Object.keys(obj))

//return values as a array : 
console.log(Object.values(obj))

//return 2D array :
console.log(Object.entries(obj));


//📚Copy / Clone Object ::

//with change original objects -->

// var obj2 = obj
// obj2.y = 'Updated'

// console.log(obj)
// console.log(obj2)

//assign() :: without change orginal object -->

var obj2 = Object.assign({}, obj)

console.log(obj)

obj2.x = 'Updated'
console.log(obj2)

