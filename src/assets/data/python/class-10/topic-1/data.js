export const item1 = {
  type: "h3",
  info: [
    {
      text: "¿Qué son las comprensiones de listas?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las comprensiones en Python son una forma concisa y eficiente de crear listas, conjuntos y diccionarios. Permiten realizar operaciones de filtrado, mapeo y transformación de elementos en una sola línea de código, lo que facilita la lectura y escritura del código.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Siguiendo el ejemplo que vimos en clase las podemos observar en la nueva lista llamada alumnos_restantes:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "import random\nlista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\nalumnos_pasados = [\"brisa\"]\n\n# Utilizamos una comprensión de lista para filtrar y crear una\n# nueva lista llamada alumnos_restantes a partir de la lista\n# original lista_alumnos\nalumnos_restantes = [alumno for alumno in lista_alumnos if alumno not in alumnos_pasados]\n\nlista_alumnos_seleccion = random.choice(alumnos_restantes)\nprint(lista_alumnos_seleccion)\n# Imprime un alumno aleatorio de los restantes (por ejemplo: cristian)"
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "¿Qué hace en este caso?",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Lo que esta haciendo nuestra comprension es generar una lista nueva donde en cada iteracion va comprobando si el alumno no esta en la lista de alumnos_pasados y lo agrega en la nueva lista de alumnos restantes.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Siguiendo este caso, en la primer iteracion agregaria a salvador, en la segunda ",
      content: "plain"
    },
    {
      text: "NO ",
      content: "bold"
    },
    {
      text: "agregaria a brisa (ya que esta en alumnos_pasados) y despues de la tercera agregaria a todos los alumnos hasta finalizar la lista.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Vale aclarar que la lista nueva no se genera hasta que finaliza el ciclo for que nos encontramos en su interior, si nos paramos en la lista con el debbuger no la vamos a ver hasta que termine de ejecutarse la linea de codigo en su totalidad.",
      content: "plain"
    }
  ]
};

