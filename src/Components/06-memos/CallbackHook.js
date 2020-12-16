import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/multiples.css';

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };
    
    const increment = useCallback( // Regresa una funcion
        (num) => {
            setCounter(c => c + num);
        },
        [ setCounter ],
    )

    // Otro ejemplo de useCallback
    useEffect(() => {
        // ???
    }, [ increment ])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <ShowIncrement increment={ increment }/>
        </div>
    )
}
