import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
function NavIndex({linkData, classID}) {
    const [topicID, setTopicID] = useState(0);
    const [active, setActive] = useState(false);
    let urlArray = location.pathname.split("/");
    let topicIDParams = parseInt(urlArray[5]);
    let classIDParams = parseInt(urlArray[4]);

    useEffect(() => {
        topicIDParams ? setTopicID(topicIDParams) : null;
    }, [topicIDParams]);

    useEffect(() => {  
        linkData.topicId === topicID && classID === classIDParams
        ? setActive(true) : setActive(false);
    }, [linkData.topicId, topicID, classID, classIDParams]);

    return (
        <li className={active ? 'current' : ''}>
            <hr />
            <Link to={linkData.link } className={active ? 'current' : ''}>
                {linkData.title}
            </Link>
        </li>
    );
}

NavIndex.propTypes = {
    linkData: PropTypes.object.isRequired,
    classID: PropTypes.number.isRequired,
}

export default NavIndex;