import PropTypes from 'prop-types';
function H4Tag({Data}) {
    return (
        <h4>
            {
                Data.map((item, index) => (
                    typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item
                ))
            }
        </h4>
    );
}

H4Tag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default H4Tag;