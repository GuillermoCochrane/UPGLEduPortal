export const item1 = {
  type: "h3",
  info: [
    {
      text: "Inputs de Selección",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los inputs de selección permiten al usuario elegir entre varias opciones, ya sea de forma múltiple o única, y en distintos formatos visuales.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Casillas de verificación (Checkbox):",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Checkbox:",
        content: "bold"
      },
      {
        text: " Casilla de verificación",
        content: "plain"
      }
    ],
    type: "checkbox",
    attributes: {
      id: "check1"
    },
    code: {
      content: "<input type=\"checkbox\">"
    }
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Botones de opción (Radio):",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Radio:",
        content: "bold"
      },
      {
        text: " Botones de opción",
        content: "plain"
      }
    ],
    type: "radio",
    attributes: {
      id: "radio1",
      name: "grupo1",
      value: "opcion1"
    },
    code: {
      content: "<input type=\"radio\" name=\"grupo\">"
    }
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Selector de color:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Color:",
        content: "bold"
      },
      {
        text: " Selector de color",
        content: "plain"
      }
    ],
    type: "color",
    attributes: {
      value: "#ff6b6b"
    },
    code: {
      content: "<input type=\"color\" value=\"#ff6b6b\">"
    }
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Selector de archivos:",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "File:",
        content: "bold"
      },
      {
        text: " Selector de archivos",
        content: "plain"
      }
    ],
    type: "file",
    attributes: {
      accept: "image/*"
    },
    code: {
      content: "<input type=\"file\" accept=\"image/*\">"
    }
  }
};

