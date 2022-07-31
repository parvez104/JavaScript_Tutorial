//🟢🟡🔴 Date function : 

var date = new Date()

console.log(date)

console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toTimeString())
console.log(date.toLocaleTimeString())

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())

console.log(date.getHours())
console.log(date.getMinutes())

//explore more.....
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date




// Digital Clock ::
function getCurrentTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const Fromate_12 = hours > 12 ? hours - 12 : hours
    const Adding_0_In_Hours = Fromate_12 < 10 ? '0' + Fromate_12 : Fromate_12
    const Adding_0_In_Minutes = minutes < 10 ? '0' + minutes : minutes
    const Adding_0_In_Seconds = seconds < 10 ? '0' + seconds : seconds

    console.log(`${Adding_0_In_Hours} : ${Adding_0_In_Minutes} : ${Adding_0_In_Seconds}`)
}

const timer = setInterval(() => {
    getCurrentTime()
}, 1000)












