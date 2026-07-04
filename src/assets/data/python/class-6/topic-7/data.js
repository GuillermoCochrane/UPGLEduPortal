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
      text: "Se solicita realizar un programa para mostrar el resultado de la division de dos números enteros",
      content: "plain"
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
          content: "# Se solicita realizar un programa para mostrar el resultado\n# de la division de dos números enteros\n\nnumero1 = int(input(\"Ingrese un numero: \"))\nnumero2 = int(input(\"Ingrese otro numero: \"))\n\nresultado = int(numero1 / numero2)\n\nprint(f\"El resultado de la division es: {resultado}\")"
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
      text: "Se solicita realizar un programa para mostrar el residuo de la division de dos números enteros",
      content: "plain"
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
          content: "# Se solicita realizar un programa para mostrar el residuo\n# de la division de dos números enteros\n\nnumero1 = int(input(\"Ingrese un numero: \"))\nnumero2 = int(input(\"Ingrese otro numero: \"))\n\nresultado = int(numero1 % numero2)\n\nprint(f\"El residuo de la division es: {resultado}\")"
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
      text: "Se solicita realizar un programa para calcular el area y el perimetro de un rectangulo, para ello debera crear las siguiente variables: ",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Alto (int)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ancho (int)",
          content: "bold"
        }
      ]
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "El usuario debera proporcionar los valores de largo y ancho y despues imprimiro el resultado del area y el perimetro:",
      content: "plain"
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
          text: "Area: ",
          content: "bold"
        },
        {
          text: "alto * ancho",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Perimetro: ",
          content: "bold"
        },
        {
          text: "(alto + ancho) * 2",
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
          content: "# Se solicita realizar un programa para calcular el area y el perimetro\n# de un rectangulo, para ello debera crear las siguiente variables:\n# - Alto (int), Ancho (int)\n# El usuario debera proporcionar los valores de largo y ancho,\n# y despues imprimir el resultado del area y el perimetro:\n# - Area: alto * ancho\n# - Perimetro: (alto + ancho) * 2\n\nalto = int(input(\"Ingrese el alto del rectangulo: \"))\nancho = int(input(\"Ingrese el ancho del rectangulo: \"))\n\narea = alto * ancho\nperimetro = (alto + ancho) * 2\n\nprint(\"El area del rectangulo es: \", area)\nprint(\"El perimetro del rectangulo es: \", perimetro)"
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
      text: "Se solicita realizar un programa para mostrar si el número ingresado es par o impar (Usando operadores logicos)",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Se solicita realizar un programa para mostrar si el número es par\n# o impar (Usando operadores logicos)\n\nnumero1 = int(input(\"Ingrese un numero: \"))\n\nif numero1 % 2 == 0:\n    print(\"El numero es par\")\nelse:\n    print(\"El numero es impar\")"
        }
      }
    ]
  }
};

export const item17 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 5:",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Se solicita realizar un programa para mostrar si el numero es positivo o negativo",
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
          content: "# Se solicita realizar un programa para mostrar si el numero\n# es positivo o negativo\n\nnumero1 = int(input(\"Ingrese un numero: \"))\n\nif numero1 > 0:\n    print(\"El numero es positivo\")\nelse:\n    print(\"El numero es negativo\")"
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
      text: "Se solicita realizar un programa que pida la edad de una persona y determine si es mayor o menor de edad (18)",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 6",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Se solicita realizar un programa que pida la edad de una persona\n# y determine si es mayor o menor de edad (18)\n\nedad = int(input(\"Ingrese la edad de la persona: \"))\n\nif edad >= 18:\n    print(\"La persona es mayor de edad\")\nelse:\n    print(\"La persona es menor de edad\")"
        }
      }
    ]
  }
};

export const item23 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 7:",
      content: "plain"
    }
  ]
};

export const item24 = {
  type: "p",
  info: [
    {
      text: "Se solicita realizar un programa que determine si un numero determine si es se encuentra entre 0 y 10",
      content: "plain"
    }
  ]
};

export const item25 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 7",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Se solicita realizar un programa que determine si un numero\n# se encuentra entre 0 y 10\n\nnumero1 = int(input(\"Ingrese un numero: \"))\n\nif numero1 >= 0 and numero1 <= 10:\n    print(\"El numero se encuentra entre 0 y 10\")\nelse:\n    print(\"El numero no se encuentra entre 0 y 10\")"
        }
      }
    ]
  }
};

export const item26 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 8:",
      content: "plain"
    }
  ]
};

export const item27 = {
  type: "p",
  info: [
    {
      text: "Crear un programa que permita saber si un padre puede ir a ver como juega su hijo dependiendo si es un dia de descanso o si esta de vacaciones (usar operadores logicos) - de lo contrario no puede ir.",
      content: "plain"
    }
  ]
};

export const item28 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 8",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Crear un programa que permita saber si un padre puede ir a ver\n# como juega su hijo dependiendo si es un dia de descanso o si\n# esta de vacaciones (usar operadores logicos) - de lo contrario\n# no puede ir.\n\ndia = input(\"Ingrese el dia de la semana: \")\nif dia == \"Sabado\" or dia == \"Domingo\":\n    print(\"Puede ir\")\n\nelse:\n    vacaciones = input(\"¿Se encuentra de vacaciones? \")\n    if vacaciones == \"Si\":\n        print(\"Puede ir\")\n    else:\n        print(\"No puede ir\")"
        }
      }
    ]
  }
};

export const item29 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 9:",
      content: "plain"
    }
  ]
};

export const item30 = {
  type: "p",
  info: [
    {
      text: "Ejemplo NOT (mismo ejercicio pero invierta el resultado)",
      content: "plain"
    }
  ]
};

export const item31 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 9",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejemplo NOT (mismo ejercicio pero invierta el resultado)\ndia = input(\"Ingrese el dia de la semana: \").capitalize()\nif not (dia == \"Sabado\") and not (dia == \"Domingo\"):\n    vacaciones = input(\"¿Se encuentra de vacaciones? \").capitalize()\n    if not (vacaciones == \"Si\"):\n        # Fraccionamos los f-strings largos para evitar desbordamiento horizontal en el visor de código\n        print(\n            f\"No puede ir porque es {dia} y no \"\n            f\"se encuentra de vacaciones\"\n        )\n    else:\n        print(\n            f\"Puede ir porque a pesar de que es {dia}, \"\n            f\"se encuentra de vacaciones\"\n        )\nelse:\n    print(f\"Puede ir porque es {dia}\")"
        }
      }
    ]
  }
};

export const item32 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 10:",
      content: "plain"
    }
  ]
};

export const item33 = {
  type: "p",
  info: [
    {
      text: "Crear un programa que permita al usuario ingresar su edad y determine si esta entre los 20 (de 20 a 30 años) y los 40 años(de 40 a 50 años).",
      content: "plain"
    }
  ]
};

export const item34 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 10",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Crear un programa que permita al usuario ingresar su edad y determine\n# si esta entre los 20 (de 20 a 30 años) y los 40 años (de 40 a 50 años).\n\nedad = int(input(\"Ingrese su edad: \"))\nif edad >= 20 and edad <= 30:\n    print(\"Esta entre los 20 a 30 años\")\nelif edad >= 40 and edad <= 50:\n    print(\"Esta entre los 40 a 50 años\")\nelse:\n    print(\n        \"No esta ni entre los 20 a 30 años \"\n        \"ni entre los 40 a 50 años\"\n    )"
        }
      }
    ]
  }
};

export const item35 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 11:",
      content: "plain"
    }
  ]
};

export const item36 = {
  type: "p",
  info: [
    {
      text: "Crear un programa que permita que el usuario ingrese dos numeros enteros y nos imprima cual es el mayor de los dos numeros ingresados",
      content: "plain"
    }
  ]
};

export const item37 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 11",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Crear un programa que permita que el usuario ingrese dos numeros enteros\n# y nos imprima cual es el mayor de los dos numeros ingresados\n\nnum1 = int(input(\"Ingrese el primer numero: \"))\nnum2 = int(input(\"Ingrese el segundo numero: \"))\n\nif num1 > num2:\n    print(\"El numero mayor es el primero:\", num1)\nelif num1 < num2:\n    print(\"El numero mayor es el segundo:\", num2)\nelse:\n    print(\"Los numeros son iguales\")"
        }
      }
    ]
  }
};

export const item38 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 12:",
      content: "plain"
    }
  ]
};

export const item39 = {
  type: "p",
  info: [
    {
      text: "TIENDA DE LIBROS: ",
      content: "bold"
    },
    {
      text: "Crear un programa que permita ingresar un libro y su autor, muestre el precio (float) y deje escribir si el envio es gratis(true o false)",
      content: "plain"
    }
  ]
};

export const item40 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 12",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# TIENDA DE LIBROS:\n# Crear un programa que permita ingresar un libro y su autor,\n# muestre el precio (float) y deje escribir si el envio es gratis\n# (true o false)\n\nlibro = input(\"Ingrese el nombre del libro: \")\nautor = input(\"Ingrese el nombre del autor: \")\nprecio = float(input(\"Ingrese el precio: \"))\nenvioGratis = input(\"¿El envio es gratis? \")\nenvio = False\nif envioGratis == \"SI\":\n    envio = True\n\nprint(\"\\n\")\nprint(\"Libro:\", libro)\nprint(\"Autor:\", autor)\nprint(f\"Precio: \\$ {precio}\")\nif envio:\n    print(\"El envio es gratis\")\nelse:\n    print(\"El envio no es gratis\")"
        }
      }
    ]
  }
};

