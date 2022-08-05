//🔴🟡🟢 Arguments and Parameters : 

function add(a, b){ // arguments

    var result = a + b
    console.log(result)

}
add(10, 20) // perameters
add(50, 50)
add(150, 50)



var arr1 = [1, 2, 3, 4, 5]
var arr2 = [2, 7, 9, 6, 2]
var arr3 = [9, 5, 3, 4, 6]
/*

var sum1 = 0

for(var i = 0; i < arr1.length; i++){
    sum1+= arr1[i]
}
console.log(sum1)


var sum2 = 0

for(var i = 0; i < arr2.length; i++){
    sum2+= arr2[i]
}
console.log(sum2)


var sum3 = 0

for(var i = 0; i < arr3.length; i++){
    sum3+= arr3[i]
}
console.log(sum3)

*/

//🎯 This is the long & repeted line of code. We can solve it to define a function ::

function arrOfSum(arr) {

    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
arrOfSum([54,75,87])
arrOfSum(arr1)
arrOfSum(arr3)
