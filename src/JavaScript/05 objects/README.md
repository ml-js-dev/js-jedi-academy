#### Цели

1. [Объекты](#Objects)
2. [Копирование объекта и массивов](#Copy)
3. [Методы объекта. this для объекта](#Methods)
4. [Опциональная цепочка](#Chain)
5. [Деструктурирующее присваивание](#Destructuring)

---

#### <a href="Objects"></a> Объекты

Объекты используются для хранения коллекций различных значений и более сложных сущностей. В `JavaScript` объекты используются очень часто, это одна из основ языка. Объект может быть создан с помощью фигурных скобок `{…}` с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.

```js
const person = {
   name: 'John', // ключ name, значение John
   lastName: 'Doe', // ключ lastName, значение Doe
   age: 28, // ключ age, значение 28
   address: {
      // ключ address, значение { city: 'London' }
      city: 'London',
   },
}
```

Чтобы обратиться к свойству можно:

- использовать запись «через точку»

```js
console.log(person.name) // John
console.log(person.lastName) // Doe
console.log(person.age) // 28
console.log(person.address) // { city: 'London' }
```

- использовать квадратные скобки

```js
console.log(person['name']) // John
console.log(person['lastName']) // Doe
console.log(person['age']) // 28
console.log(person['address']) // { city: 'London' }
```

Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:

```js
const propName = 'lastName'
console.log(person[propName]) // Doe

const propName1 = 'age'
console.log(person[propName1]) // 28

const propName12 = 'name'
console.log(person[propName2]) // John
```

Мы можем использовать квадратные скобки в литеральной нотации для создания свойства:

```js
const propName = 'name'

const person = {
   [propName]: 'John',
}

console.log(person.name) // John
console.log(person[propName]) // John
```

В реальном коде часто нам необходимо использовать существующие переменные как значения для свойств с тем же именем:

```js
const name = 'John'
const lastName = 'Doe'
const age = 28

const person = { name, lastName, age }

console.log(person.name) // John
console.log(person.lastName) // Doe
console.log(person.age) // 28
```

При обращении к свойству, которого нет, возвращается `undefined`. Это позволяет просто проверить существование свойства:

```js
const person = {}
console.log(person.name) // undefined

person.name = 'John'
console.log(person.name) // John
```

Также существует специальный оператор `in` для проверки существования свойства в объекте.

```js
const person = {}
console.log('name' in person) // false

person.name = 'John'
console.log('name' in person) // true
```

Для удаления свойств используется директива `delete`

```js
const person = {
   name: 'John',
}
console.log(person.name) // John

delete person.name
console.log(person.name) // undefined
```

---

#### <a href="Copy"></a> Копирование объектов и массивов

Объекты присваиваются и копируются **по ссылке**. Переменная хранит **не «значение объекта»**, а **«ссылку»** на это значение. Поэтому копирование такой переменной или передача её в качестве аргумента функции приводит к копированию этой ссылки, а не самого объекта.

```js
const person = {
   name: 'John',
}

const aynPerson = person // создаётся ещё одна ссылка на тот же самый объект
console.log(aynPerson === person) // true, ссылка на один и тот же объект

aynPerson.age = 35
console.log(aynPerson.age) // 35
console.log(person.age) // 35

person.name = 'Vova'
console.log(aynPerson.name) // Vova
console.log(person.name) // Vova
```

Для копирования и объединения объектов существует `Object.assign(dest, obj1, ...objN)`

- `dest` - целевой объект
- `objN` - исходные объекты

```js
const me = {
   name: 'John',
   lastName: 'Doe',
   age: 28,
}

const anyPerson = {}

Object.assign(anyPerson, me)

console.log(anyPerson) // {name: 'John', lastName: 'Doe' age: 28}
console.log(me === anyPerson) // false

const someObj = {}

Object.assign(
   someObj,
   { name: 'Vova' },
   { lastName: 'Pupkin' },
   { age: 35 },
   { isAdmin: true },
)

console.log(someObj) // { name: "Vova", lastName: "Pupkin", age: 35, isAdmin: true }
```

Так же для копирования и объединения объектов можно использовать `...`

```js
const person = {
   name: 'John',
}

const adminRoles = {
   isAdmin: true,
}

const adminPerson = { ...person, ...adminRoles }
console.log(adminPerson) // { name: 'John', isAdmin: true }
```

---

#### <a hred="Methods"></a> Методы объекта. `this` для объекта

Методы объекта определяют его поведение или действия, которые он производит. Методы представляют собой функции.

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   sayHi() {
      console.log('Hello')
   },
}

// можем использовать Function Expression
person.sayBye = function () {
   console.log('Good bye')
}

person.sayHi() // Hello
person.sayBye() // Good bye
```

Как правило, методу объекта необходим доступ к информации, которая хранится в объекте, чтобы выполнить с ней какие-либо действия (в соответствии с назначением метода). Например, коду внутри `person.sayHi()` может понадобиться имя пользователя, которое хранится в объекте `person`. Для доступа к информации внутри объекта метод может использовать ключевое слово `this`. Значение `this` – это объект «перед точкой», который использовался для вызова метода.

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   showThis() {
      console.log(this)
   },
}

person.showThis()
/*
        lastName: "Doe"
        name: "John"
        showThis: ƒ showThis()
    */
```

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   showInfo() {
      const info = `${this.name} ${this.lastName}`
      console.log(info)
   },
}

person.showInfo() // John Doe
```

`this` не является фиксированным. Значение `this` вычисляется во время выполнения кода.

```js
const me = { name: 'John' }
const otherPerson = { name: 'Vova' }

const showName = function () {
   console.log(this.name)
}

me.showName = showName
otherPerson.showName = showName

me.showName() // John
otherPerson.showName() // Vova
```

Стрелочные функции особенные: у них нет своего «собственного» `this`. Если мы используем `this` внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

```js
const me = { lastName: 'Doe' }
const otherPerson = { lastName: 'Pupkin' }

const showName = () => {
   console.log(this.lastName)
}

me.showName = showName
otherPerson.showName = showName

me.showName() // undefined
otherPerson.showName() // undefined
```

---

#### <a hred="Chain"></a> Опциональная цепочка

Оператор **опциональной последовательности ?.** позволяет получить значение свойства, находящегося на любом уровне вложенности в цепочке связанных между собой объектов, без необходимости проверять каждое из промежуточных свойств в ней на существование.

```js
const person = {}

console.log(person.address.city) // Cannot read property 'city' of undefined

// старая запись
const city = person && person.address && person.address.city

// опциональная цепочка
const city = person?.address?.city ?? 'Minsk'
```

Работа с методами

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   showInfo() {
      console.log(`${this.name} ${this.lastName}`)
   },
}

const person2 = {
   name: 'Vova',
   lastName: 'Pupkin',
}

person.showInfo?.() // John Doe
person2.showInfo?.() //
```

Обращение к свойству через переменную

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   showInfo() {
      console.log(`${this.name} ${this.lastName}`)
   },
}

let key = 'name'
console.log(person?.[key]) // John

key = 'age'
console.log(person?.[key]) // undefined

key = 'showInfo'
console.log(person?.[key]?.()) // John Doe
```

---

#### <a hred="Destructuring"></a> Деструктурирующее присваивание

Деструктуризация просто подразумевает разбивку сложной структуры на простые части. В `JavaScript`, таковая сложная структура обычно является объектом или массивом. Используя синтаксис деструктуризации, вы можете выделить маленькие фрагменты из массивов или объектов.

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   role: 'teacher',
}

const { name, lastName } = person
console.log(`${name} ${lastName}`) // John Doe

const { age } = person
console.log(age) // undefined

const { address = 'Minsk' } = person
console.log(address) // Mink

const { role, ...otherProps } = person
console.log(role, otherProps)
/*
      teacher,
      {
        name: "John",
        lastName: "Doe",
      }
    */
```

```js
const nums = [321, 543, 876, 234, 874]

const [first, second] = nums
console.log(first, second) // 321, 543

const [, , third, ...rest] = nums
console.log(third, rest) // 876, [234, 874]
```

Использование разных имён для переменных

```js
const person1 = {
   name: 'John',
   lastName: 'Doe',
}

const person2 = {
   name: 'Vova',
   lastName: 'Pupkin',
}

const { name, lastName } = person1
const { name: person2Name, lastName: person2lastName } = person2
```

Вложенная деструктуризация

```js
const person = {
   name: 'John',
   lastName: 'Doe',
   role: 'teacher',
   students: [
      {
         name: 'Vova',
         lastName: 'Pupkin',
         knowledge: ['HTML', 'CSS'],
      },
      {
         name: 'Maria',
         lastName: 'Pupkina',
         knowledge: ['HTML', 'CSS'],
      },
   ],
}

const {
   name,
   lastName,
   role,
   students: [
      student1,
      { name: student2Name, lastName: student2LastName, knowledge },
   ],
} = person

console.log(name) // John
console.log(lastName) // Doe
console.log(role) // teacher
console.log(student1)
/*
      {
          name: 'Vova',
          lastName: "Pupkin",
          knowledge: ['HTML', 'CSS']
      }
    */
console.log(student2Name) // Maria
console.log(student2LastName) // Pupkina
console.log(knowledge) // ['HTML', 'CSS']
```

---

### ДЗ

1. [Объекты](https://learn.javascript.ru/object)
2. [Копирование объектов и ссылки](https://learn.javascript.ru/object-copy)
3. [Методы объекта, "this"](https://learn.javascript.ru/object-methods)
4. [Опциональная цепочка](https://learn.javascript.ru/optional-chaining)
5. [Object.keys, values, entries](https://learn.javascript.ru/keys-values-entries)
6. [Деструктуризация](https://learn.javascript.ru/destructuring-assignment)
7. [Глобальный объект](https://learn.javascript.ru/global-object)
