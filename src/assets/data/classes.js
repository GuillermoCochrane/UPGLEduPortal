let classes =  [
    {
      id: 1,
      classData: [
                {
                  type: "h2",
                  info: ["Inteligencia Artificial, conceptos fundamentales"]
                },
                {
                  type: "h3",
                  info: ["¿Qué es la inteligencia?"]
                },
                {
                  type: "p",
                  info: ["La inteligencia se ha definido de muchas maneras, incluyendo: la capacidad de lógica, comprensión, autoconciencia, aprendizaje, conocimiento emocional, razonamiento, planificación, creatividad, pensamiento crítico y resolución de problemas. En términos más generales, se puede describir como la capacidad de percibir o inferir información, y retenerla como conocimiento para aplicarlo a comportamientos adaptativos dentro de un entorno o contexto."]
                },
                {
                  type: "ul", 
                  info: [
                    {
                      type: "li",
                      info: [{text: "Ch. Spearman: ", bold: true},"Capacidad unitaria para resolver problemas y crear nuevos contenidos."]
                    },
                    {
                      type: "li",
                      info: [{text: "L. G. Humphreys: ", bold: true}, "Conjunto de habilidades para adaptarse al entorno."]
                    },
                    { 
                      type: "li",        
                      info: [{text: "L. S. Gottfredson: ", bold: true}, " Capacidad mental general que incluye la habilidad de razonar, planificar, resolver problemas, pensar en abstracto, comprender ideas complejas, aprender rápido y aprender de la experiencia, que es más que una destreza académica o del aprendizaje por medio de libros."]
                    }
                  ] 
                },
                {
                  type: "h3",
                  info: ["¿Qué es la inteligencia artificial?"]
                },
                {
                  type: "p",
                  info: ["La Inteligencia Artificial se refiere a la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana. Esto incluye el aprendizaje, el razonamiento, la percepción, la comprensión del lenguaje natural y la toma de decisiones. En esencia, la IA busca imitar las capacidades cognitivas humanas utilizando algoritmos y datos."]
                },  
                {
                  type: "ol", 
                  info: [
                    {
                      type: "li",
                      info: [{text:"Aprendizaje Automático (Machine Learning): ", bold: true}, "Es una subdisciplina de la IA que se centra en el desarrollo de algoritmos que permiten a las máquinas aprender patrones y tomar decisiones basadas en datos sin una programación explícita."]
                    },
                    {
                      type: "li",
                      info: [{text: "Redes Neuronales Artificiales: ", bold: true}, "Inspiradas en la estructura del cerebro humano, las redes neuronales artificiales son modelos computacionales que pueden aprender y realizar tareas complejas como reconocimiento de patrones y procesamiento de lenguaje natural."]
                    },        
                  ]
                },
                {
                  type: "h3",
                  info: ["Diferencias entre Inteligencia Artificial e Inteligencia Natural"]
                },
                {
                  type: "p",
                  info: ["La principal diferencia entre la inteligencia artificial y la inteligencia natural radica en su origen y naturaleza."]
                },  
                {
                  type: "h3",
                  info: ["Origen"]
                },  
                {
                  type: "ul", 
                  info: [
                    {
                      type: "li",
                      info: [{text: "Inteligencia Artificial: ", bold: true}, "Es creada por humanos a través del diseño y la programación de sistemas informáticos."]
                    },
                    {
                      type: "li",
                      info: [{text: "Inteligencia Natural: ", bold: true}, "Es inherente a los seres vivos, especialmente a los humanos, y se desarrolla a través de procesos biológicos y experiencia."]
                    },
                  ]
                },
                {
                  type: "h3",
                  info: ["Naturaleza"]
                },  
                {
                  type: "ul", 
                  info: [
                    {
                      type: "li",
                      info: [{text: "Inteligencia Artificial: ", bold: true}, "Se basa en algoritmos y datos para imitar el comportamiento humano en tareas específicas. A menudo es especializada y puede carecer de comprensión profunda o conciencia."]
                    },
                    {
                      type: "li",
                      info: [{text: "Inteligencia Natural: ", bold: true}, "Es inherentemente compleja y abarca una amplia gama de habilidades cognitivas, emocionales y sociales. Se desarrolla a lo largo del tiempo a través de la interacción con el entorno y la experiencia."]
                    },
                  ]
                }
          ]
    },
    {
      id: 2,
      classData: [
        {
          type: "h2",
          info: ["Historia de la inteligencia artificial. Inicio y actualidad Artificial, conceptos fundamentales"]
        },
        {
          type: "h3",
          info: ["Decada de 1950"]
        },
        {
          type: "p",
          info: ["Alan Turing, pionero en ciencias de la computación, propuso en ", {text:"1950", bold: true}, " una prueba para determinar si una máquina puede exhibir un comportamiento inteligente equivalente al de un ser humano. Esta prueba, conocida como la Prueba de Turing, sigue siendo un concepto fundamental en el campo de la IA y ha estimulado debates sobre la naturaleza de la inteligencia y la capacidad de las máquinas para replicarla."]
        },
        {
          type: "p",
          info: ["En ", {text:"1952", bold: true}, ", Arthur Samuel creó un software capaz de aprender a jugar al ajedrez de forma autónoma."]
        },
        {
          type: "p",
          info: ['El término "inteligencia artificial" fue acuñado por John McCarthy en ", {text:"1956", bold: true}, " durante una conferencia en Dartmouth College. Este evento marcó el inicio oficial del campo de la IA y reunió a destacados científicos de diversas disciplinas para explorar el potencial de las máquinas para exhibir comportamientos inteligentes.']
        },
        {
          type: "p",
          info: ["En ", {text:"1959", bold: true}, " , Arthur Samuel acuñó el término Machine Learning mientras trabajaba en IBM. Por su parte, John McCarthy y Marvin Minsky fundaron el MIT Artificial Intelligence Project."]
        },
        { 
          type: "h3",
          info: ["Década de 1960-1970"]
        },
        {
          type: "p",    
          info: ["En ", {text:"1963", bold: true}, ", John McCarthy también creó el «AI Lab» en la Universidad de Stanford."]
        },
        {
          type: "p",
          info: ["En ", {text:"1966", bold: true}, ", el informe estadounidense ALPAC puso de manifiesto la falta de avances en la investigación de la traducción automática destinada a traducir simultáneamente la lengua rusa en el contexto de la Guerra Fría."]     
        },
        {
          type: "p",
          info: ["Muchos proyectos financiados por el gobierno estadounidense fueron cancelados."]
        },
        {
          type: "p",
          info: ["Del mismo modo, en ", {text:"1973", bold: true}, ", el gobierno británico publicó su informe Lighthill en el que destacaba las decepciones de la investigación en IA. Una vez más, los proyectos de investigación fueron reducidos por los recortes presupuestarios. Este periodo de duda duró hasta 1980, y ahora se denomina el ", {text:"primer invierno(crisis) de la IA.", bold: true}]
        },  
        {
          type: "h3",
          info: ["Década de 1980"]
        },
        {
          type: "p",
          info: ["La década de ", {text:"1980", bold: true}, " presenció un auge en la investigación y aplicación de la IA en áreas como el procesamiento del lenguaje natural, la visión por computadora y los sistemas expertos. Los sistemas expertos, en particular, se convirtieron en una aplicación popular de la IA en campos como la medicina, la ingeniería y la gestión empresarial."]
        },
        {
          type: "p",
          info: ["En ", {text:"1985", bold: true}, " se desarrolla el sistema DENDRAL, que utiliza técnicas de inteligencia artificial para identificar estructuras moleculares desconocidas."]
        },
        {
          type: "p",
          info: ["En ", {text:"1987", bold: true}, " Martin Fischles y Oscar Firschein describieron los atributos de un agente inteligente. Al intentar describir con un mayor ámbito (no solo la comunicación) los atributos de un agente inteligente, la IA se ha expandido a muchas áreas que han creado ramas de investigación enormes y diferenciadas. Dichos atributos del agente inteligente son:"]
        },
        {
          type: "ol",
          info: [  
            {
              type: "li",
              info: ["Tiene actitudes mentales tales como creencias e intenciones."]
            },
            {
              type: "li",
              info: ["Tiene la capacidad de obtener conocimiento, es decir, aprender."]
            },
            {
              type: "li",
              info: ["Puede resolver problemas, incluso descomponiendo problemas complejos en otros más simples."]
            },
            {
              type: "li",
              info: ["Capaz de realizar operaciones más complejas."]
            },
            {
              type: "li",
              info: ["Entiende."]
            },
            {
              type: "li",
              info: ["Planifica."]
            },
            {
              type: "li",
              info: ["Conoce los límites de sus propias habilidades y conocimientos."]
            },
            {
              type: "li",
              info: ["Puede distinguir a pesar de la similitud de las situaciones."]
            },
            {
              type: "li",
              info: ["Puede ser original, creando incluso nuevos conceptos o ideas, y hasta utilizando analogías."]
            },
            {
              type: "li",
              info: ["Puede generalizar."]
            },
            {
              type: "li",
              info: ["Puede percibir y modelar el mundo exterior."]
            },
            {
              type: "li",
              info: ["Puede entender y utilizar el lenguaje y sus símbolos."] 
            }
          ]
        },
        {
          type: "p",
          info: ["Este fue el ", {text:"segundo invierno(crisis) de la IA", bold: true}, ". Las empresas perdieron el interés por los sistemas expertos. Los gobiernos de Estados Unidos y Japón abandonaron sus proyectos de investigación y se gastaron miles de millones de dólares para nada."]
        },
        {
          type: "h3",
          info: ["Década de 2000"]
        },
        {
          type: "p",
          info: ['En la década de ', {text:"2000", bold: true}, ', el surgimiento del concepto de "Big Data" impulsó el desarrollo de técnicas de IA capaces de manejar y procesar grandes volúmenes de datos. Además, se produjeron avances significativos en el campo del aprendizaje profundo, una rama del aprendizaje automático que utiliza redes neuronales profundas para aprender representaciones de datos de alto nivel. Estos avances permitieron a los sistemas de IA realizar tareas más complejas y sofisticadas, como el reconocimiento de imágenes, la traducción automática y la conducción autónoma.']
        },
        {
          type: "h3",
          info: ["Década de 2010"]
        },
        {
          type: "p",
          info: ["La década de ", {text:"2010", bold: true}, " fue testigo de un rápido avance en la adopción de la inteligencia artificial en una variedad de aplicaciones prácticas. Los algoritmos de IA se utilizaron cada vez más en áreas como la atención médica, la banca, el comercio electrónico y la publicidad en línea. Además, hubo avances significativos en el desarrollo de asistentes virtuales y sistemas de reconocimiento de voz, como Siri de Apple, Alexa de Amazon y Google Assistant, que se convirtieron en parte integral de la vida cotidiana de millones de personas en todo el mundo."]
        },
        {
          type: "p",
          info: ["En ", {text:"2012", bold: true}, ", Andrew Ng alimentó una red neuronal con 10 millones de vídeos de YouTube como serie de datos de entrenamiento. Gracias al Deep Learning, esta red neuronal aprendió a reconocer un gato sin que se le enseñara lo que es un gato."]
        },
        {
          type: "p",
          info: ["En ", {text:"2014", bold: true}, " un ordenador ha logrado superar con éxito el test de Turing, haciendo creer a un interrogador que es una persona quien responde sus preguntas en un certamen organizado en Londres por la Universidad de Reading."]
        },
        {
          type: "p",
          info: ["En ", {text:"2016", bold: true}, " un ordenador de Google venció al campeón mundial del juego milenario “Go”. Un programa informático desarrollado por la compañía británica Google DeepMind consiguió vencer, por primera vez, a un campeón profesional del milenario juego de origen oriental Go."]
        },
        {
          type: "figure",
          info: [{img: "/images/timeline.png", alt: "Linea de tiempo de la historia de la IA"}]
        },
        {
          type: "h3",
          info: ["Actualidad"]
        },
        {
          type: "p",
          info: ["La década de ", {text:"2020", bold: true}, " ha sido testigo de una mayor integración de la inteligencia artificial en la sociedad, impulsada por la transformación digital en diversos sectores. Los avances en el procesamiento del lenguaje natural, la visión por computadora y el aprendizaje automático han llevado a la creación de sistemas de IA cada vez más sofisticados y autónomos. Sin embargo, también ha habido un mayor énfasis en la ética y la responsabilidad en el desarrollo y uso de la IA, especialmente en áreas sensibles como la privacidad de los datos, el sesgo algorítmico y la toma de decisiones automatizada."]
        }
      ]
    },
    {
      id: 3,
      classData: [
        {
          type: "h2",
          info: ["Machine Learning y Redes Neuronales"]
        },
        {
          type: "h3",
          info: ["¿Qué es y cómo funciona el Machine Learning?"]
        },
        {
          type: "p",
          info: ["El Machine Learning es una rama de la inteligencia artificial que se enfoca en el desarrollo de algoritmos y modelos que permiten a las computadoras aprender de los datos y tomar decisiones sin ser programadas explícitamente para realizar una tarea específica. En lugar de seguir reglas predefinidas, los algoritmos de Machine Learning utilizan datos para aprender patrones y tomar decisiones informadas."]
        },
        {
          type: "p",
          info: ["El proceso básico de Machine Learning consta de varias etapas:"]
        },
        {
          type: "ol",
          info: [
            {
              type: "li",
              info: [{text: "Adquisición de Datos: ", bold: true}, "En esta etapa, se recopilan y preparan los datos necesarios para el entrenamiento del modelo. Estos datos pueden provenir de diversas fuentes, como bases de datos, sensores, archivos CSV, etc."]
            },
            {
              type: "li",
              info: [{text: "Preprocesamiento de Datos: ", bold: true}, "Los datos se preprocesan para eliminar ruido, manejar valores faltantes y convertirlos en un formato adecuado para el modelo de Machine Learning."]
            },
            {
              type: "li",
              info: [{text: "Selección de Características: ", bold: true}, "Se seleccionan las características relevantes que se utilizarán para entrenar el modelo. Esto puede implicar la extracción de características útiles de los datos brutos."]
            },
            {
              type: "li",
              info: [{text: "Entrenamiento del Modelo: ", bold: true}, "En esta etapa, el modelo de Machine Learning se entrena utilizando un algoritmo específico y los datos de entrenamiento. Durante el entrenamiento, el modelo ajusta sus parámetros para minimizar el error en la predicción."]
            },
            {
              type: "li",
              info: [{text: "Validación y Evaluación: ", bold: true}, "Una vez que el modelo está entrenado, se evalúa su rendimiento utilizando datos de validación o prueba. Se calculan métricas de rendimiento para determinar la precisión y la eficacia del modelo."]
            },
            {
              type: "li",
              info: [{text: "Ajuste del Modelo: ", bold: true},"Si es necesario, se realizan ajustes adicionales al modelo para mejorar su rendimiento, como la optimización de hiperparámetros o la selección de un algoritmo diferente."]
            },
            {
              type: "li",
              info: [{text: "Despliegue y Uso: ", bold: true}, "Finalmente, el modelo entrenado se despliega en un entorno de producción y se utiliza para hacer predicciones o tomar decisiones en tiempo real."]
            }
          ]
        },
        {
          type: "h3",
          info: ["¿Qué son y cómo funcionan las Redes Neuronales?"]
        },
        {
          type: "p",
          info: ["Las redes neuronales son un conjunto de algoritmos y modelos inspirados en la estructura y funcionamiento del cerebro humano. Están diseñadas para reconocer patrones y procesar información de manera similar a como lo hacen las neuronas en el cerebro. Se componen de capas de nodos interconectados, cada uno de los cuales realiza operaciones matemáticas en los datos de entrada y transfiere la información a través de la red."]
        },
        {
          type: "h4",
          info: ["Elementos clave de las redes neuronales:"]
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [{text: "Neuronas (nodos): ", bold: true}, "Son unidades básicas que reciben información, realizan cálculos y transmiten resultados a nodos posteriores. Cada neurona está asociada con una función de activación que determina su salida en función de la información que recibe."]
            },
            {
              type: "li",
              info: [{text: "Pesos y conexiones: ", bold: true},"Las conexiones entre las neuronas tienen pesos asignados. Estos pesos representan la importancia o la fuerza de la conexión entre dos nodos y se ajustan durante el entrenamiento de la red para mejorar su capacidad predictiva."]
            },
            {
              type: "li",
              info: [{text: "CAPAS: ", bold: true}, "Las redes neuronales se componen de múltiples capas: "]
            },
            {
              type: "li",
              info: [{text: "Ver Como rendederizar el ul anidado", bold: true}]
            }  
          ]
        },
        {
          type: "h4",
          info: ["El funcionamiento de una red neuronal se basa en la propagación hacia adelante (forward propagation) y la propagación hacia atrás (backpropagation):"] 
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [{text: "Propagación hacia Adelante: ", bold: true}, "Durante esta etapa, los datos de entrada se introducen en la red neuronal a través de la capa de entrada. Los datos se propagan a través de las capas ocultas, donde se realizan cálculos ponderados y se aplican funciones de activación para generar una salida."]
            },
            {
              type: "li",
              info: [{text: "Backpropagation: ", bold: true}, "Una vez que se genera la salida, se compara con la salida deseada para calcular el error de predicción. Este error se propaga hacia atrás a través de la red, ajustando los pesos de las conexiones para minimizar el error."]
            }
          ]
        },
        {
          type: "h4",
          info: ["El entrenamiento de una red neuronal implica los siguientes pasos:"]
        },
        {
          type: "ul",
          info: [
            {
              type: "li",
              info: [{text: "Inicialización de pesos: ", bold: true}, "Se asignan valores aleatorios a los pesos y sesgos de las conexiones entre las neuronas."]
            },
            {
              type: "li",
              info: [{text: "Propagación hacia adelante (Forward Propagation): ", bold: true},"Los datos de entrada se pasan a través de la red neuronal, capa por capa, y se calculan las salidas de cada neurona utilizando una función de activación."]
            },
            {
              type: "li",
              info: [{text: "Cálculo de la función de pérdida (Loss Function): ", bold: true}, "Se compara la salida predicha de la red con las respuestas reales, calculando una medida de la discrepancia entre ellas (pérdida o error)."]
            },
            {
              type: "li", 
              info: [{text: "Propagación hacia atrás (Backward Propagation): ", bold: true}, "Se utiliza un algoritmo llamado descenso de gradiente para calcular la derivada de la función de pérdida con respecto a cada peso y sesgo en la red. Estas derivadas indican cómo cambiar los pesos y sesgos para reducir la pérdida."]
            },
            {
              type: "li",
              info: [{text: "Actualización de pesos (Weight Update): ", bold: true}, "Se ajustan los pesos y sesgos en la dirección que reduce la pérdida utilizando un método de optimización, como el descenso de gradiente estocástico (SGD) o algoritmos más avanzados como Adam o RMSprop."]
            },
            {
              type: "li",
              info: [{text: "Repetición del proceso: ", bold: true}, "Se repiten los pasos 2 a 5 para cada lote de datos de entrenamiento durante múltiples épocas (iteraciones completas a través de todos los datos de entrenamiento) hasta que la red neuronal converge y la pérdida se minimiza."]
            }
          ]
        },
      ]
    }
  ]

export default classes;