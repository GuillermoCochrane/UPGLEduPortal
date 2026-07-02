export const item1 = {
  type: "h3",
  info: [
    {
      text: "✨ Variables, Constantes y Funciones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h3",
  info: [
    {
      text: "Variables",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Una ",
      content: "plain"
    },
    {
      text: "variable",
      content: "bold"
    },
    {
      text: " es un contenedor que guarda un valor para usarlo luego en el programa.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Sintaxis: ",
      content: "bold"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "javascript",
    content: "let nombre = \"Gaspar\";\nlet edad = 25;"
  }
};

export const item6 = {
  type: "p",
  info: []
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "let ",
      content: "bold"
    },
    {
      text: "se usa para declarar variables modernas y el valor ",
      content: "plain"
    },
    {
      text: "puede cambiar",
      content: "bold"
    },
    {
      text: " más adelante:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "javascript",
    content: "edad = 26;"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Tipos de declaraciones",
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
          text: "let",
          content: "bold"
        },
        {
          text: " ➔ Variable de ámbito limitado (recomendado).",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "var",
          content: "bold"
        },
        {
          text: " ➔ Variable de ámbito global o de función (antiguo, menos recomendable).",
          content: "plain"
        }
      ]
    }
  ]
};

export const item11 = {
  type: "h3",
  info: [
    {
      text: "Constantes",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Una ",
      content: "plain"
    },
    {
      text: "constante",
      content: "bold"
    },
    {
      text: " es similar a una variable, pero su valor ",
      content: "plain"
    },
    {
      text: "no puede cambiar",
      content: "bold"
    },
    {
      text: " una vez asignado.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Sintaxis: ",
      content: "bold"
    }
  ]
};

export const item14 = {
  type: "code",
  info: {
    language: "javascript",
    content: "const PI = 3.1416;\nconst nombre = \"Gaspar\";"
  }
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Si intentás cambiarla, lanza un error:",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "code",
  info: {
    language: "javascript",
    content: "PI = 3; // ❌ Error: No se puede cambiar una constante"
  }
};

export const item17 = {
  type: "h3",
  info: [
    {
      text: "Funciones",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Una ",
      content: "plain"
    },
    {
      text: "función",
      content: "bold"
    },
    {
      text: " es un bloque de código que realiza una tarea específica y puede reutilizarse.",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "p",
  info: [
    {
      text: "Sintaxis: ",
      content: "bold"
    }
  ]
};

export const item20 = {
  type: "code",
  info: {
    language: "javascript",
    content: "function saludar() {\n  console.log(\"¡Hola, bienvenido!\");\n}\n\nsaludar(); // Imprime: ¡Hola, bienvenido!"
  }
};

export const item21 = {
  type: "h4",
  info: [
    {
      text: "Con parámetros",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "code",
  info: {
    language: "javascript",
    content: "function sumar(a, b) {\n  return a + b;\n}\n\nlet resultado = sumar(5, 3);\nconsole.log(resultado); // 8"
  }
};

export const item23 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Los parámetros ",
          content: "plain"
        },
        {
          text: "a",
          content: "bold"
        },
        {
          text: " y ",
          content: "plain"
        },
        {
          text: "b",
          content: "bold"
        },
        {
          text: " permiten que la función trabaje con valores externos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "",
          content: "plain"
        },
        {
          text: "return",
          content: "bold"
        },
        {
          text: " devuelve el resultado.",
          content: "plain"
        }
      ]
    }
  ]
};

