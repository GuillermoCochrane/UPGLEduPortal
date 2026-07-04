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
  type: "p",
  info: [
    {
      text: "1 )- Escribir un programa que imprima un mensaje en la pantalla.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribir un programa que imprima un mensaje en la pantalla.\nprint(\"Este es un mensaje impreso en la pantalla con Python\")"
        }
      }
    ]
  }
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "2 )- Escribir un programa que sume dos números.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribir un programa que sume dos números.\n\nnumero1 = 22\nnumero2 = 33\nsumanumeros = numero1 + numero2\nprint(\"El resultado es:\", sumanumeros)"
        }
      }
    ]
  }
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "3 )- Escribir 3 variables para que guarden Apellido y nombre - Email y telefono y mostrarlos en pantalla, con el siguiente mensaje \"Hola, Mi nombre es: ..., te paso mi contacto telefonico: ... y mi email: ...\"",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribir 3 variables para que guarden Apellido y nombre -\n# Email y telefono, y mostrarlos en pantalla, con el siguiente\n# mensaje: \"Hola, Mi nombre es: ..., te paso mi contacto\n# telefonico: ... y mi email: ...\"\n\nnombreApellido = \"Walter White\"\ntelefono = \"+1 (505) 555-0199\"\nmail = \"walter.white@jpwynnehs.edu\"\n\n# Fraccionamos el print en varias líneas para mejorar la lectura\nprint(\n    \"Hola, mi nombre es\",\n    nombreApellido,\n    \"y te paso mi contacto telefonico\",\n    telefono,\n    \"y mi email\",\n    mail,\n)"
        }
      }
    ]
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "4 )- Escribe un programa donde una variable llamada contador cambie a lo largo de la ejecucion del programa, que su primer valor sea 0, cambie a 5 y posteriormente a 25 para al finalizar el programa volver a ser 5.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "answer",
  info: {
    title: "Solución ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Escribe un programa donde una variable llamada contador cambie\n# a lo largo de la ejecucion del programa, que su primer valor\n# sea 0, cambie a 5 y posteriormente a 25 para al finalizar\n# el programa volver a ser 5.\n\ncontador = 0\nprint(f\"El primer valor de la variable contador es: {contador}\")\ncontador = 5\nprint(f\"El segundo valor de la variable contador es: {contador}\")\ncontador = 25\nprint(f\"El tercer valor de la variable contador es: {contador}\")\ncontador = 5\nprint(f\"El cuarto valor de la variable contador es: {contador}\")"
        }
      }
    ]
  }
};

