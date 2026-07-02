export const item1 = {
  type: "h3",
  info: [
    {
      text: "📝 Tablas y Formularios",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "📋 Tipos de tablas",
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
          text: "table",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "table-striped",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "table-bordered",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "table-hover",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "table-dark",
          content: "bold"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "📝 Formularios",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Usa ",
      content: "plain"
    },
    {
      text: "form-control",
      content: "bold"
    },
    {
      text: " para inputs y selects, ",
      content: "plain"
    },
    {
      text: "btn-primary",
      content: "bold"
    },
    {
      text: " para enviar.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "📶 Alineación",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Formularios horizontales o verticales con ",
      content: "plain"
    },
    {
      text: "row",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "col",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "⚡ Actividad: ",
      content: "bold"
    },
    {
      text: "Tabla y formulario",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Crea una tabla de productos y un formulario de registro en grilla.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "answer",
  info: {
    title: "Crear una tabla y formulario",
    content: [
      {
        type: "example",
        height: "150",
        hasBT: true,
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<table class=\"table table-striped w-75\">\n  <thead>\n    <tr>\n      <th>Producto</th>\n      <th>Precio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Manzana</td>\n      <td>$1</td>\n    </tr>\n  </tbody>\n</table>\n\n<form class=\"row g-3\">\n  <div class=\" col-md-6\">\n    <input class=\"form-control\" placeholder=\"Nombre\">\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-primary\">Enviar</button>\n  </div>\n</form>"
            }
          }
        ]
      }
    ]
  }
};

