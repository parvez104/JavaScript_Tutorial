//🔴🟡🟢 String Comparison: 

//🎯 Part 01 : Lexicographic System

var a = 'abc'
var b = 'bcd'
console.log(a === b)  //false
console.log(a > b)    //false
console.log(a < b)    //true

//📚Note: JavaScipt uses Lexicographic System to Compare String. The Order are - 1_smaller a - z big > 2_smaller A-Z big

console.log('z' > 'Z')
console.log('Z' > 'z')

console.log('A' < 'Z' || 'a' < 'z')

a = 'abc'
b = 'acd'
console.log(a < b) //true - compare 2nd charcter

a = 'aaaaaz'
b = 'aaaaaZ'
console.log(a > b) //compare last charcter


//🎯 Part 02 : Coverthing String As a Number

console.log('001' == 1)
console.log('001' == '001')
console.log('Hi' == 'Hi')
console.log('Hi' > 'HI')

// concate 👉 string + number = string
// compare 👉 <, >, ==, ===, >=  convart number , then compare

