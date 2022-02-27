const app = Vue.createApp({
    data() {
        return {
            inputItem: "",
            items: JSON.parse(localStorage.getItem("items")) || []
        }
    },
    methods: {
        addItem() {
            this.items.push(this.inputItem)
            this.inputItem = ""
            localStorage.setItem("items", JSON.stringify(this.items))
        }
    }
})

const vm = app.mount('#app')