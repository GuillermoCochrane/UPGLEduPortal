export const item1 = {
  type: "h3",
  info: [
    {
      text: "Caracteristicas Principales de POO",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "Encapsulación",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "La encapsulación es el mecanismo para ocultar la implementación interna de una clase y solo exponer los métodos y atributos necesarios para su uso. Promueve la modularidad y protege los datos internos de modificaciones accidentales.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "h4",
  info: [
    {
      text: "Niveles de Acceso",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Python no tiene modificadores de acceso estrictos como público, privado y protegido. Se pueden simular utilizando convenciones:",
      content: "plain"
    }
  ]
};

export const item6 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Público: ",
          content: "bold"
        },
        {
          text: "Atributos y métodos sin guiones bajos iniciales.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Privado: ",
          content: "bold"
        },
        {
          text: "Atributos y métodos con un guion bajo inicial (",
          content: "plain"
        },
        {
          text: "_",
          content: "bold"
        },
        {
          text: ").",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Protegido: ",
          content: "bold"
        },
        {
          text: "Atributos y métodos con dos guiones bajos iniciales (",
          content: "plain"
        },
        {
          text: "__",
          content: "bold"
        },
        {
          text: ").",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Herencia",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "La herencia permite crear clases que heredan atributos y métodos de otras clases existentes (clases base). Promueve la reutilización de código y la organización jerárquica de clases.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Clases Base y Subclases",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Una clase que hereda de otra se denomina subclase. La subclase hereda todos los atributos y métodos públicos de la clase base. Se puede extender o modificar la funcionalidad heredada en la subclase.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "h4",
  info: [
    {
      text: "Polimorfismo",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "p",
  info: [
    {
      text: "El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje de manera diferente. Se basa en la sobreescritura de métodos en clases derivadas.",
      content: "plain"
    }
  ]
};

export const item13 = {
  type: "h4",
  info: [
    {
      text: "Métodos Sobreescritos",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "p",
  info: [
    {
      text: "Cuando una subclase define un método con el mismo nombre que un método heredado de la clase base, se produce una sobreescritura. La subclase proporciona su propia implementación del método, redefiniendo el comportamiento heredado.",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "Abstracción",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "La abstracción se centra en las características esenciales de un objeto o proceso, ignorando detalles de implementación. Permite crear clases que definen interfaces sin proporcionar implementaciones completas.",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "h4",
  info: [
    {
      text: "Clases Abstractas",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "p",
  info: [
    {
      text: "Python no posee clases abstractas como tal, pero se puede simular su comportamiento mediante clases base que definen métodos sin implementar (usando ",
      content: "plain"
    },
    {
      text: "pass",
      content: "bold"
    },
    {
      text: "). Las subclases deben implementar estos métodos para proporcionar funcionalidad completa.",
      content: "plain"
    }
  ]
};

