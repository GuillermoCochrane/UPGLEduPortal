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
      text: "Crear una clase llamada Rectangulo que tenga dos atributos: ancho y alto.",
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
          content: "# Ejercicio 1: Crear una Clase de Rectángulo\n# Objetivo: Crear una clase llamada Rectangulo que tenga\n# dos atributos: ancho y alto.\n\nclass Rectangulo:\n    def __init__(self, ancho, alto):\n        self.ancho = ancho\n        self.alto = alto\n\n    def mensaje(self):\n        p1 = f\"El rectangulo tiene un ancho de {self.ancho} \"\n        p2 = f\"y un alto de {self.alto}\"\n        return p1 + p2\n\nrect = Rectangulo(10, 20)\nprint(rect.mensaje())\n# Imprime: El rectangulo tiene un ancho de 10 y un alto de 20"
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
      text: "Crear una clase llamada CuentaBancaria que permita a los usuarios realizar operaciones bancarias básicas como depositar, retirar y consultar el saldo.",
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
          content: "# Ejercicio 2: Crear una clase de Cuenta Bancaria\n# Objetivo: Implementar una clase CuentaBancaria que permita\n# a los usuarios realizar operaciones bancarias básicas como\n# depositar, retirar y consultar el saldo.\n\nclass CuentaBancaria:\n    def __init__(self, saldo_inicial):\n        self.saldo = saldo_inicial\n\n    def depositar(self, cantidad: int | None = 0) -> int:\n        \"\"\"\n        Metodo que permite a los usuarios depositar dinero.\n        Si no se ingresa cantidad, se usará 0.\n        \"\"\"\n        self.saldo += cantidad\n        return self.saldo\n\n    def retirar(self, cantidad: int | None = 0) -> int:\n        \"\"\"\n        Metodo que permite a los usuarios retirar dinero.\n        Si no se ingresa cantidad, se usará 0.\n        \"\"\"\n        self.saldo -= cantidad\n        return self.saldo\n\n    def saldo_actual(self) -> int:\n        \"\"\"\n        Metodo que devuelve el saldo actual de la cuenta.\n        \"\"\"\n        return self.saldo\n\n    def mensaje(self):\n        \"\"\"\n        Metodo que devuelve un mensaje con información sobre la cuenta.\n        \"\"\"\n        return f\"El saldo actual de la cuenta es {self.saldo_actual()}\"\n\ncuenta = CuentaBancaria(1000)\nprint(cuenta.mensaje())\n# Imprime: El saldo actual de la cuenta es 1000\n\nprint(f\"Se realizo un deposito a la cuenta de {cuenta.depositar(500)}\")\nprint(cuenta.mensaje())\n# Imprime: El saldo actual de la cuenta es 1500\n\nprint(f\"Se realizo un retiro a la cuenta de {cuenta.retirar(200)}\")\nprint(cuenta.mensaje())\n# Imprime: El saldo actual de la cuenta es 1300"
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
      text: "Crear una clase llamada Producto que tenga tres atributos: nombre, precio y cantidad. Y tenga 3 metodos, Actualizar Precio, Actualizar Cantidad y Calcular valor total, el primero modificara el precio del producto, el segundo la cantidad y el ultimo debera multiplicar la cantidad por el precio del producto seleccionado para saber el valor total del inventario. Y agregar un metodo más para comprar alguno.",
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
          content: "# Ejercicio 3: Crear una Clase de Producto\n# Objetivo: Crear una clase llamada Producto que tenga tres\n# atributos: nombre, precio y cantidad. Y tenga 3 metodos:\n# Actualizar Precio, Actualizar Cantidad y Calcular valor total.\n\nclass Producto:\n    def __init__(self, nombre: str, precio: float, cantidad: int):\n        self.nombre = nombre\n        self.precio = precio\n        self.cantidad = cantidad\n\n    def actualizar_precio(self, precio: float):\n        \"\"\"\n        Metodo que actualiza el precio del producto.\n        \"\"\"\n        self.precio = precio\n\n    def actualizar_cantidad(self, cantidad: int):\n        \"\"\"\n        Metodo que actualiza la cantidad del producto.\n        \"\"\"\n        self.cantidad = cantidad\n\n    def calcular_valor_total(self):\n        \"\"\"\n        Metodo que calcula el valor total del producto.\n        \"\"\"\n        return self.cantidad * self.precio\n\nproducto = Producto(\"Juego de ajedrez\", 12, 3)\np1 = f\"Se agregó al carrito {producto.cantidad} {producto.nombre}, \"\np2 = f\"que tiene un precio de ${producto.precio}, el costo total \"\np3 = f\"es de ${producto.calcular_valor_total()}\"\nprint(p1 + p2 + p3)\n# Imprime: Se agregó al carrito 3 Juego de ajedrez, que tiene un\n# precio de $12, el costo total es de $36"
        }
      }
    ]
  }
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "Ejercicio 4:",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "Crear una clase llamada Contador que tenga un atributo cuenta que empieza en 0. Y que posea 4 metodos, Incrementar(sumará 1), Decrementar(restará 1, no admite negativos osea hasta maximo 0), Mostrar Contador(deberá devolver el valor actual de contador) y Reiniciar(volverá a cero el contador)",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "answer",
  info: {
    title: "Solución Ejercicio 4",
    content: [
      {
        type: "code",
        info: {
          language: "python",
          content: "# Ejercicio 4: Crear una Clase de Contador\n# Objetivo: Crear una clase llamada Contador que tenga un\n# atributo cuenta que empieza en 0. Y que posea 4 metodos:\n# Incrementar, Decrementar, Mostrar y Reiniciar.\n\nclass Contador:\n    def __init__(self):\n        self.cuenta = 0\n\n    def incrementar(self, cantidad: int = 1):\n        \"\"\"\n        Metodo que incrementa la cuenta del contador.\n        Si no se ingresa cantidad, se usará 1.\n        \"\"\"\n        self.cuenta += cantidad\n\n    def decrementar(self, cantidad: int = 1):\n        \"\"\"\n        Metodo que decrementa la cuenta del contador.\n        Si no se ingresa cantidad, se usará 1.\n        Evita valores negativos.\n        \"\"\"\n        self.cuenta -= cantidad\n        if self.cuenta < 0:\n            self.cuenta = 0\n\n    def reiniciar(self):\n        \"\"\"\n        Metodo que reinicia el contador a cero.\n        \"\"\"\n        self.cuenta = 0\n\n    def mostrar(self):\n        \"\"\"\n        Metodo que devuelve el valor actual.\n        \"\"\"\n        return self.cuenta\n\n    def mensaje(self):\n        \"\"\"\n        Metodo que devuelve un mensaje informativo.\n        \"\"\"\n        return f\"El contador actual es {self.mostrar()}\"\n\ncontador = Contador()\ncontador.incrementar()\ncontador.incrementar()\ncontador.incrementar(4)\nprint(contador.mensaje())\n# Imprime: El contador actual es 6\n\ncontador.decrementar(3)\nprint(contador.mensaje())\n# Imprime: El contador actual es 3\n\ncontador.reiniciar()\nprint(contador.mensaje())\n# Imprime: El contador actual es 0"
        }
      }
    ]
  }
};

