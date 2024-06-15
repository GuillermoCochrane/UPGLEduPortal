import PropTypes from 'prop-types';
function Answer({Data}) {
  return (
          <details >
            <summary>Ver Solución</summary>
            {
              Data.map ((item, index) => (
                <figure key={index}>
                  <img src={item.img} alt={item.alt} />
                </figure>
              ))
            }
          </details>
  );
}

Answer.propTypes = {
  Data: PropTypes.array.isRequired,
}

export default Answer;