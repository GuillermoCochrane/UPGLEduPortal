export const item1 = {
  type: "h3",
  info: [
    {
      text: "📝 Formularios en Bootstrap",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "h4",
  info: [
    {
      text: "📋 Formularios: ",
      content: "plain"
    },
    {
      text: " default, form-control, form-select, form-check, form-range",
      content: "bold"
    }
  ]
};

export const item3 = {
  type: "p",
  info: [
    {
      text: "Demo: ",
      content: "bold"
    },
    {
      text: "— Formularios con Bootstrap 5",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "example",
  hasBT: true,
  title: "📋 Formularios: ",
  height: "640px",
  width: "900px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<form class=\"row g-3 needs-validation m-3\" novalidate=\"\" style=\"width: 95%\">\n  <div class=\"col-md-6\">\n    <label for=\"demoNombre\" class=\"form-label\">Nombre completo</label>\n    <input type=\"text\" class=\"form-control\" id=\"demoNombre\" placeholder=\"Ej: Ana Pérez\" required=\"\">\n    <div class=\"invalid-feedback\">Por favor ingresa tu nombre.</div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <label for=\"demoEmail\" class=\"form-label\">Correo electrónico</label>\n    <input type=\"email\" class=\"form-control\" id=\"demoEmail\" placeholder=\"ejemplo@correo.com\" required=\"\">\n    <div class=\"invalid-feedback\">Introduce un correo válido.</div>\n  </div>\n\n  <div class=\"col-12\">\n    <label for=\"demoSelect\" class=\"form-label\">Seleccionar tema</label>\n    <select class=\"form-select\" id=\"demoSelect\" required=\"\">\n      <option value=\"\">Elige...</option>\n      <option>Frontend</option>\n      <option>Backend</option>\n      <option>Diseño</option>\n    </select>\n    <div class=\"invalid-feedback\">Selecciona una opción.</div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <label for=\"demoPhone\" class=\"form-label\">Teléfono (opcional)</label>\n    <div class=\"input-group\">\n      <span class=\"input-group-text\">+54</span>\n      <input type=\"tel\" class=\"form-control\" id=\"demoPhone\" placeholder=\"11 1234 5678\">\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <label for=\"demoFile\" class=\"form-label\">Adjuntar CV</label>\n    <input class=\"form-control\" type=\"file\" id=\"demoFile\">\n  </div>\n\n  <div class=\"col-12\">\n    <label for=\"demoMessage\" class=\"form-label\">Mensaje</label>\n    <textarea class=\"form-control\" id=\"demoMessage\" rows=\"3\" placeholder=\"Escribe tu consulta...\"></textarea>\n  </div>\n\n  <div class=\"col-12\">\n    <div class=\"form-check form-switch\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"newsletter\">\n      <label class=\"form-check-label\" for=\"newsletter\">Quiero recibir el newsletter</label>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"form-floating\">\n      <input type=\"text\" class=\"form-control\" id=\"floatingCity\" placeholder=\"Ciudad\">\n      <label for=\"floatingCity\">Ciudad (floating label)</label>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <label for=\"demoRange\" class=\"form-label\">Experiencia (años)</label>\n    <input type=\"range\" class=\"form-range\" min=\"0\" max=\"20\" id=\"demoRange\">\n  </div>\n\n  <div class=\"col-md-4 d-flex align-items-end\">\n    <button class=\"btn btn-primary w-100\" type=\"submit\">Enviar formulario</button>\n  </div>\n\n  <div class=\"col-12\">\n    <small class=\"text-muted\">Ejemplo: los campos marcados requieren validación del navegador y Bootstrap mostrará feedback.</small>\n  </div>\n</form>"
      }
    },
    {
      type: "code",
      info: {
        language: "javascript",
        content: "document.addEventListener('DOMContentLoaded', function () {\n  'use strict'\n  var forms = document.querySelectorAll('.needs-validation')\n  Array.prototype.slice.call(forms).forEach(function (form) {\n    form.addEventListener('submit', function (event) {\n      if (!form.checkValidity()) {\n        event.preventDefault()\n        event.stopPropagation()\n      }\n      form.classList.add('was-validated')\n    }, false)\n  })\n})"
      }
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "⚠️ Para tener en cuenta: ",
      content: "bold"
    }
  ]
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Para que las validaciones de Bootstrap funcionen, ademas incluir el script del CDN, es necesario incluir el script extra del ejemplo de arriba.",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "🏷️ Ejemplo inline y estados deshabilitados",
      content: "bold"
    }
  ]
};

export const item8 = {
  type: "example",
  hasBT: true,
  title: "🏷️ Ejemplo inline y estados deshabilitados",
  height: "350px",
  info: [
    {
      type: "code",
      info: {
        language: "html",
        content: "<form class=\"row g-3 needs-validation m-3\" novalidate=\"\" style=\"width: 95%\">\n  <div class=\"col-12\">\n<label  class=\"form-label\"><strong>Labels Inline</strong> (dentro del input)</label>\n        <label class=\"visually-hidden\" for=\"inlineName\">Nombre</label>\n    <input type=\"text\" class=\"form-control\" id=\"inlineName\" placeholder=\"Nombre\" required=\"\">\n  </div>\n\n  <div class=\"col-12\">\n    <label class=\"visually-hidden\" for=\"inlineEmail\">Correo</label>\n    <input type=\"email\" class=\"form-control\" id=\"inlineEmail\" placeholder=\"correo@ejemplo.com\" required=\"\">\n  </div>\n\n  <div class=\"col-12\">\n    <button type=\"submit\" class=\"btn btn-secondary\">Enviar</button>\n  </div>\n </form>\n\n <div class=\"m-3\" >\n    <label for=\"disabledInput\" class=\"form-label\">Campo deshabilitado</label>\n    <input type=\"text\" id=\"disabledInput\" class=\"form-control\" placeholder=\"No editable\" disabled=\"\">\n    <div class=\"form-text\">Los campos con <code>disabled</code> no se envían en el submit.</div>\n  </div>"
      }
    },
    {
      type: "code",
      info: {
        language: "javascript",
        content: "document.addEventListener('DOMContentLoaded', function () {\n  'use strict'\n  var forms = document.querySelectorAll('.needs-validation')\n  Array.prototype.slice.call(forms).forEach(function (form) {\n    form.addEventListener('submit', function (event) {\n      if (!form.checkValidity()) {\n        event.preventDefault()\n        event.stopPropagation()\n      }\n      form.classList.add('was-validated')\n    }, false)\n  })\n})"
      }
    }
  ]
};

