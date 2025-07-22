import { useMemo } from "react";
import PropTypes from 'prop-types';
import './Example.css';

function Example({ Data }) {  // <<< Recibe la prop como objeto (con Data dentro)
  console.log("Data recibida:", Data, Array.isArray(Data));
  const { html, css } = useMemo(() => {
    const htmlBlock = Data.find(item => item.info.language === "html"); // Data ahora es el array
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
      <iframe 
        srcDoc={iframeContent} 
        sandbox={sandboxType}
        className="preview-iframe"
        title="Ejemplo renderizado"
      />
    </section>
  );
}

Example.propTypes = {
    Data: PropTypes.array.isRequired
};

export default Example;