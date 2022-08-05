
//🔴🟡🟢 Invoking a function : 


function functionName(){
    console.log('I am a function')
}

functionName() //jotobar call kora hobe toto bar output dibe
functionName()

for(i = 0; i < 10; i++){
    functionName()
}

//🔄🔄🔄

function add() {
    var a = 10
    var b = 10
    console.log(a + b)
}

function sub() {
    var a = 20
    var b = 10
    console.log(a - b)
}

add()
sub()
console.log(add) //add namma akta function ase ta bujacce
console.log(add()) // return na kore console korly undifined asbeh


