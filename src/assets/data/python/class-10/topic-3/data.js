export const item1 = {
  type: "h3",
  info: [
    {
      text: "Bonus Track: ",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Uso de la función pprint (pretty print)",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "La función pprint es un módulo en Python que proporciona una forma de imprimir estructuras de datos complejas (como listas, diccionarios, etc.) de manera más legible y organizada. Al usar pprint, los datos se formatean con saltos de línea y sangrías apropiadas, facilitando su comprensión y análisis visual. Es especialmente útil cuando trabajas con datos anidados o grandes volúmenes de información.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "import pprint\nlista_alumnos = [\"Monica\", \"maricel\", \"carlos\", \"guillermo\", \"paula\", \"fermin\",\n\"gonzalo\", \"javier\", \"Jonathan\", \"florencia\", \"leticia\", \"shirley\", \"patricia\",\n\"marcelo\"]\n\nalumnos_con_indice = [(indice, alumno) for indice, alumno in enumerate(lista_alumnos)]\n# print(alumnos_con_indice)\npprint.pprint(alumnos_con_indice)\n# Imprime cada tupla en su propia línea con formato legible:\n# [(0, 'Monica'), (1, 'maricel'), (2, 'carlos'), ...]"
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Otro ejemplo:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Podemos usar la función pprint para imprimir diccionarios de manera más legible:",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "import pprint\ndata = [\n    {'name': 'Alice', 'age': 30, 'job': 'Engineer'},\n    {'name': 'Bob', 'age': 25, 'job': 'Designer'},\n    {'name': 'Charlie', 'age': 35, 'job': 'Manager'}\n]\n\npprint.pprint(data)\n# Imprime:\n# [{'age': 30, 'job': 'Engineer', 'name': 'Alice'},\n#  {'age': 25, 'job': 'Designer', 'name': 'Bob'},\n#  {'age': 35, 'job': 'Manager', 'name': 'Charlie'}]"
  }
};

