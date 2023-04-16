import {useNavigate, useParams} from "react-router-dom";
import '../css/detalles.css';
import {useDetalles} from "../hooks";

const DetallesItem = ({ detalle }) => {
    return (
        <section className="details">
            <h1 className="details__title">{detalle.title}</h1>
            <p className="details__body">{detalle.body}</p>
        </section>
    )
}

const ComentariosItems = ({ comentario }) => {
    return (
        <section className="comentarios">
            <p className="comentario__body">{comentario.body}</p>
            <p className="comentarios__name"><strong>{comentario.name} |</strong> {comentario.email}</p>
        </section>
    )
}

export const PostDetails = () => {

    const {id} = useParams();
    const { detalles, comentarios } = useDetalles(id);

    const navigate = useNavigate();

    const onBack = () => {
        navigate("/", {
            replace: true
        })
    }

    return (
        <main className="detalles">
            <DetallesItem detalle={detalles} />
            <button onClick={onBack}>Regresar</button>
            <h3><i>Comentarios</i></h3>
            <hr />
            {
                comentarios?.map(comentario => <ComentariosItems key={comentario.id} comentario={comentario} />)
            }
        </main>
    )
}