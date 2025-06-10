import PropTypes from 'prop-types';
import {Fragment} from 'react';
import Bold from '../Bold/Bold'
import OL from "../OL/OLTag";
import UL from "../UL/ULTag";
import H4 from "../H4/H4Tag";
import P from "../P/PTag";
import Figure from "../Figure/Figure";
import Link from "../Links/Links"
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
                            item.content == ("bold") && <Bold key = {index} Data = {item.text} />
                        }
                        {
                            item.content == "italic" && <Bold key = {index} Data = {item.text} />
                        }
                        {
                            item.type == "ul" && <UL Data = {item.info}  key = {index} />
                        }
                        {
                            item.type == "ol" && <OL Data = {item.info}  key = {index} />
                        }
                        {
                            item.type == "h4" && <H4  Data = {item.info}  key = {index} />
                        }
                        {
                            item.type == "p" && <P  Data = {item.info}  key = {index} />
                        }
                        {
                            item.type == "figure" && <Figure  Data = {item.info}  key = {index} />
                        }
                        {
                            item.type == "link" && <Link  Data = {item.info}  key = {index} />
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