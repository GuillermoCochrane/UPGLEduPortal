export const item1 = {
  type: "h3",
  info: [
    {
      text: "📋 Tablas",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las tablas permiten ",
      content: "plain"
    },
    {
      text: "mostrar datos de forma estructurada",
      content: "bold"
    },
    {
      text: ", en filas y columnas. Son útiles para mostrar comparativas, horarios, datos personales, etc.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Tablas",
      content: "plain"
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
          text: "Contenedor principal: ",
          content: "bold"
        },
        {
          text: "Define el inicio y fin de una tabla en el documento.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "<table>...</table>"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Fila de tabla: ",
          content: "bold"
        },
        {
          text: "Agregar celdas horizontalmente formando una fila.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "<tr>...</tr>"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Celda de encabezado: ",
          content: "bold"
        },
        {
          text: "Define celdas de título para columnas o filas.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "<th>Nombre</th>"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Celda de datos: ",
          content: "bold"
        },
        {
          text: "Contiene los datos individuales de la tabla.",
          content: "plain"
        },
        {
          type: "code",
          info: {
            language: "html",
            content: "<td>Ana</td>"
          }
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo de tabla básica:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "example",
  height: "80",
  width: "150",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<table border=\"1\" style='margin:auto';\n    <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n    </tr>\n    <tr>\n        <td>Ana</td>\n        <td>22</td>\n    </tr>\n    <tr>\n        <td>Juan</td>\n        <td>30</td>\n    </tr>\n</table>"
      }
    }
  ]
};

