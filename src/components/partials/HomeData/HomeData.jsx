import PropTypes  from "prop-types";
const data = {
    ia: {
        title: "Curso de Inteligencia artificial y ChatGPT",
        p1: "El objetivo de esta Curso aprender un poco más sobre Inteligencia Argentina y, sobre todo, el buen uso de ChatGPT. En la misma no solo encontrarán la historia completa de la Inteligencia Artificial y ChatGPT, sino también cómo mejorar la redacción de los Prompts.",
        p2: "La idea principal del curso es conocer la historia de la inteligencia artificial, como funciona, como fue creada y aprender a comunicarte de manera correcta con ChatGPT.",
    },
    python: {
        title: "Curso de Python",
        p1: "Bienvenidos al curso de Introducción a la Programación con Python. En este curso, daremos nuestros primeros pasos en el fascinante mundo de la programación, aprendiendo los conceptos básicos, las herramientas fundamentales y las técnicas esenciales que nos permitirán resolver problemas y automatizar tareas. Python, un lenguaje versátil y amigable para principiantes, será nuestro compañero de viaje en esta aventura. Prepárate para desarrollar tus habilidades lógicas y creativas mientras construimos programas desde cero.",
        p2: "La idea principal del curso es conocer los fundamentos de la programación, que se sientan cómodos escribiendo código y desarrollen la lógica necesaria para crear sus propios programas."
    },
    frontend: {
        title: "Curso de Frontend",
        p1: "En este curso aprenderás a crear interfaces web modernas utilizando HTML, CSS y JavaScript. Partiendo desde los fundamentos hasta técnicas avanzadas, cubriremos todo lo necesario para construir sitios responsivos, accesibles y con interacciones dinámicas. Además, exploraremos Bootstrap para agilizar el desarrollo de interfaces profesionales.",
        p2: "La meta del curso es que adquieras las habilidades prácticas para convertir diseños en código funcional, entendiendo cómo estructurar, estilizar y añadir comportamiento interactivo a tus proyectos web."
    }
}
function HomeDataAI({course}) {
    return (
        <>
        <h2>{course == "IA" && data.ia.title }
            {course == "Python" && data.python.title }
            {course == "Frontend" && data.frontend.title }
        </h2>
        <p>
            {course == "IA" && data.ia.p1 }
            {course == "Python" && data.python.p1 }
            {course == "Frontend" && data.frontend.p1 }
        </p>
        <br/>
        <p>
            {course == "IA" && data.ia.p2 }
            {course == "Python" && data.python.p2 }
            {course == "Frontend" && data.frontend.p2 }
        </p>
        <hr />
        </>
    )
}

HomeDataAI.propTypes = {
    course: PropTypes.string.isRequired
}
export default HomeDataAI;