//🔴🟡🟢 Nested Loop : 
// 1
// 1 2  
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

var n = 6

for(var i = 1; i <= n; i++){  
    // console.log(i)
    var result = ''

    for(var j = 1; j <= i ; j++){    
        // console.log(j)
        result += j + ' '
    }
    console.log(result) 
} 



//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

for(var i = 1; i <= n; i++){

    result = ''

    for(var j = 1; j <= n; j++){
        result += ' * '
    }
    console.log(result)
}



