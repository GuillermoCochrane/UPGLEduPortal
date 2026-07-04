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
      text: "Crea una función que nos salude por consola.",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "#Crea una funcion que nos salude por consola\ndef saludar(nombre: str | None = \", debe ingresar su nombre. \"):\n    print(f\"Hola {nombre}\")\n\nsaludar()\n# Imprime: Hola , debe ingresar su nombre. "
        }
      }
    ]
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Crea una función para calcular el área de un cuadrado.",
      content: "bold"
    }
  ]
};

export const item7 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Crea una funcion para calcular el área de un cuadrado\ndef area(lado: int | None = 0) -> int:\n    \"\"\"\n    Función que devuelve el área de un cuadrado\n    \"\"\"\n    return lado * lado\nlado = 5\nprint(f\"El área de un cuadrado es {area(lado)}\")\n# Imprime: El área de un cuadrado es 25"
        }
      }
    ]
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Crea una función para ordenar una lista de palabras.",
      content: "bold"
    }
  ]
};

export const item10 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Crea una funcion para ordenar una lista de palabras\ndef ordenar(palabras: list[str] | None = []) -> list[str]:\n    \"\"\"\n    Función que devuelve una lista ordenada de palabras\n    \"\"\"\n    return sorted(palabras)\n\npalabras = [\"perro\", \"gato\", \"raton\", \"manzana\", \"pescado\", \"anzuelo\"]\nprint(f\"La lista ordenada es: {ordenar(palabras)}\")\n# Imprime: La lista ordenada es:\n# ['anzuelo', 'gato', 'manzana', 'pescado', 'perro', 'raton']"
        }
      }
    ]
  }
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 4:",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Función Verificar si un número es par o impar.",
      content: "bold"
    }
  ]
};

export const item13 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "#Función Verificar si un número es par o impar.\ndef es_par(numero: int | None = 0) -> bool:\n    \"\"\"\n    Función que devuelve True si el número es par y False si es impar\n    \"\"\"\n    if numero % 2 == 0:\n        return True\n    else:\n        return False\n\nnumero = int(input(\"Ingrese un número: \"))\nprint(f\"El número {numero} es {'par' if es_par(numero) else 'impar'}\")"
        }
      }
    ]
  }
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 5:",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Función de conversión de Temperatura. (Facil): ",
      content: "bold"
    },
    {
      text: "Escribe una función que convierta la temperatura de Celsius a Fahrenheit y viceversa. ",
      content: "plain"
    },
    {
      text: "La función debe aceptar dos argumentos: ",
      content: "plain"
    },
    {
      text: "el valor de la temperatura",
      content: "italic"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "una cadena",
      content: "italic"
    },
    {
      text: " que indique si se está convirtiendo a ",
      content: "plain"
    },
    {
      text: "Celsius('C') ",
      content: "bold"
    },
    {
      text: "o a ",
      content: "plain"
    },
    {
      text: "Fahrenheit('F').",
      content: "bold"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Una ayuda practica ¡se necesita usar if, elif y else!",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "p",
  info: [
    {
      text: "Fórmula celsius: ",
      content: "bold"
    },
    {
      text: " (temperatura - 32) * 5/9",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Fórmula Fahrenheit: ",
      content: "bold"
    },
    {
      text: " temperatura * 9/5 + 32",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 5",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribe una función que convierta la temperatura de Celsius a Fahrenheit y viceversa.\ndef temperatura(temperatura: float | None = 0, unidad: str | None = \"C\") -> float:\n    \"\"\"\n    Función que convierte la temperatura de Celsius a Fahrenheit y viceversa\n    \"\"\"\n    while True:\n        if unidad.upper() == \"F\":\n            return [(temperatura * 9/5) + 32, unidad]\n        elif unidad.upper() == \"C\":\n            return [(temperatura - 32) * 5/9, unidad]\n        else:\n            unidad = input(\"Debe ingresar 'C' o 'F': \")\n\ntemperatura_original = float(input(\"Ingrese la temperatura a convertir: \"))\nunidad = input(\"¿Desea convertir a Fahrenheit (F) o Celsius (C)?: \")\ntemperatura_convertida = temperatura(temperatura_original, unidad)\nprint(f\"La temperatura convertida es {temperatura_convertida[0]}°{temperatura_convertida[1].upper()}\")"
        }
      }
    ]
  }
};

export const item20 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 6:",
      content: "plain"
    }
  ]
};

export const item21 = {
  type: "p",
  info: [
    {
      text: "Función de Calculo Factorial. (Facil): ",
      content: "bold"
    },
    {
      text: "Escribe una función que calcule el factorial de un numero dado. El factorial de un número entero positivo se define como el producto de todos los enteros positivos menores o iguales al número. ",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    },
    {
      text: "Factorial de 4 = 24(4 x 3 x 2 x 1)",
      content: "plain"
    }
  ]
};

export const item23 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 6",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribe una función que calcule el factorial de un numero dado.\ndef factorial(numero: int) -> int:\n    \"\"\"\n    Función que calcula el factorial de un número dado\n    \"\"\"\n    if numero < 0:\n        return \"El numero debe ser positivo\"\n    elif numero == 0:\n        return 0\n    else:\n        factorial = 1\n        lista_parcial = []\n        for i in range(1, numero + 1):\n            factorial *= i\n            lista_parcial.append(factorial)\n        return [lista_parcial, factorial]\n\nnumero = int(input(\"Ingrese un número: \"))\nprint(f\"El factorial de {numero} es {factorial(numero)[1]} y todos los resultados son {factorial(numero)[0]}\")"
        }
      }
    ]
  }
};

export const item24 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 7:",
      content: "plain"
    }
  ]
};

export const item25 = {
  type: "p",
  info: [
    {
      text: "Función de Secuencia Fibonacci (Medio): ",
      content: "bold"
    },
    {
      text: "Desarrolla una función que genere una lista con los primeros ",
      content: "plain"
    },
    {
      text: " 'n' ",
      content: "bold"
    },
    {
      text: "números de la secuencia de Fibonacci, donde cada número es la suma de los dos anteriores comenzando con ",
      content: "plain"
    },
    {
      text: "0 ",
      content: "bold"
    },
    {
      text: "y ",
      content: "plain"
    },
    {
      text: "1. ",
      content: "bold"
    }
  ]
};

export const item26 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    },
    {
      text: "el décimo número de la secuencia es: 34",
      content: "plain"
    }
  ]
};

export const item27 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 7",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Desarrolla una función que genere una lista con los primeros\n# 'n' números de la secuencia de Fibonacci\ndef fibonacci(numero: int) -> list:\n    \"\"\"\n    Función que genere una lista con los primeros 'n' números\n    de la secuencia de Fibonacci, donde cada número es la suma\n    de los dos anteriores comenzando con 0 y 1\n    \"\"\"\n    if numero < 0:\n        numero = int(input(\"El numero debe ser positivo, ingrese un numero: \"))\n    elif numero == 0:\n        return [0]\n    elif numero == 1:\n        return [0, 1]\n    else:\n        lista_fibonacci = [0, 1]\n        aurea = []\n        for i in range(2, numero):\n            lista_fibonacci.append(lista_fibonacci[i-1] + lista_fibonacci[i-2])\n            if lista_fibonacci[i-2] != 0:\n                aurea.append(lista_fibonacci[i-1] / lista_fibonacci[i-2])\n        return [lista_fibonacci, lista_fibonacci[numero-1], aurea[i-3]]\n\nnumero = int(input(\"Ingrese un numero: \"))\np1 = f\"Los primeros {numero} numeros de la secuencia de Fibonacci son:\\n\"\np2 = f\"{fibonacci(numero)[0]}\\ny el {numero}º número es: {fibonacci(numero)[1]}\\n\"\np3 = f\"y el número aureo aproximado es: {fibonacci(numero)[2]}\"\nprint(p1 + p2 + p3)"
        }
      }
    ]
  }
};

export const item28 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 8:",
      content: "plain"
    }
  ]
};

export const item29 = {
  type: "p",
  info: [
    {
      text: "Función de encontrar el maximo entre 3 numeros: ",
      content: "bold"
    },
    {
      text: "Cree una función que permita ingresar 3 números y nos muestre cual es el mayor",
      content: "plain"
    }
  ]
};

export const item30 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 8",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Funcion de encontrar el maximo entre 3 numeros\ndef el_mayor(numero1: int, numero2: int, numero3: int) -> int:\n    \"\"\"\n    Funcion que nos muestre cual es el mayor entre 3 numeros\n    \"\"\"\n    numero_mayor = numero1\n    if numero_mayor < numero2:\n        numero_mayor = numero2\n    if numero_mayor < numero3:\n        numero_mayor = numero3\n    return numero_mayor\n\nnumero1 = int(input(\"Ingrese el primer numero: \"))\nnumero2 = int(input(\"Ingrese el segundo numero: \"))\nnumero3 = int(input(\"Ingrese el tercer numero: \"))\np1 = f\"El mayor entre {numero1}, {numero2} \"\np2 = f\"y {numero3} es: {el_mayor(numero1, numero2, numero3)}\"\nprint(p1 + p2)"
        }
      }
    ]
  }
};

export const item31 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 9:",
      content: "plain"
    }
  ]
};

export const item32 = {
  type: "p",
  info: [
    {
      text: "Generar una lista de números aleatorios: ",
      content: "bold"
    },
    {
      text: "Generar un programa que permita el ingreso de la cantidad de numeros aleatorios a generar y los muestre.",
      content: "plain"
    }
  ]
};

export const item33 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 9",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Generar una lista de números aleatorios:\nimport random\n\ndef lista_aleatoria(numero: int | None = 1, rango: int | None = 100) -> list:\n    \"\"\"\n    Funcion que genera una lista de N números aleatorios positivos,\n    donde N es el numero de numeros a generar, y el rango es el\n    rango de los números aleatorios. Si no se ingresa el numero,\n    se usará el valor por defecto de 1, y si no se ingresa el\n    rango, se usará el valor por defecto de 100\n    \"\"\"\n    lista_aleatoria = []\n    for i in range(numero):\n        lista_aleatoria.append(random.randint(1, rango))\n    return lista_aleatoria\n\nnumero = int(input(\"Ingrese la cantidad de numeros aleatorios a generar: \"))\nrango = int(input(\"Ingrese el rango de los números aleatorios: \"))\np1 = \"La lista de números aleatorios generados son: \"\np2 = f\"{lista_aleatoria(numero, rango)}\"\nprint(p1 + p2)"
        }
      }
    ]
  }
};

