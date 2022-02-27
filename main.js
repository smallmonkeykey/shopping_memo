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
        },
        removeItem(name) {
            let items = this.items; // ['skajkj', 'iii']
            // リストからアイテム削除 ['skajkj'] name = "iii"の時
            localStorage.setItem("items", JSON.stringify(items))
          }

    }
})

const vm = app.mount('#app')