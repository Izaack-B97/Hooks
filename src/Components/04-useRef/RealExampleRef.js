import React, { useState } from 'react'
import { MultiplesCustomHooks } from '../03-examples/MultiplesCustomHooks';

import '../02-useEffect/effect.css';

export const RealExampleRef = () => {
    
    const [ show, setShow ] = useState(false)

    const handle = () => {
        setShow( !show );
    ;}
    
    return (
        <div>
            <h1> RealExampleRef </h1>
            <hr />

            { show && <MultiplesCustomHooks /> }

            <button className="btn btn-primary mt-5" onClick={ handle }>show/hide</button>
        </div>
    )
}
