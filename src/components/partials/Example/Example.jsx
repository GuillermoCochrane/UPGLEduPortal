import { useMemo, useState } from "react";
import PropTypes from 'prop-types';
import Code from "../Code/Code.jsx";
import './Example.css';

function Example({ Data, height = "auto", width = "100%", title = "Ejemplo" }) {

  const [hasJS, setHasJS] = useState(false);

  // useMemo: Optimiza el renderizado cacheando el resultado hasta que Data cambie 
  const { html, css, js } = useMemo(() => {
    // Obtiene bloques HTML y CSS
    const htmlBlock = Data.find(item => item.info.language === "html"); 
    const cssBlock = Data.find(item => item.info.language === "css");
    const jsBlock = Data.find(item => item.info.language === "javascript");

    // Actualiza estado si hay JS, usando  doble negación para converitir a booleano cualquier tipo de dato que llegue
    setHasJS(!!jsBlock?.info.content); 

    return {
      html: htmlBlock?.info.content || "",
      css: cssBlock?.info.content || "",
      js: jsBlock?.info.content || ""
    };
  }, [Data]);

  // Combina HTML + CSS + JS en un documento completo (si se tiene JS)
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        ${hasJS ? `<script>${js}</script>` : ''}
      </body>
    </html>
  `;

  const sandboxType = hasJS 
  ? "allow-scripts allow-same-origin" 
  : "allow-same-origin";

  const languageTitles = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript"
  };

  return (
    <section className="example-wrapper">
      {/* Renderiza cada bloque de código, con su título de acuerdo a su lenguaje */}
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
    title: PropTypes.string
};

export default Example;