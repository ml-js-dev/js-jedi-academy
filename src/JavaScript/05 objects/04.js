//? String Literals
// const name = 'Test'
// const lastName = 'Test2'
// const age = 5

// console.log(
//    'Hello, my name is' +
//       ' ' +
//       name +
//       ' ' +
//       lastName +
//       ' ' +
//       "and I'm " +
//       age +
//       ' years old.',
// )
// console.log(`Hello, my name is ${name} ${lastName} and I'm ${age} years old.`)

const person = {
   name: 'John', // ключ name, значение John
   lastName: 'Doe', // ключ lastName, значение Doe
   age: 28, // ключ age, значение 28
   address: {
      // ключ address, значение { city: 'London' }
      city: 'London',
   },
}

const { name, lastName, age } = person

const car = {
   maker: 'Toyota',
   model: 'Camry',
   year: 2015,
   engine: 3.5,
}

delete car.year

const me = {
   name: 'John',
   lastName: 'Doe',
   age: 28,
}

const anyPerson = {}

Object.assign(anyPerson, me)

// console.log(anyPerson) // {name: 'John', lastName: 'Doe' age: 28}
// console.log(me === anyPerson) // false

const human = {
   name1: 'John',
   lastName2: 'Doe',
   age3: 28,
   sayInfo: function () {
      console.log(`Hello my name is ${this.name1}`)
   },
}

// human.sayInfo()

function sayDay(day) {
   console.log(`Today is ${day}`)
}

sayDay('Tuesday')
sayDay('Hello')
sayDay()
