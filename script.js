/* делигируем действие "клик" на все элементы калькулятора */
/* document.querySelector элемент в документе, который соответствует указанному селектору*/
    const calc = document.querySelector(".calc");
    const result = document.querySelector("#result");

/*calc.addEventListener добавление события в данном случае "клик"*/
/*function(event) определение какой именно элемент вызвал событие*/

    calc.addEventListener("click", function(event) {
/*работа только с кнопками исключая лишнии элементы*/
    if(!event.target.classList.contains("calc__btn")) return;

/*console.log проверка, выводятся ли при нажатии кнопки в концоли*/
/*target.innrText команда для вывода содержимого кнопки*/
/*console.log(event.target.innerText); */
/*const value Переменная для обращения к окну результатов*/
    const value = event.target.innerText;

/*Логика сброса и вычесления*/
/* https://learn.javascript.ru/switch изучить конструкцию switch*/
/* При нажатии "С" в блок результата записывается пустая строка*/
/* ЕБУЧАЯ ССССС СУКА!!! 20 МИНУТ ИСКАЛ ХУЛИ ТУТ НЕ ТАК!!! выяснилось что русская расскладка*/
    switch(value) {
        case "C":
            result.innerText = " ";
            break;
/* При нажатии "=" в блок результата записывается результат*/
/* eval(result.innerText) функция передающая js cod в виде строки (содержимое result)*/
/* .toFixed(2) оставляет 2 знака после десятичной точки */
        case "=":
            result.innerText = eval(result.innerText).toFixed(2);
            break;
/* операции остальных клавиш, оставляем по умолчанию  */
        default:
            result.innerText += value;
    }

   /* result.innerText += value;*/

});