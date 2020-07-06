var app = new Vue({
    el: '#app',
    data: {
        show: false,
        message: 'Hallo World',
        message2: 'Hallo Vue',
        int1: 1,
        int2: 2,
        result: null,
        kilometers: 0,
        meters: 0
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumProccess: function(){
            return this.result = this. int1 + this.int2;
        }
    },
    watch: {
        kilometers: function(val){
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function(val){
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }
});

var form = new Vue({
    el: '#form',
    data: {
        message3: '',
        textarea: '',
        radiobutton: '',
        select: []
    }
})

var bind = new Vue({
    el: '#bind',
    data: {
        imgFile: 'assets/img/1965420.jpg',
        link: 'https://google.com',
        styleFont: 'color: red; font-size: 20px'
    }
})

var button = new Vue({
    el: '#button',
    data: {
        message: ''
    },
    methods: {
        showAlert: function(){
            alert('The button has been clicket to call this function');
        }
    }
});

var key = new Vue({
    el: '#key',
    data: {
        message1: ''
    },
    methods: {
        escKey: function() {
            this.message1 = 'You pressing esc key'
        }
    }
});

var array2 = new Vue({
    el: '#array2',
    data: {
        content: '',
        vehicles: ['car', 'motorcycle', 'bike']
    },
    methods: {
        addVehicles: function(){
            this.vehicles.push(this.content);
            this.content = '';
        },
        removeVehicles: function(index){
            this.vehicles.splice(index,1);
        }
    }
});

var array3 = new Vue({
    el: '#array3',
    data: {
        vehicles: [
            {type: 'car', brand: 'toyota', color: 'red'},
            {type: 'motorcycle', brand: 'yamaha', color: 'blue'},
            {type: 'bike', brand: 'polygon', color: 'orange'}
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

Vue.component('greeting', {
    template: '<b>Hello, Vue! From Component.</b>'
});

Vue.component('button-counter', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">you click me{{ times }} clicked</button>'
});

var component = new Vue({
    el: '#component',
});

Vue.component('blog-post', {
    props: ['post'],
    template: 
    `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
})

var component1 = new Vue({
    el: '#component1',
    data: {
        posts: [
            {id: 1, title: 'My journey with vue', content: 'fisrt data'},
            {id: 2, title: 'Blogging with vue', content: 'second data'}        
        ]
    }
})