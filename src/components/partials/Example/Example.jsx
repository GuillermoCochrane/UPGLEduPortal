import { useMemo } from "react";
import PropTypes from 'prop-types';
import Code from "../Code/Code.jsx";
import './Example.css';

function Example({ Data }) {
  const { html, css } = useMemo(() => {
    const htmlBlock = Data.find(item => item.info.language === "html"); 
    const cssBlock = Data.find(item => item.info.language === "css");
    return {
      html: htmlBlock?.info.content || "",
      css: cssBlock?.info.content || ""
    };
  }, [Data]);

  // Combina HTML + CSS en un documento completo
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
    </html>
  `;

  const sandboxType = "allow-same-origin"; // Solo HTML/CSS. Para JS futuro: "allow-scripts allow-same-origin"

  return (
    <section className="example-wrapper">
      {
        Data.map((data, index) => {
          if (!data.info) return null;
          if (data.info.language === "html") {
            return (
              <details key={index} open>
                <summary>Código HTML</summary>
                <Code Data={data.info} />
              </details>
            );
          }
          if (data.info.language === "css") {
            return (
              <details key={index} open >
                <summary>Código CSS</summary>
                <Code Data={data.info} />
              </details>
            );
          }
        })
      }
      <details open>
        <summary>Ejemplo renderizado</summary>
        <iframe 
          srcDoc={iframeContent} 
          sandbox={sandboxType}
          className="preview-iframe"
          title="Ejemplo renderizado"
        />
      </details>
    </section>
  );
}

Example.propTypes = {
    Data: PropTypes.array.isRequired
};

export default Example;