/*
* Добавить на страницу каталог товаров. Сделать так, чтобы товары в каталоге выводились при помощи JavaScript,
* то есть при загрузке страницы на базе массива товаров генерировать разметку. Изначальный HTML‑код страницы должен
* содержать только <div id="catalog"> без вложенного кода. Весь вид каталога генерируется с помощью JavaScript.
* */

const catalog = {
    1:{
        vendor_code: 1,
        name: 'Jacket',
        price: 22,
        color: 'red',
        size: '56',
        available_balance: 2,
        image: 'images/jacket.jpg',
    },
    2:{
        vendor_code: 2,
        name: 'Jeans',
        price: 33,
        color: 'green',
        size: '64',
        available_balance: 4,
        image: 'images/jeans.jpg',
    },
    3:{
        vendor_code: 3,
        name: 'Shoes',
        price: 44,
        color: 'black',
        size: '43',
        available_balance: 2,
        image: 'images/shoes.jpg',
    },
    4:{
        vendor_code: 4,
        name: 'Dress',
        price: 55,
        color: 'rose',
        size: '110',
        available_balance: 2,
        image: 'images/dress.jpg',
    },
    5:{
        vendor_code: 1,
        name: 'Jacket',
        price: 22,
        color: 'red',
        size: '56',
        available_balance: 2,
        image: 'images/jacket.jpg',
    },
    6:{
        vendor_code: 2,
        name: 'Jeans',
        price: 33,
        color: 'green',
        size: '64',
        available_balance: 4,
        image: 'images/jeans.jpg',
    },
    7:{
        vendor_code: 3,
        name: 'Shoes',
        price: 44,
        color: 'black',
        size: '43',
        available_balance: 2,
        image: 'images/shoes.jpg',
    },
    8:{
        vendor_code: 4,
        name: 'Dress',
        price: 55,
        color: 'rose',
        size: '110',
        available_balance: 2,
        image: 'images/dress.jpg',
    },
};
for (let product in catalog) {
    const div_product = document.createElement("div");
    div_product.className = 'product-view';

    const img_product = document.createElement("img");
    img_product.src = catalog[product].image;
    console.log(img_product.src.toString())

    const p_prod_name = document.createElement("p");
    p_prod_name.className = 'product-name';
    p_prod_name.innerHTML = catalog[product].name + " <span>" + catalog[product].price + " </span>EUR";

    const p_prod_color = document.createElement("p");
    p_prod_color.className = 'product-color';
    p_prod_color.innerHTML = "Color: " + catalog[product].color.toUpperCase();

    const p_prod_size = document.createElement("p");
    p_prod_size.className = 'product-size';
    p_prod_size.innerHTML = "Size: " + catalog[product].size.toUpperCase();

    const parent = document.querySelector('#catalog');
    parent.appendChild(div_product);
    div_product.insertAdjacentElement('afterbegin', img_product);
    div_product.insertAdjacentElement('beforeend', p_prod_name);
    div_product.insertAdjacentElement('beforeend', p_prod_size);
    div_product.insertAdjacentElement('beforeend', p_prod_color);
};


