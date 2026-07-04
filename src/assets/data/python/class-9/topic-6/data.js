export const item1 = {
  type: "h3",
  info: [
    {
      text: "Listas anidadas: 🧶",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Se pueden crear listas dentro de otras listas.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_anidada = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(lista_anidada)\n# Imprime: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
  }
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Acceder a un elemento de la lista anidada",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_anidada = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nelemento = lista_anidada[1][2]\nprint(elemento)\n# Imprime: 6"
  }
};

