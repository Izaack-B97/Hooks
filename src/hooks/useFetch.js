import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const isMounted = useRef(true); // useRef nos servira para saber si un elemento ya ha sido desmontado

    useEffect(() => {
        
        return () => {
            isMounted.current = false;    
        }
        
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        // setTimeout(() => {
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                
                if (isMounted) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } 
            });
        // }, 4000);

    }, [url]);

    return state;

}
