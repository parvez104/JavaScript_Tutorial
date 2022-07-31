//🔴🟡🟢 else if - condition : more than two condition 

// if(condition){
//     code 
// }else if(condition){
//     code 
// }else{
//     code 
// }


var a = 20
var b = 40


if (a > b) {
    console.log(a + ' is Greater then ' + b)

} else if (a < b) {
    console.log(b + ' is Greater then ' + a)

} else {
    console.log('They Both are Same')
}



//🐳 Exersise : cheak even and odd number ?

var n = 0

if (n === 0) {
    console.log(n + ' 👉 is Zero 😂 ')

} else if (n % 2 === 0) {
    console.log(n + ' 👉 is even number');

} else {
    console.log(n + ' 👉 is odd number');
}



//🐳 Exersise : Today Cheaking ?

var date = new Date()

// 0 - Sunday, 1 - Monday, 2 - Tuesday 

var today = date.getDay()

if (today === 0) {
    console.log('To Day is Sunday')

} else if (today === 1) {
    console.log('To Day is Monday')

} else if (today === 2) {
    console.log('To Day is Thuesday')

} else if (today === 3) {
    console.log('To Day is Wednesday')

} else if (today === 4) {
    console.log('To Day is Thursday')

} else if (today === 5) {
    console.log('To Day is Friday')

} else {
    console.log('To Day is Saturday')
}

