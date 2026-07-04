export const item1 = {
  type: "h3",
  info: [
    {
      text: "Debugger en Python",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Un ",
      content: "plain"
    },
    {
      text: "depurador",
      content: "bold"
    },
    {
      text: " (en inglés: debugger) es una herramienta fundamental para los desarrolladores de software, ya que les permite ",
      content: "plain"
    },
    {
      text: "detectar y corregir errores",
      content: "bold"
    },
    {
      text: " en sus programas. Funciona como un programa que se ejecuta junto al programa que se quiere depurar, permitiendo al usuario ",
      content: "plain"
    },
    {
      text: "observar su comportamiento paso a paso y analizar el estado de las variables",
      content: "bold"
    },
    {
      text: " en cada momento.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "En visual Studio Code podemos acceder a esta función tocando F5 y siguiendo los siguientes pasos:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Debemos colocar un punto de interrupción previamente a ejecutar el depurador, indicando a Visual Studio Code donde parará de ejecutarse nuestro código, esto se hace poniendo el mouse a la izquierda del numero de línea(verán que aparece un punto rojo) y al apretar este quedará fijado!",
          content: "plain"
        },
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/punto_de_control.webp",
            alt: "Puntos de control",
            style: "info"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Posterior a ese punto tendremos que tocar la tecla “F5” (o función + F5) para acceder a las opciones de depuración. Aquí como vemos en la imagen tenemos una sugerida “Python Debugger” o podremos instalar extensiones. Debemos tocar en la sugerida",
          content: "plain"
        },
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/python_debugger.webp",
            alt: "Opciones de depuración"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Luego de tocar “Python Debugger” se nos abrirán más opciones, la que nos interesa por su practicidad es la primera, Archivo de Python que depurará el archivo de Python activo actualmente. Luego de tocar esa opción ya entraremos en el modo depurador o debugger.",
          content: "plain"
        },
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/archivo_de_python.webp",
            alt: "Archivo de Python"
          }
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "¿Cómo sabemos si hicimos todo correctamente y estamos en el modo depuracion? Lo podemos notar por 3 cosas, el color de la barra inferior de Visual Studio Code cambio de color, sumado a eso a nuestra izquierda nos apareceran las variables Locales y se nos habra abierto un nuevo menu con opciones para la depuración",
          content: "plain"
        },
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/modo_depuracion.webp",
            alt: "Modo depuración"
          }
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h3",
  info: [
    {
      text: "Explicando cada parte del depurador",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "figure",
  info: {
    img: "/images/Python/class8/barra_depurador.webp",
    alt: "Barra de depuración",
    style: "icon"
  }
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Al entrar en el modo depurador nos encontramos con este menú compuesto de 6 botones que nos facilitaran el uso del depurador, de Izquierda a Derecha tenemos los siguientes:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "ol",
  info: [
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/continuar.webp",
            alt: "Continuar",
            style: "icon"
          }
        },
        {
          text: "Continuar (F5): ",
          content: "bold"
        },
        {
          text: "Este botón hará un giro completo al código y se volverá a parar en el Stop (interrupción) colocado, tengan en cuenta que si hay un input de por medio como en este caso, se parará ahí hasta que el usuario ingrese el valor, después seguirá el flujo normal.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/depurar_pp_procedimientos.webp",
            alt: "Depurar paso a paso por procedimientos",
            style: "icon"
          }
        },
        {
          text: "Depurar paso a paso por procedimientos (F10): ",
          content: "bold"
        },
        {
          text: "Este opción nos permitirá ir paso a paso por nuestro código, veremos que al tocar F10 o el botón en el código la línea seleccionada (con amarillo) irá siguiendo el flujo del código, a solo una linea por vez. Si la línea es una llamada a una función, ejecuta la función entera y detiene la ejecución en la siguiente línea del nivel actual (no entra en la función)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/depurar_pp_instrucciones.webp",
            alt: "Depurar paso a paso por instrucciones",
            style: "icon"
          }
        },
        {
          text: "Depurar paso a paso por instrucciones (F11): ",
          content: "bold"
        },
        {
          text: "Este opción nos permitirá ir paso a paso por nuestro código, veremos que al tocar F11 o el botón en el código la línea seleccionada (con amarillo) irá siguiendo el flujo del código, a solo una linea por vez. Entra en la llamada de la función en la siguiente línea de código. Si la línea no es una llamada a función, actúa como \"Paso por Paso\"",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/salir.webp",
            alt: "Salir",
            style: "icon"
          }
        },
        {
          text: "Salir de la depuración (Shift + F11):",
          content: "bold"
        },
        {
          text: "Continua la ejecución del programa hasta salir de la función actual y detenerse en la línea siguiente del llamador.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/reiniciar.webp",
            alt: "Reiniciar",
            style: "icon"
          }
        },
        {
          text: "Reiniciar (Ctrl+Shift+F5):",
          content: "bold"
        },
        {
          text: "Reiniciar la sesión de depuración desde el inicio. Detiene la ejecución actual y comienza nuevamente desde el punto de entrada del programa.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          type: "figure",
          info: {
            img: "/images/Python/class8/detener.webp",
            alt: "Detener",
            style: "icon"
          }
        },
        {
          text: "Detener (Ctrl+F5):",
          content: "bold"
        },
        {
          text: "Detiene la sesión de depuración y termina la ejecución del programa.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item9 = {
  type: "h3",
  info: [
    {
      text: "Barra de Variables",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "figure",
  info: {
    img: "/images/Python/class8/barra_de_variables.webp",
    alt: "Barra de variables"
  }
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Al ejecutar el depurador a la izquierda aparecerá un nuevo menú con el valor actual de las variables mientras se va ejecutando el codigo, lo que nos permite un mayor control sin necesidad de colocar print para ver el valor de las mismas por medio de la terminal. En este caso en la imagen de la izquierda tenemos la primera iteración del While, donde el usuario coloco 1 como valor y a su derecha tenemos la segunda iteración donde el usuario coloco 2 como iteración.",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "figure",
  info: {
    img: "/images/Python/class8/ejemplo_barra_variables.webp",
    alt: "Ejemplo barra de variables",
    style: "info"
  }
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "En este ejemplo vemos como el usuario ingreso “A” y por ende el flujo del programa entro dentro del if y terminará con el while al cambiar la condición de seguir a False.",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Recuerden: ",
      content: "bold"
    },
    {
      text: "Las variables que vemos en este menú están ordenadas alfabéticamente!",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "¿Por qué se llama Debugger?",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "El término \"debugger\" proviene del verbo inglés \"to debug\", que significa eliminar errores o fallos de un sistema. La etimología de \"debug\" se remonta a la palabra \"bug\" que, en inglés, significa \"bicho\" o \"insecto\". En el contexto de la informática, \"bug\" se refiere a un error o fallo en el software o hardware. La historia cuenta que uno de los primeros usos del término \"bug\" en la informática se debe a Grace Hopper, una pionera de la programación. En 1947, mientras trabajaba en la computadora Mark II en la Universidad de Harvard, Hopper y su equipo descubrieron que un error en el funciónamiento de la máquina se debía a una polilla atrapada dentro de uno de los relés.",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "p",
  info: [
    {
      text: "Retiraron el insecto y lo pegaron en el cuaderno de registro con la anotación \"First actual case of bug being found\" (Primer caso real de un bug encontrado). Aunque la palabra \"bug\" ya se había utilizado anteriormente en ingeniería, este incidente popularizó el término en el ámbito de la informática.",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Por lo tanto, \"debugging\" se refiere al proceso de identificar y eliminar estos \"bugs\" o errores en los programas. El \"debugger\" es la herramienta o el programa utilizado para llevar a cabo esta tarea, permitiendo a los programadores ejecutar y revisar su código para encontrar y corregir errores. Así, el nombre \"debugger\" refleja su función principal de \"depurar\" el código, eliminando los errores para asegurar su correcto funciónamiento.",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "figure",
  info: {
    img: "/images/Python/class8/bug.webp",
    alt: "Primer Bug"
  }
};

