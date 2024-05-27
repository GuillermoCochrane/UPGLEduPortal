import PropTypes from 'prop-types';
function H3Tag({Data}) {
    return (
        <h3>
            {
                Data.map((item, index) => (
                    typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item
                ))
            }
        </h3>
    );
}

H3Tag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default H3Tag;