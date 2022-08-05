//🔴🟡🟢 Decliear Object in JavaScipt -  1. literal  2. Constractor


//📚 01 : literal

// { property / key : value }

var obj = {}
obj.x = 10
console.log(obj)

var point = {
    x: 10,
    y: 20
}

point.z = 30
console.log(point)

point.x = 100 //replace value
console.log(point)

//📚 02 :: Constractor 

var obj = Object()
obj.a = 10
console.log(obj)

var obj = new Object()
obj.b = 20
console.log(obj)
