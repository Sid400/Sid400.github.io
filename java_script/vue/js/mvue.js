// VUE компоненты прописываются до определения приложения (new Vue)
// 1.Обьявляем компонент
Vue.component('component1',{
  template:'<div>"Vue отображет компонент"</div>'
} )
// Компонет может содержать свои поля с методами и дата
Vue.component('component2',{
data: {massage3:"Выведены данные из компонента"},
template:'<div>{{data}}</div>'

})



// Для начала будет полезным установитьв браузер плагин Vue Devtools
var app = new Vue({
  el: '#app',
  /* Возможно обращение по классу*/
  // el указание тега к торому будет обращаться VUE, фрамворк будет работать только внутри выбранного тега
  data: {
    /*data содержит обьект с переменными которыми можно оперировать и изменять реактивно через vue*/
    massage: '"Hello world from VUE!"',
    massage2: 'Этот текст связан с Input',
    title: '"Этот описание выведено с помощью v-bind:title"',
    seen: true,
    democlass: "block",
    count: 0,
    arrayofobject: [{
        text: "Pan",
        item_N: 1,
        item_bollean: false
      },
      {
        text: "Cup",
        item_N: 2,
        item_bollean: true
      },
      {
        text: "Bowl",
        item_N: 3,
        item_bollean: false
      },
      {
        text: "Fork",
        item_N: 4,
        item_bollean: true
      },
    ],

  },
  methods: {
    add_count: function () {
      this.count += 1

    }

  }

})