export const item1 = {
  type: "h3",
  info: [
    {
      text: "💡 Ejercicios prácticos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "1️⃣ Ejercicio 1: ",
      content: "bold"
    },
    {
      text: "Pokémon con detalles",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Modifica el ejemplo para obtener detalles de cada Pokémon: ",
      content: "plain"
    },
    {
      text: "nombre, altura, peso y tipo.",
      content: "bold"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "javascript",
    content: "fetch(pokemon.url)\n  .then(res => res.json())\n  .then(detalles => {\n    const li = document.createElement(\"li\");\n    li.innerHTML = `\n      <strong>Nombre:</strong> ${detalles.name}<br>\n      <strong>ℹ️ Altura:</strong> ${detalles.height/10}m <br>\n      <strong>⚖️ Peso:</strong> ${detalles.weight/10}kg <br>\n      <strong>🏷️ Tipo:</strong> ${detalles.types[0].type.name}`;\n   });"
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "2️⃣ Ejercicio 2: ",
      content: "bold"
    },
    {
      text: "Pokémon de una generación",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Usa la API ",
      content: "plain"
    },
    {
      text: "https://pokeapi.co/api/v2/generation/1",
      content: "bold"
    },
    {
      text: " para mostrar solo Pokémon de la primera generación.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "javascript",
    content: "//Pista: la respuesta tiene una estructura diferente\ndata.pokemon_species.slice(0, 10).forEach(pokemon => {\n // código para mostrar cada pokémon\n});"
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "3️⃣ Ejercicio 3: ",
      content: "bold"
    },
    {
      text: "Cards con imágenes de Pokémon",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Muestra los Pokémon en formato de cards de Bootstrap con su imagen oficial.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "code",
  info: {
    language: "javascript",
    content: "// Estructura de card con imagen:\nconst card = `\n  <div class=\"card mb-3\">\n    <img src=\"${pokemon.sprites.front_default}\" class=\"card-img-top\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">${pokemon.name}</h5>\n      <p class=\"card-text\">Tipo: ${pokemon.types[0].type.name}</p>\n    </div>\n  </div>\n`;"
  }
};

