export const item1 = {
  type: "h3",
  info: [
    {
      text: "Frontend vs Backend",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "El desarrollo web se divide en dos áreas principales que trabajan juntas para crear una aplicación web funcional:",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Frontend: ",
      content: "bold"
    },
    {
      text: "(Lado del Cliente)",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Es todo lo que el usuario ve e interactúa directamente en el navegador.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "p",
  info: [
    {
      text: "Tecnologías clave:",
      content: "bold"
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
          text: "HTML: ",
          content: "bold"
        },
        {
          text: "Estructura el contenido.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "CSS: ",
          content: "bold"
        },
        {
          text: "Da estilo y diseño visual.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "JavaScript: ",
          content: "bold"
        },
        {
          text: "Añade interactividad y dinamismo.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    },
    {
      text: "Un botón en el que haces clic, un formulario que rellenas, la animación de un menú.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "example",
  height: 50,
  width: 100,
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<!-- Ejemplo HTML -->\n<button class=\"btn-primary\">Haz Clic</button>",
        title: "Estructura HTML"
      }
    },
    {
      type: "code",
      info: {
        language: "css",
        content: "/* Ejemplo CSS */\n.btn-primary {\n    background-color: blue;\n    color: white;\n    padding: 10px;\n    margin: auto;\n    display: block;\n    cursor:pointer;\n    margin-top: 5px;\n}",
        title: "Estilos CSS"
      }
    }
  ]
};

export const item9 = {
  type: "h4",
  info: [
    {
      text: "Backend (Lado del Servidor)",
      content: "plain"
    }
  ]
};

export const item10 = {
  type: "p",
  info: [
    {
      text: "Es la lógica \"detrás de cámaras\" que procesa datos, gestiona usuarios y se conecta a bases de datos.",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Tecnologías clave ",
      content: "bold"
    }
  ]
};

export const item12 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "PHP",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Python",
          content: "bold"
        },
        {
          text: "(Django, Flask)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Node.js",
          content: "bold"
        },
        {
          text: "(JavaScript)",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Bases de Datos",
          content: "bold"
        },
        {
          text: "(SQL, NoSQL)",
          content: "plain"
        }
      ]
    }
  ]
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Ejemplo: ",
      content: "bold"
    },
    {
      text: "Cuando te registras en un sitio, el backend guarda tu información en la base de datos. Cuando inicias sesión, verifica tus credenciales.",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "code",
  info: {
    language: "php",
    content: "<?php\n// Ejemplo (conceptual) Backend con PHP\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {\n    $username = $_POST['username'] ?? '';\n    $password = $_POST['password'] ?? '';\n\n    // ... Lógica para validar y guardar en la base de datos ...\n    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);\n    // Guardar $username y $hashedPassword en la BD\n    echo \"Usuario registrado exitosamente.\";\n    // header('Location: login.php'); // Redirigir después del registro\n    exit;\n}\n?>"
  }
};

export const item15 = {
  type: "h4",
  info: [
    {
      text: "Tecnologías que aprenderás en este curso",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "p",
  info: [
    {
      text: "Este programa te permitirá dominar las tecnologías esenciales para convertirte en desarrollador Full Stack: ",
      content: "plain"
    }
  ]
};

export const item17 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "HTML 5: ",
          content: "bold"
        },
        {
          text: "Estructura y organización de contenidos web mediante etiquetas semánticas.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "CSS 3: ",
          content: "bold"
        },
        {
          text: "Diseño visual, maquetación y estilos para crear interfaces atractivas y responsivas.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "JavaScript: ",
          content: "bold"
        },
        {
          text: "Interactividad en el cliente, manipulación del DOM y funcionalidades dinámicas.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "PHP: ",
          content: "bold"
        },
        {
          text: "Programación del lado del servidor para gestionar datos y lógica de negocio.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "MySQL: ",
          content: "bold"
        },
        {
          text: "Base de datos relacional para almacenar y consultar información de manera estructurada.",
          content: "plain"
        }
      ]
    }
  ]
};

