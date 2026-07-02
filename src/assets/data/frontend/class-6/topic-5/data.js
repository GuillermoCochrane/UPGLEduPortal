export const item1 = {
  type: "h3",
  info: [
    {
      text: "🧪 Actividad práctica: Maquetar un DNI argentino",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "En esta actividad vamos a aplicar lo aprendido sobre etiquetas semánticas, estructura ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " y estilos ",
      content: "plain"
    },
    {
      text: "CSS",
      content: "bold"
    },
    {
      text: " básicos para crear una tarjeta visual inspirada en un documento nacional de identidad ",
      content: "plain"
    },
    {
      text: "(DNI)",
      content: "bold"
    },
    {
      text: " argentino.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "🎯 Objetivo",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "El objetivo es practicar el uso de contenedores, estructura de contenido, clases y selectores, así como propiedades básicas de estilo como ",
      content: "plain"
    },
    {
      text: "display, margin, padding, font-family, background-color",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "box-shadow",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "🧱 Estructura esperada",
      content: "plain"
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
          text: "Uso de etiquetas semánticas: ",
          content: "plain"
        },
        {
          text: "<header>",
          content: "bold"
        },
        {
          text: ", ",
          content: "plain"
        },
        {
          text: "<main>",
          content: "bold"
        },
        {
          text: ", ",
          content: "plain"
        },
        {
          text: "<section>",
          content: "bold"
        },
        {
          text: ", ",
          content: "plain"
        },
        {
          text: "<figure>",
          content: "bold"
        },
        {
          text: ", ",
          content: "plain"
        },
        {
          text: "<img>",
          content: "bold"
        },
        {
          text: ", ",
          content: "plain"
        },
        {
          text: "<table>",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Estilos aplicados mediante una hoja externa ",
          content: "plain"
        },
        {
          text: "(styles.css)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Maquetación responsive simple usando unidades relativas y padding",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Tipografías básicas, colores neutros, bordes redondeados y sombra de tarjeta",
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
      text: "📌 Requisitos del ejercicio",
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
          text: "Crear un archivo llamado ",
          content: "plain"
        },
        {
          text: "DNI.html",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Utilizar una tabla para la información detallada",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Agregar una imagen representativa como foto de ",
          content: "plain"
        },
        {
          text: "DNI",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Separar las secciones mediante clases y estilos propios",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Aplicar estilos ",
          content: "plain"
        },
        {
          text: "CSS",
          content: "bold"
        },
        {
          text: " que mejoren la legibilidad y organización visual",
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
      text: "Bonus",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Podés experimentar modificando el ",
      content: "plain"
    },
    {
      text: "color de fondo",
      content: "bold"
    },
    {
      text: ", el ",
      content: "plain"
    },
    {
      text: "box-shadow",
      content: "bold"
    },
    {
      text: " o reemplazar la imagen por una foto tuya, si querés simular tu propio DNI ",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "answer",
  info: {
    title: "Solución del DNI",
    content: [
      {
        type: "example",
        height: "500",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <header>\n    <h1>Mi DNI</h1>\n  </header>\n  <main>\n    <section class=\"tarjeta-dni\">\n      <p class=\"info-superior\" id=\"pais\">\n        <strong>\n          Republica Argentina - Mercosur\n        </strong>\n      </p>\n      <p class=\"info-superior\">\n        Registro Nacional de las Personas\n      </p>\n      <p class=\"info-superior\">\n        Ministerio del Interior, obras públicas\n        y vivienda\n      </p>\n      <table>\n        <tr>\n          <td>\n            <figure>\n              <img\n                src=\"https://avatars.githubusercontent.com/u/105461619?v=4\"\n                alt=\"Foto DNI\"\n                width=\"250px\"\n                align=\"center\"\n                title=\"Foto de Guillermo Cochrane\"\n              />\n            </figure>\n            <p class=\"titulo-seccion\">\n              Documento / Document\n            </p>\n            <p class=\"info-documento\">\n              <strong>\n                28.813.563\n              </strong>\n            </p>\n          </td>\n          <td>\n            <p class=\"titulo-seccion\">\n              Apellido / Surname\n            </p>\n            <p class=\"info-documento\">\n              Cochrane\n            </p>\n            <p class=\"titulo-seccion\">\n              Nombre / First Name\n            </p>\n            <p>\n              Guillermo Alejandro\n            </p>\n            <table class=\"info-horizontal\">\n              <tr>\n                <td>\n                  <p class=\"titulo-seccion\">\n                    Sexo / Sex\n                  </p>\n                  <p class=\"info-documento\">\n                    M\n                  </p>\n                </td>\n                <td>\n                  <p class=\"titulo-seccion\">\n                    Nacionalidad / Nationality\n                  </p>\n                  <p class=\"info-documento\">\n                    Argentina\n                  </p>\n                </td>\n                <td>\n                  <p class=\"titulo-seccion\">\n                    Ejemplar / Sample\n                  </p>\n                  <p class=\"info-documento\">\n                    A\n                  </p>\n                </td>\n              </tr>\n            </table>\n            <p class=\"titulo-seccion\">\n              Fecha de Nacimiento / Date of Birth\n            </p>\n            <p class=\"info-documento\">\n              12 OCT / OCT 1981\n            </p>\n            <p class=\"titulo-seccion\">\n              Fecha de Emisión / Date of Issue\n            </p>\n            <p class=\"info-documento\">\n              28 OCT / OCT 2021\n            </p>\n            <p class=\"titulo-seccion\">\n              Fecha de Vencimiento / Date of Expiry\n            </p>\n            <p class=\"info-documento\">\n              28 OCT / OCT 2026\n            </p>\n          </td>\n        </tr>\n      </table>\n    </section>\n  </main>\n</body>"
            }
          },
          {
            type: "code",
            info: {
              language: "css",
              content: "body {\n  background-color: #ebebeb;\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nmain {\n  height: 70vh; /* Alto total */\n  display: flex; /* Flexbox layout */\n  justify-content: center; /* Centrar horizontal */\n  align-items: center; /* Centrar vertical */\n  margin-block: 5%;\n}\n\n.tarjeta-dni {\n  height: auto;\n  width: 600px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.info-superior {\n  color: #666;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: monospace;\n  margin-bottom: -3px;\n  line-height: 0.2;\n  letter-spacing: -0.2px;\n}\n\n.titulo-seccion {\n  font-size: 10px;\n  margin-bottom: -15px;\n  text-transform: capitalize;\n}\n\n.info-documento {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.info-horizontal {\n  margin-bottom: 15px;\n  margin-top: -15px;\n  margin-left: -3px;\n}\n\n.info-horizontal p {\n  margin-right: 2px;\n}\n\n#pais {\n  font-size: 20px;\n  font-weight: bolder;\n}"
            }
          }
        ]
      }
    ]
  }
};

