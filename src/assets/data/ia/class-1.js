import { topic1 } from "./class-1/topic-1.js";
import { topic2 } from "./class-1/topic-2.js";
import { topic3 } from "./class-1/topic-3.js";

export const class1 = {
  class: 1,
  summary: "Conceptos fundamentales de IA",
  available: true,
  topics: 3,
  title: {
    type: "h2",
    info: [
      {
        text: "Inteligencia Artificial, conceptos fundamentales",
        content: "plain"
      }
    ]
  },
  classData: [
    topic1,
    topic2,
    topic3
  ]
};
