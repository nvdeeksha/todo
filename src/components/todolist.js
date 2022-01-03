import React, { useState } from 'react';
import TodoForm from './todoform';
import Todo from './todo';

function TodoList(){
const [todos, setTodos] = useState([]);
const addTodo = todo => {
if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
return;
}

const newTodos = [todo, ...todos];
setTodos(newTodos);
};
const updateTodo = (Todo,newValue) => {
if (!Todo.text || /^\s*$/.test(Todo.text)) {
    return;
    }
 setTodos(prev =>prev.map(item =>(item.id === TodoId? newValue: item))
 );
}

const removeTodo = id => {
const removeArr = [...todos].filter(todo => todo.id !==id);
 setTodos(removeArr);
};
const completeTodos = id => {
let updateTodos = todos.map(todo =>{
if(todo.id === id) {
todo.isComplete = !todo.isComplete;

}
return todo;
});
setTodos(updateTodos);
};


return(
<div>
<h1>What's the Plan for Today?</h1>
<TodoForm onSubmit={addTodo}/>
<Todo todos={todos} completeTodo={completeTodos} removeTodo={removeTodo}/>
</div>
);
}
export default TodoList;