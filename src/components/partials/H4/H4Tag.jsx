import PropTypes from 'prop-types';
import Bold from '../Bold/Bold'
import Italic from '../Italic/Italic'
import Mark from '../Mark/Mark'
import { Fragment } from 'react';
function H4Tag({ Data }) {
    return (
        <h4>
            {
                Data.map((item, index) => (
                    <Fragment key={index}>
                        {
                            item.content == "plain" && item.text
                        }
                        {
                            item.content == "bold" && <Bold key={index} Data={item.text} />
                        }
                        {
                            item.content == "italic" && <Italic key={index} Data={item.text} />
                        }
                        {
                            item.content == "mark" && <Mark key={index} Data={item.text} />
                        }
                    </Fragment>
                ))
            }
        </h4>
    );
}

H4Tag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default H4Tag;