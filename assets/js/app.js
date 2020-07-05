var app = new Vue({
    el: '#app',
    data: {
        show: false,
        message: 'Hallo World',
        message2: 'Hallo Vue',
        int1: 1,
        int2: 2
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2;
        }
    }
})