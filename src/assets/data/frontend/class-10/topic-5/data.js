export const item1 = {
  type: "h3",
  info: [
    {
      text: "🖋️ Ejemplos de estilos en texto",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "🖋️ Tamaños de texto: ",
      content: "plain"
    },
    {
      text: "fs-1",
      content: "bold"
    },
    {
      text: " a ",
      content: "plain"
    },
    {
      text: "fs-6",
      content: "bold"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "🖋️ Tamaños de texto: ",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "example",
  hasBT: true,
  title: "🖋️ Tamaños de texto: ",
  height: "250px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<p class=\"fs-1 mb-1\">Texto muy grande (fs-1)</p>\n<p class=\"fs-2 mb-1\">Texto grande (fs-2)</p>\n<p class=\"fs-3 mb-1\">Texto mediano (fs-3)</p>\n<p class=\"fs-4 mb-1\">Texto normal (fs-4)</p>\n<p class=\"fs-5 mb-1\">Texto pequeño (fs-5)</p>\n<p class=\"fs-6 mb-1\">Texto muy pequeño (fs-6)</p>"
      }
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Estos tamaños no son idénticos a los ",
      content: "plain"
    },
    {
      text: "<h1>...<h6>",
      content: "bold"
    },
    {
      text: ", pero visualmente son similares. Puedes combinarlos (por ejemplo, un ",
      content: "plain"
    },
    {
      text: "<h1 class=\"fs-3\">",
      content: "bold"
    },
    {
      text: " para bajar el tamaño de un título).",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "📖 Alineación: ",
      content: "plain"
    },
    {
      text: "text-start",
      content: "bold"
    },
    {
      text: " , ",
      content: "plain"
    },
    {
      text: "text-center",
      content: "bold"
    },
    {
      text: " y ",
      content: "plain"
    },
    {
      text: "text-end",
      content: "bold"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "📖 Alineaciónes ",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "example",
  hasBT: true,
  title: "📖 Alineación: ",
  height: "250px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<h5>Clase: <strong>.text-start</strong></h5>\n<p class=\"text-start\">Este párrafo está alineado a la izquierda. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\n<hr><h5>Clase: <strong>.text-center</strong></h5>\n<p class=\"text-center\">Este párrafo está centrado. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\n<hr><h5>Clase: <strong>.text-end</strong></h5>\n<p class=\"text-end\">Este párrafo está alineado a la derecha. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>"
      }
    }
  ]
};

