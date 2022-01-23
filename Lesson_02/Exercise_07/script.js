/*
*  Сравнить null и 0 и своими словами объяснить результат.
* */

alert(null == 0); // false
alert(null >= 0); // true
alert(null <= 0); // true
alert(null < 0); // false
alert(null > 0); // false

/*
*  Исходя из строк 2 и 3 можно сделать вывод, что null == 0, но строка 1 говорит об обратном. Всё дело в том, что при
*  сравнении null преобразуется в число 0, а при нестрогом равенстве действует особое правило - значение null ни к чему
*  не приводится и оно ни чему не равно.
* */