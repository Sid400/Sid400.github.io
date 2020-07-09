Vue.component('cart_block', {
  template: '<div class="goods-item"><slot></slot></div>'
})

Vue.component('item_name', {
  props: ['id', 'extratdata'],
  template: '<h3 class="goods-item_name">{{extratdata(id,"product_name")}}</h3>'
})

Vue.component('item_price', {
  props: ['id', 'extratdata'],
  template: '<p class="goods-item_price">Цена: {{extratdata(id,"price")}} ₽</p>'
})

Vue.component('button_react', {
  props: ['id', 'action', ],
  template: '<button class="button" v-on:click="action(id)"><slot></slot></button>'
})

Vue.component('bin_block', {
  template: '<div class="goods-item"><slot></slot></div>'
})

Vue.component('bin_count_item', {
  props: ['count'],
  template: '<div class="goods-item_count">{{count}}</div>'
})

Vue.component('bin_totalprice_item', {
  props: ['count', 'id', 'extratdata'],
  template: '<div class="goods-item_totalprice">{{count *extratdata(id,"price") }}</div>'
})

Vue.component('search_panel', {
  props: ['value', 'search_goods'],
  template: '<div class="search-panel"><input type="text" v-model="valueModel"><button class="button search-button" v-on:click="search_goods">Искать </button></div>',
  computed: {
    valueModel: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit("input", newValue)
      }
    }
  }
})


Vue.component('error_window', {
  props: ['error', 'message'],
  template: '<div class="error_window"><div class="error_massage">{{message}}</div></div>'
})





var app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filtredGoods: [],
    bin: [],
    searchline: "",
    isVisibleCart: false,
    server_error: false,
    server_error_message: "",

  },

  methods: {
    makeGETRequest(body_API, apend_API) {
      return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) return;
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            // reject(console.log(`Error ${xhr.status}`),);
            reject(true)
          }


        }
        xhr.open("GET", body_API + apend_API, );
        xhr.send();
      })
    },

    log(test_property) {
      console.log(test_property);

    },
    search_goods() {
      const regexp = new RegExp(this.searchline, "i")
      return this.filtredGoods = this.goods.filter(good => regexp.test(good.product_name))
    },

    extract_dataproduct_by_id(id, extract) {
      for (let i = 0; i < this.goods.length; i++) {
        const element = this.goods[i];
        if (element.id_product === id) {
          return element[extract]
        } else {
          false
        }
      }
    },

    find_id_in_bin(id) {
      for (let i = 0; i < this.bin.length; i++) {
        const element = this.bin[i];
        if (element.id === id) {
          return i
        } else {
          false
        }
      }
    },

    add_cart(id) {
      if (this.find_id_in_bin(id) >= 0) {
        this.bin[this.find_id_in_bin(id)].count += 1
      } else {
        this.bin.push({
          id: id,
          count: 1
        })
      }

    },
    remove_cart(id) {
      if (this.bin[this.find_id_in_bin(id)].count > 1) {
        this.bin[this.find_id_in_bin(id)].count -= 1
      } else {
        this.bin.splice([this.find_id_in_bin(id)], 1)
      }
    }
  },
  computed: {

  },
  mounted() {
    this.makeGETRequest(API_URL, API_apend_priductlist).then((goods) => {
      this.goods = goods;
      this.filtredGoods = goods;

    }).catch((er) => {
      this.server_error = er;
      console.log(`Error ${xhr.status}`)
      this.server_error_message = xhr.responseText;
      console.log(this.server_error_message);

    })
  }
})