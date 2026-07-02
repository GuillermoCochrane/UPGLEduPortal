export const item1 = {
  type: "h3",
  info: [
    {
      text: "🛠️ Funciones útiles para el DOM",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Estas son las funciones más importantes para manipular elementos HTML con JavaScript.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "🔍 Métodos para obtener elementos",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "table",
  columns: 0,
  title: [
    "Acción",
    "Código",
    "Descripción"
  ],
  info: [
    {
      row: [
        "Obtener por ID",
        "document.getElementById(\"id\")",
        "Un solo elemento"
      ],
      content: "plain"
    },
    {
      row: [
        "Por clase",
        "document.getElementsByClassName(\"clase\")",
        "Varios elementos"
      ],
      content: "plain"
    },
    {
      row: [
        "Por etiqueta",
        "document.getElementsByTagName(\"div\")",
        "Por tipo de etiqueta HTML"
      ],
      content: "plain"
    },
    {
      row: [
        "Selector General",
        "document.querySelector(\".clase o #id\")",
        "Primer elemento que coincida"
      ],
      content: "plain"
    },
    {
      row: [
        "Todos los que coincidan",
        "document.querySelectorAll(\".clase\")",
        "Todos los elementos que coincidan"
      ],
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "✏️ Métodos para modificar elementos",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "table",
  columns: 0,
  title: [
    "Acción",
    "Código",
    "Descripción"
  ],
  info: [
    {
      row: [
        "Cambiar texto",
        "elemento.innerText = \"Nuevo texto\"",
        "Solo texto plano"
      ],
      content: "plain"
    },
    {
      row: [
        "Cambiar contenido HTML",
        "elemento.innerHTML = \"<b>Texto</b>\"",
        "Acepta etiquetas HTML"
      ],
      content: "plain"
    },
    {
      row: [
        "Cambiar estilos",
        "elemento.style.color = \"red\"",
        "Modifica estilos directamente"
      ],
      content: "plain"
    },
    {
      row: [
        "Crear elemento",
        "document.createElement(\"div\")",
        "Crear un nuevo nodo"
      ],
      content: "plain"
    },
    {
      row: [
        "Agregar al DOM",
        "padre.appendChild(hijo)",
        "Insertar nuevo elemento"
      ],
      content: "plain"
    },
    {
      row: [
        "Eliminar del DOM",
        "padre.removeChild(hijo)",
        "Eliminar un nodo"
      ],
      content: "plain"
    },
    {
      row: [
        "Evento al hacer clic",
        "elemento.addEventListener(\"click\", funcion)",
        "Ejecuta función al hacer clic"
      ],
      content: "plain"
    }
  ]
};

