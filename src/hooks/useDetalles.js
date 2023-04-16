import React, {useState, useEffect} from 'react';

const ENDPOINT_POST = 'https://jsonplaceholder.typicode.com/posts';
export const useDetalles = (id) => {

    const [detalles, setDetalles] = useState({});
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        fetch(`${ENDPOINT_POST}/${id}`)
            .then(resp => {
                if (!resp.ok){
                    throw new Error("No hay detalles que cargar.")
                }
                return resp.json()
            })
            .then(data => setDetalles(data))
    }, [id])

    useEffect(() => {
        fetch(`${ENDPOINT_POST}/${id}/comments`)
            .then(resp => {
                if (!resp.ok){
                    throw new Error("No hay comentarios que cargar.");
                }
                return resp.json();
            })
            .then(data => setComentarios(data))
    }, [id])

    return {
        detalles,
        comentarios
    }
}