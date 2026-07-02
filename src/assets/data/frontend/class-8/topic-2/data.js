export const item1 = {
  type: "h3",
  info: [
    {
      text: "🗂️ ¿Qué es el DOM?",
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
      text: "DOM",
      content: "bold"
    },
    {
      text: " (Document Object Model) es una representación estructurada del documento ",
      content: "plain"
    },
    {
      text: "HTML ",
      content: "bold"
    },
    {
      text: "en forma de árbol, donde cada elemento ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " es un objeto que puede ser modificado con ",
      content: "plain"
    },
    {
      text: "JavaScript.",
      content: "bold"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Por ejemplo, manejar el ",
      content: "plain"
    },
    {
      text: "DOM",
      content: "bold"
    },
    {
      text: " nos permite:",
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
          text: "Cambiar el texto de un párrafo.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Modificar estilos como colores o tamaños.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Agregar o eliminar elementos del ",
          content: "plain"
        },
        {
          text: "HTML.",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Responder a eventos como clics, teclas o movimientos del mouse.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "html",
    content: "<html>\n  <body>\n    <h1>Hola</h1>\n    <p id=\"parrafo\">Texto</p>\n  </body>\n</html>"
  }
};

export const item6 = {
  type: "code",
  info: {
    language: "javascript",
    content: "document.getElementById(\"parrafo\").innerText = \"Texto modificado\";"
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "🔍 Métodos comunes para acceder al DOM",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "document.getElementById(\"id\")",
          content: "bold"
        },
        {
          text: ": selecciona un elemento por su identificador.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "document.querySelector(\"selector\")",
          content: "bold"
        },
        {
          text: ": selecciona un elemento por su ",
          content: "plain"
        },
        {
          text: "selector. ",
          content: "bold"
        },
        {
          text: "Para selccionar por id, usamos ",
          content: "plain"
        },
        {
          text: "#id ",
          content: "bold"
        },
        {
          text: "en lugar de ",
          content: "plain"
        },
        {
          text: "selector",
          content: "bold"
        },
        {
          text: " y para clases usamos ",
          content: "plain"
        },
        {
          text: ".class",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "document.querySelectorAll(\"selector\")",
          content: "bold"
        },
        {
          text: ": selecciona todos los elementos ",
          content: "plain"
        },
        {
          text: "selector",
          content: "bold"
        },
        {
          text: " que coincidan con el selector.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "🛠️ Propiedades útiles",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "innerText",
          content: "bold"
        },
        {
          text: ": cambia el texto del elemento.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "innerHTML",
          content: "bold"
        },
        {
          text: ": cambia el HTML interno.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "style",
          content: "bold"
        },
        {
          text: ": cambia estilos en línea.",
          content: "plain"
        }
      ]
    }
  ]
};

