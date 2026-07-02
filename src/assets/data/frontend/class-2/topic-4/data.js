export const item1 = {
  type: "h3",
  info: [
    {
      text: "📋 ¿Qué son las Listas?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Listas",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Las listas se utilizan para ",
      content: "plain"
    },
    {
      text: "organizar elementos relacionados",
      content: "bold"
    },
    {
      text: ". Pueden ser ordenadas ",
      content: "plain"
    },
    {
      text: "(con números)",
      content: "bold"
    },
    {
      text: " o desordenadas ",
      content: "plain"
    },
    {
      text: "(con viñetas).",
      content: "bold"
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
          text: "Lista desordenada: ",
          content: "bold"
        },
        {
          text: "Cada elemento aparece con una viñeta o bullet point.",
          content: "plain"
        },
        {
          type: "example",
          height: "70",
          width: "200",
          info: [
            {
              type: "code",
              info: {
                language: "html",
                content: "<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n</ul>"
              }
            }
          ]
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Lista ordenada: ",
          content: "bold"
        },
        {
          text: "Cada elemento aparece con un número o letra secuencial.",
          content: "plain"
        },
        {
          type: "example",
          height: "70",
          width: "200",
          info: [
            {
              type: "code",
              info: {
                language: "html",
                content: "<ol>\n    <li>Paso 1</li>\n    <li>Paso 2</li>\n</ol>"
              }
            }
          ]
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Elemento de lista: ",
          content: "bold"
        },
        {
          text: "Se usa dentro de ",
          content: "plain"
        },
        {
          text: "<ul>",
          content: "bold"
        },
        {
          text: " o ",
          content: "plain"
        },
        {
          text: "<ol>",
          content: "bold"
        },
        {
          text: " para cada ítem.",
          content: "plain"
        },
        {
          type: "example",
          height: "50",
          width: "200",
          info: [
            {
              type: "code",
              info: {
                language: "html",
                content: "<ul>\n    <li>Elemento de lista</li>\n</ul>"
              }
            }
          ]
        }
      ]
    }
  ]
};

