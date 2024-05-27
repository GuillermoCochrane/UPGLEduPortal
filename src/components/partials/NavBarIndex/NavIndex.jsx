import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function NavIndex({linkData}) {
    return (
        <>
            <li>
                <hr />
                <Link to={linkData.link}>
                    {linkData.title}
                </Link>
            </li>
        </>
    );
}

NavIndex.propTypes = {
    linkData: PropTypes.object.isRequired,
}

export default NavIndex;