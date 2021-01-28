var app = new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todos: [
            'Fare la spesa',
            'Fare le commissioni',
            'Preparare la cena',
            'Pulire'
        ],
        todosDelete: []
    },
    methods: {
        addTodo(){
            if(this.newTodo.length < 4){
                alert('la lunghezza deve essere maggiore di 3 caratteri')
            }else{
            this.todos.push(this.newTodo);
            this.newTodo='';}

        },
        deleteTodo(index) {
            this.todosDelete.push(this.todos[index]);
            this.todos.splice(index, 1);

        },
        restoreTodo(index){
            this.todos.push(this.todosDelete[index]);
            this.todosDelete.splice(index,1)
        },
        allDelete(todosDelete){
            this.todosDelete.splice(0,todosDelete.length);
        },
        finalDelete(index){
            this.todosDelete.splice(index,1)
        }
    }

});
