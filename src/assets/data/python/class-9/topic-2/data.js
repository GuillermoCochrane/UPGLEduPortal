export const item1 = {
  type: "h3",
  info: [
    {
      text: "Operadores con listas",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Agregar elementos: ",
          content: "bold"
        },
        {
          text: "Se puede agregar un elemento a una lista utilizando usando el método ",
          content: "plain"
        },
        {
          text: "append()",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eliminar elementos: ",
          content: "bold"
        },
        {
          text: "Se puede eliminar un elemento de una lista utilizando el método  ",
          content: "plain"
        },
        {
          text: "remove()",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Encontrar elementos: ",
          content: "bold"
        },
        {
          text: "Se puede buscar un elemento en una lista utilizando el operador ",
          content: "plain"
        },
        {
          text: "in",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ordenar la lista: ",
          content: "bold"
        },
        {
          text: "Se puede ordenar la lista utilizando el método ",
          content: "plain"
        },
        {
          text: "sort()",
          content: "bold"
        }
      ]
    }
  ]
};

export const item3 = {
  type: "h3",
  info: [
    {
      text: "Ejemplo de uso:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Crear una lista de compras",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "compras = [\"Manzanas\", \"Leche\", \"Pan\", \"Huevos\"]\nprint(compras)\n#(En consola se vería el siguiente resultado:) ['Manzanas', 'Leche', 'Pan', 'Huevos']"
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Agregar un elemento a la lista",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "compras = [\"Manzanas\", \"Leche\", \"Pan\", \"Huevos\"]\ncompras.append(\"Queso\")\nprint(compras)\n#(En consola se vería el siguiente resultado:) ['Manzanas', 'Leche', 'Pan', 'Huevos', 'Queso']"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Eliminar un elemento de la lista",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "compras = [\"Manzanas\", \"Leche\", \"Pan\", \"Huevos\"]\ncompras.remove(\"Leche\")\nprint(compras)\n#(En consola se vería el siguiente resultado:) ['Manzanas', 'Pan', 'Huevos']"
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Buscar un elemento en la lista",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "compras = [\"Manzanas\", \"Leche\", \"Pan\", \"Huevos\"]\nesta_pan = \"Pan\" in compras\nprint(esta_pan)\n#(En consola se vería el siguiente resultado:) True"
  }
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "Comprobar si un elemento está en la lista (numérica)",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "numeros = [1, 2, 3, 4, 5]\nesta_el_tres = 3 in numeros\nprint(esta_el_tres)\n#(En consola se vería el siguiente resultado:) True"
  }
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Comprobar si un elemento está en la lista (palabras)",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "code",
  info: {
    language: "python",
    content: "nombres = [\"Diego\", \"Juan\", \"Maria\"]\nnombre = \"Diego\"\nif nombre in nombres:\n    print(f\"{nombre} está en la lista - es un genio\")\n    # Imprime: Diego está en la lista - es un genio\nelse:\n    print(f\"{nombre} no está en la lista\")\n    # Imprime: Diego no está en la lista"
  }
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "Ordenar la lista",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_compras = [\"Leche\", \"Pan\", \"Huevos\", \"Manzanas\"]\nlista_compras.sort()\nprint(lista_compras)\n# Imprime: ['Huevos', 'Leche', 'Manzanas', 'Pan']"
  }
};

