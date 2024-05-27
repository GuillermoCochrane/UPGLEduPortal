import PropTypes from 'prop-types';
function LITag({Data}) {
    return (
        <li>
            {
                Data.info.map((item, index) => (
                    typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item
                ))
            }
        </li>
    );
}

LITag.propTypes = {
    Data: PropTypes.object.isRequired
};

export default LITag;