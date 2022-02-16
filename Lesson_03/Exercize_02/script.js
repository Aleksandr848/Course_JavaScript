/*
* С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
* Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
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
