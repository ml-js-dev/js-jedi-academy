// showRandomNumber(30, 10) // Ошибки нету

// function showRandomNumber(max, min) {
//    const randomNumber = Math.floor(Math.random() * (max - min) + min)
//    console.log(randomNumber)
// }

// Cannot access 'showRandomNumber' before initialization
showRandomNumber(30, 10)
const showRandomNumber = function (max, min) {
   const randomNumber = Math.floor(Math.random() * (max - min) + min)
   console.log(randomNumber)
}

//function declarations, created by interpreter before execution
