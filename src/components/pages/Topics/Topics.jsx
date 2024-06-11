import { useState, useEffect } from 'react';
import OL from '../../partials/OL/OLTag';
import UL from '../../partials/UL/ULTag';
import PTag from '../../partials/P/PTag';
import H4 from '../../partials/H4/H4Tag';
import H3 from '../../partials/H3/H3Tag';
import H2 from '../../partials/H2/H2Tag';
import Figure from '../../partials/Figure/Figure';
import classes from  "../../../assets/data/IAChatGPT.js";
import NavButtons from '../../partials/Navbuttons/NavButtons';
import NotFound from '../../partials/NotFound/NotFound';

function Topics(params) {
  const classID  = parseInt(params.match.params.classId);
  const topicID = parseInt(params.match.params.topicId);
  const [classData, setClassData] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState({});
  const [title, setTitle] = useState([]);

  useEffect(() => {
    let newData = classes.filter(item => item.class === classID);
    (newData.length === 0) ?
      setClassData([]) :
      setClassData(newData[0].classData);

      let pageData = {
        class: classID, 
        topic: topicID, 
        topics: newData[0].topics,
        classes: classes.length,
        lastClassLastTopic: classID > 1 ? classes.filter(item => item.class === classID-1)[0].topics : 0,
      };

      setPage(pageData);

      newData.length > 0 ? setTitle(newData[0].title.info) : null;
  }, [classID, topicID ]);

  useEffect(() => {
    let newData = classData.filter(item => item.topic == topicID);
    (newData.length === 0) ?
      setData([]) :
      setData(newData[0].topicData);
  }, [classData, topicID]);

  return (
    <article>
      <H2  Data={title} />
      {
        data.length == 0 ? <NotFound /> :
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
      {
        data.length == 0 ? null : 
        <NavButtons Page={page} />
      }
    </article>
  );
}

export default Topics;