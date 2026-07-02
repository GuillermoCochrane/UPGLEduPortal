export const item1 = {
  type: "h3",
  info: [
    {
      text: "✨ Ejemplo: Lista de Pokémon",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Vamos a usar la PokéAPI ",
      content: "plain"
    },
    {
      text: "(https://pokeapi.co/api/v2/pokemon) ",
      content: "bold"
    },
    {
      text: " que devuelve información real de Pokémon.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "⚡Código HTML + JavaScript",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "html",
    content: "<body>\n<h1>Lista de Pokémon</h1>\n<ul id=\"lista\"></ul>\n\n<script>\n  const lista = document.getElementById(\"lista\");\n\n  fetch(\"https://pokeapi.co/api/v2/pokemon?limit=10\")\n    .then(res => res.json()) // paso 1: convertir a JSON\n    .then(data => { // paso 2: recorrer los pokémon y mostrarlos en la lista\n      data.results.forEach((pokemon, index) => {\n        const li = document.createElement(\"li\");\n        li.textContent = `#${index + 1} ${pokemon.name}`;\n        lista.appendChild(li);\n      });\n    })\n    .catch(error => {\n      console.log(\"Hubo un error:\", error);\n    });\n</script>\n</body>"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "ℹ️ Esto va a mostrar una lista de los primeros 10 Pokémon con su número y nombre.",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "⚡ Versión Interactiva",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "💎 Lista de Pokémon desde PokéAPI",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "💎 Detalles de un Pokémon específico",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "💡 Ideas para ejercitar",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "🐉 Detalles Pokémon: ",
          content: "bold"
        },
        {
          text: "Obtener detalles individuales de cada Pokémon (altura, peso, tipos)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "🖼️ Con imágenes: ",
          content: "bold"
        },
        {
          text: "Mostrar sprites de los Pokémon usando ",
          content: "plain"
        },
        {
          text: "sprites.front_default",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "🔎 Filtrar por tipo: ",
          content: "bold"
        },
        {
          text: "Usa los endpoints de tipos para mostrar solo Pokémon de un tipo específico",
          content: "plain"
        }
      ]
    }
  ]
};

