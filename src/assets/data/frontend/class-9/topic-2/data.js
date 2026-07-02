export const item1 = {
  type: "h3",
  info: [
    {
      text: "📦 Variables y Constantes",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "📝 Declaración de Variables",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "javascript",
    content: "let nombre = \"Ana\"; // Puede cambiar su valor\n\nconst edad = 25;    // No puede cambiar su valor"
  }
};

export const item4 = {
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
          text: ": permite modificar el valor de la variable.",
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
          text: ": permite modificar el valor de la variable.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "const",
          content: "bold"
        },
        {
          text: ": el valor no puede cambiar (constante).",
          content: "plain"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "💡 ",
      content: "plain"
    },
    {
      text: "Consejo",
      content: "bold"
    },
    {
      text: ": Usa ",
      content: "plain"
    },
    {
      text: "const",
      content: "bold"
    },
    {
      text: " por defecto y ",
      content: "plain"
    },
    {
      text: "let",
      content: "bold"
    },
    {
      text: " solo cuando necesites cambiar el valor.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "⚠️ Hoisting con var",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "En JavaScript, las variables declaradas con ",
      content: "plain"
    },
    {
      text: "var ",
      content: "bold"
    },
    {
      text: "tienen un comportamiento llamado ",
      content: "plain"
    },
    {
      text: "Hoisting",
      content: "bold"
    },
    {
      text: ": la declaración se \"eleva\" al inicio de su ámbito, pero no su inicialización. Esto puede causar resultados inesperados. Mientras que con ",
      content: "plain"
    },
    {
      text: "let / const ",
      content: "bold"
    },
    {
      text: " obtendrías un error de referencia. Por esto, se recomienda evitar ",
      content: "plain"
    },
    {
      text: "var",
      content: "bold"
    },
    {
      text: " en la actualidad.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "javascript",
    content: "console.log(x); // undefined (hoisting)\nvar x = 5;\n\nconsole.log(y); // ❌ Error: no hoisting\nlet y = 10;",
    title: "Diferencia entre var y let"
  }
};

