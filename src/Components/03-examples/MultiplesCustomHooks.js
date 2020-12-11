import React from 'react'
import { useFetch } from '../../hooks/useFetch';

import './multiples.css';

export const MultiplesCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/2`);
    console.log(state);

    return (
        <div>
            <h1> Multiples CustomHooks </h1>
        </div>
    )
}
