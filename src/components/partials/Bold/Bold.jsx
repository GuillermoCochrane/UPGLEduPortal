import PropTypes from 'prop-types';
function    Bold({Data}) {
    return (
        <strong>
            {Data}
        </strong>
    );
}

Bold.propTypes = {
    Data: PropTypes.string.isRequired
};
export default Bold;