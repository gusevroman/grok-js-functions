// 218. Объявите функцию foo. Внутри неё объявите анонимную функцию со входящим параметром.
// Результатом выполнения foo должен быть результат выполнения анонимной функции.
// Подайте на вход анонимной функции первый аргумент функции foo.
// Анонимная функция должна отдавать поданное ей на вход значение без изменений.
// Вызовите foo со входящим значением 10.
// Каков результат выполнения функции foo?
// Какие аргументы у функции foo?
// Какие аргументы у анонимной функции?

function foo(a) {
    return (function (x) {
        return x
    })(a/*argument anonymous function*/);
}

console.log(foo(10/*argument foo*/));


/*result foo === 10*/

