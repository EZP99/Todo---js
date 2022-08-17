import {Todo, TodoList} from './classes/' 
import { crearTodoHtml } from './js/componentes';
import './styles.css'; 
export const todoList = new TodoList();

// const tarea = new Todo('aprender JS');
// todoList.nuevoTodo  (tarea);
// console.log(todoList);
 
// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'abc-1234'); 

// // setTimeout( ()=> {
// //     localStorage.removeItem('mi-key');
// // },1500);



todoList.todos.forEach(crearTodoHtml); 

console.log(todoList.todos );
