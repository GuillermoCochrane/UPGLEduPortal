import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function NavButtons({ Page, LastPage }) {
    console.log(LastPage);
    return (
        <footer>
            
            {
                Page == 1 ? 
                null :
                <Link to={`/class/${Page-1}`}>
                    <button >Anterior</button>
                </Link>
            }    
            {
                Page == LastPage ? 
                null :
                <Link to={`/class/${Page+1}`}>
                    <button >Siguiente</button>
                </Link>
            }
        </footer>
    );
}

NavButtons.propTypes = {
    Page: PropTypes.number.isRequired,
    LastPage: PropTypes.number.isRequired
};

export default NavButtons;