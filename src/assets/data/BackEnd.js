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
    ],
  },
];

export default classes;