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
  type: "h4",
  info: [
    {
      text: "Ejercicio 1:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que permita ingresar solo texto",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# realizar un programa que permita ingresar solo texto\nentrada = input(\"Ingrese un texto: \")\n\nif entrada.isdigit():\n    print(\"Error: Debe ingresar solo texto (letras o espacios).\")\nelse:\n    print(f\"el text ingresado es {entrada}.\")"
        }
      }
    ]
  }
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que permita ingresar solo texto y los muestre todo en mayuscula",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# - Realizar un programa que permita ingresar solo texto y los muestre todo \n# en mayuscula\nentrada = input(\"Ingrese un texto: \")\nif entrada.isdigit():\n    print(\"Error: Debe ingresar solo texto.\")\nelse:\n    entrada_mayuscula = entrada.upper()\n    print(f\"el text ingresado es {entrada_mayuscula}.\")"
        }
      }
    ]
  }
};

export const item8 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que permita ingresar solo numeros, si no se cumple este requisito, que me de la hasta 2 oportunidades mas y me muestre la cantidad de veces que lo hice mal.",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Realizar un programa que permita ingresar solo numeros, si no se cumple este\n# requisito, que me de la hasta 2 oportunidades mas y me muestre la \n# cantidad de veces que lo hice mal.\nentrada = input(\"Ingrese un número: \")\n\nif entrada.isdigit():\n    print(f\"el numero ingresado es {entrada}.\")\nelse:\n    print(f\"Error: Debe ingresar un número válido. fijate lo que pusiste!{entrada}\")\n    entrada = input(\"Ingrese otro numero: \")\n    if entrada.isdigit():\n        print(f\"el numero ingresado es {entrada}.\")\n    else:\n        print(f\"Error: Debe ingresar un número válido. fijate lo que pusiste!{entrada}\")\n        entrada = input(\"Ingrese otro numero: \")\n        if entrada.isdigit():\n            print(f\"el numero ingresado es {entrada}.\")\n        else:\n            print(\"Error: Debe ingresar un número válido. Se quedo sin oportunidades.\")\n            exit()"
        }
      }
    ]
  }
};

