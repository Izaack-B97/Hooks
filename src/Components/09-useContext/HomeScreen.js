import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const userContext = useContext( UserContext ) // ContextValue -> Es el contexto componente donde esta el valor que quieres obtener
    console.log(userContext);
    
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
        </div>
    )
}
