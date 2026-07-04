export const item1 = {
  type: "h3",
  info: [
    {
      text: "print(f\"\") en Python: Cadenas Formateadas con f ",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "En Python, ",
      content: "plain"
    },
    {
      text: "print()",
      content: "bold"
    },
    {
      text: " es una función que se usa para mostrar información en la consola. El código ",
      content: "plain"
    },
    {
      text: "print(f\"{variable}\")",
      content: "bold"
    },
    {
      text: " utiliza cadenas formateadas con f (f-strings en inglés), una característica poderosa introducida en Python 3.6, para crear cadenas con formato que integran variables sin problemas.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Desglose del código:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "print()",
      content: "bold"
    },
    {
      text: ": Esta función envía los datos proporcionados a la consola para su visualización.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "f\"...\"",
      content: "bold"
    },
    {
      text: ": Esto indica una cadena formateada con f. La \"f\" precede a la comilla de apertura.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "{...variable}",
      content: "bold"
    },
    {
      text: ": Dentro de las llaves ",
      content: "plain"
    },
    {
      text: "{}",
      content: "bold"
    },
    {
      text: ", se coloca el nombre de la variable cuyo valor desea insertar en la cadena.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "nombre = \"Alicia\"\nedad = 30\nsaludo = f\"Hola, {nombre}! Tienes {edad} años.\"\nprint(saludo)"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Cómo funcióna: ",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Python evalúa la expresión dentro de las llaves (",
          content: "plain"
        },
        {
          text: "{...variable}",
          content: "bold"
        },
        {
          text: ") y recupera el valor de la variable.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "El valor de la variable reemplaza la ubicación correspondiente de las llaves dentro de la cadena formateada con f.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "La cadena formateada completa se envía luego a la función ",
          content: "plain"
        },
        {
          text: "print()",
          content: "bold"
        },
        {
          text: " para que se muestre en la consola.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Beneficios de las cadenas formateadas con f:",
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
          text: "Legibilidad: ",
          content: "bold"
        },
        {
          text: "Mejoran la legibilidad del código al dejar en claro dónde se usan las variables.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Concisión: ",
          content: "bold"
        },
        {
          text: "Ofrecen una forma compacta de formatear cadenas sin necesidad de concatenación de cadenas o el método ",
          content: "plain"
        },
        {
          text: ".format()",
          content: "bold"
        },
        {
          text: ".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Flexibilidad: ",
          content: "bold"
        },
        {
          text: "Puede incorporar expresiones y otras opciones de formato dentro de las llaves.",
          content: "plain"
        }
      ]
    }
  ]
};

