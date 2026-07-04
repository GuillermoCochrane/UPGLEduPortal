export const item1 = {
  type: "h3",
  info: [
    {
      text: "¿Qué son las listas?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las listas en Python son estructuras de datos que se utilizan para almacenar una colección de elementos ordenados, estos elementos pueden ser de cualquier tipo, como números, cadenas de texto, booleanos, etc.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Características de las listas:",
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
          text: " Ordenadas: ",
          content: "bold"
        },
        {
          text: "Las listas mantienen el orden en el que se agregan los elementos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: " Mutables: ",
          content: "bold"
        },
        {
          text: "Los elementos de una lista se pueden modificar, agregar o eliminar.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: " Heterogéneas: ",
          content: "bold"
        },
        {
          text: "Una lista puede contener elementos de diferentes tipos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: " Anidadas: ",
          content: "bold"
        },
        {
          text: "Se pueden crear listas dentro de otras listas.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h3",
  info: [
    {
      text: "Crear una lista",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Las listas se pueden crear utilizando corchetes ",
      content: "plain"
    },
    {
      text: "[  ] ",
      content: "bold"
    },
    {
      text: "y separando los elementos por comas.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Lista de números",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "numeros = [1, 2, 3, 4, 5]"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Lista de cadenas",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "code",
  info: {
    language: "python",
    content: "frutas = [\"manzana\", \"banana\", \"cereza\"]"
  }
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "Lista mixta",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "code",
  info: {
    language: "python",
    content: "mixta = [10, \"Hola\", 3.14, True]"
  }
};

export const item13 = {
  type: "h3",
  info: [
    {
      text: "Acceder a elementos",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Se puede acceder a un elemento específico de una lista utilizando su índice, el índice comienza en 0 para el primer elemento.",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "Ejemplos:",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "Acceder al segundo elemento de la lista \"numeros\"",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "numeros = [1, 2, 3, 4, 5]\nprint(numeros[1])\n#(En consola se vería el siguiente resultado:) 2"
  }
};

export const item18 = {
  type: "h4",
  info: [
    {
      text: "Acceder al último elemento de la lista \"nombres\"",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "code",
  info: {
    language: "python",
    content: "nombres = [\"Juan\", \"María\", \"Pedro\"]\nprint(nombres[-1])\n#(En consola se vería el siguiente resultado:) Pedro"
  }
};

export const item20 = {
  type: "h4",
  info: [
    {
      text: "Cambiar el valor de la lista \"nombres\"",
      content: "plain"
    }
  ]
};

export const item21 = {
  type: "code",
  info: {
    language: "python",
    content: "nombres = [\"Juan\", \"María\", \"Pedro\"]\nnombres[1] = \"Ana\"\nprint(nombres)\n#(En consola se vería el siguiente resultado:) ['Juan', 'Ana', 'Pedro']"
  }
};

