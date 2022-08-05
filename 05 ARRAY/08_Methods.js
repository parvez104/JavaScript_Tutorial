//🔴🟡🟢 Array Methods : 

var arr = [4, 5, 7, 8]

//⭕join() : converting string with separetor
console.log(arr.join(''))
console.log(arr.join(' 🔔 '))


//⭕fill() : fill one same value in array
console.log(arr.fill(0))
console.log(arr.fill(true))


//⭕concat() : marage array and return new array 
var arr2 = [9, 7, 4]
var arr3 = arr.concat(arr2)
console.log(arr3) 


//⭕isArray() : Is it array or not ? 
console.log(Array.isArray(arr))


//⭕from() : copying a array to another array :

var newArray = Array.from(arr)
console.log(newArray)

// from(), way we use it ? 

var a = [1, 2]
var b = a

b[0] = 100
console.log(a) // change orginal array
//cause of that, its pass by reference.

