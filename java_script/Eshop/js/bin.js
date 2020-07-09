class Bin {
    constructor() {
        this.basket = [];
    }

    add_item(product_id) {
        if (this.find_item(product_id) === false) {
            return this.basket.contents.push({
                id_product: product_id,
                quantity: 1
            })
        } else {
            return this.basket.contents[this.find_item(product_id)].quantity += 1

        }
    }

    delete_item(product_id) {
        if (this.basket.contents[this.find_item(product_id)].quantity > 1) {
            return this.basket.contents[this.find_item(product_id)].quantity -= 1
        } else {
            return this.basket.contents = this.basket.contents.slice(this.find_item(product_id), this.find_item(product_id) + 1)
        }
    }

    find_item(product_id) {
        for (let i = 0; i < this.basket.contents.length; i++) {
            const element = this.basket.contents[i];
            if (element.id_product === product_id) {
                return i
            } else {
                false
            }
        }
    }

    fetchBasket(cb) {
        makeGETRequest2(API_URL, API_apend_baskettlist).then((data) => {
            this.basket = JSON.parse(data)
            cb()
        })
    }

}

let bin1 = new Bin

bin1.fetchBasket(() => {
    console.log(bin1.basket)
})


setTimeout(() => {
    console.log(bin1.find_item(456));
}, 500);

setTimeout(() => {
    console.log(bin1.add_item(456));
}, 505);

setTimeout(() => {
    console.log(bin1.add_item(456));
}, 505);
setTimeout(() => {
    console.log(bin1.add_item(456));
}, 505);
setTimeout(() => {
    console.log(bin1.add_item(456));
}, 505);

setTimeout(() => {
    bin1.delete_item(123)
}, 505);
setTimeout(() => {
    console.log(bin1.basket);
}, 510);






class BinItem {
    constructor() {
        this.product_id = product_id;
        this.count = count;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }

    calc_sum() {
        let sum = 0
        this.goods.forEach(element => {
            sum += element.price


        });
        return sum

    }
}