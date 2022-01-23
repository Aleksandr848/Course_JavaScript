/*
*  Присвоить переменной a значение в промежутке от 0 до 15.
*  С помощью оператора switch организовать вывод чисел от a до 15.
*/

const a = +prompt('Введите число от 0 до 15: ', '1');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
switch (a) {
    case 0:
        alert(numbers);
        break;
    case 1:
        alert(numbers.slice(1));
        break;
    case 2:
        alert(numbers.slice(2));
        break;
    case 3:
        alert(numbers.slice(3));
        break;
    case 4:
        alert(numbers.slice(4));
        break;
    case 5:
        alert(numbers.slice(5));
        break;
    case 6:
        alert(numbers.slice(6));
        break;
    case 7:
        alert(numbers.slice(7));
        break;
    case 8:
        alert(numbers.slice(8));
        break;
    case 9:
        alert(numbers.slice(9));
        break;
    case 10:
        alert(numbers.slice(10));
        break;
    case 11:
        alert(numbers.slice(11));
        break;
    case 12:
        alert(numbers.slice(12));
        break;
    case 13:
        alert(numbers.slice(13));
        break;
    case 14:
        alert(numbers.slice(14));
        break;
    case 15:
        alert(numbers.slice(15));
        break;
}
