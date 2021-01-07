import React, { useReducer } from 'react'

import './todo.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer , initialState)

    console.log( todos );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nueva tarea')

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        }

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
                    
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li className="list-group-item" key={ todo.id }>
                                    <p className="text-center">
                                        {i + 1} . -{ todo.desc }
                                    </p>
                                    <button className="btn btn-danger ">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <form className="form-group" onSubmit={ handleSubmit }>
                        <input type="text" className="form-control"  placeholder="Aprender..." autoComplete="off"/> 
                        <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
