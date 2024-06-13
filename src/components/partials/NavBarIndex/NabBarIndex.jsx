import NavIndex from './NavIndex';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function NabBarIndex({data}) {
  const [classID, setClassID] = useState(0);  
  let urlArray = location.pathname.split("/");
  let classIDParams = parseInt(urlArray[4]);

  useEffect(() => {
    classIDParams ? setClassID(classIDParams) : null;
  }, [classIDParams]);


  return (
          <li>
            <details open={data.classId === classID}>
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