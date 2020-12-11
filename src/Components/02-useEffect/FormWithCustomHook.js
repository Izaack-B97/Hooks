import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.css';

export const FormWithCustomHook = () => {

    const [stateForm, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = stateForm;

    useEffect(() => {
        console.log('El email ha cambiado');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(stateForm);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre porfavor !" autoComplete="off" value={ name } onChange={ handleInputChange }/>
                <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={ email } onChange={ handleInputChange }/>
                <input type="password" name="password" className="form-control" placeholder="**************" value={ password } onChange={ handleInputChange }/>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    )
}
