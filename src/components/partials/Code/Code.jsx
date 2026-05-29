import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
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
import 'prismjs/components/prism-scala.min';
import 'prismjs/components/prism-nasm.min';
import './code.css';

function Code({ Data }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    import('prismjs').then(Prism => {
      if (Prism.languages.python) {
        /* --------------------------------------------------------
          Corrección para los comentarios en Python
          - Soporta comentarios de una linea con #
          - Soporta comentarios de varias lineas con """ o '''
        --------------------------------------------------------- */
        Prism.languages.python['comment'] = [
          {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true
          },
          {
            pattern: /("""|''')[\s\S]*?\1/,
            greedy: true
          }
        ];
      }
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
  }, [Data]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(Data.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [Data.content]);

  const language = Data.language || 'html';

  return (
    <figure className="code-container">
      <figcaption className="code-toolbar">
        <aside className="code-toolbar__dots">
          <span className="code-toolbar__dot code-toolbar__dot--red" />
          <span className="code-toolbar__dot code-toolbar__dot--yellow" />
          <span className="code-toolbar__dot code-toolbar__dot--green" />
        </aside>
        <h6 className="code-toolbar__lang">{language}</h6>
        <menu className="code-toolbar__actions">
          <button
            className={`code-toolbar__btn${copied ? ' code-toolbar__btn--copied' : ''}`}
            onClick={handleCopy}
            title="Copiar código"
          >
            {copied ? '✅ Copiado!' : '📋 Copiar'}
          </button>
        </menu>
      </figcaption>
      <pre>
        <code className={`language-${language}`}>
          {Data.content}
        </code>
      </pre>
    </figure>
  );
}

Code.propTypes = {
  Data: PropTypes.object
};

export default Code;