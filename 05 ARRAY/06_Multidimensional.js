//🔴🟡🟢 Multidimensional Array : [ [], [], [] ]

// For example : Ekta array er vetore student's er diffrent subjects er marks list.
/*
1D = [ ]

2D = [
    [],
    [],
    []
]

3D = [
    [
        [],
        []
    ],
    [
        [],
        []
    ],
    [
        [],
        []
    ]
]
*/


var arr = [
    [65, 96, 78, 87],
    [90, 85, 63, 83],
    [71, 50, 71, 56]
]

console.log(arr.length);
console.log(arr[0].length);


console.log(arr[0][0])
console.log(arr[1][3])
console.log(arr[2][1])


// traversing : 

for (var i = 0; i < arr.length; i++) {

    console.log(i)

    for (var j = 0; j < arr[i].length; j++) {

        console.log(i + ':' + arr[i][j])
    }
}



//Sum of whole array elements : 

var sum = 0

for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j]
    }
}
console.log(sum)



//Sum of first index array elements : 

var arr = [
    [65, 96, 78, 87],
    [90, 85, 63, 83],
    [71, 50, 71, 56]
]

var sum_el = 0
var index_No = 1
var index_No_Sum = 0

for (var i = 0; i < arr.length; i++) {

    if (i == index_No) {
        for (var j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 2 === 1) {

                console.log(arr[i][j])
                index_No_Sum += arr[i][j]

            }
            sum_el += arr[i][j]
        }
    }
}
console.log(sum_el)
console.log(index_No_Sum)

