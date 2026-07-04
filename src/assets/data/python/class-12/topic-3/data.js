export const item1 = {
  type: "h3",
  info: [
    {
      text: "Decoradores de Funciones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Dentro de las funciones podemos ",
      content: "plain"
    },
    {
      text: "\"decorarla\"",
      content: "italic"
    },
    {
      text: " para ayudarnos en un futuro a recordar que hace, declarando los datos que espera y la salida que pensamos darle, esto es simplemente visual ya que Python no es fuertemente tipado, por lo que dentro de la función tendremos que hacer la logica para que por ejemplo de un str obtengamos en el return un int.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Estos decoradores van en los parámetros donde después del nombre de la variable colocamos ",
      content: "plain"
    },
    {
      text: ":",
      content: "bold"
    },
    {
      text: " y el tipo de dato esperado y al final de la declaración con ",
      content: "plain"
    },
    {
      text: ":",
      content: "bold"
    },
    {
      text: " podemos colocar la salida esperada, en este caso texto esperamos que sea un str y ",
      content: "plain"
    },
    {
      text: "valor_de_retorno",
      content: "italic"
    },
    {
      text: " un int.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "def transformar_str_int(texto:str)->int:\n    #codigo de la función\n    return valor_de_retorno"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Pero no solo eso, tambien podemos agregarle un atributo extra en los parámetros para poner por defecto en caso de que el usuario no coloque nada y sean si o si necesarios para la lógica de la función, usando la siguiente expresión: ",
      content: "plain"
    },
    {
      text: "| None = (valor por defecto).",
      content: "bold"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "def numero (texto_input:str|None= \"Ingrese un numero:\")-> int:\n    while True:\n        numero_1 = input (texto_input)\n        if numero_1.isdigit():\n            numero_1 = int(numero_1)\n            if numero_1 > 0:\n                break\n            else:\n                print(\"El valor ingresado debe ser mayor a 0\")\n        else:\n            print(\"El valor ingresado no es un Nro\")\n    return numero_1\ncantidad = numero(\"Ingrese la cantidad de veces a calcular:\")"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "En este caso, cuando le pasamos un parametro a nuestra función ",
      content: "plain"
    },
    {
      text: "numero()",
      content: "italic"
    },
    {
      text: " tomará lo que tiene dentro de los parentesis como parametro para imprimir el primer mensaje.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "def calcular(cantidad:int|None=2):\n    mayor = 0\n\n    for i in range(cantidad):\n\n        numero_1 = numero()\n        print(f\"El numero ingresado es:{numero_1}\")\n        if numero_1 > mayor:\n            mayor = numero_1\n    print(f\"El numero mayor es : {mayor}\")\n    return"
  }
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "En este otro ejemplo realizamos una función que se encargue de hacer bucles y buscar el mayor entre X cantidad de números, en caso de no especificárselo dentro de los parentesis nos dará dos como predeterminado.",
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
          text: "calcular(): ",
          content: "bold"
        },
        {
          text: "Da dos Intentos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "calcular(5): ",
          content: "bold"
        },
        {
          text: "Da cinco Intentos.",
          content: "plain"
        }
      ]
    }
  ]
};

