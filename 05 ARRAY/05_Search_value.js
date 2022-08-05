//🔴🟡🟢 Search Value in array :

var arr = [23, 4, 5, 8, 10, 45, 7, 12, 11, 88, 33, 77]

var find = 45

var is_found = false

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === find) {
        console.log('Data found at index - ' + i)
        is_found = true
        break
    }
}

if (!is_found) {
    console.log('Data is not found')
}
