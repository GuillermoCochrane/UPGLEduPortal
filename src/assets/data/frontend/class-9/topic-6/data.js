export const item1 = {
  type: "h3",
  info: [
    {
      text: "🎮 Ejercicio de práctica",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "💻 Código para testear",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "javascript",
    content: "let nombre = prompt(\"¿Cuál es tu nombre?\");\nif (nombre) {\n  alert(\"Hola \" + nombre + \" 👋\");\n} else {\n  alert(\"No escribiste nada...\");\n}"
  }
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "📝 ¿Qué hace este código?",
      content: "bold"
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
          text: "Pide al usuario que ingrese su nombre",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Si escribió algo, muestra un saludo personalizado",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Si no escribió nada, muestra un mensaje de error",
          content: "plain"
        }
      ]
    }
  ]
};

