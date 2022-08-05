//🔴🟡🟢 Scoping : 

//ES6 er age ES5 a scoop bolte ba code er block bolte shudu function ke bujato 

var a = 'abc'
 
if(true){
    if(true){
        console.log(a) //global variable
    }
}


function x() {
    // var a = 20 //if comment it the log of 'a' is golbal
    function y(){
        var a = 10
        console.log(a) //local
    }
    console.log(a) // local in this function
    y()
}
x()




// find divisible numebr 3 & 5 

function test (n){

    function a(){
        return n%3 === 0
    }

    function b(){
        return n%5 === 0
    }

    if(a() && b()){
        console.log( n + ' is divisible 3 and 5')
    }else{
        console.log('not a vaild number')
    }
}

test(75)
