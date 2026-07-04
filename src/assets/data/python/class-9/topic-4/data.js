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
          text: "+: ",
          content: "bold"
        },
        {
          text: "Concatenar dos listas.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "*: ",
          content: "bold"
        },
        {
          text: "Repetir una lista un número de veces.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "in: ",
          content: "bold"
        },
        {
          text: "Comprobar si un elemento está en la lista.",
          content: "plain"
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
      text: " + : Concatenar dos listas.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "lista1 = [1, 2, 3]\nlista2 = [4, 5, 6]\nlista_concatenada = lista1 + lista2\nprint(lista_concatenada)\n# Imprime: [1, 2, 3, 4, 5, 6]"
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "* : Repetir una lista un número de veces.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "lista = [\"Hola\"]\nlista_repetida = lista * 3\nprint(lista_repetida)\n# Imprime: ['Hola', 'Hola', 'Hola']"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Iterar listas",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "nombres = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nfor nombre in nombres:\n    print(nombre)\nelse:\n    print(\"no hay mas nombres en la lista\")\n# Imprime:\n# Ana\n# Juan\n# María\n# Diego\n# etc\n# no hay mas nombres en la lista"
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Multiplicar cada número de la lista por 2",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_numeros = [1, 2, 3, 4, 5]\nlista_numeros = [numero * 2 for numero in lista_numeros]\nprint(lista_numeros)\n# Imprime: [2, 4, 6, 8, 10]"
  }
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "Imprimir los números pares de la lista",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_numeros = [1, 2, 3, 4, 5]\nfor numero in lista_numeros:\n    if numero % 2 == 0:\n        print(numero) # Imprime: 2, 4"
  }
};

