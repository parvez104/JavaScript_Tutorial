
//🔴🟡🟢 return keyword in function :: 

var arr1 = [1, 2, 3, 4, 5]
var arr2 = [2, 7, 9, 6, 2]
var arr3 = [9, 5, 3, 4, 6]

function arrOfSum(arr) {
    var sum = 0

    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    //console.log(sum)
    return sum
}
console.log(arrOfSum(arr1))
console.log(arrOfSum(arr2))
console.log(arrOfSum(arr3))



function addAll() {

    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum

}
var result = addAll(10,200,3000,4000)
console.log(result)




function person(name, email){

    return {
        name  : name,
        email : email
    }
}
var person1 = person('Jaman', 'jamal2013@gmail.com')
console.log(person1)




function person2(array){

    return [array, 45,67]
}
var person1 = person2(34)
console.log(person1)





function person3(name){

    return function hi (){
        return `Hello, ${name}`
    }
}
var person1 = person3("Kbair")()
console.log(person1)
