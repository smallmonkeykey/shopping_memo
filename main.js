const App1 = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment: function () {
            this.count += 1
        }
    }
}

Vue.createApp(App1).mount('#app')