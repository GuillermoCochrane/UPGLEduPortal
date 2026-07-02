export const item1 = {
  type: "h3",
  info: [
    {
      text: "Actividades 💬",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "🎨 Selector RGB - Material de Estudio",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Descargá este ejemplo práctico que analizaremos en clase. Contiene un selector de colores RGB que demuestra:",
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
          text: "Manipulación del DOM con ",
          content: "plain"
        },
        {
          text: "getElementById",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Eventos con ",
          content: "plain"
        },
        {
          text: "addEventListener",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Modificación dinámica de estilos ",
          content: "plain"
        },
        {
          text: "CSS",
          content: "bold"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "example",
  height: 400,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<body>\n    <h1>Controla el color de fondo con RGB</h1>\n    <div class=\"color-control\">\n        <label class=\"color-label\" id=\"r-label\">Rojo</label>\n        <input\n          type=\"range\"\n          id=\"input-rojo\"\n          min=\"0\"\n          max=\"255\"\n          value=\"128\"\n        >\n        <label class=\"value\" id=\"valor-rojo\">128</label>\n    </div>\n    <div class=\"color-control\">\n        <label class=\"color-label\" id=\"g-label\">Verde</label>\n        <input\n          type=\"range\"\n          id=\"input-verde\"\n          min=\"0\"\n          max=\"255\"\n          value=\"128\"\n        >\n        <label class=\"value\" id=\"valor-verde\">128</label>\n    </div>\n    <div class=\"color-control\">\n        <label class=\"color-label\" id=\"b-label\">Azul</label>\n        <input\n          type=\"range\"\n          id=\"input-azul\"\n          min=\"0\"\n          max=\"255\"\n          value=\"128\"\n        >\n        <label class=\"value\" id=\"valor-azul\">128</label>\n    </div>\n    <div class=\"rgb-preview\">\n        <strong>RGB:</strong> <label id=\"rgb-salida\">rgb(128, 128, 128)</label>\n    </div>\n    <script src=\"script.js\"></script>\n</body>",
        title: "Estructura HTML"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: "body {\n    transition: background 0.3s;\n    font-family: Arial, sans-serif;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.color-control {\n    margin: 20px auto;\n    width: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.color-label {\n    width: 40px;\n}\n\n.value {\n    width: 40px;\n    font-weight: bold;\n}\n\n.rgb-preview {\n    margin: 30px auto;\n    padding: 20px;\n    border-radius: 10px;\n    background: #fff;\n    width: 320px;\n    box-shadow: 0 2px 8px #0002;\n}\n\ninput[type=\"range\"] {\n    width: 200px;\n    -webkit-appearance: none;\n    background: #fff;\n    border: none;\n    height: 4px;\n    border-radius: 2px;\n    outline: none;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: rgb(154, 107, 107);\n    cursor: pointer;\n    background: var(--thumb-color, rgb(154, 107, 107));\n}",
        title: "Estilos CSS"
      }
    },
    {
      type: "code",
      info: {
        language: "javascript",
        content: "// Selecciona los elementos de los inputs \nconst rojo = document.getElementById('input-rojo');\nconst verde = document.getElementById('input-verde');\nconst azul = document.getElementById('input-azul');\n// Selecciona los elementos donde se mostrarán los valores\nconst rValue = document.getElementById('valor-rojo');\nconst gValue = document.getElementById('valor-verde');\nconst bValue = document.getElementById('valor-azul');\n// Selecciona el elemento donde se mostrará el color RGB\nconst rgbString = document.getElementById('rgb-salida');\n\n// Actualiza el fondo, los valores y el color de los inputs\nfunction cambiarColores() {\n    // Obtiene los valores actuales\n    const rojoValor = rojo.value;\n    const verdeValor = verde.value;\n    const azulValor = azul.value;\n\n    // Actualiza los valores mostrados\n    rValue.textContent = rojoValor;\n    gValue.textContent = verdeValor;\n    bValue.textContent = azulValor;\n\n    // Actualiza el fondo de la página y el texto RGB\n    const rgb = `rgb(${rojoValor}, ${verdeValor}, ${azulValor})`;\n    document.body.style.background = rgb;\n    rgbString.textContent = rgb;\n\n    // Actualiza el color de fondo\n    rojo.style.background = `rgb(${rojoValor},0,0)`;\n    verde.style.background = `rgb(0,${verdeValor},0)`;\n    azul.style.background = `rgb(0,0,${azulValor})`;\n\n    // Actualiza el thumb de fondo\n    rojo.style.setProperty('--thumb-color', `rgb(${rojoValor},0,0)`);\n    verde.style.setProperty('--thumb-color', `rgb(0,${verdeValor},0)`);\n    azul.style.setProperty('--thumb-color', `rgb(0,0,${azulValor})`);\n}\n\n// Escucha los cambios en los inputs y actualiza la función\n[rojo, verde, azul].forEach(input => {\n    input.addEventListener('input', cambiarColores);\n});\n\n// Inicializa la función al cargar la página\ncambiarColores();",
        title: "Lógica JavaScript"
      }
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "💡 Consejo: ",
      content: "bold"
    },
    {
      text: "Antes de la clase, explorá cómo funciona el código e intentá responder:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "¿Cómo se actualiza el color de fondo cuando mueves los sliders?",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "¿Qué hace el método ",
          content: "plain"
        },
        {
          text: "forEach",
          content: "bold"
        },
        {
          text: " en este contexto?",
          content: "plain"
        }
      ]
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "📌 Ejemplo Ampliado: Modificación dinámica del DOM",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "document.write() ",
      content: "bold"
    },
    {
      text: "es una función de JavaScript que permite insertar contenido ",
      content: "plain"
    },
    {
      text: "HTML ",
      content: "italic"
    },
    {
      text: "dinámicamente en la página.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Explora estos métodos para manipular el documento:",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "javascript",
    content: "// 1. Mostrar contenido HTML dinámico\ndocument.write(\"<h1>Bienvenido a JavaScript</h1>\");\n\n// 2. Modificar estilos del body\ndocument.body.style.backgroundColor = \"lightblue\";\ndocument.body.style.color = \"darkblue\";\ndocument.body.style.fontFamily = \"Arial, sans-serif\";\ndocument.body.style.textAlign = \"center\";\ndocument.body.style.padding = \"20px\";\n\n// 3. Agregar elementos HTML\ndocument.body.innerHTML += \"<p>Texto dinámico</p>\";\n\n// 4. Mensajes en consola (para debugging)\nconsole.error(\"Mensaje de error de prueba que sale por consola\");\nconsole.log(\"Lo vas a ver apretando F12 o Ctrl+Shift+I\");"
  }
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "💡 Consejo: ",
      content: "bold"
    },
    {
      text: "Prueba este código en tu archivo ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "italic"
    },
    {
      text: " y observa:",
      content: "plain"
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
          text: "¿Qué pasa si usas ",
          content: "plain"
        },
        {
          text: "document.write()",
          content: "bold"
        },
        {
          text: " después de que la página cargó?",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "¿Cómo afecta el orden de ejecución al resultado?",
          content: "plain"
        }
      ]
    }
  ]
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "🛠️ Ejercicio 1: ",
      content: "bold"
    },
    {
      text: "Primeros pasos con JavaScript",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Crea una página ",
      content: "plain"
    },
    {
      text: "HTML ",
      content: "italic"
    },
    {
      text: "básica que muestre:",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Un ",
          content: "plain"
        },
        {
          text: "alert",
          content: "bold"
        },
        {
          text: " con el mensaje ",
          content: "plain"
        },
        {
          text: "\"Hola Mundo\"",
          content: "italic"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "El mismo mensaje en la consola usando ",
          content: "plain"
        },
        {
          text: "console.log()",
          content: "bold"
        }
      ]
    }
  ]
};

export const item17 = {
  type: "answer",
  info: {
    title: "Solución recomendada",
    content: [
      {
        type: "example",
        height: "90",
        width: "100%",
        info: [
          {
            type: "code",
            info: {
              language: "html",
              content: "<body>\n  <h1>Ejemplo de JavaScript</h1>\n  <script>\n    alert(\"Hola mundo\");\n    console.log(\"Hola mundo\");\n  </script>\n</body>"
            }
          }
        ]
      }
    ]
  }
};

