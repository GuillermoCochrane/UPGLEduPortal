export const item1 = {
  type: "h3",
  info: [
    {
      text: "🔧 Atributos importantes para inputs",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Los inputs en HTML pueden personalizarse con atributos clave que mejoran su funcionalidad, validación y experiencia de usuario.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Required",
      content: "bold"
    },
    {
      text: " Campo obligatorio",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "p",
  info: [
    {
      text: "Hace que el campo sea obligatorio. El navegador mostrará un error si está vacío al enviar el formulario.",
      content: "plain"
    }
  ]
};

export const item5 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "required:",
        content: "bold"
      },
      {
        text: " Campo obligatorio",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Campo obligatorio",
    attributes: {
      required: true
    },
    code: {
      content: "<input type=\"text\" required>"
    }
  }
};

export const item6 = {
  type: "p",
  info: [
    {
      text: "Intenta enviar sin llenar este campo",
      content: "plain"
    }
  ]
};

export const item7 = {
  type: "h4",
  info: [
    {
      text: "Placeholder",
      content: "bold"
    },
    {
      text: " Texto de ayuda",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "p",
  info: [
    {
      text: "Muestra un texto de ayuda dentro del campo que desaparece cuando el usuario empieza a escribir.",
      content: "plain"
    }
  ]
};

export const item9 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "placeholder:",
        content: "bold"
      },
      {
        text: " Texto de ayuda",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Escribe aquí...",
    attributes: {
      placeholder: "Escribe aquí..."
    },
    code: {
      content: "<input type=\"text\" placeholder=\"Escribe aquí...\">"
    }
  }
};

export const item10 = {
  type: "h4",
  info: [
    {
      text: "Min/Max",
      content: "bold"
    },
    {
      text: " Valor límite",
      content: "plain"
    }
  ]
};

export const item11 = {
  type: "p",
  info: [
    {
      text: "Define valores mínimo y máximo para campos numéricos y de fecha. El navegador validará automáticamente.",
      content: "plain"
    }
  ]
};

export const item12 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "min/max:",
        content: "bold"
      },
      {
        text: " Valor límite",
        content: "plain"
      }
    ],
    type: "number",
    placeholder: "Valor límite",
    attributes: {
      min: 0,
      max: 100
    },
    code: {
      content: "<input type=\"number\" min=\"0\" max=\"100\">"
    }
  }
};

export const item13 = {
  type: "p",
  info: [
    {
      text: "Intenta ingresar un número fuera del rango",
      content: "plain"
    }
  ]
};

export const item14 = {
  type: "h4",
  info: [
    {
      text: "Step",
      content: "bold"
    },
    {
      text: " Incremento",
      content: "plain"
    }
  ]
};

export const item15 = {
  type: "p",
  info: [
    {
      text: "Especifica el incremento en campos numéricos y de rango. Útil para precios, porcentajes, etc.",
      content: "plain"
    }
  ]
};

export const item16 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "step:",
        content: "bold"
      },
      {
        text: " Incremento",
        content: "plain"
      }
    ],
    type: "number",
    placeholder: "Incremento",
    attributes: {
      step: 0.5
    },
    code: {
      content: "<input type=\"number\" step=\"0.5\">"
    }
  }
};

export const item17 = {
  type: "p",
  info: [
    {
      text: "Usa las flechas del campo para ver el incremento",
      content: "plain"
    }
  ]
};

export const item18 = {
  type: "h4",
  info: [
    {
      text: "Pattern",
      content: "bold"
    },
    {
      text: " Validación personalizada",
      content: "plain"
    }
  ]
};

export const item19 = {
  type: "p",
  info: [
    {
      text: "Define un patrón de validación usando expresiones regulares para formatos específicos.",
      content: "plain"
    }
  ]
};

export const item20 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "pattern:",
        content: "bold"
      },
      {
        text: " Validación personalizada",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Formato personalizado",
    attributes: {
      pattern: "[0-9]{5}"
    },
    code: {
      content: "<input type=\"text\" pattern=\"[0-9]{5}\">"
    }
  }
};

export const item21 = {
  type: "p",
  info: [
    {
      text: "Solo acepta exactamente 5 números",
      content: "plain"
    }
  ]
};

export const item22 = {
  type: "h4",
  info: [
    {
      text: "Disabled",
      content: "bold"
    },
    {
      text: " Campo desactivado",
      content: "plain"
    }
  ]
};

export const item23 = {
  type: "p",
  info: [
    {
      text: "Desactiva el campo, impidiendo la interacción del usuario. El valor no se envía en el formulario.",
      content: "plain"
    }
  ]
};

export const item24 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "disabled:",
        content: "bold"
      },
      {
        text: " Campo desactivado",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Campo desactivado",
    attributes: {
      disabled: true
    },
    code: {
      content: "<input type=\"text\" disabled>"
    }
  }
};

export const item25 = {
  type: "p",
  info: [
    {
      text: "Este campo no es interactivo",
      content: "plain"
    }
  ]
};

export const item26 = {
  type: "h4",
  info: [
    {
      text: "Readonly",
      content: "bold"
    },
    {
      text: " Solo lectura",
      content: "plain"
    }
  ]
};

export const item27 = {
  type: "p",
  info: [
    {
      text: "Hace el campo de solo lectura, visible pero no editable. A diferencia de disabled, el valor sí se envía.",
      content: "plain"
    }
  ]
};

export const item28 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "readonly:",
        content: "bold"
      },
      {
        text: " Solo lectura",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Solo lectura",
    attributes: {
      readonly: true
    },
    code: {
      content: "<input type=\"text\" readonly>"
    }
  }
};

export const item29 = {
  type: "p",
  info: [
    {
      text: "Puedes seleccionar el texto pero no editarlo",
      content: "plain"
    }
  ]
};

export const item30 = {
  type: "h4",
  info: [
    {
      text: "Multiple",
      content: "bold"
    },
    {
      text: " Selección múltiple",
      content: "plain"
    }
  ]
};

export const item31 = {
  type: "p",
  info: [
    {
      text: "Permite seleccionar múltiples valores en campos de archivo o listas.",
      content: "plain"
    }
  ]
};

export const item32 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "multiple:",
        content: "bold"
      },
      {
        text: " Selección múltiple",
        content: "plain"
      }
    ],
    type: "file",
    attributes: {
      multiple: true
    },
    code: {
      content: "<input type=\"file\" multiple>"
    }
  }
};

export const item33 = {
  type: "p",
  info: [
    {
      text: "Puedes seleccionar varios archivos a la vez",
      content: "plain"
    }
  ]
};

export const item34 = {
  type: "h4",
  info: [
    {
      text: "Accept",
      content: "bold"
    },
    {
      text: " Tipos de archivo permitidos",
      content: "plain"
    }
  ]
};

export const item35 = {
  type: "p",
  info: [
    {
      text: "Especifica qué tipos de archivo son permitidos en inputs de tipo file.",
      content: "plain"
    }
  ]
};

export const item36 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "accept:",
        content: "bold"
      },
      {
        text: " Tipos de archivo permitidos",
        content: "plain"
      }
    ],
    type: "file",
    attributes: {
      accept: ".pdf"
    },
    code: {
      content: "<input type=\"file\" accept=\".pdf\">"
    }
  }
};

export const item37 = {
  type: "p",
  info: [
    {
      text: "Solo documentos PDF",
      content: "plain"
    }
  ]
};

export const item38 = {
  type: "h4",
  info: [
    {
      text: "Autocomplete",
      content: "bold"
    },
    {
      text: " Control de autocompletado",
      content: "plain"
    }
  ]
};

export const item39 = {
  type: "p",
  info: [
    {
      text: "Controla si el navegador puede autocompletar el campo con datos guardados previamente.",
      content: "plain"
    }
  ]
};

export const item40 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "autocomplete:",
        content: "bold"
      },
      {
        text: " Control de autocompletado",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Control de autocompletado",
    attributes: {
      autocomplete: "off"
    },
    code: {
      content: "<input type=\"text\" autocomplete=\"off\">"
    }
  }
};

export const item41 = {
  type: "p",
  info: [
    {
      text: "El navegador no sugerirá valores",
      content: "plain"
    }
  ]
};

export const item42 = {
  type: "h4",
  info: [
    {
      text: "Value",
      content: "bold"
    },
    {
      text: " Valor predeterminado",
      content: "plain"
    }
  ]
};

export const item43 = {
  type: "p",
  info: [
    {
      text: "Establece un valor inicial que aparece cuando se carga la página.",
      content: "plain"
    }
  ]
};

export const item44 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "value:",
        content: "bold"
      },
      {
        text: " Valor predeterminado",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Valor predeterminado",
    attributes: {
      value: "Valor predeterminado"
    },
    code: {
      content: "<input type=\"text\" value=\"Valor predeterminado\">"
    }
  }
};

export const item45 = {
  type: "p",
  info: [
    {
      text: "Valor predefinido que el usuario puede cambiar",
      content: "plain"
    }
  ]
};

export const item46 = {
  type: "h4",
  info: [
    {
      text: "Maxlength",
      content: "bold"
    },
    {
      text: " Límite de caracteres",
      content: "plain"
    }
  ]
};

export const item47 = {
  type: "p",
  info: [
    {
      text: "Limita el número máximo de caracteres que se pueden escribir en el campo.",
      content: "plain"
    }
  ]
};

export const item48 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "maxlength:",
        content: "bold"
      },
      {
        text: " Límite de caracteres",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Límite de caracteres",
    attributes: {
      maxlength: 50
    },
    code: {
      content: "<input type=\"text\" maxlength=\"50\">"
    }
  }
};

export const item49 = {
  type: "p",
  info: [
    {
      text: "No podrás escribir más de 50 caracteres",
      content: "plain"
    }
  ]
};

export const item50 = {
  type: "h4",
  info: [
    {
      text: "Size",
      content: "bold"
    },
    {
      text: " Ancho visual",
      content: "plain"
    }
  ]
};

export const item51 = {
  type: "p",
  info: [
    {
      text: "Define el ancho visual del campo en número de caracteres.",
      content: "plain"
    }
  ]
};

export const item52 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "size:",
        content: "bold"
      },
      {
        text: " Ancho visual",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Ancho visual",
    attributes: {
      size: 40
    },
    code: {
      content: "<input type=\"text\" size=\"40\">"
    }
  }
};

export const item53 = {
  type: "p",
  info: [
    {
      text: "Este campo tiene 40 caracteres",
      content: "plain"
    }
  ]
};

export const item54 = {
  type: "h4",
  info: [
    {
      text: "Autofocus",
      content: "bold"
    },
    {
      text: " Foco automático",
      content: "plain"
    }
  ]
};

export const item55 = {
  type: "p",
  info: [
    {
      text: "Hace que el campo reciba el foco automáticamente cuando se carga la página.",
      content: "plain"
    }
  ]
};

export const item56 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "autofocus:",
        content: "bold"
      },
      {
        text: " Foco automático",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Foco automático",
    attributes: {
      autofocus: true
    },
    code: {
      content: "<input type=\"text\" autofocus>"
    }
  }
};

export const item57 = {
  type: "p",
  info: [
    {
      text: "Solo un elemento por página debe tener autofocus",
      content: "plain"
    }
  ]
};

export const item58 = {
  type: "h4",
  info: [
    {
      text: "Form",
      content: "bold"
    },
    {
      text: " Asociar con formulario",
      content: "plain"
    }
  ]
};

export const item59 = {
  type: "p",
  info: [
    {
      text: "Permite asociar un input con un formulario específico aunque no esté dentro de él.",
      content: "plain"
    }
  ]
};

export const item60 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "form:",
        content: "bold"
      },
      {
        text: " Asociar con formulario",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Asociar con formulario",
    attributes: {
      form: "miFormulario"
    },
    code: {
      content: "<input type=\"text\" form=\"miFormulario\">"
    }
  }
};

export const item61 = {
  type: "p",
  info: [
    {
      text: "Este input está fuera del form pero se enviará con él",
      content: "plain"
    }
  ]
};

export const item62 = {
  type: "h4",
  info: [
    {
      text: "List",
      content: "bold"
    },
    {
      text: " Lista de sugerencias",
      content: "plain"
    }
  ]
};

export const item63 = {
  type: "p",
  info: [
    {
      text: "Conecta el input con un datalist para mostrar opciones sugeridas.",
      content: "plain"
    }
  ]
};

export const item64 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "list:",
        content: "bold"
      },
      {
        text: " Lista de sugerencias",
        content: "plain"
      }
    ],
    type: "text",
    placeholder: "Lista de sugerencias",
    attributes: {
      list: "navegadores"
    },
    code: {
      content: "<input type=\"text\" list=\"navegadores\">"
    }
  }
};

export const item65 = {
  type: "p",
  info: [
    {
      text: "Empieza a escribir para ver las sugerencias",
      content: "plain"
    }
  ]
};

export const item66 = {
  type: "h4",
  info: [
    {
      text: "Formnovalidate",
      content: "bold"
    },
    {
      text: " Omitir validación",
      content: "plain"
    }
  ]
};

export const item67 = {
  type: "p",
  info: [
    {
      text: "En botones de envío, permite enviar el formulario sin validar los campos.",
      content: "plain"
    }
  ]
};

export const item68 = {
  type: "inputCard",
  info: {
    label: [
      {
        text: "formnovalidate:",
        content: "bold"
      },
      {
        text: " Omitir validación",
        content: "plain"
      }
    ],
    type: "submit",
    attributes: {
      formnovalidate: true
    },
    code: {
      content: "<input type=\"submit\" formnovalidate> "
    }
  }
};

export const item69 = {
  type: "p",
  info: [
    {
      text: "En el ejemplo original había dos botones: uno con validación y otro sin validación. Aquí mostramos solo el botón sin validación para simplificar.",
      content: "plain"
    }
  ]
};

