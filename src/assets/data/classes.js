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
  ]

export default classes;