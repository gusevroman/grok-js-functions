// 124. Объявите анонимную самовызывающуюся стрелочную функцию, которая суммирует два входящих
// значения. Передайте ей на вход 3 и 6. Каков результат выполнения функции? Где у данной функции
// параметры? Где аргументы?

((a, b/*params*/) => {
    return a+b
})(3, 6 /*arguments*/);

/*result is 9*/