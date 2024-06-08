import { useState, useEffect } from 'react';
import OL from '../partials/OL/OLTag';
import UL from '../partials/UL/ULTag';
import PTag from '../partials/P/PTag';
import H4 from '../partials/H4/H4Tag';
import H3 from '../partials/H3/H3Tag';
import H2 from '../partials/H2/H2Tag';
import Figure from '../partials/Figure/Figure';
import classes from '../../assets/data/classes';
import NavButtons from '../partials/Navbuttons/NavButtons';

function Class(params) {
  const  id  = parseInt(params.match.params.id);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let newData = classes.filter(item => item.id == id);
    (newData.length === 0) ?
      setData([]) :
      setData(newData[0].classData);
      setPage(id);
  }, [id]);

  return (
    <article>
      {
        data.length == 0 ? <h3>No se encontró la clase</h3> : 
        data.map((item, index) => (
          item.type === "h2" ? <H2 key={index} Data={item.info} /> :
          item.type === "figure" ? <Figure key={index} Data={item.info} /> :
          item.type === "h3" ? <H3 key={index}  Data={item.info} /> :
          item.type === "h4" ? <H4 key={index} Data={item.info} /> :
          item.type === "p" ? <PTag key={index} Data={item.info} /> :
          item.type === "ul" ? <UL key={index} Data={item.info} /> :
          item.type === "ol" ? <OL key={index} Data={item.info} /> : null
        ))
      }
      <NavButtons Page={page} LastPage={classes.length} />
    </article>
  );
}

export default Class;