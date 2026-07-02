export const item1 = {
  type: "h3",
  info: [
    {
      text: "🧩 Selectores, Reglas y Estilización Básica",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los selectores permiten elegir los elementos HTML a los que se les aplicarán estilos. Existen distintos tipos de selectores para distintas situaciones.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Selectores Básicos",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Selector de etiqueta: ",
          content: "bold"
        },
        {
          text: "Aplica a todos los elementos de un tipo específico.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "css",
            content: "p {\n  color: blue;\n}"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Selector de clase: ",
          content: "bold"
        },
        {
          text: "Aplica a todos los elementos con una clase determinada ",
          content: "plain"
        },
        {
          text: "(class = '.nombreClase').",
          content: "bold"
        },
        {
          type: "code",
          info: {
            language: "css",
            content: ".mi-clase {\n  font-size: 18px;\n}"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Selector de ID: ",
          content: "bold"
        },
        {
          text: "Aplica a un único elemento con un ID específico ",
          content: "plain"
        },
        {
          text: "(id = '#nombreID').",
          content: "bold"
        },
        {
          type: "code",
          info: {
            language: "css",
            content: "#mi-id {\n  background: red;\n}"
          }
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Combinar Selectores",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "También podemos combinarlos para mayor precisión:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "css",
    content: "article p {\n  color: gray;\n}"
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Este ejemplo aplica estilo solo a los ",
      content: "plain"
    },
    {
      text: "<p>",
      content: "bold"
    },
    {
      text: " dentro de un ",
      content: "plain"
    },
    {
      text: "<article>",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "h3",
  info: [
    {
      text: "Estilización básica",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Propiedades de Color y Fondo",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "color",
          content: "bold"
        },
        {
          text: ": Color del texto",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "background-color",
          content: "bold"
        },
        {
          text: ": Color de fondo",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "background-image",
          content: "bold"
        },
        {
          text: ": Imagen de fondo",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "background-gradient",
          content: "bold"
        },
        {
          text: ": Degradados",
          content: "plain"
        }
      ]
    }
  ]
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "Tipografía",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "font-family",
          content: "bold"
        },
        {
          text: ": Color de fondo",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "font-size",
          content: "bold"
        },
        {
          text: ": Tamaño de fuente",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "font-weight",
          content: "bold"
        },
        {
          text: ": Grosor ",
          content: "plain"
        },
        {
          text: "(bold, normal)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "font-style",
          content: "bold"
        },
        {
          text: ": Estilo ",
          content: "plain"
        },
        {
          text: "(italic, normal)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "text-align",
          content: "bold"
        },
        {
          text: ": Alineación del texto",
          content: "plain"
        }
      ]
    }
  ]
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Bordes y Espaciados",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "border",
          content: "bold"
        },
        {
          text: ": Borde del elemento",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "margin",
          content: "bold"
        },
        {
          text: ": Espacio exterior",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "padding",
          content: "bold"
        },
        {
          text: ": Espacio interior",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "border-radius",
          content: "bold"
        },
        {
          text: ": Esquinas redondeadas",
          content: "plain"
        }
      ]
    }
  ]
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo Visual",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "example",
  info: [
    {
      info: {
        language: "html",
        content: "<div class=\"demo-elemento\">\n  Este elemento tiene: color de fondo degradado, borde, padding, margin, esquinas redondeadas y sombra\n</div>"
      }
    },
    {
      info: {
        language: "css",
        content: ".demo-elemento {\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n  color: white;\n  padding: 20px;\n  border: 3px solid #2c3e50;\n  border-radius: 8px;\n  margin: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-family: sans-serif;\n  font-weight: bold;\n}"
      }
    }
  ],
  height: "95"
};

