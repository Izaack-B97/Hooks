import React, { useRef } from 'react'

import '../01-useState/counter.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handle = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={ inputRef } type="text" className="form-control" placeholder="Su nombre porfavor"/>
            <button className="btn btn-outline-primary mt-5" onClick={ handle }> Focus </button>
        </div>
    )
}
