export const item1 = {
  type: "h3",
  info: [
    {
      text: "¿Qué es la función input()?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "La función input() en Python se usa para recibir datos del usuario mientras el programa se está ejecutando.",
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
          text: "El programa le pide al usuario que ingrese algo: Cuando el programa alcanza la línea de código que contiene ",
          content: "plain"
        },
        {
          text: "input()",
          content: "bold"
        },
        {
          text: ", se detiene y muestra un mensaje (si lo incluye entre comillas dentro de los paréntesis), esperando que el usuario escriba algo.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "El usuario ingresa un valor: El usuario escribe lo que quiera y luego presiona la tecla ",
          content: "plain"
        },
        {
          text: "Enter",
          content: "bold"
        },
        {
          text: " o ",
          content: "plain"
        },
        {
          text: "Intro",
          content: "bold"
        },
        {
          text: ".",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "El programa recibe y guarda lo que el usuario escribió: Lo que el usuario escribió se guarda como una cadena de texto (o string) y el programa lo puede utilizar más adelante.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Por ejemplo: ",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "#En este programa, python nos pregunta nuestro nombre con la funcion\n#input y despues nos lo imprime por consola con la funcion print\nnombre = input(\"Por favor, introduce tu nombre: \")\nprint(\"Hola, \", nombre)."
  }
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "¡No solo se puede usar uno en nuestro codigo, podemos usar y almacenar la cantidad que necesitemos!",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "# Aqui lo que hará python es: primero preguntarnos el nombre, al tocar Enter pasara a \n# la siguiente linea y nos preguntará el apellido y lo guardará dentro de cada variable.\nnombre = input(\"Por favor, introduce tu nombre: \")\napellido = input(\"Por favor, introduce tu apellido: \")\nprint(\"El nombre que me compartiste es \", nombre, \" y tu apellido es \", apellido)"
  }
};

