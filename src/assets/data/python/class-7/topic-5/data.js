export const item1 = {
  type: "h3",
  info: [
    {
      text: "Bonus track",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Trivia",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Dado el siguiente código:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "python",
    content: "a = 20\nb = 19\nc = 22\n\nmensaje_true = \"a es mayor a b y b es menor a c\"\nmensaje_false = \"esto no se cumple\"\n\nif a > b and b < c :\n    print(mensaje_true)\nelse:\n    print(mensaje_false)"
  }
};

export const item5 = {
  type: "trivia",
  answer: {
    correct: "La respuesta es correcta",
    incorrect: "La respuesta es incorrecta"
  },
  info: [
    {
      text: "Se imprime la variable: mensaje_true",
      content: "plain",
      name: "trivia1",
      correct: true,
      value: "1"
    },
    {
      text: "Se imprime la variable: mensaje_false",
      content: "plain",
      name: "trivia1",
      correct: false,
      value: "2"
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "Trivia 2: ",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Dado el siguiente código, quiero saber si es Verdadero decir que el envío va a ser \"gratis\" si escribo algo distinto a SI o a NO",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "python",
    content: "libro = input('Ingrese el nombre del libro:')\nautor = input('Ingrese el nombre del autor:')\nprecio = float(input('Ingrese el precio:'))\nenvioGratis = input('¿El envio es gratis?/(\"SI\") o (\"NO\")').upper()\nif envioGratis != \"SI\" and envioGratis != \"NO\":\n    envioGratis = \"SI\"\nprint(f'''Libro: {libro}\nAuto: {autor}\nPrecio: {precio}\n¿Envio gratis?: {envioGratis}\n''')"
  }
};

export const item9 = {
  type: "trivia",
  answer: {
    correct: "La respuesta es correcta",
    incorrect: "La respuesta es incorrecta"
  },
  info: [
    {
      text: "Verdadero",
      content: "plain",
      name: "trivia2",
      correct: true,
      value: "1"
    },
    {
      text: "Falso",
      content: "plain",
      name: "trivia2",
      correct: false,
      value: "2"
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Trivia 3:",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "¿Cual de los 3 if es correcto?",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "trivia",
  answer: {
    correct: "La respuesta es correcta",
    incorrect: "La respuesta es incorrecta"
  },
  info: [
    {
      text: "if frio >= 3",
      content: "plain",
      name: "trivia3",
      correct: false,
      value: "1"
    },
    {
      text: "if frio => 3 :",
      content: "plain",
      name: "trivia3",
      correct: false,
      value: "2"
    },
    {
      text: "if frio >= 3:",
      content: "plain",
      name: "trivia3",
      correct: true,
      value: "3"
    }
  ]
};

export const item13 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 1:",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que permita el ingreso de 4 personas con su nombre y apellido, su dirección y la edad y muestre en pantalla cual es la persona(con todos los datos ingresados) ,  con mayor edad (y en que posición se cargo) y la de menor edad y en que posición se cargo (Por ejemplo Diego Markiewicz de 44 años, vive en General Levalle y  fue cargado en el registro número 3 y Robb Stark de 28 años vive en Winterfell y fue cargado en el registro número 1)",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1, clase 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# INGRESAR 4 PERSONAS CON NOMBRE Y APELLIDO\n# DIRECCION Y EDAD\n# Y MUESTRE LOS DATOS DE LAS PERSONAS\n# EL DE MAYOR EDAD\n# EL DE MENOR EDAD\n# Y EN QUE POSICION SE CARGO\n\nedad = input(\"Ingese una edad:\")\nedad_mayor = 0\nedad_menor = 0\nnombre = input(\"Ingrese el nombre completo:\")\ndireccion = input(\"Ingrese la dirección:\")\nposicion = 1\nnombre_mayor = nombre # aca me guardo el nombre de la persona de mayor edad\ndireccion_mayor = direccion # aca me guardo la direccion de la persona de mayor edad\nnombre_menor = nombre\ndireccion_menor = direccion\nposcion_menor = 1\n\nif edad.isdigit(): # verifico que sea un numero\n    edad = int(edad)\n    edad_mayor = edad\n    edad_menor = edad\n    suma_edades = edad # aca sumo las edades\nelse:\n    print(\"No ingresaste un numero, ultimo intento!\")\n    edad = input(\"Ingrese una edad:\")\n    if edad.isdigit():\n        edad = int(edad)\n        edad_mayor = edad\n        edad_menor = edad\n        suma_edades = edad # aca sumo las edades\n    else:\n        print(\"Como no ingresaste un numero la edad se pone en 0\")\n        exit() # si ingresa mal de nuevo termina el programa\n\n# edad ingresamos la edad 2\nedad = input(\"Ingrese una edad:\")\nnombre = input(\"Ingrese el nombre completo:\")\ndireccion = input(\"Ingrese la dirección:\")\n\nif edad.isdigit():\n    edad = int(edad)\nelse:\n    print(\"Como no ingresaste un numero la edad se pone en 0\")\n    exit()\n\nsuma_edades += edad # aca sumo las edades\n\nif edad >= edad_mayor:\n    edad_mayor = edad\n    posicion = 2\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n\nif edad <= edad_menor:\n    edad_menor = edad\n    posicion_menor = 2\n    nombre_menor = nombre\n    direccion_menor = direccion\n\n# edad ingresamos la edad 3\nedad = input(\"Ingrese una edad:\")\nnombre = input(\"Ingrese el nombre completo:\")\ndireccion = input(\"Ingrese la dirección:\")\n\nif edad.isdigit():\n    edad = int(edad)\nelse:\n    print(\"Como no ingresaste un numero la edad se pone en 0\")\n    exit()\n\nsuma_edades += edad # aca sumo las edades\n\nif edad >= edad_mayor:\n    edad_mayor = edad\n    posicion = 3\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n\nif edad <= edad_menor:\n    edad_menor = edad\n    posicion_menor = 3\n    nombre_menor = nombre\n    direccion_menor = direccion\n\n# edad ingresamos la edad 4\nedad = input(\"Ingrese una edad:\")\nnombre = input(\"Ingrese el nombre completo:\")\ndireccion = input(\"Ingrese la dirección:\")\n\nif edad.isdigit():\n    edad = int(edad)\nelse:\n    print(\"Como no ingresaste un numero la edad se pone en 0\")\n    exit()\n\nsuma_edades += edad # aca sumo las edades\n\nif edad >= edad_mayor:\n    edad_mayor = edad\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n    posicion = 4\n\nif edad <= edad_menor:\n    edad_menor = edad\n    posicion_menor = 4\n    nombre_menor = nombre\n    direccion_menor = direccion\n\npromedio = suma_edades / 4 # aca calculo el promedio\n\n# aca calculo el mayor\nprint(f'''La person de mayor edad es {nombre_mayor} \ncon {edad_mayor} años y vive en {direccion_mayor} \nen la posición {posicion}''')\n\n# aca calculo menor!!!!\nprint(f'''La person de menor edad es {nombre_menor} \ncon {edad_menor} años y vive en {direccion_menor} \ny fue cargado en la posición {posicion_menor}''')\n\nprint(f\"El promedio de las edades es: {promedio}\")"
        }
      }
    ]
  }
};

export const item16 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 1, clase 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# ingresar 4 persona con nombre completo, direccion y edad\n# mostrar los datos de la persona mayo edad y menor edad\n#! en que posicion se cargo\n#* el promedio de edades\n\nnombre = input(\"ingrese el nombre de la persona: \")\nedad = input(\"ingrese la edad de la persona: \")\ndireccion = input(\"ingrese direccion de la persona: \")\n\npromedio = 0 #aca voy a calcular el promedio de las edades\nposicion_mayor = 0 #aca voy a guardar la posicion de la persona mayor\nedad_mayor = 0 #aca voy a guardar la edad mayor\nnombre_mayor = \"\" #aca voy a guardar el nombre de la persona mayor\ndireccion_mayor = \"\" #aca voy a guardar la direccion de la persona mayor\n#ahora voy a calcular el menor\nposicion_menor = 0 #aca voy a guardar la posicion de la persona menor\nedad_menor = 0 #aca voy a guardar la edad menor\nnombre_menor = \"\" #aca voy a guardar el nombre de la persona menor\ndireccion_menor = \"\" #aca voy a guardar la direccion de la persona menor\n\nsuma_de_edades = 0 #aca voy a guardar la suma de las edades\n\nif not edad.isdigit(): #si esto es un numero entero lo cambia\n    print(\"pusiste cualquier cosa ahora vas a tener que empezar de 0\")\n    exit() #temina el programa\n\nedad = int(edad) # cambia el numero que estaba en string a integer (numero)\nnombre_mayor = nombre #guardo variable nombre_mayor con el dato que tengo guardado en nombre\nnombre_menor = nombre # se guarda el valor pq puede llegar a ser el menor\ndireccion_mayor = direccion # lo mismo aca\ndireccion_menor = direccion # lo mismo aca\nedad_mayor = edad # aca guardo la edad\nedad_menor = edad # aca guardo la edad\nposicion_menor = 1\nposicion_mayor = 1\nsuma_de_edades += edad #aca guardo la suma de las edades\n\n#voy a ingresar los datos de la persona 2\nnombre = input(\"ingrese el nombre de la segunda persona: \")\nedad = input(\"ingrese la edad de la segunda persona: \")\ndireccion = input(\"ingrese direccion de la segunda persona: \")\nif not edad.isdigit(): #si esto es un numero entero lo cambia\n    print(\"pusiste cualquier cosa\")\n    exit() #temina el programa\n\nedad = int(edad) # cambia el numero que estaba en string a integer (numero)\nif edad > edad_mayor:\n    edad_mayor = edad\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n    posicion_mayor = 2\nif edad < edad_menor:\n    edad_menor = edad\n    nombre_menor = nombre\n    direccion_menor = direccion\n    posicion_menor = 2\n\nsuma_de_edades += edad #aca guardo la suma de las edades\n\n#voy a ingresar los datos de la persona 3\nnombre = input(\"ingrese el nombre de la tercera persona: \")\nedad = input(\"ingrese la edad de la tercera persona: \")\ndireccion = input(\"ingrese direccion de la tercera persona: \")\nif not edad.isdigit(): #si esto es un numero entero lo cambia\n    print(\"pusiste cualquier cosa\")\n    exit() #temina el programa\n\nedad = int(edad) # cambia el numero que estaba en string a integer (numero)\nif edad > edad_mayor:\n    edad_mayor = edad\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n    posicion_mayor = 3\nif edad < edad_menor:\n    edad_menor = edad\n    nombre_menor = nombre\n    direccion_menor = direccion\n    posicion_menor = 3\n\nsuma_de_edades += edad #aca guardo la suma de las edades\n\n#voy a ingresar los datos de la persona 4\nnombre = input(\"ingrese el nombre de la cuarta persona: \")\nedad = input(\"ingrese la edad de la cuarta persona: \")\ndireccion = input(\"ingrese direccion de la cuarta persona: \")\nif not edad.isdigit(): #si esto es un numero entero lo cambia\n    print(\"pusiste cualquier cosa\")\n    exit() #temina el programa\n\nedad = int(edad) # cambia el numero que estaba en string a integer (numero)\nif edad > edad_mayor:\n    edad_mayor = edad\n    nombre_mayor = nombre\n    direccion_mayor = direccion\n    posicion_mayor = 4\nif edad < edad_menor:\n    edad_menor = edad\n    nombre_menor = nombre\n    direccion_menor = direccion\n    posicion_menor = 4\n\nsuma_de_edades += edad #aca guardo la suma de las edades\npromedio = suma_de_edades / 4\nprint(f\"el promedio de las edad ingresas es: {promedio}\")\nprint(f'''la persona de mayor edad es: {nombre_mayor} \ny tiene {edad_mayor} años y vive en {direccion_mayor} \ny la posicion es {posicion_mayor}''')\n\nprint(f'''la persona de menor edad es: {nombre_menor} \ny tiene {edad_menor} años y vive en {direccion_menor} \ny la posicion es {posicion_menor}''')"
        }
      }
    ]
  }
};

export const item17 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 2:",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que me permita ingresar tres valores, siendo los primeros dos los números a utilizar y el tercero indicará la operación matemática a realizar(S, R, M, D) necesitaría que cuando me imprima el resultado tenga el siguiente formato de salida: ",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "p",
  info: [
    {
      text: "Operación realizada con éxito, el resultado de (Aquí debe mostrar que operación se realizó) es (aquí debe mostrar el resultado). ",
      content: "bold"
    }
  ]
};

export const item20 = {
  type: "p",
  info: [
    {
      text: "Tengan en cuenta que no se puede dividir por CERO así que me debería advertir si lo coloco en el segundo número",
      content: "plain"
    }
  ]
};

export const item21 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2, clase 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# 3 VALORES\n# DOS NUMEROS A UTILIZAR\n# UNA OPERACION (S/R/M/D)\n# SALIDA: OPERACION REALIZADA CON EXITO, EL RESULTADO DE (LA OPERACION) ES:\n# (RESULTADO)\n# NO SE PUEDE DIVIDIR POR 0\n\nnumero_1 = input(\"Ingrese el primer numero:\")\nnumero_2 = input(\"Ingrese el segundo numero:\")\noperacion = input(\"Ingrese la operacion a realizar (S/R/M/D):\")\n\nif numero_1.isdigit() and numero_2.isdigit():\n    numero_1 = int(numero_1)\n    numero_2 = int(numero_2)\nelse:\n    print(\"No ingresaste un numero\")\n    exit()\n\noperacion = operacion.upper()\n\nif operacion == \"S\" or operacion == \"R\" or operacion == \"M\" or operacion == \"D\":\n#Valida que la operacion este bien!\n    if operacion == \"S\":\n        resultado = numero_1 + numero_2\n        print(f\"OPERACION REALIZADA CON EXITO, EL RESULTADO DE LA SUMA ES: {resultado}\")\n    elif operacion == \"R\":\n        resultado = numero_1 - numero_2\n        print(f\"OPERACION REALIZADA CON EXITO, EL RESULTADO DE LA RESTA ES: {resultado}\")\n    elif operacion == \"M\":\n        resultado = numero_1 * numero_2\n        print(f\"OPERACION REALIZADA CON EXITO, EL RESULTADO DE LA MULTIPLICACION ES: {resultado}\")\n    elif operacion == \"D\":\n        if numero_2 == 0:\n            print(\"NO SE PUEDE DIVIDIR POR 0\")\n            exit()\n        resultado = numero_1 / numero_2\n        print(f\"OPERACION REALIZADA CON EXITO, EL RESULTADO DE LA DIVISION ES: {resultado}\")\nelse:\n    print(\"No ingresaste una operacion valida\")\n    exit()"
        }
      }
    ]
  }
};

export const item22 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 2, clase 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# 3 VALORES\n# 2 NUMEROS A UTILIZAR\n# TERCER VARIABLE ES LA OPERACION A REALIZAR(S/R/M/D)\n# SALIDA ESPERADA: OPERACION REALIZADA CON EXITO EL RESULTADO DE (OPERACION) ES (RESULTADO)\n# NO SE PUEDE DIVIDIR POR CERO\n\nvalor_1 = input(\"ingrese el primer valor: \")\nvalor_2 = input(\"ingrese el segundo valor: \")\noperacion = input(\"ingrese la operacion a realizar (S/R/M/D): \")\nnombre_operacion = \"Pusiste mal el nombre de la operacion\"\nresultado = 0\n\nif valor_1.isdigit() and valor_2.isdigit():\n    valor_1 = int(valor_1)\n    valor_2 = int(valor_2)\nelse:\n    print(\"pusiste cualquier cosa\")\n    exit()\n\noperacion = operacion.upper()\nif operacion == \"S\":\n    resultado = valor_1 + valor_2\n    nombre_operacion = \"Suma\"\nelif operacion == \"R\":\n    resultado = valor_1 - valor_2\n    nombre_operacion = \"Resta\"\nelif operacion == \"M\":\n    resultado = valor_1 * valor_2\n    nombre_operacion = \"Multiplicacion\"\nelif operacion == \"D\":\n    if valor_2 == 0:\n        print(\"Recuerde que nada es divisible por cero\")\n        exit()\n    resultado = valor_1 / valor_2\n    nombre_operacion = \"Division\"\nelse:\n    print(\"Operacion invalida\")\n\nprint(f\" OPERACION REALIZADA CON EXITO EL RESULTADO DE {nombre_operacion} ES {resultado}\")"
        }
      }
    ]
  }
};

export const item23 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 3:",
      content: "plain"
    }
  ]
};

export const item24 = {
  type: "p",
  info: [
    {
      text: "Realizar un programa que me diga si el número ingresado es par o impar",
      content: "plain"
    }
  ]
};

export const item25 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 3",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "#Realizar un programa que me diga si el número ingresado es par o impar\nnumero = input(\"Ingrese un numero: \")\n\nif numero.isdigit():\n    numero = int(numero)\n    if numero % 2 == 0:\n        print(f\"El numero {numero} es par.\")\n    else:\n        print(f\"El numero {numero} es impar.\")\nelse:\n    print(\"Error: Debe ingresar un numero.\")"
        }
      }
    ]
  }
};

export const item26 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 4:",
      content: "plain"
    }
  ]
};

export const item27 = {
  type: "p",
  info: [
    {
      text: "Realizar un juego donde la computadora seleccione un numero aleatorio del 1 al 10 y nosotros como jugadores tengamos hasta tres oportunidades de adivinar el numero, si ganamos que nos muestre un mensaje felicitándonos y mostrando el numero aleatorio seleccionado. Tener en cuenta que el numero seleccionado por la computadora al inicio es el mismo que deben evaluar en los tres intentos!. El programa deberá mostrar en que numero de intento lo acerte. Tambien deberá mostrar un mensaje como un \"Frio\" cuando estoy mas alla de 3 numeros o \"Caliente\" cuando estoy a menos de 3.",
      content: "plain"
    }
  ]
};

export const item28 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4, clase 1",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Realizar un juego que adivina un número secreto y nos de 3 intentos para adivinarlo \n# El numero va a ser del 1 al 10\nimport random\n\nprint(\"\"\"\n                                ٩(͡๏̯͡๏)۶\n\n. +   .       ' .      '    * '     .      .     '  )    .   +        *       .     '  )    .   +        *\n:::'###::::'########::'####:'##::::'##:'####:'##::: ##::::'###::::'##::: ##:'########::::'###::::\n::'## ##::: ##.... ##:. ##:: ##:::: ##:. ##:: ###:: ##:::'## ##::: ###:: ##:..... ##::::'## ##:::\n:'##:. ##:: ##:::: ##:: ##:: ##:::: ##:: ##:: ####: ##::'##:. ##:: ####: ##::::: ##::::'##:. ##::\n'##:::. ##: ##:::: ##:: ##:: ##:::: ##:: ##:: ## ## ##:'##:::. ##: ## ## ##:::: ##::::'##:::. ##:\n #########: ##:::: ##:: ##::. ##:: ##::: ##:: ##. ####: #########: ##. ####::: ##::::: #########:\n ##.... ##: ##:::: ##:: ##:::. ## ##:::: ##:: ##:. ###: ##.... ##: ##:. ###:: ##:::::: ##.... ##:\n ##:::: ##: ########::'####:::. ###::::'####: ##::. ##: ##:::: ##: ##::. ##: ########: ##:::: ##:\n..:::::..::........:::....:::::...:::::....::..::::..::..:::::..::..::::..::........::..:::::..::\n                               ( ( (\n                                ) ) )\n                               ( ( (\n                             '. ___ .'\n                            '  (> <) '\n                    --------ooO-(_)-Ooo----------\n\n\n\"\"\")\nprint(\"\")\ninput(\"Presione ENTER tecla para continuar...\") # Esperar a que el usuario presione una tecla\n# Limpiar la pantalla\nprint(\"\\n\"*50)\nparte_1=\"Hola genio, bienvenido al juego de las adivinzas,\\n \"\nparte_2=\"en esta oportunidad vas a tener 3 intentos para adivinar \\n\"\nparte_3=\"el numero secreto que pensé, el numero va a ser del 1 al 10\"\nsaludo_1= parte_1 + parte_2 + parte_3\nsaludo_2=\"Hola Astro... todo bien? jugamos?\"\nsaludo_3=\"Hola gros@, vamos a jugar a adivinar el numero secreto , que va a ser del 1 al 10\"\n\nsaludoseleccionado= random.randint(1,3)\nif saludoseleccionado == 1:\n    saludo_seleccionado = saludo_1\nelif saludoseleccionado == 2:\n    saludo_seleccionado = saludo_2\nelse:\n    saludo_seleccionado = saludo_3\n\nnumero_secreto = random.randint(1,10)\nprint (saludo_seleccionado)\nnombre_usuario = input(\"¿Como te llamas?: \")\nnumero_seleccionado_x_usuario = input(\"Ingrese el numero a adivinar del 1 al 10: \")\nmensaje_error_1 = f\" {nombre_usuario}!!! te dije que ingreses un numero del 1 al 10, volvé a empezar 🙅‍♂️\"\n\n# Primer intento\n#Validacion de que se un numero y no letras\nif numero_seleccionado_x_usuario.isdigit():\n    numero_seleccionado_x_usuario = int(numero_seleccionado_x_usuario )\nelse:\n    print(mensaje_error_1)\n    exit()\n# validacion de que este entre el rango permitido\nif numero_seleccionado_x_usuario <1 or  numero_seleccionado_x_usuario >10:\n    print(mensaje_error_1)\n    exit()\n\n#Primera oportunidad\nif numero_secreto == numero_seleccionado_x_usuario:\n    print(f\"Felicidades {nombre_usuario}🏆, adivinaste el número secreto DE UNA CAMPEON\")\n    exit()\nelse:\n    print(f\"Lo siento {nombre_usuario} 😕, no adivinaste el número secreto, volve a intentarlo 🚀\")\n    diferencia = numero_secreto - numero_seleccionado_x_usuario\n    if diferencia == 2 or diferencia == -2:\n        print(f\"peeeero esta bastante caliente, caliente 🚀dale {nombre_usuario} vos podes\")\n    if diferencia == 4 or diferencia == -4:\n        print(f\"peeeero esta bastante tibio, tibio 🌡️,{nombre_usuario} tenes 2 oportunidades mas\")\n    if diferencia > 4 or diferencia < -4:\n        print(f\"Bastante helado ❄️ {nombre_usuario} mejora la punteria\")\n\n#segunda oportunidad\nnumero_seleccionado_x_usuario = input(\"Ingrese por segunda vez el numero a adivinar: \")\n#Validacion de que se un numero y no letras\nif numero_seleccionado_x_usuario.isdigit():\n    numero_seleccionado_x_usuario = int(numero_seleccionado_x_usuario )\nelse:\n    print(f\"{nombre_usuario} te dije que ingreses un numero del 1 al 10, volvé a empezar 🙅‍♂️ \")\n    exit()\n\n# validacion de que este entre el rango permitido\nif numero_seleccionado_x_usuario <1 or  numero_seleccionado_x_usuario >10:\n    print(f\"{nombre_usuario} te dije que ingreses un numero del 1 al 10, volvé a empezar 🙅‍♂️ \")\n    exit()\n\nif numero_secreto == numero_seleccionado_x_usuario:\n    print(f\"Felicidades {nombre_usuario} 🏆, adivinaste el número a la segunda vez GRANDE GENIO!!!!\")\n    exit()\nelse:\n    print(f\"Lo siento {nombre_usuario} 😕, no adivinaste el número secreto, volve a intentarlo 🚀\")\n    print(f\"te queda una ultima oportunidad!!!!\")\n    diferencia = numero_secreto - numero_seleccionado_x_usuario\n    if diferencia == 2 or diferencia == -2:\n        print(f\"{nombre_usuario} le erraste peeeero esta bastante caliente, caliente 🚀\")\n    if diferencia == 4 or diferencia == -4:\n        print(f\"{nombre_usuario} le erraste peeeero esta bastante tibio, tibio 🌡️\")\n    if diferencia > 4 or diferencia < -4:\n        print(f\"{nombre_usuario} le erraste por bastante pq estas bastante helado ❄️\")\n\n#tercera oportunidad\nnumero_seleccionado_x_usuario = input(\"Ingrese por tercera vez el numero a adivinar: \")\n#Validacion de que se un numero y no letras\nif numero_seleccionado_x_usuario.isdigit():\n    numero_seleccionado_x_usuario = int(numero_seleccionado_x_usuario )\nelse:\n    print(\"Te dije que ingreses un numero del 1 al 10, volvé a empezar 🙅‍♂️ \")\n    exit()\n\n# validacion de que este entre el rango permitido\nif numero_seleccionado_x_usuario <1 or  numero_seleccionado_x_usuario >10:\n    print(\"Te dije que ingreses un numero del 1 al 10, volvé a empezar 🙅‍♂️ \")\n    exit()\n\nif numero_secreto == numero_seleccionado_x_usuario:\n    print(\"Felicidades 🏆, adivinaste el número secreto la tercera vez\")\n    exit()\nelse:\n    print(f\"Lo siento {nombre_usuario} 😕, no adivinaste el número secreto.\")\n    print(f\"Alpiste Perdiste!!!!🧛, el numero magico que pensé es {numero_secreto} \")"
        }
      }
    ]
  }
};

export const item29 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4, clase 2",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "#Tengo que desarrolllar un juego para el cumpleaños de mi sobrino\n#El juego consiste en adivinar un número del 1 al 10\n#Si adivina el número, le tengo que decir cuántos intentos le tomó adivinarlo\n#tambien tengo que poner si esta frio o caliente\n#Si no adivina el número, le tengo que decir que no adivinó el número y que lo siga intentando\nprint(\"\"\"\n                                ٩(͡๏̯͡๏)۶\n\n. +   .       ' .      '    * '     .      .     '  )    .   +        *       .     '  )    .   +        *\n:::'###::::'########::'####:'##::::'##:'####:'##::: ##::::'###::::'##::: ##:'########::::'###::::\n::'## ##::: ##.... ##:. ##:: ##:::: ##:. ##:: ###:: ##:::'## ##::: ###:: ##:..... ##::::'## ##:::\n:'##:. ##:: ##:::: ##:: ##:: ##:::: ##:: ##:: ####: ##::'##:. ##:: ####: ##::::: ##::::'##:. ##::\n'##:::. ##: ##:::: ##:: ##:: ##:::: ##:: ##:: ## ## ##:'##:::. ##: ## ## ##:::: ##::::'##:::. ##:\n #########: ##:::: ##:: ##::. ##:: ##::: ##:: ##. ####: #########: ##. ####::: ##::::: #########:\n ##.... ##: ##:::: ##:: ##:::. ## ##:::: ##:: ##:. ###: ##.... ##: ##:. ###:: ##:::::: ##.... ##:\n ##:::: ##: ########::'####:::. ###::::'####: ##::. ##: ##:::: ##: ##::. ##: ########: ##:::: ##:\n..:::::..::........:::....:::::...:::::....::..::::..::..:::::..::..::::..::........::..:::::..::\n                               ( ( (\n                                ) ) )\n                               ( ( (\n                             '. ___ .'\n                            '  (> <) '\n                    --------ooO-(_)-Ooo----------\n\n\n\"\"\")\nprint(\"\")\ninput(\"Presione ENTER tecla para continuar...\") # Esperar a que el usuario presione una tecla\n# Limpiar la pantalla\nprint(\"\\n\"*50)\n\nimport random\n# import os\n# os.system('cls' if os.name == 'nt' else 'clear')\n\nvalor_seleccionado_por_la_maquina = random.randint(1,10)\nnombre_jugador = input(\"Ingrese el nombre del jugador: \")\n\np1 = f\"Hola {nombre_jugador} bienvenido al juego de adivinanza, \"\np2 = \"tenes 3 oportunidades para adivinar el número que seleccione, \"\np3 = \"el número es del 1 al 10\"\nsaludo_1 = p1 + p2 + p3\n\np1 = \"Vamos GENI@ DE LA VIDA se que te llamas \"\np2 = f\"{nombre_jugador} pq lo pusiste recien, \"\np3 = \"tenes 3 oportunidades para adivinar el número que seleccione, \"\np4 = \"el número es del 1 al 10\"\nsaludo_2 = p1 + p2 + p3 + p4\n\np1 = f\"ooooooh gran {nombre_jugador}, tenes 3 oportunidades para adivinar \"\np2 = \"el número que seleccione, el número es del 1 al 10\"\nsaludo_3 = p1 + p2\n\np1 = f\"dale loco!!!! {nombre_jugador} \"\np2 = \"adiviname y te llevas un beso.\"\nsaludo_4 = p1 + p2\n\nelegi_un_saludo = random.randint(1,4)\nif (elegi_un_saludo == 1):\n    saludo = saludo_1\nif (elegi_un_saludo == 2):\n    saludo = saludo_2\nif (elegi_un_saludo == 3):\n    saludo = saludo_3\nif (elegi_un_saludo == 4):\n    saludo = saludo_4\n\nprint (saludo)\nprint(\"\")\nvarlor_seleccionado_usuario = input(\"ingresa el numero (1 al 10): \")\n#Valido que haya ingresado un numero y no una letra\nerror_numero_uno_diez = \"Te dije que pongas un numero del 1 al 10, Volve a empezar\"\n\np1 = f\"{nombre_jugador} Adivinaste el número ALA PRIMERA VEZ ... \"\np2 = \"sos un genuio de la vida!!!!🚀🚀🚀🚀🚀🧙‍♂️🧙‍♂️🧙‍♂️\"\nadivino_1 = p1 + p2\n\np1 = f\"{nombre_jugador} Adivinaste el número en la segunda oportunidad ... \"\np2 = \"CAPO TOTAL ! 🚀🚀🚀🚀🚀🧙‍♂️🧙‍♂️\"\nadivino_2 = p1 + p2\n\np1 = f\"{nombre_jugador} Adivinaste el número en la ultima oportunidad ... \"\np2 = \"TE FELICITO!! 🚀🚀🚀🚀🚀🧙‍♂️\"\nadivino_3 = p1 + p2\n\nno_adivino_1 = f\"{nombre_jugador} No adivinaste, te quedan 2 oportunidades🧙‍♂️\"\nno_adivino_2 = f\"{nombre_jugador} No adivinaste, ya te queda la ultima oportunidad🧙‍♂️\"\n\np1 = f\"aaaay {nombre_jugador}, lo lamento mucho, \"\np2 = \"dejale la oportunidad a otro jugador y paga laprata 🧙‍♂️\"\nno_adivino_3 = p1 + p2\n\ndiferencia_dos = \"Estas muy hot 🌋\"\ndiferencia_tres = \"Esta tibio 😗\"\ndiferencia_cuatro = \"Estas re frio negro 🥶\"\n\nif not  varlor_seleccionado_usuario.isdigit() :\n    print(error_numero_uno_diez)\n    exit()\nvarlor_seleccionado_usuario = int(varlor_seleccionado_usuario)\n\nif  varlor_seleccionado_usuario <1 or varlor_seleccionado_usuario >10:\n    print(error_numero_uno_diez)\n    exit()\n\nif valor_seleccionado_por_la_maquina == varlor_seleccionado_usuario:\n    print(adivino_1)\n    exit()\nelse:\n    print(no_adivino_1)\n    calculo = valor_seleccionado_por_la_maquina - varlor_seleccionado_usuario\n    if calculo >= 2 or calculo >= -2:\n        print(diferencia_dos)\n    if calculo == 3 or calculo == -3:\n        print(diferencia_tres)\n    if calculo > 4 or calculo <= -4:\n        print(diferencia_cuatro)\n\nvarlor_seleccionado_usuario = input(\"segunda vez 🧙‍♂️🪄 (1 al 10): \")\nif not  varlor_seleccionado_usuario.isdigit() :\n    print(error_numero_uno_diez)\n    exit()\nvarlor_seleccionado_usuario = int(varlor_seleccionado_usuario)\n\nif  varlor_seleccionado_usuario <1 or varlor_seleccionado_usuario >10:\n    print(error_numero_uno_diez)\n    exit()\n\nif valor_seleccionado_por_la_maquina == varlor_seleccionado_usuario:\n    print(adivino_2)\n    exit()\nelse:\n    print(no_adivino_2)\n    calculo = valor_seleccionado_por_la_maquina - varlor_seleccionado_usuario\n    if calculo >= 2 or calculo >= -2:\n        print(diferencia_dos)\n    if calculo == 3 or calculo == -3:\n        print(diferencia_tres)\n    if calculo > 4 or calculo <= -4:\n        print(diferencia_cuatro)\n\nvarlor_seleccionado_usuario = input(\"ultima vez 🧙‍♂️🪄 (1 al 10): \")\nif not  varlor_seleccionado_usuario.isdigit() :\n    print(error_numero_uno_diez)\n    exit()\nvarlor_seleccionado_usuario = int(varlor_seleccionado_usuario)\n\nif  varlor_seleccionado_usuario <1 or varlor_seleccionado_usuario >10:\n    print(error_numero_uno_diez)\n    exit()\n\nif valor_seleccionado_por_la_maquina == varlor_seleccionado_usuario:\n    print(adivino_3)\n    exit()\nelse:\n    print(no_adivino_3)\n    print(f\"El número era {valor_seleccionado_por_la_maquina} 🧙‍♂️🪄🚀\")"
        }
      }
    ]
  }
};

export const item30 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 5:",
      content: "plain"
    }
  ]
};

export const item31 = {
  type: "p",
  info: [
    {
      text: "Realizar un juego de piedra, papel y tijera.",
      content: "plain"
    }
  ]
};

export const item32 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 5",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Realizar un juego de piedra, papel y tijera.\nimport random\nprint(\"Bienvenido al juego de piedra, papel y tijera\")\n\nprompt = \"Escribe el que quieras seleccionar: Piedra, Papel o Tijera: \"\nseleccion_usuario = input(prompt).capitalize()\n\ncomputadora = random.randint(1,3)\nusuario = 0\nseleccion_computadora = \"\"\n\nif computadora == 1:\n    seleccion_computadora = \"Piedra\"\nelif computadora == 2:\n    seleccion_computadora = \"Papel\"\nelif computadora == 3:\n    seleccion_computadora = \"Tijera\"\n\nif seleccion_usuario == \"Piedra\" or seleccion_usuario == \"Papel\" or seleccion_usuario == \"Tijera\":\n    if seleccion_usuario == \"Piedra\":\n        usuario = 1\n    elif seleccion_usuario == \"Papel\":\n        usuario = 2\n    elif seleccion_usuario == \"Tijera\":\n        usuario = 3\n    else:\n        print(\"Lo siento, no seleccionaste un valor correcto\")\n        exit()\n\nif computadora < usuario or (computadora == 3 and usuario == 1):\n    p1 = f\"¡¡Ganaste!! Elegiste: {seleccion_usuario} \"\n    p2 = f\"y yo elegí: {seleccion_computadora}\"\n    print(p1 + p2)\nelif computadora == usuario:\n    print(f\"Empate, elegimos lo mismo: {seleccion_usuario}\")\nelse:\n    p1 = f\"Perdiste, elegiste {seleccion_usuario} \"\n    p2 = f\"y yo elegí {seleccion_computadora}\"\n    print(p1 + p2)"
        }
      }
    ]
  }
};

export const item33 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 6:",
      content: "plain"
    }
  ]
};

export const item34 = {
  type: "p",
  info: [
    {
      text: "Realizar un juego de Cara o Cruz donde el usuario tenga 2 opciones para elegir, si jugar contra la computadora o un amigo. Si elige la segunda deberíamos preguntarle el nombre a ambos",
      content: "plain"
    }
  ]
};

export const item35 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 6",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Realizar un juego de Cara o Cruz donde el usuario tenga 2 opciones para elegir,\n# si jugar contra la computadora o un amigo.\n# Si elige la segunda deberíamos preguntarle el nombre a ambos\nimport random\nprint(\"Bienvenido al juego de Cara o Cruz\")\nversus = input(\"¿Quieres jugar contra la computadora o un amigo? \").capitalize()\ncomputadora = random.randint(1,2)\nusuario = 0\nseleccion_computadora = \"\"\nif computadora == 1:\n    seleccion_computadora = \"Cara\"\nelif computadora == 2:\n    seleccion_computadora = \"Cruz\"\n\nif versus == \"Computadora\":\n    seleccion_usuario = input(\"Escribe el que quieras seleccionar: Cara, o Cruz: \").capitalize()\n    if seleccion_usuario == \"Cara\":\n        usuario = 1\n    elif seleccion_usuario == \"Cruz\":\n        usuario = 2\n    else:\n        print(\"Lo siento, no seleccionaste un valor correcto\")\n        exit()\n\n    if usuario == computadora:\n        print(f\"Salió {seleccion_computadora} y ganaste!!\")\n    else:\n        print(f\"Perdiste, porque salió {seleccion_computadora}\")\n\nelif versus == \"Amigo\":\n    jugador1 = input(\"Que el jugador 1 ingrese su nombre: \").capitalize()\n    jugador2 = input(\"Que el jugador 2 ingrese su nombre: \").capitalize()\n    prompt = f\"{jugador1}, escribe lo que quieras seleccionar, Cara, o Cruz: \"\n    eleccion_usuario = input(prompt).capitalize()\n\n    if eleccion_usuario == \"Cara\":\n        p1 = f\"{jugador1} eligio Cara, \"\n        p2 = f\"por lo tanto {jugador2} le queda Cruz\"\n        print(p1 + p2)\n        usuario = 1\n    elif eleccion_usuario == \"Cruz\":\n        p1 = f\"{jugador1} eligio Cruz, \"\n        p2 = f\"por lo tanto {jugador2} le queda Cara\"\n        print(p1 + p2)\n        usuario = 2\n    else:\n        print(\"Lo siento, no seleccionaste un valor correcto\")\n        exit()\n\n    if usuario == computadora:\n        print(f\"Salió {seleccion_computadora}\")\n        print(f\"El ganador es {jugador1}\")\n    else:\n        print(f\"Salió {seleccion_computadora}\")\n        print(f\"El ganador es {jugador2}\")\n\nelse:\n    print(\"Lo siento, no seleccionaste un valor correcto\")\n    exit()"
        }
      }
    ]
  }
};

export const item36 = {
  type: "h4",
  info: [
    {
      text: "Generador de Arte ASCII",
      content: "plain"
    }
  ]
};

export const item37 = {
  type: "p",
  info: [
    {
      text: "Con esta herramienta, la transformación de texto en arte ASCII nunca ha sido tan simple y rápida. Ya sea para destacar tu perfil en las redes sociales, añadir un toque artístico a tu sitio web o personalizar tus comunicaciones personales, nuestro generador de arte ASCII está siempre disponible para satisfacer tus necesidades. Pruébalo y descubre lo fácil que es dar vida a tus textos con un toque de arte ASCII.",
      content: "plain"
    }
  ]
};

export const item38 = {
  type: "link",
  info: [
    {
      text: "Generador de Arte ASCII",
      content: "plain",
      link: "https://www.freetool.dev/es/generador-de-letras-ascii"
    }
  ]
};

export const item39 = {
  type: "h4",
  info: [
    {
      text: "Atajos de VS Code",
      content: "plain"
    }
  ]
};

export const item40 = {
  type: "youtube",
  info: [
    {
      link: "https://www.youtube.com/embed/G7p6GwCxXY4",
      title: "Atajos de VSCode",
      width: "718",
      height: "404"
    }
  ]
};

