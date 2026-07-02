export const item1 = {
  type: "h3",
  info: [
    {
      text: "🔁 Animaciones en CSS",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Una animación es un cambio gradual y fluido de alguna propiedad del estilo: ",
      content: "plain"
    },
    {
      text: "opacidad",
      content: "italic"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "tamaño",
      content: "italic"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "color",
      content: "italic"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "posición",
      content: "italic"
    },
    {
      text: ", etc. ",
      content: "plain"
    },
    {
      text: "CSS lo logra con dos herramientas clave:",
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
          text: "@keyframes",
          content: "bold"
        },
        {
          text: ": define los pasos de la animación.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "animation",
          content: "bold"
        },
        {
          text: ": aplica la animación a un elemento.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "💓 Pulse – Efecto \"latido\"",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Este efecto simula un corazón que se agranda y achica suavemente. ",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "example",
  height: 120,
  width: 120,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"pulse\"></div>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: ".pulse {\n  width: 100px;\n  height: 100px;\n  background: crimson;\n  margin:auto;\n  margin-top:10px;\n  margin-bottom:auto;\n  border-radius: 50%;\n  animation: pulse 1.5s infinite;\n}\n\n@keyframes pulse {\n  0% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.1); opacity: 0.7; }\n  100% { transform: scale(1); opacity: 1; }\n}"
      }
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
          text: "transform: scale(1.1)",
          content: "bold"
        },
        {
          text: " agranda el div un 10%.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "opacity: 0.7",
          content: "bold"
        },
        {
          text: " lo hace más transparente al latir.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "animation: pulse 1.5s infinite",
          content: "bold"
        },
        {
          text: " repite para siempre cada 1.5 segundos.",
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
      text: "🌫️ Fade In – Aparición suave",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Cuando querés que algo aparezca lentamente en pantalla. ",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "example",
  height: 20,
  width: 150,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"fade-in\">¡Hola mundo!</div>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: ".fade-in {\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  animation: fadeIn 5s forwards;\n}\n\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}"
      }
    }
  ]
};

export const item11 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "El elemento arranca invisible ",
          content: "plain"
        },
        {
          text: "(opacity: 0).",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Se vuelve visible con ",
          content: "plain"
        },
        {
          text: "opacity: 1",
          content: "bold"
        },
        {
          text: " en 5 segundos.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "La propiedad ",
          content: "plain"
        },
        {
          text: "forwards",
          content: "bold"
        },
        {
          text: " mantiene el estado final de la animación.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "🔎 Scale al pasar el mouse",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Ideal para botones, tarjetas o imágenes que quieras hacer más interactivas. ",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "example",
  height: 50,
  width: 150,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<button class=\"scale-up\">Pasá el mouse</button>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: ".scale-up {\n  display: block;\n  margin: auto;\n  margin-top: 13px;\n  transform: scale(0.8);\n  transition: transform 0.5s ease-in-out;\n}\n\n.scale-up:hover {\n  transform: scale(1);\n}"
      }
    }
  ]
};

export const item15 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "transition",
          content: "bold"
        },
        {
          text: " suaviza el cambio de tamaño.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "En ",
          content: "plain"
        },
        {
          text: "hover",
          content: "bold"
        },
        {
          text: ", el botón vuelve a su tamaño original.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "✨ Glassmorphism y backdrop-filter",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "p",
  info: [
    {
      text: "Estilo moderno que simula vidrio esmerilado combinando transparencia y desenfoque. ",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "example",
  height: 400,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<div class=\"glass\">\n  <h2>Glassmorphism</h2>\n  <p>Este es un div con efecto de vidrio.</p>\n</div>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: "body {\n  background: url('https://picsum.photos/800/600') no-repeat center center/cover;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.glass {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 2rem;\n  color: white;\n  width: 300px;\n  margin: auto;\n}"
      }
    }
  ]
};

export const item19 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "backdrop-filter: blur(10px)",
          content: "bold"
        },
        {
          text: ": desenfoca el fondo detrás del elemento.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "rgba(255,255,255,0.1)",
          content: "bold"
        },
        {
          text: ": color blanco semitransparente.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "border-radius y padding",
          content: "bold"
        },
        {
          text: ": hacen que se vea elegante.",
          content: "plain"
        }
      ]
    }
  ]
};

