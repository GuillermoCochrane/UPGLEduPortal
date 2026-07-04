export const item1 = {
  type: "h3",
  info: [
    {
      text: "Ejemplos Prácticos",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Creando una Clase de Vehículo",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "code",
  info: {
    language: "python",
    content: "class Vehiculo:\n    def __init__(self, marca, modelo, color):\n        self.marca = marca\n        self.modelo = modelo\n        self.color = color\n\n    def arrancar(self):\n        print(f\"El vehículo {self.marca} {self.modelo} está arrancando.\")\n\n    def acelerar(self):\n        print(f\"El vehículo {self.marca} {self.modelo} está acelerando.\")\n\n    def frenar(self):\n        print(f\"El vehículo {self.marca} {self.modelo} está frenando.\")\n\nmiAuto = Vehiculo(\"Toyota\", \"Corolla\", \"Azul\")\nmiMoto = Vehiculo(\"Honda\", \"CBX\", \"Negra\")\n\n# Accionando los métodos de los objetos:\nmiAuto.arrancar()\n# Imprime: El vehículo Toyota Corolla está arrancando.\n\nmiMoto.acelerar()\n# Imprime: El vehículo Honda CBX está acelerando.\n\nmiAuto.frenar()\n# Imprime: El vehículo Toyota Corolla Azul está frenando."
  }
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Creando una Clase de Persona",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "code",
  info: {
    language: "python",
    content: "class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\n    def saludar(self):\n        print(f\"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.\")\n\njuan = Persona(\"Juan\", 30)\njuan.saludar()\n# Imprime: Hola, mi nombre es Juan y tengo 30 años."
  }
};

