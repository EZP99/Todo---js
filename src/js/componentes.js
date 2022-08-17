// Referencias en HTML 
const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo');
const btnborrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters')
const anchorfiltros = document.querySelectorAll('.filtro');


import { from } from 'webpack-sources/lib/CompatSource';
//Importaciones 
import {Todo} from '../classes';
import {todoList} from '../index';

export const crearTodoHtml = ( todo ) => {
    const htmlTodo =  `
    <li class=" ${ (todo.completado) ? 'completed': '' } " data-id="${ todo.id} ">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : '' } >
            <label> ${todo.tarea}  </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    

    return div.firstElementChild;
}

// Eventos

txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click',(event) => {
    const nombreElemento = event.target.localName ; //Input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){ //click en el checkbox
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

});

btnborrar.addEventListener('click', () => {
    todoList.eliminarCompletado();
    for(let i=divTodoList.children.length-1; i>=0; i--) {
        const elemento = divTodoList.children[i];
        (elemento.classList.contains('completed')) ? divTodoList.removeChild(elemento) : true;
    }
});

ulFiltros.addEventListener('click', (event) => {
    console.log(event.target.text);
    const filtro = event.target.text;

    anchorfiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    if(!filtro){return;}

    for(const elemento of divTodoList.children){
        console.log(elemento); 
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }

});
