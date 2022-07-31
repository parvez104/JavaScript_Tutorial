//🔴🟡🟢 And Or Shorthand 

// Or :
var Name = ''
    // Name = 'jaman'
var fullName = Name || 'Kabir' 
console.log(fullName)


// And : 
var isOk = true
var the_Answer = isOk && 'Everything is Ok 😊'
console.log(the_Answer)


// Example : valid id cheaking : 
var id  = 49857.5656
var cheaking = Number.parseInt(id) && 'valid' || 'not valid'
console.log(cheaking)


