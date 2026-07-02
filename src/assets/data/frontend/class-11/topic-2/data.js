export const item1 = {
  type: "h3",
  info: [
    {
      text: "🪟 Sistema de Grid: 12 Columnas Flexibles",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "El sistema de grid de Bootstrap divide la pantalla en 12 columnas invisibles. Puedes usar clases para definir cuántas columnas ocupa cada elemento.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "📋 Concepto",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "La pantalla se divide en 12 columnas mediante clases ",
      content: "plain"
    },
    {
      text: ".col-*",
      content: "bold"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "📱Breakpoints",
      content: "bold"
    }
  ]
};

export const item6 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "col",
          content: "bold"
        },
        {
          text: ": Extra pequeño (móvil)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "col-sm",
          content: "bold"
        },
        {
          text: ": Pequeño",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "col-md",
          content: "bold"
        },
        {
          text: ": Mediano",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "col-lg",
          content: "bold"
        },
        {
          text: ": Grande",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "col-xl",
          content: "bold"
        },
        {
          text: ": Extra grande",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "📚 Estructura básica",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "example",
  hasBT: true,
  title: "📚 Estructura básica",
  height: "195px",
  width: "500px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"container text-center mb-0\">\n  <div class=\"row\">\n    <div class=\"col bg-primary\">col</div>\n    <div class=\"col-12 bg-secondary\">col-12</div>\n    <div class=\"col-11 bg-success\">col-11</div>\n    <div class=\"col-1 bg-danger\">col1</div>\n    <div class=\"col-10 bg-warning\">col-10</div>\n    <div class=\"col-2 bg-info\">col-2</div>\n    <div class=\"col-9 bg-light\">col-9</div>\n    <div class=\"col-3 bg-dark text-white\">col-3</div>\n    <div class=\"col-8 bg-danger\">col-8</div>\n    <div class=\"col-4 bg-success\">col-4</div>\n    <div class=\"col-7 bg-info\">col-7</div>\n    <div class=\"col-5 bg-warning\">col-5</div>\n    <div class=\"col-6 bg-secondary\">col-6</div>\n    <div class=\"col-6 bg-primary\">col-6</div>\n  </div>\n</div>"
      }
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "↔️ Responsive",
      content: "bold"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Combina clases: ",
      content: "bold"
    },
    {
      text: ".col-12 col-md-6 col-lg-4",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "⚡ Actividad: ",
      content: "bold"
    },
    {
      text: "Layout responsivo",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Crea un layout con header, contenido y footer responsivo usando el grid.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "answer",
  info: {
    title: "Crear un layout responsivo",
    content: [
      {
        type: "example",
        height: "200",
        width: "100%",
        hasBT: true,
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<div class=\"container\">\n  <header class=\"row\">\n    <div class=\"col-12\">Header</div>\n  </header>\n  <main class=\"row\">\n    <div class=\"col-md-8\">Contenido</div>\n    <div class=\"col-md-4\">Sidebar</div>\n  </main>\n  <footer class=\"row\">\n    <div class=\"col-12\">Footer</div>\n  </footer>\n</div>"
            }
          }
        ]
      }
    ]
  }
};

