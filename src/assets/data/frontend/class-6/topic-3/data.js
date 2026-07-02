export const item1 = {
  type: "h3",
  info: [
    {
      text: "🔎 Tipos de Selectores en CSS",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los selectores de CSS permiten apuntar a elementos HTML específicos para aplicarles estilos. Existen distintos tipos de selectores según su nivel de precisión y contexto.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "🎯 Selector universal",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "css",
    content: "* {\n  margin: 0;\n  padding: 0;\n}"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Aplica estilos a todos los elementos del documento. Se usa comúnmente para reiniciar márgenes y paddings.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "📛 Selector de etiqueta ",
      content: "plain"
    },
    {
      text: "(Type Selector)",
      content: "bold"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "css",
    content: "p {\n  color: blue;\n}"
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Apunta a todas las etiquetas del mismo tipo. En el ejemplo, a todos los párrafos.",
      content: "plain"
    },
    {
      text: "<p> </p>",
      content: "bold"
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "✅ Selector de clase ",
      content: "plain"
    },
    {
      text: "(Class Selector)",
      content: "bold"
    }
  ]
};

export const item10 = {
  type: "code",
  info: {
    language: "css",
    content: ".card {\n  border: 1px solid black;\n}"
  }
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Aplica a cualquier elemento con la clase indicada. Se define en  ",
      content: "plain"
    },
    {
      text: "HTML",
      content: "bold"
    },
    {
      text: " como ",
      content: "plain"
    },
    {
      text: "class=\"card\"",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "h4",
  info: [
    {
      text: "🔗 Selector de atributo ",
      content: "plain"
    },
    {
      text: "(Attribute Selector)",
      content: "bold"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "css",
    content: "input[type=\"text\"] {\n  border: 1px solid green;\n}\n\na[target] {\n  text-decoration: none;\n}\n\nimg[alt=\"logo\"] {\n  width: 100px;\n}"
  }
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Selecciona elementos que tengan un atributo específico o un valor determinado. En el ejemplo, selecciona todos los elementos ",
      content: "plain"
    },
    {
      text: "input ",
      content: "bold"
    },
    {
      text: "de tipo ",
      content: "plain"
    },
    {
      text: "\"text\", ",
      content: "bold"
    },
    {
      text: "a todos los ",
      content: "plain"
    },
    {
      text: "enlaces (<a>) ",
      content: "bold"
    },
    {
      text: " que tengan el atributo ",
      content: "plain"
    },
    {
      text: "\"target\" ",
      content: "bold"
    },
    {
      text: "y las ",
      content: "plain"
    },
    {
      text: "imágenes (<img>) ",
      content: "bold"
    },
    {
      text: "que tengan el atributo ",
      content: "plain"
    },
    {
      text: "\"alt\" ",
      content: "bold"
    },
    {
      text: "con el valor ",
      content: "plain"
    },
    {
      text: "\"logo\"",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "Selectores de relación ",
      content: "plain"
    },
    {
      text: "(Combinadores)",
      content: "bold"
    }
  ]
};

export const item16 = {
  type: "h4",
  info: [
    {
      text: "🧬 Selector descendente ",
      content: "plain"
    },
    {
      text: "(Descendant Selector)",
      content: "bold"
    }
  ]
};

export const item17 = {
  type: "code",
  info: {
    language: "css",
    content: "div p {\n  color: red;\n}"
  }
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Aplica a todos los .",
      content: "plain"
    },
    {
      text: "<p>",
      content: "bold"
    },
    {
      text: " que están dentro de un ",
      content: "plain"
    },
    {
      text: "<div>",
      content: "bold"
    },
    {
      text: ". Define relación jerárquica.",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "h4",
  info: [
    {
      text: "👨‍👩‍👧 Selector hijo directo ",
      content: "plain"
    },
    {
      text: "(Child Selector)",
      content: "bold"
    }
  ]
};

export const item20 = {
  type: "code",
  info: {
    language: "css",
    content: "ul > li {\n  list-style: square;\n}"
  }
};

export const item21 = {
  type: "p",
  info: [
    {
      text: "Aplica solo a los ",
      content: "plain"
    },
    {
      text: "<li>",
      content: "bold"
    },
    {
      text: " que son hijos directos de ",
      content: "plain"
    },
    {
      text: "<ul>",
      content: "bold"
    },
    {
      text: ", no a los anidados.",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "h4",
  info: [
    {
      text: "🧩 Selector de hermanos adyacentes ",
      content: "plain"
    },
    {
      text: "(Adjacent Sibling Selector)",
      content: "bold"
    }
  ]
};

export const item23 = {
  type: "code",
  info: {
    language: "css",
    content: "h1 + p {\n  margin-top: 0;\n}"
  }
};

export const item24 = {
  type: "p",
  info: [
    {
      text: "Aplica al primer ",
      content: "plain"
    },
    {
      text: "<p>",
      content: "bold"
    },
    {
      text: " que sigue inmediatamente a un ",
      content: "plain"
    },
    {
      text: "<h1>",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

export const item25 = {
  type: "h4",
  info: [
    {
      text: "🧩 Selector de hermanos generales ",
      content: "plain"
    },
    {
      text: "(General Sibling Selector)",
      content: "bold"
    }
  ]
};

export const item26 = {
  type: "code",
  info: {
    language: "css",
    content: "h2 ~ p {\n  color: gray;\n}"
  }
};

export const item27 = {
  type: "p",
  info: [
    {
      text: "Aplica a todos los ",
      content: "plain"
    },
    {
      text: "<p>",
      content: "bold"
    },
    {
      text: " que siguen a un ",
      content: "plain"
    },
    {
      text: "<h2>",
      content: "bold"
    },
    {
      text: " y comparten el mismo padre.",
      content: "plain"
    }
  ]
};

export const item28 = {
  type: "h4",
  info: [
    {
      text: "🌐 Selectores de grupo ",
      content: "plain"
    },
    {
      text: "(Group Selector)",
      content: "bold"
    }
  ]
};

export const item29 = {
  type: "code",
  info: {
    language: "css",
    content: "h1, h2, h3 {\n  font-family: sans-serif;\n}"
  }
};

export const item30 = {
  type: "p",
  info: [
    {
      text: "Permiten aplicar estilos comunes a múltiples elementos a la vez.",
      content: "plain"
    }
  ]
};

export const item31 = {
  type: "h4",
  info: [
    {
      text: "💅 Pseudo-clases",
      content: "plain"
    }
  ]
};

export const item32 = {
  type: "code",
  info: {
    language: "css",
    content: "a:hover {\n  text-decoration: underline;\n}"
  }
};

export const item33 = {
  type: "p",
  info: [
    {
      text: "Se usan para definir estados como ",
      content: "plain"
    },
    {
      text: "hover",
      content: "bold"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "focus",
      content: "bold"
    },
    {
      text: ", ",
      content: "plain"
    },
    {
      text: "visited",
      content: "bold"
    },
    {
      text: ", etc.",
      content: "plain"
    }
  ]
};

export const item34 = {
  type: "h4",
  info: [
    {
      text: "Selectores convinados ",
      content: "plain"
    },
    {
      text: "(Combinators)",
      content: "bold"
    }
  ]
};

export const item35 = {
  type: "code",
  info: {
    language: "css",
    content: "div.card#producto[destacado] > h3.titulo {\n  color: gold;\n}"
  }
};

export const item36 = {
  type: "p",
  info: [
    {
      text: "Aplica a un ",
      content: "plain"
    },
    {
      text: "<h3>",
      content: "bold"
    },
    {
      text: " que está dentro de un ",
      content: "plain"
    },
    {
      text: "<div>",
      content: "bold"
    },
    {
      text: " con la clase ",
      content: "plain"
    },
    {
      text: ".card",
      content: "bold"
    },
    {
      text: " y el id ",
      content: "plain"
    },
    {
      text: "#producto",
      content: "bold"
    },
    {
      text: " y el atributo ",
      content: "plain"
    },
    {
      text: "destacado",
      content: "bold"
    }
  ]
};

export const item37 = {
  type: "h4",
  info: [
    {
      text: "🧠 Bonus: especificidad",
      content: "plain"
    }
  ]
};

export const item38 = {
  type: "p",
  info: [
    {
      text: "Cuando múltiples reglas aplican al mismo elemento, CSS usa una jerarquía de especificidad para decidir cuál aplicar. En orden:",
      content: "plain"
    }
  ]
};

export const item39 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Estilos inline ",
          content: "plain"
        },
        {
          text: "(atributo style)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "ID ",
          content: "plain"
        },
        {
          text: "(#)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Clase, atributo, pseudo-clase ",
          content: "plain"
        },
        {
          text: "(.class , [ atributo ], :hover)",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Etiqueta, pseudo-elemento ",
          content: "plain"
        },
        {
          text: "(p, ::before)",
          content: "bold"
        }
      ]
    }
  ]
};

