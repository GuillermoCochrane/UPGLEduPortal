export const item1 = {
  type: "h3",
  info: [
    {
      text: "👩‍💻 ¿ Cómo funcionan las etiquetas HTML?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Estructura de las etiquetas",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Las etiquetas ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " son los bloques básicos que definen la estructura y el contenido de una página web. La mayoría de etiquetas tienen una estructura de apertura y cierre que envuelve el contenido.",
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
          text: "(<a>) Etiqueta de apertura ",
          content: "bold"
        },
        {
          text: ": Indica dónde comienza el enlace.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "<a href=\"https://ejemplo.com\">"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "(</a>) Etiqueta de cierre",
          content: "bold"
        },
        {
          text: ": Indica dónde termina el enlace.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "</a>"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "(href) Atributo",
          content: "bold"
        },
        {
          text: ": Define la URL de destino del enlace.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "href=\"https://ejemplo.com\""
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
      text: "Ejemplo completo de estructura:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "html",
    content: "<a href=\"https://ejemplo.com\">  <!-- Etiqueta de apertura -->\n    Visitar ejemplo             <!-- Contenido -->\n</a>                            <!-- Etiqueta de cierre -->"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Algunas etiquetas como ",
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
      text: "<br>",
      content: "bold"
    },
    {
      text: " o ",
      content: "plain"
    },
    {
      text: "<input>",
      content: "bold"
    },
    {
      text: " son auto-cerradas y no necesitan etiqueta de cierre: ",
      content: "plain"
    },
    {
      text: "<img src=\"imagen.jpg\">",
      content: "bold"
    },
    {
      text: " o en formato ",
      content: "plain"
    },
    {
      text: "XHTML: ",
      content: "bold"
    },
    {
      text: "<img src=\"imagen.jpg\"/>",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "🔗 Enlaces ",
      content: "plain"
    },
    {
      text: "( <a> )",
      content: "bold"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Los enlaces permiten conectar diferentes páginas o recursos en la web. Se crean con la etiqueta ",
      content: "plain"
    },
    {
      text: "<a>",
      content: "bold"
    },
    {
      text: " y el atributo ",
      content: "plain"
    },
    {
      text: "href",
      content: "bold"
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Tipos de enlaces",
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
          text: "Enlace interno: ",
          content: "bold"
        },
        {
          text: "<a href=\"pagina2.html\">Ir a Página 2</a>",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Enlace externo: ",
          content: "bold"
        },
        {
          text: "<a href=\"https://www.google.com\" target=\"_blank\">Google</a>",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Enlace a correo: ",
          content: "bold"
        },
        {
          text: "<a href=\"mailto:correo@ejemplo.com\">Enviar correo</a>",
          content: "plain"
        }
      ]
    }
  ]
};

