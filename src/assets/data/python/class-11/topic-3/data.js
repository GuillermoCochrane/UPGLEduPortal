export const item1 = {
  type: "h3",
  info: [
    {
      text: "Uso de \"map\" y \"join\"",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "map",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "La función ",
      content: "plain"
    },
    {
      text: "map",
      content: "bold"
    },
    {
      text: " toma dos argumentos: una función y un iterable. En este caso, la función ",
      content: "plain"
    },
    {
      text: "str",
      content: "bold"
    },
    {
      text: " convierte cada número al cuadrado en una cadena de texto. El resultado es un nuevo iterable que contiene las cadenas de texto de los cuadrados.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "# Ejemplo map\ncuadrados = (x**2 for x in range(10))\n\nnumeros_como_strings = map(str, cuadrados)\nprint(*numeros_como_strings)\n# Imprime: 0 1 4 9 16 25 36 49 64 81"
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "join",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "La función ",
      content: "plain"
    },
    {
      text: "join",
      content: "bold"
    },
    {
      text: " concatena elementos de un iterable en una cadena, separándolos por un delimitador especificado. En este caso, utilizamos ",
      content: "plain"
    },
    {
      text: "\" , \"",
      content: "bold"
    },
    {
      text: " como delimitador para unir las cadenas de texto de los cuadrados.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "# Ejemplo join\ncuadrados = (x**2 for x in range(10))\n\nnumeros_como_strings = map(str, cuadrados)\nresultado = \", \".join(numeros_como_strings)\nprint(resultado)\n# Imprime: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81"
  }
};

