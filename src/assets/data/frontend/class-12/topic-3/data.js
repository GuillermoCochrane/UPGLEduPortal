export const item1 = {
  type: "h3",
  info: [
    {
      text: "⚠️ Manejo de errores",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "💎 Buenas prácticas",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Siempre usar ",
          content: "plain"
        },
        {
          text: ".catch()",
          content: "bold"
        },
        {
          text: " para manejar errores",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Verificar si la respuesta es exitosa con ",
          content: "plain"
        },
        {
          text: "response.ok",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Mostrar mensajes útiles al usuario cuando algo falle",
          content: "plain"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "💡 Ejemplo práctico",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "javascript",
    content: "fetch(\"https://api-inexistente.com/datos\")\n .then(response => { \n   if (!response.ok) { \n     throw new Error(\"Error en la respuesta: \" + response.status); \n   } \n   return response.json(); \n })\n .then(data => { \n   console.log(\"Datos recibidos:\", data); \n })\n .catch(error => { \n   console.error(\"Error:\", error); \n   // Mostrar mensaje de error al usuario \n   document.getElementById(\"mensaje\").innerHTML = \n     \"❌ No se pudieron cargar los datos\"; \n });"
  }
};

