import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './multiples.css';

export const MultiplesCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                // Validacion ternaria
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            <p>loading...</p>
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer mt-1">{ author }</footer>
                        </blockquote>
                    )
            }
            
            <button className="btn btn-primary" onClick={ increment }>Siguiente Quote</button>
        </div>
    )
}
