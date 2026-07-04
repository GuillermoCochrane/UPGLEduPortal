export const item1 = {
  type: "h3",
  info: [
    {
      text: "Slicing: 🔪",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "La operación de slicing en Python es una forma eficiente de extraer elementos de una secuencia, como una lista o una cadena de texto, de acuerdo con una cierta lógica. La sintaxis del slicing es la siguiente: secuencia [inicio : final : paso]",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h3",
  info: [
    {
      text: "Ejemplos:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Obtener los primeros dos elementos de la lista \"numeros\"",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "numeros = [1, 2, 3, 4, 5]\nsublista = numeros[:2]\nprint(sublista)\n# Imprime: [1, 2]"
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Obtener los últimos tres elementos de la lista \"nombres\"",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "nombres = [\"Ana\", \"Juan\", \"María\", \"Martina\", \"Juana\"]\nsublista = nombres[-3:]\nprint(sublista)\n# Imprime: ['María', 'Martina', 'Juana']"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Obtener los elementos del 1 al 4 de la lista \"mixta\"",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "mixta = [1, \"Hola\", True, \"Adiós\", 4]\nsublista = mixta[1:4]\nprint(sublista)\n# Imprime: ['Hola', True, 'Adiós']"
  }
};

