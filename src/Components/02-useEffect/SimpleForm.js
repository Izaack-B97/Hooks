import React, { Fragment, useEffect, useState } from 'react'
import { Message } from './Message';

import './effect.css';

export const SimpleForm = () => {

    const [stateForm, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = stateForm;

    useEffect(() => {
        // console.log('Eyeye');
    }, []);

    useEffect(() => {
        // console.log('El stateForm cambio');
    }, [stateForm]);

    useEffect(() => {
        // console.log('El email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...stateForm,
            [target.name]: target.value
        });

    }

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre porfavor !" autoComplete="off" value={ name } onChange={ handleInputChange }/>
                <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={ email } onChange={ handleInputChange }/>
            </div>

            { (name === '123') && <Message /> }
        </Fragment>
    )
}
