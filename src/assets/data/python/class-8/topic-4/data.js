export const item1 = {
  type: "h3",
  info: [
    {
      text: "Bonus Track",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo de bucles anidados o encapsulados (while dentro de otro while)",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "python",
    content: "desea_volver_a_empezar = True\n\nwhile desea_volver_a_empezar:\n    # Mostrar el menú\n    print(\"\\nMenú Principal:\")\n    print(\"1. Ejecutar código principal\")\n    print(\"2. Mostrar información\")\n    print(\"3. Salir\")\n\n    # Solicitar la opción del usuario\n    opcion = input(\"Ingrese la opción deseada (1, 2 o 3): \")\n\n    # Validar la opción del usuario\n    while True:\n        if opcion.isdigit() and 1 <= int(opcion) <= 3:\n            break\n        else:\n            print(\"Opción no válida. Ingrese un número entre 1 y 3.\")\n            opcion = input(\"Ingrese la opción deseada (1, 2 o 3): \")\n\n    # Ejecutar la acción correspondiente a la opción seleccionada\n    if opcion == \"1\":\n        # Ejecutar el código principal del programa\n        print(\"Ejecutando código principal...\")\n    elif opcion == \"2\":\n        # Mostrar información\n        print(\"Mostrando información...\")\n    elif opcion == \"3\":\n        # Salir del bucle principal\n        desea_volver_a_empezar = False\n        print(\"¡Gracias por usar el programa!\")"
  }
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Un ejemplo de la utilización de bucles anidados puede ser un menú con opciones. En este caso, se tiene un bucle principal que se ejecuta mientras la variable ",
      content: "plain"
    },
    {
      text: "desea_volver_a_empezar",
      content: "bold"
    },
    {
      text: " sea ",
      content: "plain"
    },
    {
      text: "true",
      content: "bold"
    },
    {
      text: ". Dentro de este bucle, se muestra un menú de opciones para que el usuario elija. Luego, hay otro bucle ",
      content: "plain"
    },
    {
      text: "while",
      content: "bold"
    },
    {
      text: " que valida la opción seleccionada. Finalmente, se ejecuta la opción seleccionada utilizando una estructura ",
      content: "plain"
    },
    {
      text: "if",
      content: "bold"
    },
    {
      text: ". Si se elige la opción 3, la variable del primer bucle se cambia a ",
      content: "plain"
    },
    {
      text: "false",
      content: "bold"
    },
    {
      text: ", lo que termina el programa.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 1:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Escribe un programa que cuente una historia interactiva (del estilo de los libros ",
      content: "plain"
    },
    {
      text: " \"Elije tu propia aventura\" ",
      content: "bold"
    },
    {
      text: "), en el que el lector vaya leyendo la historia y llegado a cierto punto, tenga que elegir como sigue la historia. Dependiendo de las elecciones tomadas,  tendra diferentes finales. ",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "El Viaje de Programación en Python",
      content: "bold"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Eres un estudiante de la UPGL en General Levalle y te has inscrito en el curso de programación I en Python. Estás emocionado por aprender un nuevo lenguaje de programación y explorar el mundo de la informática.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Capítulo 1: El Comienzo",
      content: "bold"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: " Comienzas el curso de programación y te encuentras con dos profesores ntusiastas que te introducen a los conceptos básicos de Python. Te enfrentas a desafíos emocionantes y aprendes a escribir tus primeros programas. ¿Quieres seguir adelante con el curso? ",
      content: "plain"
    },
    {
      text: "(Ve al Capítulo 2 apretando la tecla 2 y Enter ) ",
      content: "bold"
    },
    {
      text: "¿O te sientes abrumado y decides abandonar? ",
      content: "plain"
    },
    {
      text: "(Aprieta la tecla 3 y Enter)",
      content: "bold"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Capítulo 2: La Aventura Continúa",
      content: "bold"
    }
  ]
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Decides continuar con el curso y te sumerges más profundamente en el mundo de Python. Aprendes sobre estructuras de datos, funciones y bucles mientras resuelves problemas cada vez más complejos. Tu entusiasmo por la programación crece a medida que adquieres nuevas habilidades. ¿Quieres seguir adelante con el curso y enfrentar el desafío final del proyecto final? ",
      content: "plain"
    },
    {
      text: "(Aprieta la tecla 4 Enter ) ",
      content: "bold"
    },
    {
      text: "¿O te sientes frustrado y decides renunciar? ",
      content: "plain"
    },
    {
      text: "(Aprieta la tecla 3 y Enter)",
      content: "bold"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Capítulo 3: El Desafío Final",
      content: "bold"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Llega el momento de enfrentar el proyecto final del curso. Te enfrentas a un problema complicado que requiere todas las habilidades que has aprendido hasta ahora. Trabajas duro y, con determinación, logras completar el proyecto con éxito. Tu confianza en tus habilidades de programación está en su punto más alto y estás listo para enfrentar nuevos desafíos en el futuro. ¡Felicidades, has alcanzado el Final Feliz!",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Capitulo 3: El triste final",
      content: "bold"
    }
  ]
};

export const item17 = {
  type: "p",
  info: [
    {
      text: "Final Triste: ",
      content: "bold"
    },
    {
      text: "Decides abandonar el curso de programación y te sientes desanimado por no haber alcanzado tus metas. Sin embargo, con el tiempo, te das cuenta de que todavía hay oportunidades para aprender y crecer en el mundo de la informática.",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "titulo2 = \"Capítulo 2: La Aventura Continúa\"\nc2_p1 = \"Decides continuar con el curso y te sumerges más profundamente \"\nc2_p2 = \"en el mundo de Python. Aprendes sobre estructuras de datos, \"\nc2_p3 = \"funciones y bucles mientras resuelves problemas cada vez \"\nc2_p4 = \"más complejos. Tu entusiasmo por la programación crece \"\nc2_p5 = \"a medida que adquieres nuevas habilidades.\"\ncapitulo2 = c2_p1 + c2_p2 + c2_p3 + c2_p4 + c2_p5\ns2_p1 = \"¿Quieres seguir adelante con el curso y enfrentar el desafío \"\ns2_p2 = \"final del proyecto final? (Aprieta la tecla 4 Enter ) ¿O te \"\ns2_p3 = \"sientes frustrado y decides renunciar? (Aprieta la tecla 3 y Enter)\"\nselecion2 = s2_p1 + s2_p2 + s2_p3\ntitulo3 = \"Úlitmo Capítulo 3: El Desafío Final\"\nc3_p1 = \"Llega el momento de enfrentar el proyecto final del curso. \"\nc3_p2 = \"Te enfrentas a un problema complicado que requiere todas \"\nc3_p3 = \"las habilidades que has aprendido hasta ahora. Trabajas duro \"\nc3_p4 = \"y, con determinación, logras completar el proyecto con éxito. \"\nc3_p5 = \"Tu confianza en tus habilidades de programación está en su \"\nc3_p6 = \"punto más alto y estás listo para enfrentar nuevos desafíos \"\nc3_p7 = \"en el futuro. ¡Felicidades, has alcanzado el Final Feliz!\"\ncapitulo3 = c3_p1 + c3_p2 + c3_p3 + c3_p4 + c3_p5 + c3_p6 + c3_p7\ntitulo4 = \"Último Capítulo: El triste Final\"\nc4_p1 = \"Decides abandonar el curso de programación y te sientes \"\nc4_p2 = \"desanimado por no haber alcanzado tus metas. Sin embargo, \"\nc4_p3 = \"con el tiempo, te das cuenta de que todavía hay oportunidades \"\nc4_p4 = \"para aprender y crecer en el mundo de la informática.\"\ncapitulo4 = c4_p1 + c4_p2 + c4_p3 + c4_p4\nerror = \"Opción no válida\"\nfin = \"Fin\"\n\nprint(\"El viaje de programación en Python\")\npr1 = \"Eres un estudiante de la UP en General Levalle y te has \"\npr2 = \"inscrito en el curso de programación I en Python. Estás \"\npr3 = \"emocionado por aprender un nuevo lenguaje de programación \"\npr4 = \"y explorar el mundo de la informática.\"\nprint(pr1 + pr2 + pr3 + pr4)\nprint(\"Capítulo 1: El Comienzo\")\npr5 = \"Comienzas el curso de programación y te encuentras con dos \"\npr6 = \"profesores ntusiastas que te introduce a los conceptos básicos \"\npr7 = \"de Python. Te enfrentas a desafíos emocionantes y aprendes \"\npr8 = \"a escribir tus primeros programas.\"\nprint(pr5 + pr6 + pr7 + pr8)\n\nwhile True:\n    o1_p1 = \"¿Quieres seguir adelante con el curso? (Ve al Capítulo 2 \"\n    o1_p2 = \"apretando la tecla 2 y Enter ) ¿O te sientes abrumado y \"\n    o1_p3 = \"decides abandonar? (Aprieta la tecla 3 y Enter)\"\n    prompt1 = o1_p1 + o1_p2 + o1_p3\n    opcion1 = input(prompt1)\n    if opcion1.isdigit():\n        if int(opcion1) == 2:\n            print(titulo2)\n            print(capitulo2)\n            while True:\n                opcion2 = input(selecion2)\n                if opcion2.isdigit():\n                    if int(opcion2) == 4:\n                        print(titulo3)\n                        print(capitulo3)\n                        exit(fin)\n                    elif int(opcion2) == 3:\n                        print(titulo4)\n                        print(capitulo4)\n                        exit(fin)\n                    else:\n                        print(error)\n                else:\n                    print(error)\n        elif int(opcion1) == 3:\n            print(titulo4)\n            print(capitulo4)\n            exit(fin)\n        else:\n            print(error)\n    else:\n        print(error)"
        }
      }
    ]
  }
};

