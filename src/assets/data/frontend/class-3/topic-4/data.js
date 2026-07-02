export const item1 = {
  type: "h3",
  info: [
    {
      text: "Actividades 💬",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Actividad 1: ",
      content: "bold"
    },
    {
      text: "Tablas de contactos",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Objetivo: ",
      content: "bold"
    },
    {
      text: "Practicar la creación y estructura básica de tablas en ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear un archivo llamado ",
          content: "plain"
        },
        {
          text: "tablas_contactos.html",
          content: "bold"
        },
        {
          text: ".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Crear una tabla de contactos con cinco columnas:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Nombre",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Apellido",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Dirección",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Correo electrónico",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Teléfono",
                  content: "plain"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Completar la tabla con datos de al menos 3 personas ",
          content: "plain"
        },
        {
          text: "(pueden ser ficticios).",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Usar las etiquetas ",
          content: "plain"
        },
        {
          text: "<th>",
          content: "bold"
        },
        {
          text: " para los encabezados y ",
          content: "plain"
        },
        {
          text: "<td>",
          content: "bold"
        },
        {
          text: " para los datos.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Bonus: ",
      content: "bold"
    },
    {
      text: "Añadir el atributo ",
      content: "plain"
    },
    {
      text: "border=\"1\"",
      content: "bold"
    },
    {
      text: " a la tabla.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "answer",
  info: {
    title: "Solución tablas de contactos",
    content: [
      {
        type: "example",
        height: "300",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <h1>Clase 3 - Ejercicio 1  - Tablas</h1>\n  <hr>\n  <h2>Objetivo: Practicar la creación y estructura básica de tablas en HTML.</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Nombre</th>\n      <th>Apellido</th>\n      <th>Dirección</th>\n      <th>Correo electrónico</th>\n      <th>Teléfono</th>\n    </tr>\n    <tr>\n      <td>Ana</td>\n      <td>Rodríguez</td>\n      <td>French 269</td>\n      <td>ana@gmail.com</td>\n      <td>123456789</td>\n    </tr>\n    <tr>\n      <td>Juan</td>\n      <td>González</td>\n      <td>Belgrano 123</td>\n      <td>juan@gmail.com</td>\n      <td>987654321</td>\n    </tr>\n    <tr>\n      <td>Pedro</td>\n      <td>Perez</td>\n      <td>Moreno 384</td>\n      <td>pedro@gmail.com</td>\n      <td>555555555</td>\n    </tr> \n  </table>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Actividad 2: ",
      content: "bold"
    },
    {
      text: "Imágenes y enlaces",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Objetivo: ",
      content: "bold"
    },
    {
      text: "Practicar la inserción de imágenes y la creación de diversos tipos de enlaces.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear un archivo llamado ",
          content: "plain"
        },
        {
          text: "galeria.html",
          content: "bold"
        },
        {
          text: ".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Crear una galería simple con:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Al menos 3 imágenes ",
                  content: "plain"
                },
                {
                  text: "(usar URLs de internet si no tienes imágenes propias)",
                  content: "bold"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Cada imagen debe tener un texto alternativo descriptivo",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Debajo de cada imagen, añadir un enlace que abra la imagen en una nueva pestaña",
                  content: "plain"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Al final de la página, crear una sección de ",
          content: "plain"
        },
        {
          text: "Contacto",
          content: "bold"
        },
        {
          text: " con:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Un enlace para enviar un correo electrónico",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un enlace a una red social",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un enlace interno que regrese al principio de la página ",
                  content: "plain"
                },
                {
                  text: "(usar el atributo ",
                  content: "bold"
                },
                {
                  text: "id",
                  content: "bold"
                },
                {
                  text: ")",
                  content: "bold"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Bonus: ",
      content: "bold"
    },
    {
      text: "Organizar las imágenes en una tabla para que queden en filas de 2 imágenes.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "answer",
  info: {
    title: "Solución galería",
    content: [
      {
        type: "example",
        height: "850",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <h1 id=\"1\">Clase 3 - Ejercicio 2  - Imagenes y enlaces</h1>\n  <hr>\n  <h2>Objetivo: Practicar la inserción de imágenes y la creación de diversos tipos de enlaces</h2>\n  <table border=\"1\" align=\"center\">\n    <tr>\n      <td>\n        <img \n          src=\"https://img.freepik.com/foto-gratis/arbol-solitario_181624-46361.jpg\" \n          alt=\"Arbol Solitario\"\n          width=\"400\"\n        >\n        <p>\n          <a \n            href=\"https://img.freepik.com/foto-gratis/arbol-solitario_181624-46361.jpg\" \n            target=\"_blank\"\n          >Arbol solitario</a>\n        </p>\n      </td>\n      <td>\n        <img \n          src=\"https://img.freepik.com/foto-gratis/toma-aerea-hermosa-orilla-mar-colinas-fondo-al-atardecer_181624-24143.jpg\" \n          alt=\"Orilla del Mar\" \n          width=\"400\"\n        >\n        <p>\n          <a \n            href=\"https://img.freepik.com/foto-gratis/toma-aerea-hermosa-orilla-mar-colinas-fondo-al-atardecer_181624-24143.jpg\" \n            target=\"_blank\"\n          >Orilla del mar</a>\n        </p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <img \n          src=\"https://img.freepik.com/foto-gratis/paisaje-bosques-lagos-otono_23-2151843646.jpg\" \n          alt=\"Lago en el Bosque\" \n          width=\"400\"\n        >\n        <p>\n          <a \n            href=\"https://img.freepik.com/foto-gratis/paisaje-bosques-lagos-otono_23-2151843646.jpg\" \n            target=\"_blank\"\n          >Lago en el bosque</a>\n        </p>\n      </td>\n      <td>\n        <img \n          src=\"https://img.freepik.com/foto-gratis/puesta-sol-misurina_181624-34793.jpg\" \n          alt=\"Puesta de sol\" \n          width=\"400\"\n        >\n        <p>\n          <a \n            href=\"https://img.freepik.com/foto-gratis/puesta-sol-misurina_181624-34793.jpg\" \n            target=\"_blank\"\n          >Puesta de sol</a>\n        </p>\n      </td>\n    </tr>\n  </table>\n  <footer>\n    <table width=\"100%\">\n      <tr>\n        <td>\n          <a href=\"mailto:guilleac81@gmail.com\">Enviar correo</a>\n        </td>\n        <td>\n          <a href=\"https://www.instagram.com/liam.cochrane43/\">Instagram</a>\n        </td>\n        <td>\n          <a href=\"#1\">Volver al principio</a>\n        </td>\n      </tr>\n    </table>\n  </footer>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

