#### <a href="Scope"></a> Область видимости переменных

`let` и `const` имеют блочную область видимости. Они видны в блоке в котором были инициализированы, и во всех его
подблоках

В конструкциях `if, for, while` создается блочная область видимости

```js
if (true) {
    let firstBlock = 'firstBlock'
    // переменные secondBlock, thirdBlock не доступны. firstBlock доступна
    if (true) {
        let secondBlock = 'secondBlock'
        // переменные thirdBlock не доступна. firstBlock secondBlock доступны
        if (true) {
            const thirdBlock = 'thirdBlock'
            // secondBlock, firstBlock, thirdBlock доступны
        }
    }
}

// переменные firstBlock, secondBlock, thirdBlock не доступны

for (let i = 0; i < 5; i++) {
    console.log(i) // 0, 1, 2, 3, 4
}
console.log(i) // ReferenceError: i is not defined

while (true) {
    const hello = 'hello world'
    break
}
console.log(hello) // ReferenceError: hello is not defined
```

`var` не имеет блочной области видимости

```js
var message = 'a'
console.log(messageInBlock) // undefined

if (true) {
    var messageInBlock = 'b'
}
console.log(message, messageInBlock) // a, b
```

---

How Asynchronous JavaScript Works Behind the Scenes
To understand asynchronous behavior better, it’s important to know about the JavaScript runtime environment,
specifically the event loop and call stack:

Call Stack: The call stack is where functions are executed in the order they’re called. In synchronous operations, each
function is added to the stack and executed before moving to the next.
Web APIs (in Browsers): Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the
browser. When an asynchronous function like setTimeout is called, it is passed to these Web APIs, which manage the
timing without blocking the main call stack.
Callback Queue: Once the Web API has finished its job (like waiting for the timeout), it pushes the callback function (
like the one in setTimeout) to the callback queue.
Event Loop: The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback
queue onto the stack for execution. This is why the delayed message “Geek” is logged after other code has finished.