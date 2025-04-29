/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

const getBiggest = (...nums) => {
   let max = -Infinity

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
         max = nums[i]
      }
   }

   return max
}

/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

const duplicate = (array) => {
   array.push(...array)
   return array
}

/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/

const isPalindrome = (str) => {
   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
   return cleanedStr === cleanedStr.split('').reverse().join('')
}

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const replacer = (array) => {
   let arr = []

   const format = (string) => {
      let newString = ''

      for (let i = 0; i < string.length; i++) {
         if (string[i] === '0') {
            newString += 'zero'
         } else {
            newString += string[i]
         }
      }

      return newString
   }

   array.forEach((item) => {
      if (String(item).includes('0')) {
         arr.push(format(String(item)))
      } else {
         arr.push(item)
      }
   })

   return arr
}
