export const item1 = {
  type: "h3",
  info: [
    {
      text: "🌐 ¿Cómo se usa Bootstrap?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "🌎 Incluir por CDN (rápido)",
      content: "bold"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "La forma más rápida: ",
      content: "bold"
    },
    {
      text: "enlazar los archivos oficiales de Bootstrap. Ideal para demos o proyectos donde no necesitás control estricto de versiones.",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "code",
  info: {
    language: "html",
    content: "<!-- en <head> -->\n<link\n  href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css\"\n  rel=\"stylesheet\"\n  crossorigin=\"anonymous\"\n >\n\n<!-- antes de </body> -->\n<script\n  src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js\"\n  crossorigin=\"anonymous\"\n  >\n</script>"
  }
};

export const item5 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "✅ Pros: ",
          content: "bold"
        },
        {
          text: "Muy rápido, aprovecha la caché CDN y no necesitas añadir archivos al repositorio.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "❌ Contras: ",
          content: "bold"
        },
        {
          text: "Dependencia de un servicio externo y posible bloqueo en entornos restringidos.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item6 = {
  type: "h4",
  info: [
    {
      text: "💾 Usar local (control total)",
      content: "bold"
    }
  ]
};

export const item7 = {
  type: "p",
  info: [
    {
      text: "Descargá los archivos y servilos desde tu proyecto. Recomendado en entornos offline o cuando querés fijar versiones exactas.",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "code",
  info: {
    language: "html",
    content: "<!-- en <head> -->\n<link\n  href=\"/assets/bootstrap/css/bootstrap.min.css\"\n  rel=\"stylesheet\"\n  >\n\n<!-- antes de </body> -->\n<script\n  src=\"/assets/bootstrap/js/bootstrap.bundle.min.js\"\n  >\n</script>"
  }
};

export const item9 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Colocá CSS en ",
          content: "plain"
        },
        {
          text: "/assets/bootstrap/css/",
          content: "bold"
        },
        {
          text: " y JS en ",
          content: "plain"
        },
        {
          text: "/assets/bootstrap/js/",
          content: "bold"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Fijá la versión en el nombre o usá un gestor para reproducibilidad.",
          content: "plain"
        }
      ]
    }
  ]
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "⌨️ Instalar via NPM / gestor",
      content: "bold"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Para proyectos con pipeline ",
      content: "plain"
    },
    {
      text: "(webpack, Vite, etc.) ",
      content: "bold"
    },
    {
      text: "conviene instalar via npm/yarn y gestionar versiones desde package.json.",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "code",
  info: {
    language: "html",
    content: "// ejemplo con npm\nnpm install bootstrap\n\n// luego importar en tus assets (JS o SCSS)\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport 'bootstrap/dist/js/bootstrap.bundle.min';"
  }
};

