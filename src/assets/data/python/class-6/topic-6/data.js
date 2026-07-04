export const item1 = {
  type: "h3",
  info: [
    {
      text: "Comentarios en Python",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "El codigo comentado en Python es ignorado por el intérprete. Esto es útil para documentar el código y hacerlo más entendible.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Almohadilla ( # )",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "El caracter # en Python se utiliza para comentar el resto de la línea. A partir de la misma el intérprete no procesará el código.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Triple Comillas ( \"\"\" )",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "En Python podemos usar las triples comillas ( \"\"\" )  para comentar varios renglones. Se debe usar al comienzo y al final del bloque de código que se desea comentar.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "# Este es un comentario en Python\nprint(\"Hola Mundo\") # no es necesario comentar desde el comienzo de la línea.\n\"\"\"Tambien se puede usar para\ncomentar en varios renglones\"\"\"\n# Resultado: Hola Mundo"
  }
};

export const item8 = {
  type: "h3",
  info: [
    {
      text: "Interpolación de cadenas",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Poniendo \"f\" antes de la cadena, nos permite concatenar un texto con la variable que se encuentra entre llaves.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "code",
  info: {
    language: "python",
    content: "exponenciacion = 10**2\nprint(f\"El resultado de la exponenciación es: {exponenciacion}\")\n# Resultado: El resultado de la exponenciación es: 100"
  }
};

