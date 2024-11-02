import PropTypes from 'prop-types';
import Bold from '../Bold/Bold'
import { Fragment } from 'react';
function H2Tag({Data, Selector}) {
    return (
        <h2 ref = {Selector}>
            {
                Data.map((item, index) => (
                    <Fragment key = {index}>
                        {
                            item.content == "plain" && item.text
                        }
                        {
                            item.content == "bold" && <Bold key = {index} Data = {item.text} />
                        }
                    </Fragment>
                ))
            }
        </h2>
    );
}

H2Tag.propTypes = {
    Data: PropTypes.array.isRequired,
    Selector: PropTypes.object.isRequired
};

export default H2Tag;