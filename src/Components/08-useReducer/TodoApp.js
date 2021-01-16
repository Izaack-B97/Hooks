import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './todo.css'

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer , [], init);    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos )) // localstorage solo guarda strings
    }, [ todos ]);

    const handleDelete = ( id ) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch( action );
    }

    const handleToggle = ( id ) => {
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch( action );
    }

    const handleAdd = ( newTodo ) => {
        
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action ); // Es una funcion que sabe que action ejecutar en el reducer
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>Todos</h4>
                    <TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle }/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={ handleAdd }/>
                </div>
            </div>
        </div>
    )
}
