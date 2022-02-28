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
            this.saveToStorage();
        },
        removeItem(event){
            const item = event.target.innerText;
            const index = this.items.indexOf(item);
            this.items.splice(index, 1)
            this.saveToStorage();
        },
        saveToStorage(){
            localStorage.setItem("items", JSON.stringify(this.items))
        }
    }
})

const vm = app.mount('#app')
