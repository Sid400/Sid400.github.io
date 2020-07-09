let render = {
    render_customer_info: function () {
        render.clear('customer_info');
        if (customer_base.check_customer_by_id(customer_id) == false) {
            render.create_element('customer_info', 'span', 'no-customer_base', 'No customer with this ID!');
        }
        else if (customer_id != 0) {
            render.create_element('customer_info', 'span', 'name', 'Name: ');
            render.create_element('customer_info', 'span', 'name_data', customer_base.return_name_by_id(customer_id));
            render.create_element('customer_info', 'span', 'surname', 'Surname: ');
            render.create_element('customer_info', 'span', 'surname_data', customer_base.return_surname_by_id(customer_id));
        }
    },
    render_customer_orders: function () {
        render.clear('customer_orders_info');
        let orders = order_base.return_orders_id_for_customer(customer_id);
        let index = 0;
        if (orders == "no orders") {
            render.create_element('customer_orders_info', 'span', 'no order', 'No orders for customer!');
        }
        else {
            orders.forEach(element => {
                render.create_element('customer_orders_info', 'div', 'order', '');
                render.create_element_foreach('order', 'span', 'order_date', 'Дата заказа: ', index);
                render.create_element_foreach('order', 'span', 'order_date_data', order_base.return_date_by_id(element), index);
                let basket = order_base.extract_basket_by_id(element);
                let summ = 0;
                basket.forEach(element => {
                    render.create_element('customer_orders_info', 'span', 'Product_brand', 'Производитель: ');
                    render.create_element('customer_orders_info', 'span', 'Product_brand_data', product_base.return_brand_by_id(element.product_id));
                    render.create_element('customer_orders_info', 'span', 'Product_brand', 'Модель: ');
                    render.create_element('customer_orders_info', 'span', 'Product_brand_data', product_base.return_model_by_id(element.product_id));
                    render.create_element('customer_orders_info', 'span', 'Product_brand', 'Цена: ');
                    render.create_element('customer_orders_info', 'span', 'Product_brand_data', product_base.return_price_by_id(element.product_id) + "р.");
                    render.create_element('customer_orders_info', 'span', 'Product_count', 'Количество: ');
                    render.create_element('customer_orders_info', 'span', 'Product_count_data', element.count + "шт.");
                    summ += product_base.return_price_by_id(element.product_id) * element.count;
                });
                render.create_element('customer_orders_info', 'span', 'Product_count', 'Сумма заказа: ');
                render.create_element('customer_orders_info', 'span', 'Product_count_data', summ + "р");
                index++;
            });
        }
    },
    clear: function (relative_id) {
        let variable = document.getElementById(relative_id);
        variable.innerHTML = '';
    },
    create_element: function (relative_id, block_name, set_class, text) {
        let variable = document.getElementById(relative_id);
        let block = document.createElement(block_name);
        let block_node = document.createTextNode(text);
        block.setAttribute('class', set_class);
        
        block.appendChild(block_node);
        variable.appendChild(block);
    },
    create_element_foreach: function (relative_id, block_name, set_class, text, count,onclick) {
        let variable = document.getElementsByClassName(relative_id);
        let block = document.createElement(block_name);
        let block_node = document.createTextNode(text);
        block.setAttribute('class', set_class);
        block.setAttribute('onclick', onclick);
        block.appendChild(block_node);
        variable[count].appendChild(block);
    },

    get_customer_id: function () {
        customer_id = document.getElementById("customer_id").value
        console.log(customer_id);
    },
    render_sum_customer: function(){
        render.get_customer_id();
        render.render_customer_info();
        render.render_customer_orders();
    }

    
};

