import PropTypes from 'prop-types';
import Figure from '../Figure/Figure';
import Code from '../Code/Code';
import { Fragment } from 'react';
function Answer({Data}) {
  return (
          <details >
            <summary>{Data[0].alt}</summary>
            {
              Data.map ((item, index) => (
                <Fragment key={`${index}-fragment`}>
                  {item.img && <Figure Data={item} />}
                  {item.language && <Code Data={item} />}
                  {!item.language && !item.img && <p>Elemento no renderizable</p>}
                </Fragment>
              ))
            }
          </details>
  );
}

Answer.propTypes = {
  Data: PropTypes.array.isRequired,
}

export default Answer;