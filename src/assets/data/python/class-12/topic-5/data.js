export const item1 = {
  type: "h3",
  info: [
    {
      text: "Funciones Lambda",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: " Las funciones lambda son una forma de crear funciones anónimas en una sola línea. Son utiles cuando necesitas una función por corto periodo de tiempo y no queres definirla con ",
      content: "plain"
    },
    {
      text: "_def_ .",
      content: "italic"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Su Sintaxis es:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "lambda parametros: expresion"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Para ver la diferencia con una función normal, volveremos a usar la que ya vimos ",
      content: "plain"
    },
    {
      text: "sumar.",
      content: "italic"
    },
    {
      text: " Con lambda se veria asi:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "sumar = lambda a, b: a + b\nprint(sumar(5, 3))\n# Imprime: 8"
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "🛑Ventajas de las funciones Lambda🛑",
      content: "plain"
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
          text: "Son útiles para funciones simples y temporales.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Se pueden usar en expresiones como argumentos de otras funciones.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Reducen la necesidad de declarar funciones completas.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "🚫Desventajas de las funciones Lambda🚫",
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
          text: "Son limitadas en funciónalidad(solo una expresión)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "No son tan legibles como las funciones regulares.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "No tienen nombres descriptivos.",
          content: "plain"
        }
      ]
    }
  ]
};

