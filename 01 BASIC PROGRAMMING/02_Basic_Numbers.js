
//🟢🟡🔴 Basic number data type in js : integer and flote number are same in js. int(54 bit) flote(64 bit)

var n = 1452
var f = 3.34


var nn = Number("45") // converting number data type 
console.log(typeof nn)


var converting_int_num = Number.parseInt(23.34)
console.log(converting_int_num)


var converting_flote_num = Number.parseFloat(23.34)
console.log(converting_flote_num)


//⭕How many mix max number in javaScript 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);



//⭕ NaN - not a number
var NuN_Number = 'abc' * 34
NuN_Number = 34 * 'xyz'
NuN_Number = 34 * 'xyz' * 33
NuN_Number = 34 * 'xyz' * 33
NuN_Number = 34 / 'xyz'
NuN_Number = 34 % 'xyz'
NuN_Number = 34 - 'xyz'
NuN_Number = 34 + 'xyz' //concate
console.log(NuN_Number)



//⭕ Infinity : we know that 👉 anyNumber / 0 = infinity 
var infinityNum = 12 / 0
infinityNum = 0 / 0 // NaN
infinityNum = 1 / 0
infinityNum = 0 / 246 // 0
infinityNum = 34 / 0 / 33
infinityNum = 0.1 / 0.1 + 33
infinityNum = 0.1 + 33
infinityNum = 0.1 - 33
console.log(infinityNum)



//⭕ Hex number - 0x / 0X
var hex_number = 0xA334
hex_number = 0xA
hex_number = 0xB
hex_number = 0xC
hex_number = 0xD
hex_number = 0xE4389
console.log(hex_number)



//⭕ Octal number - 0
var oct_number = 034
oct_number = 010
oct_number = 001
oct_number = 0100
console.log(oct_number)

