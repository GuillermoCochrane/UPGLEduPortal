import PropTypes from 'prop-types';
import { useEffect } from 'react';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-http.min';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-markup-templating.min';
import 'prismjs/components/prism-php.min';
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-csharp.min';
import 'prismjs/components/prism-ruby.min';
import 'prismjs/components/prism-swift.min';
import 'prismjs/components/prism-go.min';
import 'prismjs/components/prism-rust.min';

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