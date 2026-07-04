export const item1 = {
  type: "h3",
  info: [
    {
      text: "Nombres de variables en Python",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Según la PEP 8 (PEP 8 es una guía de estilo para Python que contiene recomendaciones para escribir código más legible y consistente. La guía abarca desde cómo nombrar variables hasta el número máximo de caracteres que debe tener una línea.)",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "link",
  info: [
    {
      text: "PEP8 ",
      content: "plain",
      link: "https://peps.python.org/pep-0008/"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Los nombres de las variables de Python deben de escribirse en snake_case. 🐍",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    },
    {
      text: "hola_mundo",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Además en deben de cumplir las siguientes características: ",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Tienen que empezar por una letra o barra baja.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "El uso de keywords como nombres está prohibido.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Los nombres deben de ser descriptivos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Deben de estar en minúsculas y separando palabras por barras bajas ‘ _ ’.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Las constantes se escriben en mayúsculas y SNAKE_CASE.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item8 = {
  type: "h3",
  info: [
    {
      text: "Nombres validos: ✔",
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
          text: "cat_color = 'Brown'",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "number_of_threads = 8",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "phone_number = 78469334212",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "ISIN_CODE = 8479362",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "CONSTANT_SPEED = 9.8",
          content: "plain"
        }
      ]
    }
  ]
};

export const item10 = {
  type: "h3",
  info: [
    {
      text: "Nombres invalidos: ❌",
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
          text: ".cat",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "0number",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "`car",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "-hello",
          content: "plain"
        }
      ]
    }
  ]
};

export const item12 = {
  type: "h3",
  info: [
    {
      text: "Posición de memoria",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "(en que posicion de memoria se guarda el valor de la variable)",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "code",
  info: {
    language: "python",
    content: "#con esto podemos saber la posicion de memoria\n#==============================================\nx = 10\nprint(id(x))\n#=============================================="
  }
};

export const item15 = {
  type: "h3",
  info: [
    {
      text: "Buenas Practicas con Variables en Python",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Cuando hablamos de buenas practicas, nos referimos a aquellas formas de hacer codigo que pueden ayudarnos a escribirlo de manera más limpia y legible ¡a continuacion voy a destacar algunas que pueden ayudarte con las variables!",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Nombres descriptivos: ",
          content: "bold"
        },
        {
          text: "Usa nombres descriptivos para tus variables. Esto hace que tu código sea más fácil de entender. Por ejemplo, en lugar de x, podrías usar edad si estás almacenando la edad de alguien.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "x = 25 # Mal\nedad = 25 # Bien"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Evita nombres reservados: ",
          content: "bold"
        },
        {
          text: "No uses nombres que ya están reservados por Python. Por ejemplo, no llames a una variable list o str, ya que estos son nombres de tipos de datos incorporados en Python.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "list = [1, 2, 3] # Mal\nmi_lista = [1, 2, 3] # Bien"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Convenciones de estilo: ",
          content: "bold"
        },
        {
          text: "Sigue las convenciones de estilo de Python, como PEP 8. Por ejemplo, usa minúsculas para los nombres de las variables y separa las palabras con guiones bajos.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "miVariable = 42 # Mal\nmi_variable = 42 # Bien"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Evita nombres genéricos: ",
          content: "bold"
        },
        {
          text: "Evita nombres de variables demasiado genéricos que puedan confundir o no transmitir su propósito. Por ejemplo, no uses nombres como dato, valor, resultado, etc., a menos que sea realmente necesario y su significado esté claro en el contexto.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "dato = 10 # Mal\nnumero_de_intentos = 10 # Bien"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Usa constantes en mayúsculas: ",
          content: "bold"
        },
        {
          text: "Si tienes variables que son constantes y no van a cambiar, usa nombres en mayúsculas para distinguirlas.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "pi = 3.14159 # Mal\nPI = 3.14159 # Bien"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Inicializa variables cuando sea posible: ",
          content: "bold"
        },
        {
          text: "Siempre que sea posible, inicializa tus variables cuando las declares. Esto hace que tu código sea más explícito y menos propenso a errores.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "python",
            content: "# Mal\nnombre = \"\"\nedad = 0\n\n# Bien\nnombre = \"Juan\"\nedad = 30"
          }
        }
      ]
    }
  ]
};

