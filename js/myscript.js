const { createApp } = Vue

createApp({
    data() {
        return {
            error: false,
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
            if(this.compito.length >= 5){
                this.error= false;
                this.todos.unshift({text: this.compito, done: false});
                this.compito= "";
            }
            else this.error= true;
        },

        delTodo(i){
            this.todos.splice(i, 1)
        },

        sbarra(i){
            if (this.todos[i].done === true) this.todos[i].done = false;
            else this.todos[i].done = true;
        }
    }   
}).mount('#app')