// 406. Объявите функцию foo со входящим параметром f.
// Функция foo должна возвращать результат вызова f как функции.
// Объявите функцию bar, которая возвращает 42.
// Вызовите foo со входящим значением равным вызову функции bar.
// Каков результат выполнения функции foo? Почему?

function foo(f) {
    return f()
}

function bar() {
    return 42
}

foo(bar());

/*TypeError: f is not a function, потому что f это не ф-я, а результат вызванной bar() 42*/
