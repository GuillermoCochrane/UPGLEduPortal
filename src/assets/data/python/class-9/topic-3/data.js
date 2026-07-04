export const item1 = {
  type: "h3",
  info: [
    {
      text: "Funciones de las listas",
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
          text: "len(lista): ",
          content: "bold"
        },
        {
          text: "Devuelve la longitud de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "list.count(elemento): ",
          content: "bold"
        },
        {
          text: "Devuelve el número de veces que aparece un elemento en la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "list.index(elemento): ",
          content: "bold"
        },
        {
          text: "Devuelve el índice de la primera aparición de un elemento en la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "list.reverse(): ",
          content: "bold"
        },
        {
          text: "Invierte el orden de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "list.copy(): ",
          content: "bold"
        },
        {
          text: "Crea una copia de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "sum(lista): ",
          content: "bold"
        },
        {
          text: "Suma todos los elementos de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "max(lista): ",
          content: "bold"
        },
        {
          text: "Devuelve el elemento máximo de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "min(lista): ",
          content: "bold"
        },
        {
          text: "Devuelve el elemento mínimo de la lista.",
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
      text: "Ejemplos de Funciones",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Calcula la longitud de la lista.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "# Calcula la longitud de la lista.\nnombres = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nprint(len(nombres))\n# Imprime: 5"
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Calcula el numero de veces que aparece un elemento en la lista.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "# Calcula el numero de veces que aparece un elemento en la lista.\nnombres = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nprint(nombres.count('Diego'))\n# Imprime: 1\nprint(nombres.count('Susanita'))\n# Imprime: 0"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Devuelve el índice de la primera aparición de un elemento en la lista.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "# Muestra el índice de la primera aparición de un elemento en la lista.\nnombres = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nprint(nombres.index('Juan'))\n# Imprime: 1"
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Devuelve la lista con orden inverso",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "# Devuelve la lista con orden inverso\nnombres = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nnombres.reverse()\nprint(nombres)\n# Imprime: ['etc', 'Diego', 'María', 'Juan', 'Ana']"
  }
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "Crea una copia de la lista.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "# Crea una copia de la lista.\nlista_original = [\"Ana\", \"Juan\", \"María\", \"Diego\", \"etc\"]\nlista_copia = lista_original.copy()\nprint(lista_copia)\n# Imprime: ['Ana', 'Juan', 'María', 'Diego', 'etc']"
  }
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Calcular la suma de todos los números de la lista",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_numeros = [1, 2, 3, 4, 5]\nsuma = sum(lista_numeros)\nprint(suma)\n# Imprime: 15"
  }
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "Encontrar el número máximo y mínimo de la lista",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_numeros = [1, 2, 3, 4, 5]\nmaximo = max(lista_numeros)\nminimo = min(lista_numeros)\nprint(maximo)\n# Imprime: 5\nprint(minimo)\n# Imprime: 1"
  }
};

