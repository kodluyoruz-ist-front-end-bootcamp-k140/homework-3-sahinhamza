import { useEffect, useReducer } from "react"


const initialState = {
    loading: true,
    error: "",
    data: [],
}

// reducer function to fetch data
const reducer = (state, action) => {
    switch (action.type) {
        case ('FETCH_SUCCESS'):
            return {
                loading: false,
                error: false,
                data: action.payload
            }
        case ('FETCH_ERROR'):
            return {
                loading: false,
                error: "Something went wrong!",
                data: [],
            }
        default:
            return (state)
    }

}

//to fetch data
export function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response })
            })
            .catch(e => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [url]);

    return state
}