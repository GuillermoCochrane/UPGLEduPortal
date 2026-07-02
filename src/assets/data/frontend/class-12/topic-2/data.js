export const item1 = {
  type: "h3",
  info: [
    {
      text: "🖥️ ¿Cómo se usa? (Estructura básica)",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "⚙️ Sintaxis básica de fetch",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "javascript",
    content: "fetch(\"URL_DE_LA_API\")\n .then(respuesta => respuesta.json()) // convertimos la respuesta en JSON\n .then(data => {\n  console.log(data); // usamos los datos\n })\n .catch(error => console.log(\"Error:\", error));"
  }
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "💡Lo más importante: ",
      content: "bold"
    },
    {
      text: "fetch trabaja con ",
      content: "plain"
    },
    {
      text: "promesas",
      content: "bold"
    },
    {
      text: ": primero pide los datos y cuando llegan, recién ahí podemos usarlos.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "🔢 Pasos del proceso",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "fetch(): ",
          content: "bold"
        },
        {
          text: "Hace la petición a la API",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: ".then(): ",
          content: "bold"
        },
        {
          text: "Espera la respuesta y la convierte a JSON",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: ".then(): ",
          content: "bold"
        },
        {
          text: "Usa los datos obtenidos",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: ".catch(): ",
          content: "bold"
        },
        {
          text: "Maneja errores si algo falla",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "🌐 Métodos HTTP más usados con fetch",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Cuando usamos fetch, además de la URL podemos indicar el método HTTP que queremos utilizar.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "⬇️ GET: ",
          content: "bold"
        },
        {
          text: "Trae información (Por defecto, si no aclaramos nada)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "⬆️ POST: ",
          content: "bold"
        },
        {
          text: "Envia información nueva: Formularios, nuevos registros",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "🔄️ PUT / PATCH: ",
          content: "bold"
        },
        {
          text: "Modifica información existente, actualiza datos, edita",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "❌ DELETE: ",
          content: "bold"
        },
        {
          text: "Borra registros, limpia datos",
          content: "plain"
        }
      ]
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "💡 Consejo: ",
      content: "bold"
    },
    {
      text: "Si no aclaramos nada, por defecto fetch usa ",
      content: "plain"
    },
    {
      text: "GET",
      content: "bold"
    },
    {
      text: ".",
      content: "plain"
    }
  ]
};

