import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ({ target }) => {
        // console.log(e.target.name);
        // console.log(formState);

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}
