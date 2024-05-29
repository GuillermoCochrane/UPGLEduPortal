import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Bold from '../Bold/Bold'
function H3Tag({Data}) {
    return (
        <h3>
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
                    /* typeof item == "object" ? <strong key = {index} >{item.text}</strong> : item */
                ))
            }
        </h3>
    );
}

H3Tag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default H3Tag;