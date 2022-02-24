const app = Vue.createApp({
    data() {
        return {
            shopping: "",
            items: []
        }
    },
    methods: {
        addItem() {
            this.items.push(this.shopping)
            console.log(this.items)
        }
    }
})

const vm = app.mount('#app')