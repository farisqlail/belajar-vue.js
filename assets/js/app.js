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
        message3: null
    }
})