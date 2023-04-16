import { useState, useEffect } from 'react';

const ENDPOINT_POST = 'https://jsonplaceholder.typicode.com/posts';

export const usePost = () => {

    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(page < 1 || page > 10) return;
        fetch(`${ENDPOINT_POST}?_page=${page}&_limit=10`)
            .then(resp => {
                if (!resp.ok){
                    throw new Error("No hay Post que cargar");
                }
                return resp.json();
            })
            .then(data => setPost(data))
            .catch(error => console.log(error))
    }, [page])

    return {
        post,
        setPage,
        page
    }
}