//🔴🟡🟢 String : "text" 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Write a string 03 way in js - 
var str = 'String'
var str2 = "String"
var str3 = `String`


// C language - ['S','t','r','i','n','g'] onekgula charcter ar array ke string bole.  


//🔴🟡🟢 Literal vs Constructor :

var str = 'Something...' //👉Stirng Litarel 
var str2 = String('Something') //👉String Constactor


//🧏‍♂️ Diffrent way to convert String : 

var n = 10
console.log(typeof n)

// way_01 : 
var n_to_string = n + ''
console.log(typeof n_to_string)

// way_02 : 
var n_to_string = n.toString()
console.log(typeof n_to_string)

// way_03 : 
var n_to_string = String(n)
console.log(typeof n_to_string)

