export const item1 = {
  type: "h3",
  info: [
    {
      text: "Actividades 💬",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 1:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Objetivo: Pedir al usuario dos números, convertirlos a enteros y mostrar la suma.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Objetivo: Pedir al usuario dos números,\n# convertirlos a enteros y mostrar la suma.\n\nnum1 = int(input(\"Introduzca el primer numero: \"))  # 10\nnum2 = int(input(\"Introduzca el segundo numero: \"))  # 50\nsuma = num1 + num2\nprint(f\"la suma de los numeros es: {suma}\")  # 60"
        }
      }
    ]
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Pedirle al usuario que ponga como estuvo su dia (del 1 al 10 ) y luego mostrar el texto \"Mi dia estuivo de:\" y el valor ingreseado"
    }
  ]
};

export const item7 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Pedirle al usuario que ponga como estuvo su dia (del 1 al 10)\n# y luego mostrar el texto \"Mi dia estuvo de:\" y el valor ingresado\nentrada = input(\"Ingrese como estuvo su dia (del 1 al 10): \")\nprint(f\"Mi dia estuvo de {entrada}\")"
        }
      }
    ]
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Se solicita incluir la siguiente informacion acerca de un libro :",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Título, autor, número de páginas, año de publicación.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Pedir al usuario que ingrese la información solicitada de la siguiente manera: ",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Ingrese el Titulo del libro: ",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ingrese el Autor: ",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ingrese el Numero de Paginas: ",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Ingrese el Año de publicación: ",
          content: "plain"
        }
      ]
    }
  ]
};

export const item13 = {
  type: "h4",
  info: [
    {
      text: "Imprimir:  ",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "\"El libro ",
      content: "plain"
    },
    {
      text: "<nombre del libro>",
      content: "bold"
    },
    {
      text: " fue escrito por ",
      content: "plain"
    },
    {
      text: "<autor>",
      content: "bold"
    },
    {
      text: " y tiene ",
      content: "plain"
    },
    {
      text: "<numero de paginas>",
      content: "bold"
    },
    {
      text: " paginas, y fue publicado en el año ",
      content: "plain"
    },
    {
      text: "<año de publicacion>",
      content: "bold"
    },
    {
      text: ".\"",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Se solicita incluir la siguiente informacion acerca de un libro:\n# Título, autor, número de páginas, año de publicación.\n# Se pide que el usuario ingrese la información solicitada de la\n# siguiente manera:\n#\n# - Ingrese el Titulo del libro :\n# - Ingrese el Autor :\n# - Ingrese el Numero de Paginas :\n# - Ingrese el Año de publicación :\n# - Imprimir : \" El Libro `<nombre del libro>` fue escrito por\n# `<autor>` y tiene `<numero de paginas>` paginas, y fue\n# publicado en el año `<año de publicacion>` \"\n\ntitulo = input(\"Ingrese el titulo del libro: \")\nautor = input(\"Ingrese el autor del libro: \")\npaginas = input(\"Ingrese el numero de paginas del libro: \")\nanio = input(\"Ingrese el año de publicacion del libro: \")\n\n# Fraccionamos el print para evitar overflow horizontal\nprint(\n    f\"El libro {titulo} fue escrito por {autor} y tiene {paginas} \"\n    f\"paginas, y fue publicado en el año {anio}\"\n)"
        }
      }
    ]
  }
};

