export const item1 = {
  type: "h3",
  info: [
    {
      text: "Actividades 💬",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 1:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Crear una lista de nombres y luego:",
      content: "bold"
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
          text: "Imprimir la longitud de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Agregar un nuevo nombre al final de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eliminar el primer nombre de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Buscar un nombre en la lista e imprimir si está o no presente.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ordenar la lista alfabéticamente.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejercicio 1- Crear una lista de nombres y luego:\nlista_nombre = ['Juan', 'Pedro', 'Maria', 'Roberto', 'Ana', 'Nicolás']\nprint(\"listado de nombres\")\nprint(lista_nombre) # Imprime: ['Juan', 'Pedro', 'Maria', 'Roberto', 'Ana', 'Nicolás']\nprint(\"\n\")\n\n# Imprimir la longitud de la lista.\nprint(\"longitud de la lista\")\nprint(len(lista_nombre)) # Imprime: 6\nprint(\"\n\")\n\n# Agregar un nuevo nombre al final de la lista.\nnombre_a_agregar = input('Ingrese un nombre: ')\nlista_nombre.append(nombre_a_agregar) # Si ingresamos \"Diego\"\nprint(\"Lista de nombres con el nuevo nombre\")\nprint(lista_nombre) # Imprime: ['Juan', 'Pedro', 'Maria', 'Roberto', 'Ana', 'Nicolás', 'Diego']\nprint(\"\n\")\n\n# Eliminar el primer nombre de la lista.\nlista_nombre.pop(0)\nprint(\"Lista de nombres sin el primer nombre\")\nprint(lista_nombre) # Imprime: ['Pedro', 'Maria', 'Roberto', 'Ana', 'Nicolás', 'Diego']\nprint(\"\n\")\n\n# Buscar un nombre en la lista e imprimir si está o no presente.\nnombre_a_buscar = input('Ingrese un nombre: ')\nif nombre_a_buscar in lista_nombre:\n    print(f'El nombre {nombre_a_buscar} está en la lista')\nelse:\n    print(f'El nombre {nombre_a_buscar} no está en la lista')\nprint(\"\n\")\n\n# Ordenar la lista alfabéticamente\nlista_nombre.sort()\nprint(\"Lista de nombres ordenada alfabéticamente\")\nprint(lista_nombre) # Imprime: ['Ana', 'Diego', 'Juan', 'Maria', 'Nicolás', 'Pedro', 'Roberto']\nprint(\"\\n\")"
        }
      }
    ]
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Crear una lista de números y luego:",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Calcular la suma de todos los números de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Encontrar el número máximo y mínimo de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Multiplicar cada número de la lista por 2.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Imprimir los números pares de la lista.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item9 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejercicio 2 - Crear una lista de números y luego:\nlista_numeros = [1, 23, 63, 14, 95, 46, 77, 8, 39, 51]\nprint(\"lista de números\")\nprint(lista_numeros) # Imprime: [1, 23, 63, 14, 95, 46, 77, 8, 39, 51]\nprint(\"\n\")\n\n# Calcular la suma de todos los números de la lista.\nsuma_numeros = sum(lista_numeros)\nprint(f\"suma de todos los números: {suma_numeros}\")\n# Imprime: suma de todos los números: 417\nprint(\"\n\")\n\n# Encontrar el número máximo y mínimo de la lista.\nnumero_max = max(lista_numeros)\nnumero_min = min(lista_numeros)\nprint(f\"número máximo: {numero_max}\") # Imprime: número máximo: 95\nprint(\"\n\")\nprint(f\"número mínimo: {numero_min}\") # Imprime: número mínimo: 1\nprint(\"\n\")\n\n# Multiplicar cada número de la lista por 2.\nlista_numeros_x_2 = [x * 2 for x in lista_numeros]\nprint(f\"lista de números multiplicados por 2: {lista_numeros_x_2}\")\n# Imprime: lista de números multiplicados por 2:\n# [2, 46, 126, 28, 190, 92, 154, 16, 78, 102]\nprint(\"\n\")\n\n# Imprimir los números pares de la lista.\nfor numero in lista_numeros:\n    if numero % 2 == 0:\n        print(f\"El número {numero} es par\")\n        # Imprime: El número 14 es par, El número 46 es par, El número 8 es par\nprint(\"\\n\")"
        }
      }
    ]
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Crear una lista de palabras y luego:",
      content: "bold"
    }
  ]
};

export const item12 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Contar cuántas veces aparece una palabra específica en la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Invertir el orden de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Unir dos listas en una sola.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Dividir una lista en dos sublistas.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item13 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejercicio 3 - Crear una lista de palabras y luego:\nlista_palabras = [\"perro\", \"pan\", \"bicicleta\", \"chocolate\", \"armadura\", \"examen\", \"chocolate\"]\nprint(f\"El listado de palabras es: {lista_palabras}\")\n# Imprime: El listado de palabras es:\n# ['perro', 'pan', 'bicicleta', 'chocolate', 'armadura', 'examen', 'chocolate']\nprint(\"\\n\")\n\n# Contar cuántas veces aparece \"chocolate\" en la lista.\nprint(f\"El número de veces que aparece 'chocolate' en la lista es: {lista_palabras.count('chocolate')}\")\n# Imprime: El número de veces que aparece 'chocolate' en la lista es: 2\nprint(\"\\n\")\n\n# Invertir el orden de la lista.\nlista_palabras.reverse()\nprint(f\"La lista invertida es: {lista_palabras}\")\n# Imprime: La lista invertida es:\n# ['chocolate', 'examen', 'armadura', 'chocolate', 'bicicleta', 'pan', 'perro']\nprint(\"\\n\")\n\n# Dividir una lista en dos sublistas.\nsublista1 = lista_palabras[0:2]\nsublista2 = lista_palabras[2:5]\nprint(f\"La primera sublista es: {sublista1} y la segunda es: {sublista2}\")\n# Imprime: La primera sublista es: ['chocolate', 'examen']\n# y la segunda es: ['armadura', 'chocolate', 'bicicleta']\nprint(\"\\n\")\n\n# Unir dos listas en una sola.\nprint(f\"La lista unida es: {sublista2 + sublista1}\")\n# Imprime: La lista unida es:\n# ['armadura', 'chocolate', 'bicicleta', 'chocolate', 'examen']\nprint(\"\\n\")"
        }
      }
    ]
  }
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 4:",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Simular una cesta de la compra:",
      content: "bold"
    }
  ]
};

export const item16 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear una lista con los productos que se van a comprar.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Agregar un nuevo producto a la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eliminar un producto de la lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Imprimir la lista",
          content: "plain"
        }
      ]
    }
  ]
};

export const item17 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejercicio 4. Simular una cesta de la compra:\n\n# Crear una lista con los productos que se van a comprar.\nlistado_de_compras = [\"tomates\", \"harina\", \"aceite\", \"leche\", \"pan\", \"sal\", \"cebolla\", \"queso\", \"vinagre\"]\nprint(f\"La lista de productos a comprar es: {listado_de_compras}\")\n# Imprime: La lista de productos a comprar es:\n# ['tomates', 'harina', 'aceite', 'leche', 'pan', 'sal', 'cebolla', 'queso', 'vinagre']\nprint(\"\\n\")\n\n# Agregar un nuevo producto a la lista.\nlistado_de_compras.append(\"galetitas\")\nprint(f\"La nueva lista de productos a comprar es: {listado_de_compras}\")\n# Imprime: La nueva lista de productos a comprar es:\n# ['tomates', 'harina', 'aceite', 'leche', 'pan', 'sal', 'cebolla', 'queso', 'vinagre', 'galetitas']\nprint(\"\\n\")\n\n# Eliminar un producto de la lista.\nlistado_de_compras.remove(\"aceite\")\nprint(f\"La lista de productos a comprar con producto eliminado es:\\n{listado_de_compras}\")\n# Imprime: La lista de productos a comprar con producto eliminado es:\n# ['tomates', 'harina', 'leche', 'pan', 'sal', 'cebolla', 'queso', 'vinagre', 'galetitas']\nprint(\"\\n\")\n\n# Imprimir la lista.\nprint(f\"La lista de productos a comprar es: {listado_de_compras}\")\n# Imprime: La lista de productos a comprar es:\n# ['tomates', 'harina', 'leche', 'pan', 'sal', 'cebolla', 'queso', 'vinagre', 'galetitas']\nprint(\"\\n\")"
        }
      }
    ]
  }
};

