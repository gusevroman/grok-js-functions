// 12. Объявите функцию foo со входящим параметром a.
// Внутри неё объявите функцию bar со входящим параметром b.
// Функция bar должна удваивать поданное ей на вход значение.
// Функция foo должна утраивать поданное ей на вход значение.
// Вызовите foo со входящим значением 2.
// Каков результат выполнения функции bar?
// Каков результат выполнения функции foo?
// Какие параметры у функции foo?
// Какие параметры у функции bar?

function foo(a/*param foo*/) {
    function bar(b/*param b*/) {
        return b * 2
    }

    return a * 3
}

foo(2);

/*result bar is not defined*/
/*result foo === 6*/
