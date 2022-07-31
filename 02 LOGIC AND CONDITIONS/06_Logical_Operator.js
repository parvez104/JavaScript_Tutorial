//🔴🟡🟢 Logical Operator : && || !

/*
A && B 
👉 true  && ture  = true 
👉 true  && false = false
👉 false && ture  = false 
👉 false && false = false

A || B 
👉 true  || ture  = true
👉 true  || false = true
👉 false || ture  = true 
👉 false || false = false
*/


var a = 30
var b = 30

var c = 50
var d = 40


//👉logical - &&

if (a > b && c > d) {
    console.log('A is greter than B and C is grater than D')

} else {
    console.log('At least one condition is false')
}



//👉logical - || 

if (a > b || c > d) {
    console.log('A is greter than B or C is grater than D')

} else {
    console.log('At least one condition is false')
}



//👉logical - ! (not) 

if (!(a > b && c > d)) {
    console.log('A is greter than B and C is grater than D')

} else {
    console.log('At least one condition is false')
}


// more...
var cheak = (a > b)
// cheak = !(a > b)
// cheak = !!(a > b)
console.log(cheak)



// find the max number of 3 value
var a = 320
var b = 320
var c = 34

if (a > b && a > c) {

    console.log("a is grater")
}
else if (b > a && b > c) {

    console.log("b is grater")
}
else if (c > a && c > b) {

    console.log("c is grater")

} else {
    console.log("two or three number are equal")
}
