function greet() {
   console.log('Hi', this)
}

const person = {
   name: 'Joe',
   age: 18,
   sayHello: greet,
   sayHelloGlobal: greet.bind(window),
   logInfo: function (job, status) {
      console.log(
         `Name is ${this.name} age is ${this.age}, job is ${job} and status is ${status}`,
      )
   },
}

const anotherPerson = {
   name: 'Jane',
   age: 30,
}

// person.logInfo.bind(anotherPerson, 'QA', 'online')()
// person.logInfo.call(anotherPerson, 'QA', 'online')
// person.logInfo.apply(anotherPerson, ['QA', 'online'])
//bind принимает объект и беск. кол-во параметров, также создает новую функцию
