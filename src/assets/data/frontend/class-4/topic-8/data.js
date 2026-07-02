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
      text: "Actividad 1: Formulario de registro completo",
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
      text: "Crear un formulario de registro que utilice diferentes tipos de inputs y sus atributos.",
      content: "plain"
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
          text: "formulario_registro.html",
          content: "italic"
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
          text: "Construir un formulario que incluya:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Información personal:",
                  content: "bold"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Nombre completo ",
                          content: "bold"
                        },
                        {
                          text: "(text, required)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Email ",
                          content: "bold"
                        },
                        {
                          text: "(email, required)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Teléfono ",
                          content: "bold"
                        },
                        {
                          text: "(tel)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Fecha de nacimiento ",
                          content: "bold"
                        },
                        {
                          text: "(date, required)",
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
                  text: "Información de cuenta:",
                  content: "bold"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Nombre de usuario ",
                          content: "bold"
                        },
                        {
                          text: "(text, required, pattern para solo letras y números)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Contraseña ",
                          content: "bold"
                        },
                        {
                          text: "(password, required, minlength=8)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Confirmar contraseña ",
                          content: "bold"
                        },
                        {
                          text: "(password, required)",
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
                  text: "Preferencias:",
                  content: "bold"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Género ",
                          content: "bold"
                        },
                        {
                          text: "(radio buttons)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Intereses ",
                          content: "bold"
                        },
                        {
                          text: "(checkboxes múltiples)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "País ",
                          content: "bold"
                        },
                        {
                          text: "(input con datalist)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Sitio web personal ",
                          content: "bold"
                        },
                        {
                          text: "(url)",
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
                  text: "Otros campos:",
                  content: "bold"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Foto de perfil ",
                          content: "bold"
                        },
                        {
                          text: "(file, accept imágenes)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Color favorito ",
                          content: "bold"
                        },
                        {
                          text: "(color)",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Nivel de experiencia ",
                          content: "bold"
                        },
                        {
                          text: "(range, 1-10)",
                          content: "plain"
                        }
                      ]
                    }
                  ]
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
          text: "Botones de enviar y limpiar formulario",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Usar atributos como placeholder, required, pattern según corresponda",
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
      text: "Añadir un campo oculto con la fecha actual usando JavaScript.",
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
        height: "1000",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <header>\n    <h1>Formulario de registro</h1>\n  </header>\n  <main>\n    <form action=\"#\" method=\"post\">\n      <section>\n        <h2>Información personal</h2>\n        <article>\n          <label for=\"nombre\">Nombre completo</label><br>\n          <input type=\"text\" id=\"nombre\" name=\"nombre\" required>\n        </article>\n        <article>\n          <label for=\"email\">Email</label><br>\n          <input type=\"email\" id=\"email\" name=\"email\" required>\n        </article>\n        <article>\n          <label for=\"telefono\">Teléfono</label><br>\n          <input type=\"tel\" id=\"telefono\" name=\"telefono\">\n        </article>\n        <article>\n          <label for=\"fecha\">Fecha de nacimiento</label><br>\n          <input type=\"date\" id=\"fecha\" name=\"fecha\" required>\n        </article>\n      </section>\n\n      <section>\n        <h2>Información de cuenta</h2>\n        <article>\n          <label for=\"usuario\">Nombre de usuario</label><br>\n          <input \n            type=\"text\" \n            id=\"usuario\" \n            name=\"usuario\" \n            required \n            pattern=\"[a-zA-Z0-9]+\"\n          >\n        </article>\n        <article>\n          <label for=\"contraseña\">Contraseña</label><br>\n          <input \n            type=\"password\" \n            id=\"contraseña\" \n            name=\"contraseña\" \n            required \n            minlength=\"8\"\n          >\n        </article>\n        <article>\n          <label for=\"confirmar\">Confirmar contraseña</label><br>\n          <input type=\"password\" id=\"confirmar\" name=\"confirmar\" required>\n        </article>\n      </section>\n\n      <section>\n        <h2>Preferencias</h2>\n        <article>\n          <input type=\"radio\" id=\"generoM\" name=\"genero\" value=\"Masculino\">\n          <label for=\"generoM\">Masculino</label>\n          <input type=\"radio\" id=\"generoF\" name=\"genero\" value=\"Femenino\">\n          <label for=\"generoF\">Femenino</label>\n        </article>\n        <article>\n          <br><label for=\"intereses\">Intereses</label><br>\n          <input type=\"checkbox\" id=\"musica\" name=\"intereses\" value=\"Música\">\n          <label for=\"intereses\">Música</label>\n          <input type=\"checkbox\" id=\"fotografia\" name=\"intereses\" value=\"Fotografía\">\n          <label for=\"intereses\">Fotografía</label>\n          <input type=\"checkbox\" id=\"arte\" name=\"intereses\" value=\"Arte\">\n          <label for=\"intereses\">Arte</label>\n        </article>\n        <article>\n          <br><label for=\"pais\">País</label><br>\n          <input type=\"text\" id=\"pais\" name=\"pais\" list=\"paises\">\n          <datalist id=\"paises\">\n            <option value=\"Argentina\">\n            <option value=\"Brasil\">\n            <option value=\"Chile\">\n            <option value=\"Colombia\">\n            <option value=\"Ecuador\">\n            <option value=\"México\">\n          </datalist>\n        </article>\n        <article>\n          <br><label for=\"sitio\">Sitio web personal</label><br>\n          <input \n            type=\"url\" \n            id=\"sitio\" \n            name=\"sitio\" \n            placeholder=\"https://ejemplo.com\"\n          >\n        </article>\n      </section>\n\n      <section>\n        <h2>Otros campos</h2>\n        <article>\n          <label for=\"foto\">Foto de perfil</label><br>\n          <input type=\"file\" id=\"foto\" name=\"foto\" accept=\"image/*\">\n        </article>\n        <article>\n          <br><label for=\"color\">Color favorito</label><br>\n          <input type=\"color\" id=\"color\" name=\"color\">\n        </article>\n        <article>\n          <br><label for=\"experiencia\">Nivel de experiencia</label><br>\n          <input \n            type=\"range\" \n            id=\"experiencia\" \n            name=\"experiencia\" \n            min=\"1\" \n            max=\"10\"\n          >\n        </article>\n      </section>\n\n      <section>\n        <article>\n          <button type=\"submit\">Enviar</button>\n          <button type=\"reset\">Limpiar</button>\n        </article>\n      </section>\n    </form>\n  </main>\n</body>"
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
      text: "Actividad 2: Sistema de encuestas",
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
      text: "Crear múltiples formularios que demuestren el dominio de todos los tipos de inputs.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Descripción del proyecto:",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Desarrollarás un sistema de encuestas con diferentes formularios especializados que cubran todos los tipos de inputs aprendidos.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear una carpeta llamada ",
          content: "plain"
        },
        {
          text: "sistema-encuestas",
          content: "italic"
        },
        {
          text: " con estos archivos:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "index.html ",
                  content: "bold"
                },
                {
                  text: "(página principal con enlaces)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "encuesta-personal.html ",
                  content: "bold"
                },
                {
                  text: "(datos personales)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "encuesta-trabajo.html ",
                  content: "bold"
                },
                {
                  text: "(información laboral)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "encuesta-satisfaccion.html ",
                  content: "bold"
                },
                {
                  text: "(satisfacción del cliente)",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución index.html",
            content: [
              {
                type: "example",
                height: "325",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <h1>Índice de encuestas</h1>\n    <nav>\n      <a href=\"index.html\">Inicio</a>\n      <a href=\"encuesta-personal.html\">Encuesta personal</a>\n      <a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a>\n      <a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a>\n      <a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a>\n    </nav>\n  </header>\n  <main>\n    <h2>Bienvenido a nuestro sitio web de encuestas</h2>\n    <p>Aquí encontrarás una variedad de formularios para que puedas evaluar tus habilidades y experiencia.</p>\n    <p>Por favor, selecciona el formulario que corresponde:</p>\n    <ul>\n      <li><a href=\"encuesta-personal.html\">Encuesta personal</a></li>\n      <li><a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a></li>\n      <li><a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a></li>\n      <li><a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a></li>\n    </ul>\n  </main>\n</body>"
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "encuesta-personal.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Información básica ",
                  content: "bold"
                },
                {
                  text: "(nombre, email, teléfono, fecha nacimiento)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Dirección completa ",
                  content: "bold"
                },
                {
                  text: "(text inputs para calle, ciudad, código postal)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Estado civil ",
                  content: "bold"
                },
                {
                  text: "(radio buttons)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Hobbies ",
                  content: "bold"
                },
                {
                  text: "(checkboxes múltiples)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Descripción personal ",
                  content: "bold"
                },
                {
                  text: "(textarea)",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución encuesta-personal.html",
            content: [
              {
                type: "example",
                height: "950",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <h1>Formulario de encuesta personal</h1>\n    <nav>\n      <a href=\"index.html\">Inicio</a>\n      <a href=\"encuesta-personal.html\">Encuesta personal</a>\n      <a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a>\n      <a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a>\n      <a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a>\n    </nav>\n  </header>\n  <main>\n    <h2>Encuesta personal</h2>\n    <form action=\"#\" method=\"POST\">\n      <fieldset>\n        <legend>Información básica</legend>\n        <label for=\"nombre\">Nombre:</label><br>\n        <input \n          type=\"text\" \n          id=\"nombre\" \n          name=\"nombre\" \n          required \n          autofocus \n          placeholder=\"John Doe\"\n        ><br>\n        <label for=\"email\">Email:</label><br>\n        <input \n          type=\"email\" \n          id=\"email\" \n          name=\"email\" \n          required \n          placeholder=\"ejemplo@ejemplo.com\"\n        ><br>\n        <label for=\"telefono\">Teléfono:</label><br>\n        <input \n          type=\"tel\" \n          id=\"telefono\" \n          name=\"telefono\" \n          required \n          placeholder=\"1234567890\" \n          pattern=\"[0-9]{10}\" \n          min=\"10\" \n          max=\"10\"\n        ><br>\n        <label for=\"fecha-nacimiento\">Fecha de nacimiento:</label><br>\n        <input type=\"date\" id=\"fecha-nacimiento\" name=\"fecha-nacimiento\" required><br>\n        <fieldset>\n          <legend>Sexo</legend>\n          <label for=\"sexo-masculino\">Masculino</label>\n          <input type=\"radio\" id=\"sexo-masculino\" name=\"sexo\" value=\"Masculino\" required>\n          <label for=\"sexo-femenino\">Femenino</label>\n          <input type=\"radio\" id=\"sexo-femenino\" name=\"sexo\" value=\"Femenino\" >\n          <label for=\"sexo-otro\">Otro</label>\n          <input type=\"radio\" id=\"sexo-otro\" name=\"sexo\" value=\"Otro\" >\n        </fieldset>\n      </fieldset>\n        <fieldset>\n          <legend>Direccion</legend>\n          <label for=\"pais\">País:</label><br>\n          <input \n            type=\"text\" \n            id=\"pais\" \n            name=\"pais\" \n            required \n            list=\"paises\" \n            placeholder=\"Mexico\"\n          ><br>\n          <datalist id=\"paises\">\n            <option value=\"Argentina\">\n            <option value=\"Brasil\">\n            <option value=\"Chile\">\n            <option value=\"Colombia\">\n            <option value=\"Perú\">\n            <option value=\"Ecuador\">\n            <option value=\"Uruguay\">\n            <option value=\"Venezuela\">\n            <option value=\"Paraguay\">\n          </datalist>\n          <label for=\"ciudad\">Ciudad:</label><br>\n          <input type=\"text\" id=\"ciudad\" name=\"ciudad\" required placeholder=\"Ciudad\"><br>\n          <label for=\"calle\">Calle:</label><br>\n          <input type=\"text\" id=\"calle\" name=\"calle\" required placeholder=\"Calle Falsa 123\"><br>\n          <label for=\"codigo-postal\">Código postal:</label><br>\n        <input \n          type=\"text\" \n          id=\"codigo-postal\" \n          name=\"codigo-postal\" \n          required \n          pattern=\"[A-Za-z0-9]\\d{5}\" \n          min=\"5\" \n          max=\"5\" \n          placeholder=\"X1234\"\n        ><br>\n        </fieldset>\n        <fieldset>\n          <legend>Otros datos</legend>\n          <label>Estado civil:</label><br>\n          <div>\n            <input type=\"radio\" id=\"estado-civil-1\" name=\"estado-civil\" value=\"Soltero\" required>\n            <label for=\"estado-civil-1\">Soltero</label>\n            <input type=\"radio\" id=\"estado-civil-2\" name=\"estado-civil\" value=\"Casado\" >\n            <label for=\"estado-civil-2\">Casado</label>\n            <input type=\"radio\" id=\"estado-civil-3\" name=\"estado-civil\" value=\"Divorciado\" >\n            <label for=\"estado-civil-3\">Divorciado</label>\n            <input type=\"radio\" id=\"estado-civil-4\" name=\"estado-civil\" value=\"Viudo\" >\n            <label for=\"estado-civil-4\">Viudo</label>\n          </div>\n          <label for=\"hobbies\">Hobbies:</label><br>\n          <div>\n            <input type=\"checkbox\" id=\"hobbies-1\" name=\"hobbies\" value=\"Escribir\" >\n            <label for=\"hobbies-1\">Escribir</label>\n            <input type=\"checkbox\" id=\"hobbies-2\" name=\"hobbies\" value=\"Leer\" >\n            <label for=\"hobbies-2\">Leer</label>\n            <input type=\"checkbox\" id=\"hobbies-3\" name=\"hobbies\" value=\"Cine\" >\n            <label for=\"hobbies-3\">Series y Peliculas</label>\n            <input type=\"checkbox\" id=\"hobbies-4\" name=\"hobbies\" value=\"Deportes\" >\n            <label for=\"hobbies-4\">Deportes</label>\n            <input type=\"checkbox\" id=\"hobbies-5\" name=\"hobbies\" value=\"Musica\" >\n            <label for=\"hobbies-5\">Musica</label>\n            <input type=\"checkbox\" id=\"hobbies-6\" name=\"hobbies\" value=\"Otros\" >\n            <label for=\"hobbies-6\">Otros</label>\n          </div>\n          <label for=\"descripcion-personal\">Descripción personal:</label><br>\n          <textarea \n            id=\"descripcion-personal\" \n            name=\"descripcion-personal\" \n            required \n            rows=\"10\" \n            cols=\"70\"\n          ></textarea><br>\n        </fieldset>\n        <div style=\"margin-top: 1em;\">\n          <button type=\"submit\">Enviar</button>\n          <button type=\"reset\">Limpiar</button>\n        </div>\n    </form>\n</body>"
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "encuesta-trabajo.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Empresa actual ",
                  content: "bold"
                },
                {
                  text: "(text)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Salario esperado ",
                  content: "bold"
                },
                {
                  text: "(number con min/max)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Años de experiencia ",
                  content: "bold"
                },
                {
                  text: "(range slider)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Fecha disponible para empezar ",
                  content: "bold"
                },
                {
                  text: "(date)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Horario preferido ",
                  content: "bold"
                },
                {
                  text: "(time inputs para inicio y fin)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "CV ",
                  content: "bold"
                },
                {
                  text: "(file upload, solo PDF)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Sitio web profesional ",
                  content: "bold"
                },
                {
                  text: "(url)",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución encuesta-trabajo.html",
            content: [
              {
                type: "example",
                height: "580",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <h1>Formulario de encuesta de trabajo</h1>\n    <nav>\n      <a href=\"index.html\">Inicio</a>\n      <a href=\"encuesta-personal.html\">Encuesta personal</a>\n      <a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a>\n      <a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a>\n      <a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a>\n    </nav>\n  </header>\n  <main>\n    <h2>Encuesta de trabajo</h2>\n    <form action=\"#\" method=\"POST\">\n      <fieldset>\n        <legend>Información básica</legend>\n        <label for=\"Empresa\">Empresa actual:</label><br>\n        <input \n          type=\"text\" \n          id=\"Empresa\" \n          name=\"Empresa\" \n          required \n          placeholder=\"Globant\" \n          list=\"Empresas\" \n          autofocus\n        ><br>\n        <datalist id=\"Empresas\">\n          <option value=\"Globant\">\n          <option value=\"Mercado Libre\">\n          <option value=\"Google\">\n          <option value=\"Facebook\">\n          <option value=\"Amazon\">\n        </datalist>\n        <label for=\"Salario\">Salario esperado:</label><br>\n        <input \n          type=\"number\" \n          id=\"Salario\" \n          name=\"Salario\" \n          required \n          placeholder=\"700000\" \n          min=\"500000\" \n          max=\"1500000\"\n        ><br>\n        <label for=\"Años\">Años de experiencia: <span id=\"valorAños\">5</span></label><br>\n        <!-- Bonus: cheat con IA  -->\n        <input \n          type=\"range\" \n          id=\"Años\" \n          name=\"Años\" \n          required \n          min=\"1\" \n          max=\"10\" \n          value=\"5\" \n          oninput=\"valorAños.innerText = this.value\" \n        ><br>\n        <label for=\"Fecha\">Fecha disponible para empezar:</label><br>\n        <input type=\"date\" id=\"Fecha\" name=\"Fecha\" required><br>\n        <label for=\"Horario\">Horario preferido:</label><br>\n        <div>\n          <label for=\"Horario-inicio\">Horario de inicio:</label><br>\n          <input type=\"time\" id=\"Horario-inicio\" name=\"Horario-inicio\" required><br>\n          <label for=\"Horario-fin\">Horario de fin:</label><br>\n          <input type=\"time\" id=\"Horario-fin\" name=\"Horario-fin\" required><br>\n        </div>\n        <label for=\"CV\">CV:</label><br>\n        <input type=\"file\" id=\"CV\" name=\"CV\" accept=\"application/pdf\" required><br>\n        <label for=\"Sitio\">Sitio web profesional:</label><br>\n        <input \n          type=\"url\" \n          id=\"Sitio\" \n          name=\"Sitio\" \n          required \n          placeholder=\"https://www.globant.com\"\n        ><br>\n      </fieldset>\n      <div style=\"margin-top: 1em;\">\n        <button type=\"submit\">Enviar</button>\n        <button type=\"reset\">Limpiar</button>\n      </div>\n    </form>\n  </main>\n</body>"
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "encuesta-satisfaccion.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Calificación general ",
                  content: "bold"
                },
                {
                  text: "(range 1-10)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Aspectos a evaluar ",
                  content: "bold"
                },
                {
                  text: "(checkboxes)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Recomendarías el servicio ",
                  content: "bold"
                },
                {
                  text: "(radio sí/no)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Comentarios ",
                  content: "bold"
                },
                {
                  text: "(textarea)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Email para seguimiento ",
                  content: "bold"
                },
                {
                  text: "(email, opcional)",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución encuesta-satisfaccion.html",
            content: [
              {
                type: "example",
                height: "480",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <h1>Formulario de encuesta de satisfacción</h1>\n    <nav>\n      <a href=\"index.html\">Inicio</a>\n      <a href=\"encuesta-personal.html\">Encuesta personal</a>\n      <a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a>\n      <a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a>\n      <a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a>\n    </nav>\n  </header>\n  <main>\n    <h2>Encuesta de satisfacción</h2>\n    <form action=\"#\" method=\"POST\">\n      <fieldset>\n        <legend>Aspectos a evaluar</legend>\n        <label for=\"calificacion-general\">\n          Calificación general:\n          <span id=\"valorCalificacion\">5</span>\n        </label>\n        <br>\n        <input \n          type=\"range\" \n          id=\"calificacion-general\" \n          name=\"calificacion-general\" \n          min=\"1\" \n          max=\"10\" \n          required \n          value=\"5\" \n          oninput=\"valorCalificacion.innerText = this.value\" \n          autofocus\n        >\n        <br>\n        <label for=\"aspectos-evaluar\">Aspectos a evaluar:</label>\n        <br>\n        <div>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-1\" \n            name=\"aspectos-evaluar\" \n            value=\"Calidad del servicio\"\n          >\n          <label for=\"aspectos-evaluar-1\">Calidad del servicio</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-2\" \n            name=\"aspectos-evaluar\" \n            value=\"Comodidad del ambiente\"\n          >\n          <label for=\"aspectos-evaluar-2\">Comodidad del ambiente</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-3\" \n            name=\"aspectos-evaluar\" \n            value=\"Servicio al cliente\"\n          >\n          <label for=\"aspectos-evaluar-3\">Servicio al cliente</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-4\" \n            name=\"aspectos-evaluar\" \n            value=\"Calidad de la atención del cliente\"\n          >\n          <label for=\"aspectos-evaluar-4\">Calidad de la atención del cliente</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-5\" \n            name=\"aspectos-evaluar\" \n            value=\"Calidad del personal\"\n          >\n          <label for=\"aspectos-evaluar-5\">Calidad del personal</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-6\" \n            name=\"aspectos-evaluar\" \n            value=\"Calidad del equipo\"\n          >\n          <label for=\"aspectos-evaluar-6\">Calidad del equipo</label>\n          <input \n            type=\"checkbox\" \n            id=\"aspectos-evaluar-7\" \n            name=\"aspectos-evaluar\" \n            value=\"Calidad del producto\"\n          >\n          <label for=\"aspectos-evaluar-7\">Calidad del producto</label>\n        </div>\n        <label for=\"recomendarias-el-servicio\">Recomendarías el servicio:</label>\n        <br>\n        <div>\n          <input \n            type=\"radio\" \n            id=\"recomendarias-el-servicio-1\" \n            name=\"recomendarias-el-servicio\" \n            value=\"Si\"\n          >\n          <label for=\"recomendarias-el-servicio-1\">Si</label>\n          <input \n            type=\"radio\" \n            id=\"recomendarias-el-servicio-2\" \n            name=\"recomendarias-el-servicio\" \n            value=\"No\"\n          >\n          <label for=\"recomendarias-el-servicio-2\">No</label>\n        </div>\n        <label for=\"comentarios\">Comentarios:</label>\n        <br>\n        <textarea \n          id=\"comentarios\" \n          name=\"comentarios\" \n          required\n        ></textarea>\n        <br>\n        <label for=\"email\">Email para seguimiento:</label>\n        <br>\n        <input \n          type=\"email\" \n          id=\"email\" \n          name=\"email\" \n          placeholder=\"ejemplo@ejemplo.com\"\n        >\n        <br>\n      </fieldset>\n      <div style=\"margin-top: 1em;\">\n        <button type=\"submit\">Enviar</button>\n        <button type=\"reset\">Limpiar</button>\n      </div>\n    </form>\n  </main>\n</body>"
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Cada formulario debe tener:",
      content: "bold"
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
          text: "Validación ",
          content: "plain"
        },
        {
          text: "HTML ",
          content: "bold"
        },
        {
          text: "apropiada",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Placeholders informativos",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Labels asociados correctamente",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Botones de envío y reset",
          content: "plain"
        }
      ]
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Características avanzadas:",
      content: "bold"
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
          text: "Usar fieldset y legend para agrupar campos relacionados",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Implementar datalists para campos con sugerencias",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Añadir campos con validación custom usando pattern",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Usar autofocus en el primer campo de cada formulario",
          content: "plain"
        }
      ]
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Bonus: ",
      content: "bold"
    },
    {
      text: "Crear un formulario adicional que demuestre inputs más avanzados como datetime-local, week, month, etc.",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "answer",
  info: {
    title: "Solución Bonus: formulario adicional",
    content: [
      {
        type: "example",
        height: "600",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <header>\n    <h1>Formulario Bonus</h1>\n    <nav>\n      <a href=\"index.html\">Inicio</a>\n      <a href=\"encuesta-personal.html\">Encuesta personal</a>\n      <a href=\"encuesta-trabajo.html\">Encuesta de trabajo</a>\n      <a href=\"encuesta-satisfaccion.html\">Encuesta de satisfacción</a>\n      <a href=\"formulario-bonus.html\">Formulario Bonus - Actividades</a>\n    </nav>\n  </header>\n\n  <main>\n    <h2>Agendar actividad</h2>\n    <form action=\"#\" method=\"POST\">\n      <fieldset>\n        <legend>Datos de la actividad</legend>\n\n        <input type=\"hidden\" name=\"tipo\" value=\"creativa\">\n\n        <label for=\"titulo\">Título de la actividad:</label>\n        <br>\n        <input \n          type=\"text\" \n          id=\"titulo\" \n          name=\"titulo\" \n          required \n          placeholder=\"Escribir un cuento\" \n          maxlength=\"50\" \n          autofocus\n        >\n        <br>\n\n        <label for=\"color\">Color temático de sección:</label>\n        <br>\n        <input type=\"color\" id=\"color\" name=\"color\">\n        <br>\n\n        <label for=\"fecha-hora\">Fecha y hora programada:</label>\n        <br>\n        <input type=\"datetime-local\" id=\"fecha-hora\" name=\"fecha-hora\" required>\n        <br>\n\n        <label for=\"semana\">Semana estimada de cierre:</label>\n        <br>\n        <input type=\"week\" id=\"semana\" name=\"semana\">\n        <br>\n\n        <label for=\"mes-objetivo\">Mes de publicación:</label>\n        <br>\n        <input type=\"month\" id=\"mes-objetivo\" name=\"mes-objetivo\">\n        <br>\n\n        <label for=\"duracion\">Duración estimada (hs):</label>\n        <br>\n        <input \n          type=\"number\" \n          id=\"duracion\" \n          name=\"duracion\" \n          min=\"0.5\" \n          max=\"24\" \n          step=\"0.5\" \n          required\n        >\n        <br>\n\n        <label for=\"codigo\">Código interno (formato ABC-123):</label>\n        <br>\n        <input \n          type=\"text\" \n          id=\"codigo\" \n          name=\"codigo\" \n          pattern=\"[A-Z]{3}-[0-9]{3}\" \n          placeholder=\"ABC-123\" \n          title=\"Tres letras mayúsculas, guion, tres números\" \n          required\n        >\n        <br>\n\n        <label for=\"archivos\">Adjuntar bosquejos o ideas (PDF o imágenes):</label>\n        <br>\n        <input \n          type=\"file\" \n          id=\"archivos\" \n          name=\"archivos\" \n          accept=\".pdf,image/*\" \n          multiple\n        >\n        <br>\n\n        <label for=\"autor\">Nombre del autor:</label>\n        <br>\n        <input \n          type=\"text\" \n          id=\"autor\" \n          name=\"autor\" \n          value=\"Guille\" \n          readonly\n        >\n        <br>\n      </fieldset>\n\n      <div style=\"margin-top: 1em;\">\n        <button type=\"submit\">Enviar</button>\n        <button type=\"reset\">Limpiar</button>\n      </div>\n    </form>\n  </main>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

