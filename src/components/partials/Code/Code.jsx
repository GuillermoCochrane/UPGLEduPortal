import PropTypes from 'prop-types';
import './code.css';

function Code({ Data }) {
  return (
    <div className="code-container">
      <pre>
        <code className={`language-${ 'html'}`}>
          {Data.content}
        </code>
      </pre>
    </div>
  );
}

Code.propTypes = {
  Data: PropTypes.object
};

export default Code;