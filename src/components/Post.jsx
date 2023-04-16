import {Link} from "react-router-dom";

import {usePost} from "../hooks";
import '../css/App.css';

const PostList = ({ item }) => {
    const body = item.body.split(" ", 7).join(" ");
    return (
        item && <section className="post">
                    <h2 className="post__title">{item.title}</h2>
                    <article className="post__container">
                        <p className="post__body">{body} ...</p>
                        <Link to={`/detalles/${item.id}`}>Ver más</Link>
                    </article>
                </section>
    )
}

export const Post = () => {
    const { post , setPage, page } = usePost();
    return(
        <main>
            <h1 className="title-post">Posts list</h1>
            {
                post?.map(item => <PostList key={item.id} item={item} />)
            }
            <section className="buttons">
                <button onClick={() => setPage(page - 1)}>Anterior</button>
                <button onClick={() => setPage(page + 1)}>Siguiente</button>
            </section>
        </main>
    )
}