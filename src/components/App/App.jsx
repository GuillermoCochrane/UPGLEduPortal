//import { useState } from 'react'
import Home from "../Home/Home"
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
          <li>
            <details>
              <summary>Inteligencia Artificial, conceptos fundamentales</summary>
              <ol>
                <li><a href="/1#inteligencia">¿Qué es la inteligencia?</a></li>
                <li><a href="/1#IA">¿Qué es la inteligencia artificial?</a></li>
                <li><a href="/1#diferencias">Diferencias entre Inteligencia Artificial e Inteligencia Natural</a></li>
                <li><a href="/1#origen">Origen</a></li>
                <li><a href="/1#naturaleza">Naturaleza</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Historia de la inteligencia artificial. Inicio y actualidad</summary>
              <ol>
                <li><a href="/2#50s">Década de 1950</a></li>
                <li><a href="/2#60s">Década de 1960-1970</a></li>
                <li><a href="/2#80s">Década de 1980</a></li>
                <li><a href="/2#90s">Década de 1990</a></li>
                <li><a href="/2#00s">Década de 2000</a></li>
                <li><a href="/2#10s">Década de 2010</a></li>
                <li><a href="/2#now">Actualidad</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Machine Learning y Redes Neuronales</summary>
              <ol>
                <li><a href="/3#learnign">¿Qué es y cómo funciona el Machine Learning?</a></li>
                <li><a href="/3#redes">¿Qué son y cómo funcionan las Redes Neuronales?</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>ChatGPT. Origen, Evolución y Diferencia entre versiones</summary>
              <ol>
                <li><a href="/4#origen">Origen</a></li>
                <li><a href="/4#versiones">Todas sus versiones</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Prompt definición y conceptos</summary>
              <ol>
                <li><a href="/5#definicion">¿Qué es un Prompt?</a></li>
                <li><a href="/5#componentes">Componentes de un Prompt</a></li>
                <li><a href="/5#aplicacion">Aplicación de Prompt en tareas especificas</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Diseño Efectivo de Prompts: Creación de Instrucciones claras y precisas.</summary>
              <ol>
                <li><a href="/6#diseño">Diseño</a></li>
                <li><a href="/6#instrucciones">¿Cómo dar instrucciones claras y precisas?</a></li>
                <li><a href="/6#ejemplos">Ejemplos y mejores practicas</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Optimización y Ajuste de Prompts en Ingeniería de Prompt</summary>
              <ol>
                <li><a href="/7#intro">Introducción</a></li>
                <li><a href="/7#pasos">Pasos para la optimización de un Prompt</a></li>
              </ol>
            </details>
          </li>
          <li>
            <details >
              <summary>Formatos de salida</summary>
              <ol>
                <li><a href="/8#formatos">Formatos de salida</a></li>
                <li><a href="/8#evaluación">Evaluación de Prompts</a></li>
              </ol>
            </details>
          </li>
          <li><a href="/9">Estrategias para mantener conversaciones con ChatGPT</a></li>
          <li><a href="/10">¿En qué casos usar ChatGPT?</a></li>
        </ol>
        <a href="/"><button>Volver al inicio</button></a>
      </nav>
      <Home />
    </main>
    
    </>
  )
}

export default App
