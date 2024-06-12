import {Link} from "react-router-dom";
import coursesIndex from '../../../assets/data/CoursesIndex'
import Logo from "../../../assets/images/icon.png";

function Home() {

  return (
    <article className="home">
      <figure >
        <img src={Logo} alt="Logo de UPGL" className="logo" />
      </figure>
        <h1 className="UPGL" >Universidad Popular General Levalle</h1>
        <h2>Seleccione su curso</h2>
        <section>
        {
          coursesIndex.map((item, index) => (
            <h3 key={index}>
              <Link to={item.links.link} key={index}>
                {item.links.title}
              </Link>
            </h3>
          ))
        }
        </section>
    </article>
  )
}

export default Home