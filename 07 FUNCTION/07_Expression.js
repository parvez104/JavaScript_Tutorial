
//🔴🟡🟢 Expression : function ke kono variable er modde rakle thake bola hoy expression

var addition = function(a, b) {
    return a + b
}
addition(10, 20)


// je funciton er kono namm deya hoy na se sob function ke bola hoy anonemous function


setTimeout(function() {
    console.log('5 second later')
}, 5000)


//pass the function to another variable 
var another = addition
console.log(another(7,6))



