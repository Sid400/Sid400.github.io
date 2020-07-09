let product_base = {
    1: {
        product_id: 1,
        product_brand: "Apple",
        product_model: "6s",
        product_price: 1500,
    },
    2: {
        product_id: 2,
        product_brand: "Nokia",
        product_model: "lumia",
        product_price: 1000,
    },
    3: {
        product_id: 3,
        product_brand: "Samsung",
        product_model: "Galaxy",
        product_price: 1100,
    },
    4: {
        product_id: 4,
        product_brand: "Nokia",
        product_model: "3310",
        product_price: 9999,
    },
    5: {
        product_id: 5,
        product_brand: "OnePlus",
        product_model: "5T",
        product_price: 1350,
    },
    6: {
        product_id: 6,
        product_brand: "BlackBery",
        product_model: "1",
        product_price: 1250,
    },
    check_product_by_id: function (product_id) {
        let a = false;
        for (const key in product_base) {
            if (product_base[key].product_id == product_id) {
                a = true;
            }
        }
        return a;
    },
    return_brand_by_id: function (product_id) {
        return product_base[product_id].product_brand;
    },
    return_model_by_id: function (product_id) {
        return product_base[product_id].product_model;
    },
    return_price_by_id: function (product_id) {
        return product_base[product_id].product_price;
    },
    render_cataloge: function () {
        for (const key in product_base) {
            if (key == parseInt(key)) {
                render.create_element('cataloge', 'div', 'product', '')
                render.create_element_foreach('product', 'span', 'Product_brand', 'Производитель: ', key - 1);
                render.create_element_foreach('product', 'span', 'Product_brand_data', product_base.return_brand_by_id(key), key - 1);
                render.create_element_foreach('product', 'span', 'Product_brand', 'Модель: ', key - 1);
                render.create_element_foreach('product', 'span', 'Product_brand_data', product_base.return_model_by_id(key), key - 1);
                render.create_element_foreach('product', 'span', 'Product_brand', 'Цена: ', key - 1);
                render.create_element_foreach('product', 'span', 'Product_brand_data', product_base.return_price_by_id(key) + "р.", key - 1);
                render.create_element_foreach('product', 'button', 'ordered', 'В корзину', key - 1, 'temporary_bascket.put_inbasket(' + key + ')');

            }
        }
    }
};