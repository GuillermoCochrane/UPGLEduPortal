import { useRef } from 'react'
import { Route , Switch, Link } from "react-router-dom";
//import Home from "./pages/Home/Home"
//import Class from "./pages/Class/Class"
//import NavIndex from "./partials/NavBarIndex/NavIndex"
import index from "../assets/data/IAChatGPTIndex"
import Error404 from "./pages/Error404/Error404"
import ClassIndex from "./pages/ClassIndex/ClassIndex"
import Topics from './pages/Topics/Topics';
import NavBarIndex from "./partials/NavBarIndex/NabBarIndex"

function App() {

  const navBar = useRef(null);

  const handleClick = () => {
    navBar.current.classList.toggle("hidden");
  }

  return (
    <>
    <header>
        <button onClick={handleClick} id="index">Índice</button>
        <h1>Curso de ChatGPT e Inteligencia artificial</h1>
    </header>
    <main>
      <nav className='sumario' ref={navBar}>
        <ol>
          {
            index.map((item, index) => (
              <NavBarIndex data={item} key={index} />
            ))
          }
        </ol>
        <Link to="/">
          <button >Volver al inicio</button>
        </Link> 
      </nav>
      <Switch>
        <Route path="/" exact component={ClassIndex} />
        <Route path="/class" exact component={ClassIndex} />
        <Route path="/class/:classId" exact component={ClassIndex} />
        <Route path="/class/:classId/:topicId" exact component={Topics} />
        <Route component={Error404} />
      </Switch>
    </main>
    
    </>
  )
}

export default App
