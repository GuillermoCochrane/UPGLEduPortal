export const item1 = {
  type: "h3",
  info: [
    {
      text: "Inputs Especiales",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los inputs especiales ofrecen funcionalidades poco comunes o específicas, como campos ocultos o botones de imagen.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Campo Oculto (Hidden):",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Hidden:",
        content: "bold"
      },
      {
        text: " Campo oculto (no visible)",
        content: "plain"
      }
    ],
    type: "hidden",
    attributes: {
      value: "valor_oculto"
    },
    code: {
      content: "<input type=\"hidden\" value=\"valor_oculto\">"
    }
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Botón de Imagen (Image):",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Image:",
        content: "bold"
      },
      {
        text: " Botón de imagen",
        content: "plain"
      }
    ],
    type: "image",
    attributes: {
      src: "https://i.imgur.com/kKZ8t1j.png",
      alt: "Enviar",
      width: "150"
    },
    code: {
      content: "<input type=\"image\" src=\"imagen.png\" alt=\"Enviar\">"
    }
  }
};

