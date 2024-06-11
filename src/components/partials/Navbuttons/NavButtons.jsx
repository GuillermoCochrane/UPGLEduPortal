import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function NavButtons({ Page }) {
    return (
        <footer>
            
            {
                Page.topic == 1 && Page.class == 1 ?
                    null :
                    Page.topic == 1 ?
                    <Link to={`/class/${Page.class-1}/${Page.lastClassLastTopic}`}>
                        <button >Clase Anterior</button>
                    </Link> :
                        <Link to={`/class/${Page.class}/${Page.topic-1}`}>
                            <button >Anterior</button>
                        </Link>
            }    
            {
                Page.topic == Page.topics && Page.class == Page.classes ?
                null :
                    Page.topic == Page.topics ?
                    <Link to={`/class/${Page.class+1}/1`}>
                        <button >Siguiente Clase</button>
                    </Link> :
                        <Link to={`/class/${Page.class}/${Page.topic+1}`}>
                            <button >Siguiente</button>
                        </Link>
            }
        </footer>
    );
}

NavButtons.propTypes = {
    Page: PropTypes.object.isRequired,
};

export default NavButtons;