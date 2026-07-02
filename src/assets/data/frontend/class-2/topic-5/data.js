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
      text: "Formulario de contacto",
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
      text: "Familiarizarse con la estructura y componentes de un formulario en "
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
          text: "formulario_contacto.html",
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
          text: "Dentro del body, crear un formulario con los siguientes campos:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Nombre ",
                  content: "plain"
                },
                {
                  text: "(type =\"text\")",
                  content: "bold"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Correo electrónico ",
                  content: "plain"
                },
                {
                  text: "(type =\"email\")",
                  content: "bold"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Mensaje ",
                  content: "plain"
                },
                {
                  text: "(type =\"textarea\")",
                  content: "bold"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un botón para enviar",
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
          text: "Agregar etiquetas ",
          content: "plain"
        },
        {
          text: "<label>",
          content: "bold"
        },
        {
          text: " asociadas a cada campo.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Probar el formulario en el navegador.",
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
      text: "Usar el atributo ",
      content: "plain"
    },
    {
      text: "\"required\"",
      content: "bold"
    },
    {
      text: " para validar que los campos no estén vacíos.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "answer",
  info: {
    title: "Solución formulario de contacto",
    content: [
      {
        type: "example",
        height: "350",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <h1>Formulario de contacto</h1>\n  <br>\n  <form action=\"/\" method=\"post\">\n    <hr>\n    <label for=\"nombre\">Nombre:</label>\n    <br>\n    <input type=\"text\" id=\"nombre\" name=\"nombre\" required>\n    <hr>\n    <label for=\"correo\">Correo electrónico:</label>\n    <br>\n    <input type=\"email\" id=\"correo\" name=\"correo\" required>\n    <hr>\n    <label for=\"mensaje\">Mensaje:</label>\n    <br>\n    <textarea id=\"mensaje\" name=\"mensaje\" required></textarea>\n    <hr>\n    <button type=\"submit\">Enviar</button>\n  </form>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

