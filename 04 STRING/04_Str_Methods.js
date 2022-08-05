
//🔴🟡🟢 String Methods :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var a = 'I am'
var b = 'Mehedi Hasan Parvez'


//⭕concat() - add more than two string

var c = a.concat(' ', b)
console.log(c)

var d = a.concat(a, b, c)
console.log(d)


//⭕substr(), substring() 
var sub = b.substring(6)
sub = b.substr(6, 6) // 2nd value number of charcter
console.log(sub)


//⭕charAt() - find charecter with index use
console.log(b.charAt(5))


//⭕charCodeAt() - ASCII code of charcter
console.log(b.charCodeAt(5))


//⭕startsWith() & endsWith() - return true/false
console.log(a.startsWith('I am'))
console.log(a.startsWith('i am')) //case sencitive
console.log(b.endsWith('Parvez'))


//⭕ toUpperCase() , toLowerCase()
console.log('jaman'.toUpperCase())
console.log(b.toUpperCase())
console.log(b.toLowerCase())


//⭕trim(), trimStart(), trimEnd() - remove extra whitespace
console.log('       hi   ')
console.log('       hi   '.trim())


//⭕split() - convert string as a array 
console.log(b.split(' '))

var c = b.split(' ').reverse().join(' ')
console.log(c.length);
console.log(c);
