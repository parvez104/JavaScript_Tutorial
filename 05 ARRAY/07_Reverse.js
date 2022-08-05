//🔴🟡🟢 Reverse Array : 


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(var i = 0; i < arr.length / 2; i++){

//     var temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp

// }
// console.log(arr)



var newarry = []
for(var i = arr.length - 1 ; i >= 0; i--){
    
    newarry.push(arr[i])
}
console.log(newarry)


// useing method 
// console.log(arr.reverse())


