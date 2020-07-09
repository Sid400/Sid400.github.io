class goods {
  constructor() {
    this.goods = [];
  }

  renderGoodsItem = (product_name = "No name", price = "Price has been lost") => {
    return `<div class="goods-item">
    <h3 class="goods-item_name">${product_name}</h3>
    <p class="goods-item_price">${price} ₽</p>
  </div>`;
  }
  renderGoodsList = (list) => {
    list.map(item =>
      document.querySelector('.goods-list').insertAdjacentHTML('beforeend', this.renderGoodsItem(item.product_name, item.price)));
  }
  // feth_goods(callback) {
  //   makeGETRequest(API_URL, API_apend_priductlist).then( (goods1) => {
  //     this.goods = JSON.parse(goods1)

  //     callback()
  //   })
  // }

  // }
  feth_goods() {
    return new Promise((resolve, reject) => {
      makeGETRequest(API_URL, API_apend_priductlist).then((goods1) => {
        this.goods = JSON.parse(goods1)
        if (xhr.status === 200) {
          resolve(this.goods)
        } else {
          reject(console.log(ERROR))
        }

      })
    })
  }
}

let goods1 = new goods

// goods1.feth_goods(() =>
// goods1.renderGoodsList(goods1.goods) )

goods1.feth_goods().then(() => {
  goods1.renderGoodsList(goods1.goods)
})


setTimeout(() => {
  console.log(goods1);
}, 100);