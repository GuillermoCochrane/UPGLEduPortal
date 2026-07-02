export const item1 = {
  type: "h3",
  info: [
    {
      text: "🖱️ Eventos en JavaScript",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "JavaScript puede reaccionar a ",
      content: "plain"
    },
    {
      text: "eventos",
      content: "bold"
    },
    {
      text: " como clicks, cambios en inputs, movimiento del mouse o teclas presionadas. Estos permiten crear interfaces interactivas.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "📌 Tipos comunes de eventos",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Eventos del mouse: ",
          content: "plain"
        },
        {
          text: "click, dblclick, mouseover, mouseout",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eventos del teclado: ",
          content: "plain"
        },
        {
          text: "keydown, keyup, keypress",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eventos de formularios: ",
          content: "plain"
        },
        {
          text: "submit, change, focus, blur",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eventos de ventana: ",
          content: "plain"
        },
        {
          text: "load, resize, scroll",
          content: "bold"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "🛠️ Ejemplo de evento click (HTML inline)",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "html",
    content: "<button onclick=\"alert('¡Click detectado!')\">Haz clic</button>"
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "🔄 Ejemplo de evento change",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "html",
    content: "<input onchange=\"console.log('El valor cambió')\" />"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "🎯 Método recomendado: addEventListener",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "En lugar de usar atributos ",
      content: "plain"
    },
    {
      text: "HTML ",
      content: "bold"
    },
    {
      text: "como ",
      content: "plain"
    },
    {
      text: "onclick",
      content: "bold"
    },
    {
      text: ", es mejor separar el ",
      content: "plain"
    },
    {
      text: "JavaScript ",
      content: "italic"
    },
    {
      text: "del ",
      content: "plain"
    },
    {
      text: "HTML:",
      content: "italic"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "En el HTML:",
      content: "bold"
    }
  ]
};

export const item12 = {
  type: "code",
  info: {
    language: "html",
    content: "<button id=\"miBoton\">Haz clic</button>",
    title: "HTML"
  }
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "En el JavaScript externo:",
      content: "bold"
    }
  ]
};

export const item14 = {
  type: "code",
  info: {
    language: "javascript",
    content: "document.getElementById(\"miBoton\").addEventListener(\"click\", () => {\n  alert(\"¡Método moderno!\");\n});",
    title: "JavaScript"
  }
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "⚡ Event Object (información del evento)",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Los eventos proporcionan un objeto con datos útiles:",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "javascript",
    content: "document.addEventListener(\"click\", (event) => {\n  console.log(\"Coordenadas:\", event.clientX, event.clientY);\n  console.log(\"Elemento clickeado:\", event.target);\n});"
  }
};

export const item18 = {
  type: "h4",
  info: [
    {
      text: "🚫 Prevenir comportamientos por defecto",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "code",
  info: {
    language: "javascript",
    content: "document.querySelector(\"a\").addEventListener(\"click\", (e) => {\n  e.preventDefault(); // Evita que el link navegue\n  console.log(\"Link clickeado pero no navega\");\n});"
  }
};

