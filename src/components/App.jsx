import { useRef } from 'react'
import { Route , Switch, Link } from "react-router-dom";
import Home from "./Home/Home"
import Class from "./Class/Class"
import NavIndex from "./partials/NavBarIndex/NavIndex"
import index from "../assets/data/index"
import Error404 from "./Error404/Error404"

//import NabBarIndex from "./partials/NavBarIndex/NabBarIndex"

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
              <NavIndex linkData={item} key={index} />
            ))
          }
        </ol>
        <Link to="/">
          <button >Volver al inicio</button>
        </Link> 
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class/:id" exact component={Class} />
        <Route component={Error404} />
      </Switch>
    </main>
    
    </>
  )
}

export default App
