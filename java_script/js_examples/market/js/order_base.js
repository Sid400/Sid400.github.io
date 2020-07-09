let order_base = {
    1: {
        order_id: 1,
        customer_id_for_order: 4,
        order_date: "Mar 20 2018",
        order_time: "23:06:17",
        order_basket: [{
            product_id: 3,
            count: 1,
        }],
    },
    2: {
        order_id: 2,
        customer_id_for_order: 6,
        order_date: "Mar 28 2019",
        order_time: "10:06:17",
        order_basket: [{
            product_id: 3,
            count: 1,
        }],
    },
    3: {
        order_id: 3,
        customer_id_for_order: 2,
        order_date: "Mar 01 2013",
        order_time: "13:59:17",
        order_basket: [{
                product_id: 6,
                count: 1,
            },
            {
                product_id: 4,
                count: 2,
            },
            {
                product_id: 3,
                count: 3,
            }
        ],
    },
    4: {
        order_id: 4,
        customer_id_for_order: 2,
        order_date: "Oct 30 2019",
        order_time: "10:06:17",
        order_basket: [{
            product_id: 1,
            count: 12,
        }],
    },
    5: {
        order_id: 5,
        customer_id_for_order: 2,
        order_date: "Dec 28 2019",
        order_time: "10:06:17",
        order_basket: [{
            product_id: 4,
            count: 3,
        }],
    },
    6: {
        order_id: 6,
        customer_id_for_order: 3,
        order_date: "Nov 28 2019",
        order_time: "10:06:17",
        order_basket: [{
            product_id: 3,
            count: 1,
        }],
    },
    check_order_by_id: function (order_id) {
        let a = false;
        for (const key in order_base) {
            if (order_base[key].order_id == order_id) {
                a = true;
            }
        }
        return a;
    },
    return_date_by_id: function (order_id) {
        return this[order_id].order_date;
    },
    return_time_by_id: function (order_id) {
        return this[order_id].order_time;
    },
    return_customer_id_by_id: function (order_id) {
        return this[order_id].customer_id_for_order;
    },
    extract_basket_by_id: function (order_id) {
        return this[order_id].order_basket;
    },
    // extract_each_itembasket_by_id: function (order_id) {
    //     let basket = this[order_id].order_basket;
    //     basket.forEach(element => {
    //         console.log(element);
    //     });
    // },
    return_orders_id_for_customer: function (customer_id) {
        let orders = [];
        for (const key in this) {
            if (this[key].customer_id_for_order == customer_id) {
                orders.push(this[key].order_id);
            }
        }
        if (orders.length == 0) {
            return "no orders";
        } else {
            return orders;
        }
    },
    return_id_for_new_order: function () {
        let id = 0;
        for (const key in order_base) {
            if (key == parseInt(key)) {
                id++
            }

        }
        return id + 1;
    }
};


// console.log(order_base.check_order_by_id(7))
// console.log(order_base.return_date_by_id(6))
// console.log(order_base.return_time_by_id(6))
// console.log(order_base.return_customer_id_by_id(3))
// console.log(order_base.extract_basket_by_id(4))

// console.log((order_base.return_orders_id_for_customer(2)))

// render.create_element('customer_orders_info','div', 'Product_brand', 'Производитель: ')
// render.create_element('customer_orders_info','span', 'Product_brand_data', product_base.return_brand_by_id(element.product_id) )