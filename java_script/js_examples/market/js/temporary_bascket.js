let temporary_bascket = {
    bascket: [],

    put_inbasket: function (prod_id) {
        render.clear('temporary_bascket')

        if (temporary_bascket.allready_in_basket(prod_id) == true) {
            temporary_bascket.bascket[temporary_bascket.find_bascket_item(prod_id)].count++
        } else {
            temporary_bascket.bascket.push({
                product_id: prod_id,
                count: 1
            })
        }
        temporary_bascket.render_temporary_basket();
    },

    allready_in_basket: function (prod_id) {
        let boolean = false
        temporary_bascket.bascket.forEach(element => {

            if (element.product_id == prod_id) {
                boolean = true
            }
        });
        return boolean
    },

    find_bascket_item: function (prod_id) {
        let length = 0
        for (let index = 0; index < temporary_bascket.bascket.length; index++) {
            const element = temporary_bascket.bascket[index];
            if (element.product_id == prod_id) {
                return length
            } else {
                length++
            }
        }
        return length
    },
    add_order_to_order_base: function (params) {
        let order = order_base.return_id_for_new_order()
        let date = Date()
        order_base[order] = {
            order_id: order,
            customer_id_for_order: customer_id,
            order_date: date.substring(4, 21),
            order_time: "10:06:17",
            order_basket: temporary_bascket.bascket
        };
        temporary_bascket.bascket = []
        render.clear('temporary_bascket')
    },
    render_temporary_basket: function () {
        let index = 0
        temporary_bascket.bascket.forEach(element => {
            render.create_element('temporary_bascket', 'div', 'temporary_bascket-product', '')
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand', 'Производитель: ', index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand_data', product_base.return_brand_by_id(element.product_id), index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand', 'Модель: ', index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand_data', product_base.return_model_by_id(element.product_id), index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand', 'Цена: ', index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_brand_data', product_base.return_price_by_id(element.product_id) + "р.", index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_count', 'Количество: ', index);
            render.create_element_foreach('temporary_bascket-product', 'span', 'Product_count_data', element.count + "шт.", index);
            index++
        });
        render.create_element_foreach('temporary_bascket', 'button', 'temporary_bascket-product', 'Оформить заказ', 0, 'temporary_bascket.add_order_to_order_base()')
    },
}