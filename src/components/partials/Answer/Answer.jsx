import PropTypes from 'prop-types';
import Figure from '../Figure/Figure';
import Code from '../Code/Code';
function Answer({Data}) {
  return (
          <details >
            <summary>{Data[0].alt}</summary>
            {
              Data.map ((item, index) => (
                <>
                  {item.img && <Figure Data={item} key={`${index}-fig`} />}
                  {item.language && <Code Data={item} key={`${index}-code`} />}
                  {!item.language && !item.img && <p key={`${index}-para`}>Elemento no renderizable</p>}
                </>
              ))
            }
          </details>
  );
}

Answer.propTypes = {
  Data: PropTypes.array.isRequired,
}

export default Answer;