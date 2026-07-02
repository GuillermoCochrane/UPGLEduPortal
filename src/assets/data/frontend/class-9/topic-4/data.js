export const item1 = {
  type: "h3",
  info: [
    {
      text: "🔄 Estructuras de Control",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las estructuras de control permiten que tu código tome decisiones y repita acciones.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "❓ Condicional if/else",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "javascript",
    content: "let edad = 18;\nif (edad >= 18) {\n  console.log(\"Es mayor de edad\");\n} else {\n  console.log(\"Es menor de edad\");\n}"
  }
};

export const item5 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "if",
          content: "bold"
        },
        {
          text: ": ejecuta código si la condición es verdadera",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "else",
          content: "bold"
        },
        {
          text: ": ejecuta código si la condición es falsa",
          content: "plain"
        }
      ]
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "🔄 Bucle for clásico",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "javascript",
    content: "for (let i = 0; i < 5; i++) {\n  console.log(\"Número:\", i);\n}"
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "💡 Este bucle se ejecuta 5 veces, imprimiendo los números del 0 al 4.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "🍎 Bucle forEach (arrays)",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "code",
  info: {
    language: "javascript",
    content: "let frutas = [\"manzana\", \"banana\", \"uva\"];\n\n// Versión tradicional\nfruitas.forEach(function(fruta) {\n  console.log(fruta);\n});\n\n// Versión con arrow function\nfruitas.forEach(fruta => console.log(fruta));"
  }
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "💡 ",
      content: "plain"
    },
    {
      text: "forEach",
      content: "bold"
    },
    {
      text: " es más legible para recorrer arrays que el bucle ",
      content: "plain"
    },
    {
      text: "for",
      content: "bold"
    },
    {
      text: " tradicional.",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "🔄 Bucle for...of (iterables)",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "javascript",
    content: "// Ideal para arrays, strings\nconst frutas = ['🍎', '🍌', '🍇'];\n\nfor (const fruta of frutas) {\n  console.log(fruta);\n}\n\n// Con strings\nconst palabra = \"Hola\";\nfor (const letra of palabra) {\n  console.log(letra);\n}",
    title: "Iteración sobre valores"
  }
};

export const item14 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Recorre ",
          content: "plain"
        },
        {
          text: "valores",
          content: "bold"
        },
        {
          text: " de estructuras iterables (arrays, strings)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Más legible que ",
          content: "plain"
        },
        {
          text: "for",
          content: "code"
        },
        {
          text: " tradicional cuando no necesitas el índice",
          content: "plain"
        }
      ]
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "🔍 Bucle for...in (objetos)",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "code",
  info: {
    language: "javascript",
    content: "const persona = {\n  nombre: 'Ana',\n  edad: 30,\n  profesion: 'Desarrolladora'\n};\n\nfor (const clave in persona) {\n  console.log(clave + ': ' + persona[clave]);\n}",
    title: "Iteración sobre propiedades"
  }
};

export const item17 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Recorre ",
          content: "plain"
        },
        {
          text: "claves/keys",
          content: "bold"
        },
        {
          text: " de objetos",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "⚠️ ",
          content: "plain"
        },
        {
          text: "No usar con arrays",
          content: "bold"
        },
        {
          text: " (puede incluir propiedades heredadas)",
          content: "plain"
        }
      ]
    }
  ]
};

export const item18 = {
  type: "h4",
  info: [
    {
      text: "📊 ¿Cuándo usar cada uno?",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "table",
  columns: 0,
  title: [
    "Bucle",
    "Uso Recomendado",
    "Ejemplo"
  ],
  info: [
    {
      row: [
        "for...of",
        "Arrays, strings, Map, Set",
        "for (const valor of array)"
      ],
      content: "plain"
    },
    {
      row: [
        "for...in",
        "Propiedades de objetos",
        "for (const clave in objeto)"
      ],
      content: "plain"
    },
    {
      row: [
        "forEach",
        "Arrays (versión moderna)",
        "array.forEach(item => ...)"
      ],
      content: "plain"
    }
  ]
};

