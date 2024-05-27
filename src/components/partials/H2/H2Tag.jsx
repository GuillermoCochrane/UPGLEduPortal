import PropTypes from 'prop-types';
function H2Tag({Data}) {
    return (
        <h2>
            {
                Data.map((item, index) => (
                    typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item
                ))
            }
        </h2>
    );
}

H2Tag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default H2Tag;