export const item1 = {
  type: "h3",
  info: [
    {
      text: "Ejemplos de Generadores de Expresiones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo 1: ",
      content: "bold"
    },
    {
      text: "Detección de Palabras Clave",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "python",
    content: "texto = \"Este es un ejemplo de texto con palabras clave.\"\npalabras_clave = [\"ejemplo\", \"texto\", \"clave\"]\n\npalabra_detectada = next(palabra for palabra in palabras_clave if palabra in texto)\nprint(f\"Palabra detectada: {palabra_detectada}\")\n# Imprime: Palabra detectada: ejemplo"
  }
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo 2: ",
      content: "bold"
    },
    {
      text: "Generador de Cuadrados",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Definimos el generador de expresiones:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "# generador de cuadrados\ncuadrados = (x**2 for x in range(10))"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Método 1: ",
      content: "bold"
    },
    {
      text: "Usando un bucle for",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "#Imprimir usando un bucle for\ncuadrados = (x**2 for x in range(10))\n\nfor cuadrado in cuadrados:\n    print(cuadrado, end=\" \")\n    print(\"\\\\n\")\n# Imprime: 0 1 4 9 16 25 36 49 64 81"
  }
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Nota: ",
      content: "bold"
    },
    {
      text: "El generador se ha agotado después del bucle for anterior. Para los siguientes métodos, necesitamos recrear el generador.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Método 2: ",
      content: "bold"
    },
    {
      text: "Convertir a lista y luego imprimir",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "# Convertir a lista y luego imprimir\ncuadrados = (x**2 for x in range(10))\n\nlista_cuadrados = list(cuadrados)\nprint(lista_cuadrados)\n# Imprime: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
  }
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Método 3: ",
      content: "bold"
    },
    {
      text: "Usar la función print con desempaquetado",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "# Usar la función print con desempaquetado\ncuadrados = (x**2 for x in range(10))\nprint(*cuadrados)\n# Imprime: 0 1 4 9 16 25 36 49 64 81"
  }
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Método 4: ",
      content: "bold"
    },
    {
      text: "Usar comprensión de lista en print (crea una lista temporal)",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "code",
  info: {
    language: "python",
    content: "# Usar comprensión de lista en print\ncuadrados = (x**2 for x in range(10))\nprint([x for x in cuadrados])\n# Imprime: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
  }
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Método 5: ",
      content: "bold"
    },
    {
      text: "Usar join con map (para grandes conjuntos de datos)",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "# Método 5: Usar join con map\ncuadrados = (x**2 for x in range(10))\nprint(\", \".join(map(str, cuadrados)))\n# Imprime: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81"
  }
};

export const item18 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo 3: ",
      content: "plain"
    },
    {
      text: "Generador de Números Pares",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "code",
  info: {
    language: "python",
    content: "# Generador de Números Pares\npares = ((i, i*2) for i in range(4))\nprint(*pares)\n# Imprime: (0, 0) (1, 2) (2, 4) (3, 6)"
  }
};

export const item20 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo 4: ",
      content: "plain"
    },
    {
      text: "Generador con Filtro",
      content: "plain"
    }
  ]
};

export const item21 = {
  type: "p",
  info: [
    {
      text: "Este generador filtra los números pares del 0 al 10:",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "code",
  info: {
    language: "python",
    content: "# Generador del 1 al 10 con Filtro de Números Pares\npares_filtrados = (n for n in range(10) if n % 2 == 0)\n\nlista_pares_filtrados = list(pares_filtrados)\nprint(lista_pares_filtrados)\n# Imprime: [0, 2, 4, 6, 8]"
  }
};

