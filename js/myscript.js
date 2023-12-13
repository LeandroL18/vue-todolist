const { createApp } = Vue

createApp({
    data() {
        return {
            compito:"",
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTodo(){
            this.todos.unshift({text: this.compito, done: false}),
            this.compito= "";
        },

        delTodo(i){
            this.todos.splice(i, 1)
        }
    }
}).mount('#app')