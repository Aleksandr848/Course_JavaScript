/*
* Продолжить работу с интернет-магазином:
* В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
* Реализуйте такие объекты.
* Перенести функционал подсчета корзины на объектно-ориентированную базу.
* */

// Предположу, что товары в корзине обозначаются каким-нибудь уникальным номером (артикул), а каждый такой номер
// содержит в себе описание товара (в данном случае - наименование, цена и количество)

let shopping_cart = {
    1: {
        name: 'Cardigan',
        price: 55,
        quantity: 1,
    },
    2: {
        name: 'Sweater',
        price: 49,
        quantity: 2,
    },
    3: {
        name: 'Shirt',
        price: 49,
        quantity: 1,
    },
    4: {
        name: 'T-shirt',
        price: 49,
        quantity: 7,
    },
    5: {
        name: 'Blouse',
        price: 49,
        quantity: 3,
    },
};

function totalPrice(cart) {
    let sum = 0;
    for (let vendor_code in cart) {
        sum += cart[vendor_code].price * cart[vendor_code].quantity;
    }
    return sum
}

alert(totalPrice(shopping_cart));
console.log(shopping_cart);
