var app = new Vue({
    el:'#app',
    data:{
        todos:[
            'Fare la spesa',
            'Fare le commissioni',
            'Preparare la cena',
            'Pulire'
        ],
        todosDelete: []
    },
    methods:{
        deleteTodo(index){
            this.todos.splice(index,1)
            this.todosDelete.push(this.todos[index])

        }
    }

});
