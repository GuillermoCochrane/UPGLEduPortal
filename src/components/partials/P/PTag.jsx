import PropTypes from 'prop-types';
import Bold from '../Bold/Bold'
import { Fragment } from 'react';
function PTag({Data}) {
    return (
        <p>
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
        </p>
    );
}

PTag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default PTag;