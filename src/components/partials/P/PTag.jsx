import PropTypes from 'prop-types';
function PTag({Data}) {
    return (
        <p>
            {
                Data.map((item, index) => (
                    typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item
                ))
            }
        </p>
    );
}

PTag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default PTag;