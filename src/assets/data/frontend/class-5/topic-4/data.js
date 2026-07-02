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
      text: "Actividad 1: Estructura semántica",
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
      text: "Aplicar etiquetas semánticas para estructurar adecuadamente una página web.",
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
          text: "pagina_semantica.html",
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
          text: "Construir una página con la siguiente estructura:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "<header>",
                  content: "bold"
                },
                {
                  text: " que contenga un título y una pequeña descripción.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "<nav>",
                  content: "bold"
                },
                {
                  text: " con al menos 4 enlaces (pueden ser ficticios).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "<main>",
                  content: "bold"
                },
                {
                  text: " dividido en 2 ",
                  content: "plain"
                },
                {
                  text: "<section>",
                  content: "bold"
                },
                {
                  text: ":",
                  content: "plain"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Primera sección:  ",
                          content: "bold"
                        },
                        {
                          text: "2 ",
                          content: "plain"
                        },
                        {
                          text: "<article>",
                          content: "bold"
                        },
                        {
                          text: " con contenido breve.",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Segunda sección: ",
                          content: "bold"
                        },
                        {
                          text: "Un formulario simple.",
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
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "<aside>",
                  content: "bold"
                },
                {
                  text: " con \"contenido relacionado\" o \"publicidad\".",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "<footer>",
                  content: "bold"
                },
                {
                  text: " con derechos de autor y año.",
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
          text: "Bonus: ",
          content: "bold"
        },
        {
          text: "Utiliza ",
          content: "plain"
        },
        {
          text: "<time>",
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
          text: " y ",
          content: "plain"
        },
        {
          text: "<figcaption>",
          content: "bold"
        },
        {
          text: " en alguna parte de la página.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "answer",
  info: {
    title: "Solución de la página semántica",
    content: [
      {
        type: "example",
        height: "1310",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <header>\n    <h1>Clase 5 - Ejercicio 1  - Etiquetas semánticas</h1>\n    <p>Objetivo: Aplicar etiquetas semánticas para estructurar adecuadamente una página web.</p>\n    <hr>\n  </header>\n  <nav>\n    <ul>\n      <li><a href=\"http://www.google.com\">Google</a></li>\n      <li><a href=\"https://www.facebook.com\">Facebbok</a></li>\n      <li><a href=\"https://www.instagram.com\">Instagram</a></li>\n      <li><a href=\"https://www.twitter.com\">Twitter</a></li>\n    </ul>\n  </nav>\n  <main>\n    <section>\n      <article>\n        <h2>Artículo 1</h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit. Sed non risus.\n          Suspendisse lectus tortor, dignissim sit\n          amet, adipiscing nec, ultricies sed, dolor.\n          Cras elementum ultrices diam. Maecenas\n          ligula massa, varius a, semper congue,\n          euismod non, mi. Proin porttitor, orci\n          nec nonummy molestie, enim est eleifend\n          mi, non fermentum diam nisl sit amet erat.\n          Duis semper. Duis arcu massa, scelerisque\n          vitae, consequat in, pretium a, enim.\n          Pellentesque congue. Ut in risus volutpat\n          libero pharetra tempor. Cras vestibulum\n          bibendum augue. Praesent egestas leo in\n          pede. Praesent blandit odio eu enim.\n          Pellentesque sed dui ut augue blandit\n          sodales. Vestibulum ante ipsum primis in\n          faucibus orci luctus et ultrices posuere\n          cubilia Curae; Aliquam nibh. Mauris ac\n          mauris sed pede pellentesque fermentum.\n          Maecenas adipiscing ante non diam\n          sodales hendrerit.\n        </p>\n      </article>\n      <article>\n        <h2>Artículo 2</h2>\n        <p>\n          Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Voluptatibus obcaecati\n          illo nesciunt hic, ipsa eaque nemo\n          laudantium assumenda repudiandae autem\n          reiciendis aspernatur architecto sint eius\n          perferendis cupiditate mollitia adipisci\n          asperiores. Lorem ipsum dolor sit amet\n          consectetur adipisicing elit. Nihil non\n          doloribus reiciendis reprehenderit quae\n          debitis, aut ipsam temporibus beatae\n          doloremque facilis modi quas? Sit aliquam\n          voluptas sed officia repudiandae. Ab.\n          Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quia, quisquam.\n          Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Voluptatibus obcaecati\n          illo nesciunt hic, ipsa eaque nemo\n          laudantium assumenda repudiandae autem\n          reiciendis aspernatur architecto sint eius\n          perferendis cupiditate mollitia adipisci\n          asperiores. Lorem ipsum dolor sit amet\n          consectetur adipisicing elit. Nihil non\n          doloribus reiciendis reprehenderit quae\n          debitis, aut ipsam temporibus beatae\n          doloremque facilis modi quas? Sit aliquam\n          voluptas sed officia repudiandae. Ab.\n          Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quia, quisquam.\n        </p>\n      </article>\n    </section>\n    <section>\n      <h2>Contacto: </h2>\n      <form action=\"/\" method=\"get\">\n        <label for=\"nombre\">Nombre:</label>\n        <br>\n        <input type=\"text\" id=\"nombre\" name=\"nombre\">\n        <br>\n        <label for=\"apellido\">Apellido:</label>\n        <br>\n        <input type=\"text\" id=\"apellido\" name=\"apellido\">\n        <br>\n        <label for=\"email\">Email:</label>\n        <br>\n        <input type=\"email\" id=\"email\" name=\"email\">\n        <br>\n        <textarea\n          name=\"comentarios\"\n          id=\"comentarios\"\n          cols=\"30\"\n          rows=\"10\"\n        ></textarea>\n        <br>\n        <button type=\"submit\">Enviar</button>\n      </form>\n    </section>\n    <aside>\n      <figure>\n        <img src=\"https://armoto.vtexassets.com/arquivos/logoM.svg\" alt=\"Logo Motorola\" width=\"200\">\n        <figcaption>Pagina auspiciada por Motorola</figcaption>\n      </figure>\n    </aside>\n  </main>\n  <footer>\n    <hr>\n    <p>\n      Copyright&copy;\n      <time datetime=\"2021-12-02\">2 de diciembre de 2021</time>\n      by\n      <a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Guillermo Cochrane</a>.\n    </p>\n  </footer>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Actividad 2: Proyecto - Mi blog personal",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Objetivo: ",
      content: "bold"
    },
    {
      text: "Integrar todos los conocimientos adquiridos en un pequeño proyecto de blog o sitio de noticias personal.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Descripción del proyecto:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear una carpeta llamada ",
          content: "plain"
        },
        {
          text: "mi-blog",
          content: "bold"
        },
        {
          text: " con los siguientes archivos:",
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
                  text: "(página principal)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "articulo1.html ",
                  content: "bold"
                },
                {
                  text: "(un artículo completo)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "sobre-mi.html ",
                  content: "bold"
                },
                {
                  text: "(información personal)",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "contacto.html ",
                  content: "bold"
                },
                {
                  text: "(formulario de contacto)",
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
          text: "En ",
          content: "plain"
        },
        {
          text: "index.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Header con el nombre de tu blog y un lema.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Menú de navegación con enlaces a todas las páginas.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Sección principal con 3 tarjetas de artículos (título, fecha, imagen y resumen).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Barra lateral con 'sobre mí' resumido y categorías (lista).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Pie de página con derechos, año y redes sociales.",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución de la página principal",
            content: [
              {
                type: "example",
                height: "1900",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <div>\n      <button>Barra de Navegación</button>\n      <div>\n        <h1>La guarida del desarrolador</h1>\n        <p>\n          Tu lugar donde mantenerte actualizado\n          sobre tecnologías y programación\n        </p>\n      </div>\n      <button>Barra Lateral</button>\n    </div>\n    <nav role=\"navigation\">\n      <ul>\n        <li>\n          <a href=\"./index.html\">Home</a>\n        </li>\n        <li>\n          <a href=\"./articulo1.html\">Artículos</a>\n        </li>\n        <li>\n          <a href=\"./sobre-mi.html\">Sobre Mi</a>\n        </li>\n        <li>\n          <a href=\"./contacto.html\">Contacto</a>\n        </li>\n      </ul>\n    </nav>\n    <hr>\n  </header>\n  <main>\n    <section>\n      <h2>Artículos</h2>\n      <div>\n        <article>\n          <a href=\"./articulo1.html\">\n            <h3>\n              AEO sustituye al SEO como eje estratégico del\n              posicionamiento web mundial en la era de la\n              Inteligencia Artificial\n            </h3>\n            <time datetime=\"2022-4-7\">7 de abril de 2022</time>\n            <br>\n            <img\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BV2e0AyZf8UqtmyY9-n1XVk36IT-cxHMeQ&s\"\n              alt=\"Imagen Articulo 3\"\n              width=\"200\"\n              align=\"center\"\n            >\n            <br>\n          </a>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur\n            adipisicing elit. Itaque incidunt\n            pariatur sed similique facere aperiam\n            aut est. Iste, hic non!\n          </p>\n        </article>\n        <article>\n          <a href=\"#\">\n            <h3>\n              Claude Opus 4, la nueva IA de Anthropic, fue capaz\n              de chantajear para garantizar su supervivencia\n              durante pruebas\n            </h3>\n            <time datetime=\"2021-12-02\">2 de diciembre de 2021</time>\n            <br>\n            <img\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPT1_puU_Kh-jKtKhHkBd1FAdmqa1VuwHsZw&s\"\n              alt=\"Imagen Articulo 1\"\n              width=\"200\"\n              align=\"center\"\n            >\n            <br>\n          </a>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur\n            adipisicing elit. Itaque incidunt\n            pariatur sed similique facere aperiam\n            aut est. Iste, hic non!\n          </p>\n        </article>\n        <article>\n          <a href=\"#\">\n            <h3>Huawei aspira a un chip de 3 nm en 2026</h3>\n            <time datetime=\"2022-3-13\">13 de marzo de 2022</time>\n            <br>\n            <img\n              src=\"https://actions.es/wp-content/uploads/2021/12/Semiconductores.jpg\"\n              alt=\"Imagen Articulo 2\"\n              width=\"200\"\n              align=\"center\"\n            >\n            <br>\n          </a>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur\n            adipisicing elit. Itaque incidunt\n            pariatur sed similique facere aperiam\n            aut est. Iste, hic non!\n          </p>\n        </article>\n        <hr>\n      </div>\n    </section>\n    <aside>\n      <h2>Sobre mi</h2>\n      <img\n        src=\"https://avatars.githubusercontent.com/u/105461619?v=4\"\n        alt=\"Foto de Guillermo Cochrane, Full Stack Developer\"\n        width=\"200\"\n        align=\"center\"\n        title=\"Guillermo Cochrane\"\n      >\n      <p>\n        ¡Hola! Soy Guillermo Cochrane.\n        <em>Genio, millonario, playboy, filántropo.</em>\n        Ah, no ese era Tony Stark jaja.\n      </p>\n      <p>\n        Soy <strong>Full Stack Developer</strong> y llevo 2 años\n        peleando con código, pero siempre le encuentro la vuelta.\n      </p>\n      <p>\n        Desde chico siempre me gustó entender cómo funcionan\n        las cosas, asi que la programación fue mi epifanía:\n        ¡es la amalgama perfecta entre lógica, desafíos y creatividad!\n      </p>\n      <p>\n        Autodidacta, fan de la tecnología, las series y los juegos RPG.\n        Mis herramientas:\n      </p>\n      <ul>\n        <li>\n          <strong>Node.js</strong> (Express + Sequelize) — porque escribir\n          SQL a mano es como usar DOS en 2024 —\n        </li>\n        <li><strong>MySQL</strong></li>\n        <li><strong>React</strong> (sufrir con elegancia)</li>\n        <li><strong>Python/WordPress</strong> \"por si acaso... y otros etcéteras\"</li>\n      </ul>\n      <p>Total, el conocimiento no ocupa lugar.</p>\n      <p>\n        <em>\n          \"Si la tecnología fuera fácil, no tendría gracia.\n          Nada como un buen desafío para quemar neuronas.\"\n        </em>\n      </p>\n    </aside>\n    <hr>\n  </main>\n  <footer>\n    <p>\n      Copyright <strong>&copy;<time datetime=\"2025-6-03\">2025</time></strong>\n      by <a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Guillermo Cochrane</a>.\n    </p>\n    <nav role=\"contentinfo\">\n      <h2>Seguime en:</h2>\n      <ul>\n        <li><a href=\"https://www.instagram.com/liam.cochrane43/\">Instagram</a></li>\n        <li><a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Linkedin</a></li>\n        <li><a href=\"https://github.com/GuillermoCochrane\">GitHub</a></li>\n      </ul>\n    </nav>\n  </footer>\n</body>"
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
          text: "En ",
          content: "plain"
        },
        {
          text: "articulo1.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Mismo header y navegación que en index.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Contenido del artículo completo:",
                  content: "plain"
                },
                {
                  type: "ul",
                  info: [
                    {
                      type: "li",
                      info: [
                        {
                          text: "Título principal y fecha.",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Imagen destacada.",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Texto dividido en párrafos.",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Una lista (ordenada o desordenada).",
                          content: "plain"
                        }
                      ]
                    },
                    {
                      type: "li",
                      info: [
                        {
                          text: "Una tabla con datos relevantes.",
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
                  text: "Sección de comentarios (simulada con un comentario ya hecho).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "El mismo pie de página.",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución de la página de un artículo",
            content: [
              {
                type: "example",
                height: "3550",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <div>\n      <button>Barra de Navegación</button>\n      <div>\n        <h1>La guarida del desarrolador</h1>\n        <p>\n          Tu lugar donde mantenerte actualizado\n          sobre tecnologías y programación\n        </p>\n      </div>\n      <button>Barra Lateral</button>\n    </div>\n    <nav>\n      <ul>\n        <li>\n          <a href=\"./index.html\">Home</a>\n        </li>\n        <li>\n          <a href=\"./articulo1.html\">Artículos</a>\n        </li>\n        <li>\n          <a href=\"./sobre-mi.html\">Sobre Mi</a>\n        </li>\n        <li>\n          <a href=\"./contacto.html\">Contacto</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section>\n      <hr>\n      <h2>\n        AEO sustituye al SEO como eje estratégico del\n        posicionamiento web mundial en la era de la\n        Inteligencia Artificial\n      </h2>\n      <time datetime=\"2022-4-7\">7 de abril de 2022</time>\n      <br>\n      <img\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BV2e0AyZf8UqtmyY9-n1XVk36IT-cxHMeQ&s\"\n        alt=\"Imagen Articulo 3\"\n        width=\"400\"\n        align=\"center\"\n      >\n      <br>\n      <h5>\n        <em>\n          Mientras miles de empresas siguen centrando su estrategia\n          digital en aparecer en los primeros puestos de Google,\n          las reglas del juego están changing. Las inteligencias\n          artificiales como ChatGPT, Gemini o Bing ya no ofrecen\n          una lista de enlaces, sino respuestas directas extraídas\n          de contenidos. Esta nueva realidad da paso al AEO\n          (Answer Engine Optimization), una técnica emergente que\n          desarrolladores web internacionales como Nevada 2.0 S.L.\n          a través de consultoriainformatica están implementando\n        </em>\n      </h5>\n      <hr>\n      <p>\n        El AEO, o Answer Engine Optimization, es el proceso\n        de optimizar contenido web para que pueda ser\n        entendido, interpretado y citado por motores de\n        respuesta basados en inteligencia artificial. En lugar\n        de competir por los primeros puestos en los resultados\n        de búsqueda, el objetivo ahora es convertirse en la\n        fuente directa de la respuesta que da la IA.\n      </p>\n      <p>\n        Este cambio de paradigma no elimina la necesidad del SEO\n        tradicional, pero lo complementa con una nueva dimensión:\n        el contenido debe ser tan claro, útil y estructurado que\n        una IA lo seleccione como referencia. Saber cómo aplican\n        esta técnica los desarrolladores web internacionales\n        especializados es fundamental para adaptarse a la nueva realidad.\n      </p>\n\n      <h4>\n        De diseñadores web a generadores de visibilidad en IA\n      </h4>\n      <p>\n        Empresas como Nevada 2.0 S.L. a través de\n        consultoriainformatica, especialistas en desarrollo web\n        internacional, ya están liderando este cambio. A través\n        de una combinación de redacción estratégica, optimización\n        semántica y estructura técnica, sus proyectos van mucho\n        más allá de crear sitios visualmente atractivos. Se enfocan\n        en convertir cada página web en una fuente de respuestas\n        para las principales inteligencias artificiales del mercado.\n        Un ejemplo claro se ve en su línea de diseño web Granada,\n        donde se aplica AEO no solo para mejorar la presencia local,\n        sino también para enseñar a empresas de cualquier parte del\n        mundo cómo adaptarse a este nuevo enfoque.\n      </p>\n\n      <h4>\n        Qué es AEO y cómo aparecer en ChatGPT\n      </h4>\n\n      <p>\n        Aunque Granada es un caso práctico, la estrategia es\n        aplicable globalmente. Un enfoque claro es entender\n        qué es AEO y como aparecer en ChatGPT , y aplicarlo desde\n        la arquitectura del sitio hasta la creación de contenido\n        conversacional.\n      </p>\n\n      <h4>\n        Cómo funciona el AEO en la práctica\n      </h4>\n\n      <p>\n        A diferencia del SEO, que busca mejorar el ranking en\n        buscadores, el AEO trabaja desde una lógica conversacional.\n        Las personas no escriben igual en Google que cuando\n        preguntan a una IA. Mientras en Google alguien puede\n        buscar \"mejor abogado en Barcelona\", en ChatGPT la\n        pregunta será: \"¿Qué abogado recomiendas si hay un\n        problema de herencia en Barcelona?\". Esta diferencia\n        cambia por completo la forma de estructurar contenido web.\n      </p>\n\n      <p>\n        Por eso, los desarrolladores web que quieran ofrecer\n        resultados duraderos deben adoptar nuevas prácticas:\n      </p>\n\n      <ul>\n        <li>\n          Responder preguntas de forma directa: encabezados\n          claros con preguntas reales y respuestas bien redactadas.\n        </li>\n        <li>\n          Usar lenguaje natural: sin tecnicismos innecesarios\n          y con un tono humano, comprensible y útil.\n        </li>\n        <li>\n          Incluir datos estructurados: como schema, FAQs,\n          listas, tablas o glosarios.\n        </li>\n        <li>\n          Crear contenido con autoridad: especializado,\n          actualizado y coherente.\n        </li>\n        <li>\n          Optimizar para voz y texto: pensando en cómo una IA\n          interpretará ese contenido.\n        </li>\n      </ul>\n\n      <h4>\n        Una oportunidad para desarrolladores web internacionales\n      </h4>\n\n      <p>\n        Los motores de respuesta como ChatGPT o Gemini no entienden\n        de fronteras. Por eso, la implementación de AEO no es una\n        estrategia local, sino una ventaja competitiva global.\n        Los desarrolladores web con visión internacional, como los\n        del equipo de Consultoría Informática, han entendido que\n        estar visibles en la era de la IA no es una opción, es\n        una necesidad.\n      </p>\n\n      <p>\n        De hecho, muchos proyectos impulsados desde Nevada 2.0 S.L.\n        nacen con enfoque multilingüe, adaptando contenido y estructura\n        a diferentes mercados, culturas y modelos conversacionales.\n        Esto permite que una misma web pueda ser citada por ChatGPT\n        en inglés, español o francés, dependiendo del usuario y el contexto.\n      </p>\n\n      <h4>\n        Diseño web con propósito: el nuevo estándar del desarrollo digital\n      </h4>\n\n      <p>\n        Ya no basta con tener una web \"bonita\". Una página sin\n        estrategia AEO es, en muchos casos, invisible para el\n        usuario moderno que confía en su asistente de IA para\n        tomar decisiones. El diseño web Granada aplicado por Nevada\n        2.0 no es un caso aislado: es una muestra de cómo debe\n        funcionar el desarrollo web actual, con foco en la utilidad,\n        la estructura y la capacidad de respuesta. Además, se han\n        desarrollado guías específicas para sectores como:\n      </p>\n\n\n      <ul>\n        <li>\n          Inmobiliarias que quieren aparecer cuando alguien\n          pregunta \"¿Cómo vendo mi casa en Granada?\"\n        </li>\n        <li>\n          Despachos legales que buscan ser fuente cuando un usuario\n          pregunta \"¿Qué derechos tengo tras un despido improcedente?\"\n        </li>\n        <li>\n          Comercios online que quieren salir cuando se consulta\n          ¿Cuál es la mejor tienda online de ropa sostenible?\"\n        </li>\n      </ul>\n\n      <h4>\n        \"Qué puedes hacer hoy para adaptar tu web al AEO\"\n      </h4>\n\n      <p>\n        \"Si tienes una web o estás pensando en crearla, estos\n        son los pasos clave para aparecer en las respuestas de la IA\":\n      </p>\n\n      <ul>\n        <li>\n          Definir bien el público objetivo y las preguntas que\n          suelen hacer.\n        </li>\n        <li>\n          Reescribir el contenido pensando en cómo lo preguntaría\n          una persona a una IA.\n        </li>\n        <li>\n          Agrupar respuestas en secciones tipo FAQ, tutoriales\n          o artículos educativos.\n        </li>\n        <li>\n          Añadir etiquetas semánticas y microdatos para facilitar\n          el trabajo a las máquinas.\n        </li>\n        <li>\n          Trabajar con desarrolladores web especializados en AEO\n          que sepan estructurar bien tu sitio desde la base.\n        </li>\n      </ul> \n\n      <h4>\n        Conclusión: del SEO al AEO, un cambio inevitable\n      </h4>\n\n      <p>\n        La transición del SEO al AEO no es una moda, es una\n        evolución natural. Las IAs han cambiado la forma en que\n        las personas acceden a la información, y eso obliga a las\n        empresas a replantear cómo se presentan online. Estar\n        primero en Google puede seguir siendo útil, pero ser citado\n        por una IA que responde millones de preguntas al día tiene\n        aún más valor.\n      </p>\n\n      <p>\n        Por eso, contar con el apoyo de desarrolladores web con\n        enfoque internacional es más importante que nunca. Firmas\n        como Nevada 2.0 S.L. están marcando el camino, combinando\n        diseño, estrategia y tecnología para que sus clientes no\n        solo estén en internet, sino que protagonicen la\n        conversación digital del futuro.\n      </p>\n\n      <p>\n        <em>\n          \"Si quieres que tu web forme parte de las respuestas\n          de la inteligencia artificial, empieza por preguntarte:\n          ¿estoy optimizando para buscadores o para quien ya\n          está dando las respuestas?\"\n        </em>\n      </p>\n      <table border=\"1\">\n        <tr>\n          <th>Técnica</th>\n          <th>Ventajas</th>\n          <th>Desventajas</th>\n        </tr>\n        <tr>\n          <td><strong>SEO (Search Engine Optimization)</strong></td>\n          <td>\n            <ul>\n              <li>\n                Posiciona en motores de búsqueda tradicionales\n                (Google, Bing).\n              </li>\n              <li>Efectivo para tráfico orgánico a largo plazo.</li>\n              <li>Amplia documentación y herramientas disponibles.</li>\n            </ul>\n          </td>\n          <td>\n            <ul>\n              <li>\n                Menos relevante cuando los usuarios obtienen\n                respuestas directas de IA.\n              </li>\n              <li>Requiere actualización constante (algoritmos cambiantes).</li>\n              <li>Competitividad alta en palabras clave populares.</li>\n            </ul>\n          </td>\n        </tr>\n        <tr>\n          <td><strong>AEO (Answer Engine Optimization)</strong></td>\n          <td>\n            <ul>\n              <li>\n                Optimiza para IA (ChatGPT, Gemini) que generan\n                respuestas directas.\n              </li>\n              <li>Contenido citado como fuente aumenta autoridad.</li>\n              <li>\n                Enfoque en lenguaje natural y preguntas reales de usuarios.\n              </li>\n            </ul>\n          </td>\n          <td>\n            <ul>\n              <li>Técnica emergente (pocas herramientas de análisis).</li>\n              <li>Dependencia de plataformas de IA (cambios impredecibles).</li>\n              <li>Difícil medir ROI directamente.</li>\n            </ul>\n          </td>\n        </tr>\n      </table>\n    </section>\n    <section>\n      <hr>\n      <h3>Comentarios</h3>\n      <hr>\n      <article>\n        <h4>Roberto dijo: </h4>\n        <p>\n          \"Si quieres que tu web forme parte de las respuestas\n          de la inteligencia artificial, empieza por preguntarte:\n          ¿estoy optimizando para buscadores o para quien ya\n          está dando las respuestas?\"\n        </p>\n      </article>\n      <hr>\n      <article>\n        <h4>Guillermo dijo: </h4>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          Deserunt fugit a fugiat repellat nisi molestias vitae\n          minus ut aspernatur voluptatum deleniti quam, nesciunt\n          error, debitis omnis, at recusandae officiis. Fuga?\n        </p>\n      </article>\n      <hr>\n      <article>\n        <h4>Pedro dijo: </h4>\n        <p>\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n          Molestias, ducimus nemo beatae et quisquam eveniet in\n          mollitia. Dolore, libero, nisi voluptatem iste unde\n          doloribus provident quas recusandae sunt tenetur,\n          accusantium ea de ejercicio.\n        </p>\n      </article>\n      <hr>\n      <h3>Añadir comentarios</h3>\n      <form action=\"/\" method=\"post\">\n        <label for=\"nombre\">Nombre:</label>\n        <br>\n        <input\n          type=\"text\"\n          id=\"nombre\"\n          name=\"nombre\"\n          required\n        >\n        <br>\n        <label for=\"email\">Email:</label>\n        <br>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          required\n        >\n        <br>\n        <label for=\"comentario\">Comentario:</label>\n        <br>\n        <textarea\n          name=\"comentario\"\n          id=\"comentario\"\n          cols=\"30\"\n          rows=\"10\"\n          required\n        ></textarea>\n        <br>\n        <button type=\"submit\">Enviar</button>\n      </form>\n    </section>\n  </main>\n  <footer>\n    <p>\n      Copyright <strong>&copy;<time datetime=\"2025-6-03\">2025</time></strong>\n      by <a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Guillermo Cochrane</a>.\n    </p>\n    <nav role=\"contentinfo\">\n      <h2>Seguime en:</h2>\n      <ul>\n        <li><a href=\"https://www.instagram.com/liam.cochrane43/\">Instagram</a></li>\n        <li><a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Linkedin</a></li>\n        <li><a href=\"https://github.com/GuillermoCochrane\">GitHub</a></li>\n      </ul>\n    </nav>\n  </footer>\n</body>"
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
          text: "En ",
          content: "plain"
        },
        {
          text: "sobre-mi.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Tu foto (o avatar).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Información personal (puede ser ficticia).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Lista de habilidades o intereses.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Enlaces a redes sociales.",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución de la página de sobre mí",
            content: [
              {
                type: "example",
                height: "1170",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n  <div>\n    <button>Barra de Navegación</button>\n    <div>\n      <h1>La guarida del desarrolador</h1>\n      <p>\n        Tu lugar donde mantenerte actualizado\n        sobre tecnologías y programación\n      </p>\n    </div>\n    <button>Barra Lateral</button>\n  </div>\n  <nav>\n    <ul>\n      <li>\n        <a href=\"./index.html\">Home</a>\n      </li>\n      <li>\n        <a href=\"./articulo1.html\">Artículos</a>\n      </li>\n      <li>\n        <a href=\"./sobre-mi.html\">Sobre Mi</a>\n      </li>\n      <li>\n        <a href=\"./contacto.html\">Contacto</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <section>\n    <h2>Sobre mi</h2>\n    <img\n      src=\"https://avatars.githubusercontent.com/u/105461619?v=4\"\n      alt=\"Foto de Guillermo Cochrane, Full Stack Developer\"\n      width=\"300\"\n      align=\"center\"\n      title=\"Guillermo Cochrane\"\n    >\n    <p>\n      ¡Hola! Soy Guillermo Cochrane.\n      <em>Genio, millonario, playboy, filántropo.</em>\n      Ah, no ese era Tony Stark jaja. No tengo traje high tech,\n      pero sí consola, teclado y la costumbre de cuestionarlo todo.\n    </p>\n    <p>\n      Soy <strong>Full Stack Developer</strong> y llevo 2 años\n      peleando con código, pero siempre le encuentro la vuelta.\n      No vengo del lado académico. Aprendí leyendo, probando,\n      rompiendo, arreglando. Y ahí me di cuenta: aprender a\n      programar es, en realidad, aprender a pensar.\n    </p>\n    <p>\n      Y El código me enseñó algo : los sistemas parecen cerrados…\n      hasta que encontrás una grieta. Y no es una metáfora:\n      pasa en todos los planos. Nada es absoluto, todo es relativo.\n    </p>\n    <p>\n      Desde chico siempre me gustó entender cómo funcionan las cosas.\n      La programación fue mi epifanía:\n      ¡una mezcla perfecta entre lógica, desafíos y creatividad!\n    </p>\n    <p>\n      Autodidacta, fan de la tecnología, las series y los juegos RPG.\n      Estas son mis armas favoritas para sobrevivir al caos digital:\n    </p>\n    <ul>\n      <li>\n        <strong>Node.js</strong> (Express + Sequelize) — porque escribir\n        SQL a mano es como usar DOS en 2024 —\n      </li>\n      <li><strong>MySQL</strong></li>\n      <li><strong>React</strong> (sufrir con elegancia)</li>\n      <li><strong>Python/WordPress</strong> \"por si acaso... y otros etcéteras\"</li>\n    </ul>\n    <p>Total, el conocimiento no ocupa lugar.</p>\n    <p>\n      <em>\n        \"Si la tecnología fuera fácil, no tendría gracia.\n        Nada como un buen desafío para quemar neuronas.\"\n      </em>\n    </p>\n    \n    <nav role=\"contentinfo\">\n      <h3>Seguime en:</h3>\n      <ul>\n        <li><a href=\"https://www.instagram.com/liam.cochrane43/\">Instagram</a></li>\n        <li><a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Linkedin</a></li>\n        <li><a href=\"https://github.com/GuillermoCochrane\">GitHub</a></li>\n      </ul>\n    </nav>\n  </section>\n</main>\n</body>"
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
          text: "En ",
          content: "plain"
        },
        {
          text: "contacto.html:",
          content: "bold"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Formulario de contacto completo.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Campos para nombre, email, asunto y mensaje.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Casillas de verificación para suscripción.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Botón de envío.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Información alternativa de contacto.",
                  content: "plain"
                }
              ]
            }
          ]
        },
        {
          type: "answer",
          info: {
            title: "Solución de la página de contacto",
            content: [
              {
                type: "example",
                height: "900",
                width: "100%",
                info: [
                  {
                    type: "code",
                    info: {
                      language: "html",
                      content: "<body>\n  <header>\n    <div>\n      <button>Barra de Navegación</button>\n      <div>\n        <h1>La guarida del desarrolador</h1>\n        <p>\n          Tu lugar donde mantenerte actualizado\n          sobre tecnologías y programación\n        </p>\n      </div>\n      <button>Barra Lateral</button>\n    </div>\n    <nav>\n      <ul>\n        <li>\n          <a href=\"./index.html\">Home</a>\n        </li>\n        <li>\n          <a href=\"./articulo1.html\">Artículos</a>\n        </li>\n        <li>\n          <a href=\"./sobre-mi.html\">Sobre Mi</a>\n        </li>\n        <li>\n          <a href=\"./contacto.html\">Contacto</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section>\n      <hr>\n      <h2>Contacto</h2>\n      <form action=\"/\" method=\"post\">\n        <label for=\"nombre\">Nombre:</label>\n        <br>\n        <input\n          type=\"text\"\n          id=\"nombre\"\n          name=\"nombre\"\n          required\n        >\n        <br>\n        <label for=\"apellido\">Apellido:</label>\n        <br>\n        <input\n          type=\"text\"\n          id=\"apellido\"\n          name=\"apellido\"\n          required\n        >\n        <br>\n        <label for=\"email\">Email:</label>\n        <br>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          required\n        >\n        <br>\n        <label for=\"asunto\">Asunto:</label>\n        <br>\n        <input type=\"text\" id=\"asunto\" name=\"asunto\">\n        <br>\n        <label for=\"mensaje\">Mensaje:</label>\n        <br>\n        <textarea\n          name=\"mensaje\"\n          id=\"mensaje\"\n          cols=\"30\"\n          rows=\"10\"\n          required\n        ></textarea>\n        <br>\n        <label for=\"suscripcion\">Suscribirse a este boletín:</label>\n        <input type=\"checkbox\" id=\"suscripcion\" name=\"suscripcion\">\n        <br>\n        <button type=\"submit\">Enviar</button>\n      </form>\n      <hr>\n    </section>\n  </main>\n  <footer>\n    <p>\n      Copyright <strong>&copy;<time datetime=\"2025-6-03\">2025</time></strong>\n      by <a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Guillermo Cochrane</a>.\n    </p>\n    <nav role=\"contentinfo\">\n      <h2>Seguime en:</h2>\n      <ul>\n        <li><a href=\"https://www.instagram.com/liam.cochrane43/\">Instagram</a></li>\n        <li><a href=\"https://ar.linkedin.com/in/guillermo-cochrane\">Linkedin</a></li>\n        <li><a href=\"https://github.com/GuillermoCochrane\">GitHub</a></li>\n      </ul>\n    </nav>\n  </footer>\n</body>"
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

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Sugerencias:",
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
          text: "Usa etiquetas semánticas para toda la estructura.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "No te preocupes aún por el diseño visual, nos enfocaremos en la estructura HTML.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Puedes usar contenido ficticio o generado para los textos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Utiliza imágenes gratuitas de internet o tus propias imágenes.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Revisa tu código en el validador de HTML para asegurarte de que es correcto.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Bonus: ",
      content: "bold"
    },
    {
      text: "Añade metadatos en el head como autor, descripción y palabras clave.",
      content: "plain"
    }
  ]
};

