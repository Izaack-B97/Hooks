import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [stateForm, setStateForm] = useState(initialState)

    const reset = () => {
        setStateForm( initialState );
    }

    const handleInputChange = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name]: target.value
        });
    };

    return [
        stateForm,
        handleInputChange,
        reset
    ];

}
