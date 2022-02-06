/*
* Сделать генерацию корзины динамической, то есть верстка корзины не должна находиться в HTML-структуре.
* Там должен быть только div, в который будет вставляться корзина, сгенерированная кодом на JavaScript:
* Пустая корзина должна выводить строку «Корзина пуста».
* Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
* */

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

function numberOfProduct(cart) {
    let count = 0;
    for (let vendor_code in cart) {
        count += cart[vendor_code].quantity;
    }
    return count
}

const text = document.createElement("p");
text.className = "cart-text";
text.id = 'cart'

const image = document.createElement("img");
let i = '';
image.src = i;
image.alt = 'shopping cart'

const empty_cart = 'Корзина пуста';
const full_cart = 'В корзине: <span>' + numberOfProduct(shopping_cart) + '</span> товаров на сумму <span>'
    + totalPrice(shopping_cart) + '</span> евро.';
const parent = document.querySelector('#shop_cart');
if (Object.keys(shopping_cart).length == 0) {
    text.innerHTML = empty_cart;
    image.src = 'images/shopping-cart-empty.png';
} else {
    text.innerHTML = full_cart;
    image.src = 'images/shopping-cart.png';
}

parent.insertBefore(image, parent[0]);
parent.appendChild(text);

