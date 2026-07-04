export const item1 = {
  type: "h3",
  info: [
    {
      text: "Manejo de cadenas",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "code",
  info: {
    language: "python",
    content: "miGrupoFavorito: str = \"Guns & Roses\"\nprint(miGrupoFavorito)\nprint(type(miGrupoFavorito))\n\n# Union/concatenacion de cadenas con el simbolo + al ser string \n# une cadenas de texto (no suma)\nprint(\"Mi grupo favorito es: \" + miGrupoFavorito)\n\nmiGrupoFavorito: str = \"El Chaqueño Palavecino\"\ncomentario = \"Hace musica folclorica\"\nprint(miGrupoFavorito + \" \" + comentario)\n\n# Otra manera de concatenar\nprint (\"Mi grupo favorito es: \", miGrupoFavorito )\n\n# Otra manera de concatenar\nprint(f\"Mi grupo favorito es: {miGrupoFavorito} {comentario}\")"
  }
};

export const item3 = {
  type: "h3",
  info: [
    {
      text: "Manejo de cadenas - sumas (contatenación vs suma - Sobre carga de operadores)",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "numero1 = \"1\"\nnumero2 = \"2\"\nprint (numero1+numero2)\n\nnumero1 = 1\nnumero2 = 2\nprint (numero1 + numero2)"
  }
};

export const item5 = {
  type: "h3",
  info: [
    {
      text: "Conversión de tipos de datos",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "String a entero",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "code",
  info: {
    language: "python",
    content: "numero1 = \"1\"\nnumero2 = \"2\"\nprint (int(numero1)+int(numero2))"
  }
};

