let bike = new Object()
bike.make = 'Yamaha'
bike.model = 'MT-07'
bike.year = 2021

console.log(car.make) // Dot notation
console.log(car['model']) // Bracket notation

car.color = 'Red' // Adding a new property
car.year = 2021 // Updating an existing property

delete car.model // Deleting a property

let person = {
   name: 'Alice',
   greet: function () {
      console.log('Hello, my name is ' + this.name)
   },
}
person.greet() // Calling the method
