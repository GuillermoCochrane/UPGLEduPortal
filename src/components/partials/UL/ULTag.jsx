import PropTypes from 'prop-types';
import LI from '../LI/LITag';

function ULTag({Data}) {
  return (
    <ul>
        {
          Data.map((liData,index) => 
          <LI key={index} Data={liData}/>) 
        }
    </ul>
  );
}

ULTag.propTypes = {
  Data: PropTypes.array.isRequired,
}
export default ULTag; 