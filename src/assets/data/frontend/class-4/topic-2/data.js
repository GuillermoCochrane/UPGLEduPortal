export const item1 = {
  type: "h3",
  info: [
    {
      text: "Inputs Numéricos y de Fecha/Hora",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los inputs numéricos y de fecha/hora permiten al usuario ingresar valores específicos, como números, rangos, fechas y horas, con validaciones automáticas y controles optimizados para cada tipo.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Inputs Numéricos:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Number:",
        content: "bold"
      },
      {
        text: " Campo para números",
        content: "plain"
      }
    ],
    type: "number",
    placeholder: "Ingrese un número",
    attributes: {
      min: 1,
      max: 100,
      value: 50
    },
    code: {
      content: "<input type=\"number\" min=\"1\" max=\"100\" value=\"50\">"
    }
  }
};

export const item5 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Range:",
        content: "bold"
      },
      {
        text: " Selector de rango",
        content: "plain"
      }
    ],
    type: "range",
    attributes: {
      min: 0,
      max: 100,
      value: 30
    },
    code: {
      content: "<input type=\"range\" min=\"0\" max=\"100\" value=\"30\">"
    }
  }
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Inputs de Fecha y Hora:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Date:",
        content: "bold"
      },
      {
        text: " Campo para fechas",
        content: "plain"
      }
    ],
    type: "date",
    attributes: {
      value: "2025-06-03"
    },
    code: {
      content: "<input type=\"date\" value=\"2025-06-03\">"
    }
  }
};

export const item8 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Time:",
        content: "bold"
      },
      {
        text: " Campo para hora",
        content: "plain"
      }
    ],
    type: "time",
    attributes: {
      value: "14:30"
    },
    code: {
      content: "<input type=\"time\" value=\"14:30\">"
    }
  }
};

export const item9 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Datetime-local:",
        content: "bold"
      },
      {
        text: " Fecha y hora local",
        content: "plain"
      }
    ],
    type: "datetime-local",
    attributes: {
      value: "2025-06-03T14:30"
    },
    code: {
      content: "<input type=\"datetime-local\" value=\"2025-06-03T14:30\">"
    }
  }
};

export const item10 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Month:",
        content: "bold"
      },
      {
        text: " Selector de mes",
        content: "plain"
      }
    ],
    type: "month",
    attributes: {
      value: "2025-06"
    },
    code: {
      content: "<input type=\"month\" value=\"2025-06\">"
    }
  }
};

export const item11 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "Week:",
        content: "bold"
      },
      {
        text: " Selector de semana",
        content: "plain"
      }
    ],
    type: "week",
    attributes: {
      value: "2025-W23"
    },
    code: {
      content: "<input type=\"week\" value=\"2025-W23\">"
    }
  }
};

