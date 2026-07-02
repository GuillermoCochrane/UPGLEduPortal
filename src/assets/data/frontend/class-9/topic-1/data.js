export const item1 = {
  type: "h3",
  info: [
    {
      text: "📊 Tipos de Datos en JavaScript",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "JavaScript tiene varios tipos de datos fundamentales que necesitas conocer para programar efectivamente:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "table",
  columns: 0,
  title: [
    "Tipo",
    "Ejemplo",
    "Descripción"
  ],
  info: [
    {
      row: [
        "string",
        "\"Hola mundo\"",
        "Texto entre comillas"
      ],
      content: "plain"
    },
    {
      row: [
        "number",
        "42, 3.14",
        "Números enteros o decimales"
      ],
      content: "plain"
    },
    {
      row: [
        "boolean",
        "true, false",
        "Verdadero o falso"
      ],
      content: "plain"
    },
    {
      row: [
        "null",
        "null",
        "Valor intencionalmente vacío"
      ],
      content: "plain"
    },
    {
      row: [
        "undefined",
        "undefined",
        "No tiene valor asignado"
      ],
      content: "plain"
    },
    {
      row: [
        "object",
        "{nombre: \"Juan\"}",
        "Conjunto de datos con claves y valores"
      ],
      content: "plain"
    },
    {
      row: [
        "array",
        "[1, 2, 3]",
        "Lista ordenada de elementos"
      ],
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "javascript",
    content: "// Ejemplo: Verificación de tipos\ntypeof \"Hola\"; // \"string\"\ntypeof 42;     // \"number\"\ntypeof [];     // \"object\" (arrays son objetos especiales)",
    title: "Usando typeof"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "💡 Los arrays técnicamente son objetos, pero JavaScript los trata como un tipo especial para manejar colecciones ordenadas.",
      content: "plain"
    }
  ]
};

