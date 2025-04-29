let students = [
   {
      id: 1,
      f_name: 'Alex',
      l_name: 'B',
      gender: 'M',
      married: false,
      age: 22,
      paid: 250,
      courses: ['JavaScript', 'React'],
   },
   {
      id: 2,
      f_name: 'Ibrahim',
      l_name: 'M',
      gender: 'M',
      married: true,
      age: 32,
      paid: 150,
      courses: ['JavaScript', 'PWA'],
   },
   {
      id: 3,
      f_name: 'Rubi',
      l_name: 'S',
      gender: 'F',
      married: false,
      age: 27,
      paid: 350,
      courses: ['Blogging', 'React', 'UX'],
   },
   {
      id: 4,
      f_name: 'Zack',
      l_name: 'F',
      gender: 'M',
      married: true,
      age: 36,
      paid: 250,
      courses: ['Git', 'React', 'Branding'],
   },
   {
      id: 5,
      f_name: 'Chloe',
      l_name: 'Z',
      gender: 'F',
      married: false,
      age: 18,
      paid: 50,
      courses: ['TypeScript', 'Angular', 'PR'],
   },
]

// for (let i = 0; i < students.length; i++) {
//    console.log(students[i])
// }

//*for of
// for (let student of students) {
//    console.log(student)
// }

//* forEach new arr - no итерируется по массиву и выполняет кб функ для каждого элемента, апдейтит внешние переменные, логирует
// students.forEach(function (elem, index, arr) {
//    console.log(elem)
// })

// students.forEach((elem) => console.log(elem))

//* map - new arr - yes создает новый массив, применяя функ к каждому элем изначального массива, модифицирует данные
// const res = students.map((elem) => elem.age * 2)
// console.log(res)
// const res1 = students.map(
//    (elem) => `Name: ${elem.f_name} and age is: ${elem.age}`,
// )
// console.log(res1)
//* filter - создаёт новый массив из элем которые прошли тест описанный в функции, создаёт выборку
// console.log(students.filter((student) => student.gender === 'F'))

//* reduce - new arr - yes сокращает массив до единственного значения, применяя функ к каждому элем и аккумулируя результат, суммирует элементы
// let payment = 0
// for (let i = 0; i < students.length; i++) {
//    payment += students[i].paid
// }
// console.log(payment)

// const sum = students.reduce((acc, student) => acc + student.paid, 0)
// console.log(sum)
//* find
// const findStudent = students.find((e) => e.age > 30)
// console.log(findStudent)
//* findIndex
// const findStudentIndex = students.findIndex((e) => e.age > 30)

//!reduce use cases

// 2. Расложение массива
// const nested = [[1, 2], [3, 4], [5]]
// const flattened = nested.reduce((acc, arr) => acc.concat(arr), [])
// console.log(flattened)

// 3. Подсчёт повторений

// const fruits = ['🍎', '🍌', '🍎', '🍊', '🍌', '🍎']
// const count = fruits.reduce((acc, fruit) => {
//    acc[fruit] = (acc[fruit] || 0) + 1
//    return acc
// }, {})
// console.log(count)

// 4 Группировка по конкретному параметру (e.g. age)
const people = [
   { name: 'Alice', age: 21 },
   { name: 'Bob', age: 21 },
   { name: 'Charlie', age: 22 },
]
const groupedByAge = people.reduce((acc, person) => {
   const age = person.age
   if (!acc[age]) acc[age] = []
   acc[age].push(person)
   return acc
}, {})
console.log(groupedByAge)

// const people = [
//    { name: 'Vladimir', age: 29, budget: 29000 },
//    { name: 'Vincent', age: 23, budget: 23000 },
//    { name: 'Joe', age: 3, budget: 3000 }, //-
//    { name: 'Brad', age: 14, budget: 28000 },
//    { name: 'Olaf', age: 17, budget: 27000 },
// ]
//
// const newPeople = people
//    .filter((e) => e.budget > 3000)
//    .map((e) => {
//       return {
//          info: `${e.name} (${e.age})`,
//          budget: e.budget,
//       }
//    })
//    .reduce((total, e) => total + e.budget, 0)
// console.log(newPeople)
