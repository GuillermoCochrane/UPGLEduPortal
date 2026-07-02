export const item1 = {
  type: "h3",
  info: [
    {
      text: "🎨 Introducción a CSS – Fundamentos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Objetivo: ",
      content: "bold"
    },
    {
      text: "Introducir los conceptos básicos de CSS y aprender a aplicar estilos a las páginas HTML.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "🧠 Sintaxis de CSS",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Cada regla CSS tiene una estructura específica:",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "css",
    content: "selector {\n    propiedad: valor;\n    otra-propiedad: otro-valor;\n}"
  }
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Componentes:",
      content: "bold"
    }
  ]
};

export const item7 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Selector: ",
          content: "bold"
        },
        {
          text: "Indica qué elementos se van a estilizar.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Llaves { }: ",
          content: "bold"
        },
        {
          text: "Delimitan el bloque de declaraciones.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Propiedad: ",
          content: "bold"
        },
        {
          text: "Característica a modificar (color, tamaño, etc.).",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Valor: ",
          content: "bold"
        },
        {
          text: "Valor que se asigna a la propiedad.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Punto y coma (;): ",
          content: "bold"
        },
        {
          text: "Separa cada declaración.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "📌 Formas de Incluir CSS en HTML",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "CSS puede aplicarse de distintas maneras según el contexto y el alcance deseado.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "1. CSS en línea ",
      content: "plain"
    },
    {
      text: "(inline)",
      content: "bold"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Se aplican directamente dentro de la etiqueta ",
      content: "plain"
    },
    {
      text: "HTML, ",
      content: "bold"
    },
    {
      text: "usando el atributo ",
      content: "plain"
    },
    {
      text: "style",
      content: "bold"
    },
    {
      text: ":",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "code",
  info: {
    language: "html",
    content: "<p style=\"color: red; font-size: 20px;\">Texto con estilo inline</p>"
  }
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Ventaja: ",
      content: "bold"
    },
    {
      text: "Aplicación inmediata y específica",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Desventaja: ",
      content: "bold"
    },
    {
      text: "Difícil de mantener y reutilizar",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "2. CSS interno ",
      content: "plain"
    },
    {
      text: "(en el mismo archivo)",
      content: "bold"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Se escribe dentro de una etiqueta ",
      content: "plain"
    },
    {
      text: "<style>",
      content: "bold"
    },
    {
      text: " ubicada en el ",
      content: "plain"
    },
    {
      text: "<head>",
      content: "bold"
    },
    {
      text: " del documento ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "html",
    content: "<head>\n  <style>\n    h1 { color: blue; }\n    .destacado { background: yellow; }\n  </style>\n</head>"
  }
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Ventaja: ",
      content: "bold"
    },
    {
      text: "Estilos organizados en un solo lugar",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "p",
  info: [
    {
      text: "Desventaja: ",
      content: "bold"
    },
    {
      text: "Solo se aplican a esa página específica",
      content: "plain"
    }
  ]
};

export const item20 = {
  type: "h4",
  info: [
    {
      text: "3. Hojas de estilo CSS ",
      content: "plain"
    },
    {
      text: "(en un archivo externo)",
      content: "bold"
    }
  ]
};

export const item21 = {
  type: "p",
  info: [
    {
      text: "Se escribe en un archivo ",
      content: "plain"
    },
    {
      text: ".css",
      content: "bold"
    },
    {
      text: " separado y se vincula al  ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " con la etiqueta ",
      content: "plain"
    },
    {
      text: "<link>",
      content: "bold"
    },
    {
      text: " en el ",
      content: "plain"
    },
    {
      text: "<head>",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "code",
  info: {
    language: "html",
    content: "<link rel=\"stylesheet\" href=\"estilos.css\">"
  }
};

export const item23 = {
  type: "p",
  info: [
    {
      text: "Ventaja: ",
      content: "bold"
    },
    {
      text: "Reutilizable, organizado, fácil mantenimiento",
      content: "plain"
    }
  ]
};

export const item24 = {
  type: "p",
  info: [
    {
      text: "Recomendación: ",
      content: "bold"
    },
    {
      text: "Método preferido para proyectos profesionales, ya que separa contenido de presentación.",
      content: "plain"
    }
  ]
};

