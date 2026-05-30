import PropTypes from 'prop-types';
import Bold from '../Bold/Bold';
import Italic from '../Italic/Italic';
import Mark from '../Mark/Mark';
import { Fragment } from 'react';
function PTag({ Data }) {
    return (
        <p>
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
        </p>
    );
}

PTag.propTypes = {
    Data: PropTypes.array.isRequired
};

export default PTag;