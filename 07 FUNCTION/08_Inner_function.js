
//🔴🟡🟢 Inner Function : 

function something(greet, name) {

    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}
something('Good Morning', 'AS. Kamal')



// Greet the firstName :

function welcome(greet, name) {

    function getFirstName() {

        if (name) {
            return name.split(' ')[0]
            //covert array and return 0 no index karon 0 index a first name thakbe
        } else {
            return ''
            //name na dile undifined asbeh, tai eikane empty sting deya 
        }
    }
    var massage = greet + ' ' + getFirstName()
    console.log(massage)
}
welcome('Good Morning ', 'jaman Hasan')
// welcome('Good Morning ')




function sayHifunction(massage, name){

        function getname(){
            if (name) {
                return name.split(' ')[0]
            }else{
                return ''
            }
        }
        return massage + getname() + '🌱'
}
console.log(sayHifunction("Good Mornnig 🥰 ", "Jahan Hussain "))

