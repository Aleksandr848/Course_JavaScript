/*
* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
* аргументов, operation – строка с названием операции.
* В зависимости от переданного значения операции выполнить одну из арифметических операций, используя функции из
* пункта 5, и вернуть полученное значение, используя switch.
* */

function sumOfNumbers(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'На ноль делить нельзя!';
    }
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма':
            return sumOfNumbers(arg1, arg2);
        case 'вычитание':
            return subtraction(arg1, arg2);
        case 'умножение':
            return multiplication(arg1, arg2);
        case 'деление':
            return division(arg1, arg2);
        default:
            return 'Вы ввели какую-то дичь!'
    }
}

alert(mathOperation(58, 2, 'умножение'))
alert(mathOperation(58, 33, 'вычитание'))
alert(mathOperation(58, 2, 'деление'))
alert(mathOperation(58, 2, 'деие'))

