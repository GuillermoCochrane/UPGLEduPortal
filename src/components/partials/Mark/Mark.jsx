import PropTypes from "prop-types";

function Mark({Data}) {
    return (
        <mark>
            {Data}
        </mark>
    );
}

Mark.propTypes = {
    Data: PropTypes.string.isRequired
};

export default Mark;