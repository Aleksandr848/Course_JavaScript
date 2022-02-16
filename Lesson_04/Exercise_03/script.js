/*
* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для
* корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных
* модулей сайта, но в разных местах давал возможность вызывать разные методы.
* */

const catalog = {
    1:{
        vendor_code: 1,
        name: '',
        price: 22,
        color: '',
        size: '',
        available_balance: 2,
    },
    2:{
        vendor_code: 2,
        name: '',
        price: 22,
        color: '',
        size: '',
        available_balance: 4,
    },
    3:{
        vendor_code: 3,
        name: '',
        price: 22,
        color: '',
        size: '',
        available_balance: 2,
    },
    4:{
        vendor_code: 4,
        name: '',
        price: 22,
        color: '',
        size: '',
        available_balance: 2,
    },
}
let catalog_codes = [];
for (let code in catalog) {
    catalog_codes.push(catalog[code].vendor_code);
}
console.log(catalog_codes);

let cart_code = [];
const shopping_cart = {
    products: [
        {
            vendor_code: 1,
            quantity: 3
        },
        {
            vendor_code: 2,
            quantity: 1
        },
    ],

    add(product) {

        if (catalog_codes.indexOf(product) !== -1) {
            for (let i of shopping_cart.products) {
                if (i.vendor_code === product) {
                    i.quantity += 1;
                    break
                } else {
                    shopping_cart.products.push({
                        vendor_code: product,
                        quantity: 1,
                    })
                }
            }
        } else {
            console.log('Такого товара нет - ' + product)
        }


    },

    remove(vendor_code) {
        const index = this.products.findIndex(function (product) {
            return product.vendor_code === vendor_code
        })

        if (index) {
            this.products.splice(index, 1)
        }
    },

    getTotalPrice() {
        let result = 0;

        for (let product of this.products) {
            result += catalog[product.vendor_code].price * product.quantity;
        }

        return result;
    }
}
console.log(shopping_cart.products.length);
console.log(cart_code);
//shopping_cart.add(1);
//shopping_cart.add(1);
//shopping_cart.add(2);
//shopping_cart.add(2);
//shopping_cart.add(2);
//shopping_cart.add(3);
//shopping_cart.add(1);
//shopping_cart.add(2);
shopping_cart.add(4);
console.log(shopping_cart);
const total = shopping_cart.getTotalPrice();

/* выводим итоговую стоимость в консоль */
console.log(total);
console.log(0 in catalog_codes)
