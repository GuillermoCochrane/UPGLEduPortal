export const item1 = {
  type: "h3",
  info: [
    {
      text: "Sintaxis de una Función",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "code",
  info: {
    language: "python",
    content: "def nombre_de_la_funcion(parametros):\n    #codigo de la función\n    return valor_de_retorno"
  }
};

export const item3 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "def: ",
          content: "bold"
        },
        {
          text: "es la ",
          content: "plain"
        },
        {
          text: "palabra clave",
          content: "italic"
        },
        {
          text: " que indica la definicion de una función.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "nombre_de_la_función: ",
          content: "bold"
        },
        {
          text: "es el identificador ",
          content: "plain"
        },
        {
          text: "único",
          content: "italic"
        },
        {
          text: " que usamos para llamar a la función.",
          content: "plain"
        },
        {
          text: "\nEn Python, la convención para nombrar funciones es usar letras minúsculas con palabras separadas por guiones bajos. Esto se conoce como ",
          content: "plain"
        },
        {
          text: "snake_case.",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "parametros: ",
          content: "bold"
        },
        {
          text: "son variables opcionales que pasamos a la función.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "return: ",
          content: "bold"
        },
        {
          text: "es la ",
          content: "plain"
        },
        {
          text: "palabra clave",
          content: "italic"
        },
        {
          text: " que devuelve valor desde la función al llamador.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Ejemplos de Uso",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Una simple función que suma dos números:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "def sumar(a, b):\n    return a + b\n\nresultado = sumar(5, 3)\nprint(resultado)\n# Imprime: 8"
  }
};

