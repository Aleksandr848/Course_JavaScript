/*
* Товары в корзине хранятся в массиве. Задачи:
* a) Организовать такой массив для хранения товаров в корзине;
* b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
* */

let shoppingCart = [
    ['Pant', 25],
    ['Jeans', 43],
    ['Shirt', 32],
    ['Hoodie', 51],
]

function countBasketPrice(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i][1];
    }
    return totalPrice;
}

alert(countBasketPrice(shoppingCart));
