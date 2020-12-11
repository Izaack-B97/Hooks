import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({ x:0, y:0 });
    const { x, y } = coors;

    const moveMouse = (e) => {
        const coords = { x: e.x, y: e.y };
        // setCoors(coords);
        console.log(coords);
    }; 

    window.addEventListener('mousemove', moveMouse);


    useEffect(() => {
        console.log('Componente montado');
        
        return () => {
            // Area de limpieza
            window.removeEventListener('mousemove', moveMouse);
        }
    }, []);

    return (
        <div>
            <h1>Eres genial !</h1>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
