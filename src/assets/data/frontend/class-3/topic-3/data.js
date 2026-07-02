export const item1 = {
  type: "h3",
  info: [
    {
      text: "📷 Manejo de imágenes",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las imágenes se insertan en  ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " con la etiqueta ",
      content: "plain"
    },
    {
      text: "<img>",
      content: "bold"
    },
    {
      text: ". Es importante usar el atributo ",
      content: "plain"
    },
    {
      text: "alt",
      content: "bold"
    },
    {
      text: " para describir la imagen por accesibilidad.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo de imagen:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "html",
    content: "<img src=\"ruta/imagen.jpg\" alt=\"Descripción de la imagen\" width=\"300\">"
  }
};

export const item5 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "src",
          content: "bold"
        },
        {
          text: ": Ruta de la imagen.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "alt",
          content: "bold"
        },
        {
          text: ": Texto alternativo descriptivo.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "width/height",
          content: "bold"
        },
        {
          text: ": Tamaño de la imagen ",
          content: "plain"
        },
        {
          text: "(opcional)",
          content: "bold"
        }
      ]
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Curiosidad: ",
      content: "bold"
    },
    {
      text: " Comportamiento de imágenes y párrafos",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "¿Has notado que cuando colocas un párrafo ",
      content: "plain"
    },
    {
      text: "<p>",
      content: "bold"
    },
    {
      text: " debajo de una imagen, el texto siempre aparece debajo, pero si escribes texto directamente después de la imagen, se coloca al lado? Esto ocurre porque:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Las imágenes ",
          content: "plain"
        },
        {
          text: "<img>",
          content: "bold"
        },
        {
          text: " son elementos ",
          content: "plain"
        },
        {
          text: "inline",
          content: "bold"
        },
        {
          text: ", por defecto ",
          content: "plain"
        },
        {
          text: "(display: inline).",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Los párrafos ",
          content: "plain"
        },
        {
          text: "<p>",
          content: "bold"
        },
        {
          text: " son elementos ",
          content: "plain"
        },
        {
          text: "block",
          content: "bold"
        },
        {
          text: ", por defecto ",
          content: "plain"
        },
        {
          text: "(display: block).",
          content: "bold"
        }
      ]
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Los elementos ",
      content: "plain"
    },
    {
      text: "block",
      content: "bold"
    },
    {
      text: " siempre comienzan en una nueva línea y ocupan todo el ancho disponible, mientras que los elementos ",
      content: "plain"
    },
    {
      text: "inline",
      content: "bold"
    },
    {
      text: " solo ocupan el espacio necesario para su contenido y no fuerzan saltos de línea.",
      content: "plain"
    }
  ]
};

