import PropTypes from 'prop-types';
import './Code.css';

function Code({ data }) {
  return (
    <div className="code-container">
      <pre>
        <code className={`language-${data.language || 'html'}`}>
          {data.content}
        </code>
      </pre>
    </div>
  );
}

Code.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string, // html, css, javascript, etc.
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Code;