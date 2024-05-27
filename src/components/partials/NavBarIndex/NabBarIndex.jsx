import NavIndex from './NavIndex';
import PropTypes from 'prop-types';
function NabBarIndex({data}) {
  return (
          <li>
            <details >
              <summary>{data.summary}</summary>
              <ol>
                {
                  data.links.map((linkData,index) => 
                    <NavIndex key={index} linkData={linkData}/>) 
                }
              </ol>
            </details>
          </li>
  );
}

NabBarIndex.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NabBarIndex;