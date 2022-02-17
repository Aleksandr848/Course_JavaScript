'use strict';

const basketList = document.querySelector('div.basket');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEl = document.querySelector('.basket');

document.querySelector('img.cartIcon').addEventListener('click', event => {
    if (basketList.classList.contains('hidden')) {
        basketList.classList.remove('hidden');
    }else {
        basketList.classList.add('hidden');
    }
})

const basket = {};
const allProductEl = document.querySelector('.featuredItems');

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id: id, name: name, price: price, count: 0};
    }
    basket[id].count++;
    document.querySelector('span.cartIconWrap span').textContent = getProductCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getProductCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
    return Object
        .values(basket)
        .reduce((acc, product) => acc + product.price * product.count, 0);
}

function renderNewProductInBasket(productId) {
    const productRow = `
    <div class="basketRow" data-id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
        $<span class="productTotalRow">${(basket[productId].price * basket[productId].count)
        .toFixed(2)}</span>
      </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function renderProductInBasket(productId) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-id="${productId}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(productId);
        return;
    }
    const product = basket[productId];
    basketRowEl.querySelector('.productCount').textContent = product.count;
    basketRowEl
        .querySelector('.productTotalRow')
        .textContent = (product.price * product.count).toFixed(2);
}

allProductEl.addEventListener('click', event => {
    if (!event.target.classList.contains('addToCart')) {
        return;
    }

    const productEl = event.target.closest('.featuredItem');
    const id = productEl.dataset.id;
    const name = productEl.dataset.name;
    const price = productEl.dataset.price;
    addToCart(id, name, price);


})
