export const item1 = {
  type: "h3",
  info: [
    {
      text: "Tipos de datos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "En Python, los tipos de datos son esenciales para organizar y manipular información. Dominarlos es crucial para escribir código eficiente y preciso. En esta guía, exploraremos los tipos de datos básicos y avanzados, sus características y ejemplos prácticos para ayudarte a dominar este tema fundamental.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h3",
  info: [
    {
      text: "Tipos de datos básicos:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Numéricos:",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Enteros (int): ",
          content: "bold"
        },
        {
          text: "Números sin decimales, como 1, 2, 3. Ejemplo: edad = 25",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Punto flotante (float): ",
          content: "bold"
        },
        {
          text: "Números con decimales, como 3.14, 1.5.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Complejos (complex): ",
          content: "bold"
        },
        {
          text: "Números con parte real e imaginaria, como 1+2j. Ejemplo: z = 1 + 2j",
          content: "plain"
        }
      ]
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Ejemplo de Enteros:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "edad = 25 # Un valor entero para la edad\nprint(type(edad)) # permite ver el tipo de variable"
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Ejemplo de Punto flotante:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "precio = 12.99 # Un valor flotante para el precio\nprint(type(precio)) # permite ver el tipo de variable"
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Cadena",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Cadenas (str): ",
          content: "bold"
        },
        {
          text: "Secuencias de caracteres, como \"Hola mundo\", \"Python 3\". Ejemplo: nombre = \"Juan Pérez\"",
          content: "plain"
        }
      ]
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Ejemplo de cadena:",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "nombre: str = \"Ana Pérez\" # nombre: str los : y el str es un \"hint\" para decir \n# de que tipo de datos es la variable pero solo es una \"PISTA\" no es \n# obligatorio, ya que las variables en python son dinamicas.\ncadena = \"volvemos a empezar, tene cuidado que \" # Una cadena de texto\nprint(type(cadena)) # permite ver el tipo de variable\nprint (cadena * 3) # multiplicar la cadena por 3"
  }
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Booleanos",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Booleanos (bool): ",
          content: "bold"
        },
        {
          text: "Valores True o False que representan condiciones. Ejemplo: esta_activo = True",
          content: "plain"
        }
      ]
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Ejemplo de Booleanos:",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "python",
    content: "# Booleano como interruptor para controlar el flujo\nesta_activo = True # Un valor booleano para indicar si está activo\nprint(type(esta_activo)) # imprime el tipo de dato"
  }
};

export const item18 = {
  type: "h3",
  info: [
    {
      text: "Tipos de datos avanzados",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Listas (list): ",
          content: "bold"
        },
        {
          text: "Colecciones ordenadas y mutables de cualquier tipo de dato. Ejemplo: lista_nombres = [\"Ana\", \"Pedro\", \"María\"]",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Tuplas (tuple): ",
          content: "bold"
        },
        {
          text: "Colecciones ordenadas e inmutables de cualquier tipo de dato. Ejemplo: coordenadas = (10, 20, 30)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Diccionarios (dict): ",
          content: "bold"
        },
        {
          text: "Colecciones no ordenadas que mapean claves a valores. Ejemplo: diccionario_edades = {\"Ana\": 25, \"Pedro\": 30}",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Conjuntos (set): ",
          content: "bold"
        },
        {
          text: "Colecciones no ordenadas y sin duplicados de cualquier tipo de dato. Ejemplo: conjunto_colores = {\"azul\", \"verde\", \"rojo\"}",
          content: "plain"
        }
      ]
    }
  ]
};

export const item20 = {
  type: "p",
  info: [
    {
      text: "Todos los tipos de datos son almacenados en python como objetos. Un objeto es una entidad que contiene datos y métodos. los datos de un objeto se almacenan en atributos, mientras que los metodos son las acciones que el objeto puede realizar",
      content: "plain"
    }
  ]
};

