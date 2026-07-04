export const item1 = {
  type: "h3",
  info: [
    {
      text: "Filtros con comprensiones",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Podemos filtrar los alumnos(en este caso) dependiendo la letra con la que empieza o termina. El metodo a utilizar es ",
      content: "plain"
    },
    {
      text: ".startswith() ",
      content: "bold"
    },
    {
      text: "o ",
      content: "plain"
    },
    {
      text: ".endswith() ",
      content: "bold"
    },
    {
      text: "donde en el parentesis le pasaremos como cadena de texto lo que tiene que buscar adelante o atras de cada iteracion.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Por ejemplo si colocamos ",
      content: "plain"
    },
    {
      text: ".startswith('s')",
      content: "bold"
    },
    {
      text: ", filtrara todos los nombres que empiecen con S",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\n\nnombres_con_s = [alumno for alumno in lista_alumnos if alumno.startswith('s')]\nprint(nombres_con_s)\n# Imprime: ['salvador']\n\n# Filtramos los alumnos cuyo nombre termina con la letra 'o':\nterminado_con_o = [alumno for alumno in lista_alumnos if alumno.endswith('o')]\nprint(terminado_con_o)\n# Imprime: ['franco']"
  }
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Tambien podemos filtrar por contenido de una palabra, generando una nueva lista a partir de por ejemplo palabras que contengan tanto la letra \"a\" como la letra \"o\".",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\n\n# Filtramos alumnos que contienen tanto la letra \"a\" como la \"o\":\nalumnos_con_ao = [alumno for alumno in lista_alumnos if \"a\" in alumno and \"o\" in alumno]\nprint(alumnos_con_ao)\n# Imprime: ['salvador', 'franco']"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "En este caso tambien podemos agregarle más condiciones ya que trabajamos con la estructura del if",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Podemos filtrar y aplicar una función:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\nalumnos_pasados = [\"brisa\"]\n\nnombres_restantes_mayuscula = [alumno.upper() for alumno in lista_alumnos if alumno not in alumnos_pasados]\nprint(nombres_restantes_mayuscula)\n# Imprime:\n# ['SALVADOR', 'CRISTIAN', 'EMANUEL', 'FRANCO']"
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Podemos crear Listas de listas",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\n\nlista_alumnos_longitud = [[alumno, len(alumno)] for alumno in lista_alumnos]\nprint(lista_alumnos_longitud)\n# Imprime:\n# [['salvador', 7], ['brisa', 5], ['cristian', 8],\n#  ['emanuel', 6], ['franco', 6]]"
  }
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Siendo un if podemos incluir un else: Aunque no es tan común, se puede incluir un bloque else en la comprensión de lista,pero esto suele hacerse más en comprensiones de listas que están aplicando una función o transformación a los elementos.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\n\nlista_transformada = [alumno.upper() if alumno[0].lower() >= 'g' else alumno.lower() for alumno in lista_alumnos]\nprint(lista_transformada)\n# Imprime:\n# ['SALVADOR', 'brisa', 'cristian', 'emanuel', 'franco']"
  }
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Este caso es espectacular, convierte mediante el >= 'g' todas las palabras que comiencen con una letra que alfabeticamente se encuentre despues de la G en mayusculas y el resto en minusculas.",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "Podemos usar una comprensión de listas con la función range:",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "code",
  info: {
    language: "python",
    content: "# range(Numero Inicial, Numero Final, Incremento)\n\nnumeros_con_salto = [numero for numero in range(2, 101, 2)]\n# Genera una lista del 2 al 100 dando saltos de 2 en 2.\nprint(numeros_con_salto)\n# Imprime: [2, 4, 6, 8, 10, ..., 98, 100]"
  }
};

export const item17 = {
  type: "h4",
  info: [
    {
      text: "Otro ejemplo:",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Obtener el índice y el elemento de una lista:",
      content: "bold"
    }
  ]
};

export const item19 = {
  type: "p",
  info: [
    {
      text: "Queremos crear una lista de tuplas donde cada tupla contenga el índice y el elemento de la lista original. Podemos usar la función enumerate:",
      content: "plain"
    }
  ]
};

export const item20 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_alumnos = [\"salvador\", \"brisa\", \"cristian\", \"emanuel\", \"franco\"]\n\nalumnos_con_indice = [(indice, alumno) for indice, alumno in enumerate(lista_alumnos)]\nprint(alumnos_con_indice)\n# Imprime:\n# [(0, 'salvador'), (1, 'brisa'), (2, 'cristian'),\n#  (3, 'emanuel'), (4, 'franco')]"
  }
};

