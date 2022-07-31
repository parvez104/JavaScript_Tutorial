//🔴🟡🟢 While loop : 

var i = 1
while(i <= 5){
    console.log( i + ' Hello ! mama...')
    i++
}



//🎯 Real use of while loop : 

//✨ Write a program useing while loop. there is a condition & genarate a random number 1-10. if random number is 9, Show the massage "Winner Winner Chiken Diner" ? 

var isRunning = true

while (isRunning) {

    var randomNum = Math.floor(Math.random() * 11)
    if (randomNum === 9) {
        console.log('Winner Winner Chiken Diner')
        isRunning = false
    } else {
        console.log('You have got ' + randomNum)
    }
}





