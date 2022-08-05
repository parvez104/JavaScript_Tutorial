//🔴🟡🟢 String Length :

var str = 'Some String'
var str2 = str.charAt(34) //index er baire value dile program ekta empty string return kore.

// probelm : find the lenght/index of a string ?

var length = 0

while (true) {
    if (str.charAt(length) === '') {
        break
    } else {
        length++
    }
}
console.log(length)


//Use Methods : 
console.log(str.length)
console.log('sfhdjkhhs'.length)


