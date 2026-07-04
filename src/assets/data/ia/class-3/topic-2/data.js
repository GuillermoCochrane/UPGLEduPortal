export const item1 = {
  type: "h3",
  info: [
    {
      text: "¿Qué son y cómo funcionan las Redes Neuronales?",
      content: "plain"
    }
  ]
};

export const item2 = {
  type: "p",
  info: [
    {
      text: "Las redes neuronales son un conjunto de algoritmos y modelos inspirados en la estructura y funcionamiento del cerebro humano. Están diseñadas para reconocer patrones y procesar información de manera similar a como lo hacen las neuronas en el cerebro. Se componen de capas de nodos interconectados, cada uno de los cuales realiza operaciones matemáticas en los datos de entrada y transfiere la información a través de la red.",
      content: "plain"
    }
  ]
};

export const item3 = {
  type: "h4",
  info: [
    {
      text: "Elementos clave de las redes neuronales:",
      content: "plain"
    }
  ]
};

export const item4 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Neuronas (nodos): ",
          content: "bold"
        },
        {
          text: "Son unidades básicas que reciben información, realizan cálculos y transmiten resultados a nodos posteriores. Cada neurona está asociada con una función de activación que determina su salida en función de la información que recibe.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Pesos y conexiones: ",
          content: "bold"
        },
        {
          text: "Las conexiones entre las neuronas tienen pesos asignados. Estos pesos representan la importancia o la fuerza de la conexión entre dos nodos y se ajustan durante el entrenamiento de la red para mejorar su capacidad predictiva.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "CAPAS: ",
          content: "bold"
        },
        {
          text: "Las redes neuronales se componen de múltiples capas: ",
          content: "plain"
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [
                {
                  text: "Capa de entrada: ",
                  content: "bold"
                },
                {
                  text: "Recibe datos de entrada.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Capas ocultas (intermedias): ",
                  content: "bold"
                },
                {
                  text: "Realizan cálculos complejos para procesar la información.",
                  content: "plain"
                }
              ]
            },
            {
              type: "li",
              info: [
                {
                  text: "Capa de salida: ",
                  content: "bold"
                },
                {
                  text: "Produce los resultados finales.",
                  content: "plain"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const item5 = {
  type: "h4",
  info: [
    {
      text: "El funcionamiento de una red neuronal se basa en la propagación hacia adelante (forward propagation) y la propagación hacia atrás (backpropagation):",
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
          text: "Propagación hacia Adelante: ",
          content: "bold"
        },
        {
          text: "Durante esta etapa, los datos de entrada se introducen en la red neuronal a través de la capa de entrada. Los datos se propagan a través de las capas ocultas, donde se realizan cálculos ponderados y se aplican funciones de activación para generar una salida.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Backpropagation: ",
          content: "bold"
        },
        {
          text: "Una vez que se genera la salida, se compara con la salida deseada para calcular el error de predicción. Este error se propaga hacia atrás a través de la red, ajustando los pesos de las conexiones para minimizar el error.",
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
      text: "El entrenamiento de una red neuronal implica los siguientes pasos:",
      content: "plain"
    }
  ]
};

export const item8 = {
  type: "ul",
  info: [
    {
      type: "li",
      info: [
        {
          text: "Inicialización de pesos: ",
          content: "bold"
        },
        {
          text: "Se asignan valores aleatorios a los pesos y sesgos de las conexiones entre las neuronas.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Propagación hacia adelante (Forward Propagation): ",
          content: "bold"
        },
        {
          text: "Los datos de entrada se pasan a través de la red neuronal, capa por capa, y se calculan las salidas de cada neurona utilizando una función de activación.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Cálculo de la función de pérdida (Loss Function): ",
          content: "bold"
        },
        {
          text: "Se compara la salida predicha de la red con las respuestas reales, calculando una medida de la discrepancia entre ellas (pérdida o error).",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Propagación hacia atrás (Backward Propagation): ",
          content: "bold"
        },
        {
          text: "Se utiliza un algoritmo llamado descenso de gradiente para calcular la derivada de la función de pérdida con respecto a cada peso y sesgo en la red. Estas derivadas indican cómo cambiar los pesos y sesgos para reducir la pérdida.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Actualización de pesos (Weight Update): ",
          content: "bold"
        },
        {
          text: "Se ajustan los pesos y sesgos en la dirección que reduce la pérdida utilizando un método de optimización, como el descenso de gradiente estocástico (SGD) o algoritmos más avanzados como Adam o RMSprop.",
          content: "plain"
        }
      ]
    },
    {
      type: "li",
      info: [
        {
          text: "Repetición del proceso: ",
          content: "bold"
        },
        {
          text: "Se repiten los pasos 2 a 5 para cada lote de datos de entrenamiento durante múltiples épocas (iteraciones completas a través de todos los datos de entrenamiento) hasta que la red neuronal converge y la pérdida se minimiza.",
          content: "plain"
        }
      ]
    }
  ]
};

