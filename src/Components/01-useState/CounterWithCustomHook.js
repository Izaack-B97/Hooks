import React, { Fragment } from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, reset, decrement } = useCounter(100);

    return (
        <Fragment>
            <h1>Counter with hook { state }</h1>
            <hr />

            <button onClick={ () => increment(1) } className="btn btn-primary"> +1 </button>
            <button onClick={ reset } className="btn btn-primary"> Reset </button>
            <button onClick={ () => decrement(1) } className="btn btn-primary"> -1 </button>

        </Fragment>
    )
}
