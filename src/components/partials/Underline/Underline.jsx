import PropTypes from "prop-types";

function Underline({Data}) {
    return (
        <u>
            {Data}
        </u>
    );
}

Underline.propTypes = {
    Data: PropTypes.string.isRequired
};

export default Underline;