export const item1 = {
  type: "h3",
  info: [
    {
      text: "Ejemplos de errores:",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Error: ",
      content: "bold"
    },
    {
      text: "usar un entero para almacenar un precio con decimales",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "python",
    content: "precio_entero = 12.99 # Esto puede generar resultados inexactos"
  }
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Error: ",
      content: "bold"
    },
    {
      text: "usar una cadena para realizar cálculos matemáticos",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "suma_cadenas = \"1\" + \"2\" # Esto genera un error de tipo"
  }
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Error: ",
      content: "bold"
    },
    {
      text: "usar un booleano para almacenar una lista de nombres",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_booleana = True, False, True # Esto genera un error de tipo"
  }
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Error: ",
      content: "bold"
    },
    {
      text: "poner valor booleano en minúscula ",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "code",
  info: {
    language: "python",
    content: "lista_booleana = true # false porque true esta en minuscula"
  }
};

