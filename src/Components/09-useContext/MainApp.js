import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {
    
    const user = {
        id: 45454,
        name: 'Isaac',
        email: 'sdsds@gmail.com'
    };

    return (
        <UserContext.Provider value={ user }>
            <AppRouter />
        </UserContext.Provider>
    )
}
