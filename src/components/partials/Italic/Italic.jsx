import PropTypes from "prop-types";

function Italic({Data}) {
    return (
        <em>
            {Data}
        </em>
    );
}

Italic.propTypes = {
    Data: PropTypes.string.isRequired
};

export default Italic;