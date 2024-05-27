//import { useState } from 'react'
import { Route , Switch, Link } from "react-router-dom";
import Home from "../Home/Home"
import Class1 from "../Class1/Class1"
import NabBarIndex from "../partials/NavBarIndex/NabBarIndex"
let data = [
  {
    summary: "Inteligencia Artificial, conceptos fundamentales",
    links: [
      {
        title: "¿Qué es la inteligencia?",
        link: "/class1"
      },
      {
        title: "¿Qué es la inteligencia artificial?",
        link: "/class1"
      },
      {
        title: "Diferencias entre Inteligencia Artificial e Inteligencia Natural",
        link: "/class1"
      },
      {
        title: "Origen",
        link: "/class1"
      },
      {
        title: "Naturaleza",
        link: "/class1"
      }
    ]
  },
  { 
    summary: "Historia de la inteligencia artificial. Inicio y actualidad",
    links: [
      {
        title: "Década de 1950",
        link: "/class2"
      },
      {
        title: "Década de 1960-1970",
        link: "/class2"
      },
      {
        title: "Década de 1980",
        link: "/class2"
      },
      {
        title: "Década de 1990",
        link: "/class2"
      },
      {
        title: "Década de 2000",
        link: "/class2"
      },
      {
        title: "Década de 2010",
        link: "/class2"
      },
      {
        title: "Actualidad",
        link: "/class2"
      }
    ]   
  },
  {
    summary: "Machine Learning y Redes Neuronales",
    links: [
      {
        title: "¿Qué es y cómo funciona el Machine Learning?",
        link: "/class3"
      },
      {
        title: "¿Qué son y cómo funcionan las Redes Neuronales?",
        link: "/class3"
      }
    ]
  },
  {
    summary: "ChatGPT. Origen, Evolución y Diferencia entre versiones",
    links: [
      {
        title: "Origen",
        link: "/class4"
      },
      {
        title: "Todas sus versiones",
        link: "/class4"
      }
    ]
  },
  {
    summary: "Prompt definición y conceptos",
    links: [
      {
        title: "¿Qué es un Prompt?",
        link: "/class5"
      },
      {
        title: "Componentes de un Prompt",
        link: "/class5"
      },
      {
        title: "Aplicación de Prompt en tareas especificas",
        link: "/class5"
      }
    ]
  },
  {
    summary: "Diseño Efectivo de Prompts: Creación de Instrucciones claras y precisas.",
    links: [
      {
        title: "Diseño",
        link: "/class6"
      },
      {
        title: "¿Cómo dar instrucciones claras y precisas?",
        link: "/class6"
      },
      {
        title: "Ejemplos y mejores practicas",
        link: "/class6"
      }
    ]
  },
  {
    summary: "Optimización y Ajuste de Prompts en Ingeniería de Prompt",
    links: [
      {
        title: "Introducción",
        link: "/class7"
      },
      {
        title: "Pasos para la optimización de un Prompt",
        link: "/class7"
      }
    ]
  },
  {
    summary: "Formatos de salida",
    links: [
      {
        title: "Formatos de salida",
        link: "/class8"
      },
      {
        title: "Evaluación de Prompts",
        link: "/class8"
      }
    ]
  },
  {
    summary: "Estrategias para mantener conversaciones con ChatGPT",
    links: [
      {
        title: "Estrategias para mantener conversaciones con ChatGPT",
        link: "/class9"
      }
    ]
  },
  {
    summary: "¿En qué casos usar ChatGPT?",
    links: [
      {
        title: "¿En qué casos usar ChatGPT?",
        link: "/class10"
      }
    ]
  }   
]
function App() {

  return (
    <>
    <header>
        <button id="index">Índice</button>
        <h1>Curso de ChatGPT e Inteligencia artificial</h1>
    </header>
    <main>
      <nav className='sumario'>
        <ol>
          {
            data.map((item, index) => (
              <NabBarIndex data={item} key={index} />
            ))
          }
        </ol>
        <Link to="/">
          <button>Volver al inicio</button>
        </Link> 
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class1" exact component={Class1} />
      </Switch>
    </main>
    
    </>
  )
}

export default App
