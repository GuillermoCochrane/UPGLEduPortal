import PropTypes from 'prop-types';
import LI from '../LI/LITag';

function OLTag({Data}) {
  return (
    <ol>
        {
          Data.map((liData,index) => 
          <LI key={index} Data={liData}/>) 
        }
    </ol>
  );
}

OLTag.propTypes = {
  Data: PropTypes.array.isRequired,
}
export default OLTag; 