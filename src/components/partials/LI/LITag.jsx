import PropTypes from 'prop-types';
import {Fragment} from 'react';
import Bold from '../Bold/Bold'
import OL from "../OL/OLTag";
import UL from "../UL/ULTag";
function LITag({Data}) {
    return (
        <li>
            {
                Data.info.map((item, index) => (
                    <Fragment key = {index}>
                        {
                            item.content == "plain" && item.text
                        }
                        {
                            item.content == "bold" && <Bold key = {index} Data = {item.text} />
                        }
                        {
                            item.type == "ul" && <UL Data = {item.info} />
                        }
                        {
                            item.type == "ol" && <OL Data = {item.info} />
                        }
                    </Fragment>
                ))
            }
        </li>
    );
}

LITag.propTypes = {
    Data: PropTypes.object.isRequired
};

export default LITag;