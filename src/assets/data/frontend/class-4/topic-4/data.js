export const item1 = {
  type: "h3",
  info: [
    {
      text: "Inputs de Botones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los inputs de tipo botón permiten enviar formularios, reiniciar campos o ejecutar acciones específicas cuando el usuario interactúa con ellos.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Botón de envío (Submit):",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Submit:",
        content: "bold"
      },
      {
        text: " Botón de envío",
        content: "plain"
      }
    ],
    type: "submit",
    attributes: {
      value: "Enviar formulario"
    },
    code: {
      content: "<input type=\"submit\" value=\"Enviar formulario\">"
    }
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Botón de reinicio (Reset):",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Reset:",
        content: "bold"
      },
      {
        text: " Botón de reinicio",
        content: "plain"
      }
    ],
    type: "reset",
    attributes: {
      value: "Limpiar formulario"
    },
    code: {
      content: "<input type=\"reset\" value=\"Limpiar formulario\">"
    }
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Botón genérico (Button):",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Button:",
        content: "bold"
      },
      {
        text: " Botón genérico",
        content: "plain"
      }
    ],
    type: "button",
    attributes: {
      value: "Hacer clic",
      onClick: undefined
    },
    code: {
      content: "<input type=\"button\" value=\"Hacer clic\">"
    }
  }
};

