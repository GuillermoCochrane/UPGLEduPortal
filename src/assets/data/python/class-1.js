import { topic1 } from "./class-1/topic-1.js";
import { topic2 } from "./class-1/topic-2.js";
import { topic3 } from "./class-1/topic-3.js";
import { topic4 } from "./class-1/topic-4.js";
import { topic5 } from "./class-1/topic-5.js";

export const class1 = {
  class: 1,
  topics: 5,
  title: {
    type: "h2",
    info: [
      {
        text: "Introducción a la programación",
        content: "plain"
      }
    ]
  },
  classData: [
    topic1,
    topic2,
    topic3,
    topic4,
    topic5
  ]
};
