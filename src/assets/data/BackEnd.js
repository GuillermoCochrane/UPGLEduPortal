/* eslint-disable no-useless-escape */
const classes = [
  {
    class: 1,
    topics: 7,
    title: {
      type: "h2",
      info: [
        {
          text: "Introducción y Repaso",
          content: "plain",
        },
      ],
    },
    classData: [
      {
        topic: 1,
        topicData: [
          {
            type: "h3",
            info: [
              { text: "✨ Presentación y horarios ✨", content: "plain" },
            ],
          },
          {
            type: "figure",
            info: {
              img: "/images/Backend/class1/presentacion.webp",
              alt: "✨ Presentación y horarios ✨",
            },
          },
          {
            type: "h3",
            info: [
              { text: "🤔 ¿Qué es vimos el año pasado? 🤔", content: "plain" },
            ],
          },
          {
            type: "figure",
            info: {
              img: "/images/Backend/class1/repaso.webp",
              alt: "✨ Presentación y horarios ✨",
            },
          },
        ],
      },
      {
        topic: 2,
        topicData: [
          {
            type: "h3",
            info: [
              { text: " 💻 Programa del curso 💻", content: "plain" },
            ],
          },
          {
            type: "figure",
            info: {
              img: "/images/Backend/class1/programa.webp",
              alt: "Programa del curso",
            },
          },
          {
            type: "h3",
            info: [
              { text: "🔎 Detalles 🔎", content: "plain" },
            ],
          },
          {
            type: "figure",
            info: {
              img: "/images/Backend/class1/programa_explicado.webp",
              alt: "Descubre el programa 🔎",
            },
          },
          {
            type: "h3",
            info: [
              { text: "💡 Proyectos que vamos a desarrollar 💡", content: "plain" },
            ],
          },
          {
            type: "figure",
            info: {
              img: "/images/Backend/class1/programa_proyectos.webp",
              alt: "Proyectos 💡",
            },
          },
        ],
      },
    ],
  },
];

export default classes;