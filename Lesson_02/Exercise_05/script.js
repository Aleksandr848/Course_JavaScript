/*
* Реализовать основные арифметические операции: сложение, вычитание, умножение, деление.
* Сделать их в виде функций с двумя параметрами.
* Обязательно использовать оператор return.
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

alert(division(56, 8));
alert(multiplication(4, 6));
alert(subtraction(10, 4));
alert(sumOfNumbers(44, 66));
