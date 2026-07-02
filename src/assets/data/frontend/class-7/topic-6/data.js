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
      text: "Actividad 1:",
      content: "bold"
    },
    {
      text: " Tarjeta con animaciones y diseño moderno",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Objetivo: ",
      content: "bold"
    },
    {
      text: "Poner en práctica las animaciones básicas, el efecto glassmorphism y el diseño responsive usando ",
      content: "plain"
    },
    {
      text: "HTML y CSS.",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Crear un archivo llamado ",
          content: "plain"
        },
        {
          text: "tarjeta_animada.html",
          content: "bold"
        },
        {
          text: ".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Diseñar una tarjeta visual que incluya:",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Un contenedor con efecto ",
                  content: "plain"
                },
                {
                  text: "glassmorphism ",
                  content: "bold"
                },
                {
                  text: "(transparencia + desenfoque).",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Una animación de ",
                  content: "plain"
                },
                {
                  text: "fade-in",
                  content: "bold"
                },
                {
                  text: " al aparecer en pantalla.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Un ",
                  content: "plain"
                },
                {
                  text: "botón con efecto scale",
                  content: "bold"
                },
                {
                  text: " al pasar el mouse.",
                  content: "plain"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Aplicar estilos responsive usando ",
          content: "plain"
        },
        {
          text: "@media queries",
          content: "bold"
        },
        {
          text: " para que la tarjeta se vea bien en celulares.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Usar colores, sombras y bordes redondeados para lograr una ",
          content: "plain"
        },
        {
          text: "UI moderna y estética.",
          content: "bold"
        }
      ]
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Bonus:",
      content: "bold"
    },
    {
      text: " agregá una imagen o ícono, para mejorar la presentación visual.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "example",
  height: "500",
  width: "600",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<body>\n  <main>\n    <h1>Ejercicio Extra: UI Moderna</h1>\n    <article class=\"card\">\n      <h2>Reflejos del Atardecer</h2>\n      <p>\n        Donde el agua abraza al cielo\n        <br>\n        y el tiempo se vuelve cristal.\n      </p>\n      <button>Sumergirme</button>\n    </article>\n  </main>\n</body>"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: "body {\n  background-image: url('https://img.freepik.com/foto-gratis/arbol-solitario_181624-46361.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  min-height: 96vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #ddd;\n  text-align: center;\n}\n\nmain {\n  width: 100%;\n  margin: auto;\n}\n\n.card {\n  font-family: 'Playfair Display', serif;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 1.5rem;\n  color: darkblue;\n  width: 200px;\n  margin: auto;\n  opacity: 0;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);\n  animation: fadeIn 5s forwards;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n\nbutton {\n  background: linear-gradient(120deg, #023480, #227aff);\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 5px 15px rgba(0,0,0,0.2);\n}\n\nbutton:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 20px rgba(0,0,0,0.3);\n}\n\n@media (min-width: 600px){\n  .card {\n    width: 40%;\n    max-width: 400px;\n    padding: 2rem;\n  }\n  h2 { font-size: 2rem; }\n  p { font-size: 1.5rem; }\n}"
      }
    }
  ]
};

