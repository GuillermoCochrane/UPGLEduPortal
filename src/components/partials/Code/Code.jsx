import PropTypes from 'prop-types';
import {Fragment} from 'react';
import Bold from '../Bold/Bold'

function LITag({Data}) {
    return (
        <code>
            {
                Data.info.map((item, index) => (
                    <Fragment key = {index}>
                        {
                            item.content == "plain" && item.text
                        }
                        {
                            item.content == ("bold") && <Bold key = {index} Data = {item.text} />
                        }
                        {
                            item.content == "italic" && <Bold key = {index} Data = {item.text} />
                        }
                    </Fragment>
                ))
            }
        </code>
    );
}

LITag.propTypes = {
    Data: PropTypes.object.isRequired
};

export default LITag;