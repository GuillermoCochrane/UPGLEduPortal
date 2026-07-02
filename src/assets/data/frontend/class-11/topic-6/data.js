export const item1 = {
  type: "h3",
  info: [
    {
      text: "✳️ Modales Basicos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los modales son ventanas emergentes que se abren sobre el contenido principal. Se utilizan para mostrar información en una pantalla diferente. Este tipo de componentes se utilizan para presentar contenido adicional o para solicitar una respuesta de un usuario.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "✨ Estructura mínima",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Usa ",
      content: "plain"
    },
    {
      text: "bs-toggle",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "bs-target",
      content: "bold"
    }
  ]
};

export const item5 = {
  type: "example",
  hasBT: true,
  title: "📋 Ejemplo de Modal",
  height: "180px",
  width: "600px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 150px;\">\n  <button \n    class=\"btn btn-outline-primary btn-lg\" \n    data-bs-toggle=\"modal\" \n    data-bs-target=\"#miModal\" \n  >\n    Abrir Modal\n  </button>\n</div>\n\n<div class=\"modal\" id=\"miModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Título</h5>\n        <button \n          type=\"button\" \n          class=\"btn-close\" \n          data-bs-dismiss=\"modal\" \n          aria-label=\"Close\"\n        ></button>\n      </div>\n      <div class=\"modal-body\">Contenido</div>\n    </div>\n  </div>\n</div>"
      }
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Actividad: ",
      content: "bold"
    },
    {
      text: "Modal con detalles",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Crea un modal con detalles de producto.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "answer",
  info: {
    title: "Crear un modal con detalles",
    content: [
      {
        type: "example",
        height: "250",
        hasBT: true,
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<button class=\"btn btn-primary m-2\" data-bs-toggle=\"modal\" data-bs-target=\"#miModal\">Abrir Modal</button>\n\n<div class=\"modal fade\" id=\"miModal\" tabindex=\"-1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Producto</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Nombre del producto</p>\n        <p>Precio</p>\n      </div>\n    </div>\n  </div>\n</div>"
            }
          }
        ]
      }
    ]
  }
};

