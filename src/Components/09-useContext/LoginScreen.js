import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    const { setUser } = useContext( UserContext );
    
    const handleAssignmentUser = () => {
        setUser({
            id: 123,
            name: 'Isaac Bustamante',
            email: 'izaack.97@gmail.com'
        });
    }
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary" onClick={ handleAssignmentUser }>Login</button>
        </div>
    )
}
