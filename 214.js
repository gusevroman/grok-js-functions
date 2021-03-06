// 214. Объявите функцию foo со входящим параметром a.
// Внутри неё объявите функцию bar со входящим параметром b.
// Функция bar должна удваивать поданное ей на вход значение.
// Функция foo должна суммировать поданное ей на вход значение с результатом
// выполнения функции bar, которой на вход передано значение 3.
// Вызовите foo со входящим значением 4.
// Каков результат выполнения функции bar?
// Каков результат выполнения функции foo?

function foo(a) {
    function bar(b) {
        return b * 2
    }

    return a + bar(3)
}

foo(4);

/*result bar === 6 */
/*result foo === 10*/
