import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [ { description }, handleInputChange, reset ] = useForm({ description: '' });

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

        handleAdd( newTodo );
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
                    
            <form className="form-group" onSubmit={ handleSubmit }>
                <input name="description" type="text" className="form-control"  placeholder="Aprender..." autoComplete="off" onChange={ handleInputChange } value={ description }/> 
                <button type="submit" className="btn btn-outline-primary mt-3 btn-block">Agregar</button>
            </form> 
        </>
    )
}
