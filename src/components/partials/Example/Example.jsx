import { useMemo } from "react";
import PropTypes from 'prop-types';
import Code from "../Code/Code.jsx";
import './Example.css';

const BOOTSTRAP_CSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
const BOOTSTRAP_JS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

function Example({ Data, height = "auto", width = "100%", title = "Ejemplo", hasBT = false }) {

  // useMemo: Optimiza el renderizado cacheando el resultado hasta que Data cambie 
  const { html, css, js, hasJS } = useMemo(() => {
    // Obtiene bloques HTML, CSS y JS
    const htmlBlock = Data.find(item => item.info.language === "html");
    const cssBlock = Data.find(item => item.info.language === "css");
    const jsBlock = Data.find(item => item.info.language === "javascript");

    return {
      html: htmlBlock?.info.content || "",
      css: cssBlock?.info.content || "",
      js: jsBlock?.info.content || "",
      hasJS: !!jsBlock?.info.content
    };
  }, [Data]);

  // Inyección condicional de Bootstrap
  const headContent = hasBT
    ? `<link href="${BOOTSTRAP_CSS}" rel="stylesheet">`
    : '';

  const bodyScripts = hasBT
    ? `<script src="${BOOTSTRAP_JS}"></script>`
    : '';

  // Combina HTML + CSS + JS en un documento completo
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        ${headContent}
        <style>${css}</style>
      </head>
      <body style="margin:auto; max-width: 900px;">
        ${html}
        ${bodyScripts}
        ${hasJS ? `<script>${js}</script>` : ''}
      </body>
    </html>
  `;

  // Permisos de sandbox: allow-scripts es necesario si hay JS propio o de Bootstrap
  // allow-forms es necesario para que el botón submit funcione
  const sandboxType = hasJS || hasBT
    ? "allow-scripts allow-same-origin allow-forms allow-modals"
    : "allow-same-origin allow-forms allow-modals";

  const languageTitles = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript"
  };

  return (
    <section className="example-wrapper">
      {/* Renderiza cada bloque de código bloque a bloque */}
      {
        Data.map((data, index) => {
          if (!data.info || !languageTitles[data.info.language]) return null;
          return (
            <details key={index} open>
              <summary>Sintaxis {languageTitles[data.info.language]}</summary>
              <Code Data={data.info} />
            </details>
          );
        })
      }

      <details open>
        <summary>Ejemplo renderizado</summary>
        <iframe
          srcDoc={iframeContent}
          sandbox={sandboxType}
          className="preview-iframe"
          title={title}
          height={height}
          width={width}
        />
      </details>
    </section>
  );
}

Example.propTypes = {
  Data: PropTypes.array.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  hasBT: PropTypes.bool
};

export default Example;