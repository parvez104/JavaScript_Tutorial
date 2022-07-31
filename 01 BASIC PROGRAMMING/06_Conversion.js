
//🟢🟡🔴 Type Conversion & Thruthy Falsy Value ::

var str = '1000'
var num = 10


//Auto Conversion : string * number = number
console.log(str * num)

//Auto Conversion : string / number = number
console.log(str / num)

//Concat (no-conversion) : string + number = string
console.log(str + num)


console.log(Number(str) + num)
console.log(Boolean(str) + num) // 1 + 10 = 11


//typeConversion : string to number
console.log(typeof str)
console.log(typeof Number(str))
console.log(typeof Number.parseInt(str))
console.log(typeof Number(Infinity))
console.log(typeof Number(null))
console.log(typeof Number(undefined))


//typeConversion : number to string

console.log(typeof num.toString())
console.log(typeof String(Infinity))




// Falsy Value :

//->  0
//->  NaN
//->  "" 
//->  null
//->  undefined 


console.log(Boolean(''))
console.log(Boolean('text'))

console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(01))

console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))


