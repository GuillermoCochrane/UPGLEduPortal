export const item1 = {
  type: "h3",
  info: [
    {
      text: "⚙️ ¿Cómo funciona JavaScript?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Cada navegador web moderno incluye un motor de JavaScript que interpreta y ejecuta el código. Por ejemplo:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Chrome usa ",
          content: "plain"
        },
        {
          text: "V8",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Firefox usa ",
          content: "plain"
        },
        {
          text: "SpiderMonkey",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Safari usa ",
          content: "plain"
        },
        {
          text: "JavaScriptCore",
          content: "bold"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Cuando una página web se carga, el navegador analiza el ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "CSS",
      content: "bold"
    },
    {
      text: ", y luego ejecuta el código JavaScript, generalmente de arriba hacia abajo.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h3",
  info: [
    {
      text: "📝 ¿Dónde se puede escribir JavaScript?",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Dentro del ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " (inline script)",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "html",
    content: "<script>\n  alert(\"Hola Mundo!\");\n  console.log(\"Este es un mensaje en la consola.\");\n</script>"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "📝 En un archivo externo ",
      content: "plain"
    },
    {
      text: ".js",
      content: "code"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "html",
    content: "<script src=\"app.js\"></script>\n"
  }
};

export const item10 = {
  type: "code",
  info: {
    language: "javascript",
    content: "//app.js\nalert(\"Hola desde archivo externo\");\nconsole.log(\"Mensaje en consola desde archivo externo\");"
  }
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "💡 Para proyectos reales, lo ideal es usar archivos ",
      content: "plain"
    },
    {
      text: ".js",
      content: "code"
    },
    {
      text: " separados para una mejor organización y mantenimiento.",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "h3",
  info: [
    {
      text: "🔦 Primeros ejemplos",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "h4",
  info: [
    {
      text: "Usando alert() y console.log()",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "code",
  info: {
    language: "html",
    content: "<script>\n  alert(\"Bienvenido a mi página\");\n  console.log(\"Este mensaje es visible en la consola del navegador\");\n</script>"
  }
};

export const item15 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "alert()",
          content: "bold"
        },
        {
          text: ": Muestra una ventana emergente con un mensaje.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "console.log()",
          content: "bold"
        },
        {
          text: ": Escribe un mensaje en la consola del navegador.",
          content: "plain"
        }
      ]
    }
  ]
};

