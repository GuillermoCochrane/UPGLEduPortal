export const item1 = {
  type: "h3",
  info: [
    {
      text: "📱 Diseño Responsive",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "El ",
      content: "plain"
    },
    {
      text: "diseño responsive",
      content: "bold"
    },
    {
      text: " permite que una página web se adapte automáticamente a diferentes tamaños de pantalla: celular, tablet, monitor, etc. Se logra con:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "@media queries",
          content: "bold"
        },
        {
          text: ": reglas especiales que aplican estilos solo bajo ciertas condiciones.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Unidades flexibles",
          content: "bold"
        },
        {
          text: " como %, em o rem para que los elementos escalen en relación al contexto.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "No todos los usuarios acceden desde el mismo dispositivo, así que necesitamos que el contenido se cambie el tamaño de acuerdo al cambio de la panatalla. Por ejemplo, un texto grande puede ser legible en una notebook, pero molesto en un celular. Por eso se utiliza el diseño web responsive, para que el diseño se adapte a cada caso, usando lo que se llama una media query. ",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Una ",
      content: "plain"
    },
    {
      text: "media query",
      content: "bold"
    },
    {
      text: " le dice al navegador cuándo aplicar ciertos estilos, según el ancho de pantalla.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo de un bloque responsive: ",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "example",
  height: 110,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"responsive-box\">\n  Soy un bloque responsive\n</div>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: ".responsive-box {\n    background: teal;\n    color: white;\n    margin-top: 10px;\n    padding: 2rem;\n    font-size: 1.2rem;\n    text-align: center;\n}\n\n/* Teléfonos */\n@media (max-width: 600px) {\n  .responsive-box {\n      background: orange;\n      font-size: 1rem;\n  }\n}\n\n/* Tablets */\n@media (min-width: 601px) and (max-width: 1024px) {\n  .responsive-box {\n      background: royalblue;\n  }\n}"
      }
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "En el ejemplo, para celulares:",
      content: "bold"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "css",
    content: "/* Celulares */\n@media (max-width: 600px) {\n  .responsive-box {\n    background: orange;\n    font-size: 1rem;\n  }\n}"
  }
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "👉 Esto significa: si la pantalla mide 600 píxeles de ancho o menos, aplicá fondo naranja y texto más chico.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Y este otro, para tablets: ",
      content: "bold"
    }
  ]
};

export const item12 = {
  type: "code",
  info: {
    language: "css",
    content: "/* Tablets */\n@media (min-width: 601px) and (max-width: 1024px) {\n  .responsive-box {\n    background: royalblue;\n  }\n}"
  }
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "👉 Si la pantalla está entre 601 y 1024 píxeles de ancho (una tablet horizontal, por ejemplo), entonces poné el fondo azul.",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "¿Por qué cambiar el fondo o el tamaño del texto?",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "El objetivo del diseño responsive es que tu web sea ",
      content: "plain"
    },
    {
      text: "legible",
      content: "bold"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "estética",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "cómoda de usar",
      content: "bold"
    },
    {
      text: " sin importar el dispositivo.",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Porque lo que se ve bien en una pantalla grande, puede ser incómodo o exagerado en una pantalla chica. Por ejemplo: Un texto muy grande en celular puede romper el diseño. Un fondo oscuro puede no verse bien si ocupa toda la pantalla de un teléfono. Por eso, ajustar tamaño, color, márgenes o distribución según el tamaño de pantalla permite que tu web sea legible, estética y cómoda en cualquier dispositivo.",
      content: "plain"
    }
  ]
};

