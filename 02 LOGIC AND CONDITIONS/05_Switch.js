//🔴🟡🟢 Switch Statement : 

var date = new Date()

var today = date.getDay() // 0 - Sunday, 1 - Monday, 2 - Tuesday......
// console.log(today)
// today = 34

switch (today) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('Friday')
        break
    default: console.log('Invaild Number ❌')
}



const prouductPrice = 678;//change-vaule 
let freeShipping = false;
let handPiked = false;

switch (prouductPrice) {

    case prouductPrice >= 100 && prouductPrice:
        freeShipping = true;
        handPiked = false;
        break;

    case prouductPrice >= 60 && prouductPrice:
        freeShipping = false;
        handPiked = true;
        break;

    default:
        freeShipping = false;
        handPiked = false;
}
console.log(freeShipping)
console.log(handPiked)   
