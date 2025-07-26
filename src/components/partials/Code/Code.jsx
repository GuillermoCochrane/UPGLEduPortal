import PropTypes from 'prop-types';
import { useEffect } from 'react';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // o el tema que elijas
import 'prismjs/components/prism-http.min'; //podemos añadir mas lenguajes
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-javascript.min';
import './code.css';

function Code({ Data }) {
  
  useEffect(() => {
  import('prismjs').then(Prism => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  });
}, [Data]);

  return (
    <div className="code-container">
      <pre>
        <code className={`language-${Data.language || 'html'}`}>
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