export const item1 = {
  type: "h3",
  info: [
    {
      text: "Métodos y Validaciones de datos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Métodos de la clase STR",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Estos métodos te permiten manipular el texto de diferentes maneras, como verificar si contiene letras mayúsculas, minúsculas o números, buscar subcadenas, unir cadenas, convertir mayúsculas a minúsculas y viceversa, etc.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "La clase str en Python representa cadenas de caracteres. Es uno de los tipos de datos fundamentales del lenguaje y se utiliza para almacenar texto.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Solo números:",
      content: "bold"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "entrada = input(\"Ingrese un número: \")\nprint(type(entrada))\n\nif entrada.isdigit():\n    print(f\"el numero ingresado es {entrada}.\")\nelse:\n    print(\"Error: Debe ingresar un número válido.\")\n    exit()"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Solo texto:",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "entrada = input(\"Ingrese texto: \")\nif entrada.isalpha() or entrada.isspace():\n    print(f\"el text ingresado es {entrada}.\")\nelse:\n    print(\"Error: Debe ingresar solo texto (letras o espacios).\")"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Algunos ejemplos:",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "table",
  columns: 0,
  title: [
    "Método",
    "Descripción",
    " Ejemplo"
  ],
  info: [
    {
      row: [
        "isalpha()",
        "Verifica si todos los caracteres son letras.",
        "texto = 'palabra'; es_letra = texto.isalpha(); print(es_letra)"
      ],
      content: "plain"
    },
    {
      row: [
        "isdigit()",
        "Verifica si todos los caracteres son dígitos (números).",
        "texto = '12345'; es_digito = texto.isdigit(); print(es_digito)"
      ],
      content: "plain"
    },
    {
      row: [
        "isalnum()",
        "Verifica si todos los caracteres son alfanuméricos (letras y números).",
        "texto = 'texto123'; es_alfanumerico = texto.isalnum(); print(es_alfanumerico)"
      ],
      content: "plain"
    },
    {
      row: [
        "islower()",
        "Verifica si todos los caracteres son minúsculas.",
        "texto = 'palabra en minusculas'; es_minuscula = texto.islower(); print(es_minuscula)"
      ],
      content: "plain"
    },
    {
      row: [
        "isupper()",
        "Verifica si todos los caracteres son mayúsculas.",
        "texto = 'PALABRA EN MAYÚSCULAS'; es_mayuscula = texto.isupper(); print(es_mayuscula)"
      ],
      content: "plain"
    },
    {
      row: [
        "isspace()",
        "Verifica si todos los caracteres son espacios en blanco.",
        "texto = ' '; es_espacio = texto.isspace(); print(es_espacio)"
      ],
      content: "plain"
    },
    {
      row: [
        "startswith()",
        "Verifica si la cadena comienza con una subcadena específica.",
        "texto = 'Hola mundo'; empieza_con_hola = texto.startswith('Hola'); print(empieza_con_hola)"
      ],
      content: "plain"
    },
    {
      row: [
        "endswith()",
        "Verifica si la cadena termina con una subcadena específica.",
        "texto = 'Hola, mundo, mundo'; termina_con_mundo = texto.endswith('mundo'); print(termina_con_mundo)"
      ],
      content: "plain"
    },
    {
      row: [
        "find()",
        "Busca la primera aparición de una subcadena dentro de la cadena.",
        "texto = 'Hola, mundo'; posicion_hola = texto.find('Hola'); print(posicion_hola)"
      ],
      content: "plain"
    },
    {
      row: [
        "rfind()",
        "Busca la última aparición de una subcadena dentro de la cadena.",
        "texto = 'Hola, mundo, mundo'; posicion_ultimo_mundo = texto.rfind('mundo'); print(posicion_ultimo_mundo)"
      ],
      content: "plain"
    },
    {
      row: [
        "count()",
        "Cuenta el número de apariciones de una subcadena dentro de la cadena.",
        "texto = 'Hola, Hola, mundo'; numero_de_holas = texto.count('Hola'); print(numero_de_holas)"
      ],
      content: "plain"
    },
    {
      row: [
        "replace()",
        "Reemplaza todas las apariciones de una subcadena por otra subcadena.",
        "texto = 'Hola, mundo. Hola, Tierra'; texto_reemplazado = texto.replace('Hola', 'Adiós'); print(texto_reemplazado)"
      ],
      content: "plain"
    },
    {
      row: [
        "strip()",
        "Elimina los espacios en blanco al principio y al final de la cadena.",
        "texto = ' Hola mundo '; texto_sin_espacios = texto.strip(); print(texto_sin_espacios)"
      ],
      content: "plain"
    },
    {
      row: [
        "lstrip()",
        "Elimina los espacios en blanco al principio de la cadena.",
        "texto = ' Hola mundo'; texto_sin_espacios_izquierda = texto.lstrip(); print(texto_sin_espacios_izquierda)"
      ],
      content: "plain"
    },
    {
      row: [
        "rstrip()",
        "Elimina los espacios en blanco al final de la cadena.",
        "texto = 'Hola mundo '; texto_sin_espacios_derecha = texto.rstrip(); print(texto_sin_espacios_derecha)"
      ],
      content: "plain"
    },
    {
      row: [
        "upper()",
        "Convierte todos los caracteres de la cadena a mayúsculas.",
        "texto = 'hola mundo'; texto_mayusculas = texto.upper(); print(texto_mayusculas)"
      ],
      content: "plain"
    },
    {
      row: [
        "lower()",
        "Convierte todos los caracteres de la cadena a minúsculas.",
        "texto = 'HOLA MUNDO'; texto_minusculas = texto.lower(); print(texto_minusculas)"
      ],
      content: "plain"
    },
    {
      row: [
        "capitalize()",
        "Convierte el primer caracter de la cadena a mayúscula y deja el resto en minúsculas.",
        "texto = 'hola mundo'; texto_capitalizado = texto.capitalize(); print(texto_capitalizado)"
      ],
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "Métodos de la clase INT",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "table",
  columns: 0,
  title: [
    "Método",
    "Descripción",
    "Ejemplo"
  ],
  info: [
    {
      row: [
        "isinstance(valor, int)",
        "Verifica si el valor es un número entero (int).",
        "valor = 10; es_entero = isinstance(valor, int); print(es_entero)"
      ],
      content: "plain"
    },
    {
      row: [
        "type(valor) is int",
        "Verifica si el tipo de dato del valor es int.",
        "valor = 10; es_entero = type(valor) is int; print(es_entero)"
      ],
      content: "plain"
    },
    {
      row: [
        ".isdigit()",
        "Verifica si el valor es una cadena que contiene solo dígitos (números).",
        "valor_string = '12345'; es_digito = valor_string.isdigit(); print(es_digito)"
      ],
      content: "plain"
    },
    {
      row: [
        "int(valor, base)",
        "Convierte un valor a un número entero (int), especificando la base numérica si es necesario.",
        "valor_string = '10'; numero_entero = int(valor_string); print(numero_entero)"
      ],
      content: "plain"
    },
    {
      row: [
        "try...except ValueError:",
        "Intenta convertir un valor a un número entero (int) y maneja el error si no es posible.",
        "valor_string = 'hola'; try: numero_entero = int(valor_string); print(numero_entero) except ValueError: print('Error: El valor no es un número entero')"
      ],
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Las funciones ",
          content: "plain"
        },
        {
          text: "isinstance()",
          content: "bold"
        },
        {
          text: " y ",
          content: "plain"
        },
        {
          text: "type()",
          content: "bold"
        },
        {
          text: " son más confiables para verificar si un valor es un número entero, ya que no dependen de la representación como cadena.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "La función ",
          content: "plain"
        },
        {
          text: ".isdigit()",
          content: "bold"
        },
        {
          text: " es útil para validar cadenas de texto que contienen solo dígitos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "La función ",
          content: "plain"
        },
        {
          text: "int()",
          content: "bold"
        },
        {
          text: " se puede usar para convertir valores a números enteros, pero es importante manejar posibles errores de conversión.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Más ejemplos: ",
      content: "bold"
    }
  ]
};

export const item15 = {
  type: "code",
  info: {
    language: "python",
    content: "# SOLO NUMEROS\nentrada = input(\"Ingrese un número: \")\nprint(type(entrada))\nprint(entrada.isdigit())\n\nif entrada.isdigit():\n    print(f\"el numero ingresado es {entrada}.\")\nelse:\n    print(f\"Error: Debe ingresar un número válido. fijate lo que pusiste!{entrada}\")\n    exit()\n\n# OTRA FORMA\nentrada = input(\"Ingrese un texto: \")\nprint(type(entrada))\nprint(entrada.isdigit())\n\nif not entrada.isdigit():\n    print(f\"el text ingresado es {entrada}.\")\nelse:\n    print(f\"Error: Debe ingresar un texto válido. fijate lo que pusiste!{entrada}\")\n    exit()"
  }
};

export const item16 = {
  type: "code",
  info: {
    language: "python",
    content: "# SOLO TEXTO\nentrada = input(\"Ingrese texto: \")\nif entrada.isalpha() or entrada.isspace():\n    print(f\"el text ingresado es {entrada}.\")\nelse:\n    print(\"Error: Debe ingresar solo texto (letras o espacios).\")"
  }
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "# METODOS DE LA CLASE La clase str\n# Estos métodos te permiten manipular el texto de diferentes maneras, como\n# verificar si contiene letras mayúsculas, minúsculas o números, buscar \n# subcadenas, unir cadenas, convertir mayúsculas a minúsculas y viceversa, etc.\n# Algunos ejemplos de cómo se usan estos métodos:\n\n# capitalize(): Convierte el primer caracter de la cadena a mayúscula\ntexto = \"hola mundo\"\ntexto_capitalizado = texto.capitalize()\nprint(texto_capitalizado) # Salida: Hola mundo\n\n# upper(): Convierte todos los caracteres de la cadena a mayúsculas.\ntexto = input(\"ingrese un texto:\")\nprint(texto.upper()) # Salida: HOLA MUNDO\n\n# lower(): Convierte todos los caracteres de la cadena a minúsculas.\ntexto = \"HOLA MUNDO\"\ntexto_minusculas = texto.lower()\nprint(texto_minusculas) # Salida: hola mundo\n\n# isalnum(): Verifica si todos los caracteres de la cadena son alfanuméricos\ntexto = \"texto123\"\nes_alfanumerico = texto.isalnum()\nprint(es_alfanumerico) # Salida: True\n\ntexto = \"texto con espacios\"\nes_alfanumerico = texto.isalnum()\nprint(es_alfanumerico) # Salida: False\n\n# isalpha(): Verifica si todos los caracteres de la cadena son letras.\ntexto = \"palabra\"\nes_letra = texto.isalpha()\nprint(es_letra) # Salida: True\n\ntexto = \"palabra123\"\nes_letra = texto.isalpha()\nprint(es_letra) # Salida: False\n\n# isdigit(): Verifica si todos los caracteres de la cadena son dígitos.\ntexto = \"12345\"\nes_digito = texto.isdigit()\nprint(es_digito) # Salida: True\n\ntexto = \"texto con seis\"\nes_digito = texto.isdigit()\nprint(es_digito) # Salida: False\n\n# isinstance(valor, int): Verifica si el valor es un número entero (int).\nvalor = 10\n\nif isinstance(valor, int):\n    print(f\"El valor {valor} es un número entero.\")\nelse:\n    print(f\"El valor {valor} no es un número entero.\")"
  }
};

export const item18 = {
  type: "link",
  info: [
    {
      text: "Mas información",
      content: "plain",
      link: "https://docs.python.org/es/3/library/string.html"
    }
  ]
};

