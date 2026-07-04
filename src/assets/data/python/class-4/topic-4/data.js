export const item1 = {
  type: "h3",
  info: [
    {
      text: "Actividades: 💬",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Es hora de usar el metodo input para resolver ejercicios!",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "1 )- Escribir un programa que pida al usuario su nombre y lo salude por su nombre.",
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
          content: "# Escribir un programa que pida al usuario su nombre \n# y lo salude por su nombre.\n\nnombre = input(\"Ingrese su nombre: \")\nprint(f\"Hola, {nombre}\")"
        }
      }
    ]
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "2 )- Escribir 3 variables para que guarden Apellido y nombre - Email y telefono y mostrarlos en pantalla, con el siguiente mensaje \"Hola, Mi nombre es: ..., te paso mi contacto telefonico: ... y mi email: ...\"",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Pedirle al usuario que ponga como estuvo su dia (del 1 al 10) y luego mostrar el texto \"Mi dia estuivo de: \" y el valor ingresado",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Pedir al usuario que ingrese su edad y su ciudad de residencia, y luego mostrar estos datos en una frase.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Solicitar al usuario que ingrese su comida favorita y su bebida favorita, luego mostrar un mensaje que contenga ambas respuestas.",
          content: "plain"
        }
      ]
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
          content: "# Escribir 3 variables para que guarden Apellido y nombre -\n# Email y telefono y mostrarlos en pantalla, con el siguiente\n# mensaje \"Hola, Mi nombre es: ..., te paso mi contacto\n# telefonico: ... y mi email: ...\"\n#\n# - Pedirle al usuario que ponga como estuvo su dia (del 1 al 10)\n# y luego mostrar el texto \"Mi dia estuvo de: \" y el valor ingresado\n# - Pedir al usuario que ingrese su edad y su ciudad de\n# residencia, y luego mostrar estos datos en una frase.\n# - Solicitar al usuario que ingrese su comida favorita y su bebida\n# favorita, luego mostrar un mensaje que contenga ambas respuestas.\n\nnombreApellido = \"Walter White\"\ntelefono = \"+1 (505) 555-0199\"\nmail = \"walter.white@jpwynnehs.edu\"\n\n# Fraccionamos el print para evitar desbordamientos\nprint(\n    \"Hola, mi nombre es\",\n    nombreApellido,\n    \"y te paso mi contacto telefonico\",\n    telefono,\n    \"y mi email\",\n    mail,\n)\n\ndia = int(input(\"¿Como estuvo de su día? \"))\nprint(f\"Mi día estuvo de {dia}\")\n\nedad = int(input(\"¿Cuántos años tiene? \"))\nciudad = input(\"¿Cuál es tu ciudad de residencia? \")\nprint(f\"Mi edad es {edad} y vivo en {ciudad}\")\n\ncomida = input(\"Cual es tu comida favorita? \")\nbebida = input(\"Cual es tu bebida favorita? \")\nprint(f\"Mi comida favorita es {comida} y mi bebida favorita es {bebida}\")"
        }
      }
    ]
  }
};

