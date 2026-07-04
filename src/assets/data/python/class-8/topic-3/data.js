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
      text: "Realiza el programa para la nasa que cuente regresviamente de 10 a 0 y luego muestre un mensaje de despegue",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Ejemplo de salida: ",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "bash",
    content: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n0\nDespegue 🚀"
  }
};

export const item6 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# 🚀Nos vamos a la Luna 🚀. Realiza el programa para la NASA que cuente\n# regresivamente de 10 a 0 y luego muestre un mensaje de despegue\ncontador = 10\nwhile contador >= 0:\n    print(f\"... {contador} ...\")\n    contador -= 1\nprint(\"Despegue!!! 🚀\")"
        }
      }
    ]
  }
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "🔮 Adivina el numero: Realizar un programa que adivine un numero con 3 intentos para adivinar el numero secreto entre 1 y 10",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "import random\nnumero_secreto = random.randint(1,10)\n\np1 = \"Bienvenido al juego de las adivinzas, tiene 3 intentos \"\np2 = \"para adivinar el numero secreto que va del 1 al 10\"\nprint(p1 + p2)\n\nnombre_usuario = input(\"¿Como te llamas?: \")\nmensaje_error = f\"{nombre_usuario}!!! Debes ingresar un numero del 1 al 10\"\ncontador = 3\n\nwhile contador != 0:\n    while True:\n        prompt = \"Ingrese el numero a adivinar del 1 al 10: \"\n        numero_usuario = input(prompt)\n        #Validación de que el dato ingresado es un numero y no letras\n        if numero_usuario.isdigit():\n            numero_usuario = int(numero_usuario)\n            #Validación de que el numero ingresado sea entre el rango permitido\n            if numero_usuario < 1 or numero_usuario > 10:\n                print(mensaje_error)\n            else:\n                break\n        else:\n            print(mensaje_error)\n\n    if numero_secreto == numero_usuario:\n        print(f\"¡¡Felicidades {nombre_usuario}, adivinaste el número!!\")\n        break\n    else:\n        p1 = f\"Lo siento {nombre_usuario}, no adivinaste el \"\n        p2 = \"número secreto, volve a intentarlo 🚀\"\n        print(p1 + p2)\n        contador -= 1\n        print(f\"Te queda {contador} oportunidades\")\n\nif contador == 0:\n    p1 = f\"Lo siento {nombre_usuario}, \"\n    p2 = \"no adivinaste el número secreto\"\n    print(p1 + p2)\n    print(f\"El número secreto era {numero_secreto}\")"
        }
      }
    ]
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "💻 SUMADORA: Realizar un programa que permita sumar numeros hasta que se ingrese un 0",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# 💻 SUMADORA: Realizar un programa que permita sumar\n# numeros hasta que se ingrese un 0\nsuma = 0\nwhile True:\n    numero = input(\"Ingrese un numero: \")\n    if numero == \"0\":\n        print(f\"La suma total es: {suma}\")\n        break\n    else:\n        suma += int(numero)\n        print(f\"La suma parcial es: {suma}\")"
        }
      }
    ]
  }
};

export const item13 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 4:",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "❎ Tabla de Multiplicar: Realizar un programa que muestre la tabla de multiplicar de un número ingresado por el usuario.",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# ❎ Tabla de Multiplicar: Realizar un programa que muestre la\n# tabla de multiplicar de un número ingresado por el usuario.\nnumero = int(input(\"Ingrese un numero: \"))\ncontador = 0\nprint(f\"La tabla del {numero} es:\")\nwhile contador < 11:\n    print(f\"{numero} x {contador} = {numero * contador}\")\n    contador += 1"
        }
      }
    ]
  }
};

