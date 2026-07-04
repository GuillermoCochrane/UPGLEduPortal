export const item1 = {
  type: "h3",
  info: [
    {
      text: "Ciclo While",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "El ciclo while en programación se utiliza para ejecutar repetidamente un bloque de código mientras una condición específica sea verdadera. Esto es especialmente útil cuando no sabés de antemano cuántas veces necesitas repetir una tarea y quieres seguir ejecutando el código hasta que se cumpla una condición de salida.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "While condicion:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Bloque de código a ejecutar mientras la condición sea verdadera",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Flujo de ejecución:",
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
          text: "La condición se evalúa antes de cada iteración del bucle.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Si la condición es verdadera, el bloque de código dentro del while se ejecuta.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Después de la ejecución del bloque de código, la condición se vuelve a evaluar.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Si la condición sigue siendo verdadera, el ciclo se repite; de lo contrario, el programa continúa con la siguiente instrucción después del while.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "contador = 0\nwhile contador < 5:\n    print(f\"Iteración {contador}\")\n    contador += 1"
  }
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Usos típicos:",
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
          text: "Procesamiento de datos mientras se cumpla cierta condición.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Interacción con el usuario hasta que se ingrese un valor específico.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Implementación de bucles controlados por eventos.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item11 = {
  type: "h3",
  info: [
    {
      text: "¡¡¡Importante!!!",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Tener cuidado al usar ciclos while para evitar caer en bucles infinitos. Asegúrate de que la condición se modifique en algún punto dentro del bloque de código o de lo contrario, el bucle continuará ejecutándose indefinidamente.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "while True: # Bloque de código\n    clave = input(\"ingrese la clave para acceder:\")\n    if clave == \"1234\":\n        print(\"Al fin lo conseguiste... sos un HACKER\")\n        True\n        break #sin este break, estaríamos en un ciclo infinito\n    else:\n        print(\"clave incorrecta\")"
  }
};

