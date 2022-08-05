//🔴🟡🟢 Traversing an Array : Ekta array er sob element gula ke tuch korake array tranversing bole.

var arr = [4, 2, 5, 1, 7, 9, 7]

arr[0]
arr[1]
arr[2]
arr[3]
arr[arr.length - 1]


for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    arr[i] = arr[i] + 2
    // postion = element_value + 2
}
console.log(arr)


var sum = 0
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)



for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)



for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)
  