export const item1 = {
  type: "h3",
  info: [
    {
      text: "Comprensiones de Listas vs Generadores de Expresiones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Comprensiones de Listas:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crean listas: ",
          content: "bold"
        },
        {
          text: "Su objetivo principal es crear una lista de elementos en memoria.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Sintaxis más concisa: ",
          content: "bold"
        },
        {
          texte: "Utilizan una sintaxis compacta similar a las listas para definir la lógica de creación.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eficiencia para conjuntos de datos pequeños: ",
          content: "bold"
        },
        {
          text: "Adecuadas para conjuntos de datos pequeños que caben en la memoria.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Resultado completo: ",
          content: "bold"
        },
        {
          text: "Almacena la lista completa en la memoria antes de devolverla.",
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
      text: "Generadores de Expresiones:",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crean iterables: ",
          content: "bold"
        },
        {
          text: "Su objetivo principal es generar elementos uno a uno, sin almacenar toda la secuencia.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Sintaxis similar a las comprensiones de listas: ",
          content: "bold"
        },
        {
          text: "Utilizan una sintaxis similar a las comprensiones de listas, pero con paréntesis en lugar de corchetes o llaves.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eficiencia para conjuntos de datos grandes: ",
          content: "bold"
        },
        {
          text: "Ideales para procesar grandes conjuntos de datos de forma iterativa, liberando memoria.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Resultado progresivo: ",
          content: "bold"
        },
        {
          text: "Devuelven un objeto iterable que genera elementos uno a uno, sin almacenar la secuencia completa.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Crear una lista de cuadrados de 1 a 110000 para ver la diferencia de tiempo en ejecución:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Comprensión de Lista: ",
      content: "bold"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "# Comprensión de Lista\ncuadrados_lista = [x**2 for x in range(1, 110000)]\nprint(cuadrados_lista)\n# Imprime: [1, 4, 9, 16, 25, ...]"
  }
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Generador de Expresión: ",
      content: "bold"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "# Generador de Expresión\ncuadrados_generador = (x**2 for x in range(1, 110000))\nprint(*cuadrados_generador)\n# Imprime: 1 4 9 16 25 ..."
  }
};

