export const item1 = {
  type: "h3",
  info: [
    {
      text: "Repasando variables",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "¿Te acordas que es una variable?",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "En programación, una variable es un espacio en la memoria de tu computadora que se utiliza para almacenar información de un determinado tipo de dato. ¡La sintaxis de una variable es muy simple!",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "mi_variable = \"Hola Mundo\"\nprint(f\"Mi variable imprime: {mi_variable}\")"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Recordá: ",
      content: "bold"
    },
    {
      text: "Las variables pueden almacenar cualquier tipo de dato, ya sea:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Una cadena de texto(string):",
          content: "bold"
        },
        {
          text: "mi_variable = \"Hola Mundo\"",
          content: "plain"
        },
        {
          text: ", recordá que el texto que nuestra variable va a almacenar siempre tiene que estar entre comillas \"TEXTO\".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Números enteros (Int):",
          content: "bold"
        },
        {
          text: "mi_variable = 150",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Números decimales (Float):",
          content: "bold"
        },
        {
          text: "mi_variable = 5.5",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Números imaginarios (Complex):",
          content: "bold"
        },
        {
          text: "mi_variable = 5j",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Valores Booleanos (Boolean):",
          content: "bold"
        },
        {
          text: "mi_variable = True",
          content: "plain"
        },
        {
          text: "o",
          content: "plain"
        },
        {
          text: "mi_variable = False",
          content: "plain"
        },
        {
          text: ", recordá que estos valores son Palabras claves de python y deben estar escritos con la primer letra mayuscula, sino python no entenderá que es un booleano.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "¡Podemos usar variables en operaciones matematicas!",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "numero1 = 140\nnumero2 = 20\n\nresultado = numero1 + numero2\nprint(f\"El resultado de sumar numero1 y numero2 es: {resultado}\")\nresultado = numero1 - numero2\nprint(f\"El resultado de restar numero1 y numero2 es: {resultado}\")\nresultado = numero1 * numero2\nprint(f\"El resultado de multiplicar numero1 y numero2 es: {resultado}\")\nresultado = numero1 / numero2\nprint(f\"El resultado de dividir numero1 y numero2 es: {resultado}\")"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "¿Y con cadenas de texto?",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Con cadena de texto se puede usar el simbolo ",
      content: "plain"
    },
    {
      text: "+",
      content: "bold"
    },
    {
      text: " para concatenar palabras y el simbolo ",
      content: "plain"
    },
    {
      text: "*",
      content: "bold"
    },
    {
      text: " nos permité multiplicar el texto.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "texto1 = \"Hola \"\ntexto2 = \"Mundo \"\n\nresultado = texto1 + texto2\nprint(f\"El resultado de concatenar texto1 y texto2 es: {resultado}\")\nresultado = texto1 + texto2 * 5\nprint(f\"El resultado de multiplicar texto1 y texto2 * 5 es: {resultado}\")\n# Tene en cuenta que como en matematica existen terminos y en el caso de la \n# multiplicacion anterior solamente afecto a la variable texto2, si queremos \n# que se muestre la concatenacion de texto1 y texto2 5 veces tenemos que \n# hacer lo siguiente:\nresultado = (texto1 + texto2) * 5\nprint(f\"El resultado de multiplicar texto1 y texto2 * 5 es: {resultado}\")"
  }
};

