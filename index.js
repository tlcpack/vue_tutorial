var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn Javascript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello again!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello there!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: "#app-7",
    data: {
        grocery: [
            { id: 0, text: 'Veggies' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Meat' }
        ]
    }
})

var vm  = new Vue({
    el: "#example",
    data: {
        message: 'Booger'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
      ]
    }
  })

  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  new Vue({ el: '#components-demo' })