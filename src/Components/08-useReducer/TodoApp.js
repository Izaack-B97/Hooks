import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm' 

import './todo.css'

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer , [], init);
    const [ { description }, handleInputChange, reset ] = useForm({ description: '' });
    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos )) // localstorage solo guarda strings
    }, [ todos ]);


    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }


        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action ); // Es una funcion que sabe que action ejecutar en el reducer
        reset();
    
    }

    const handleDelete = ( id ) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch( action );
    }

    const handleToggle = ( id ) => {
        console.log( id )
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch( action );
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>Todos</h4>
                    
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li className="list-group-item" key={ todo.id }>
                                    <p className={ todo.done && 'complete' } onClick={ () => handleToggle( todo.id ) }>
                                        {i + 1} . -{ todo.desc }
                                    </p>
                                    <button className="btn btn-danger" onClick={ () => handleDelete( todo.id ) }>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <form className="form-group" onSubmit={ handleSubmit }>
                        <input name="description" type="text" className="form-control"  placeholder="Aprender..." autoComplete="off" onChange={ handleInputChange } value={ description }/> 
                        <button type="submit" className="btn btn-outline-primary mt-3 btn-block">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
