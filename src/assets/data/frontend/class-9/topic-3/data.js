export const item1 = {
  type: "h3",
  info: [
    {
      text: "⚙️ ¿Qué es una función?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Una función es un bloque de código que realiza una tarea específica y puede reutilizarse.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "🔄 Función básica",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "javascript",
    content: "function saludar() {\n  console.log(\"Hola desde la función\");\n}\n\nsaludar(); // Llama a la función",
    title: "Declaración y llamado"
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "🎯 Función con parámetro",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "javascript",
    content: "function saludar(nombre) {\n  console.log(\"Hola \" + nombre);\n}\n\nsaludar(\"Gaspar\");",
    title: "Uso de parámetros"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "💡 ",
      content: "plain"
    },
    {
      text: "Los parámetros",
      content: "bold"
    },
    {
      text: " son valores que se pasan a la función para que trabaje con ellos.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "🔄 Formas de Declarar Funciones",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "table",
  columns: 0,
  title: [
    "Tipo",
    "Sintaxis",
    "Características"
  ],
  info: [
    {
      row: [
        "Tradicional",
        "function saludar() { ... }",
        "• Hoisting ✅\n• Reasignable ✅\n• Ámbito de función"
      ],
      content: "plain"
    },
    {
      row: [
        "Expresión de función",
        "const saludar = function() { ... }",
        "• Hoisting ❌\n• Block-scoped"
      ],
      content: "plain"
    },
    {
      row: [
        "Arrow function",
        "const saludar = () => { ... }",
        "• Hoisting ❌\n• Sin 'this' propio\n• Return implícito"
      ],
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "h5",
  info: [
    {
      text: "📌 Ejemplos Comparativos",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "javascript",
    content: "// 1. Declaración tradicional\nfunction sumar(a, b) {\n  return a + b;\n}\n\n// 2. Expresión de función\nconst restar = function(a, b) {\n  return a - b;\n};\n\n// 3. Arrow function\nconst multiplicar = (a, b) => a * b;"
  }
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "💡 ",
      content: "plain"
    },
    {
      text: "Diferencias clave de Arrow Functions:",
      content: "bold"
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
          text: "Sintaxis compacta: ",
          content: "plain"
        },
        {
          text: "( ) => { }",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Return implícito en una línea (sin ",
          content: "plain"
        },
        {
          text: "{ }",
          content: "bold"
        },
        {
          text: " )",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "No tiene su propio ",
          content: "plain"
        },
        {
          text: "this",
          content: "bold"
        },
        {
          text: " (usa el del ámbito padre)",
          content: "plain"
        }
      ]
    }
  ]
};

