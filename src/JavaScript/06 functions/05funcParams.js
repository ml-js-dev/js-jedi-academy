//В JavaScript параметры функции по умолчанию имеют значение undefined. Можно передать в функцию не все аргументы или слишком много аргументов (лишние аргументы будут проигнорированы).

// showRandomNumber(30) // (1)
// showRandomNumber(30, 10, 100, 200, 300, 90) // (2)
// // (1) NaN тк функция showRandomNumber ожижает два числа а приходит 30 и undefined
// // (2) получим рандомное число, лишние аргументы игнорируются

// function showRandomNumber(max, min) {
//    console.log(max, min)
//    const randomNumber = Math.floor(Math.random() * (max - min) + min)
//    console.log(randomNumber)
// }
//Если мы хотим задать параметрам max и min значение по умолчанию, мы должны указать его после =:

// showRandomNumber(20, 10) // получим рандомное число в диапазоне от 10 до 20
// showRandomNumber() // получим рандомное число в диапазоне от 1 до 10

// function showRandomNumber(max = 10, min = 1) {
//    console.log(max, min)
//    const randomNumber = Math.floor(Math.random() * (max - min) + min)
//    console.log(randomNumber)
// }

// Остаточные параметры могут быть обозначены через три точки .... Буквально это значит: «собери оставшиеся параметры и положи их в массив».
// const sumAll = (...args) => {
//    let res = 0
//    for (e of args) {
//       res += e
//    }
//    console.log(res)
// }

// sumAll(1, 2, 3, 4, 5)

// function sum(a, b, ...nums) {
//    console.log(a, b, nums)
//    return a + b
// }

// const res = sum(1, 2, 3, 4, 5, 6, 7) // a = 1, b = 2, nums = [3,4,5,6,7]
// console.log(res)

// //оператор расширения – тоже использует ..., но делает совершенно противоположное.

const sum = (a, b, c, d) => a + b + c + d

const nums = [10, 20, 30, 40, 50, 60]

const a = sum(...nums)
console.log(a)
