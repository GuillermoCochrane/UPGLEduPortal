import {Link} from "react-router-dom";
import coursesIndex from '../../../assets/data/CoursesIndex'
import Logo from "../../../assets/images/logoUPGL.png";

function Home() {

  return (
    <article className="home">
        <section>
          <img src={Logo} alt="Logo de UPGL" className="logo" />
          <h1 className="UPGL" >Universidad Popular General Levalle</h1>
        </section>
        <section className="course-index">
          <h2>Seleccione su curso</h2>
          <nav>
            {
              coursesIndex.map((item, index) => (
                <h3 key={index}>
                  <Link to={item.links.link} key={index}>
                    {item.links.title}
                  </Link>
                </h3>
              ))
            }
          </nav>
        </section>
    </article>
  )
}

export default Home