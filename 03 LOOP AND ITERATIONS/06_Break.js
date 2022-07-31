//🔴🟡🟢 Break Statement : 


//✨ Write a program useing while loop. there is a condition & genarate a random number 1-10. if random number is 9, Show the massage "Winner Winner Chiken Diner" ? 

var isRunning = true

while (isRunning) {

    var randomNum = Math.floor(Math.random() * 11)
    if (randomNum === 9) {
        console.log('Winner Winner Chiken Diner')
        isRunning = false
    } else {
        console.log(randomNum)
    }
}


//🎯 Useing break :
while (true) {

    var random = Math.floor(Math.random() * 10)
    if (random === 2) {
        console.log('Winner Winner Chiken Diner')
        break
    } else {
        console.log( random)
    }
}



for (i = 1; i < 10; i++) {

    if (i == 5) {
        break
    }
    console.log(i)
}


