export const item1 = {
  type: "h3",
  info: [
    {
      text: "¿Qué son los generadores de expresiones?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los generadores de expresiones son una característica poderosa y eficiente en Python para crear secuencias de datos de manera concisa. Son similares a las \"comprensiones de lista\", pero con algunas diferencias clave en términos de sintaxis y comportamiento. A diferencia de las listas, que almacenan todos los elementos a la vez, los generadores liberan memoria al generar elementos uno a uno. Esto los hace ideales para trabajar con grandes conjuntos de datos o cuando la memoria es limitada.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Sintaxis Básica",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "La sintaxis de un generador de expresiones es:",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "# Sintaxis Básica de Generadores de Expresiones\n(expresion for item in iterable [if condicion])"
  }
};

export const item6 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "expresion: ",
          content: "bold"
        },
        {
          text: "Es el valor que se generará para cada item.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "item: ",
          content: "bold"
        },
        {
          text: "Variable que toma cada valor del iterable.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "iterable: ",
          content: "bold"
        },
        {
          text: "Secuencia sobre la que iterará el generador.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "if condicion: ",
          content: "bold"
        },
        {
          text: "(Opcional) Condición que debe cumplirse para que el generador genere un valor.",
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
      text: "Características Principales",
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
          text: "Paréntesis: ",
          content: "bold"
        },
        {
          text: "Usan paréntesis ",
          content: "plain"
        },
        {
          text: " \"(  )\" ",
          content: "bold"
        },
        {
          text: " en lugar de corchetes ",
          content: "plain"
        },
        {
          text: " \"[  ]\" ",
          content: "bold"
        },
        {
          text: ", que se usan en comprensiones de lista.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Evaluación Perezosa: ",
          content: "bold"
        },
        {
          text: "Los valores se generan solo cuando se solicitan, lo que ahorra memoria.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Uso Único: ",
          content: "bold"
        },
        {
          text: "Una vez que se han consumido todos los elementos, el generador se agota y no puede reutilizarse.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eficiencia de Memoria: ",
          content: "bold"
        },
        {
          text: "Ideal para trabajar con grandes conjuntos de datos o secuencias infinitas.",
          content: "plain"
        }
      ]
    }
  ]
};

