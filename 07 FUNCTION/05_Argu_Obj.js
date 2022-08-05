
//🔴🟡🟢 Arguments objects in function ::

function test(a, b, c){

    console.log(arguments)
    console.log(JSON.stringify(arguments))
    console.log(typeof a)
}
test()
test(100, 200, 300)


//Argument holo akta object jar modde array like structure akare data store kora thake. jekane loop ar maddome array ar moto kore value get kora jay. Arguments ar maddome amra without define parameters & Infinity value niya kaj korte pari..


//🎯 with Parameters ::------->

// function test(a, b, c){
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)



//🎯 without Parameter ::------->

// function test(){
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)




// function addAll(){

//     var sum = 0

//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     //console.log(sum)
// }
// addAll(23,34,34)
// addAll(23,34,34,78)
