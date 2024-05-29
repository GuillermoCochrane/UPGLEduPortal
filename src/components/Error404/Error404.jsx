import { Link } from "react-router-dom";
function Error404() {   
    return (
        <article className="error-404">
            <h2>Error 404</h2>
            <p>
                No se encontró la página que buscaba.
            </p>
            <Link to="/">Volver al inicio</Link>
        </article>
    );
}

export default Error404;