import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    //si se desmonta un componente antes de que se ejecute un setter de un estado, lanzara errores
    // para solucionar el problema se utiliza un useRef
    const isMounted = useRef(true);
    
    const [state, setState] = useState({ data: null, loading: true, error: null });

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

        fetch(url)
        .then(res => res.json())
        .then( data => {

            // setTimeout( () =>{

                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                } else {
                    console.log('setState no se llamó')
                }
                
            // }, 4000 )
            

        })
        .catch( () => setState({
            loading: false,
            error: 'No se cargo la info',
            data: null
        }) );
        
    }, [url]);

    return state;

}
